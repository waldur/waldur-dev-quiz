// Waldur Quest - Skills Data
// Adapted from Waldur Way skill system

const skillTiers = [
    { id: 'literacy', name: 'Universal Literacy', icon: '📚', color: '#6366f1', description: 'Minimum viable competence for any team member', order: 0 },
    { id: 'product', name: 'Product Knowledge', icon: '🎓', color: '#0ea5e9', description: 'Understanding Waldur and its verticals', order: 1 },
    { id: 'foundation', name: 'Technical Foundation', icon: '🧱', color: '#3b82f6', description: 'Technical skills for developers', order: 2 },
    { id: 'core', name: 'Core Platform', icon: '⚙️', color: '#8b5cf6', description: 'Waldur codebase expertise', order: 3 },
    { id: 'specialization', name: 'Specialization', icon: '🎯', color: '#f59e0b', description: 'Deep expertise areas', order: 4 }
];

const skillPackages = [
    { id: 'cloud-integrations', name: 'Cloud Integrations', icon: '☁️', color: '#3b82f6' },
    { id: 'hpc-research', name: 'HPC & Research', icon: '🔬', color: '#8b5cf6' },
    { id: 'platform-ops', name: 'Platform Operations', icon: '🚀', color: '#06b6d4' },
    { id: 'identity-security', name: 'Identity & Security', icon: '🔐', color: '#ef4444' },
    { id: 'user-experience', name: 'User Experience', icon: '🎨', color: '#ec4899' }
];

const skills = [
    // LITERACY TIER (11 skills)
    { id: 'l-cli', name: 'Command Line Basics', tier: 'literacy', description: 'Navigate filesystem, run scripts, read logs' },
    { id: 'l-git-basics', name: 'Git Essentials', tier: 'literacy', description: 'Clone, commit, push, create branches, PRs' },
    { id: 'l-containers-101', name: 'Container Concepts', tier: 'literacy', description: 'Immutability, logs, restart policies' },
    { id: 'l-k8s-concepts', name: 'Kubernetes Overview', tier: 'literacy', description: 'Pods vs deployments, architecture basics' },
    { id: 'l-waldur-local', name: 'Waldur Local Setup', tier: 'literacy', description: 'Run Waldur with docker-compose' },
    { id: 'l-workflow', name: 'Development Workflow', tier: 'literacy', description: 'Feature branches, Jira, code review' },
    { id: 'l-browser-apps', name: 'Web App Concepts', tier: 'literacy', description: 'APIs, SPA architecture, dev tools' },
    { id: 'l-iac-concepts', name: 'IaC Concepts', tier: 'literacy', description: 'Ansible/Terraform, declarative vs imperative' },
    { id: 'l-python', name: 'Python Basics', tier: 'literacy', description: 'Basic syntax, scripting, standard library' },
    { id: 'l-django', name: 'Django Basics', tier: 'literacy', description: 'Project structure, ORM, views' },
    { id: 'l-react', name: 'React Basics', tier: 'literacy', description: 'Components, JSX, hooks, props' },

    // PRODUCT TIER (6 skills)
    { id: 'p-waldur-basics', name: 'Waldur Overview', tier: 'product', description: 'Core concepts, multi-tenancy, marketplace' },
    { id: 'p-vertical-hpc', name: 'HPC/AI Vertical', tier: 'product', description: 'Slurm integration, allocations' },
    { id: 'p-vertical-gov', name: 'Government Vertical', tier: 'product', description: 'Compliance, audit workflows' },
    { id: 'p-vertical-fed', name: 'Federated Vertical', tier: 'product', description: 'Multi-org, consortiums, federation' },
    { id: 'p-use-cases', name: 'Customer Use Cases', tier: 'product', description: 'Real customer deployments' },
    { id: 'p-deployment-options', name: 'Deployment Patterns', tier: 'product', description: 'Cloud vs on-prem, air-gapped' },

    // FOUNDATION TIER - CS Fundamentals (10 skills)
    { id: 'f-data-structures', name: 'Data Structures', tier: 'foundation', category: 'cs', description: 'Trees, queues, graphs, hash tables' },
    { id: 'f-algorithms', name: 'Algorithms', tier: 'foundation', category: 'cs', description: 'Filtering, pagination, tree traversal' },
    { id: 'f-state-machines', name: 'State Machines', tier: 'foundation', category: 'cs', description: 'FSM concepts, django-fsm' },
    { id: 'f-design-patterns', name: 'Design Patterns', tier: 'foundation', category: 'cs', description: 'Mixin, Factory, Strategy, Observer' },
    { id: 'f-concurrency', name: 'Concurrency', tier: 'foundation', category: 'cs', description: 'Async patterns, race conditions' },
    { id: 'f-immutability', name: 'Immutability & FP', tier: 'foundation', category: 'cs', description: 'Immutable data, pure functions' },
    { id: 'f-type-systems', name: 'Type Systems', tier: 'foundation', category: 'cs', description: 'TypeScript, Python type hints' },
    { id: 'f-memory-perf', name: 'Memory & Performance', tier: 'foundation', category: 'cs', description: 'Memoization, lazy loading' },
    { id: 'f-api-principles', name: 'API Design Principles', tier: 'foundation', category: 'cs', description: 'REST semantics, HTTP methods' },
    { id: 'f-security-basics', name: 'Security Fundamentals', tier: 'foundation', category: 'cs', description: 'Auth concepts, OWASP basics' },

    // FOUNDATION TIER - Software Engineering (14 skills)
    { id: 'f-testing', name: 'Testing Fundamentals', tier: 'foundation', category: 'se', description: 'pytest, Vitest, RTL' },
    { id: 'f-debugging', name: 'Debugging & Profiling', tier: 'foundation', category: 'se', description: 'pdb, browser DevTools' },
    { id: 'f-git', name: 'Git Workflow', tier: 'foundation', category: 'se', description: 'Branching, rebasing, PRs' },
    { id: 'f-code-review', name: 'Code Review', tier: 'foundation', category: 'se', description: 'Review patterns, feedback' },
    { id: 'f-refactoring', name: 'Refactoring', tier: 'foundation', category: 'se', description: 'Safe refactoring, code smells' },
    { id: 'f-documentation', name: 'Technical Documentation', tier: 'foundation', category: 'se', description: 'API docs, architecture diagrams' },
    { id: 'f-build-systems', name: 'Build Systems', tier: 'foundation', category: 'se', description: 'Vite, pip, uv, bundling' },
    { id: 'f-ci-cd', name: 'CI/CD Pipelines', tier: 'foundation', category: 'se', description: 'GitHub Actions, GitLab CI' },
    { id: 'f-docker', name: 'Containers & Docker', tier: 'foundation', category: 'se', description: 'Dockerfile, docker-compose' },
    { id: 'f-linux', name: 'Linux Administration', tier: 'foundation', category: 'se', description: 'Shell, systemd, networking' },
    { id: 'f-sql', name: 'SQL & Databases', tier: 'foundation', category: 'se', description: 'Queries, indexes, transactions' },
    { id: 'f-ai-prompting', name: 'AI Prompting', tier: 'foundation', category: 'se', description: 'Prompt engineering, context management' },
    { id: 'f-ai-coding', name: 'AI-Assisted Coding', tier: 'foundation', category: 'se', description: 'Copilot, Cursor, Claude Code' },
    { id: 'f-ai-agents', name: 'AI Agent Setup', tier: 'foundation', category: 'se', description: 'MCP servers, agentic workflows' },

    // CORE PLATFORM TIER (15 skills)
    { id: 'c-waldur-arch', name: 'Waldur Architecture', tier: 'core', category: 'backend', description: 'Plugin system, structure apps' },
    { id: 'c-marketplace', name: 'Marketplace System', tier: 'core', category: 'backend', description: 'Offerings, resources, orders' },
    { id: 'c-permissions', name: 'Permission/RBAC', tier: 'core', category: 'backend', description: 'Roles, permissions, scopes' },
    { id: 'c-billing', name: 'Billing & Invoicing', tier: 'core', category: 'backend', description: 'Pricing, invoices, payments' },
    { id: 'c-quotas', name: 'Quota Management', tier: 'core', category: 'backend', description: 'Resource limits, enforcement' },
    { id: 'c-notifications', name: 'Notifications System', tier: 'core', category: 'backend', description: 'Events, webhooks, email' },
    { id: 'c-celery', name: 'Celery/Task Queue', tier: 'core', category: 'backend', description: 'Async tasks, scheduling' },
    { id: 'c-api-design', name: 'API v3 Design', tier: 'core', category: 'backend', description: 'Versioning, migration' },
    { id: 'c-multi-tenant', name: 'Multi-tenancy', tier: 'core', category: 'backend', description: 'Org hierarchy, isolation' },
    { id: 'c-reporting', name: 'Reporting & Analytics', tier: 'core', category: 'backend', description: 'Usage reports, dashboards' },
    { id: 'c-waldur-ui', name: 'Waldur UI Framework', tier: 'core', category: 'frontend', description: 'Component library, Redux' },
    { id: 'c-waldur-forms', name: 'Form System', tier: 'core', category: 'frontend', description: 'redux-form, validation' },
    { id: 'c-waldur-tables', name: 'Data Tables', tier: 'core', category: 'frontend', description: 'Pagination, filtering, export' },
    { id: 'c-waldur-modals', name: 'Modal & Dialog System', tier: 'core', category: 'frontend', description: 'Modal patterns, wizards' },
    { id: 'c-site-agent', name: 'Site Agent Framework', tier: 'core', category: 'infra', description: 'Agent protocol, plugins' },

    // SPECIALIZATION TIER (selected for quiz)
    { id: 's-openstack', name: 'OpenStack', tier: 'specialization', package: 'cloud-integrations', description: 'Nova, Neutron, Cinder, Keystone' },
    { id: 's-azure', name: 'Azure Integration', tier: 'specialization', package: 'cloud-integrations', description: 'ARM templates, Azure services' },
    { id: 's-kubernetes', name: 'Kubernetes Ops', tier: 'specialization', package: 'platform-ops', description: 'K8s deployment, Helm, operators' },
    { id: 's-ansible', name: 'Ansible Automation', tier: 'specialization', package: 'platform-ops', description: 'Playbooks, roles, AWX' },
    { id: 's-slurm', name: 'SLURM/HPC', tier: 'specialization', package: 'hpc-research', description: 'Job scheduling, accounting' },
    { id: 's-oidc', name: 'OIDC Protocol', tier: 'specialization', package: 'identity-security', description: 'OpenID Connect, token flows' },
    { id: 's-monitoring', name: 'Monitoring', tier: 'specialization', package: 'platform-ops', description: 'Prometheus, Grafana, ELK' },
    { id: 's-gitlab-cicd', name: 'GitLab CI/CD', tier: 'specialization', package: 'platform-ops', description: 'Pipelines, runners, releases' }
];

// Skill levels with descriptions
const skillLevels = [
    { level: 0, name: 'Not Started', color: '#4b5563', xpRequired: 0 },
    { level: 1, name: 'Aware', color: '#3b82f6', xpRequired: 100 },
    { level: 2, name: 'Competent', color: '#10b981', xpRequired: 300 },
    { level: 3, name: 'Proficient', color: '#eab308', xpRequired: 600 },
    { level: 4, name: 'Advanced', color: '#f97316', xpRequired: 1000 },
    { level: 5, name: 'Expert', color: '#a855f7', xpRequired: 1500 },
    { level: 6, name: 'Master', color: '#ec4899', xpRequired: 2100 },      // Pink
    { level: 7, name: 'Grandmaster', color: '#14b8a6', xpRequired: 2800 }  // Teal
];

// Weapon profiles based on skill shape
const weaponProfiles = [
    { id: 'dagger', name: 'Dagger', icon: '🗡️', description: 'Building literacy/foundation', minLiteracy: 0, minBreadth: 0, minDeep: 0 },
    { id: 'shield', name: 'Shield', icon: '🛡️', description: 'Solid generalist', minLiteracy: 80, minBreadth: 50, minDeep: 0 },
    { id: 'spear', name: 'Spear', icon: '⚔️', description: 'Deep but narrow', minLiteracy: 0, minBreadth: 0, minDeep: 1 },
    { id: 'lance', name: 'Lance', icon: '🏹', description: 'Balanced T-shape', minLiteracy: 80, minBreadth: 50, minDeep: 1 },
    { id: 'bident', name: 'Bident', icon: '⚔️', description: 'T-shape + 2 spikes', minLiteracy: 80, minBreadth: 50, minDeep: 2 },
    { id: 'trident', name: 'Trident', icon: '🔱', description: 'Ideal senior profile', minLiteracy: 80, minBreadth: 50, minDeep: 3 }
];

// Get skills by tier
function getSkillsByTier(tierId) {
    return skills.filter(s => s.tier === tierId);
}

// Get tier info
function getTierInfo(tierId) {
    return skillTiers.find(t => t.id === tierId);
}
