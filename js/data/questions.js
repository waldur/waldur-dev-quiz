// Waldur Quest - Question Bank
// Questions organized by skill ID and difficulty level (1-5)

const questions = {
    // ============================================================================
    // LITERACY TIER
    // ============================================================================

    'l-cli': {
        1: [
            { q: "Which command lists files in the current directory?", options: ["ls", "cd", "rm", "cat"], correct: 0 },
            { q: "What does 'cd ..' do?", options: ["Move to parent directory", "Create directory", "Delete directory", "List files"], correct: 0 },
            { q: "Which command prints the current directory path?", options: ["pwd", "path", "dir", "where"], correct: 0 },
        ],
        2: [
            { q: "What does 'ls -la' show that 'ls' doesn't?", options: ["Hidden files and details", "Only directories", "File contents", "Running processes"], correct: 0 },
            { q: "How do you redirect output to a file?", options: ["> filename", "| filename", ">> filename only appends", "< filename"], correct: 0 },
            { q: "What does the pipe operator '|' do?", options: ["Passes output to another command", "Redirects to file", "Creates a new process", "Copies files"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between '>' and '>>'?", options: ["Overwrite vs append", "Same thing", "Text vs binary", "Local vs remote"], correct: 0 },
            { q: "How do you find files by name recursively?", options: ["find . -name 'pattern'", "ls -R pattern", "grep pattern", "search pattern"], correct: 0 },
            { q: "What does 'tail -f logfile' do?", options: ["Follow log updates in real-time", "Show first lines", "Count lines", "Delete old entries"], correct: 0 },
        ],
        4: [
            { q: "What does 'xargs' do in a pipeline?", options: ["Converts stdin to arguments", "Executes in parallel", "Filters output", "Sorts results"], correct: 0 },
            { q: "How do you run a command in background?", options: ["Append &", "Prefix bg", "Use nohup only", "Ctrl+Z"], correct: 0 },
        ],
        5: [
            { q: "What's the purpose of /dev/null?", options: ["Discard output silently", "Generate random data", "Root device", "Network interface"], correct: 0 },
            { q: "How do you capture both stdout and stderr to a file?", options: ["command &> file", "command > file", "command 2> file", "command | file"], correct: 0 },
        ]
    },

    'l-git-basics': {
        1: [
            { q: "What command downloads a repository?", options: ["git clone", "git pull", "git fetch", "git download"], correct: 0 },
            { q: "What does 'git status' show?", options: ["Changed files and staging area", "Commit history", "Remote branches", "Config settings"], correct: 0 },
            { q: "How do you stage a file for commit?", options: ["git add filename", "git stage filename", "git commit filename", "git push filename"], correct: 0 },
        ],
        2: [
            { q: "What's the difference between 'git pull' and 'git fetch'?", options: ["Pull also merges, fetch only downloads", "They're the same", "Fetch is faster", "Pull is local only"], correct: 0 },
            { q: "How do you create a new branch?", options: ["git checkout -b name", "git branch -new name", "git create name", "git new name"], correct: 0 },
            { q: "What does 'git commit -m' do?", options: ["Commit with inline message", "Commit to main", "Commit and merge", "Commit without staging"], correct: 0 },
        ],
        3: [
            { q: "How do you undo the last commit but keep changes?", options: ["git reset --soft HEAD~1", "git revert HEAD", "git undo", "git rollback"], correct: 0 },
            { q: "What's a pull request / merge request for?", options: ["Request code review before merging", "Pull from remote", "Request access", "Merge immediately"], correct: 0 },
            { q: "How do you see commit history?", options: ["git log", "git history", "git commits", "git show-all"], correct: 0 },
        ],
        4: [
            { q: "When should you use 'git rebase' vs 'git merge'?", options: ["Rebase for clean history, merge preserves context", "Always rebase", "Always merge", "They're identical"], correct: 0 },
            { q: "How do you resolve a merge conflict?", options: ["Edit files, remove markers, stage and commit", "git resolve", "Delete conflicting files", "Reset to remote"], correct: 0 },
        ],
        5: [
            { q: "What does 'git bisect' help you do?", options: ["Find commit that introduced a bug", "Split commits", "Divide repository", "Create branches"], correct: 0 },
            { q: "How do you squash multiple commits?", options: ["git rebase -i with squash", "git squash", "git merge --squash only", "git combine"], correct: 0 },
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
        ],
        4: [
            { q: "What's the difference between ENTRYPOINT and CMD?", options: ["ENTRYPOINT is fixed, CMD provides defaults/arguments", "They're the same", "CMD runs first", "ENTRYPOINT is optional"], correct: 0 },
        ],
        5: [
            { q: "When would you use '--init' flag with docker run?", options: ["Proper signal handling for zombie processes", "Initialize storage", "First run setup", "Interactive mode"], correct: 0 },
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
        ],
        3: [
            { q: "When is Kubernetes appropriate vs simpler solutions?", options: ["Multiple services needing orchestration, scaling, self-healing", "Single static website", "Development only", "Always"], correct: 0 },
            { q: "What does kubectl apply -f do?", options: ["Creates/updates resources from YAML file", "Deletes resources", "Shows logs", "Connects to pod"], correct: 0 },
        ],
        4: [
            { q: "What's the purpose of a ConfigMap?", options: ["Store non-sensitive configuration data", "Store secrets", "Configure networking", "Map storage"], correct: 0 },
        ],
        5: [
            { q: "How do Horizontal Pod Autoscalers work?", options: ["Scale pods based on CPU/memory/custom metrics", "Add more nodes", "Increase pod resources", "Manual scaling"], correct: 0 },
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
        ],
        4: [
            { q: "What are *args and **kwargs?", options: ["Variable positional and keyword arguments", "Pointer arguments", "Required arguments", "Global arguments"], correct: 0 },
            { q: "What's a decorator in Python?", options: ["Function that modifies another function", "Class attribute", "Import statement", "Comment type"], correct: 0 },
        ],
        5: [
            { q: "What's the Global Interpreter Lock (GIL)?", options: ["Mutex preventing true multi-threading for CPU tasks", "Security feature", "Memory manager", "Import lock"], correct: 0 },
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
        ],
        4: [
            { q: "What's the difference between ForeignKey and ManyToManyField?", options: ["FK is one-to-many, M2M is many-to-many relationship", "No difference", "FK is faster", "M2M creates one table"], correct: 0 },
        ],
        5: [
            { q: "How do you optimize N+1 query problems in Django?", options: ["select_related() and prefetch_related()", "Use raw SQL", "Add indexes only", "Increase timeout"], correct: 0 },
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
        ],
        4: [
            { q: "When would you use useCallback?", options: ["Memoize functions to prevent unnecessary re-renders", "Make API calls", "Handle forms", "Route navigation"], correct: 0 },
            { q: "What's the difference between controlled and uncontrolled components?", options: ["Controlled: React manages state; Uncontrolled: DOM manages state", "No difference", "Controlled is faster", "Uncontrolled is newer"], correct: 0 },
        ],
        5: [
            { q: "How does React's reconciliation algorithm work?", options: ["Compares virtual DOM trees using heuristics", "Full DOM replacement", "No comparison", "Server-side only"], correct: 0 },
        ]
    },

    // ============================================================================
    // PRODUCT TIER
    // ============================================================================

    'p-waldur-basics': {
        1: [
            { q: "What is Waldur?", options: ["Cloud resource management platform", "Operating system", "Database", "Programming language"], correct: 0 },
            { q: "What does multi-tenancy mean in Waldur?", options: ["Multiple organizations share the platform", "Multiple servers", "Multiple databases", "Multiple users per account"], correct: 0 },
        ],
        2: [
            { q: "What is a Waldur marketplace?", options: ["Catalog of available resource offerings", "E-commerce store", "App store", "Job board"], correct: 0 },
            { q: "What is a resource in Waldur context?", options: ["Provisioned cloud asset (VM, storage, etc.)", "JSON file", "API endpoint", "User account"], correct: 0 },
        ],
        3: [
            { q: "What's the hierarchy: Organization > Project > ?", options: ["Resource", "User", "Team", "Offering"], correct: 0 },
            { q: "What role does a Provider play in Waldur?", options: ["Backend that fulfills resource requests", "End user", "Administrator", "Billing system"], correct: 0 },
        ],
        4: [
            { q: "How does Waldur handle resource lifecycle states?", options: ["State machine with defined transitions", "Simple on/off", "Manual tracking", "No state management"], correct: 0 },
        ],
        5: [
            { q: "What's the plugin architecture advantage in Waldur?", options: ["Extensible without modifying core", "Faster performance", "Simpler code", "No advantages"], correct: 0 },
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - CS Fundamentals
    // ============================================================================

    'f-data-structures': {
        1: [
            { q: "What is an array?", options: ["Ordered collection with index access", "Key-value store", "Tree structure", "Graph"], correct: 0 },
            { q: "What's the time complexity of array index access?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
        ],
        2: [
            { q: "When would you use a hash map over an array?", options: ["Fast lookup by key", "Ordered data needed", "Memory efficiency", "Simple iteration"], correct: 0 },
            { q: "What's a queue's ordering principle?", options: ["FIFO - First In First Out", "LIFO", "Random", "Priority only"], correct: 0 },
        ],
        3: [
            { q: "In Waldur, why is org hierarchy a tree structure?", options: ["Parent-child relationships, single root", "Circular references", "Flat is simpler", "Performance"], correct: 0 },
            { q: "Why does Celery use queues?", options: ["Process tasks in order they arrived", "Random execution", "Immediate execution", "No specific reason"], correct: 0 },
        ],
        4: [
            { q: "What's the time complexity of hash table insertion (average)?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], correct: 0 },
        ],
        5: [
            { q: "When would a B-tree be better than a binary tree?", options: ["Disk-based storage, minimize I/O", "In-memory only", "Simple data", "Always"], correct: 0 },
        ]
    },

    'f-design-patterns': {
        1: [
            { q: "What is a design pattern?", options: ["Reusable solution to common problem", "Code library", "Framework", "Programming language"], correct: 0 },
        ],
        2: [
            { q: "What does the Factory pattern do?", options: ["Creates objects without specifying exact class", "Destroys objects", "Copies objects", "Validates objects"], correct: 0 },
            { q: "What is a Mixin in Python/Django?", options: ["Class providing methods for other classes to inherit", "Database table", "Template", "Test fixture"], correct: 0 },
        ],
        3: [
            { q: "When would you use the Strategy pattern?", options: ["Swap algorithms at runtime", "Create objects", "Structure data", "Handle errors"], correct: 0 },
            { q: "What's the Observer pattern used for?", options: ["Notify multiple objects of state changes", "Create single instance", "Decorate functions", "Build objects step by step"], correct: 0 },
        ],
        4: [
            { q: "How does the Adapter pattern help?", options: ["Makes incompatible interfaces work together", "Creates new interfaces", "Removes interfaces", "Copies interfaces"], correct: 0 },
        ],
        5: [
            { q: "What's the difference between Proxy and Decorator patterns?", options: ["Proxy controls access, Decorator adds behavior", "Same thing", "Proxy is simpler", "Decorator controls access"], correct: 0 },
        ]
    },

    'f-api-principles': {
        1: [
            { q: "What does REST stand for?", options: ["Representational State Transfer", "Remote Execution State Transfer", "Request-Response State", "Resource State Type"], correct: 0 },
            { q: "Which HTTP method is used to retrieve data?", options: ["GET", "POST", "PUT", "DELETE"], correct: 0 },
        ],
        2: [
            { q: "What HTTP status code indicates 'Created'?", options: ["201", "200", "204", "301"], correct: 0 },
            { q: "What's the difference between PUT and PATCH?", options: ["PUT replaces entire resource, PATCH updates partially", "Same thing", "PATCH replaces", "PUT is partial"], correct: 0 },
        ],
        3: [
            { q: "What does idempotent mean for an API operation?", options: ["Same result regardless of how many times called", "Fast operation", "Secure operation", "Logged operation"], correct: 0 },
            { q: "Which HTTP methods should be idempotent?", options: ["GET, PUT, DELETE", "POST only", "All methods", "None"], correct: 0 },
        ],
        4: [
            { q: "What's HATEOAS in REST?", options: ["Hypermedia links in responses for discoverability", "Authentication method", "Caching strategy", "Error handling"], correct: 0 },
        ],
        5: [
            { q: "How should API versioning be handled?", options: ["URL path, header, or query param with deprecation policy", "Never version", "Break clients", "New domain"], correct: 0 },
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - Software Engineering
    // ============================================================================

    'f-testing': {
        1: [
            { q: "What is a unit test?", options: ["Tests a single function/component in isolation", "Tests entire application", "Tests user interface", "Tests database"], correct: 0 },
            { q: "What does 'assert' do in tests?", options: ["Verifies a condition is true", "Prints output", "Creates data", "Connects to database"], correct: 0 },
        ],
        2: [
            { q: "What's the purpose of test fixtures?", options: ["Set up test data and state", "Run tests faster", "Skip tests", "Generate reports"], correct: 0 },
            { q: "In pytest, how do you mark a test to skip?", options: ["@pytest.mark.skip", "@skip", "# skip", "skip()"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between mocking and stubbing?", options: ["Mocks verify behavior, stubs provide canned responses", "Same thing", "Stubs verify", "Mocks are simpler"], correct: 0 },
            { q: "What is test coverage?", options: ["Percentage of code executed by tests", "Number of tests", "Test speed", "Bug count"], correct: 0 },
        ],
        4: [
            { q: "When should you use integration tests vs unit tests?", options: ["Integration tests for component interactions, unit for isolation", "Always unit", "Always integration", "Never both"], correct: 0 },
        ],
        5: [
            { q: "What's property-based testing?", options: ["Generate random inputs to find edge cases", "Test object properties", "Test CSS", "Performance testing"], correct: 0 },
        ]
    },

    'f-git': {
        1: [
            { q: "What is a branch in Git?", options: ["Pointer to a commit, allows parallel development", "Copy of repository", "Backup", "Server connection"], correct: 0 },
        ],
        2: [
            { q: "What does 'git stash' do?", options: ["Temporarily saves uncommitted changes", "Deletes changes", "Commits changes", "Pushes changes"], correct: 0 },
        ],
        3: [
            { q: "When should you rebase instead of merge?", options: ["Clean linear history for feature branches", "Always", "Never", "Only on main branch"], correct: 0 },
            { q: "What's a fast-forward merge?", options: ["Moving branch pointer when no divergence", "Quick merge", "Forced merge", "Automatic merge"], correct: 0 },
        ],
        4: [
            { q: "What does 'git cherry-pick' do?", options: ["Apply a specific commit to current branch", "Select best commits", "Delete commits", "Rename commits"], correct: 0 },
        ],
        5: [
            { q: "How does 'git reflog' help in recovery?", options: ["Shows all ref changes including 'lost' commits", "Log of references", "Remote log", "Error log"], correct: 0 },
        ]
    },

    'f-docker': {
        1: [
            { q: "What is a Dockerfile?", options: ["Instructions to build a Docker image", "Running container", "Docker configuration", "Container log"], correct: 0 },
        ],
        2: [
            { q: "What does 'docker-compose up' do?", options: ["Starts all services defined in docker-compose.yml", "Updates Docker", "Uploads images", "Shows status"], correct: 0 },
            { q: "What's the purpose of exposing a port in Docker?", options: ["Allow external access to container service", "Increase security", "Reduce memory", "Speed up container"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between COPY and ADD in Dockerfile?", options: ["ADD can extract archives and fetch URLs", "Same thing", "COPY is newer", "ADD is deprecated"], correct: 0 },
            { q: "Why use .dockerignore?", options: ["Exclude files from build context", "Ignore errors", "Skip layers", "Disable caching"], correct: 0 },
        ],
        4: [
            { q: "How do multi-stage builds reduce image size?", options: ["Only final stage artifacts included in image", "Compress files", "Remove layers", "Use smaller base"], correct: 0 },
        ],
        5: [
            { q: "What's the difference between CMD and ENTRYPOINT?", options: ["CMD is overridable, ENTRYPOINT defines executable", "Same", "CMD is newer", "ENTRYPOINT is deprecated"], correct: 0 },
        ]
    },

    'f-ci-cd': {
        1: [
            { q: "What does CI stand for?", options: ["Continuous Integration", "Code Integration", "Continuous Improvement", "Code Inspection"], correct: 0 },
            { q: "What does CD stand for (in CI/CD)?", options: ["Continuous Delivery/Deployment", "Code Delivery", "Continuous Development", "Code Distribution"], correct: 0 },
        ],
        2: [
            { q: "What triggers a CI pipeline typically?", options: ["Code push or merge request", "Manual button only", "Scheduled time only", "Production deployment"], correct: 0 },
            { q: "What's a pipeline stage?", options: ["Group of jobs that run together", "Single command", "Branch name", "Server"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between Continuous Delivery and Deployment?", options: ["Delivery requires manual approval, Deployment is automatic", "Same thing", "Delivery is automatic", "Deployment needs approval"], correct: 0 },
        ],
        4: [
            { q: "What are pipeline artifacts used for?", options: ["Pass build outputs between stages/jobs", "Store secrets", "Log errors", "Cache dependencies"], correct: 0 },
        ],
        5: [
            { q: "How do you implement blue-green deployments?", options: ["Two identical environments, switch traffic after verification", "Single environment", "Gradual rollout", "A/B testing"], correct: 0 },
        ]
    },

    // ============================================================================
    // CORE PLATFORM TIER
    // ============================================================================

    'c-waldur-arch': {
        1: [
            { q: "What's Waldur's backend framework?", options: ["Django REST Framework", "Flask", "FastAPI", "Express"], correct: 0 },
        ],
        2: [
            { q: "What are Structure Apps in Waldur?", options: ["Pluggable modules for different resource types", "Mobile apps", "Database structures", "API endpoints"], correct: 0 },
        ],
        3: [
            { q: "How does Waldur's plugin system work?", options: ["Django apps registered via settings, providing new resource types", "npm packages", "Docker containers", "Microservices"], correct: 0 },
        ],
        4: [
            { q: "What's the role of waldur-core vs plugins?", options: ["Core provides base, plugins add specific integrations", "Core is optional", "Plugins are core", "No difference"], correct: 0 },
        ],
        5: [
            { q: "How do you extend Waldur with custom resource types?", options: ["Create structure app with models, serializers, views, and register", "Modify core code", "Use configuration", "External API"], correct: 0 },
        ]
    },

    'c-marketplace': {
        1: [
            { q: "What is an Offering in Waldur marketplace?", options: ["Template for provisionable resources", "Sales pitch", "User account", "Payment method"], correct: 0 },
        ],
        2: [
            { q: "What's the relationship between Offering and Resource?", options: ["Offering is template, Resource is provisioned instance", "Same thing", "Resource contains Offerings", "No relationship"], correct: 0 },
            { q: "What is an Order in Waldur?", options: ["Request to create/modify/terminate a resource", "Shopping cart", "Invoice", "Report"], correct: 0 },
        ],
        3: [
            { q: "What states can a marketplace Order have?", options: ["Pending, Executing, Done, Erred, etc.", "Only Open/Closed", "No states", "Custom only"], correct: 0 },
        ],
        4: [
            { q: "How do offering components affect pricing?", options: ["Define measurable units (CPU, RAM) with prices", "No effect", "Visual only", "Documentation"], correct: 0 },
        ],
        5: [
            { q: "What's the difference between public and private offerings?", options: ["Public visible to all, private to specific customers", "Same visibility", "Public is free", "Private is external"], correct: 0 },
        ]
    },

    'c-permissions': {
        1: [
            { q: "What does RBAC stand for?", options: ["Role-Based Access Control", "Resource-Based Access Control", "Request-Based Access", "Runtime-Based Access"], correct: 0 },
        ],
        2: [
            { q: "What's a role in Waldur's permission system?", options: ["Set of permissions assignable to users", "User type", "Organization", "Resource"], correct: 0 },
            { q: "At what levels can permissions be assigned in Waldur?", options: ["Customer/Organization, Project, Resource", "User only", "Global only", "Resource only"], correct: 0 },
        ],
        3: [
            { q: "How do project permissions inherit from organization?", options: ["Organization owners have access to all projects", "No inheritance", "Projects override", "Manual only"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between owner and manager roles?", options: ["Owners have full access, managers have limited admin rights", "Same", "Managers have more", "Owner is project level"], correct: 0 },
        ],
        5: [
            { q: "How can you implement custom permission logic?", options: ["Override permission classes in DRF viewsets", "Database flags", "Config file", "Cannot customize"], correct: 0 },
        ]
    },

    // ============================================================================
    // SPECIALIZATION TIER
    // ============================================================================

    's-openstack': {
        1: [
            { q: "What is OpenStack?", options: ["Open source cloud computing platform", "Operating system", "Database", "Container runtime"], correct: 0 },
        ],
        2: [
            { q: "What OpenStack component manages compute (VMs)?", options: ["Nova", "Neutron", "Cinder", "Swift"], correct: 0 },
            { q: "What does Keystone provide in OpenStack?", options: ["Identity and authentication service", "Storage", "Networking", "Compute"], correct: 0 },
        ],
        3: [
            { q: "What's the role of Neutron?", options: ["Network connectivity as a service", "Block storage", "Object storage", "Orchestration"], correct: 0 },
            { q: "What does Cinder provide?", options: ["Block storage volumes", "Object storage", "Networking", "Identity"], correct: 0 },
        ],
        4: [
            { q: "How does Waldur integrate with OpenStack?", options: ["Via OpenStack APIs to provision and manage resources", "Direct database access", "SSH only", "Manual sync"], correct: 0 },
        ],
        5: [
            { q: "What's a Keystone domain used for?", options: ["Namespace for projects and users for multi-tenancy", "DNS resolution", "Network isolation", "Storage pools"], correct: 0 },
        ]
    },

    's-kubernetes': {
        1: [
            { q: "What is Kubernetes primarily used for?", options: ["Container orchestration", "Virtual machine management", "Database clustering", "Network routing"], correct: 0 },
        ],
        2: [
            { q: "What is a Helm chart?", options: ["Package of Kubernetes resources", "Monitoring dashboard", "Network diagram", "Storage class"], correct: 0 },
        ],
        3: [
            { q: "What's a Kubernetes operator?", options: ["Custom controller that extends K8s API", "Human administrator", "CLI tool", "Monitoring agent"], correct: 0 },
            { q: "What does kubectl port-forward do?", options: ["Tunnels local port to pod port", "Opens firewall", "Redirects DNS", "Forwards logs"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between ClusterIP and LoadBalancer service types?", options: ["ClusterIP is internal only, LoadBalancer exposes externally", "Same", "ClusterIP is external", "LoadBalancer is internal"], correct: 0 },
        ],
        5: [
            { q: "How do you implement zero-downtime deployments in K8s?", options: ["Rolling updates with readiness probes", "Delete and recreate", "Manual switchover", "Downtime required"], correct: 0 },
        ]
    },

    's-slurm': {
        1: [
            { q: "What is SLURM?", options: ["HPC workload manager and job scheduler", "Programming language", "Storage system", "Network protocol"], correct: 0 },
        ],
        2: [
            { q: "What's a SLURM partition?", options: ["Group of nodes with shared properties", "Disk partition", "Network segment", "User group"], correct: 0 },
            { q: "What command submits a job to SLURM?", options: ["sbatch", "slurm-submit", "qsub", "run-job"], correct: 0 },
        ],
        3: [
            { q: "What does squeue show?", options: ["Current job queue status", "Storage quota", "User permissions", "Node hardware"], correct: 0 },
            { q: "What's a job array in SLURM?", options: ["Multiple similar jobs submitted as one", "Array of nodes", "Data structure", "Storage array"], correct: 0 },
        ],
        4: [
            { q: "How does SLURM accounting work?", options: ["Tracks resource usage per user/project for fairshare", "Simple logging", "No tracking", "External only"], correct: 0 },
        ],
        5: [
            { q: "What's fairshare scheduling in SLURM?", options: ["Priority based on historical usage vs allocation", "Equal time", "First come first served", "Random"], correct: 0 },
        ]
    },

    's-oidc': {
        1: [
            { q: "What does OIDC stand for?", options: ["OpenID Connect", "Open ID Connection", "Online Identity Control", "Open Internet Domain Control"], correct: 0 },
        ],
        2: [
            { q: "What's the relationship between OIDC and OAuth 2.0?", options: ["OIDC is identity layer on top of OAuth 2.0", "Completely separate", "OAuth replaces OIDC", "Same protocol"], correct: 0 },
            { q: "What is an ID token?", options: ["JWT containing user identity claims", "Session cookie", "Password hash", "API key"], correct: 0 },
        ],
        3: [
            { q: "What's the authorization code flow?", options: ["Server-side flow where code is exchanged for tokens", "Direct token issuance", "Password flow", "Device flow"], correct: 0 },
            { q: "What is PKCE used for?", options: ["Protect authorization code flow for public clients", "Encryption", "Password storage", "Session management"], correct: 0 },
        ],
        4: [
            { q: "What are OIDC scopes?", options: ["Define what user information is accessible", "Security boundaries", "Network segments", "Rate limits"], correct: 0 },
        ],
        5: [
            { q: "How do you validate an ID token?", options: ["Verify signature, issuer, audience, expiration", "Check database", "Trust always", "Hash comparison"], correct: 0 },
        ]
    },

    's-ansible': {
        1: [
            { q: "What is Ansible used for?", options: ["IT automation and configuration management", "Container runtime", "Programming language", "Database"], correct: 0 },
        ],
        2: [
            { q: "What is an Ansible playbook?", options: ["YAML file defining automation tasks", "Python script", "Shell script", "Config file"], correct: 0 },
            { q: "What's an Ansible inventory?", options: ["List of managed hosts", "Storage of variables", "Task queue", "Role collection"], correct: 0 },
        ],
        3: [
            { q: "What's the difference between a role and a playbook?", options: ["Role is reusable component, playbook orchestrates roles", "Same thing", "Role is larger", "Playbook is reusable"], correct: 0 },
            { q: "What does 'ansible-playbook -i inventory playbook.yml' do?", options: ["Runs playbook against hosts in inventory", "Creates inventory", "Validates playbook", "Generates docs"], correct: 0 },
        ],
        4: [
            { q: "What is Ansible AWX/Tower?", options: ["Web UI and API for Ansible automation", "Cloud provider", "Database", "Monitoring tool"], correct: 0 },
        ],
        5: [
            { q: "How do you handle secrets in Ansible?", options: ["Ansible Vault for encrypted variables", "Plain text", "Environment only", "Cannot handle secrets"], correct: 0 },
        ]
    },

    's-monitoring': {
        1: [
            { q: "What is Prometheus?", options: ["Time-series monitoring system", "Log aggregator", "APM tool", "Tracing system"], correct: 0 },
        ],
        2: [
            { q: "What is Grafana used for?", options: ["Visualization and dashboards", "Data collection", "Alerting only", "Log storage"], correct: 0 },
            { q: "What's a Prometheus metric type 'counter'?", options: ["Cumulative value that only increases", "Current value", "Distribution", "Boolean"], correct: 0 },
        ],
        3: [
            { q: "What is PromQL?", options: ["Prometheus Query Language", "Postgres extension", "Python library", "Queue system"], correct: 0 },
            { q: "What's the ELK stack?", options: ["Elasticsearch, Logstash, Kibana", "Error Logging Kit", "Event Log Keeper", "Elastic Load Keeper"], correct: 0 },
        ],
        4: [
            { q: "What's the difference between metrics and logs?", options: ["Metrics are numeric measurements, logs are event records", "Same thing", "Logs are numeric", "Metrics are events"], correct: 0 },
        ],
        5: [
            { q: "How do you implement effective alerting?", options: ["Alert on symptoms, use severity levels, avoid alert fatigue", "Alert on everything", "No alerts", "Email only"], correct: 0 },
        ]
    }
};

// Get random questions for a skill and level
function getQuestionsForSkill(skillId, level, count = 3) {
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
