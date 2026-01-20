// Waldur Quest - Question Bank
// Questions organized by skill ID and difficulty level (1-5)
// Minimum questions per level: L1-2: 3, L3: 4, L4: 4, L5: 5

const questions = {
    // ============================================================================
    // LITERACY TIER
    // ============================================================================

    'l-cli': {
        1: [
            { q: "Which command lists files in the current directory?", options: ["ls", "cd", "rm", "cat"], correct: 0 },
            { q: "What does 'cd ..' do?", options: ["Move to parent directory", "Create directory", "Delete directory", "List files"], correct: 0 },
            { q: "Which command prints the current directory path?", options: ["pwd", "path", "dir", "where"], correct: 0 },
            { q: "What command creates a new directory?", options: ["mkdir", "newdir", "create", "md"], correct: 0 },
        ],
        2: [
            { q: "What does 'ls -la' show that 'ls' doesn't?", options: ["Hidden files and details", "Only directories", "File contents", "Running processes"], correct: 0 },
            { q: "How do you redirect output to a file?", options: ["> filename", "| filename", ">> filename only appends", "< filename"], correct: 0 },
            { q: "What does the pipe operator '|' do?", options: ["Passes output to another command", "Redirects to file", "Creates a new process", "Copies files"], correct: 0 },
            { q: "How do you view the contents of a file?", options: ["cat filename", "open filename", "view filename", "read filename"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between '>' and '>>'?", options: ["Overwrite vs append", "Same thing", "Text vs binary", "Local vs remote"], correct: 0 },
            { q: "How do you find files by name recursively?", options: ["find . -name 'pattern'", "ls -R pattern", "grep pattern", "search pattern"], correct: 0 },
            { q: "What does 'tail -f logfile' do?", options: ["Follow log updates in real-time", "Show first lines", "Count lines", "Delete old entries"], correct: 0 },
            { q: "What does 'chmod 755 file' do?", options: ["Sets read/write/execute permissions", "Changes file owner", "Moves file", "Compresses file"], correct: 0 },
            { q: "How do you search for text within files?", options: ["grep 'text' file", "find 'text' file", "search 'text' file", "look 'text' file"], correct: 0 },
        ],
        4: [
            { q: "What does 'xargs' do in a pipeline?", options: ["Converts stdin to arguments", "Executes in parallel", "Filters output", "Sorts results"], correct: 0 },
            { q: "How do you run a command in background?", options: ["Append &", "Prefix bg", "Use nohup only", "Ctrl+Z"], correct: 0 },
            { q: "What does 'ps aux' show?", options: ["All running processes", "Disk usage", "Network connections", "Memory info"], correct: 0 },
            { q: "How do you find which process is using a port?", options: ["lsof -i :port or netstat", "ps port", "find port", "grep port"], correct: 0 },
        ],
        5: [
            { q: "What's the purpose of /dev/null?", options: ["Discard output silently", "Generate random data", "Root device", "Network interface"], correct: 0 },
            { q: "How do you capture both stdout and stderr to a file?", options: ["command &> file", "command > file", "command 2> file", "command | file"], correct: 0 },
            { q: "What does 'nohup' do?", options: ["Keeps process running after logout", "Stops a process", "Pauses execution", "Changes priority"], correct: 0 },
            { q: "How do you set an environment variable for all sessions?", options: ["Add to ~/.bashrc or ~/.profile", "export VAR only", "set VAR", "env VAR"], correct: 0 },
            { q: "What does 'awk '{print $1}'' do?", options: ["Prints first column of each line", "Prints first line", "Counts words", "Searches text"], correct: 0 },
        ]
    },

    'l-git-basics': {
        1: [
            { q: "What command downloads a repository?", options: ["git clone", "git pull", "git fetch", "git download"], correct: 0 },
            { q: "What does 'git status' show?", options: ["Changed files and staging area", "Commit history", "Remote branches", "Config settings"], correct: 0 },
            { q: "How do you stage a file for commit?", options: ["git add filename", "git stage filename", "git commit filename", "git push filename"], correct: 0 },
            { q: "What does 'git init' do?", options: ["Creates a new Git repository", "Downloads a repo", "Commits changes", "Creates a branch"], correct: 0 },
        ],
        2: [
            { q: "What's the difference between 'git pull' and 'git fetch'?", options: ["Pull also merges, fetch only downloads", "They're the same", "Fetch is faster", "Pull is local only"], correct: 0 },
            { q: "How do you create a new branch?", options: ["git checkout -b name", "git branch -new name", "git create name", "git new name"], correct: 0 },
            { q: "What does 'git commit -m' do?", options: ["Commit with inline message", "Commit to main", "Commit and merge", "Commit without staging"], correct: 0 },
            { q: "How do you switch to an existing branch?", options: ["git checkout branchname", "git switch branchname", "Both A and B work", "git branch branchname"], correct: 2 },
        ],
        3: [
            { q: "How do you undo the last commit but keep changes?", options: ["git reset --soft HEAD~1", "git revert HEAD", "git undo", "git rollback"], correct: 0 },
            { q: "What's a pull request / merge request for?", options: ["Request code review before merging", "Pull from remote", "Request access", "Merge immediately"], correct: 0 },
            { q: "How do you see commit history?", options: ["git log", "git history", "git commits", "git show-all"], correct: 0 },
            { q: "What does 'git diff' show?", options: ["Changes between commits or working directory", "Different branches", "Remote differences", "Config differences"], correct: 0 },
        ],
        4: [
            { q: "When should you use 'git rebase' vs 'git merge'?", options: ["Rebase for clean history, merge preserves context", "Always rebase", "Always merge", "They're identical"], correct: 0 },
            { q: "How do you resolve a merge conflict?", options: ["Edit files, remove markers, stage and commit", "git resolve", "Delete conflicting files", "Reset to remote"], correct: 0 },
            { q: "What does 'git stash' do?", options: ["Temporarily saves uncommitted changes", "Deletes changes", "Commits changes", "Pushes changes"], correct: 0 },
            { q: "How do you see what branches exist on remote?", options: ["git branch -r", "git remote branches", "git show remote", "git list branches"], correct: 0 },
        ],
        5: [
            { q: "What does 'git bisect' help you do?", options: ["Find commit that introduced a bug", "Split commits", "Divide repository", "Create branches"], correct: 0 },
            { q: "How do you squash multiple commits?", options: ["git rebase -i with squash", "git squash", "git merge --squash only", "git combine"], correct: 0 },
            { q: "What does 'git reflog' show?", options: ["All ref changes including 'lost' commits", "Reference log only", "Remote log", "Error log"], correct: 0 },
            { q: "How do you cherry-pick a commit?", options: ["git cherry-pick <commit-hash>", "git pick <commit>", "git copy <commit>", "git select <commit>"], correct: 0 },
            { q: "What's a Git hook used for?", options: ["Run scripts on Git events", "Connect repositories", "Link branches", "Hook remote servers"], correct: 0 },
        ]
    },

    'l-containers-101': {
        1: [
            { q: "What's the main benefit of containers?", options: ["Consistent environment across systems", "Faster than VMs always", "No dependencies needed", "Direct hardware access"], correct: 0 },
            { q: "What's the difference between an image and a container?", options: ["Image is template, container is running instance", "They're the same", "Container is template", "Image runs, container stores"], correct: 0 },
            { q: "Why are containers considered 'immutable'?", options: ["Changes don't persist after restart", "Can't be modified ever", "Read-only filesystem", "No network access"], correct: 0 },
        ],
        2: [
            { q: "How do you view logs of a container?", options: ["docker logs container-name", "docker show logs", "cat /var/log/docker", "docker output"], correct: 0 },
            { q: "What does restart policy 'always' mean?", options: ["Container restarts automatically on failure/reboot", "Never stops", "Restarts once", "Manual restart only"], correct: 0 },
            { q: "Where should container logs typically go?", options: ["stdout/stderr for external collection", "Internal log files", "/var/log inside container", "Database"], correct: 0 },
        ],
        3: [
            { q: "What's the purpose of a volume in Docker?", options: ["Persist data outside container lifecycle", "Increase container size", "Share CPU", "Network storage only"], correct: 0 },
            { q: "Why use multi-stage builds?", options: ["Smaller final images by excluding build tools", "Faster builds", "Multiple containers", "Parallel execution"], correct: 0 },
            { q: "What does 'docker exec -it container bash' do?", options: ["Opens interactive shell in running container", "Executes build", "Starts new container", "Shows container info"], correct: 0 },
            { q: "What's a Docker network used for?", options: ["Allow containers to communicate", "Internet access only", "Storage sharing", "CPU allocation"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between ENTRYPOINT and CMD?", options: ["ENTRYPOINT is fixed, CMD provides defaults/arguments", "They're the same", "CMD runs first", "ENTRYPOINT is optional"], correct: 0 },
            { q: "What does 'docker system prune' do?", options: ["Removes unused containers, images, networks", "Updates Docker", "Restarts Docker", "Shows system info"], correct: 0 },
            { q: "Why should you use specific image tags instead of 'latest'?", options: ["Reproducible builds, avoid unexpected changes", "Faster downloads", "Smaller images", "No reason"], correct: 0 },
            { q: "What's the purpose of a health check in Docker?", options: ["Monitor container application health", "Check disk space", "Verify network", "Test CPU"], correct: 0 },
        ],
        5: [
            { q: "When would you use '--init' flag with docker run?", options: ["Proper signal handling for zombie processes", "Initialize storage", "First run setup", "Interactive mode"], correct: 0 },
            { q: "What's the security risk of running containers as root?", options: ["Container escape could give host root access", "No risk", "Slower performance", "Network issues"], correct: 0 },
            { q: "How do you limit container memory usage?", options: ["--memory flag or compose memory limit", "Edit container files", "Use smaller image", "Cannot limit"], correct: 0 },
            { q: "What's the difference between bind mounts and volumes?", options: ["Volumes are managed by Docker, bind mounts use host paths", "Same thing", "Bind mounts are faster", "Volumes are deprecated"], correct: 0 },
            { q: "Why use a non-root user in Dockerfile?", options: ["Security - principle of least privilege", "Faster execution", "Smaller image", "Required by Docker"], correct: 0 },
        ]
    },

    'l-k8s-concepts': {
        1: [
            { q: "What is a Pod in Kubernetes?", options: ["Smallest deployable unit, one or more containers", "A cluster", "A node", "A namespace"], correct: 0 },
            { q: "What's the role of a Deployment?", options: ["Manages pod replicas and updates", "Stores data", "Routes traffic", "Schedules nodes"], correct: 0 },
            { q: "What does a Service do in Kubernetes?", options: ["Provides stable network endpoint for pods", "Stores secrets", "Manages storage", "Runs jobs"], correct: 0 },
        ],
        2: [
            { q: "What's the difference between a Deployment and a StatefulSet?", options: ["StatefulSet maintains pod identity and order", "No difference", "Deployment is newer", "StatefulSet is deprecated"], correct: 0 },
            { q: "What is a namespace used for?", options: ["Logical separation of resources", "DNS resolution", "Storage allocation", "CPU limits"], correct: 0 },
            { q: "What's a ReplicaSet?", options: ["Ensures specified number of pod replicas are running", "Set of replicated data", "Backup system", "Load balancer"], correct: 0 },
        ],
        3: [
            { q: "When is Kubernetes appropriate vs simpler solutions?", options: ["Multiple services needing orchestration, scaling, self-healing", "Single static website", "Development only", "Always"], correct: 0 },
            { q: "What does kubectl apply -f do?", options: ["Creates/updates resources from YAML file", "Deletes resources", "Shows logs", "Connects to pod"], correct: 0 },
            { q: "What's the difference between a Job and a CronJob?", options: ["Job runs once, CronJob runs on schedule", "Same thing", "CronJob is deprecated", "Job is scheduled"], correct: 0 },
            { q: "What does a PersistentVolumeClaim do?", options: ["Requests storage resources for pods", "Claims CPU", "Requests memory", "Claims network"], correct: 0 },
        ],
        4: [
            { q: "What's the purpose of a ConfigMap?", options: ["Store non-sensitive configuration data", "Store secrets", "Configure networking", "Map storage"], correct: 0 },
            { q: "What's the difference between ConfigMap and Secret?", options: ["Secrets are base64 encoded and meant for sensitive data", "Same thing", "ConfigMap is encrypted", "Secret is plaintext"], correct: 0 },
            { q: "What does a liveness probe do?", options: ["Checks if container should be restarted", "Checks if pod is ready for traffic", "Monitors CPU", "Tracks memory"], correct: 0 },
            { q: "What's a DaemonSet used for?", options: ["Run a pod on every node", "Manage databases", "Schedule jobs", "Balance load"], correct: 0 },
        ],
        5: [
            { q: "How do Horizontal Pod Autoscalers work?", options: ["Scale pods based on CPU/memory/custom metrics", "Add more nodes", "Increase pod resources", "Manual scaling"], correct: 0 },
            { q: "What's the difference between readiness and liveness probes?", options: ["Readiness controls traffic, liveness controls restarts", "Same thing", "Readiness restarts", "Liveness routes traffic"], correct: 0 },
            { q: "What's a Kubernetes Operator?", options: ["Custom controller extending K8s with domain knowledge", "Human operator", "CLI tool", "Monitoring system"], correct: 0 },
            { q: "How does pod scheduling work?", options: ["Scheduler assigns pods to nodes based on resources/constraints", "Random assignment", "User chooses node", "First available"], correct: 0 },
            { q: "What's pod affinity/anti-affinity?", options: ["Rules for pod placement relative to other pods", "Network settings", "Storage rules", "CPU affinity"], correct: 0 },
        ]
    },

    'l-python': {
        1: [
            { q: "How do you define a function in Python?", options: ["def function_name():", "function function_name():", "fn function_name():", "define function_name():"], correct: 0 },
            { q: "What does 'len()' return?", options: ["Length of a sequence", "Last element", "First element", "Sum of elements"], correct: 0 },
            { q: "How do you create a list in Python?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"], correct: 0 },
        ],
        2: [
            { q: "What's the difference between a list and a tuple?", options: ["Lists are mutable, tuples are immutable", "No difference", "Tuples are faster", "Lists store strings only"], correct: 0 },
            { q: "How do you handle exceptions in Python?", options: ["try/except block", "catch/throw", "handle/error", "error/rescue"], correct: 0 },
            { q: "What does 'import os' do?", options: ["Makes os module available", "Installs os package", "Creates os object", "Opens operating system"], correct: 0 },
        ],
        3: [
            { q: "What is a list comprehension?", options: ["[x for x in items] - concise list creation", "A list description", "List documentation", "List comparison"], correct: 0 },
            { q: "What's a virtual environment for?", options: ["Isolated Python dependencies per project", "Faster execution", "Virtual machine", "Testing only"], correct: 0 },
            { q: "What does 'if __name__ == \"__main__\":' do?", options: ["Only runs code when script is executed directly", "Checks file name", "Imports module", "Defines main function"], correct: 0 },
            { q: "What's a dictionary in Python?", options: ["Key-value data structure", "Word definitions", "Ordered list", "Function collection"], correct: 0 },
        ],
        4: [
            { q: "What are *args and **kwargs?", options: ["Variable positional and keyword arguments", "Pointer arguments", "Required arguments", "Global arguments"], correct: 0 },
            { q: "What's a decorator in Python?", options: ["Function that modifies another function", "Class attribute", "Import statement", "Comment type"], correct: 0 },
            { q: "What's the difference between a generator and a list?", options: ["Generator yields items lazily, uses less memory", "Same thing", "List is lazy", "Generator stores all items"], correct: 0 },
            { q: "What does 'with open()' do differently than just 'open()'?", options: ["Automatically closes file, handles exceptions", "Opens faster", "Reads entire file", "No difference"], correct: 0 },
        ],
        5: [
            { q: "What's the Global Interpreter Lock (GIL)?", options: ["Mutex preventing true multi-threading for CPU tasks", "Security feature", "Memory manager", "Import lock"], correct: 0 },
            { q: "How do you achieve true parallelism in Python?", options: ["multiprocessing module", "threading module", "async/await", "generators"], correct: 0 },
            { q: "What's a metaclass in Python?", options: ["Class of a class, controls class creation", "Abstract class", "Base class", "Static class"], correct: 0 },
            { q: "What's the difference between @staticmethod and @classmethod?", options: ["staticmethod has no self/cls, classmethod receives class", "Same thing", "staticmethod is faster", "classmethod is deprecated"], correct: 0 },
            { q: "What are __slots__ used for?", options: ["Memory optimization by restricting attributes", "Time slots", "Method slots", "Import slots"], correct: 0 },
        ]
    },

    'l-django': {
        1: [
            { q: "What is Django?", options: ["Python web framework", "JavaScript library", "Database", "Server software"], correct: 0 },
            { q: "What does 'manage.py runserver' do?", options: ["Starts development server", "Deploys to production", "Creates database", "Installs packages"], correct: 0 },
            { q: "What is a Django model?", options: ["Python class representing a database table", "HTML template", "URL pattern", "View function"], correct: 0 },
        ],
        2: [
            { q: "What does 'makemigrations' do?", options: ["Creates migration files from model changes", "Runs migrations", "Deletes migrations", "Shows migration status"], correct: 0 },
            { q: "What is the Django ORM?", options: ["Object-Relational Mapper for database queries", "Online Resource Manager", "Output Render Module", "Object Registry Model"], correct: 0 },
            { q: "How do you query all objects of a model?", options: ["Model.objects.all()", "Model.all()", "Model.query.all()", "get_all(Model)"], correct: 0 },
        ],
        3: [
            { q: "What's the purpose of Django admin?", options: ["Auto-generated CRUD interface for models", "Command line tool", "Deployment tool", "Testing framework"], correct: 0 },
            { q: "What does a Django view do?", options: ["Handles HTTP request and returns response", "Displays HTML", "Stores data", "Routes URLs"], correct: 0 },
            { q: "What's the difference between FBV and CBV?", options: ["Function-based vs Class-based views", "Fast vs Basic views", "Frontend vs Backend", "File vs Class"], correct: 0 },
            { q: "What does 'migrate' command do?", options: ["Applies migrations to database", "Creates migrations", "Reverts migrations", "Shows migrations"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between ForeignKey and ManyToManyField?", options: ["FK is one-to-many, M2M is many-to-many relationship", "No difference", "FK is faster", "M2M creates one table"], correct: 0 },
            { q: "What are Django signals used for?", options: ["Notify when certain actions occur", "Network communication", "User alerts", "Error logging"], correct: 0 },
            { q: "What's middleware in Django?", options: ["Hooks into request/response processing", "Database layer", "Template engine", "Static files"], correct: 0 },
            { q: "How do you create a custom management command?", options: ["Create in management/commands/ directory", "Edit manage.py", "Use decorators", "Django admin"], correct: 0 },
        ],
        5: [
            { q: "How do you optimize N+1 query problems in Django?", options: ["select_related() and prefetch_related()", "Use raw SQL", "Add indexes only", "Increase timeout"], correct: 0 },
            { q: "What's the difference between select_related and prefetch_related?", options: ["select_related uses JOIN, prefetch_related uses separate query", "Same thing", "prefetch uses JOIN", "select is for M2M"], correct: 0 },
            { q: "How do you implement custom model managers?", options: ["Create class inheriting from models.Manager", "Edit settings.py", "Use decorators", "Modify model Meta"], correct: 0 },
            { q: "What's Django REST Framework used for?", options: ["Building APIs with Django", "REST API client", "Testing framework", "Database REST interface"], correct: 0 },
            { q: "How do you handle database transactions in Django?", options: ["transaction.atomic() decorator or context manager", "Manual commit", "Auto-commit only", "No transaction support"], correct: 0 },
        ]
    },

    'l-react': {
        1: [
            { q: "What is a React component?", options: ["Reusable UI building block", "CSS file", "Database model", "Server route"], correct: 0 },
            { q: "What is JSX?", options: ["JavaScript syntax extension for writing HTML-like code", "JSON extension", "Java syntax", "CSS preprocessor"], correct: 0 },
            { q: "How do you pass data to a child component?", options: ["Using props", "Using state", "Using context only", "Using imports"], correct: 0 },
        ],
        2: [
            { q: "What is useState hook for?", options: ["Managing component state", "Fetching data", "Routing", "Styling"], correct: 0 },
            { q: "When does useEffect run?", options: ["After render, when dependencies change", "Before render", "Only on mount", "Never automatically"], correct: 0 },
            { q: "What causes a React component to re-render?", options: ["State or props change", "Time passes", "User scrolls", "Browser resize only"], correct: 0 },
        ],
        3: [
            { q: "What's the purpose of the key prop in lists?", options: ["Helps React track which items changed", "Styling", "Accessibility", "SEO"], correct: 0 },
            { q: "What is prop drilling?", options: ["Passing props through many component levels", "Database query", "API call pattern", "CSS technique"], correct: 0 },
            { q: "What does useContext solve?", options: ["Avoids prop drilling by sharing state", "API calls", "Routing", "Styling"], correct: 0 },
            { q: "What's the difference between state and props?", options: ["State is internal and mutable, props come from parent", "Same thing", "Props are mutable", "State comes from parent"], correct: 0 },
        ],
        4: [
            { q: "When would you use useCallback?", options: ["Memoize functions to prevent unnecessary re-renders", "Make API calls", "Handle forms", "Route navigation"], correct: 0 },
            { q: "What's the difference between controlled and uncontrolled components?", options: ["Controlled: React manages state; Uncontrolled: DOM manages state", "No difference", "Controlled is faster", "Uncontrolled is newer"], correct: 0 },
            { q: "What does useMemo do?", options: ["Memoizes computed values", "Stores in memory", "Creates memos", "Memory management"], correct: 0 },
            { q: "What's useRef used for?", options: ["Persist values without re-render, access DOM", "Create references", "Reference components", "Ref counting"], correct: 0 },
        ],
        5: [
            { q: "How does React's reconciliation algorithm work?", options: ["Compares virtual DOM trees using heuristics", "Full DOM replacement", "No comparison", "Server-side only"], correct: 0 },
            { q: "What's React.lazy used for?", options: ["Code splitting and lazy loading components", "Lazy evaluation", "Deferred rendering", "Slow components"], correct: 0 },
            { q: "What are React error boundaries?", options: ["Components that catch JS errors in children", "Form validation", "Network errors", "Type errors"], correct: 0 },
            { q: "How does useReducer differ from useState?", options: ["Better for complex state logic with actions", "Same thing", "Simpler than useState", "Only for forms"], correct: 0 },
            { q: "What's the purpose of React.memo?", options: ["Memoize component to prevent unnecessary re-renders", "Create memos", "Memory optimization", "Component notes"], correct: 0 },
        ]
    },

    // ============================================================================
    // PRODUCT TIER
    // ============================================================================

    'p-waldur-basics': {
        1: [
            { q: "What is Waldur?", options: ["Cloud resource management platform", "Operating system", "Database", "Programming language"], correct: 0 },
            { q: "What does multi-tenancy mean in Waldur?", options: ["Multiple organizations share the platform", "Multiple servers", "Multiple databases", "Multiple users per account"], correct: 0 },
            { q: "Who are the main users of Waldur?", options: ["Organizations managing cloud resources", "Individual developers only", "Database administrators", "Network engineers"], correct: 0 },
        ],
        2: [
            { q: "What is a Waldur marketplace?", options: ["Catalog of available resource offerings", "E-commerce store", "App store", "Job board"], correct: 0 },
            { q: "What is a resource in Waldur context?", options: ["Provisioned cloud asset (VM, storage, etc.)", "JSON file", "API endpoint", "User account"], correct: 0 },
            { q: "What is an organization (customer) in Waldur?", options: ["Top-level entity that owns projects", "Individual user", "Server cluster", "API key"], correct: 0 },
        ],
        3: [
            { q: "What's the hierarchy: Organization > Project > ?", options: ["Resource", "User", "Team", "Offering"], correct: 0 },
            { q: "What role does a Provider play in Waldur?", options: ["Backend that fulfills resource requests", "End user", "Administrator", "Billing system"], correct: 0 },
            { q: "What is a Project in Waldur?", options: ["Container for resources with its own budget/team", "Code repository", "Single VM", "Billing period"], correct: 0 },
            { q: "What's an Offering in Waldur marketplace?", options: ["Template defining what can be provisioned", "Sales discount", "User interface", "Report type"], correct: 0 },
        ],
        4: [
            { q: "How does Waldur handle resource lifecycle states?", options: ["State machine with defined transitions", "Simple on/off", "Manual tracking", "No state management"], correct: 0 },
            { q: "What are resource actions in Waldur?", options: ["Operations like start, stop, resize on resources", "User permissions", "Billing events", "Log entries"], correct: 0 },
            { q: "How does quota management work in Waldur?", options: ["Limits on resources per organization/project", "Disk quotas only", "User quotas", "No quota support"], correct: 0 },
            { q: "What's the purpose of offering components?", options: ["Define measurable attributes like CPU, RAM for billing", "UI components", "Plugin system", "Network config"], correct: 0 },
        ],
        5: [
            { q: "What's the plugin architecture advantage in Waldur?", options: ["Extensible without modifying core", "Faster performance", "Simpler code", "No advantages"], correct: 0 },
            { q: "How does Waldur integrate with external providers?", options: ["Through backend plugins with defined interfaces", "Direct database access", "Manual sync only", "No integration"], correct: 0 },
            { q: "What's the role of Waldur API?", options: ["RESTful interface for all operations", "Internal only", "Documentation", "Testing"], correct: 0 },
            { q: "How does approval workflow work in Waldur?", options: ["Orders can require approval before processing", "Automatic approval only", "No approval system", "Email-based only"], correct: 0 },
            { q: "What reporting capabilities does Waldur provide?", options: ["Usage, billing, and resource reports", "No reporting", "External tools only", "Logs only"], correct: 0 },
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - CS Fundamentals
    // ============================================================================

    'f-data-structures': {
        1: [
            { q: "What is an array?", options: ["Ordered collection with index access", "Key-value store", "Tree structure", "Graph"], correct: 0 },
            { q: "What's the time complexity of array index access?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
            { q: "What is a stack?", options: ["LIFO data structure", "FIFO data structure", "Random access", "Tree structure"], correct: 0 },
        ],
        2: [
            { q: "When would you use a hash map over an array?", options: ["Fast lookup by key", "Ordered data needed", "Memory efficiency", "Simple iteration"], correct: 0 },
            { q: "What's a queue's ordering principle?", options: ["FIFO - First In First Out", "LIFO", "Random", "Priority only"], correct: 0 },
            { q: "What's the main advantage of a linked list over an array?", options: ["Efficient insertion/deletion in middle", "Faster access", "Less memory", "Simpler code"], correct: 0 },
        ],
        3: [
            { q: "In Waldur, why is org hierarchy a tree structure?", options: ["Parent-child relationships, single root", "Circular references", "Flat is simpler", "Performance"], correct: 0 },
            { q: "Why does Celery use queues?", options: ["Process tasks in order they arrived", "Random execution", "Immediate execution", "No specific reason"], correct: 0 },
            { q: "What's a binary search tree used for?", options: ["Efficient searching and sorted data", "FIFO processing", "Stack operations", "Hash storage"], correct: 0 },
            { q: "When would you use a set instead of a list?", options: ["Need unique elements with fast lookup", "Need ordered elements", "Need duplicates", "Need index access"], correct: 0 },
        ],
        4: [
            { q: "What's the time complexity of hash table insertion (average)?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
            { q: "What's a priority queue?", options: ["Queue where elements have priority ordering", "First priority only", "Random queue", "Stack variant"], correct: 0 },
            { q: "What's the worst-case time complexity of hash table operations?", options: ["O(n) due to collisions", "O(1)", "O(log n)", "O(n²)"], correct: 0 },
            { q: "When is a doubly linked list preferred over singly linked?", options: ["Need to traverse both directions", "Memory efficiency", "Simpler implementation", "Faster iteration"], correct: 0 },
        ],
        5: [
            { q: "When would a B-tree be better than a binary tree?", options: ["Disk-based storage, minimize I/O", "In-memory only", "Simple data", "Always"], correct: 0 },
            { q: "What's the purpose of a bloom filter?", options: ["Probabilistic membership testing, space-efficient", "Exact membership", "Sorting data", "Compression"], correct: 0 },
            { q: "What's a trie used for?", options: ["Efficient string prefix operations", "Number sorting", "Graph traversal", "Queue management"], correct: 0 },
            { q: "What's the difference between a heap and a BST?", options: ["Heap maintains min/max at root, BST is sorted", "Same structure", "Heap is sorted", "BST has min/max at root"], correct: 0 },
            { q: "When would you use a graph over a tree?", options: ["Nodes can have multiple parents/cycles", "Single parent needed", "Simpler structure", "Faster operations"], correct: 0 },
        ]
    },

    'f-design-patterns': {
        1: [
            { q: "What is a design pattern?", options: ["Reusable solution to common problem", "Code library", "Framework", "Programming language"], correct: 0 },
            { q: "Why use design patterns?", options: ["Proven solutions, common vocabulary", "Faster code", "Smaller files", "Required by languages"], correct: 0 },
            { q: "What's the Singleton pattern?", options: ["Ensures only one instance of a class", "Creates many instances", "Destroys instances", "Copies instances"], correct: 0 },
        ],
        2: [
            { q: "What does the Factory pattern do?", options: ["Creates objects without specifying exact class", "Destroys objects", "Copies objects", "Validates objects"], correct: 0 },
            { q: "What is a Mixin in Python/Django?", options: ["Class providing methods for other classes to inherit", "Database table", "Template", "Test fixture"], correct: 0 },
            { q: "What's the Builder pattern used for?", options: ["Construct complex objects step by step", "Destroy objects", "Simple object creation", "Object validation"], correct: 0 },
        ],
        3: [
            { q: "When would you use the Strategy pattern?", options: ["Swap algorithms at runtime", "Create objects", "Structure data", "Handle errors"], correct: 0 },
            { q: "What's the Observer pattern used for?", options: ["Notify multiple objects of state changes", "Create single instance", "Decorate functions", "Build objects step by step"], correct: 0 },
            { q: "What does the Template Method pattern do?", options: ["Define algorithm skeleton, let subclasses override steps", "Create templates", "Generate code", "Validate templates"], correct: 0 },
            { q: "What's the Iterator pattern?", options: ["Access collection elements without exposing structure", "Create collections", "Sort collections", "Merge collections"], correct: 0 },
        ],
        4: [
            { q: "How does the Adapter pattern help?", options: ["Makes incompatible interfaces work together", "Creates new interfaces", "Removes interfaces", "Copies interfaces"], correct: 0 },
            { q: "What's the Facade pattern?", options: ["Simple interface to complex subsystem", "Complex interface", "No interface", "Multiple interfaces"], correct: 0 },
            { q: "When would you use the Command pattern?", options: ["Encapsulate requests as objects for undo/queue", "Direct execution", "Avoid objects", "Simpler code"], correct: 0 },
            { q: "What's the Repository pattern used for?", options: ["Abstract data access layer", "Store files", "Version control", "Cache data"], correct: 0 },
        ],
        5: [
            { q: "What's the difference between Proxy and Decorator patterns?", options: ["Proxy controls access, Decorator adds behavior", "Same thing", "Proxy is simpler", "Decorator controls access"], correct: 0 },
            { q: "What's the Chain of Responsibility pattern?", options: ["Pass request through handler chain", "Single handler", "Parallel handling", "No handling"], correct: 0 },
            { q: "When is the State pattern appropriate?", options: ["Object behavior changes based on internal state", "Stateless objects", "Simple flags", "No state needed"], correct: 0 },
            { q: "What's the Mediator pattern?", options: ["Centralize complex communications", "Direct object communication", "Remove communication", "Broadcast pattern"], correct: 0 },
            { q: "What's the difference between Abstract Factory and Factory Method?", options: ["Abstract Factory creates families, Factory Method single product", "Same thing", "Factory Method creates families", "No difference"], correct: 0 },
        ]
    },

    'f-api-principles': {
        1: [
            { q: "What does REST stand for?", options: ["Representational State Transfer", "Remote Execution State Transfer", "Request-Response State", "Resource State Type"], correct: 0 },
            { q: "Which HTTP method is used to retrieve data?", options: ["GET", "POST", "PUT", "DELETE"], correct: 0 },
            { q: "Which HTTP method creates a new resource?", options: ["POST", "GET", "DELETE", "HEAD"], correct: 0 },
        ],
        2: [
            { q: "What HTTP status code indicates 'Created'?", options: ["201", "200", "204", "301"], correct: 0 },
            { q: "What's the difference between PUT and PATCH?", options: ["PUT replaces entire resource, PATCH updates partially", "Same thing", "PATCH replaces", "PUT is partial"], correct: 0 },
            { q: "What does status code 404 mean?", options: ["Not Found", "Server Error", "Unauthorized", "Bad Request"], correct: 0 },
        ],
        3: [
            { q: "What does idempotent mean for an API operation?", options: ["Same result regardless of how many times called", "Fast operation", "Secure operation", "Logged operation"], correct: 0 },
            { q: "Which HTTP methods should be idempotent?", options: ["GET, PUT, DELETE", "POST only", "All methods", "None"], correct: 0 },
            { q: "What's the purpose of HTTP status code 204?", options: ["Success with no content to return", "Created", "Error", "Redirect"], correct: 0 },
            { q: "What should a RESTful URL look like?", options: ["/resources/{id} using nouns", "/getResource?id=1", "/resource/get/1", "Any format"], correct: 0 },
        ],
        4: [
            { q: "What's HATEOAS in REST?", options: ["Hypermedia links in responses for discoverability", "Authentication method", "Caching strategy", "Error handling"], correct: 0 },
            { q: "What are the benefits of pagination in APIs?", options: ["Reduce response size, improve performance", "No benefits", "More data returned", "Simpler client code"], correct: 0 },
            { q: "What's rate limiting used for?", options: ["Prevent API abuse, ensure fair usage", "Speed up requests", "Cache responses", "Validate input"], correct: 0 },
            { q: "What's the difference between 401 and 403?", options: ["401 = not authenticated, 403 = not authorized", "Same thing", "403 = not authenticated", "401 = not authorized"], correct: 0 },
        ],
        5: [
            { q: "How should API versioning be handled?", options: ["URL path, header, or query param with deprecation policy", "Never version", "Break clients", "New domain"], correct: 0 },
            { q: "What's the Richardson Maturity Model?", options: ["Levels of REST API maturity (0-3)", "Security model", "Performance benchmark", "Testing framework"], correct: 0 },
            { q: "When should you use GraphQL over REST?", options: ["Client needs flexible queries, multiple resources in one request", "Always", "Never", "Simple CRUD only"], correct: 0 },
            { q: "What's an API gateway used for?", options: ["Route requests, handle auth, rate limiting", "Store data", "Generate docs", "Test APIs"], correct: 0 },
            { q: "How do you handle breaking changes in APIs?", options: ["Version, deprecation warnings, migration guides", "Just change it", "Never change", "Email users"], correct: 0 },
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - Software Engineering
    // ============================================================================

    'f-testing': {
        1: [
            { q: "What is a unit test?", options: ["Tests a single function/component in isolation", "Tests entire application", "Tests user interface", "Tests database"], correct: 0 },
            { q: "What does 'assert' do in tests?", options: ["Verifies a condition is true", "Prints output", "Creates data", "Connects to database"], correct: 0 },
            { q: "Why write automated tests?", options: ["Catch bugs early, enable safe refactoring", "Slower development", "More code to maintain", "Required by law"], correct: 0 },
        ],
        2: [
            { q: "What's the purpose of test fixtures?", options: ["Set up test data and state", "Run tests faster", "Skip tests", "Generate reports"], correct: 0 },
            { q: "In pytest, how do you mark a test to skip?", options: ["@pytest.mark.skip", "@skip", "# skip", "skip()"], correct: 0 },
            { q: "What's the Arrange-Act-Assert pattern?", options: ["Setup, execute, verify - test structure", "Random testing", "Performance testing", "Security testing"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between mocking and stubbing?", options: ["Mocks verify behavior, stubs provide canned responses", "Same thing", "Stubs verify", "Mocks are simpler"], correct: 0 },
            { q: "What is test coverage?", options: ["Percentage of code executed by tests", "Number of tests", "Test speed", "Bug count"], correct: 0 },
            { q: "What's a test double?", options: ["Generic term for mock, stub, fake, spy", "Duplicate test", "Two tests", "Test comparison"], correct: 0 },
            { q: "What's regression testing?", options: ["Ensure changes don't break existing functionality", "Test new features only", "Performance testing", "Security testing"], correct: 0 },
        ],
        4: [
            { q: "When should you use integration tests vs unit tests?", options: ["Integration for component interactions, unit for isolation", "Always unit", "Always integration", "Never both"], correct: 0 },
            { q: "What's test-driven development (TDD)?", options: ["Write tests before implementation", "Test after coding", "No testing", "Manual testing"], correct: 0 },
            { q: "What's a flaky test?", options: ["Test that sometimes passes, sometimes fails", "Fast test", "Slow test", "Skipped test"], correct: 0 },
            { q: "When is 100% code coverage a bad goal?", options: ["Can lead to meaningless tests, diminishing returns", "Always good", "Never bad", "Required for quality"], correct: 0 },
        ],
        5: [
            { q: "What's property-based testing?", options: ["Generate random inputs to find edge cases", "Test object properties", "Test CSS", "Performance testing"], correct: 0 },
            { q: "What's mutation testing?", options: ["Modify code to check if tests catch changes", "Test mutations", "Random testing", "Performance testing"], correct: 0 },
            { q: "What's contract testing?", options: ["Verify API contracts between services", "Legal testing", "Business testing", "Manual testing"], correct: 0 },
            { q: "What's the test pyramid?", options: ["More unit tests, fewer integration, fewest E2E", "Equal distribution", "More E2E tests", "No structure"], correct: 0 },
            { q: "When is end-to-end testing most valuable?", options: ["Critical user journeys, integration verification", "Everything", "Nothing", "Unit test replacement"], correct: 0 },
        ]
    },

    'f-git': {
        1: [
            { q: "What is a branch in Git?", options: ["Pointer to a commit, allows parallel development", "Copy of repository", "Backup", "Server connection"], correct: 0 },
            { q: "What's a commit in Git?", options: ["Snapshot of changes with message", "Branch", "File copy", "Server sync"], correct: 0 },
            { q: "What's a remote in Git?", options: ["Connection to repository on server", "Local copy", "Branch type", "Commit type"], correct: 0 },
        ],
        2: [
            { q: "What does 'git stash' do?", options: ["Temporarily saves uncommitted changes", "Deletes changes", "Commits changes", "Pushes changes"], correct: 0 },
            { q: "What's HEAD in Git?", options: ["Pointer to current commit/branch", "First commit", "Last commit", "Remote branch"], correct: 0 },
            { q: "What does 'git branch -d' do?", options: ["Deletes a branch", "Creates branch", "Lists branches", "Renames branch"], correct: 0 },
        ],
        3: [
            { q: "When should you rebase instead of merge?", options: ["Clean linear history for feature branches", "Always", "Never", "Only on main branch"], correct: 0 },
            { q: "What's a fast-forward merge?", options: ["Moving branch pointer when no divergence", "Quick merge", "Forced merge", "Automatic merge"], correct: 0 },
            { q: "What does 'git reset --hard' do?", options: ["Discard all changes and reset to commit", "Soft reset", "Keep changes", "Create backup"], correct: 0 },
            { q: "What's the difference between 'git reset' and 'git revert'?", options: ["Reset moves HEAD, revert creates new commit undoing changes", "Same thing", "Revert moves HEAD", "Reset creates commit"], correct: 0 },
        ],
        4: [
            { q: "What does 'git cherry-pick' do?", options: ["Apply a specific commit to current branch", "Select best commits", "Delete commits", "Rename commits"], correct: 0 },
            { q: "What's an interactive rebase used for?", options: ["Edit, squash, reorder commits", "Automatic rebase", "Simple merge", "Branch creation"], correct: 0 },
            { q: "What's a Git tag used for?", options: ["Mark specific points like releases", "Branch marker", "Comment", "Temporary save"], correct: 0 },
            { q: "What does 'git blame' show?", options: ["Who changed each line and when", "Errors in code", "Merge conflicts", "Branch history"], correct: 0 },
        ],
        5: [
            { q: "How does 'git reflog' help in recovery?", options: ["Shows all ref changes including 'lost' commits", "Log of references", "Remote log", "Error log"], correct: 0 },
            { q: "What's git worktree?", options: ["Multiple working directories for same repo", "Tree structure", "File tree", "Branch tree"], correct: 0 },
            { q: "How do you recover a deleted branch?", options: ["Find commit in reflog, recreate branch", "Cannot recover", "Automatic recovery", "Contact admin"], correct: 0 },
            { q: "What's a detached HEAD state?", options: ["HEAD points to commit, not branch", "Broken repository", "Deleted HEAD", "No commits"], correct: 0 },
            { q: "What's git bisect used for?", options: ["Binary search to find bug-introducing commit", "Split repository", "Merge branches", "Create tags"], correct: 0 },
        ]
    },

    'f-docker': {
        1: [
            { q: "What is a Dockerfile?", options: ["Instructions to build a Docker image", "Running container", "Docker configuration", "Container log"], correct: 0 },
            { q: "What command builds a Docker image?", options: ["docker build", "docker create", "docker make", "docker compile"], correct: 0 },
            { q: "What command runs a container?", options: ["docker run", "docker start", "docker exec", "docker begin"], correct: 0 },
        ],
        2: [
            { q: "What does 'docker-compose up' do?", options: ["Starts all services defined in docker-compose.yml", "Updates Docker", "Uploads images", "Shows status"], correct: 0 },
            { q: "What's the purpose of exposing a port in Docker?", options: ["Allow external access to container service", "Increase security", "Reduce memory", "Speed up container"], correct: 0 },
            { q: "What does 'docker ps' show?", options: ["Running containers", "All images", "Docker processes", "Port mappings"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between COPY and ADD in Dockerfile?", options: ["ADD can extract archives and fetch URLs", "Same thing", "COPY is newer", "ADD is deprecated"], correct: 0 },
            { q: "Why use .dockerignore?", options: ["Exclude files from build context", "Ignore errors", "Skip layers", "Disable caching"], correct: 0 },
            { q: "What's a Docker layer?", options: ["Cached filesystem change from Dockerfile instruction", "Container level", "Security layer", "Network layer"], correct: 0 },
            { q: "What does 'docker pull' do?", options: ["Downloads image from registry", "Pushes image", "Removes image", "Lists images"], correct: 0 },
        ],
        4: [
            { q: "How do multi-stage builds reduce image size?", options: ["Only final stage artifacts included in image", "Compress files", "Remove layers", "Use smaller base"], correct: 0 },
            { q: "What's the difference between docker-compose and Docker Swarm?", options: ["Compose for dev/single host, Swarm for production clusters", "Same thing", "Swarm is for dev", "Compose is for clusters"], correct: 0 },
            { q: "Why use alpine-based images?", options: ["Smaller image size, faster downloads", "More features", "Better security", "Required by Docker"], correct: 0 },
            { q: "What's a Docker registry?", options: ["Storage and distribution for Docker images", "Container registry", "Log storage", "Config storage"], correct: 0 },
        ],
        5: [
            { q: "What's the difference between CMD and ENTRYPOINT?", options: ["CMD is overridable, ENTRYPOINT defines executable", "Same", "CMD is newer", "ENTRYPOINT is deprecated"], correct: 0 },
            { q: "How do you optimize Docker build cache?", options: ["Order instructions from least to most changing", "Random order", "No optimization possible", "Always rebuild"], correct: 0 },
            { q: "What's a Docker secret?", options: ["Sensitive data management for Swarm", "Hidden container", "Private image", "Encrypted volume"], correct: 0 },
            { q: "What's the purpose of Docker health checks?", options: ["Monitor container application health", "Check disk", "Verify network", "Test security"], correct: 0 },
            { q: "How do you reduce Docker image attack surface?", options: ["Minimal base image, non-root user, no unnecessary tools", "Add more tools", "Run as root", "Use large images"], correct: 0 },
        ]
    },

    'f-ci-cd': {
        1: [
            { q: "What does CI stand for?", options: ["Continuous Integration", "Code Integration", "Continuous Improvement", "Code Inspection"], correct: 0 },
            { q: "What does CD stand for (in CI/CD)?", options: ["Continuous Delivery/Deployment", "Code Delivery", "Continuous Development", "Code Distribution"], correct: 0 },
            { q: "What's the main goal of CI?", options: ["Detect integration issues early", "Deploy faster", "Write less code", "Reduce testing"], correct: 0 },
        ],
        2: [
            { q: "What triggers a CI pipeline typically?", options: ["Code push or merge request", "Manual button only", "Scheduled time only", "Production deployment"], correct: 0 },
            { q: "What's a pipeline stage?", options: ["Group of jobs that run together", "Single command", "Branch name", "Server"], correct: 0 },
            { q: "What should happen if CI tests fail?", options: ["Block merge until fixed", "Merge anyway", "Ignore", "Delete branch"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between Continuous Delivery and Deployment?", options: ["Delivery requires manual approval, Deployment is automatic", "Same thing", "Delivery is automatic", "Deployment needs approval"], correct: 0 },
            { q: "What's a build artifact?", options: ["Output from build process (binary, package)", "Source code", "Test results only", "Log files"], correct: 0 },
            { q: "What's pipeline caching used for?", options: ["Speed up builds by reusing dependencies", "Store logs", "Save test results", "Backup code"], correct: 0 },
            { q: "What's a deployment environment?", options: ["Target system (dev, staging, prod)", "IDE", "Build server", "Git branch"], correct: 0 },
        ],
        4: [
            { q: "What are pipeline artifacts used for?", options: ["Pass build outputs between stages/jobs", "Store secrets", "Log errors", "Cache dependencies"], correct: 0 },
            { q: "What's a rollback strategy?", options: ["Plan to revert failed deployment", "Remove old code", "Backup database", "Clear cache"], correct: 0 },
            { q: "What's canary deployment?", options: ["Gradual rollout to subset of users", "Full deployment", "Immediate rollback", "Test deployment"], correct: 0 },
            { q: "What's infrastructure as code in CI/CD?", options: ["Define infrastructure in version-controlled files", "Manual setup", "GUI configuration", "External tools"], correct: 0 },
        ],
        5: [
            { q: "How do you implement blue-green deployments?", options: ["Two identical environments, switch traffic after verification", "Single environment", "Gradual rollout", "A/B testing"], correct: 0 },
            { q: "What's GitOps?", options: ["Use Git as source of truth for infrastructure", "Git operations", "GitHub features", "Git automation"], correct: 0 },
            { q: "What's feature flag deployment?", options: ["Toggle features without deployment", "Feature branches", "Flag variables", "Deployment flags"], correct: 0 },
            { q: "What's a deployment pipeline pattern?", options: ["Stages: build, test, deploy with gates", "Single step", "Manual process", "No pattern"], correct: 0 },
            { q: "How do you handle database migrations in CI/CD?", options: ["Versioned migrations, backward compatible, tested", "Manual changes", "No migrations", "Drop and recreate"], correct: 0 },
        ]
    },

    // ============================================================================
    // CORE PLATFORM TIER
    // ============================================================================

    'c-waldur-arch': {
        1: [
            { q: "What's Waldur's backend framework?", options: ["Django REST Framework", "Flask", "FastAPI", "Express"], correct: 0 },
            { q: "What's Waldur's frontend framework?", options: ["React", "Angular", "Vue", "jQuery"], correct: 0 },
            { q: "What database does Waldur primarily use?", options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"], correct: 0 },
        ],
        2: [
            { q: "What are Structure Apps in Waldur?", options: ["Pluggable modules for different resource types", "Mobile apps", "Database structures", "API endpoints"], correct: 0 },
            { q: "What's Celery used for in Waldur?", options: ["Async task processing", "Web serving", "Database access", "Frontend rendering"], correct: 0 },
            { q: "What message broker does Waldur use with Celery?", options: ["Redis or RabbitMQ", "Kafka", "SQS", "Direct"], correct: 0 },
        ],
        3: [
            { q: "How does Waldur's plugin system work?", options: ["Django apps registered via settings, providing new resource types", "npm packages", "Docker containers", "Microservices"], correct: 0 },
            { q: "What's the purpose of waldur-mastermind?", options: ["Main Waldur backend containing core and plugins", "Frontend app", "Mobile app", "Documentation"], correct: 0 },
            { q: "How are Waldur API endpoints structured?", options: ["DRF ViewSets with routers", "Flask routes", "Raw Django views", "GraphQL"], correct: 0 },
            { q: "What serializers does Waldur use?", options: ["DRF serializers for API input/output", "JSON only", "XML only", "Custom format"], correct: 0 },
        ],
        4: [
            { q: "What's the role of waldur-core vs plugins?", options: ["Core provides base, plugins add specific integrations", "Core is optional", "Plugins are core", "No difference"], correct: 0 },
            { q: "How does Waldur handle background jobs?", options: ["Celery tasks with periodic scheduling", "Cron jobs", "Threads", "No background jobs"], correct: 0 },
            { q: "What's the structure of a Waldur plugin?", options: ["Django app with models, views, serializers, tasks", "Single file", "Configuration only", "Frontend only"], correct: 0 },
            { q: "How does Waldur manage database migrations?", options: ["Django migrations per app", "Raw SQL", "Manual schema", "No migrations"], correct: 0 },
        ],
        5: [
            { q: "How do you extend Waldur with custom resource types?", options: ["Create structure app with models, serializers, views, and register", "Modify core code", "Use configuration", "External API"], correct: 0 },
            { q: "How does Waldur handle multi-tenancy at database level?", options: ["Shared database with organization/project filtering", "Separate databases", "Schemas", "No multi-tenancy"], correct: 0 },
            { q: "What's the Waldur executor pattern?", options: ["Backend-specific logic for provisioning resources", "User executor", "Task runner", "Query executor"], correct: 0 },
            { q: "How does Waldur handle service provider backends?", options: ["Backend classes implementing common interface", "Direct API calls", "Hardcoded logic", "Configuration files"], correct: 0 },
            { q: "What's the role of waldur-homeport?", options: ["React frontend application", "Backend service", "Database", "Load balancer"], correct: 0 },
        ]
    },

    'c-marketplace': {
        1: [
            { q: "What is an Offering in Waldur marketplace?", options: ["Template for provisionable resources", "Sales pitch", "User account", "Payment method"], correct: 0 },
            { q: "What is a Category in the marketplace?", options: ["Grouping for offerings (compute, storage, etc.)", "User category", "Price category", "Log category"], correct: 0 },
            { q: "Who creates offerings in Waldur?", options: ["Service providers/administrators", "End users", "System automatically", "External systems"], correct: 0 },
        ],
        2: [
            { q: "What's the relationship between Offering and Resource?", options: ["Offering is template, Resource is provisioned instance", "Same thing", "Resource contains Offerings", "No relationship"], correct: 0 },
            { q: "What is an Order in Waldur?", options: ["Request to create/modify/terminate a resource", "Shopping cart", "Invoice", "Report"], correct: 0 },
            { q: "What's an offering component?", options: ["Measurable unit like CPU cores or RAM", "UI component", "Plugin", "Category"], correct: 0 },
        ],
        3: [
            { q: "What states can a marketplace Order have?", options: ["Pending, Executing, Done, Erred, etc.", "Only Open/Closed", "No states", "Custom only"], correct: 0 },
            { q: "What triggers order processing in Waldur?", options: ["Approval or auto-approve, then Celery tasks", "Manual processing", "Immediate execution", "External trigger"], correct: 0 },
            { q: "What's a plan in Waldur marketplace?", options: ["Pricing configuration for an offering", "Project plan", "Deployment plan", "Support plan"], correct: 0 },
            { q: "How does resource termination work?", options: ["Order of type 'terminate' processed by backend", "Direct deletion", "Manual removal", "Automatic expiry only"], correct: 0 },
        ],
        4: [
            { q: "How do offering components affect pricing?", options: ["Define measurable units (CPU, RAM) with prices", "No effect", "Visual only", "Documentation"], correct: 0 },
            { q: "What's offering attributes used for?", options: ["Custom configuration options for resources", "Styling", "Categories", "Permissions"], correct: 0 },
            { q: "How does Waldur track resource usage?", options: ["Component usage reported periodically", "No tracking", "Manual entry", "External systems only"], correct: 0 },
            { q: "What's the approval workflow in marketplace?", options: ["Orders can require manager/admin approval", "Always auto-approved", "Never approved", "External approval"], correct: 0 },
        ],
        5: [
            { q: "What's the difference between public and private offerings?", options: ["Public visible to all, private to specific customers", "Same visibility", "Public is free", "Private is external"], correct: 0 },
            { q: "How does the marketplace handle billing?", options: ["Generate invoices based on component usage and prices", "No billing", "External only", "Manual"], correct: 0 },
            { q: "What's offering secret options for?", options: ["Provider-only configuration not visible to users", "User secrets", "API keys", "Passwords"], correct: 0 },
            { q: "How do you implement custom offering types?", options: ["Create plugin with offering type and processor", "Modify core", "Configuration only", "Cannot customize"], correct: 0 },
            { q: "What's the robot account feature?", options: ["Automated access for resources/integrations", "User account", "Admin account", "Test account"], correct: 0 },
        ]
    },

    'c-permissions': {
        1: [
            { q: "What does RBAC stand for?", options: ["Role-Based Access Control", "Resource-Based Access Control", "Request-Based Access", "Runtime-Based Access"], correct: 0 },
            { q: "What's the highest permission level in Waldur?", options: ["Staff (superuser)", "Organization owner", "Project admin", "Resource manager"], correct: 0 },
            { q: "Can users have different roles in different organizations?", options: ["Yes, permissions are per-organization", "No, one role only", "Only admins", "Only staff"], correct: 0 },
        ],
        2: [
            { q: "What's a role in Waldur's permission system?", options: ["Set of permissions assignable to users", "User type", "Organization", "Resource"], correct: 0 },
            { q: "At what levels can permissions be assigned in Waldur?", options: ["Customer/Organization, Project, Resource", "User only", "Global only", "Resource only"], correct: 0 },
            { q: "What's the 'owner' role in an organization?", options: ["Full administrative access to organization", "Read only", "Project access only", "Billing only"], correct: 0 },
        ],
        3: [
            { q: "How do project permissions inherit from organization?", options: ["Organization owners have access to all projects", "No inheritance", "Projects override", "Manual only"], correct: 0 },
            { q: "What can a project manager do?", options: ["Manage project resources and members", "Create organizations", "Access all projects", "Modify billing"], correct: 0 },
            { q: "How are permissions checked in Waldur API?", options: ["DRF permission classes on viewsets", "Middleware only", "Database triggers", "Frontend only"], correct: 0 },
            { q: "What's the service manager role?", options: ["Manage specific service/offering as provider", "Manage all services", "User management", "Billing"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between owner and manager roles?", options: ["Owners have full access, managers have limited admin rights", "Same", "Managers have more", "Owner is project level"], correct: 0 },
            { q: "How do you grant a user access to a project?", options: ["Add permission with role via API/UI", "Edit user profile", "Create new user", "Modify database"], correct: 0 },
            { q: "What permissions does a project member have?", options: ["View and use resources, limited modifications", "Full access", "No access", "Read only"], correct: 0 },
            { q: "How does Waldur handle permission caching?", options: ["Permissions computed and can be cached", "No caching", "Always recomputed", "Database cache only"], correct: 0 },
        ],
        5: [
            { q: "How can you implement custom permission logic?", options: ["Override permission classes in DRF viewsets", "Database flags", "Config file", "Cannot customize"], correct: 0 },
            { q: "What's scope-based filtering in Waldur?", options: ["Filter querysets based on user permissions", "UI filtering", "Search feature", "Report filter"], correct: 0 },
            { q: "How do offering permissions work?", options: ["Control who can order from specific offerings", "No offering permissions", "Public only", "Admin only"], correct: 0 },
            { q: "What's the call management feature?", options: ["Request and approval workflow for resources", "Phone calls", "API calls", "Support tickets"], correct: 0 },
            { q: "How does Waldur audit permission changes?", options: ["Event logging for permission modifications", "No auditing", "External tools", "Manual tracking"], correct: 0 },
        ]
    },

    // ============================================================================
    // SPECIALIZATION TIER
    // ============================================================================

    's-openstack': {
        1: [
            { q: "What is OpenStack?", options: ["Open source cloud computing platform", "Operating system", "Database", "Container runtime"], correct: 0 },
            { q: "What's the relationship between OpenStack and IaaS?", options: ["OpenStack provides Infrastructure as a Service", "OpenStack is PaaS", "OpenStack is SaaS", "No relationship"], correct: 0 },
            { q: "Is OpenStack a single application or collection of services?", options: ["Collection of interconnected services", "Single application", "Operating system", "Database"], correct: 0 },
        ],
        2: [
            { q: "What OpenStack component manages compute (VMs)?", options: ["Nova", "Neutron", "Cinder", "Swift"], correct: 0 },
            { q: "What does Keystone provide in OpenStack?", options: ["Identity and authentication service", "Storage", "Networking", "Compute"], correct: 0 },
            { q: "What's Glance used for in OpenStack?", options: ["Image service for VM images", "Monitoring", "Networking", "Storage"], correct: 0 },
        ],
        3: [
            { q: "What's the role of Neutron?", options: ["Network connectivity as a service", "Block storage", "Object storage", "Orchestration"], correct: 0 },
            { q: "What does Cinder provide?", options: ["Block storage volumes", "Object storage", "Networking", "Identity"], correct: 0 },
            { q: "What's Swift in OpenStack?", options: ["Object storage service", "Block storage", "Networking", "Compute"], correct: 0 },
            { q: "What's Heat used for?", options: ["Orchestration with templates", "Monitoring", "Networking", "Storage"], correct: 0 },
        ],
        4: [
            { q: "How does Waldur integrate with OpenStack?", options: ["Via OpenStack APIs to provision and manage resources", "Direct database access", "SSH only", "Manual sync"], correct: 0 },
            { q: "What's a Nova flavor?", options: ["VM size specification (CPU, RAM, disk)", "Network type", "Storage type", "User role"], correct: 0 },
            { q: "What's a security group in OpenStack?", options: ["Firewall rules for instances", "User group", "Storage group", "Network group"], correct: 0 },
            { q: "What's floating IP used for?", options: ["Public IP that can move between instances", "Private IP", "DNS name", "Load balancer"], correct: 0 },
        ],
        5: [
            { q: "What's a Keystone domain used for?", options: ["Namespace for projects and users for multi-tenancy", "DNS resolution", "Network isolation", "Storage pools"], correct: 0 },
            { q: "How does OpenStack handle multi-region deployments?", options: ["Multiple regions with shared Keystone", "Single region only", "Automatic replication", "External tools"], correct: 0 },
            { q: "What's Ceph integration with OpenStack?", options: ["Distributed storage backend for Cinder/Glance", "Compute service", "Network service", "Identity service"], correct: 0 },
            { q: "What's the relationship between Nova and Placement?", options: ["Placement tracks resource inventory for Nova scheduling", "Same service", "Placement replaced Nova", "No relationship"], correct: 0 },
            { q: "How do you troubleshoot Nova instance launch failures?", options: ["Check nova-compute logs, placement, scheduler", "Restart OpenStack", "Reinstall", "Contact support"], correct: 0 },
        ]
    },

    's-kubernetes': {
        1: [
            { q: "What is Kubernetes primarily used for?", options: ["Container orchestration", "Virtual machine management", "Database clustering", "Network routing"], correct: 0 },
            { q: "What's kubectl?", options: ["Command-line tool for Kubernetes", "Kubernetes service", "Container runtime", "Network plugin"], correct: 0 },
            { q: "What's a Kubernetes cluster?", options: ["Set of nodes running containerized applications", "Single container", "Network", "Storage"], correct: 0 },
        ],
        2: [
            { q: "What is a Helm chart?", options: ["Package of Kubernetes resources", "Monitoring dashboard", "Network diagram", "Storage class"], correct: 0 },
            { q: "What's a Kubernetes node?", options: ["Machine (physical/virtual) running pods", "Container", "Network", "Storage"], correct: 0 },
            { q: "What's the control plane in Kubernetes?", options: ["Components that manage cluster state", "Worker nodes", "Containers", "Storage"], correct: 0 },
        ],
        3: [
            { q: "What's a Kubernetes operator?", options: ["Custom controller that extends K8s API", "Human administrator", "CLI tool", "Monitoring agent"], correct: 0 },
            { q: "What does kubectl port-forward do?", options: ["Tunnels local port to pod port", "Opens firewall", "Redirects DNS", "Forwards logs"], correct: 0 },
            { q: "What's an Ingress in Kubernetes?", options: ["HTTP/HTTPS routing to services", "Internal network", "Storage", "Compute"], correct: 0 },
            { q: "What's a ServiceAccount used for?", options: ["Identity for pods to access API", "User account", "Billing account", "Storage account"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between ClusterIP and LoadBalancer service types?", options: ["ClusterIP is internal only, LoadBalancer exposes externally", "Same", "ClusterIP is external", "LoadBalancer is internal"], correct: 0 },
            { q: "What's a PodDisruptionBudget?", options: ["Ensures minimum pods available during disruption", "Cost budget", "Resource budget", "Network budget"], correct: 0 },
            { q: "What's kube-proxy responsible for?", options: ["Network rules for service communication", "API server proxy", "Storage proxy", "Container proxy"], correct: 0 },
            { q: "What's a sidecar container pattern?", options: ["Helper container alongside main container in pod", "Separate pod", "External service", "Network pattern"], correct: 0 },
        ],
        5: [
            { q: "How do you implement zero-downtime deployments in K8s?", options: ["Rolling updates with readiness probes", "Delete and recreate", "Manual switchover", "Downtime required"], correct: 0 },
            { q: "What's a Custom Resource Definition (CRD)?", options: ["Extend Kubernetes API with custom resources", "Core resource", "Built-in type", "Network config"], correct: 0 },
            { q: "How does horizontal pod autoscaling work?", options: ["Metrics server monitors, HPA adjusts replicas", "Manual scaling", "Vertical only", "No autoscaling"], correct: 0 },
            { q: "What's pod priority and preemption?", options: ["Higher priority pods can evict lower priority", "No priorities", "Equal priority", "Manual preemption"], correct: 0 },
            { q: "What's the difference between RollingUpdate and Recreate deployment strategies?", options: ["RollingUpdate has no downtime, Recreate has brief downtime", "Same", "Recreate is faster", "RollingUpdate has downtime"], correct: 0 },
        ]
    },

    's-slurm': {
        1: [
            { q: "What is SLURM?", options: ["HPC workload manager and job scheduler", "Programming language", "Storage system", "Network protocol"], correct: 0 },
            { q: "What does SLURM stand for?", options: ["Simple Linux Utility for Resource Management", "System Level User Resource Manager", "Scalable Linux Unified Resource Manager", "Standard Linux User Resource Monitor"], correct: 0 },
            { q: "What environments typically use SLURM?", options: ["HPC clusters, supercomputers, research computing", "Web servers", "Mobile apps", "Desktop applications"], correct: 0 },
        ],
        2: [
            { q: "What's a SLURM partition?", options: ["Group of nodes with shared properties", "Disk partition", "Network segment", "User group"], correct: 0 },
            { q: "What command submits a job to SLURM?", options: ["sbatch", "slurm-submit", "qsub", "run-job"], correct: 0 },
            { q: "What's the difference between sbatch and srun?", options: ["sbatch submits batch script, srun runs interactive/parallel", "Same command", "srun is deprecated", "sbatch is interactive"], correct: 0 },
        ],
        3: [
            { q: "What does squeue show?", options: ["Current job queue status", "Storage quota", "User permissions", "Node hardware"], correct: 0 },
            { q: "What's a job array in SLURM?", options: ["Multiple similar jobs submitted as one", "Array of nodes", "Data structure", "Storage array"], correct: 0 },
            { q: "What does scancel do?", options: ["Cancel pending or running jobs", "Scan for errors", "Cancel users", "Scan nodes"], correct: 0 },
            { q: "What's a SLURM reservation?", options: ["Reserved resources for specific users/jobs", "Hotel booking", "Disk reservation", "Memory reservation"], correct: 0 },
        ],
        4: [
            { q: "How does SLURM accounting work?", options: ["Tracks resource usage per user/project for fairshare", "Simple logging", "No tracking", "External only"], correct: 0 },
            { q: "What's sacct used for?", options: ["View accounting data for completed jobs", "Account management", "Access control", "System accounts"], correct: 0 },
            { q: "What's a QOS (Quality of Service) in SLURM?", options: ["Priority and resource limits for job classes", "Network quality", "Service level", "Support tier"], correct: 0 },
            { q: "How do you request specific resources in sbatch?", options: ["#SBATCH directives like --nodes, --cpus-per-task", "Command line only", "Config file", "Cannot specify"], correct: 0 },
        ],
        5: [
            { q: "What's fairshare scheduling in SLURM?", options: ["Priority based on historical usage vs allocation", "Equal time", "First come first served", "Random"], correct: 0 },
            { q: "How does Waldur integrate with SLURM?", options: ["Track allocations, submit jobs, report usage", "No integration", "Direct database", "SSH only"], correct: 0 },
            { q: "What's a SLURM federation?", options: ["Multiple clusters managed together", "Single cluster", "User group", "Network"], correct: 0 },
            { q: "What's job dependency in SLURM?", options: ["Jobs that wait for other jobs to complete", "Code dependency", "Package dependency", "No dependencies"], correct: 0 },
            { q: "How do you troubleshoot job failures in SLURM?", options: ["Check job output, scontrol show job, sacct", "Restart cluster", "Contact admin only", "Cannot troubleshoot"], correct: 0 },
        ]
    },

    's-oidc': {
        1: [
            { q: "What does OIDC stand for?", options: ["OpenID Connect", "Open ID Connection", "Online Identity Control", "Open Internet Domain Control"], correct: 0 },
            { q: "What problem does OIDC solve?", options: ["Federated authentication and identity", "Data storage", "Network routing", "File sharing"], correct: 0 },
            { q: "Is OIDC related to OAuth?", options: ["Yes, OIDC is built on top of OAuth 2.0", "No relationship", "OIDC replaces OAuth", "OAuth is newer"], correct: 0 },
        ],
        2: [
            { q: "What's the relationship between OIDC and OAuth 2.0?", options: ["OIDC is identity layer on top of OAuth 2.0", "Completely separate", "OAuth replaces OIDC", "Same protocol"], correct: 0 },
            { q: "What is an ID token?", options: ["JWT containing user identity claims", "Session cookie", "Password hash", "API key"], correct: 0 },
            { q: "What's an access token used for?", options: ["Authorize API requests", "User identification", "Password reset", "Session management"], correct: 0 },
        ],
        3: [
            { q: "What's the authorization code flow?", options: ["Server-side flow where code is exchanged for tokens", "Direct token issuance", "Password flow", "Device flow"], correct: 0 },
            { q: "What is PKCE used for?", options: ["Protect authorization code flow for public clients", "Encryption", "Password storage", "Session management"], correct: 0 },
            { q: "What's the difference between ID token and access token?", options: ["ID token identifies user, access token authorizes API access", "Same thing", "Access token identifies", "ID token authorizes"], correct: 0 },
            { q: "What's a refresh token?", options: ["Token to get new access tokens without re-authentication", "Password refresh", "Session refresh", "Cache refresh"], correct: 0 },
        ],
        4: [
            { q: "What are OIDC scopes?", options: ["Define what user information is accessible", "Security boundaries", "Network segments", "Rate limits"], correct: 0 },
            { q: "What's the 'openid' scope required for?", options: ["Indicates OIDC request, returns ID token", "API access", "Admin access", "Optional scope"], correct: 0 },
            { q: "What claims are in the 'profile' scope?", options: ["name, family_name, given_name, picture, etc.", "Email only", "Phone only", "Address only"], correct: 0 },
            { q: "What's the userinfo endpoint?", options: ["Returns claims about authenticated user", "Login endpoint", "Logout endpoint", "Token endpoint"], correct: 0 },
        ],
        5: [
            { q: "How do you validate an ID token?", options: ["Verify signature, issuer, audience, expiration", "Check database", "Trust always", "Hash comparison"], correct: 0 },
            { q: "What's the discovery document (.well-known/openid-configuration)?", options: ["Metadata about OIDC provider endpoints and capabilities", "User directory", "Configuration file", "Log file"], correct: 0 },
            { q: "How does Waldur use OIDC?", options: ["Authenticate users via external identity providers", "Internal auth only", "No OIDC support", "API authentication"], correct: 0 },
            { q: "What's token introspection?", options: ["Validate and get info about token from authorization server", "View token contents", "Refresh token", "Revoke token"], correct: 0 },
            { q: "What's the implicit flow and why is it discouraged?", options: ["Tokens in URL fragment, security risks", "Most secure", "Recommended flow", "Server-side flow"], correct: 0 },
        ]
    },

    's-ansible': {
        1: [
            { q: "What is Ansible used for?", options: ["IT automation and configuration management", "Container runtime", "Programming language", "Database"], correct: 0 },
            { q: "Is Ansible agentless?", options: ["Yes, uses SSH for communication", "No, requires agent", "Sometimes", "Depends on OS"], correct: 0 },
            { q: "What language are Ansible playbooks written in?", options: ["YAML", "JSON", "Python", "XML"], correct: 0 },
        ],
        2: [
            { q: "What is an Ansible playbook?", options: ["YAML file defining automation tasks", "Python script", "Shell script", "Config file"], correct: 0 },
            { q: "What's an Ansible inventory?", options: ["List of managed hosts", "Storage of variables", "Task queue", "Role collection"], correct: 0 },
            { q: "What's an Ansible task?", options: ["Single action to execute (module call)", "Collection of playbooks", "Inventory entry", "Variable"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between a role and a playbook?", options: ["Role is reusable component, playbook orchestrates roles", "Same thing", "Role is larger", "Playbook is reusable"], correct: 0 },
            { q: "What does 'ansible-playbook -i inventory playbook.yml' do?", options: ["Runs playbook against hosts in inventory", "Creates inventory", "Validates playbook", "Generates docs"], correct: 0 },
            { q: "What's an Ansible module?", options: ["Unit of code that performs specific action", "Configuration file", "Log file", "Template"], correct: 0 },
            { q: "What's a handler in Ansible?", options: ["Task triggered by notification from other tasks", "Error handler", "Event handler", "File handler"], correct: 0 },
        ],
        4: [
            { q: "What is Ansible AWX/Tower?", options: ["Web UI and API for Ansible automation", "Cloud provider", "Database", "Monitoring tool"], correct: 0 },
            { q: "What's Ansible Galaxy?", options: ["Repository for sharing roles and collections", "Cloud service", "IDE", "Testing tool"], correct: 0 },
            { q: "What are Ansible facts?", options: ["System information gathered from managed hosts", "User facts", "Network facts", "Storage facts"], correct: 0 },
            { q: "What's idempotency in Ansible context?", options: ["Running playbook multiple times produces same result", "Running once", "Random execution", "No guarantee"], correct: 0 },
        ],
        5: [
            { q: "How do you handle secrets in Ansible?", options: ["Ansible Vault for encrypted variables", "Plain text", "Environment only", "Cannot handle secrets"], correct: 0 },
            { q: "What's an Ansible collection?", options: ["Distribution format for roles, modules, plugins", "File collection", "Log collection", "User collection"], correct: 0 },
            { q: "How do you test Ansible playbooks?", options: ["Molecule for testing, --check for dry run", "No testing", "Manual only", "External tools only"], correct: 0 },
            { q: "What's Ansible callback plugins?", options: ["Customize output and behavior of playbook runs", "Network callbacks", "User callbacks", "Storage callbacks"], correct: 0 },
            { q: "How does Ansible handle failed tasks?", options: ["Stop by default, can use ignore_errors or block/rescue", "Continue always", "Retry automatically", "Cannot handle"], correct: 0 },
        ]
    },

    's-monitoring': {
        1: [
            { q: "What is Prometheus?", options: ["Time-series monitoring system", "Log aggregator", "APM tool", "Tracing system"], correct: 0 },
            { q: "What's the pull vs push model in monitoring?", options: ["Pull: monitor fetches metrics; Push: targets send metrics", "Same thing", "Pull is deprecated", "Push is deprecated"], correct: 0 },
            { q: "What type of data does Prometheus store?", options: ["Time-series metrics", "Logs only", "Traces only", "Events only"], correct: 0 },
        ],
        2: [
            { q: "What is Grafana used for?", options: ["Visualization and dashboards", "Data collection", "Alerting only", "Log storage"], correct: 0 },
            { q: "What's a Prometheus metric type 'counter'?", options: ["Cumulative value that only increases", "Current value", "Distribution", "Boolean"], correct: 0 },
            { q: "What's a Prometheus metric type 'gauge'?", options: ["Value that can go up and down", "Only increases", "Histogram", "Summary"], correct: 0 },
        ],
        3: [
            { q: "What is PromQL?", options: ["Prometheus Query Language", "Postgres extension", "Python library", "Queue system"], correct: 0 },
            { q: "What's the ELK stack?", options: ["Elasticsearch, Logstash, Kibana", "Error Logging Kit", "Event Log Keeper", "Elastic Load Keeper"], correct: 0 },
            { q: "What's an exporter in Prometheus?", options: ["Service exposing metrics in Prometheus format", "Data export tool", "Log exporter", "Report generator"], correct: 0 },
            { q: "What's a service discovery in Prometheus?", options: ["Automatically find targets to monitor", "DNS service", "Network discovery", "User discovery"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between metrics and logs?", options: ["Metrics are numeric measurements, logs are event records", "Same thing", "Logs are numeric", "Metrics are events"], correct: 0 },
            { q: "What's distributed tracing?", options: ["Track requests across multiple services", "Trace files", "Network tracing", "User tracking"], correct: 0 },
            { q: "What's Alertmanager in Prometheus ecosystem?", options: ["Handles alerts from Prometheus, routes notifications", "Generates alerts", "Stores alerts", "Views alerts"], correct: 0 },
            { q: "What are labels in Prometheus?", options: ["Key-value pairs for metric identification", "Display labels", "Category labels", "User labels"], correct: 0 },
        ],
        5: [
            { q: "How do you implement effective alerting?", options: ["Alert on symptoms, use severity levels, avoid alert fatigue", "Alert on everything", "No alerts", "Email only"], correct: 0 },
            { q: "What's cardinality in monitoring context?", options: ["Number of unique label combinations for a metric", "Data size", "Query speed", "Storage format"], correct: 0 },
            { q: "What's the difference between blackbox and whitebox monitoring?", options: ["Blackbox: external probing; Whitebox: internal metrics", "Same approach", "Blackbox is internal", "Whitebox is external"], correct: 0 },
            { q: "What are the four golden signals of monitoring?", options: ["Latency, traffic, errors, saturation", "CPU, memory, disk, network", "Requests, responses, errors, time", "Users, sessions, pages, clicks"], correct: 0 },
            { q: "How do you handle high-cardinality metrics?", options: ["Limit labels, aggregate, use recording rules", "Store everything", "Ignore cardinality", "Cannot handle"], correct: 0 },
        ]
    }
};

// Get random questions for a skill and level
function getQuestionsForSkill(skillId, level, count = 5) {
    const skillQuestions = questions[skillId];
    if (!skillQuestions) return [];

    const levelQuestions = skillQuestions[level];
    if (!levelQuestions || levelQuestions.length === 0) return [];

    // Shuffle and return requested count
    const shuffled = [...levelQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get all available levels for a skill
function getAvailableLevels(skillId) {
    const skillQuestions = questions[skillId];
    if (!skillQuestions) return [];
    return Object.keys(skillQuestions).map(Number).sort((a, b) => a - b);
}

// Check if skill has questions
function hasQuestions(skillId) {
    return skillId in questions;
}
