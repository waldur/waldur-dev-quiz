// Minimal YAML 1.2 emitter. The game ships no YAML dependency and only ever
// serialises plain JSON-shaped data, so a ~100 line writer is cheaper than a
// library. It is a writer only — nothing in the app parses YAML back.

export type YamlValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | YamlValue[]
  | { [key: string]: YamlValue }

const INDENT = '  '

// Plain (unquoted) scalars are the readable default, but only when the string
// can't be mistaken for something else by a parser. Emoji and accented text are
// legal plain scalars and this game's names are full of them, so anything above
// ASCII is allowed except the code points YAML reads as line or space breaks.
// \uD800-\uDFFF are the surrogate halves that make up emoji outside the BMP
const NON_ASCII = '\\u00A1-\\u2027\\u202A-\\uD7FF\\uD800-\\uDFFF\\uE000-\\uFEFE\\uFF00-\\uFFFD'
const PLAIN_SAFE = new RegExp(
  `^[A-Za-z0-9_./+${NON_ASCII}][A-Za-z0-9 _.,/'()+\\-:%!?=&[\\]{}<>*#|@$^~;"\\\\${NON_ASCII}]*$`,
)
const RESERVED = /^(true|false|yes|no|on|off|null|~|-?\d+(\.\d+)?([eE][-+]?\d+)?)$/i

function needsQuoting(str: string): boolean {
  if (str === '') return true
  if (!PLAIN_SAFE.test(str)) return true
  if (RESERVED.test(str)) return true
  if (str !== str.trim()) return true
  // ": " and " #" start a mapping value / comment mid-line
  if (str.includes(': ') || str.includes(' #')) return true
  if (str.endsWith(':')) return true
  return false
}

function quote(str: string): string {
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
  return `"${escaped}"`
}

// Multi-line text (code snippets, long explanations) stays readable as a literal
// block, but only when every line survives the round trip: trailing whitespace
// and carriage returns would be silently eaten, so those fall back to quoting.
function canUseBlock(str: string): boolean {
  if (!str.includes('\n')) return false
  if (str.includes('\r') || str.includes('\t')) return false
  const lines = str.split('\n')
  return lines.every(line => line === line.replace(/\s+$/, ''))
}

function blockScalar(str: string, indent: string): string {
  const body = str.replace(/\n+$/, '')
  const lines = body.split('\n').map(line => (line ? indent + line : ''))
  return `|-\n${lines.join('\n')}`
}

function scalar(value: string | number | boolean | null, indent: string): string {
  if (value === null) return 'null'
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : 'null'
  if (canUseBlock(value)) return blockScalar(value, indent + INDENT)
  return needsQuoting(value) ? quote(value) : value
}

function isContainer(value: YamlValue): boolean {
  if (Array.isArray(value)) return value.length > 0
  return typeof value === 'object' && value !== null && Object.keys(value).length > 0
}

function emit(value: YamlValue, indent: string): string {
  if (value === null || value === undefined) return 'null'

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]'
    return value
      .map(item => {
        if (isContainer(item)) {
          // A nested container's first line sits on the dash, the rest indents under it
          return `${indent}- ${emit(item, indent + INDENT).trimStart()}`
        }
        return `${indent}- ${emit(item, indent)}`
      })
      .join('\n')
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value).filter(([, v]) => v !== undefined)
    if (entries.length === 0) return '{}'
    return entries
      .map(([key, val]) => {
        const k = needsQuoting(key) ? quote(key) : key
        if (isContainer(val)) {
          return `${indent}${k}:\n${emit(val as YamlValue, indent + INDENT)}`
        }
        if (Array.isArray(val)) return `${indent}${k}: []`
        if (typeof val === 'object' && val !== null) return `${indent}${k}: {}`
        return `${indent}${k}: ${scalar(val ?? null, indent)}`
      })
      .join('\n')
  }

  return scalar(value, indent)
}

export function toYaml(value: YamlValue): string {
  return emit(value, '') + '\n'
}

// A shareable document: `---` marker plus optional `#` comment header lines.
export function toYamlDocument(value: YamlValue, headerLines: string[] = []): string {
  const header = headerLines.map(line => `# ${line}`).join('\n')
  return `---\n${header ? header + '\n' : ''}${toYaml(value)}`
}
