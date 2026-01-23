// Waldur Quest - Question Bank
// Questions organized by skill ID and difficulty level (1-5)
// Minimum questions per level: L1-2: 3, L3: 4, L4: 4, L5: 5
//
// Question format:
// {
//   q: "Question text",
//   options: ["Option A", "Option B", "Option C", "Option D"],
//   correct: 0,  // Index of correct answer
//   explanation: "Optional: Why this answer is correct",  // Shown after answering
//   learnMore: {  // Optional: Link for further learning
//     url: "https://...",
//     text: "📚 Link text"
//   }
// }

const questions = {
    // ============================================================================
    // LITERACY TIER
    // ============================================================================

    'l-cli': {
        1: [
            {
                q: "Which command lists files in the current directory?",
                options: ["ls", "cd", "rm", "cat"],
                correct: 0,
                explanation: "The 'ls' command lists directory contents. 'cd' changes directory, 'rm' removes files, and 'cat' displays file contents.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html", text: "📚 GNU ls Manual" }
            },
            {
                q: "What does 'cd ..' do?",
                options: ["Move to parent directory", "Create directory", "Delete directory", "List files"],
                correct: 0,
                explanation: "In Unix, '..' represents the parent directory. 'cd ..' navigates one level up in the directory tree.",
                learnMore: { url: "https://linuxcommand.org/lc3_lts0020.php", text: "📚 Navigation Tutorial" }
            },
            {
                q: "Which command prints the current directory path?",
                options: ["pwd", "path", "dir", "where"],
                correct: 0,
                explanation: "'pwd' stands for 'Print Working Directory'. It shows the absolute path of your current location in the filesystem.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html", text: "📚 GNU pwd Manual" }
            },
            {
                q: "What command creates a new directory?",
                options: ["mkdir", "newdir", "create", "md"],
                correct: 0,
                explanation: "'mkdir' stands for 'Make Directory'. Use 'mkdir -p' to create nested directories in one command.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html", text: "📚 GNU mkdir Manual" }
            },
        ],
        2: [
            {
                q: "What does 'ls -la' show that 'ls' doesn't?",
                options: ["Hidden files and details", "Only directories", "File contents", "Running processes"],
                correct: 0,
                explanation: "The '-l' flag shows long format (permissions, size, date), and '-a' shows hidden files (those starting with '.').",
                learnMore: { url: "https://linuxize.com/post/how-to-list-files-in-linux-using-the-ls-command/", text: "📚 ls Command Guide" }
            },
            {
                q: "How do you redirect output to a file?",
                options: ["> filename", "| filename", ">> filename only appends", "< filename"],
                correct: 0,
                explanation: "'>' redirects output and overwrites the file. '>>' appends instead. '|' pipes to another command, '<' reads from a file.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html", text: "📚 Bash Redirections" }
            },
            {
                q: "What does the pipe operator '|' do?",
                options: ["Passes output to another command", "Redirects to file", "Creates a new process", "Copies files"],
                correct: 0,
                explanation: "Pipes connect commands by sending stdout of one command to stdin of the next, enabling powerful command chains.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Pipelines.html", text: "📚 Bash Pipelines" }
            },
            {
                q: "How do you view the contents of a file?",
                options: ["cat filename", "open filename", "view filename", "read filename"],
                correct: 0,
                explanation: "'cat' concatenates and displays file contents. For large files, use 'less' or 'more' for paginated viewing.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html", text: "📚 GNU cat Manual" }
            },
        ],
        3: [
            {
                q: "What's the difference between '>' and '>>'?",
                options: ["Overwrite vs append", "Same thing", "Text vs binary", "Local vs remote"],
                correct: 0,
                explanation: "'>' overwrites the file completely. '>>' appends to the end, preserving existing content. Use >> for log files!",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html", text: "📚 Bash Redirections" }
            },
            {
                q: "How do you find files by name recursively?",
                options: ["find . -name 'pattern'", "ls -R pattern", "grep pattern", "search pattern"],
                correct: 0,
                explanation: "'find' searches directory trees. Use -name for filename patterns, -type f for files only, -mtime for modification time.",
                learnMore: { url: "https://www.gnu.org/software/findutils/manual/html_mono/find.html", text: "📚 GNU Find Manual" }
            },
            {
                q: "What does 'tail -f logfile' do?",
                options: ["Follow log updates in real-time", "Show first lines", "Count lines", "Delete old entries"],
                correct: 0,
                explanation: "The '-f' flag follows the file, displaying new lines as they're appended. Essential for monitoring live logs. Use Ctrl+C to stop.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html", text: "📚 GNU tail Manual" }
            },
            {
                q: "What does 'chmod 755 file' do?",
                options: ["Sets read/write/execute permissions", "Changes file owner", "Moves file", "Compresses file"],
                correct: 0,
                explanation: "755 = rwxr-xr-x (owner: full access, group/others: read+execute). Each digit is owner/group/others. 7=rwx, 5=r-x, 4=r--.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html", text: "📚 GNU chmod Manual" }
            },
            {
                q: "How do you search for text within files?",
                options: ["grep 'text' file", "find 'text' file", "search 'text' file", "look 'text' file"],
                correct: 0,
                explanation: "'grep' searches file contents for patterns. Use -r for recursive, -i for case-insensitive, -n for line numbers.",
                learnMore: { url: "https://www.gnu.org/software/grep/manual/grep.html", text: "📚 GNU grep Manual" }
            },
        ],
        4: [
            {
                q: "What does 'xargs' do in a pipeline?",
                options: ["Converts stdin to arguments", "Executes in parallel", "Filters output", "Sorts results"],
                correct: 0,
                explanation: "'xargs' builds and executes commands from stdin. Example: find . -name '*.log' | xargs rm. Use -I{} for placeholders.",
                learnMore: { url: "https://www.gnu.org/software/findutils/manual/html_node/xargs-invocation.html", text: "📚 GNU xargs Manual" }
            },
            {
                q: "How do you run a command in background?",
                options: ["Append &", "Prefix bg", "Use nohup only", "Ctrl+Z"],
                correct: 0,
                explanation: "Appending '&' runs the command in background immediately. Ctrl+Z suspends a running process, then 'bg' resumes it in background.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Job-Control.html", text: "📚 Bash Job Control" }
            },
            {
                q: "What does 'ps aux' show?",
                options: ["All running processes", "Disk usage", "Network connections", "Memory info"],
                correct: 0,
                explanation: "'ps aux' shows all processes: a=all users, u=user-oriented format, x=processes without terminal. Commonly piped to grep.",
                learnMore: { url: "https://man7.org/linux/man-pages/man1/ps.1.html", text: "📚 ps Manual" }
            },
            {
                q: "How do you find which process is using a port?",
                options: ["lsof -i :port or netstat", "ps port", "find port", "grep port"],
                correct: 0,
                explanation: "'lsof -i :8080' shows processes using port 8080. 'netstat -tlnp' or 'ss -tlnp' also work. Useful for debugging port conflicts.",
                learnMore: { url: "https://man7.org/linux/man-pages/man8/lsof.8.html", text: "📚 lsof Manual" }
            },
        ],
        5: [
            {
                q: "What's the purpose of /dev/null?",
                options: ["Discard output silently", "Generate random data", "Root device", "Network interface"],
                correct: 0,
                explanation: "/dev/null is a 'black hole' - writes disappear, reads return EOF. Use 'command > /dev/null 2>&1' to silence all output.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Null_device", text: "📚 Null Device Wiki" }
            },
            {
                q: "How do you capture both stdout and stderr to a file?",
                options: ["command &> file", "command > file", "command 2> file", "command | file"],
                correct: 0,
                explanation: "'&>' redirects both streams (Bash 4+). Traditional syntax: 'command > file 2>&1'. '2>' redirects only stderr.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html", text: "📚 Bash Redirections" }
            },
            {
                q: "What does 'nohup' do?",
                options: ["Keeps process running after logout", "Stops a process", "Pauses execution", "Changes priority"],
                correct: 0,
                explanation: "'nohup' (no hangup) ignores SIGHUP signal sent when terminal closes. Output goes to nohup.out. Combine with & for background.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html", text: "📚 GNU nohup Manual" }
            },
            {
                q: "How do you set an environment variable for all sessions?",
                options: ["Add to ~/.bashrc or ~/.profile", "export VAR only", "set VAR", "env VAR"],
                correct: 0,
                explanation: "~/.bashrc runs for interactive shells, ~/.profile for login shells. 'export VAR=value' only affects the current session.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html", text: "📚 Bash Startup Files" }
            },
            {
                q: "What does 'awk '{print $1}'' do?",
                options: ["Prints first column of each line", "Prints first line", "Counts words", "Searches text"],
                correct: 0,
                explanation: "AWK processes text line by line. $1 is the first field (column), $2 the second, etc. $0 is the entire line. Powerful for data extraction.",
                learnMore: { url: "https://www.gnu.org/software/gawk/manual/gawk.html", text: "📚 GNU AWK Manual" }
            },
        ]
    },

    'l-git-basics': {
        1: [
            {
                q: "What command downloads a repository?",
                options: ["git clone", "git pull", "git fetch", "git download"],
                correct: 0,
                explanation: "'git clone' creates a local copy of a remote repository, including all branches and history. 'pull' and 'fetch' are for updating existing repos.",
                learnMore: { url: "https://git-scm.com/docs/git-clone", text: "📚 Git Clone Docs" }
            },
            {
                q: "What does 'git status' show?",
                options: ["Changed files and staging area", "Commit history", "Remote branches", "Config settings"],
                correct: 0,
                explanation: "'git status' shows the working tree status: staged changes, unstaged modifications, and untracked files.",
                learnMore: { url: "https://git-scm.com/docs/git-status", text: "📚 Git Status Docs" }
            },
            {
                q: "How do you stage a file for commit?",
                options: ["git add filename", "git stage filename", "git commit filename", "git push filename"],
                correct: 0,
                explanation: "'git add' moves changes to the staging area (index). Use 'git add .' to stage all changes or 'git add -p' for interactive staging.",
                learnMore: { url: "https://git-scm.com/docs/git-add", text: "📚 Git Add Docs" }
            },
            {
                q: "What does 'git init' do?",
                options: ["Creates a new Git repository", "Downloads a repo", "Commits changes", "Creates a branch"],
                correct: 0,
                explanation: "'git init' creates a new .git directory, initializing an empty Git repository. Use this to start version control in a project.",
                learnMore: { url: "https://git-scm.com/docs/git-init", text: "📚 Git Init Docs" }
            },
        ],
        2: [
            {
                q: "What's the difference between 'git pull' and 'git fetch'?",
                options: ["Pull also merges, fetch only downloads", "They're the same", "Fetch is faster", "Pull is local only"],
                correct: 0,
                explanation: "'git fetch' downloads changes without modifying your working directory. 'git pull' = fetch + merge. Use fetch when you want to review changes first.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/syncing/git-fetch", text: "📚 Fetch vs Pull Guide" }
            },
            {
                q: "How do you create a new branch?",
                options: ["git checkout -b name", "git branch -new name", "git create name", "git new name"],
                correct: 0,
                explanation: "'git checkout -b name' creates and switches to a new branch. Modern Git also supports 'git switch -c name' for the same purpose.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/using-branches", text: "📚 Git Branching Guide" }
            },
            {
                q: "What does 'git commit -m' do?",
                options: ["Commit with inline message", "Commit to main", "Commit and merge", "Commit without staging"],
                correct: 0,
                explanation: "The '-m' flag lets you provide a commit message inline. Without it, Git opens an editor for the message. Write clear, descriptive messages!",
                learnMore: { url: "https://cbea.ms/git-commit/", text: "📚 Commit Message Guide" }
            },
            {
                q: "How do you switch to an existing branch?",
                options: ["git checkout branchname", "git switch branchname", "Both A and B work", "git branch branchname"],
                correct: 2,
                explanation: "Both 'git checkout' and 'git switch' can change branches. 'git switch' (introduced in Git 2.23) is more intuitive for branch operations.",
                learnMore: { url: "https://git-scm.com/docs/git-switch", text: "📚 Git Switch Docs" }
            },
        ],
        3: [
            {
                q: "How do you undo the last commit but keep changes?",
                options: ["git reset --soft HEAD~1", "git revert HEAD", "git undo", "git rollback"],
                correct: 0,
                explanation: "'--soft' keeps changes staged, '--mixed' (default) unstages them, '--hard' discards them. 'revert' creates a new commit that undoes changes.",
                learnMore: { url: "https://git-scm.com/docs/git-reset", text: "📚 Git Reset Docs" }
            },
            {
                q: "What's a pull request / merge request for?",
                options: ["Request code review before merging", "Pull from remote", "Request access", "Merge immediately"],
                correct: 0,
                explanation: "PRs/MRs enable code review, discussion, and CI checks before merging. They're central to collaborative Git workflows like GitHub Flow.",
                learnMore: { url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", text: "📚 GitHub PR Guide" }
            },
            {
                q: "How do you see commit history?",
                options: ["git log", "git history", "git commits", "git show-all"],
                correct: 0,
                explanation: "'git log' shows commit history. Add --oneline for compact view, --graph for branch visualization, -p for diffs.",
                learnMore: { url: "https://git-scm.com/docs/git-log", text: "📚 Git Log Docs" }
            },
            {
                q: "What does 'git diff' show?",
                options: ["Changes between commits or working directory", "Different branches", "Remote differences", "Config differences"],
                correct: 0,
                explanation: "'git diff' shows unstaged changes. 'git diff --staged' shows staged changes. 'git diff branch1..branch2' compares branches.",
                learnMore: { url: "https://git-scm.com/docs/git-diff", text: "📚 Git Diff Docs" }
            },
        ],
        4: [
            {
                q: "When should you use 'git rebase' vs 'git merge'?",
                options: ["Rebase for clean history, merge preserves context", "Always rebase", "Always merge", "They're identical"],
                correct: 0,
                explanation: "Rebase rewrites history for a linear timeline - use for local/feature branches. Merge preserves history - use for shared branches. Never rebase public branches!",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing", text: "📚 Merge vs Rebase Guide" }
            },
            {
                q: "How do you resolve a merge conflict?",
                options: ["Edit files, remove markers, stage and commit", "git resolve", "Delete conflicting files", "Reset to remote"],
                correct: 0,
                explanation: "Conflicts show <<<<<<<, =======, >>>>>>> markers. Edit to keep desired code, remove markers, 'git add' the file, then commit.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts", text: "📚 Merge Conflicts Guide" }
            },
            {
                q: "What does 'git stash' do?",
                options: ["Temporarily saves uncommitted changes", "Deletes changes", "Commits changes", "Pushes changes"],
                correct: 0,
                explanation: "Stash saves work-in-progress without committing. 'git stash pop' restores and removes from stash. 'git stash list' shows all stashes.",
                learnMore: { url: "https://git-scm.com/docs/git-stash", text: "📚 Git Stash Docs" }
            },
            {
                q: "How do you see what branches exist on remote?",
                options: ["git branch -r", "git remote branches", "git show remote", "git list branches"],
                correct: 0,
                explanation: "'-r' shows remote branches, '-a' shows all (local + remote). Run 'git fetch' first to update remote branch info.",
                learnMore: { url: "https://git-scm.com/docs/git-branch", text: "📚 Git Branch Docs" }
            },
        ],
        5: [
            {
                q: "What does 'git bisect' help you do?",
                options: ["Find commit that introduced a bug", "Split commits", "Divide repository", "Create branches"],
                correct: 0,
                explanation: "Bisect performs binary search through commits. Mark commits as 'good' or 'bad', and Git finds the first bad commit efficiently.",
                learnMore: { url: "https://git-scm.com/docs/git-bisect", text: "📚 Git Bisect Docs" }
            },
            {
                q: "How do you squash multiple commits?",
                options: ["git rebase -i with squash", "git squash", "git merge --squash only", "git combine"],
                correct: 0,
                explanation: "Interactive rebase (-i) lets you squash, edit, reorder, or drop commits. Change 'pick' to 'squash' or 's' to combine with previous commit.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History", text: "📚 Rewriting History" }
            },
            {
                q: "What does 'git reflog' show?",
                options: ["All ref changes including 'lost' commits", "Reference log only", "Remote log", "Error log"],
                correct: 0,
                explanation: "Reflog tracks all HEAD movements locally - even 'lost' commits after reset. Essential for recovering from mistakes. Entries expire after 90 days.",
                learnMore: { url: "https://git-scm.com/docs/git-reflog", text: "📚 Git Reflog Docs" }
            },
            {
                q: "How do you cherry-pick a commit?",
                options: ["git cherry-pick <commit-hash>", "git pick <commit>", "git copy <commit>", "git select <commit>"],
                correct: 0,
                explanation: "Cherry-pick applies a specific commit to current branch. Useful for backporting fixes. Creates a new commit with the same changes.",
                learnMore: { url: "https://git-scm.com/docs/git-cherry-pick", text: "📚 Git Cherry-pick Docs" }
            },
            {
                q: "What's a Git hook used for?",
                options: ["Run scripts on Git events", "Connect repositories", "Link branches", "Hook remote servers"],
                correct: 0,
                explanation: "Hooks are scripts triggered by Git events: pre-commit (lint), commit-msg (validate message), pre-push (run tests). Found in .git/hooks/.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks", text: "📚 Git Hooks Guide" }
            },
        ]
    },

    'l-containers-101': {
        1: [
            {
                q: "What's the main benefit of containers?",
                options: ["Consistent environment across systems", "Faster than VMs always", "No dependencies needed", "Direct hardware access"],
                correct: 0,
                explanation: "Containers package applications with their dependencies, ensuring 'it works on my machine' translates to 'it works everywhere'.",
                learnMore: { url: "https://docs.docker.com/get-started/overview/", text: "📚 Docker Overview" }
            },
            {
                q: "What's the difference between an image and a container?",
                options: ["Image is template, container is running instance", "They're the same", "Container is template", "Image runs, container stores"],
                correct: 0,
                explanation: "An image is a read-only blueprint (like a class). A container is a running instance of that image (like an object). Multiple containers can share one image.",
                learnMore: { url: "https://docs.docker.com/get-started/overview/#images", text: "📚 Images & Containers" }
            },
            {
                q: "Why are containers considered 'immutable'?",
                options: ["Changes don't persist after restart", "Can't be modified ever", "Read-only filesystem", "No network access"],
                correct: 0,
                explanation: "Container filesystems are ephemeral - changes are lost when the container stops. Use volumes for persistent data. This promotes reproducibility.",
                learnMore: { url: "https://docs.docker.com/storage/volumes/", text: "📚 Docker Volumes" }
            },
        ],
        2: [
            {
                q: "How do you view logs of a container?",
                options: ["docker logs container-name", "docker show logs", "cat /var/log/docker", "docker output"],
                correct: 0,
                explanation: "'docker logs' shows stdout/stderr from the container. Add '-f' to follow logs in real-time, '--tail 100' to see last 100 lines.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/logs/", text: "📚 Docker Logs Docs" }
            },
            {
                q: "What does restart policy 'always' mean?",
                options: ["Container restarts automatically on failure/reboot", "Never stops", "Restarts once", "Manual restart only"],
                correct: 0,
                explanation: "The 'always' restart policy ensures containers restart after crashes and when Docker daemon starts. Use 'unless-stopped' to exclude manual stops.",
                learnMore: { url: "https://docs.docker.com/config/containers/start-containers-automatically/", text: "📚 Restart Policies" }
            },
            {
                q: "Where should container logs typically go?",
                options: ["stdout/stderr for external collection", "Internal log files", "/var/log inside container", "Database"],
                correct: 0,
                explanation: "The 12-factor app principle: log to stdout/stderr, let the platform (Docker, K8s) collect and aggregate logs externally.",
                learnMore: { url: "https://12factor.net/logs", text: "📚 12-Factor Logs" }
            },
        ],
        3: [
            {
                q: "What's the purpose of a volume in Docker?",
                options: ["Persist data outside container lifecycle", "Increase container size", "Share CPU", "Network storage only"],
                correct: 0,
                explanation: "Volumes persist data beyond container lifecycle. Data in the container filesystem is lost when the container is removed. Use volumes for databases, uploads, etc.",
                learnMore: { url: "https://docs.docker.com/storage/volumes/", text: "📚 Docker Volumes" }
            },
            {
                q: "Why use multi-stage builds?",
                options: ["Smaller final images by excluding build tools", "Faster builds", "Multiple containers", "Parallel execution"],
                correct: 0,
                explanation: "Multi-stage builds use multiple FROM statements. Build tools stay in early stages; only artifacts copy to final stage. Results in much smaller production images.",
                learnMore: { url: "https://docs.docker.com/build/building/multi-stage/", text: "📚 Multi-stage Builds" }
            },
            {
                q: "What does 'docker exec -it container bash' do?",
                options: ["Opens interactive shell in running container", "Executes build", "Starts new container", "Shows container info"],
                correct: 0,
                explanation: "'exec' runs a command in a running container. '-i' keeps stdin open, '-t' allocates a TTY. Essential for debugging running containers.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/exec/", text: "📚 Docker exec Docs" }
            },
            {
                q: "What's a Docker network used for?",
                options: ["Allow containers to communicate", "Internet access only", "Storage sharing", "CPU allocation"],
                correct: 0,
                explanation: "Docker networks enable container-to-container communication. Containers on the same network can reach each other by container name as hostname.",
                learnMore: { url: "https://docs.docker.com/network/", text: "📚 Docker Networking" }
            },
        ],
        4: [
            {
                q: "What's the difference between ENTRYPOINT and CMD?",
                options: ["ENTRYPOINT is fixed, CMD provides defaults/arguments", "They're the same", "CMD runs first", "ENTRYPOINT is optional"],
                correct: 0,
                explanation: "ENTRYPOINT defines the executable. CMD provides default arguments that can be overridden. Best practice: ENTRYPOINT for the command, CMD for default args.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact", text: "📚 CMD vs ENTRYPOINT" }
            },
            {
                q: "What does 'docker system prune' do?",
                options: ["Removes unused containers, images, networks", "Updates Docker", "Restarts Docker", "Shows system info"],
                correct: 0,
                explanation: "'prune' removes unused resources. Add '-a' to also remove unused images (not just dangling). Add '--volumes' to include volumes. Reclaims disk space.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/system_prune/", text: "📚 Docker Prune Docs" }
            },
            {
                q: "Why should you use specific image tags instead of 'latest'?",
                options: ["Reproducible builds, avoid unexpected changes", "Faster downloads", "Smaller images", "No reason"],
                correct: 0,
                explanation: "'latest' is mutable - it changes when new versions release. Specific tags (e.g., 'node:18.17.0') ensure reproducible builds and prevent surprise breakages.",
                learnMore: { url: "https://docs.docker.com/develop/dev-best-practices/", text: "📚 Docker Best Practices" }
            },
            {
                q: "What's the purpose of a health check in Docker?",
                options: ["Monitor container application health", "Check disk space", "Verify network", "Test CPU"],
                correct: 0,
                explanation: "HEALTHCHECK tests if the application inside is working (not just if the process is running). Docker marks unhealthy containers, and orchestrators can restart them.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#healthcheck", text: "📚 Docker HEALTHCHECK" }
            },
        ],
        5: [
            {
                q: "When would you use '--init' flag with docker run?",
                options: ["Proper signal handling for zombie processes", "Initialize storage", "First run setup", "Interactive mode"],
                correct: 0,
                explanation: "'--init' adds a tiny init process (tini) as PID 1. It properly forwards signals and reaps zombie processes. Important when your app spawns child processes.",
                learnMore: { url: "https://docs.docker.com/engine/reference/run/#specify-an-init-process", text: "📚 Docker Init Process" }
            },
            {
                q: "What's the security risk of running containers as root?",
                options: ["Container escape could give host root access", "No risk", "Slower performance", "Network issues"],
                correct: 0,
                explanation: "Container root = host root (same UID 0). A container escape vulnerability could give attacker host root access. Always use non-root users in production.",
                learnMore: { url: "https://docs.docker.com/engine/security/rootless/", text: "📚 Rootless Docker" }
            },
            {
                q: "How do you limit container memory usage?",
                options: ["--memory flag or compose memory limit", "Edit container files", "Use smaller image", "Cannot limit"],
                correct: 0,
                explanation: "'docker run --memory=512m' or 'mem_limit: 512m' in compose. Without limits, one container can consume all host memory, affecting others.",
                learnMore: { url: "https://docs.docker.com/config/containers/resource_constraints/", text: "📚 Resource Constraints" }
            },
            {
                q: "What's the difference between bind mounts and volumes?",
                options: ["Volumes are managed by Docker, bind mounts use host paths", "Same thing", "Bind mounts are faster", "Volumes are deprecated"],
                correct: 0,
                explanation: "Volumes: Docker manages storage location, portable, better for production. Bind mounts: you specify exact host path, good for development (live code reload).",
                learnMore: { url: "https://docs.docker.com/storage/", text: "📚 Docker Storage" }
            },
            {
                q: "Why use a non-root user in Dockerfile?",
                options: ["Security - principle of least privilege", "Faster execution", "Smaller image", "Required by Docker"],
                correct: 0,
                explanation: "Non-root users limit damage from container escapes. Add 'USER appuser' after creating the user. Many base images provide non-root users (e.g., 'node' user in node images).",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user", text: "📚 Dockerfile USER" }
            },
        ]
    },

    'l-k8s-concepts': {
        1: [
            {
                q: "What is a Pod in Kubernetes?",
                options: ["Smallest deployable unit, one or more containers", "A cluster", "A node", "A namespace"],
                correct: 0,
                explanation: "A Pod is the atomic unit in K8s - one or more containers sharing network/storage. Containers in a pod share localhost and can communicate via IPC.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/pods/", text: "📚 K8s Pod Docs" }
            },
            {
                q: "What's the role of a Deployment?",
                options: ["Manages pod replicas and updates", "Stores data", "Routes traffic", "Schedules nodes"],
                correct: 0,
                explanation: "Deployments manage ReplicaSets, which manage Pods. They handle rolling updates, rollbacks, and scaling. Most common way to run stateless apps.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/", text: "📚 K8s Deployments" }
            },
            {
                q: "What does a Service do in Kubernetes?",
                options: ["Provides stable network endpoint for pods", "Stores secrets", "Manages storage", "Runs jobs"],
                correct: 0,
                explanation: "Services provide stable IP/DNS for pods (which have ephemeral IPs). Types: ClusterIP (internal), NodePort, LoadBalancer (external).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/service/", text: "📚 K8s Services" }
            },
        ],
        2: [
            {
                q: "What's the difference between a Deployment and a StatefulSet?",
                options: ["StatefulSet maintains pod identity and order", "No difference", "Deployment is newer", "StatefulSet is deprecated"],
                correct: 0,
                explanation: "StatefulSets give pods stable identities (pod-0, pod-1) and ordered deployment/scaling. Use for databases, Kafka, etc. Deployments are for stateless apps.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/", text: "📚 K8s StatefulSets" }
            },
            {
                q: "What is a namespace used for?",
                options: ["Logical separation of resources", "DNS resolution", "Storage allocation", "CPU limits"],
                correct: 0,
                explanation: "Namespaces partition cluster resources for multiple teams/projects. Resources can have same name in different namespaces. Apply quotas per namespace.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/", text: "📚 K8s Namespaces" }
            },
            {
                q: "What's a ReplicaSet?",
                options: ["Ensures specified number of pod replicas are running", "Set of replicated data", "Backup system", "Load balancer"],
                correct: 0,
                explanation: "ReplicaSet maintains desired number of pod replicas. If a pod dies, it creates a new one. Usually managed by Deployments, not created directly.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/", text: "📚 K8s ReplicaSets" }
            },
        ],
        3: [
            {
                q: "When is Kubernetes appropriate vs simpler solutions?",
                options: ["Multiple services needing orchestration, scaling, self-healing", "Single static website", "Development only", "Always"],
                correct: 0,
                explanation: "K8s adds complexity. It shines with microservices, auto-scaling needs, multi-team environments. For simple apps, consider Docker Compose or PaaS.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/", text: "📚 What is K8s?" }
            },
            {
                q: "What does kubectl apply -f do?",
                options: ["Creates/updates resources from YAML file", "Deletes resources", "Shows logs", "Connects to pod"],
                correct: 0,
                explanation: "'apply' creates resources if they don't exist, updates if they do (declarative). 'create' only creates (imperative). Apply is preferred for GitOps.",
                learnMore: { url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/", text: "📚 kubectl Cheatsheet" }
            },
            {
                q: "What's the difference between a Job and a CronJob?",
                options: ["Job runs once, CronJob runs on schedule", "Same thing", "CronJob is deprecated", "Job is scheduled"],
                correct: 0,
                explanation: "Jobs run pods to completion (batch tasks, migrations). CronJobs create Jobs on a schedule (like cron). Both ensure tasks complete successfully.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/job/", text: "📚 K8s Jobs" }
            },
            {
                q: "What does a PersistentVolumeClaim do?",
                options: ["Requests storage resources for pods", "Claims CPU", "Requests memory", "Claims network"],
                correct: 0,
                explanation: "PVC requests storage (size, access mode). K8s matches it to a PersistentVolume. Abstracts storage details from pods - pods just reference the PVC.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/", text: "📚 K8s Storage" }
            },
        ],
        4: [
            {
                q: "What's the purpose of a ConfigMap?",
                options: ["Store non-sensitive configuration data", "Store secrets", "Configure networking", "Map storage"],
                correct: 0,
                explanation: "ConfigMaps store config (env vars, config files) separately from images. Mount as files or inject as env vars. Enables config changes without rebuilding images.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/configuration/configmap/", text: "📚 K8s ConfigMaps" }
            },
            {
                q: "What's the difference between ConfigMap and Secret?",
                options: ["Secrets are base64 encoded and meant for sensitive data", "Same thing", "ConfigMap is encrypted", "Secret is plaintext"],
                correct: 0,
                explanation: "Secrets are base64 encoded (not encrypted by default!) and have special handling (less logging, memory-only). Use Secrets for passwords, API keys, certs.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/configuration/secret/", text: "📚 K8s Secrets" }
            },
            {
                q: "What does a liveness probe do?",
                options: ["Checks if container should be restarted", "Checks if pod is ready for traffic", "Monitors CPU", "Tracks memory"],
                correct: 0,
                explanation: "Liveness probes detect deadlocks/hangs. If it fails, kubelet restarts the container. Use HTTP, TCP, or exec checks. Don't make it too strict!",
                learnMore: { url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/", text: "📚 K8s Probes" }
            },
            {
                q: "What's a DaemonSet used for?",
                options: ["Run a pod on every node", "Manage databases", "Schedule jobs", "Balance load"],
                correct: 0,
                explanation: "DaemonSets ensure one pod per node (or per matching node). Use for node-level concerns: log collectors, monitoring agents, network plugins.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/", text: "📚 K8s DaemonSets" }
            },
        ],
        5: [
            {
                q: "How do Horizontal Pod Autoscalers work?",
                options: ["Scale pods based on CPU/memory/custom metrics", "Add more nodes", "Increase pod resources", "Manual scaling"],
                correct: 0,
                explanation: "HPA monitors metrics (via metrics-server) and adjusts replica count. Configure min/max replicas and target utilization. Works with Deployments/StatefulSets.",
                learnMore: { url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/", text: "📚 K8s HPA" }
            },
            {
                q: "What's the difference between readiness and liveness probes?",
                options: ["Readiness controls traffic, liveness controls restarts", "Same thing", "Readiness restarts", "Liveness routes traffic"],
                correct: 0,
                explanation: "Readiness: 'Can I receive traffic?' (removes from Service endpoints if failing). Liveness: 'Am I alive?' (restarts container if failing). Use both!",
                learnMore: { url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/", text: "📚 K8s Probes" }
            },
            {
                q: "What's a Kubernetes Operator?",
                options: ["Custom controller extending K8s with domain knowledge", "Human operator", "CLI tool", "Monitoring system"],
                correct: 0,
                explanation: "Operators encode operational knowledge in code. They use Custom Resources + custom controllers to manage complex apps (databases, message queues) automatically.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/", text: "📚 K8s Operators" }
            },
            {
                q: "How does pod scheduling work?",
                options: ["Scheduler assigns pods to nodes based on resources/constraints", "Random assignment", "User chooses node", "First available"],
                correct: 0,
                explanation: "kube-scheduler filters nodes (resource requirements, taints, affinity) then scores remaining nodes. Highest score wins. Can be customized or replaced.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/", text: "📚 K8s Scheduler" }
            },
            {
                q: "What's pod affinity/anti-affinity?",
                options: ["Rules for pod placement relative to other pods", "Network settings", "Storage rules", "CPU affinity"],
                correct: 0,
                explanation: "Affinity: 'run near pods with label X'. Anti-affinity: 'run away from pods with label X'. Use for co-locating related pods or spreading replicas.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity", text: "📚 Pod Affinity" }
            },
        ]
    },

    'l-python': {
        1: [
            {
                q: "How do you define a function in Python?",
                options: ["def function_name():", "function function_name():", "fn function_name():", "define function_name():"],
                correct: 0,
                explanation: "Python uses 'def' keyword followed by the function name and parentheses. The colon and indentation define the function body.",
                learnMore: { url: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions", text: "📚 Python Functions" }
            },
            {
                q: "What does 'len()' return?",
                options: ["Length of a sequence", "Last element", "First element", "Sum of elements"],
                correct: 0,
                explanation: "'len()' returns the number of items in a container (list, string, dict, etc.). It's a built-in function, not a method.",
                learnMore: { url: "https://docs.python.org/3/library/functions.html#len", text: "📚 Python len()" }
            },
            {
                q: "How do you create a list in Python?",
                options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
                correct: 0,
                explanation: "Square brackets [] create lists. Curly braces {} create sets or dicts. Parentheses () create tuples. Lists are mutable ordered collections.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists", text: "📚 Python Lists" }
            },
        ],
        2: [
            {
                q: "What's the difference between a list and a tuple?",
                options: ["Lists are mutable, tuples are immutable", "Lists use more memory than tuples always", "Tuples can only hold two elements", "Lists are ordered, tuples are unordered"],
                correct: 0,
                explanation: "Lists can be modified after creation (mutable), tuples cannot (immutable). Use tuples for fixed data, lists for dynamic collections.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences", text: "📚 Tuples vs Lists" }
            },
            {
                q: "How do you handle exceptions in Python?",
                options: ["try/except block", "catch/throw", "handle/error", "error/rescue"],
                correct: 0,
                explanation: "Python uses try/except for exception handling. You can catch specific exceptions and optionally use 'finally' for cleanup code.",
                learnMore: { url: "https://docs.python.org/3/tutorial/errors.html", text: "📚 Python Exceptions" }
            },
            {
                q: "What does 'import os' do?",
                options: ["Makes os module available", "Installs os package", "Creates os object", "Opens operating system"],
                correct: 0,
                explanation: "'import' loads a module into your program's namespace. The 'os' module provides OS-level operations like file paths and environment variables.",
                learnMore: { url: "https://docs.python.org/3/library/os.html", text: "📚 Python os Module" }
            },
        ],
        3: [
            {
                q: "What is a list comprehension?",
                options: ["[x for x in items] - concise list creation", "A list description", "List documentation", "List comparison"],
                correct: 0,
                explanation: "List comprehensions are concise syntax for creating lists: [expr for item in iterable if condition]. More readable and often faster than loops.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions", text: "📚 List Comprehensions" }
            },
            {
                q: "What's a virtual environment for?",
                options: ["Isolated Python dependencies per project", "Faster execution", "Virtual machine", "Testing only"],
                correct: 0,
                explanation: "Virtual environments isolate project dependencies. Each project can have its own package versions. Create with 'python -m venv myenv', activate before use.",
                learnMore: { url: "https://docs.python.org/3/tutorial/venv.html", text: "📚 Python venv Tutorial" }
            },
            {
                q: "What does 'if __name__ == \"__main__\":' do?",
                options: ["Only runs code when script is executed directly", "Checks file name", "Imports module", "Defines main function"],
                correct: 0,
                explanation: "__name__ is '__main__' when the script is run directly, but the module name when imported. This pattern prevents code from running on import.",
                learnMore: { url: "https://docs.python.org/3/library/__main__.html", text: "📚 Python __main__" }
            },
            {
                q: "What's a dictionary in Python?",
                options: ["Key-value data structure", "Word definitions", "Ordered list", "Function collection"],
                correct: 0,
                explanation: "Dicts map keys to values with O(1) average lookup. Keys must be hashable (immutable). Since Python 3.7, dicts maintain insertion order.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries", text: "📚 Python Dictionaries" }
            },
        ],
        4: [
            {
                q: "What are *args and **kwargs?",
                options: ["Variable positional and keyword arguments", "Pointer arguments", "Required arguments", "Global arguments"],
                correct: 0,
                explanation: "*args collects extra positional args as tuple. **kwargs collects extra keyword args as dict. Names are convention - * and ** are the operators.",
                learnMore: { url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists", text: "📚 *args and **kwargs" }
            },
            {
                q: "What's a decorator in Python?",
                options: ["Function that modifies another function", "Class attribute", "Import statement", "Comment type"],
                correct: 0,
                explanation: "Decorators wrap functions to add behavior. @decorator is syntactic sugar for func = decorator(func). Common uses: logging, caching, auth checks.",
                learnMore: { url: "https://realpython.com/primer-on-python-decorators/", text: "📚 Decorators Guide" }
            },
            {
                q: "What's the difference between a generator and a list?",
                options: ["Generator yields items lazily, uses less memory", "Generators can be indexed, lists cannot", "Lists can only iterate once, generators multiple times", "Generators store all items in memory upfront"],
                correct: 0,
                explanation: "Generators produce values on-demand with 'yield'. Memory efficient for large sequences. Can only iterate once. Use (x for x in items) for generator expressions.",
                learnMore: { url: "https://docs.python.org/3/howto/functional.html#generators", text: "📚 Python Generators" }
            },
            {
                q: "What does 'with open()' do differently than just 'open()'?",
                options: ["Automatically closes file, handles exceptions", "Opens file in binary mode by default", "Allows multiple files to be opened at once", "Provides buffered reading for better performance"],
                correct: 0,
                explanation: "'with' is a context manager that ensures cleanup (file.close()) even if exceptions occur. Always use 'with' for files, locks, connections.",
                learnMore: { url: "https://docs.python.org/3/reference/compound_stmts.html#with", text: "📚 Context Managers" }
            },
        ],
        5: [
            {
                q: "What's the Global Interpreter Lock (GIL)?",
                options: ["Mutex preventing true multi-threading for CPU tasks", "Security feature", "Memory manager", "Import lock"],
                correct: 0,
                explanation: "The GIL ensures only one thread executes Python bytecode at a time. Threads still help with I/O-bound tasks. For CPU-bound parallelism, use multiprocessing.",
                learnMore: { url: "https://realpython.com/python-gil/", text: "📚 Understanding the GIL" }
            },
            {
                q: "How do you achieve true parallelism in Python?",
                options: ["multiprocessing module", "threading module", "async/await", "generators"],
                correct: 0,
                explanation: "multiprocessing spawns separate processes (each with own GIL). Threading helps I/O-bound tasks. async/await is single-threaded concurrency for I/O.",
                learnMore: { url: "https://docs.python.org/3/library/multiprocessing.html", text: "📚 multiprocessing" }
            },
            {
                q: "What's a metaclass in Python?",
                options: ["Class of a class, controls class creation", "Abstract class", "Base class", "Static class"],
                correct: 0,
                explanation: "Metaclasses are 'classes of classes' - they control how classes are created. type() is the default metaclass. Rarely needed, but powerful for frameworks.",
                learnMore: { url: "https://realpython.com/python-metaclasses/", text: "📚 Python Metaclasses" }
            },
            {
                q: "What's the difference between @staticmethod and @classmethod?",
                options: ["staticmethod has no self/cls, classmethod receives class", "classmethod can only be called on instances", "staticmethod can access instance attributes", "classmethod is used for private methods only"],
                correct: 0,
                explanation: "@staticmethod: no automatic first argument (like plain function). @classmethod: receives class as first arg (cls), useful for alternative constructors.",
                learnMore: { url: "https://docs.python.org/3/library/functions.html#classmethod", text: "📚 classmethod/staticmethod" }
            },
            {
                q: "What are __slots__ used for?",
                options: ["Memory optimization by restricting attributes", "Time slots", "Method slots", "Import slots"],
                correct: 0,
                explanation: "__slots__ replaces instance __dict__ with fixed-size array. Saves memory for many instances. Prevents adding arbitrary attributes. Use for data classes with many instances.",
                learnMore: { url: "https://docs.python.org/3/reference/datamodel.html#slots", text: "📚 Python __slots__" }
            },
        ]
    },

    'l-django': {
        1: [
            {
                q: "What is Django?",
                options: ["Python web framework with batteries included", "Standalone Python ORM for databases", "Python template engine for HTML generation", "Python package manager and build tool"],
                correct: 0,
                explanation: "Django is a high-level Python web framework with 'batteries included': ORM, admin, auth, forms. Follows MTV (Model-Template-View) pattern.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/intro/overview/", text: "📚 Django Overview" }
            },
            {
                q: "What does 'manage.py runserver' do?",
                options: ["Starts development server", "Deploys to production", "Creates database", "Installs packages"],
                correct: 0,
                explanation: "runserver starts a lightweight development server with auto-reload. Never use in production - use gunicorn/uwsgi behind nginx instead.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/django-admin/#runserver", text: "📚 Django runserver" }
            },
            {
                q: "What is a Django model?",
                options: ["Python class representing a database table", "Configuration for URL routing and dispatch", "Function that handles HTTP requests", "File containing HTML with template tags"],
                correct: 0,
                explanation: "Models define database schema as Python classes. Each model class = one table. Attributes = columns. Django generates SQL from models automatically.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/models/", text: "📚 Django Models" }
            },
        ],
        2: [
            {
                q: "What does 'makemigrations' do?",
                options: ["Creates migration files from model changes", "Runs migrations", "Deletes migrations", "Shows migration status"],
                correct: 0,
                explanation: "makemigrations detects model changes and creates migration files (Python scripts). migrate actually applies them. Always makemigrations before migrate.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/migrations/", text: "📚 Django Migrations" }
            },
            {
                q: "What is the Django ORM?",
                options: ["Object-Relational Mapper for database queries", "Online Resource Manager", "Output Render Module", "Object Registry Model"],
                correct: 0,
                explanation: "The ORM translates Python objects to database rows and vice versa. Write Python, not SQL. Supports multiple databases with same code.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/queries/", text: "📚 Django ORM Queries" }
            },
            {
                q: "How do you query all objects of a model?",
                options: ["Model.objects.all()", "Model.all()", "Model.query.all()", "get_all(Model)"],
                correct: 0,
                explanation: "'objects' is the default Manager. all() returns a QuerySet of all rows. QuerySets are lazy - database isn't hit until you iterate or evaluate.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/models/querysets/", text: "📚 QuerySet API" }
            },
        ],
        3: [
            {
                q: "What's the purpose of Django admin?",
                options: ["Auto-generated CRUD interface for models", "Command line tool", "Deployment tool", "Testing framework"],
                correct: 0,
                explanation: "Django admin auto-generates an admin interface from your models. Great for content management and debugging. Highly customizable with ModelAdmin classes.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/contrib/admin/", text: "📚 Django Admin" }
            },
            {
                q: "What does a Django view do?",
                options: ["Handles HTTP request and returns response", "Defines database schema as Python class", "Renders HTML with dynamic content", "Maps URL patterns to handlers"],
                correct: 0,
                explanation: "Views receive HTTP requests, process data (query DB, validate forms), and return HTTP responses. The 'controller' in MVC terms.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/http/views/", text: "📚 Django Views" }
            },
            {
                q: "What's the difference between FBV and CBV?",
                options: ["Function-based vs Class-based views", "Fast vs Basic views", "Frontend vs Backend", "File vs Class"],
                correct: 0,
                explanation: "FBVs are simple functions. CBVs use classes with inheritance for reusability (ListView, CreateView, etc.). CBVs reduce boilerplate for common patterns.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/class-based-views/", text: "📚 Class-based Views" }
            },
            {
                q: "What does 'migrate' command do?",
                options: ["Applies migrations to database", "Creates migrations", "Reverts migrations", "Shows migrations"],
                correct: 0,
                explanation: "'migrate' applies pending migrations to the database, creating/altering tables. Use 'migrate app_name 0001' to migrate to specific version.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/django-admin/#migrate", text: "📚 Django migrate" }
            },
        ],
        4: [
            {
                q: "What's the difference between ForeignKey and ManyToManyField?",
                options: ["FK is one-to-many, M2M is many-to-many relationship", "FK requires through table, M2M doesn't", "M2M can only link to same model type", "FK is for optional fields, M2M for required"],
                correct: 0,
                explanation: "ForeignKey: one object links to one (many-to-one). ManyToManyField: many objects link to many (creates join table automatically).",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/examples/many_to_many/", text: "📚 M2M Relationships" }
            },
            {
                q: "What are Django signals used for?",
                options: ["Notify when certain actions occur in framework", "Send real-time updates to frontend clients", "Handle asynchronous background tasks", "Implement inter-process communication"],
                correct: 0,
                explanation: "Signals allow decoupled apps to react to events (pre_save, post_save, etc.). Use sparingly - they can make code hard to follow. Consider overriding save() instead.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/signals/", text: "📚 Django Signals" }
            },
            {
                q: "What's middleware in Django?",
                options: ["Hooks into request/response processing globally", "ORM layer that connects models to database", "Background task queue for async operations", "Caching layer for template rendering"],
                correct: 0,
                explanation: "Middleware processes requests/responses globally. Runs before views (request) and after (response). Used for: auth, sessions, CSRF, compression.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/http/middleware/", text: "📚 Django Middleware" }
            },
            {
                q: "How do you create a custom management command?",
                options: ["Create in management/commands/ directory", "Edit manage.py", "Use decorators", "Django admin"],
                correct: 0,
                explanation: "Create app/management/commands/mycommand.py with a Command class inheriting BaseCommand. Implement handle() method. Run with 'manage.py mycommand'.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/howto/custom-management-commands/", text: "📚 Custom Commands" }
            },
        ],
        5: [
            {
                q: "How do you optimize N+1 query problems in Django?",
                options: ["select_related() and prefetch_related()", "Use raw SQL", "Add indexes only", "Increase timeout"],
                correct: 0,
                explanation: "N+1: fetching related objects in a loop causes N extra queries. select_related (JOIN) or prefetch_related (separate query, then Python join) solve this.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/models/querysets/#select-related", text: "📚 select_related" }
            },
            {
                q: "What's the difference between select_related and prefetch_related?",
                options: ["select_related uses JOIN, prefetch_related uses separate query", "select_related is for M2M, prefetch_related for FK", "prefetch_related uses SQL JOIN for efficiency", "select_related works with reverse foreign keys"],
                correct: 0,
                explanation: "select_related: SQL JOIN, good for ForeignKey/OneToOne (single-valued). prefetch_related: separate query + Python merge, required for M2M/reverse FK.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/models/querysets/#prefetch-related", text: "📚 prefetch_related" }
            },
            {
                q: "How do you implement custom model managers?",
                options: ["Create class inheriting from models.Manager", "Edit settings.py", "Use decorators", "Modify model Meta"],
                correct: 0,
                explanation: "Custom managers add reusable query methods. Inherit from Manager, add methods returning QuerySets. Assign to model: objects = MyManager().",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/managers/", text: "📚 Custom Managers" }
            },
            {
                q: "What's Django REST Framework used for?",
                options: ["Building APIs with Django", "REST API client", "Testing framework", "Database REST interface"],
                correct: 0,
                explanation: "DRF adds powerful API tools: serializers, viewsets, routers, authentication, throttling, browsable API. The standard for Django APIs.",
                learnMore: { url: "https://www.django-rest-framework.org/", text: "📚 DRF Documentation" }
            },
            {
                q: "How do you handle database transactions in Django?",
                options: ["transaction.atomic() decorator or context manager", "Manual commit", "Auto-commit only", "No transaction support"],
                correct: 0,
                explanation: "atomic() ensures all-or-nothing: either all operations commit or all rollback on error. Use as decorator or 'with transaction.atomic():' block.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/transactions/", text: "📚 DB Transactions" }
            },
        ]
    },

    'l-react': {
        1: [
            {
                q: "What is a React component?",
                options: ["Reusable UI building block that returns JSX", "A hook that manages application state", "A function that fetches data from APIs", "A module that handles browser routing"],
                correct: 0,
                explanation: "Components are independent, reusable pieces of UI. They accept props and return React elements (JSX). Can be functions or classes (functions preferred).",
                learnMore: { url: "https://react.dev/learn/your-first-component", text: "📚 React Components" }
            },
            {
                q: "What is JSX?",
                options: ["JavaScript syntax extension for writing HTML-like code", "A separate templating language compiled at runtime", "React's replacement for HTML in the browser", "A way to embed CSS directly in JavaScript"],
                correct: 0,
                explanation: "JSX lets you write HTML-like markup in JavaScript. It's compiled to React.createElement() calls. Not required but makes code more readable.",
                learnMore: { url: "https://react.dev/learn/writing-markup-with-jsx", text: "📚 JSX Guide" }
            },
            {
                q: "How do you pass data to a child component?",
                options: ["Using props", "Using useState in the child", "Using global variables", "Using event emitters"],
                correct: 0,
                explanation: "Props (properties) pass data from parent to child. They're read-only in the child. Like function arguments for components.",
                learnMore: { url: "https://react.dev/learn/passing-props-to-a-component", text: "📚 Passing Props" }
            },
        ],
        2: [
            {
                q: "What is useState hook for?",
                options: ["Managing component state that triggers re-renders", "Subscribing to external data sources", "Caching expensive computations", "Accessing DOM elements directly"],
                correct: 0,
                explanation: "useState adds state to functional components. Returns [value, setValue]. When state changes, component re-renders. Initial value passed as argument.",
                learnMore: { url: "https://react.dev/reference/react/useState", text: "📚 useState Hook" }
            },
            {
                q: "When does useEffect run?",
                options: ["After render, when dependencies change", "Before the component renders", "Only during the initial mount", "Synchronously during render"],
                correct: 0,
                explanation: "useEffect runs after render. Dependencies array controls when: [] = mount only, [dep] = when dep changes, no array = every render. Return cleanup function.",
                learnMore: { url: "https://react.dev/reference/react/useEffect", text: "📚 useEffect Hook" }
            },
            {
                q: "What causes a React component to re-render?",
                options: ["State or props change", "Any variable in the component changes", "A setTimeout callback fires", "The component's functions are called"],
                correct: 0,
                explanation: "Components re-render when: their state changes, their props change, or their parent re-renders. React batches updates for performance.",
                learnMore: { url: "https://react.dev/learn/render-and-commit", text: "📚 Render & Commit" }
            },
        ],
        3: [
            {
                q: "What's the purpose of the key prop in lists?",
                options: ["Helps React track which items changed", "Required for list items to render", "Improves accessibility for screen readers", "Enables CSS animations on list items"],
                correct: 0,
                explanation: "Keys help React identify which items changed/added/removed. Use stable, unique IDs (not array index). Without keys, React re-renders entire list.",
                learnMore: { url: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key", text: "📚 List Keys" }
            },
            {
                q: "What is prop drilling?",
                options: ["Passing props through many component levels", "Validating props with PropTypes", "Destructuring props in function parameters", "Setting default values for props"],
                correct: 0,
                explanation: "Prop drilling: passing props through intermediate components that don't use them. Makes code hard to maintain. Context or state management libraries solve this.",
                learnMore: { url: "https://react.dev/learn/passing-data-deeply-with-context", text: "📚 Context API" }
            },
            {
                q: "What does useContext solve?",
                options: ["Avoids prop drilling by sharing state globally", "Manages local component state", "Handles side effects like data fetching", "Memoizes expensive calculations"],
                correct: 0,
                explanation: "Context provides a way to pass data through the component tree without prop drilling. Create with createContext(), provide value at top, consume with useContext.",
                learnMore: { url: "https://react.dev/reference/react/useContext", text: "📚 useContext Hook" }
            },
            {
                q: "What's the difference between state and props?",
                options: ["State is internal and mutable, props come from parent", "State is for strings, props for objects", "Props trigger re-renders, state doesn't", "State is shared between components, props are local"],
                correct: 0,
                explanation: "Props: external, passed from parent, read-only. State: internal, managed by component, triggers re-render when changed. Both cause re-renders.",
                learnMore: { url: "https://react.dev/learn/state-a-components-memory", text: "📚 State vs Props" }
            },
        ],
        4: [
            {
                q: "When would you use useCallback?",
                options: ["Memoize functions to prevent unnecessary re-renders", "Execute callbacks after state updates", "Handle async operations in effects", "Create event handlers for DOM elements"],
                correct: 0,
                explanation: "useCallback memoizes functions so they don't change reference on every render. Useful when passing callbacks to memoized children (React.memo).",
                learnMore: { url: "https://react.dev/reference/react/useCallback", text: "📚 useCallback Hook" }
            },
            {
                q: "What's the difference between controlled and uncontrolled components?",
                options: ["Controlled: React manages state; Uncontrolled: DOM manages state", "Controlled components use hooks, uncontrolled use classes", "Controlled are functional, uncontrolled are class-based", "Controlled use refs, uncontrolled use state"],
                correct: 0,
                explanation: "Controlled: form value in React state, onChange updates it. Uncontrolled: DOM holds the value, use ref to read it. Controlled is usually preferred.",
                learnMore: { url: "https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components", text: "📚 Controlled Components" }
            },
            {
                q: "What does useMemo do?",
                options: ["Caches computed values between re-renders", "Memoizes callback functions for child components", "Stores values that persist without causing re-renders", "Creates a memoized version of a component"],
                correct: 0,
                explanation: "useMemo caches expensive calculations between re-renders. Only recalculates when dependencies change. Don't overuse - has its own cost.",
                learnMore: { url: "https://react.dev/reference/react/useMemo", text: "📚 useMemo Hook" }
            },
            {
                q: "What's useRef used for?",
                options: ["Persist values without re-render, access DOM elements", "Create references to child component state", "Store previous props for comparison", "Reference external modules dynamically"],
                correct: 0,
                explanation: "useRef returns mutable object persisting across renders. .current doesn't trigger re-render when changed. Used for: DOM refs, storing previous values, timers.",
                learnMore: { url: "https://react.dev/reference/react/useRef", text: "📚 useRef Hook" }
            },
        ],
        5: [
            {
                q: "How does React's reconciliation algorithm work?",
                options: ["Compares virtual DOM trees and updates only changed nodes", "Replaces the entire DOM on every state change", "Uses Web Workers to diff in background threads", "Batches all updates until browser idle time"],
                correct: 0,
                explanation: "React compares old and new virtual DOM trees (diffing). Uses heuristics: different types = replace subtree, same type = update props, keys help list diffing.",
                learnMore: { url: "https://react.dev/learn/preserving-and-resetting-state", text: "📚 Reconciliation" }
            },
            {
                q: "What's React.lazy used for?",
                options: ["Code splitting to load components on demand", "Deferring component rendering until visible", "Delaying state updates for performance", "Creating components with delayed initialization"],
                correct: 0,
                explanation: "React.lazy enables code splitting - load components only when needed. Use with Suspense for loading states. Reduces initial bundle size.",
                learnMore: { url: "https://react.dev/reference/react/lazy", text: "📚 React.lazy" }
            },
            {
                q: "What are React error boundaries?",
                options: ["Components that catch JS errors in child tree", "Validation layers for props and state", "Try-catch wrappers for async operations", "Middleware for handling API errors"],
                correct: 0,
                explanation: "Error boundaries catch JavaScript errors in child component tree, log them, and display fallback UI. Must be class components with componentDidCatch/getDerivedStateFromError.",
                learnMore: { url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary", text: "📚 Error Boundaries" }
            },
            {
                q: "How does useReducer differ from useState?",
                options: ["Better for complex state logic with action dispatching", "Automatically persists state to localStorage", "Provides built-in undo/redo functionality", "Enables state sharing between components"],
                correct: 0,
                explanation: "useReducer is like useState but uses reducer function (state, action) => newState. Better for complex state logic, multiple sub-values, or when next state depends on previous.",
                learnMore: { url: "https://react.dev/reference/react/useReducer", text: "📚 useReducer Hook" }
            },
            {
                q: "What's the purpose of React.memo?",
                options: ["Skip re-renders when props haven't changed", "Cache component instances in memory", "Store computed values across renders", "Memoize event handlers automatically"],
                correct: 0,
                explanation: "React.memo is a HOC that memoizes component output. Skips re-render if props haven't changed (shallow comparison). Use for expensive components with same props.",
                learnMore: { url: "https://react.dev/reference/react/memo", text: "📚 React.memo" }
            },
        ]
    },

    // ============================================================================
    // PRODUCT TIER
    // ============================================================================

    'p-waldur-basics': {
        1: [
            {
                q: "What is Waldur?",
                options: ["Cloud resource management platform", "Operating system", "Database", "Programming language"],
                correct: 0,
                explanation: "Waldur is an open-source cloud resource management platform for organizations to manage cloud infrastructure, track usage, and handle billing across multiple providers.",
                learnMore: { url: "https://docs.waldur.com/", text: "📚 Waldur Documentation" }
            },
            {
                q: "What does multi-tenancy mean in Waldur?",
                options: ["Multiple organizations share the platform", "Multiple servers", "Multiple databases", "Multiple users per account"],
                correct: 0,
                explanation: "Multi-tenancy allows multiple organizations (customers) to use the same Waldur instance while keeping their data isolated. Each org sees only their resources.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/identities/organizations/", text: "📚 Organizations Guide" }
            },
            {
                q: "Who are the main users of Waldur?",
                options: ["Organizations managing cloud resources", "Individual developers only", "Database administrators", "Network engineers"],
                correct: 0,
                explanation: "Waldur serves organizations (research institutions, universities, companies) needing to manage cloud resources across teams with proper governance and billing.",
                learnMore: { url: "https://waldur.com/", text: "📚 Waldur Homepage" }
            },
        ],
        2: [
            {
                q: "What is a Waldur marketplace?",
                options: ["Catalog of available resource offerings", "E-commerce store", "App store", "Job board"],
                correct: 0,
                explanation: "The marketplace is a catalog where users browse and order resources (VMs, storage, services). Providers publish offerings, customers order them through the marketplace.",
                learnMore: { url: "https://docs.waldur.com/user-guide/marketplace/", text: "📚 Marketplace Guide" }
            },
            {
                q: "What is a resource in Waldur context?",
                options: ["Provisioned cloud asset (VM, storage, etc.)", "User role and permission definition", "Configuration template for deployments", "Billing rate and pricing structure"],
                correct: 0,
                explanation: "A resource is any provisioned asset: virtual machines, volumes, networks, or services. Resources are tracked throughout their lifecycle with usage and billing data.",
                learnMore: { url: "https://docs.waldur.com/user-guide/resources/", text: "📚 Resources Guide" }
            },
            {
                q: "What is an organization (customer) in Waldur?",
                options: ["Top-level entity that owns projects and billing", "Group of resources with shared configuration", "Collection of users with same permissions", "Service provider offering cloud resources"],
                correct: 0,
                explanation: "Organization is the top-level entity representing a company/institution. It contains projects, users with roles, and handles billing. Also called 'customer' in the API.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/identities/organizations/", text: "📚 Organizations" }
            },
        ],
        3: [
            {
                q: "What's the hierarchy: Organization > Project > ?",
                options: ["Resource", "Offering", "Provider", "Category"],
                correct: 0,
                explanation: "The hierarchy is Organization → Project → Resource. Organizations own projects, projects contain resources. Users are assigned to orgs/projects with specific roles.",
                learnMore: { url: "https://docs.waldur.com/user-guide/projects/", text: "📚 Projects Guide" }
            },
            {
                q: "What role does a Provider play in Waldur?",
                options: ["Backend that fulfills resource requests", "Organization that consumes cloud resources", "User with administrative permissions", "System that tracks resource usage"],
                correct: 0,
                explanation: "Providers (service providers) offer resources through the marketplace. They define offerings, handle provisioning, and may be external clouds or internal infrastructure.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/", text: "📚 Providers Guide" }
            },
            {
                q: "What is a Project in Waldur?",
                options: ["Container for resources with its own budget/team", "Template for provisioning similar resources", "Marketplace category for organizing offerings", "Backend integration with cloud provider"],
                correct: 0,
                explanation: "Projects group resources for a specific purpose, team, or budget. They have their own members, quotas, and billing. One org can have multiple projects.",
                learnMore: { url: "https://docs.waldur.com/user-guide/projects/", text: "📚 Projects Guide" }
            },
            {
                q: "What's an Offering in Waldur marketplace?",
                options: ["Template defining what can be provisioned", "Active resource instance running in cloud", "Request to create or modify a resource", "Category for grouping similar services"],
                correct: 0,
                explanation: "Offerings define what can be ordered: the resource type, configuration options, pricing, and which backend provisions it. Think of it as a product template.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/marketplace/offerings/", text: "📚 Offerings Guide" }
            },
        ],
        4: [
            {
                q: "How does Waldur handle resource lifecycle states?",
                options: ["State machine with defined transitions", "Simple on/off", "Manual tracking", "No state management"],
                correct: 0,
                explanation: "Resources follow a state machine: Creating → OK → Updating/Terminating. Each state has allowed transitions. Erred states indicate problems needing attention.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/core-concepts/", text: "📚 Core Concepts" }
            },
            {
                q: "What are resource actions in Waldur?",
                options: ["Operations like start, stop, resize on resources", "User permissions", "Billing events", "Log entries"],
                correct: 0,
                explanation: "Actions are operations users can perform on resources (start, stop, restart, resize). Available actions depend on resource state and type. Actions create async tasks.",
                learnMore: { url: "https://docs.waldur.com/user-guide/resources/", text: "📚 Resource Actions" }
            },
            {
                q: "How does quota management work in Waldur?",
                options: ["Limits on resources per organization/project", "Disk quotas only", "User quotas", "No quota support"],
                correct: 0,
                explanation: "Quotas limit resource consumption (CPU cores, RAM, storage, VMs) at organization or project level. Prevents overspending and ensures fair resource distribution.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/quotas/", text: "📚 Quotas Guide" }
            },
            {
                q: "What's the purpose of offering components?",
                options: ["Define measurable attributes like CPU, RAM for billing", "UI components", "Plugin system", "Network config"],
                correct: 0,
                explanation: "Components define measurable units (CPU, RAM, storage) with prices. Used for usage-based billing. Each offering can have multiple components with different pricing.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/marketplace/offerings/", text: "📚 Components" }
            },
        ],
        5: [
            {
                q: "What's the plugin architecture advantage in Waldur?",
                options: ["Extensible without modifying core", "Faster performance", "Simpler code", "No advantages"],
                correct: 0,
                explanation: "Plugins add support for new cloud providers, resource types, or features without changing core code. Each plugin is a Django app with defined interfaces.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Plugin Development" }
            },
            {
                q: "How does Waldur integrate with external providers?",
                options: ["Through backend plugins with defined interfaces", "Direct database access", "Manual sync only", "No integration"],
                correct: 0,
                explanation: "Backend plugins implement provider-specific logic (OpenStack, Azure, SLURM). They translate Waldur operations to provider APIs and sync state back.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Backend Plugins" }
            },
            {
                q: "What's the role of Waldur API?",
                options: ["RESTful interface for all operations", "Internal only", "Documentation", "Testing"],
                correct: 0,
                explanation: "The REST API exposes all Waldur functionality. Frontend uses it, integrations use it, and it's the primary interface. Built with Django REST Framework.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/api/", text: "📚 API Documentation" }
            },
            {
                q: "How does approval workflow work in Waldur?",
                options: ["Orders can require approval before processing", "Automatic approval only", "No approval system", "Email-based only"],
                correct: 0,
                explanation: "Orders can require manager approval before execution. Configurable per offering. Enables governance - managers review before resources are provisioned.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/marketplace/", text: "📚 Approval Workflow" }
            },
            {
                q: "What reporting capabilities does Waldur provide?",
                options: ["Usage, billing, and resource reports", "No reporting", "External tools only", "Logs only"],
                correct: 0,
                explanation: "Waldur provides reports on resource usage, costs, and invoices. Export data for analysis. Useful for chargeback, capacity planning, and governance.",
                learnMore: { url: "https://docs.waldur.com/user-guide/reports/", text: "📚 Reports Guide" }
            },
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - CS Fundamentals
    // ============================================================================

    'f-data-structures': {
        1: [
            {
                q: "What is an array?",
                options: ["Ordered collection with index access", "Key-value store", "Tree structure", "Graph"],
                correct: 0,
                explanation: "Arrays store elements in contiguous memory, accessed by numeric index. O(1) access by index, but O(n) insertion/deletion in middle due to shifting.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Array_(data_structure)", text: "📚 Array Data Structure" }
            },
            {
                q: "What's the time complexity of array index access?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                correct: 0,
                explanation: "Array index access is O(1) constant time - direct memory address calculation. array[i] = base_address + (i * element_size). No iteration needed.",
                learnMore: { url: "https://www.bigocheatsheet.com/", text: "📚 Big-O Cheat Sheet" }
            },
            {
                q: "What is a stack?",
                options: ["LIFO data structure", "FIFO data structure", "Random access", "Tree structure"],
                correct: 0,
                explanation: "Stack is Last-In-First-Out: push adds to top, pop removes from top. Used for: function calls, undo operations, expression parsing, backtracking.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)", text: "📚 Stack Data Structure" }
            },
        ],
        2: [
            {
                q: "When would you use a hash map over an array?",
                options: ["Fast lookup by key", "Ordered data needed", "Memory efficiency", "Simple iteration"],
                correct: 0,
                explanation: "Hash maps provide O(1) average lookup/insert/delete by key. Use when you need fast access by non-numeric keys. Arrays are better for ordered, indexed data.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Hash_table", text: "📚 Hash Table" }
            },
            {
                q: "What's a queue's ordering principle?",
                options: ["FIFO - First In First Out", "LIFO", "Random", "Priority only"],
                correct: 0,
                explanation: "Queue is First-In-First-Out: enqueue adds to back, dequeue removes from front. Used for: task scheduling, BFS, buffering, message queues.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)", text: "📚 Queue Data Structure" }
            },
            {
                q: "What's the main advantage of a linked list over an array?",
                options: ["No element shifting needed", "Faster access", "Less memory", "Simpler code"],
                correct: 0,
                explanation: "Linked lists don't require shifting elements on insert/delete - just update pointers. Note: finding the position is still O(n). Trade-off: O(n) access, more memory per element (pointers).",
                learnMore: { url: "https://en.wikipedia.org/wiki/Linked_list", text: "📚 Linked List" }
            },
        ],
        3: [
            {
                q: "In Waldur, why is org hierarchy a tree structure?",
                options: ["Parent-child relationships, single root", "Circular references", "Flat is simpler", "Performance"],
                correct: 0,
                explanation: "Trees model hierarchies: Organization → Project → Resource. Each node has one parent (except root). No cycles allowed. Enables permission inheritance down the tree.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Tree_(data_structure)", text: "📚 Tree Structure" }
            },
            {
                q: "Why does Celery use queues?",
                options: ["Process tasks in order they arrived", "Random execution", "Immediate execution", "No specific reason"],
                correct: 0,
                explanation: "Message queues decouple producers from consumers. Tasks wait in queue until workers are available. Enables async processing, load distribution, and reliability.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/getting-started/introduction.html", text: "📚 Celery Intro" }
            },
            {
                q: "What's a binary search tree used for?",
                options: ["Efficient searching and sorted data", "FIFO processing", "Stack operations", "Hash storage"],
                correct: 0,
                explanation: "BST maintains sorted order: left children < parent < right children. O(log n) search/insert/delete (balanced). In-order traversal gives sorted sequence.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Binary_search_tree", text: "📚 Binary Search Tree" }
            },
            {
                q: "When would you use a set instead of a list?",
                options: ["Need unique elements with fast lookup", "Need ordered elements", "Need duplicates", "Need index access"],
                correct: 0,
                explanation: "Sets store unique elements with O(1) average membership test. No duplicates, no ordering (usually). Use for: deduplication, membership checks, set operations.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Set_(abstract_data_type)", text: "📚 Set Data Structure" }
            },
        ],
        4: [
            {
                q: "What's the time complexity of hash table insertion (average)?",
                options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
                correct: 0,
                explanation: "Hash tables achieve O(1) average through hash function + array indexing. Good hash function distributes keys evenly, minimizing collisions.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Hash_table#Performance", text: "📚 Hash Table Performance" }
            },
            {
                q: "What's a priority queue?",
                options: ["Queue where elements have priority ordering", "First priority only", "Random queue", "Stack variant"],
                correct: 0,
                explanation: "Priority queue retrieves highest (or lowest) priority element first. Usually implemented with heap. Used for: Dijkstra's algorithm, task scheduling, event simulation.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Priority_queue", text: "📚 Priority Queue" }
            },
            {
                q: "What's the worst-case time complexity of hash table operations?",
                options: ["O(n) due to collisions", "O(1)", "O(log n)", "O(n²)"],
                correct: 0,
                explanation: "Worst case: all keys hash to same bucket (chain), becoming a linked list. O(n) search. Good hash functions and resizing prevent this in practice.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Hash_table#Collision_resolution", text: "📚 Hash Collisions" }
            },
            {
                q: "When is a doubly linked list preferred over singly linked?",
                options: ["Need to traverse both directions", "Memory efficiency", "Simpler implementation", "Faster iteration"],
                correct: 0,
                explanation: "Doubly linked lists have prev+next pointers, enabling bidirectional traversal and O(1) deletion with only node reference. Cost: more memory per node.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Doubly_linked_list", text: "📚 Doubly Linked List" }
            },
        ],
        5: [
            {
                q: "When would a B-tree be better than a binary tree?",
                options: ["Disk-based storage, minimize I/O", "In-memory only", "Simple data", "Always"],
                correct: 0,
                explanation: "B-trees have high branching factor, reducing tree height. Fewer disk reads needed. Used in databases and filesystems. Each node fits in one disk block.",
                learnMore: { url: "https://en.wikipedia.org/wiki/B-tree", text: "📚 B-tree" }
            },
            {
                q: "What's the purpose of a bloom filter?",
                options: ["Probabilistic membership testing, space-efficient", "Exact membership", "Sorting data", "Compression"],
                correct: 0,
                explanation: "Bloom filters test membership with possible false positives, no false negatives. Very space-efficient. Used for: cache lookups, spell checkers, network routing.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Bloom_filter", text: "📚 Bloom Filter" }
            },
            {
                q: "What's a trie used for?",
                options: ["Efficient string prefix operations", "Number sorting", "Graph traversal", "Queue management"],
                correct: 0,
                explanation: "Tries (prefix trees) store strings with shared prefixes. O(m) lookup where m=key length. Used for: autocomplete, spell check, IP routing, dictionary storage.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Trie", text: "📚 Trie" }
            },
            {
                q: "What's the difference between a heap and a BST?",
                options: ["Heap maintains min/max at root, BST is sorted", "Same structure", "Heap is sorted", "BST has min/max at root"],
                correct: 0,
                explanation: "Heap: parent ≥ children (max-heap), only guarantees root is max. BST: left < parent < right, fully sorted. Heap for priority queue, BST for ordered operations.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Heap_(data_structure)", text: "📚 Heap" }
            },
            {
                q: "When would you use a graph over a tree?",
                options: ["Nodes can have multiple parents/cycles", "Single parent needed", "Simpler structure", "Faster operations"],
                correct: 0,
                explanation: "Graphs allow cycles and multiple edges between nodes. Model: social networks, road maps, dependencies. Trees are special acyclic graphs with single parent per node.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)", text: "📚 Graph" }
            },
        ]
    },

    'f-design-patterns': {
        1: [
            {
                q: "What is a design pattern?",
                options: ["Reusable solution to common problem", "A code library you import into projects", "A specific programming language feature", "A testing methodology for software"],
                correct: 0,
                explanation: "Design patterns are proven solutions to recurring design problems. They provide templates, not code. Named by Gang of Four (GoF) book in 1994.",
                learnMore: { url: "https://refactoring.guru/design-patterns", text: "📚 Design Patterns" }
            },
            {
                q: "Why use design patterns?",
                options: ["Proven solutions, common vocabulary", "They make code run faster automatically", "Required for object-oriented programming", "They reduce the amount of code needed"],
                correct: 0,
                explanation: "Patterns provide tested solutions and shared vocabulary. 'Let's use Observer here' communicates clearly. But don't force patterns - use when they fit.",
                learnMore: { url: "https://refactoring.guru/design-patterns/why-learn-patterns", text: "📚 Why Patterns?" }
            },
            {
                q: "What's the Singleton pattern?",
                options: ["Ensures only one instance of a class exists", "Creates a new instance for each request", "Provides multiple implementations of an interface", "Wraps objects to add new functionality"],
                correct: 0,
                explanation: "Singleton ensures single instance with global access point. Use sparingly - can make testing difficult. Common for: loggers, config, connection pools.",
                learnMore: { url: "https://refactoring.guru/design-patterns/singleton", text: "📚 Singleton Pattern" }
            },
        ],
        2: [
            {
                q: "What does the Factory pattern do?",
                options: ["Creates objects without specifying exact class", "Ensures only one instance exists globally", "Adds functionality to objects dynamically", "Defines an interface for creating families of objects"],
                correct: 0,
                explanation: "Factory encapsulates object creation. Client requests object by type/config, factory returns appropriate subclass. Decouples creation from use.",
                learnMore: { url: "https://refactoring.guru/design-patterns/factory-method", text: "📚 Factory Pattern" }
            },
            {
                q: "What is a Mixin in Python/Django?",
                options: ["Class providing methods for other classes to inherit", "A decorator that modifies function behavior", "Abstract base class requiring implementation", "Interface defining method signatures only"],
                correct: 0,
                explanation: "Mixins add reusable functionality via multiple inheritance. In Django: LoginRequiredMixin, PermissionRequiredMixin. Keep mixins focused on one concern.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/class-based-views/mixins/", text: "📚 Django Mixins" }
            },
            {
                q: "What's the Builder pattern used for?",
                options: ["Construct complex objects step by step", "Create objects through inheritance hierarchy", "Clone existing objects to create new ones", "Create objects using a central registry"],
                correct: 0,
                explanation: "Builder constructs complex objects step-by-step. Separates construction from representation. Useful when objects have many optional parameters.",
                learnMore: { url: "https://refactoring.guru/design-patterns/builder", text: "📚 Builder Pattern" }
            },
        ],
        3: [
            {
                q: "When would you use the Strategy pattern?",
                options: ["Swap algorithms at runtime without changing client", "Ensure only one instance of a service exists", "Construct complex objects with many options", "Notify multiple objects when state changes"],
                correct: 0,
                explanation: "Strategy defines interchangeable algorithms. Context holds a strategy and delegates to it. Change behavior without changing context. Example: payment methods.",
                learnMore: { url: "https://refactoring.guru/design-patterns/strategy", text: "📚 Strategy Pattern" }
            },
            {
                q: "What's the Observer pattern used for?",
                options: ["Notify multiple objects of state changes", "Create single instance", "Decorate functions", "Build objects step by step"],
                correct: 0,
                explanation: "Observer enables publish-subscribe: subject notifies observers of changes. Loose coupling - subject doesn't know observers. Django signals use this pattern.",
                learnMore: { url: "https://refactoring.guru/design-patterns/observer", text: "📚 Observer Pattern" }
            },
            {
                q: "What does the Template Method pattern do?",
                options: ["Define algorithm skeleton, let subclasses override steps", "Generate objects from configuration templates", "Provide simplified interface to complex subsystem", "Allow object behavior to change based on state"],
                correct: 0,
                explanation: "Template Method defines algorithm structure in base class, subclasses override specific steps. Django's class-based views use this extensively.",
                learnMore: { url: "https://refactoring.guru/design-patterns/template-method", text: "📚 Template Method" }
            },
            {
                q: "What's the Iterator pattern?",
                options: ["Access collection elements without exposing structure", "Transform each element in a collection", "Filter elements based on a condition", "Combine multiple collections into one"],
                correct: 0,
                explanation: "Iterator provides sequential access to elements without exposing underlying representation. Python's for loops use iterators. __iter__ and __next__ methods.",
                learnMore: { url: "https://refactoring.guru/design-patterns/iterator", text: "📚 Iterator Pattern" }
            },
        ],
        4: [
            {
                q: "How does the Adapter pattern help?",
                options: ["Makes incompatible interfaces work together", "Adds new behavior to objects dynamically", "Provides a simplified API to complex systems", "Controls access to another object"],
                correct: 0,
                explanation: "Adapter wraps an object to provide different interface. Like power adapters for different outlets. Use to integrate legacy code or third-party libraries.",
                learnMore: { url: "https://refactoring.guru/design-patterns/adapter", text: "📚 Adapter Pattern" }
            },
            {
                q: "What's the Facade pattern?",
                options: ["Simple interface to complex subsystem", "Converts one interface to another expected by client", "Wraps objects to add additional responsibilities", "Separates abstraction from implementation"],
                correct: 0,
                explanation: "Facade provides simplified interface to complex system. Hides complexity from clients. Django's ORM is a facade over SQL. Makes systems easier to use.",
                learnMore: { url: "https://refactoring.guru/design-patterns/facade", text: "📚 Facade Pattern" }
            },
            {
                q: "When would you use the Command pattern?",
                options: ["Encapsulate requests as objects for undo/queue", "When you need to notify multiple listeners", "To provide a simplified interface to subsystems", "When object creation needs to be delegated"],
                correct: 0,
                explanation: "Command encapsulates action as object. Enables: undo/redo, queuing, logging, transactions. Celery tasks are command objects sent to workers.",
                learnMore: { url: "https://refactoring.guru/design-patterns/command", text: "📚 Command Pattern" }
            },
            {
                q: "What's the Repository pattern used for?",
                options: ["Abstract data access with collection-like interface", "Store configuration settings centrally", "Manage object lifecycle and dependencies", "Provide undo/redo functionality for operations"],
                correct: 0,
                explanation: "Repository abstracts data storage, providing collection-like interface. Domain code doesn't know about database. Enables switching storage implementations.",
                learnMore: { url: "https://martinfowler.com/eaaCatalog/repository.html", text: "📚 Repository Pattern" }
            },
        ],
        5: [
            {
                q: "What's the difference between Proxy and Decorator patterns?",
                options: ["Proxy controls access, Decorator adds behavior", "Proxy is for remote objects, Decorator for local", "Decorator manages lifecycle, Proxy adds features", "Proxy creates new objects, Decorator modifies existing"],
                correct: 0,
                explanation: "Proxy controls access (lazy loading, security, caching). Decorator adds behavior (logging, timing). Both wrap objects but with different intent.",
                learnMore: { url: "https://refactoring.guru/design-patterns/proxy", text: "📚 Proxy vs Decorator" }
            },
            {
                q: "What's the Chain of Responsibility pattern?",
                options: ["Pass request through handler chain until processed", "Distribute request to all handlers simultaneously", "Route request to a specific handler based on type", "Queue requests for batch processing later"],
                correct: 0,
                explanation: "Chain of Responsibility passes request through handlers until one handles it. Django middleware uses this. Decouples sender from receivers.",
                learnMore: { url: "https://refactoring.guru/design-patterns/chain-of-responsibility", text: "📚 Chain of Responsibility" }
            },
            {
                q: "When is the State pattern appropriate?",
                options: ["Object behavior changes based on internal state", "When you need to swap algorithms at runtime", "When objects need to observe other objects", "When creating families of related objects"],
                correct: 0,
                explanation: "State pattern lets object alter behavior when state changes. Each state is a class. Cleaner than big if/switch on state flag. Waldur resource states could use this.",
                learnMore: { url: "https://refactoring.guru/design-patterns/state", text: "📚 State Pattern" }
            },
            {
                q: "What's the Mediator pattern?",
                options: ["Centralize complex communications between objects", "Enable publish-subscribe event notification", "Pass requests through a chain of handlers", "Provide a unified interface to a subsystem"],
                correct: 0,
                explanation: "Mediator centralizes complex communications between objects. Objects don't reference each other directly. Reduces coupling in complex UIs or workflows.",
                learnMore: { url: "https://refactoring.guru/design-patterns/mediator", text: "📚 Mediator Pattern" }
            },
            {
                q: "What's the difference between Abstract Factory and Factory Method?",
                options: ["Abstract Factory creates families, Factory Method single product", "Factory Method uses inheritance, Abstract Factory uses composition only", "Abstract Factory is simpler and more commonly used", "Factory Method requires interfaces, Abstract Factory doesn't"],
                correct: 0,
                explanation: "Factory Method: one method creating one product. Abstract Factory: interface for creating families of related products (e.g., UI themes with buttons, scrollbars, etc.).",
                learnMore: { url: "https://refactoring.guru/design-patterns/abstract-factory", text: "📚 Abstract Factory" }
            },
        ]
    },

    'f-api-principles': {
        1: [
            {
                q: "What does REST stand for?",
                options: ["Representational State Transfer", "Remote Execution State Transfer", "Request-Response State", "Resource State Type"],
                correct: 0,
                explanation: "REST is an architectural style for APIs. Resources are identified by URLs, represented in formats like JSON, and manipulated via HTTP methods.",
                learnMore: { url: "https://restfulapi.net/", text: "📚 REST API Tutorial" }
            },
            {
                q: "Which HTTP method is used to retrieve data?",
                options: ["GET", "POST", "PUT", "DELETE"],
                correct: 0,
                explanation: "GET retrieves data without modifying it. Should be idempotent and safe (no side effects). Response can be cached. Never use GET for mutations.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET", text: "📚 HTTP GET" }
            },
            {
                q: "Which HTTP method creates a new resource?",
                options: ["POST", "GET", "DELETE", "HEAD"],
                correct: 0,
                explanation: "POST creates new resources. Not idempotent - multiple calls create multiple resources. Returns 201 Created with Location header pointing to new resource.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST", text: "📚 HTTP POST" }
            },
        ],
        2: [
            {
                q: "What HTTP status code indicates 'Created'?",
                options: ["201", "200", "204", "301"],
                correct: 0,
                explanation: "201 Created: request succeeded, new resource created. Should include Location header with URL of new resource. Used with POST (and sometimes PUT).",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201", text: "📚 HTTP 201" }
            },
            {
                q: "What's the difference between PUT and PATCH?",
                options: ["PUT replaces entire resource, PATCH updates partially", "PUT creates resources, PATCH deletes them", "PATCH must be idempotent, PUT is not", "PUT is for collections, PATCH for single items"],
                correct: 0,
                explanation: "PUT replaces entire resource (send complete object). PATCH modifies specific fields (send only changes). PATCH is more bandwidth-efficient for updates.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH", text: "📚 PUT vs PATCH" }
            },
            {
                q: "What does status code 404 mean?",
                options: ["Not Found", "Server Error", "Unauthorized", "Bad Request"],
                correct: 0,
                explanation: "404 Not Found: requested resource doesn't exist. Client error (4xx range). Could mean wrong URL, deleted resource, or unauthorized but hiding existence.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404", text: "📚 HTTP 404" }
            },
        ],
        3: [
            {
                q: "What does idempotent mean for an API operation?",
                options: ["Same result regardless of how many times called", "Fast operation", "Secure operation", "Logged operation"],
                correct: 0,
                explanation: "Idempotent: calling N times has same effect as calling once. GET, PUT, DELETE should be idempotent. POST is not (creates new resource each time).",
                learnMore: { url: "https://restfulapi.net/idempotent-rest-apis/", text: "📚 Idempotency" }
            },
            {
                q: "Which HTTP methods should be idempotent?",
                options: ["GET, PUT, DELETE", "POST, PUT, PATCH", "Only safe methods like GET and HEAD", "Methods that modify data: POST, PUT, DELETE"],
                correct: 0,
                explanation: "GET (read), PUT (replace), DELETE (remove) should be idempotent. POST creates new resources, so multiple calls create multiple resources (not idempotent).",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent", text: "📚 Idempotent Methods" }
            },
            {
                q: "What's the purpose of HTTP status code 204?",
                options: ["Success with no content to return", "Resource was created successfully", "Request accepted for async processing", "Resource moved permanently"],
                correct: 0,
                explanation: "204 No Content: success, but no response body. Common for DELETE (deleted successfully, nothing to return) or PUT when not returning updated resource.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204", text: "📚 HTTP 204" }
            },
            {
                q: "What should a RESTful URL look like?",
                options: ["/resources/{id} using nouns", "/getResource?id=1", "/resource/get/1", "Any format"],
                correct: 0,
                explanation: "RESTful URLs use nouns (resources), not verbs. HTTP methods provide the verbs: GET /users/123 (read user), DELETE /users/123 (delete user).",
                learnMore: { url: "https://restfulapi.net/resource-naming/", text: "📚 REST URL Naming" }
            },
        ],
        4: [
            {
                q: "What's HATEOAS in REST?",
                options: ["Hypermedia links in responses for discoverability", "Authentication method", "Caching strategy", "Error handling"],
                correct: 0,
                explanation: "HATEOAS: responses include links to related resources/actions. Clients discover API by following links, not hardcoding URLs. Level 3 of Richardson Maturity Model.",
                learnMore: { url: "https://restfulapi.net/hateoas/", text: "📚 HATEOAS" }
            },
            {
                q: "What are the benefits of pagination in APIs?",
                options: ["Reduce response size, improve performance", "Allows sorting data on the server", "Enables filtering by date ranges", "Required for authentication to work"],
                correct: 0,
                explanation: "Pagination prevents huge responses: limit memory, network, processing. Common patterns: offset/limit, cursor-based, page number. Include total count and next/prev links.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/pagination/", text: "📚 DRF Pagination" }
            },
            {
                q: "What's rate limiting used for?",
                options: ["Prevent API abuse, ensure fair usage", "Speed up requests", "Cache responses", "Validate input"],
                correct: 0,
                explanation: "Rate limiting restricts requests per time period (e.g., 100/minute). Prevents abuse, ensures availability. Return 429 Too Many Requests with Retry-After header.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/throttling/", text: "📚 Rate Limiting" }
            },
            {
                q: "What's the difference between 401 and 403?",
                options: ["401 = not authenticated, 403 = not authorized", "401 = server error, 403 = client error", "403 = resource not found, 401 = method not allowed", "401 = temporary, 403 = permanent denial"],
                correct: 0,
                explanation: "401 Unauthorized: 'Who are you?' (no/invalid credentials). 403 Forbidden: 'I know who you are, but you can't do this' (insufficient permissions).",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401", text: "📚 401 vs 403" }
            },
        ],
        5: [
            {
                q: "How should API versioning be handled?",
                options: ["URL path, header, or query param with deprecation policy", "Use different HTTP methods for different versions", "Embed version in resource IDs", "Change port numbers for each version"],
                correct: 0,
                explanation: "Version in URL (/v1/), header (Accept: application/vnd.api+json;version=1), or query param. Announce deprecations, provide migration time, support old versions.",
                learnMore: { url: "https://restfulapi.net/versioning/", text: "📚 API Versioning" }
            },
            {
                q: "What's the Richardson Maturity Model?",
                options: ["Levels of REST API maturity (0-3)", "HTTP authentication standard with four levels", "API documentation completeness rating", "Client-server compatibility measurement"],
                correct: 0,
                explanation: "Level 0: HTTP as tunnel. Level 1: Resources. Level 2: HTTP methods. Level 3: HATEOAS. Most APIs are Level 2. Level 3 enables discoverable APIs.",
                learnMore: { url: "https://martinfowler.com/articles/richardsonMaturityModel.html", text: "📚 Richardson Model" }
            },
            {
                q: "When should you use GraphQL over REST?",
                options: ["Client needs flexible queries, multiple resources in one request", "When you need caching support out of the box", "For simple APIs with predictable data needs", "When browser compatibility is the main concern"],
                correct: 0,
                explanation: "GraphQL shines when: clients need different data shapes, mobile needs minimal data, reducing round trips matters. REST is simpler for standard CRUD.",
                learnMore: { url: "https://graphql.org/learn/", text: "📚 GraphQL Introduction" }
            },
            {
                q: "What's an API gateway used for?",
                options: ["Route requests, handle auth, rate limiting", "Store session data between microservices", "Compile API specifications into code", "Manage database connections for services"],
                correct: 0,
                explanation: "API gateway is single entry point for clients. Handles: routing, auth, rate limiting, logging, SSL termination. Examples: Kong, AWS API Gateway, nginx.",
                learnMore: { url: "https://microservices.io/patterns/apigateway.html", text: "📚 API Gateway Pattern" }
            },
            {
                q: "How do you handle breaking changes in APIs?",
                options: ["Version, deprecation warnings, migration guides", "Return different status codes for old vs new clients", "Use feature flags in request headers", "Automatically transform old requests to new format"],
                correct: 0,
                explanation: "Avoid breaking changes when possible (additive changes). When necessary: version API, deprecation headers, sunset dates, migration docs, support both versions temporarily.",
                learnMore: { url: "https://apisyouwonthate.com/blog/api-evolution-for-rest-http-apis/", text: "📚 API Evolution" }
            },
        ]
    },

    // ============================================================================
    // FOUNDATION TIER - Software Engineering
    // ============================================================================

    'f-testing': {
        1: [
            {
                q: "What is a unit test?",
                options: ["Tests a single function/component in isolation", "Tests entire application", "Tests user interface", "Tests database"],
                correct: 0,
                explanation: "Unit tests verify individual functions/methods in isolation. Fast, pinpoint failures precisely. Mock dependencies to test code in isolation.",
                learnMore: { url: "https://martinfowler.com/bliki/UnitTest.html", text: "📚 Unit Testing" }
            },
            {
                q: "What does 'assert' do in tests?",
                options: ["Verifies a condition is true", "Logs test execution progress", "Sets up test fixtures", "Catches exceptions silently"],
                correct: 0,
                explanation: "Assert verifies expected conditions. 'assert x == 5' fails if x isn't 5. pytest provides detailed failure messages showing actual vs expected.",
                learnMore: { url: "https://docs.pytest.org/en/stable/how-to/assert.html", text: "📚 pytest Assertions" }
            },
            {
                q: "Why write automated tests?",
                options: ["Catch bugs early, enable safe refactoring", "Replace the need for code reviews", "Eliminate all bugs before production", "Generate documentation automatically"],
                correct: 0,
                explanation: "Tests catch bugs before production, document expected behavior, and enable confident refactoring. Investment pays off in fewer bugs.",
                learnMore: { url: "https://docs.pytest.org/en/stable/", text: "📚 pytest Documentation" }
            },
        ],
        2: [
            {
                q: "What's the purpose of test fixtures?",
                options: ["Set up test data and state before tests run", "Define assertions to verify test results", "Measure code coverage during execution", "Mark tests for conditional execution"],
                correct: 0,
                explanation: "Fixtures provide test context: database records, mock objects, temp files. pytest fixtures use @pytest.fixture decorator with function/class/module scope.",
                learnMore: { url: "https://docs.pytest.org/en/stable/how-to/fixtures.html", text: "📚 pytest Fixtures" }
            },
            {
                q: "In pytest, how do you mark a test to skip?",
                options: ["@pytest.mark.skip", "@skip", "# skip", "skip()"],
                correct: 0,
                explanation: "@pytest.mark.skip skips test unconditionally. Use @pytest.mark.skipif(condition) for conditional skips. Add reason='...' for documentation.",
                learnMore: { url: "https://docs.pytest.org/en/stable/how-to/skipping.html", text: "📚 Skipping Tests" }
            },
            {
                q: "What's the Arrange-Act-Assert pattern?",
                options: ["Setup, execute, verify - test structure", "How tests are discovered and collected", "Pattern for organizing test files", "Method for parallel test execution"],
                correct: 0,
                explanation: "AAA structures tests: Arrange (setup), Act (execute code under test), Assert (verify results). Also called Given-When-Then. Makes tests readable.",
                learnMore: { url: "https://martinfowler.com/bliki/GivenWhenThen.html", text: "📚 AAA Pattern" }
            },
        ],
        3: [
            {
                q: "What's the difference between mocking and stubbing?",
                options: ["Mocks verify behavior, stubs provide canned responses", "Stubs are for classes, mocks for functions", "Mocks are used in unit tests, stubs in integration", "Stubs replace the system, mocks extend it"],
                correct: 0,
                explanation: "Stub: provides predetermined responses. Mock: also verifies interactions (was method called with correct args?). Mocks are stubs with verification.",
                learnMore: { url: "https://martinfowler.com/articles/mocksArentStubs.html", text: "📚 Mocks vs Stubs" }
            },
            {
                q: "What is test coverage?",
                options: ["Percentage of code executed by tests", "Number of assertions per test function", "Ratio of passing to failing tests", "Time taken to run the test suite"],
                correct: 0,
                explanation: "Coverage measures what code runs during tests. 100% coverage doesn't mean bug-free - only that lines executed, not all scenarios tested.",
                learnMore: { url: "https://coverage.readthedocs.io/", text: "📚 Coverage.py" }
            },
            {
                q: "What's a test double?",
                options: ["Generic term for mock, stub, fake, spy", "Running same test twice for reliability", "Pair programming during test writing", "Second assertion in a test case"],
                correct: 0,
                explanation: "Test double is an umbrella term: Stub (canned answers), Mock (verifies calls), Fake (working implementation), Spy (records calls).",
                learnMore: { url: "https://martinfowler.com/bliki/TestDouble.html", text: "📚 Test Doubles" }
            },
            {
                q: "What's regression testing?",
                options: ["Ensure changes don't break existing functionality", "Testing code by reverting to previous versions", "Analyzing test results to find patterns", "Testing backward compatibility only"],
                correct: 0,
                explanation: "Regression tests verify existing features still work after code changes. Run full test suite before merging. CI/CD automates this.",
                learnMore: { url: "https://martinfowler.com/bliki/SelfTestingCode.html", text: "📚 Regression Testing" }
            },
        ],
        4: [
            {
                q: "When should you use integration tests vs unit tests?",
                options: ["Integration for component interactions, unit for isolation", "Unit for slow operations, integration for fast ones", "Integration before deployment, unit after", "Unit for frontend, integration for backend only"],
                correct: 0,
                explanation: "Unit tests: isolated logic, fast, many. Integration tests: component interactions (API + DB), slower, fewer. Both are valuable at different levels.",
                learnMore: { url: "https://martinfowler.com/bliki/IntegrationTest.html", text: "📚 Integration Testing" }
            },
            {
                q: "What's test-driven development (TDD)?",
                options: ["Write tests before implementation code", "Write implementation then comprehensive tests", "Focus testing effort on drivers and utilities", "Development process driven by QA team"],
                correct: 0,
                explanation: "TDD cycle: Red (failing test) → Green (minimal code to pass) → Refactor. Forces thinking about API/design first. Results in testable, focused code.",
                learnMore: { url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html", text: "📚 TDD" }
            },
            {
                q: "What's a flaky test?",
                options: ["Test that sometimes passes, sometimes fails randomly", "Test that checks multiple conditions at once", "Test with weak assertions that pass too easily", "Test that depends on external services"],
                correct: 0,
                explanation: "Flaky tests fail intermittently due to: race conditions, time dependencies, shared state, network issues. Erode trust in test suite. Fix or quarantine.",
                learnMore: { url: "https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html", text: "📚 Flaky Tests" }
            },
            {
                q: "When is 100% code coverage a bad goal?",
                options: ["Can lead to meaningless tests, diminishing returns", "When working on legacy code with no tests", "If the project has strict deadlines", "When the team is inexperienced with testing"],
                correct: 0,
                explanation: "Chasing 100% can lead to testing trivial code (getters), testing implementation vs behavior, or meaningless assertions. Focus on critical paths.",
                learnMore: { url: "https://martinfowler.com/bliki/TestCoverage.html", text: "📚 Test Coverage" }
            },
        ],
        5: [
            {
                q: "What's property-based testing?",
                options: ["Generate random inputs to verify invariants hold", "Test that object attributes have correct types", "Verify properties files are loaded correctly", "Check that setters and getters work properly"],
                correct: 0,
                explanation: "Property-based testing generates random inputs and checks invariants (e.g., sort(sort(x)) == sort(x)). Finds edge cases you didn't think of. See Hypothesis.",
                learnMore: { url: "https://hypothesis.readthedocs.io/", text: "📚 Hypothesis" }
            },
            {
                q: "What's mutation testing?",
                options: ["Modify code to check if tests catch changes", "Test how code handles data transformations", "Verify database schema migrations work", "Test code behavior under changing conditions"],
                correct: 0,
                explanation: "Mutation testing introduces bugs (mutations) and checks if tests fail. If tests pass with buggy code, they're not testing effectively.",
                learnMore: { url: "https://mutmut.readthedocs.io/", text: "📚 mutmut" }
            },
            {
                q: "What's contract testing?",
                options: ["Verify API contracts between services", "Ensure code complies with coding standards", "Test third-party library integrations", "Validate configuration against schema"],
                correct: 0,
                explanation: "Contract tests verify service interfaces match expectations. Consumer writes contract, provider verifies. Pact is popular tool. Catches integration issues early.",
                learnMore: { url: "https://docs.pact.io/", text: "📚 Pact Contract Testing" }
            },
            {
                q: "What's the test pyramid?",
                options: ["More unit tests, fewer integration, fewest E2E", "Equal number of tests at each level", "E2E tests at base, unit tests at top", "Focus on integration tests as the foundation"],
                correct: 0,
                explanation: "Pyramid: many fast unit tests at base, fewer integration in middle, few slow E2E at top. Unit tests are cheap, E2E are expensive to maintain.",
                learnMore: { url: "https://martinfowler.com/bliki/TestPyramid.html", text: "📚 Test Pyramid" }
            },
            {
                q: "When is end-to-end testing most valuable?",
                options: ["Critical user journeys, integration verification", "As the primary testing strategy for all features", "For testing individual functions and methods", "When unit tests are too difficult to write"],
                correct: 0,
                explanation: "E2E tests verify complete user flows. Slow and brittle, so use sparingly for critical paths. Unit/integration tests should be foundation.",
                learnMore: { url: "https://martinfowler.com/bliki/BroadStackTest.html", text: "📚 E2E Testing" }
            },
        ]
    },

    'f-git': {
        1: [
            {
                q: "What is a branch in Git?",
                options: ["Pointer to a commit, allows parallel development", "Copy of repository", "Backup", "Server connection"],
                correct: 0,
                explanation: "Branches are lightweight pointers to commits. Creating a branch is cheap (41-byte file). Enables parallel work on features/fixes without affecting main.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", text: "📚 Git Branching" }
            },
            {
                q: "What's a commit in Git?",
                options: ["Snapshot of changes with message", "Branch", "File copy", "Server sync"],
                correct: 0,
                explanation: "Commits are snapshots of your project at a point in time, with metadata (author, date, message, parent commits). They're immutable once created.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository", text: "📚 Git Commits" }
            },
            {
                q: "What's a remote in Git?",
                options: ["Connection to repository on server", "Local copy", "Branch type", "Commit type"],
                correct: 0,
                explanation: "Remotes are references to repositories on servers (GitHub, GitLab). 'origin' is the default remote. Use 'git remote -v' to list remotes.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", text: "📚 Git Remotes" }
            },
        ],
        2: [
            {
                q: "What does 'git stash' do?",
                options: ["Temporarily saves uncommitted changes", "Deletes changes", "Commits changes", "Pushes changes"],
                correct: 0,
                explanation: "Stash saves work-in-progress without committing. Useful when switching branches. 'git stash pop' restores. 'git stash list' shows all stashes.",
                learnMore: { url: "https://git-scm.com/docs/git-stash", text: "📚 Git Stash" }
            },
            {
                q: "What's HEAD in Git?",
                options: ["Pointer to current commit/branch", "First commit", "Last commit", "Remote branch"],
                correct: 0,
                explanation: "HEAD points to the current commit you're on (usually via branch reference). Moving HEAD changes what you see in your working directory.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Internals-Git-References", text: "📚 Git HEAD" }
            },
            {
                q: "What does 'git branch -d' do?",
                options: ["Deletes a branch", "Creates branch", "Lists branches", "Renames branch"],
                correct: 0,
                explanation: "'-d' deletes a merged branch safely. Use '-D' to force delete unmerged branches. Only deletes the pointer, commits remain in history.",
                learnMore: { url: "https://git-scm.com/docs/git-branch", text: "📚 Git Branch" }
            },
        ],
        3: [
            {
                q: "When should you rebase instead of merge?",
                options: ["Clean linear history for feature branches", "Always", "Never", "Only on main branch"],
                correct: 0,
                explanation: "Rebase for local/feature branches to get clean history. Never rebase shared branches (rewrites history). Merge preserves context of when integration happened.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing", text: "📚 Rebase vs Merge" }
            },
            {
                q: "What's a fast-forward merge?",
                options: ["Moving branch pointer when no divergence", "Quick merge", "Forced merge", "Automatic merge"],
                correct: 0,
                explanation: "Fast-forward happens when target branch hasn't diverged - Git just moves the pointer. No merge commit created. Use '--no-ff' to force merge commit.",
                learnMore: { url: "https://git-scm.com/docs/git-merge#_fast_forward_merge", text: "📚 Fast-forward Merge" }
            },
            {
                q: "What does 'git reset --hard' do?",
                options: ["Discard all changes and reset to commit", "Soft reset", "Keep changes", "Create backup"],
                correct: 0,
                explanation: "'--hard' discards all changes (staged and working directory). Dangerous! '--soft' keeps changes staged, '--mixed' (default) keeps changes unstaged.",
                learnMore: { url: "https://git-scm.com/docs/git-reset", text: "📚 Git Reset" }
            },
            {
                q: "What's the difference between 'git reset' and 'git revert'?",
                options: ["Reset moves HEAD, revert creates new commit undoing changes", "Same thing", "Revert moves HEAD", "Reset creates commit"],
                correct: 0,
                explanation: "Reset: moves HEAD, potentially losing commits (don't use on shared branches). Revert: creates new commit that undoes changes (safe for shared branches).",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/undoing-changes", text: "📚 Undoing Changes" }
            },
        ],
        4: [
            {
                q: "What does 'git cherry-pick' do?",
                options: ["Apply a specific commit to current branch", "Select best commits", "Delete commits", "Rename commits"],
                correct: 0,
                explanation: "Cherry-pick copies a commit to current branch. Useful for backporting fixes. Creates new commit with same changes but different hash.",
                learnMore: { url: "https://git-scm.com/docs/git-cherry-pick", text: "📚 Git Cherry-pick" }
            },
            {
                q: "What's an interactive rebase used for?",
                options: ["Edit, squash, reorder commits", "Automatic rebase", "Simple merge", "Branch creation"],
                correct: 0,
                explanation: "'git rebase -i' lets you: squash commits, edit messages, reorder, drop commits. Powerful for cleaning up history before merging.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History", text: "📚 Interactive Rebase" }
            },
            {
                q: "What's a Git tag used for?",
                options: ["Mark specific points like releases", "Branch marker", "Comment", "Temporary save"],
                correct: 0,
                explanation: "Tags mark important points (releases, versions). Lightweight tags are just pointers. Annotated tags store metadata (tagger, date, message).",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging", text: "📚 Git Tags" }
            },
            {
                q: "What does 'git blame' show?",
                options: ["Who changed each line and when", "Errors in code", "Merge conflicts", "Branch history"],
                correct: 0,
                explanation: "'git blame' shows last commit that modified each line. Useful for finding when/why code changed. Use '-L' to limit to line range.",
                learnMore: { url: "https://git-scm.com/docs/git-blame", text: "📚 Git Blame" }
            },
        ],
        5: [
            {
                q: "How does 'git reflog' help in recovery?",
                options: ["Shows all ref changes including 'lost' commits", "Log of references", "Remote log", "Error log"],
                correct: 0,
                explanation: "Reflog records HEAD movements locally. Find 'lost' commits after reset/rebase. 'git checkout HEAD@{2}' to recover. Entries expire after 90 days.",
                learnMore: { url: "https://git-scm.com/docs/git-reflog", text: "📚 Git Reflog" }
            },
            {
                q: "What's git worktree?",
                options: ["Multiple working directories for same repo", "Tree structure", "File tree", "Branch tree"],
                correct: 0,
                explanation: "Worktree lets you check out multiple branches simultaneously in different directories. Useful for comparing branches or working on multiple features.",
                learnMore: { url: "https://git-scm.com/docs/git-worktree", text: "📚 Git Worktree" }
            },
            {
                q: "How do you recover a deleted branch?",
                options: ["Find commit in reflog, recreate branch", "Cannot recover", "Automatic recovery", "Contact admin"],
                correct: 0,
                explanation: "Find the commit hash in reflog ('git reflog'), then 'git branch branch-name hash'. Branch is just a pointer - commits aren't deleted immediately.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery", text: "📚 Recovery" }
            },
            {
                q: "What's a detached HEAD state?",
                options: ["HEAD points to commit, not branch", "Broken repository", "Deleted HEAD", "No commits"],
                correct: 0,
                explanation: "Detached HEAD: checked out a commit directly, not a branch. New commits won't belong to any branch. Create a branch to keep them: 'git checkout -b new-branch'.",
                learnMore: { url: "https://git-scm.com/docs/git-checkout#_detached_head", text: "📚 Detached HEAD" }
            },
            {
                q: "What's git bisect used for?",
                options: ["Binary search to find bug-introducing commit", "Split repository", "Merge branches", "Create tags"],
                correct: 0,
                explanation: "Bisect does binary search through history. Mark commits 'good' or 'bad', Git narrows down to the first bad commit efficiently. Great for debugging.",
                learnMore: { url: "https://git-scm.com/docs/git-bisect", text: "📚 Git Bisect" }
            },
        ]
    },

    'f-docker': {
        1: [
            {
                q: "What is a Dockerfile?",
                options: ["Instructions to build a Docker image", "Running container", "Docker configuration", "Container log"],
                correct: 0,
                explanation: "Dockerfile contains instructions (FROM, RUN, COPY, etc.) to build an image layer by layer. Each instruction creates a cached layer.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/", text: "📚 Dockerfile Reference" }
            },
            {
                q: "What command builds a Docker image?",
                options: ["docker build", "docker create", "docker make", "docker compile"],
                correct: 0,
                explanation: "'docker build' reads Dockerfile and creates image. Use '-t name:tag' to tag the image. Build context is sent to daemon (use .dockerignore).",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/build/", text: "📚 Docker Build" }
            },
            {
                q: "What command runs a container?",
                options: ["docker run", "docker start", "docker exec", "docker begin"],
                correct: 0,
                explanation: "'docker run' creates and starts a container from an image. 'docker start' starts an existing stopped container. 'docker exec' runs commands in running container.",
                learnMore: { url: "https://docs.docker.com/engine/reference/run/", text: "📚 Docker Run" }
            },
        ],
        2: [
            {
                q: "What does 'docker-compose up' do?",
                options: ["Starts all services defined in docker-compose.yml", "Updates Docker", "Uploads images", "Shows status"],
                correct: 0,
                explanation: "'docker-compose up' creates and starts all services defined in compose file. Add '-d' for detached mode. '--build' rebuilds images.",
                learnMore: { url: "https://docs.docker.com/compose/reference/up/", text: "📚 Compose Up" }
            },
            {
                q: "What's the purpose of exposing a port in Docker?",
                options: ["Allow external access to container service", "Increase security", "Reduce memory", "Speed up container"],
                correct: 0,
                explanation: "EXPOSE documents which ports the container listens on. '-p host:container' actually publishes the port. Without -p, EXPOSE does nothing for external access.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#expose", text: "📚 Docker Ports" }
            },
            {
                q: "What does 'docker ps' show?",
                options: ["Running containers", "All images", "Docker processes", "Port mappings"],
                correct: 0,
                explanation: "'docker ps' lists running containers. Add '-a' for all containers (including stopped). Shows: ID, image, command, status, ports, names.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/ps/", text: "📚 Docker PS" }
            },
        ],
        3: [
            {
                q: "What's the difference between COPY and ADD in Dockerfile?",
                options: ["ADD can extract archives and fetch URLs", "Same thing", "COPY is newer", "ADD is deprecated"],
                correct: 0,
                explanation: "COPY is straightforward file copy. ADD can extract tar archives and fetch URLs. Prefer COPY for simplicity; use ADD only when you need its features.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy", text: "📚 COPY vs ADD" }
            },
            {
                q: "Why use .dockerignore?",
                options: ["Exclude files from build context", "Ignore errors", "Skip layers", "Disable caching"],
                correct: 0,
                explanation: ".dockerignore excludes files from build context sent to daemon. Speeds up builds, reduces image size, prevents secrets from being included.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#dockerignore-file", text: "📚 .dockerignore" }
            },
            {
                q: "What's a Docker layer?",
                options: ["Cached filesystem change from Dockerfile instruction", "Container level", "Security layer", "Network layer"],
                correct: 0,
                explanation: "Each Dockerfile instruction creates a layer. Layers are cached and reused if instruction and previous layers unchanged. Optimize by ordering least→most changing.",
                learnMore: { url: "https://docs.docker.com/storage/storagedriver/", text: "📚 Docker Layers" }
            },
            {
                q: "What does 'docker pull' do?",
                options: ["Downloads image from registry", "Pushes image", "Removes image", "Lists images"],
                correct: 0,
                explanation: "'docker pull' downloads image from registry (Docker Hub by default). Specify registry: 'registry.example.com/image:tag'. Layers already present are skipped.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/pull/", text: "📚 Docker Pull" }
            },
        ],
        4: [
            {
                q: "How do multi-stage builds reduce image size?",
                options: ["Only final stage artifacts included in image", "Compress files", "Remove layers", "Use smaller base"],
                correct: 0,
                explanation: "Multi-stage builds use multiple FROM statements. Build tools stay in early stages; COPY only needed artifacts to final stage. Dramatically smaller production images.",
                learnMore: { url: "https://docs.docker.com/build/building/multi-stage/", text: "📚 Multi-stage Builds" }
            },
            {
                q: "What's the difference between docker-compose and Docker Swarm?",
                options: ["Compose for dev/single host, Swarm for production clusters", "Same thing", "Swarm is for dev", "Compose is for clusters"],
                correct: 0,
                explanation: "Compose: define multi-container apps, great for development, single host. Swarm: orchestration for production clusters, multi-node, service discovery, scaling.",
                learnMore: { url: "https://docs.docker.com/engine/swarm/", text: "📚 Docker Swarm" }
            },
            {
                q: "Why use alpine-based images?",
                options: ["Smaller image size, faster downloads", "More features", "Better security", "Required by Docker"],
                correct: 0,
                explanation: "Alpine Linux is ~5MB vs ~80MB+ for Debian. Smaller attack surface. But: uses musl libc (compatibility issues sometimes), less tooling. Good for production.",
                learnMore: { url: "https://hub.docker.com/_/alpine", text: "📚 Alpine Image" }
            },
            {
                q: "What's a Docker registry?",
                options: ["Storage and distribution for Docker images", "Container registry", "Log storage", "Config storage"],
                correct: 0,
                explanation: "Registry stores and distributes images. Docker Hub is default public registry. Private options: Harbor, GitLab Registry, AWS ECR, etc.",
                learnMore: { url: "https://docs.docker.com/registry/", text: "📚 Docker Registry" }
            },
        ],
        5: [
            {
                q: "What's the difference between CMD and ENTRYPOINT?",
                options: ["CMD is overridable, ENTRYPOINT defines executable", "Same", "CMD is newer", "ENTRYPOINT is deprecated"],
                correct: 0,
                explanation: "ENTRYPOINT: the executable (hard to override). CMD: default arguments (easy to override). Best practice: ENTRYPOINT for command, CMD for default args.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact", text: "📚 CMD vs ENTRYPOINT" }
            },
            {
                q: "How do you optimize Docker build cache?",
                options: ["Order instructions from least to most changing", "Random order", "No optimization possible", "Always rebuild"],
                correct: 0,
                explanation: "Cache invalidates when instruction or previous layer changes. Order: base image → dependencies → code. Copy package.json before code to cache npm install.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache", text: "📚 Build Cache" }
            },
            {
                q: "What's a Docker secret?",
                options: ["Sensitive data management for Swarm", "Hidden container", "Private image", "Encrypted volume"],
                correct: 0,
                explanation: "Swarm secrets store sensitive data (passwords, keys) encrypted. Mounted as files in containers. Better than environment variables (visible in ps/logs).",
                learnMore: { url: "https://docs.docker.com/engine/swarm/secrets/", text: "📚 Docker Secrets" }
            },
            {
                q: "What's the purpose of Docker health checks?",
                options: ["Monitor container application health", "Check disk", "Verify network", "Test security"],
                correct: 0,
                explanation: "HEALTHCHECK tests if app inside is working (not just process running). Returns: healthy, unhealthy, starting. Orchestrators can restart unhealthy containers.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#healthcheck", text: "📚 HEALTHCHECK" }
            },
            {
                q: "How do you reduce Docker image attack surface?",
                options: ["Minimal base image, non-root user, no unnecessary tools", "Add more tools", "Run as root", "Use large images"],
                correct: 0,
                explanation: "Use minimal base (alpine, distroless), non-root USER, remove shells/tools if not needed, scan for vulnerabilities (Trivy, Snyk), update regularly.",
                learnMore: { url: "https://docs.docker.com/develop/security-best-practices/", text: "📚 Security Best Practices" }
            },
        ]
    },

    'f-ci-cd': {
        1: [
            {
                q: "What does CI stand for?",
                options: ["Continuous Integration", "Code Integration", "Continuous Improvement", "Code Inspection"],
                correct: 0,
                explanation: "CI stands for Continuous Integration - the practice of frequently merging code changes into a shared repository, where automated builds and tests verify each integration.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/introduction/", text: "📚 GitLab CI/CD Introduction" }
            },
            {
                q: "What does CD stand for (in CI/CD)?",
                options: ["Continuous Delivery/Deployment", "Code Delivery", "Continuous Development", "Code Distribution"],
                correct: 0,
                explanation: "CD can mean Continuous Delivery (automatically prepare releases for deployment) or Continuous Deployment (automatically deploy every change that passes tests).",
                learnMore: { url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment", text: "📚 CI vs CD vs CD" }
            },
            {
                q: "What's the main goal of CI?",
                options: ["Detect integration issues early", "Deploy faster", "Write less code", "Reduce testing"],
                correct: 0,
                explanation: "CI's main goal is to detect integration problems early by automatically building and testing code changes frequently, reducing integration pain.",
                learnMore: { url: "https://martinfowler.com/articles/continuousIntegration.html", text: "📚 Martin Fowler on CI" }
            },
        ],
        2: [
            {
                q: "What triggers a CI pipeline typically?",
                options: ["Code push or merge request", "Manual button only", "Scheduled time only", "Production deployment"],
                correct: 0,
                explanation: "CI pipelines are typically triggered by code pushes, merge/pull requests, or branch updates. This ensures every change is verified automatically.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/pipelines/", text: "📚 GitLab Pipelines" }
            },
            {
                q: "What's a pipeline stage?",
                options: ["Group of jobs that run together", "Single command", "Branch name", "Server"],
                correct: 0,
                explanation: "A pipeline stage is a logical grouping of jobs that run together. Common stages include build, test, and deploy. Jobs in a stage run in parallel by default.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/yaml/#stages", text: "📚 GitLab Pipeline Stages" }
            },
            {
                q: "What should happen if CI tests fail?",
                options: ["Block merge until fixed", "Merge anyway", "Ignore", "Delete branch"],
                correct: 0,
                explanation: "Failed CI tests should block the merge to protect the main branch. This enforces quality gates and ensures only passing code enters the codebase.",
                learnMore: { url: "https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html", text: "📚 Pipeline-Gated Merges" }
            },
        ],
        3: [
            {
                q: "What's the difference between Continuous Delivery and Deployment?",
                options: ["Delivery requires manual approval, Deployment is automatic", "Same thing", "Delivery is automatic", "Deployment needs approval"],
                correct: 0,
                explanation: "Continuous Delivery means code is always ready to deploy but requires manual approval. Continuous Deployment automatically deploys every passing change to production.",
                learnMore: { url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment", text: "📚 Delivery vs Deployment" }
            },
            {
                q: "What's a build artifact?",
                options: ["Output from build process (binary, package)", "Source code", "Test results only", "Log files"],
                correct: 0,
                explanation: "Build artifacts are files produced by the build process: compiled binaries, packages, container images, or bundles that can be deployed or passed to other stages.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html", text: "📚 GitLab Job Artifacts" }
            },
            {
                q: "What's pipeline caching used for?",
                options: ["Speed up builds by reusing dependencies", "Store logs", "Save test results", "Backup code"],
                correct: 0,
                explanation: "Pipeline caching stores and reuses dependencies (node_modules, pip packages) between pipeline runs, significantly speeding up build times.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/caching/", text: "📚 GitLab Caching" }
            },
            {
                q: "What's a deployment environment?",
                options: ["Target system (dev, staging, prod)", "IDE", "Build server", "Git branch"],
                correct: 0,
                explanation: "Deployment environments are target systems where code runs: development, staging, production, etc. Each may have different configurations and access controls.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/environments/", text: "📚 GitLab Environments" }
            },
        ],
        4: [
            {
                q: "What are pipeline artifacts used for?",
                options: ["Pass build outputs between stages/jobs", "Store secrets", "Log errors", "Cache dependencies"],
                correct: 0,
                explanation: "Pipeline artifacts pass outputs between jobs/stages (e.g., compiled code from build to test stage). Unlike caches, artifacts are job-specific outputs.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html", text: "📚 Job Artifacts" }
            },
            {
                q: "What's a rollback strategy?",
                options: ["Plan to revert failed deployment", "Remove old code", "Backup database", "Clear cache"],
                correct: 0,
                explanation: "A rollback strategy is a plan to quickly revert to a previous working version when a deployment fails. Can use previous artifacts, git reverts, or blue-green switching.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/environments/#environment-rollback", text: "📚 Environment Rollback" }
            },
            {
                q: "What's canary deployment?",
                options: ["Gradual rollout to subset of users", "Full deployment", "Immediate rollback", "Test deployment"],
                correct: 0,
                explanation: "Canary deployment gradually rolls out changes to a small subset of users first. If issues arise, only a small percentage is affected before full rollout.",
                learnMore: { url: "https://martinfowler.com/bliki/CanaryRelease.html", text: "📚 Canary Releases" }
            },
            {
                q: "What's infrastructure as code in CI/CD?",
                options: ["Define infrastructure in version-controlled files", "Manual setup", "GUI configuration", "External tools"],
                correct: 0,
                explanation: "Infrastructure as Code (IaC) defines infrastructure using version-controlled files (Terraform, Ansible), enabling reproducible, auditable infrastructure changes through CI/CD.",
                learnMore: { url: "https://www.terraform.io/intro", text: "📚 Terraform Introduction" }
            },
        ],
        5: [
            {
                q: "How do you implement blue-green deployments?",
                options: ["Two identical environments, switch traffic after verification", "Single environment", "Gradual rollout", "A/B testing"],
                correct: 0,
                explanation: "Blue-green deployment uses two identical environments. Deploy to inactive one (green), verify it works, then switch traffic from active (blue) to green. Instant rollback possible.",
                learnMore: { url: "https://martinfowler.com/bliki/BlueGreenDeployment.html", text: "📚 Blue-Green Deployment" }
            },
            {
                q: "What's GitOps?",
                options: ["Use Git as source of truth for infrastructure", "Git operations", "GitHub features", "Git automation"],
                correct: 0,
                explanation: "GitOps uses Git as the single source of truth for infrastructure and applications. Changes are made via PRs, and automated processes sync Git state to actual infrastructure.",
                learnMore: { url: "https://www.gitops.tech/", text: "📚 GitOps Principles" }
            },
            {
                q: "What's feature flag deployment?",
                options: ["Toggle features without deployment", "Feature branches", "Flag variables", "Deployment flags"],
                correct: 0,
                explanation: "Feature flags (toggles) allow enabling/disabling features at runtime without deployment. Enables gradual rollouts, A/B testing, and quick disabling of problematic features.",
                learnMore: { url: "https://martinfowler.com/articles/feature-toggles.html", text: "📚 Feature Toggles" }
            },
            {
                q: "What's a deployment pipeline pattern?",
                options: ["Stages: build, test, deploy with gates", "Single step", "Manual process", "No pattern"],
                correct: 0,
                explanation: "A deployment pipeline pattern structures CI/CD into stages (build → test → staging → production) with quality gates between each stage ensuring only verified code advances.",
                learnMore: { url: "https://martinfowler.com/bliki/DeploymentPipeline.html", text: "📚 Deployment Pipeline" }
            },
            {
                q: "How do you handle database migrations in CI/CD?",
                options: ["Versioned migrations, backward compatible, tested", "Manual changes", "No migrations", "Drop and recreate"],
                correct: 0,
                explanation: "Database migrations should be versioned, backward compatible (for rollback), and tested. Run migrations as separate pipeline step before deployment. Avoid destructive changes.",
                learnMore: { url: "https://docs.djangoproject.com/en/4.2/topics/migrations/", text: "📚 Django Migrations" }
            },
        ]
    },

    // ============================================================================
    // CORE PLATFORM TIER
    // ============================================================================

    'c-waldur-arch': {
        1: [
            {
                q: "What's Waldur's backend framework?",
                options: ["Django REST Framework", "Flask", "FastAPI", "Express"],
                correct: 0,
                explanation: "Waldur's backend (waldur-mastermind) is built on Django REST Framework, providing a powerful REST API with serializers, viewsets, and authentication.",
                learnMore: { url: "https://docs.waldur.com/", text: "📚 Waldur Documentation" }
            },
            {
                q: "What's Waldur's frontend framework?",
                options: ["React", "Angular", "Vue", "jQuery"],
                correct: 0,
                explanation: "Waldur's frontend (waldur-homeport) uses React with Redux for state management, providing a modern single-page application experience.",
                learnMore: { url: "https://github.com/waldur/waldur-homeport", text: "📚 Waldur Homeport" }
            },
            {
                q: "What database does Waldur primarily use?",
                options: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
                correct: 0,
                explanation: "Waldur uses PostgreSQL as its primary database, leveraging its robust features like JSON fields, full-text search, and transactional integrity.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/deployment/", text: "📚 Waldur Deployment" }
            },
        ],
        2: [
            {
                q: "What are Structure Apps in Waldur?",
                options: ["Pluggable modules for different resource types", "Mobile apps", "Database structures", "API endpoints"],
                correct: 0,
                explanation: "Structure Apps are Waldur plugins that define new resource types (e.g., OpenStack, SLURM). Each provides models, serializers, views, and backend logic.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Waldur Plugins" }
            },
            {
                q: "What's Celery used for in Waldur?",
                options: ["Async task processing", "Web serving", "Database access", "Frontend rendering"],
                correct: 0,
                explanation: "Celery handles asynchronous tasks in Waldur: resource provisioning, periodic sync with backends, sending notifications, generating reports, and other background jobs.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/", text: "📚 Celery Documentation" }
            },
            {
                q: "What message broker does Waldur use with Celery?",
                options: ["Redis or RabbitMQ", "Kafka", "SQS", "Direct"],
                correct: 0,
                explanation: "Waldur uses Redis (default) or RabbitMQ as Celery's message broker. Redis is simpler to deploy; RabbitMQ offers more advanced features for larger installations.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/getting-started/backends-and-brokers/", text: "📚 Celery Brokers" }
            },
        ],
        3: [
            {
                q: "How does Waldur's plugin system work?",
                options: ["Django apps registered via settings, providing new resource types", "npm packages", "Docker containers", "Microservices"],
                correct: 0,
                explanation: "Waldur plugins are Django apps registered in INSTALLED_APPS. They hook into core via extensions registry, providing new resource types, views, and background tasks.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/", text: "📚 Developer Guide" }
            },
            {
                q: "What's the purpose of waldur-mastermind?",
                options: ["Main Waldur backend containing core and plugins", "Frontend app", "Mobile app", "Documentation"],
                correct: 0,
                explanation: "waldur-mastermind is the main backend repository containing waldur-core and all official plugins. It's the single deployable backend component.",
                learnMore: { url: "https://github.com/waldur/waldur-mastermind", text: "📚 Waldur Mastermind" }
            },
            {
                q: "How are Waldur API endpoints structured?",
                options: ["DRF ViewSets with routers", "Flask routes", "Raw Django views", "GraphQL"],
                correct: 0,
                explanation: "Waldur uses DRF ViewSets registered with routers. ViewSets provide CRUD operations automatically. Custom actions are added with @action decorator.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/viewsets/", text: "📚 DRF ViewSets" }
            },
            {
                q: "What serializers does Waldur use?",
                options: ["DRF serializers for API input/output", "JSON only", "XML only", "Custom format"],
                correct: 0,
                explanation: "Waldur uses DRF serializers for validation, parsing input, and formatting output. HyperlinkedModelSerializer provides URL-based relationships between resources.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/serializers/", text: "📚 DRF Serializers" }
            },
        ],
        4: [
            {
                q: "What's the role of waldur-core vs plugins?",
                options: ["Core provides base, plugins add specific integrations", "Core is optional", "Plugins are core", "No difference"],
                correct: 0,
                explanation: "waldur-core provides base models (Customer, Project), permissions, marketplace, and infrastructure. Plugins add specific provider integrations (OpenStack, Azure, etc.).",
                learnMore: { url: "https://docs.waldur.com/developer-guide/structure/", text: "📚 Waldur Structure" }
            },
            {
                q: "How does Waldur handle background jobs?",
                options: ["Celery tasks with periodic scheduling", "Cron jobs", "Threads", "No background jobs"],
                correct: 0,
                explanation: "Waldur uses Celery for background jobs. Celery Beat schedules periodic tasks (sync, cleanup). Tasks are defined with @shared_task decorator and can be chained.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/userguide/periodic-tasks.html", text: "📚 Periodic Tasks" }
            },
            {
                q: "What's the structure of a Waldur plugin?",
                options: ["Django app with models, views, serializers, tasks", "Single file", "Configuration only", "Frontend only"],
                correct: 0,
                explanation: "A Waldur plugin is a Django app with: models.py (resources), serializers.py (API format), views.py (viewsets), tasks.py (Celery tasks), and extension.py (registration).",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Plugin Development" }
            },
            {
                q: "How does Waldur manage database migrations?",
                options: ["Django migrations per app", "Raw SQL", "Manual schema", "No migrations"],
                correct: 0,
                explanation: "Waldur uses Django migrations. Each app has its own migrations folder. Run makemigrations when models change, then migrate to apply. Migrations are version-controlled.",
                learnMore: { url: "https://docs.djangoproject.com/en/4.2/topics/migrations/", text: "📚 Django Migrations" }
            },
        ],
        5: [
            {
                q: "How do you extend Waldur with custom resource types?",
                options: ["Create structure app with models, serializers, views, and register", "Modify core code", "Use configuration", "External API"],
                correct: 0,
                explanation: "Create a new Django app with: Resource model inheriting from marketplace.Resource, serializers, viewsets, processor for order handling, and register via extension.py.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Custom Plugins" }
            },
            {
                q: "How does Waldur handle multi-tenancy at database level?",
                options: ["Shared database with organization/project filtering", "Separate databases", "Schemas", "No multi-tenancy"],
                correct: 0,
                explanation: "Waldur uses shared database with Customer (organization) and Project models. QuerySets are filtered by user permissions. No tenant isolation at DB level - it's application-level.",
                learnMore: { url: "https://docs.waldur.com/user-guide/organizations/", text: "📚 Organizations" }
            },
            {
                q: "What's the Waldur executor pattern?",
                options: ["Backend-specific logic for provisioning resources", "User executor", "Task runner", "Query executor"],
                correct: 0,
                explanation: "Executors contain backend-specific provisioning logic. They implement create/update/delete for resources, communicating with external APIs (OpenStack, SLURM, etc.).",
                learnMore: { url: "https://docs.waldur.com/developer-guide/", text: "📚 Developer Guide" }
            },
            {
                q: "How does Waldur handle service provider backends?",
                options: ["Backend classes implementing common interface", "Direct API calls", "Hardcoded logic", "Configuration files"],
                correct: 0,
                explanation: "Each provider has a Backend class implementing common interface (create_resource, delete_resource). ServiceSettings stores credentials. Allows multiple instances per provider type.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/backends/", text: "📚 Backend Development" }
            },
            {
                q: "What's the role of waldur-homeport?",
                options: ["React frontend application", "Backend service", "Database", "Load balancer"],
                correct: 0,
                explanation: "waldur-homeport is the React-based frontend SPA. It communicates with waldur-mastermind via REST API. Uses Redux for state, React Router for navigation.",
                learnMore: { url: "https://github.com/waldur/waldur-homeport", text: "📚 Homeport Repository" }
            },
        ]
    },

    'c-marketplace': {
        1: [
            {
                q: "What is an Offering in Waldur marketplace?",
                options: ["Template for provisionable resources", "Sales pitch", "User account", "Payment method"],
                correct: 0,
                explanation: "An Offering is a template that defines what can be provisioned: its type, configuration options, pricing plans, and which backend provides it. Users order from offerings.",
                learnMore: { url: "https://docs.waldur.com/user-guide/marketplace/", text: "📚 Marketplace Guide" }
            },
            {
                q: "What is a Category in the marketplace?",
                options: ["Grouping for offerings (compute, storage, etc.)", "User category", "Price category", "Log category"],
                correct: 0,
                explanation: "Categories organize offerings by type (Compute, Storage, HPC, etc.). They help users discover relevant services and can have custom icons and descriptions.",
                learnMore: { url: "https://docs.waldur.com/user-guide/marketplace/", text: "📚 Marketplace Categories" }
            },
            {
                q: "Who creates offerings in Waldur?",
                options: ["Service providers/administrators", "End users", "System automatically", "External systems"],
                correct: 0,
                explanation: "Service providers (organizations with provider role) and staff administrators create offerings. End users consume offerings by placing orders.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/", text: "📚 Provider Guide" }
            },
        ],
        2: [
            {
                q: "What's the relationship between Offering and Resource?",
                options: ["Offering is template, Resource is provisioned instance", "Same thing", "Resource contains Offerings", "No relationship"],
                correct: 0,
                explanation: "An Offering is a template defining what can be created. A Resource is a provisioned instance created from an offering. Many resources can be created from one offering.",
                learnMore: { url: "https://docs.waldur.com/user-guide/resources/", text: "📚 Resources" }
            },
            {
                q: "What is an Order in Waldur?",
                options: ["Request to create/modify/terminate a resource", "Shopping cart", "Invoice", "Report"],
                correct: 0,
                explanation: "An Order is a request to perform an action on a resource: create, update, or terminate. Orders go through approval workflow and are processed by backend executors.",
                learnMore: { url: "https://docs.waldur.com/user-guide/orders/", text: "📚 Order Management" }
            },
            {
                q: "What's an offering component?",
                options: ["Measurable unit like CPU cores or RAM", "UI component", "Plugin", "Category"],
                correct: 0,
                explanation: "Components define measurable, billable units of an offering: CPU cores, RAM GB, storage TB, etc. Each component has a measurement unit and can have a price.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/offerings/", text: "📚 Offering Components" }
            },
        ],
        3: [
            {
                q: "What states can a marketplace Order have?",
                options: ["Pending, Executing, Done, Erred, etc.", "Only Open/Closed", "No states", "Custom only"],
                correct: 0,
                explanation: "Orders transition through states: pending-consumer → pending-provider → executing → done/erred. Approval workflows control state transitions.",
                learnMore: { url: "https://docs.waldur.com/user-guide/orders/", text: "📚 Order States" }
            },
            {
                q: "What triggers order processing in Waldur?",
                options: ["Approval or auto-approve, then Celery tasks", "Manual processing", "Immediate execution", "External trigger"],
                correct: 0,
                explanation: "After approval (manual or auto), Celery tasks pick up the order, call the appropriate backend executor, and update the resource and order state.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/workflows/", text: "📚 Workflows" }
            },
            {
                q: "What's a plan in Waldur marketplace?",
                options: ["Pricing configuration for an offering", "Project plan", "Deployment plan", "Support plan"],
                correct: 0,
                explanation: "A Plan defines pricing for an offering. It sets prices per component unit and billing period. An offering can have multiple plans (e.g., standard, premium).",
                learnMore: { url: "https://docs.waldur.com/admin-guide/pricing/", text: "📚 Pricing Plans" }
            },
            {
                q: "How does resource termination work?",
                options: ["Order of type 'terminate' processed by backend", "Direct deletion", "Manual removal", "Automatic expiry only"],
                correct: 0,
                explanation: "Termination creates an Order with type='Terminate'. After approval, the backend executor deletes the resource from the provider and marks it terminated in Waldur.",
                learnMore: { url: "https://docs.waldur.com/user-guide/resources/", text: "📚 Resource Lifecycle" }
            },
        ],
        4: [
            {
                q: "How do offering components affect pricing?",
                options: ["Define measurable units (CPU, RAM) with prices", "No effect", "Visual only", "Documentation"],
                correct: 0,
                explanation: "Components define billable units. Plans set prices per unit. Usage × Price = Cost. E.g., 4 CPU cores × $0.05/hour = $0.20/hour. Enables usage-based billing.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/pricing/", text: "📚 Component Pricing" }
            },
            {
                q: "What's offering attributes used for?",
                options: ["Custom configuration options for resources", "Styling", "Categories", "Permissions"],
                correct: 0,
                explanation: "Offering attributes define user-configurable options when ordering: dropdown selections, text inputs, checkboxes. They customize what users can request.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/offerings/", text: "📚 Offering Attributes" }
            },
            {
                q: "How does Waldur track resource usage?",
                options: ["Component usage reported periodically", "No tracking", "Manual entry", "External systems only"],
                correct: 0,
                explanation: "Backend plugins report component usage periodically (CPU hours, storage GB). This feeds into billing calculations and usage reports.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/reporting/", text: "📚 Usage Reporting" }
            },
            {
                q: "What's the approval workflow in marketplace?",
                options: ["Orders can require manager/admin approval", "Always auto-approved", "Never approved", "External approval"],
                correct: 0,
                explanation: "Offerings can require approval: consumer (project manager) and/or provider (service provider). Auto-approve is possible. Configurable per offering.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/workflows/", text: "📚 Approval Workflows" }
            },
        ],
        5: [
            {
                q: "What's the difference between public and private offerings?",
                options: ["Public visible to all, private to specific customers", "Same visibility", "Public is free", "Private is external"],
                correct: 0,
                explanation: "Public offerings are visible to all users in the marketplace. Private offerings are restricted to specific customers, enabling exclusive services or custom pricing.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/offerings/", text: "📚 Offering Visibility" }
            },
            {
                q: "How does the marketplace handle billing?",
                options: ["Generate invoices based on component usage and prices", "No billing", "External only", "Manual"],
                correct: 0,
                explanation: "Waldur generates invoices periodically based on resource usage and plan prices. Supports fixed and usage-based billing. Integrates with payment systems.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/billing/", text: "📚 Billing System" }
            },
            {
                q: "What's offering secret options for?",
                options: ["Provider-only configuration not visible to users", "User secrets", "API keys", "Passwords"],
                correct: 0,
                explanation: "Secret options store provider-side configuration hidden from users: backend credentials, internal settings. Only provider staff can view/edit these.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/offerings/", text: "📚 Secret Options" }
            },
            {
                q: "How do you implement custom offering types?",
                options: ["Create plugin with offering type and processor", "Modify core", "Configuration only", "Cannot customize"],
                correct: 0,
                explanation: "Create a plugin defining: offering type identifier, processor class handling orders, optional executor for backend interaction, and serializers for custom attributes.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Custom Offerings" }
            },
            {
                q: "What's the robot account feature?",
                options: ["Automated access for resources/integrations", "User account", "Admin account", "Test account"],
                correct: 0,
                explanation: "Robot accounts provide API access for automated systems and integrations. They have scoped permissions, can be attached to resources, and support credential rotation.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/robot-accounts/", text: "📚 Robot Accounts" }
            },
        ]
    },

    'c-permissions': {
        1: [
            {
                q: "What does RBAC stand for?",
                options: ["Role-Based Access Control", "Resource-Based Access Control", "Request-Based Access", "Runtime-Based Access"],
                correct: 0,
                explanation: "RBAC (Role-Based Access Control) assigns permissions through roles. Users get roles (owner, manager, member), and roles define what actions are allowed.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/permissions/", text: "📚 Permissions Guide" }
            },
            {
                q: "What's the highest permission level in Waldur?",
                options: ["Staff (superuser)", "Organization owner", "Project admin", "Resource manager"],
                correct: 0,
                explanation: "Staff users are superusers with full system access. They can manage all organizations, users, and configurations. Organization owners have full access only within their organization.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/users/", text: "📚 User Management" }
            },
            {
                q: "Can users have different roles in different organizations?",
                options: ["Yes, permissions are per-organization", "No, one role only", "Only admins", "Only staff"],
                correct: 0,
                explanation: "Users can have different roles in different organizations and projects. A user might be owner in one org and member in another, enabling flexible multi-tenant access.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/permissions/", text: "📚 Multi-tenant Permissions" }
            },
        ],
        2: [
            {
                q: "What's a role in Waldur's permission system?",
                options: ["Set of permissions assignable to users", "User type", "Organization", "Resource"],
                correct: 0,
                explanation: "A role is a named set of permissions (e.g., owner, manager, member). Assigning a role to a user grants all permissions defined in that role.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/roles/", text: "📚 Roles" }
            },
            {
                q: "At what levels can permissions be assigned in Waldur?",
                options: ["Customer/Organization, Project, Resource", "User only", "Global only", "Resource only"],
                correct: 0,
                explanation: "Permissions can be assigned at: Customer (organization) level, Project level, or specific resource level. Each level has its own set of applicable roles.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/permissions/", text: "📚 Permission Levels" }
            },
            {
                q: "What's the 'owner' role in an organization?",
                options: ["Full administrative access to organization", "Read only", "Project access only", "Billing only"],
                correct: 0,
                explanation: "Organization owner has full admin access: create/delete projects, manage members, view billing, configure settings. It's the highest role within an organization.",
                learnMore: { url: "https://docs.waldur.com/user-guide/organizations/", text: "📚 Organization Owners" }
            },
        ],
        3: [
            {
                q: "How do project permissions inherit from organization?",
                options: ["Organization owners have access to all projects", "No inheritance", "Projects override", "Manual only"],
                correct: 0,
                explanation: "Organization owners automatically have access to all projects within that organization. Project-level permissions are additive - they grant access to users without org-level roles.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/permissions/", text: "📚 Permission Inheritance" }
            },
            {
                q: "What can a project manager do?",
                options: ["Manage project resources and members", "Create organizations", "Access all projects", "Modify billing"],
                correct: 0,
                explanation: "Project managers can: manage project resources, add/remove project members, approve orders within project scope. They cannot create organizations or access billing.",
                learnMore: { url: "https://docs.waldur.com/user-guide/projects/", text: "📚 Project Management" }
            },
            {
                q: "How are permissions checked in Waldur API?",
                options: ["DRF permission classes on viewsets", "Middleware only", "Database triggers", "Frontend only"],
                correct: 0,
                explanation: "Waldur uses DRF permission classes on viewsets. Each viewset has permission_classes defining who can access. Custom permission classes check user roles against resources.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/permissions/", text: "📚 DRF Permissions" }
            },
            {
                q: "What's the service manager role?",
                options: ["Manage specific service/offering as provider", "Manage all services", "User management", "Billing"],
                correct: 0,
                explanation: "Service managers can manage offerings and resources for a specific service provider. They handle orders, configure offerings, but don't have full organization access.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/", text: "📚 Service Managers" }
            },
        ],
        4: [
            {
                q: "What's the difference between owner and manager roles?",
                options: ["Owners have full access, managers have limited admin rights", "Same", "Managers have more", "Owner is project level"],
                correct: 0,
                explanation: "Owners have complete control (billing, settings, all projects). Managers have administrative rights within a limited scope (their project or assigned resources).",
                learnMore: { url: "https://docs.waldur.com/admin-guide/roles/", text: "📚 Owner vs Manager" }
            },
            {
                q: "How do you grant a user access to a project?",
                options: ["Add permission with role via API/UI", "Edit user profile", "Create new user", "Modify database"],
                correct: 0,
                explanation: "Use the API endpoint or UI to add a permission entry linking user, project, and role. The user immediately gains access according to their assigned role.",
                learnMore: { url: "https://docs.waldur.com/user-guide/projects/", text: "📚 Project Access" }
            },
            {
                q: "What permissions does a project member have?",
                options: ["View and use resources, limited modifications", "Full access", "No access", "Read only"],
                correct: 0,
                explanation: "Project members can view project details, see resources, and use allocated resources. They typically cannot create new resources or manage other members.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/roles/", text: "📚 Member Role" }
            },
            {
                q: "How does Waldur handle permission caching?",
                options: ["Permissions computed and can be cached", "No caching", "Always recomputed", "Database cache only"],
                correct: 0,
                explanation: "Waldur can cache permission checks for performance. Cache is invalidated when permissions change. Reduces database queries for repeated permission checks.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/performance/", text: "📚 Performance" }
            },
        ],
        5: [
            {
                q: "How can you implement custom permission logic?",
                options: ["Override permission classes in DRF viewsets", "Database flags", "Config file", "Cannot customize"],
                correct: 0,
                explanation: "Create custom DRF permission classes inheriting from BasePermission. Override has_permission() and has_object_permission() for custom logic. Assign to viewsets.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/permissions/#custom-permissions", text: "📚 Custom Permissions" }
            },
            {
                q: "What's scope-based filtering in Waldur?",
                options: ["Filter querysets based on user permissions", "UI filtering", "Search feature", "Report filter"],
                correct: 0,
                explanation: "Scope-based filtering automatically restricts querysets to objects the user can access. Uses filter backends in DRF to enforce permissions at the database query level.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/filtering/", text: "📚 Filtering" }
            },
            {
                q: "How do offering permissions work?",
                options: ["Control who can order from specific offerings", "No offering permissions", "Public only", "Admin only"],
                correct: 0,
                explanation: "Offerings can be restricted to specific customers or user groups. Offering permissions control visibility and ordering rights, enabling private or exclusive services.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/offerings/", text: "📚 Offering Permissions" }
            },
            {
                q: "What's the call management feature?",
                options: ["Request and approval workflow for resources", "Phone calls", "API calls", "Support tickets"],
                correct: 0,
                explanation: "Call management provides request/approval workflows: users submit calls (requests), managers review and approve/reject. Used for resource allocation with human oversight.",
                learnMore: { url: "https://docs.waldur.com/user-guide/calls/", text: "📚 Call Management" }
            },
            {
                q: "How does Waldur audit permission changes?",
                options: ["Event logging for permission modifications", "No auditing", "External tools", "Manual tracking"],
                correct: 0,
                explanation: "Waldur logs permission changes as events: who granted/revoked what role, when, to whom. Audit logs help compliance, security review, and troubleshooting.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/audit-logs/", text: "📚 Audit Logs" }
            },
        ]
    },

    // ============================================================================
    // SPECIALIZATION TIER
    // ============================================================================

    's-openstack': {
        1: [
            {
                q: "What is OpenStack?",
                options: ["Open source cloud computing platform", "Operating system", "Database", "Container runtime"],
                correct: 0,
                explanation: "OpenStack is an open source cloud computing platform that controls pools of compute, storage, and networking resources, enabling private and public cloud deployments.",
                learnMore: { url: "https://www.openstack.org/software/", text: "📚 OpenStack Overview" }
            },
            {
                q: "What's the relationship between OpenStack and IaaS?",
                options: ["OpenStack provides Infrastructure as a Service", "OpenStack is PaaS", "OpenStack is SaaS", "No relationship"],
                correct: 0,
                explanation: "OpenStack provides IaaS (Infrastructure as a Service): on-demand compute, storage, and networking resources. Users get virtual infrastructure without managing physical hardware.",
                learnMore: { url: "https://docs.openstack.org/", text: "📚 OpenStack Docs" }
            },
            {
                q: "Is OpenStack a single application or collection of services?",
                options: ["Collection of interconnected services", "Single application", "Operating system", "Database"],
                correct: 0,
                explanation: "OpenStack is a collection of services (Nova, Neutron, Cinder, etc.) that work together. Each service handles a specific function and communicates via APIs.",
                learnMore: { url: "https://www.openstack.org/software/project-navigator/", text: "📚 OpenStack Projects" }
            },
        ],
        2: [
            {
                q: "What OpenStack component manages compute (VMs)?",
                options: ["Nova", "Neutron", "Cinder", "Swift"],
                correct: 0,
                explanation: "Nova is the compute service managing virtual machines. It handles VM lifecycle (create, resize, migrate, delete), scheduling, and hypervisor interaction.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/", text: "📚 Nova Documentation" }
            },
            {
                q: "What does Keystone provide in OpenStack?",
                options: ["Identity and authentication service", "Storage", "Networking", "Compute"],
                correct: 0,
                explanation: "Keystone is the identity service providing authentication (who you are) and authorization (what you can do). It manages users, projects, roles, and service catalog.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/", text: "📚 Keystone Documentation" }
            },
            {
                q: "What's Glance used for in OpenStack?",
                options: ["Image service for VM images", "Monitoring", "Networking", "Storage"],
                correct: 0,
                explanation: "Glance is the image service storing and retrieving VM disk images. It supports multiple formats (qcow2, raw, vmdk) and backends (file, Swift, Ceph).",
                learnMore: { url: "https://docs.openstack.org/glance/latest/", text: "📚 Glance Documentation" }
            },
        ],
        3: [
            {
                q: "What's the role of Neutron?",
                options: ["Network connectivity as a service", "Block storage", "Object storage", "Orchestration"],
                correct: 0,
                explanation: "Neutron provides networking as a service: virtual networks, subnets, routers, firewalls, VPNs, and load balancers. Supports multiple backends (OVS, OVN, etc.).",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/", text: "📚 Neutron Documentation" }
            },
            {
                q: "What does Cinder provide?",
                options: ["Block storage volumes", "Object storage", "Networking", "Identity"],
                correct: 0,
                explanation: "Cinder provides block storage volumes that attach to VMs like virtual disks. Supports multiple backends (LVM, Ceph, NetApp) and features like snapshots and backups.",
                learnMore: { url: "https://docs.openstack.org/cinder/latest/", text: "📚 Cinder Documentation" }
            },
            {
                q: "What's Swift in OpenStack?",
                options: ["Object storage service", "Block storage", "Networking", "Compute"],
                correct: 0,
                explanation: "Swift is object storage for unstructured data (files, images, backups). Highly scalable and redundant. Access via REST API, not mounted like block storage.",
                learnMore: { url: "https://docs.openstack.org/swift/latest/", text: "📚 Swift Documentation" }
            },
            {
                q: "What's Heat used for?",
                options: ["Orchestration with templates", "Monitoring", "Networking", "Storage"],
                correct: 0,
                explanation: "Heat is the orchestration service using templates (HOT format) to define infrastructure stacks: VMs, networks, volumes, etc. Enables infrastructure as code.",
                learnMore: { url: "https://docs.openstack.org/heat/latest/", text: "📚 Heat Documentation" }
            },
        ],
        4: [
            {
                q: "How does Waldur integrate with OpenStack?",
                options: ["Via OpenStack APIs to provision and manage resources", "Direct database access", "SSH only", "Manual sync"],
                correct: 0,
                explanation: "Waldur integrates via OpenStack APIs (python-openstackclient libraries). It creates VMs, networks, volumes on behalf of users, syncs state, and reports usage.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/openstack/", text: "📚 Waldur OpenStack" }
            },
            {
                q: "What's a Nova flavor?",
                options: ["VM size specification (CPU, RAM, disk)", "Network type", "Storage type", "User role"],
                correct: 0,
                explanation: "A flavor defines VM size: vCPUs, RAM, root disk, ephemeral disk. Admins create flavors (m1.small, m1.large). Users select flavor when launching VMs.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/user/flavors.html", text: "📚 Nova Flavors" }
            },
            {
                q: "What's a security group in OpenStack?",
                options: ["Firewall rules for instances", "User group", "Storage group", "Network group"],
                correct: 0,
                explanation: "Security groups are virtual firewalls defining ingress/egress rules for instances. Rules specify protocol, port range, and source/destination CIDR or group.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html#security-groups", text: "📚 Security Groups" }
            },
            {
                q: "What's floating IP used for?",
                options: ["Public IP that can move between instances", "Private IP", "DNS name", "Load balancer"],
                correct: 0,
                explanation: "Floating IPs are public IPs that can be associated with instances for external access. They can be moved between instances, enabling failover and maintenance.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html#floating-ips", text: "📚 Floating IPs" }
            },
        ],
        5: [
            {
                q: "What's a Keystone domain used for?",
                options: ["Namespace for projects and users for multi-tenancy", "DNS resolution", "Network isolation", "Storage pools"],
                correct: 0,
                explanation: "Domains are top-level containers for projects and users, enabling multi-tenancy. Each domain has independent users, projects, and roles. Useful for resellers.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/admin/identity-concepts.html", text: "📚 Identity Concepts" }
            },
            {
                q: "How does OpenStack handle multi-region deployments?",
                options: ["Multiple regions with shared Keystone", "Single region only", "Automatic replication", "External tools"],
                correct: 0,
                explanation: "Multi-region deployments share a central Keystone for identity but have independent Nova, Neutron, etc. per region. Regions appear in service catalog.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/admin/identity-concepts.html#regions", text: "📚 OpenStack Regions" }
            },
            {
                q: "What's Ceph integration with OpenStack?",
                options: ["Distributed storage backend for Cinder/Glance", "Compute service", "Network service", "Identity service"],
                correct: 0,
                explanation: "Ceph provides distributed storage backend for Cinder (block), Glance (images), and Nova (ephemeral disks). Offers scalability, replication, and snapshots.",
                learnMore: { url: "https://docs.ceph.com/en/latest/rbd/rbd-openstack/", text: "📚 Ceph with OpenStack" }
            },
            {
                q: "What's the relationship between Nova and Placement?",
                options: ["Placement tracks resource inventory for Nova scheduling", "Same service", "Placement replaced Nova", "No relationship"],
                correct: 0,
                explanation: "Placement tracks resource inventory (CPUs, RAM, disk) and allocation. Nova scheduler queries Placement to find hosts with available capacity for new VMs.",
                learnMore: { url: "https://docs.openstack.org/placement/latest/", text: "📚 Placement Service" }
            },
            {
                q: "How do you troubleshoot Nova instance launch failures?",
                options: ["Check nova-compute logs, placement, scheduler", "Restart OpenStack", "Reinstall", "Contact support"],
                correct: 0,
                explanation: "Check: nova-scheduler logs (host selection), nova-compute logs (VM creation), Placement (resource availability), Neutron (network), Glance (image). Use 'openstack server show --diagnostics'.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/admin/troubleshooting.html", text: "📚 Nova Troubleshooting" }
            },
        ]
    },

    's-kubernetes': {
        1: [
            {
                q: "What is Kubernetes primarily used for?",
                options: ["Container orchestration", "Virtual machine management", "Database clustering", "Network routing"],
                correct: 0,
                explanation: "Kubernetes (K8s) orchestrates containers: scheduling, scaling, healing, networking. It automates deployment and management of containerized applications across clusters.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/", text: "📚 Kubernetes Overview" }
            },
            {
                q: "What's kubectl?",
                options: ["Command-line tool for Kubernetes", "Kubernetes service", "Container runtime", "Network plugin"],
                correct: 0,
                explanation: "kubectl is the CLI for Kubernetes. It communicates with the API server to manage resources: create deployments, check pod status, view logs, exec into containers.",
                learnMore: { url: "https://kubernetes.io/docs/reference/kubectl/", text: "📚 kubectl Reference" }
            },
            {
                q: "What's a Kubernetes cluster?",
                options: ["Set of nodes running containerized applications", "Single container", "Network", "Storage"],
                correct: 0,
                explanation: "A cluster is a set of machines (nodes) running Kubernetes. It has a control plane (managing the cluster) and worker nodes (running workloads in pods).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/", text: "📚 Cluster Components" }
            },
        ],
        2: [
            {
                q: "What is a Helm chart?",
                options: ["Package of Kubernetes resources", "Monitoring dashboard", "Network diagram", "Storage class"],
                correct: 0,
                explanation: "Helm charts package Kubernetes manifests with templating. They define applications (deployments, services, configmaps) with configurable values for easy deployment.",
                learnMore: { url: "https://helm.sh/docs/topics/charts/", text: "📚 Helm Charts" }
            },
            {
                q: "What's a Kubernetes node?",
                options: ["Machine (physical/virtual) running pods", "Container", "Network", "Storage"],
                correct: 0,
                explanation: "A node is a worker machine (physical or VM) in the cluster. Each node runs kubelet (agent), container runtime, and kube-proxy. Nodes host pods.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/architecture/nodes/", text: "📚 Nodes" }
            },
            {
                q: "What's the control plane in Kubernetes?",
                options: ["Components that manage cluster state", "Worker nodes", "Containers", "Storage"],
                correct: 0,
                explanation: "Control plane components manage cluster state: API server (entry point), etcd (state store), scheduler (pod placement), controller manager (reconciliation loops).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/#control-plane-components", text: "📚 Control Plane" }
            },
        ],
        3: [
            {
                q: "What's a Kubernetes operator?",
                options: ["Custom controller that extends K8s API", "Human administrator", "CLI tool", "Monitoring agent"],
                correct: 0,
                explanation: "Operators are custom controllers that extend Kubernetes with application-specific logic. They use CRDs to manage complex applications (databases, message queues) declaratively.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/", text: "📚 Operators" }
            },
            {
                q: "What does kubectl port-forward do?",
                options: ["Tunnels local port to pod port", "Opens firewall", "Redirects DNS", "Forwards logs"],
                correct: 0,
                explanation: "port-forward creates a tunnel from localhost to a pod's port. Useful for debugging: access pod's service without exposing it externally (e.g., database, dashboard).",
                learnMore: { url: "https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/", text: "📚 Port Forwarding" }
            },
            {
                q: "What's an Ingress in Kubernetes?",
                options: ["HTTP/HTTPS routing to services", "Internal network", "Storage", "Compute"],
                correct: 0,
                explanation: "Ingress manages external HTTP/HTTPS access to services. It provides routing rules, TLS termination, and load balancing. Requires an Ingress controller (nginx, traefik).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/ingress/", text: "📚 Ingress" }
            },
            {
                q: "What's a ServiceAccount used for?",
                options: ["Identity for pods to access API", "User account", "Billing account", "Storage account"],
                correct: 0,
                explanation: "ServiceAccounts provide identity for pods. Pods use them to authenticate to the API server. Combined with RBAC, they control what pods can do in the cluster.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/security/service-accounts/", text: "📚 Service Accounts" }
            },
        ],
        4: [
            {
                q: "What's the difference between ClusterIP and LoadBalancer service types?",
                options: ["ClusterIP is internal only, LoadBalancer exposes externally", "Same", "ClusterIP is external", "LoadBalancer is internal"],
                correct: 0,
                explanation: "ClusterIP exposes service on internal cluster IP (only accessible within cluster). LoadBalancer provisions external load balancer (cloud provider) with public IP.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types", text: "📚 Service Types" }
            },
            {
                q: "What's a PodDisruptionBudget?",
                options: ["Ensures minimum pods available during disruption", "Cost budget", "Resource budget", "Network budget"],
                correct: 0,
                explanation: "PDB limits voluntary disruptions (upgrades, drain) by ensuring minimum available or maximum unavailable pods. Protects application availability during maintenance.",
                learnMore: { url: "https://kubernetes.io/docs/tasks/run-application/configure-pdb/", text: "📚 Pod Disruption Budget" }
            },
            {
                q: "What's kube-proxy responsible for?",
                options: ["Network rules for service communication", "API server proxy", "Storage proxy", "Container proxy"],
                correct: 0,
                explanation: "kube-proxy runs on each node, maintaining network rules that allow communication to pods via Services. Implements Service abstraction using iptables or IPVS.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/#kube-proxy", text: "📚 kube-proxy" }
            },
            {
                q: "What's a sidecar container pattern?",
                options: ["Helper container alongside main container in pod", "Separate pod", "External service", "Network pattern"],
                correct: 0,
                explanation: "Sidecar containers run alongside main app in same pod, sharing network and storage. Common for logging agents, proxies (Envoy), or secret management.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/", text: "📚 Sidecar Containers" }
            },
        ],
        5: [
            {
                q: "How do you implement zero-downtime deployments in K8s?",
                options: ["Rolling updates with readiness probes", "Delete and recreate", "Manual switchover", "Downtime required"],
                correct: 0,
                explanation: "Use RollingUpdate strategy with readiness probes. New pods start and pass readiness before old pods terminate. Configure maxSurge and maxUnavailable for control.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment", text: "📚 Rolling Updates" }
            },
            {
                q: "What's a Custom Resource Definition (CRD)?",
                options: ["Extend Kubernetes API with custom resources", "Core resource", "Built-in type", "Network config"],
                correct: 0,
                explanation: "CRDs extend the Kubernetes API with custom resource types. Define schema in CRD, then create instances. Controllers watch CRDs and reconcile desired state.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/", text: "📚 Custom Resources" }
            },
            {
                q: "How does horizontal pod autoscaling work?",
                options: ["Metrics server monitors, HPA adjusts replicas", "Manual scaling", "Vertical only", "No autoscaling"],
                correct: 0,
                explanation: "HPA queries metrics server (CPU, memory, custom metrics), calculates desired replicas based on target utilization, and updates deployment's replica count automatically.",
                learnMore: { url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/", text: "📚 Horizontal Pod Autoscaling" }
            },
            {
                q: "What's pod priority and preemption?",
                options: ["Higher priority pods can evict lower priority", "No priorities", "Equal priority", "Manual preemption"],
                correct: 0,
                explanation: "PriorityClasses assign priority to pods. When resources are scarce, scheduler can preempt (evict) lower priority pods to make room for higher priority ones.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/", text: "📚 Pod Priority" }
            },
            {
                q: "What's the difference between RollingUpdate and Recreate deployment strategies?",
                options: ["RollingUpdate has no downtime, Recreate has brief downtime", "Same", "Recreate is faster", "RollingUpdate has downtime"],
                correct: 0,
                explanation: "RollingUpdate gradually replaces pods (no downtime). Recreate terminates all old pods before starting new ones (brief downtime but simpler, useful for incompatible versions).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy", text: "📚 Deployment Strategies" }
            },
        ]
    },

    's-slurm': {
        1: [
            {
                q: "What is SLURM?",
                options: ["HPC workload manager and job scheduler", "Programming language", "Storage system", "Network protocol"],
                correct: 0,
                explanation: "SLURM (Simple Linux Utility for Resource Management) is a workload manager for HPC clusters. It schedules jobs, allocates resources, and manages compute nodes.",
                learnMore: { url: "https://slurm.schedmd.com/overview.html", text: "📚 SLURM Overview" }
            },
            {
                q: "What does SLURM stand for?",
                options: ["Simple Linux Utility for Resource Management", "System Level User Resource Manager", "Scalable Linux Unified Resource Manager", "Standard Linux User Resource Monitor"],
                correct: 0,
                explanation: "SLURM stands for Simple Linux Utility for Resource Management. It's the most widely used HPC job scheduler, managing some of the world's largest supercomputers.",
                learnMore: { url: "https://slurm.schedmd.com/", text: "📚 SLURM Documentation" }
            },
            {
                q: "What environments typically use SLURM?",
                options: ["HPC clusters, supercomputers, research computing", "Web servers", "Mobile apps", "Desktop applications"],
                correct: 0,
                explanation: "SLURM is used in HPC (High Performance Computing) environments: research clusters, supercomputers, and scientific computing centers where batch job scheduling is essential.",
                learnMore: { url: "https://slurm.schedmd.com/quickstart.html", text: "📚 SLURM Quickstart" }
            },
        ],
        2: [
            {
                q: "What's a SLURM partition?",
                options: ["Group of nodes with shared properties", "Disk partition", "Network segment", "User group"],
                correct: 0,
                explanation: "A partition (queue) is a group of nodes with common properties (GPU nodes, high-memory, etc.). Jobs are submitted to partitions based on requirements.",
                learnMore: { url: "https://slurm.schedmd.com/quickstart.html#partitions", text: "📚 SLURM Partitions" }
            },
            {
                q: "What command submits a job to SLURM?",
                options: ["sbatch", "slurm-submit", "qsub", "run-job"],
                correct: 0,
                explanation: "sbatch submits batch job scripts to SLURM. The script contains #SBATCH directives for resource requests and the commands to run.",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html", text: "📚 sbatch Command" }
            },
            {
                q: "What's the difference between sbatch and srun?",
                options: ["sbatch submits batch script, srun runs interactive/parallel", "Same command", "srun is deprecated", "sbatch is interactive"],
                correct: 0,
                explanation: "sbatch submits a batch script for later execution. srun runs commands directly (interactive or within a batch job for parallel execution across nodes).",
                learnMore: { url: "https://slurm.schedmd.com/srun.html", text: "📚 srun Command" }
            },
        ],
        3: [
            {
                q: "What does squeue show?",
                options: ["Current job queue status", "Storage quota", "User permissions", "Node hardware"],
                correct: 0,
                explanation: "squeue displays the job queue: pending and running jobs, their states, resources, time limits, and which nodes they're running on.",
                learnMore: { url: "https://slurm.schedmd.com/squeue.html", text: "📚 squeue Command" }
            },
            {
                q: "What's a job array in SLURM?",
                options: ["Multiple similar jobs submitted as one", "Array of nodes", "Data structure", "Storage array"],
                correct: 0,
                explanation: "Job arrays submit many similar jobs with one command (--array=0-100). Each array task gets unique SLURM_ARRAY_TASK_ID for parameter sweeps.",
                learnMore: { url: "https://slurm.schedmd.com/job_array.html", text: "📚 Job Arrays" }
            },
            {
                q: "What does scancel do?",
                options: ["Cancel pending or running jobs", "Scan for errors", "Cancel users", "Scan nodes"],
                correct: 0,
                explanation: "scancel cancels jobs by ID, name, user, or other criteria. Can cancel pending jobs (removes from queue) or running jobs (terminates processes).",
                learnMore: { url: "https://slurm.schedmd.com/scancel.html", text: "📚 scancel Command" }
            },
            {
                q: "What's a SLURM reservation?",
                options: ["Reserved resources for specific users/jobs", "Hotel booking", "Disk reservation", "Memory reservation"],
                correct: 0,
                explanation: "Reservations pre-allocate nodes/resources for specific users, accounts, or maintenance windows. Jobs matching reservation criteria can use reserved resources.",
                learnMore: { url: "https://slurm.schedmd.com/reservations.html", text: "📚 Reservations" }
            },
        ],
        4: [
            {
                q: "How does SLURM accounting work?",
                options: ["Tracks resource usage per user/project for fairshare", "Simple logging", "No tracking", "External only"],
                correct: 0,
                explanation: "SLURM accounting tracks CPU-hours, memory, GPU usage per user/account. Data feeds into fairshare scheduling and usage reports. Uses slurmdbd daemon.",
                learnMore: { url: "https://slurm.schedmd.com/accounting.html", text: "📚 SLURM Accounting" }
            },
            {
                q: "What's sacct used for?",
                options: ["View accounting data for completed jobs", "Account management", "Access control", "System accounts"],
                correct: 0,
                explanation: "sacct queries the accounting database for job history: runtime, resources used, exit status. Essential for analyzing completed jobs and usage patterns.",
                learnMore: { url: "https://slurm.schedmd.com/sacct.html", text: "📚 sacct Command" }
            },
            {
                q: "What's a QOS (Quality of Service) in SLURM?",
                options: ["Priority and resource limits for job classes", "Network quality", "Service level", "Support tier"],
                correct: 0,
                explanation: "QOS defines job class properties: priority, max resources, preemption rights. Users/accounts can be assigned QOS (normal, high-priority, debug) for differentiated service.",
                learnMore: { url: "https://slurm.schedmd.com/qos.html", text: "📚 Quality of Service" }
            },
            {
                q: "How do you request specific resources in sbatch?",
                options: ["#SBATCH directives like --nodes, --cpus-per-task", "Command line only", "Config file", "Cannot specify"],
                correct: 0,
                explanation: "#SBATCH directives in job scripts specify resources: --nodes, --ntasks, --cpus-per-task, --mem, --time, --gres=gpu:2, --partition, etc.",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html#SECTION_OPTIONS", text: "📚 sbatch Options" }
            },
        ],
        5: [
            {
                q: "What's fairshare scheduling in SLURM?",
                options: ["Priority based on historical usage vs allocation", "Equal time", "First come first served", "Random"],
                correct: 0,
                explanation: "Fairshare adjusts job priority based on historical usage vs allocated share. Heavy users get lower priority; underutilized accounts get higher priority.",
                learnMore: { url: "https://slurm.schedmd.com/fair_tree.html", text: "📚 Fair Tree Scheduling" }
            },
            {
                q: "How does Waldur integrate with SLURM?",
                options: ["Track allocations, submit jobs, report usage", "No integration", "Direct database", "SSH only"],
                correct: 0,
                explanation: "Waldur's SLURM plugin creates allocations (accounts), syncs usage data from sacct, and can manage resource limits. Enables self-service HPC access through Waldur.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/slurm/", text: "📚 Waldur SLURM" }
            },
            {
                q: "What's a SLURM federation?",
                options: ["Multiple clusters managed together", "Single cluster", "User group", "Network"],
                correct: 0,
                explanation: "Federation connects multiple SLURM clusters. Users can submit jobs that run on any cluster in the federation. Enables unified access to distributed resources.",
                learnMore: { url: "https://slurm.schedmd.com/federation.html", text: "📚 SLURM Federation" }
            },
            {
                q: "What's job dependency in SLURM?",
                options: ["Jobs that wait for other jobs to complete", "Code dependency", "Package dependency", "No dependencies"],
                correct: 0,
                explanation: "Job dependencies (--dependency) make jobs wait for other jobs: afterok (run if previous succeeded), afterany (run regardless), afternotok (run if failed).",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html#OPT_dependency", text: "📚 Job Dependencies" }
            },
            {
                q: "How do you troubleshoot job failures in SLURM?",
                options: ["Check job output, scontrol show job, sacct", "Restart cluster", "Contact admin only", "Cannot troubleshoot"],
                correct: 0,
                explanation: "Check: job output/error files, 'scontrol show job <id>' for state/reason, 'sacct -j <id>' for resources/exit code, node logs for system issues.",
                learnMore: { url: "https://slurm.schedmd.com/troubleshoot.html", text: "📚 Troubleshooting" }
            },
        ]
    },

    's-oidc': {
        1: [
            {
                q: "What does OIDC stand for?",
                options: ["OpenID Connect", "Open ID Connection", "Online Identity Control", "Open Internet Domain Control"],
                correct: 0,
                explanation: "OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0. It allows clients to verify user identity and obtain basic profile information.",
                learnMore: { url: "https://openid.net/connect/", text: "📚 OpenID Connect" }
            },
            {
                q: "What problem does OIDC solve?",
                options: ["Federated authentication and identity", "Data storage", "Network routing", "File sharing"],
                correct: 0,
                explanation: "OIDC provides federated authentication: users log in once with an identity provider (Google, Microsoft, institutional IdP) and access multiple applications without separate passwords.",
                learnMore: { url: "https://openid.net/developers/how-connect-works/", text: "📚 How OIDC Works" }
            },
            {
                q: "Is OIDC related to OAuth?",
                options: ["Yes, OIDC is built on top of OAuth 2.0", "No relationship", "OIDC replaces OAuth", "OAuth is newer"],
                correct: 0,
                explanation: "OIDC extends OAuth 2.0 with identity layer. OAuth handles authorization (what you can access), OIDC adds authentication (who you are) via ID tokens.",
                learnMore: { url: "https://oauth.net/articles/authentication/", text: "📚 OAuth vs OIDC" }
            },
        ],
        2: [
            {
                q: "What's the relationship between OIDC and OAuth 2.0?",
                options: ["OIDC is identity layer on top of OAuth 2.0", "Completely separate", "OAuth replaces OIDC", "Same protocol"],
                correct: 0,
                explanation: "OIDC uses OAuth 2.0 flows for authorization but adds ID tokens for authentication. OAuth alone doesn't verify identity; OIDC does.",
                learnMore: { url: "https://auth0.com/docs/authenticate/protocols/openid-connect-protocol", text: "📚 OIDC Protocol" }
            },
            {
                q: "What is an ID token?",
                options: ["JWT containing user identity claims", "Session cookie", "Password hash", "API key"],
                correct: 0,
                explanation: "ID token is a JWT (JSON Web Token) containing claims about the user: subject (sub), name, email, issuer (iss), audience (aud), expiration (exp).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#IDToken", text: "📚 ID Token Spec" }
            },
            {
                q: "What's an access token used for?",
                options: ["Authorize API requests", "User identification", "Password reset", "Session management"],
                correct: 0,
                explanation: "Access tokens authorize API requests. They're sent in Authorization header (Bearer token) to access protected resources. Unlike ID tokens, they're not for user identity.",
                learnMore: { url: "https://auth0.com/docs/secure/tokens/access-tokens", text: "📚 Access Tokens" }
            },
        ],
        3: [
            {
                q: "What's the authorization code flow?",
                options: ["Server-side flow where code is exchanged for tokens", "Direct token issuance", "Password flow", "Device flow"],
                correct: 0,
                explanation: "Authorization code flow: redirect to IdP → user authenticates → redirect back with code → backend exchanges code for tokens. Secure for server-side apps.",
                learnMore: { url: "https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow", text: "📚 Auth Code Flow" }
            },
            {
                q: "What is PKCE used for?",
                options: ["Protect authorization code flow for public clients", "Encryption", "Password storage", "Session management"],
                correct: 0,
                explanation: "PKCE (Proof Key for Code Exchange) protects auth code flow for public clients (mobile, SPA). Uses code_verifier and code_challenge to prevent code interception attacks.",
                learnMore: { url: "https://oauth.net/2/pkce/", text: "📚 PKCE" }
            },
            {
                q: "What's the difference between ID token and access token?",
                options: ["ID token identifies user, access token authorizes API access", "Same thing", "Access token identifies", "ID token authorizes"],
                correct: 0,
                explanation: "ID token: proves user identity (for your app). Access token: authorizes API access (for resource servers). Don't use ID tokens to call APIs.",
                learnMore: { url: "https://auth0.com/blog/id-token-access-token-what-is-the-difference/", text: "📚 ID vs Access Token" }
            },
            {
                q: "What's a refresh token?",
                options: ["Token to get new access tokens without re-authentication", "Password refresh", "Session refresh", "Cache refresh"],
                correct: 0,
                explanation: "Refresh tokens get new access tokens when they expire, without re-prompting user login. They're long-lived and must be stored securely.",
                learnMore: { url: "https://auth0.com/docs/secure/tokens/refresh-tokens", text: "📚 Refresh Tokens" }
            },
        ],
        4: [
            {
                q: "What are OIDC scopes?",
                options: ["Define what user information is accessible", "Security boundaries", "Network segments", "Rate limits"],
                correct: 0,
                explanation: "Scopes define what claims (user info) are accessible: openid (required), profile (name), email, address, phone. Users consent to requested scopes.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims", text: "📚 OIDC Scopes" }
            },
            {
                q: "What's the 'openid' scope required for?",
                options: ["Indicates OIDC request, returns ID token", "API access", "Admin access", "Optional scope"],
                correct: 0,
                explanation: "The 'openid' scope is required for OIDC requests. It tells the authorization server to return an ID token (not just access token like plain OAuth).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest", text: "📚 Auth Request" }
            },
            {
                q: "What claims are in the 'profile' scope?",
                options: ["name, family_name, given_name, picture, etc.", "Email only", "Phone only", "Address only"],
                correct: 0,
                explanation: "Profile scope includes: name, family_name, given_name, middle_name, nickname, picture, website, gender, birthdate, zoneinfo, locale, updated_at.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims", text: "📚 Profile Claims" }
            },
            {
                q: "What's the userinfo endpoint?",
                options: ["Returns claims about authenticated user", "Login endpoint", "Logout endpoint", "Token endpoint"],
                correct: 0,
                explanation: "The userinfo endpoint returns claims about the authenticated user when called with a valid access token. Alternative to getting all claims from ID token.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#UserInfo", text: "📚 UserInfo Endpoint" }
            },
        ],
        5: [
            {
                q: "How do you validate an ID token?",
                options: ["Verify signature, issuer, audience, expiration", "Check database", "Trust always", "Hash comparison"],
                correct: 0,
                explanation: "Validate ID token: verify JWT signature (using provider's keys), check iss (issuer), aud (audience = your client_id), exp (not expired), iat (issued time).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation", text: "📚 Token Validation" }
            },
            {
                q: "What's the discovery document (.well-known/openid-configuration)?",
                options: ["Metadata about OIDC provider endpoints and capabilities", "User directory", "Configuration file", "Log file"],
                correct: 0,
                explanation: "Discovery document provides provider metadata: authorization/token/userinfo endpoints, supported scopes, signing algorithms, JWKS URI for token verification.",
                learnMore: { url: "https://openid.net/specs/openid-connect-discovery-1_0.html", text: "📚 OIDC Discovery" }
            },
            {
                q: "How does Waldur use OIDC?",
                options: ["Authenticate users via external identity providers", "Internal auth only", "No OIDC support", "API authentication"],
                correct: 0,
                explanation: "Waldur supports OIDC for SSO: users authenticate via institutional IdP (eduGAIN, GÉANT, Google). Waldur creates/updates users based on ID token claims.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/authentication/", text: "📚 Waldur Authentication" }
            },
            {
                q: "What's token introspection?",
                options: ["Validate and get info about token from authorization server", "View token contents", "Refresh token", "Revoke token"],
                correct: 0,
                explanation: "Token introspection queries the authorization server to validate a token and get its metadata (active, scope, expiration). Used by resource servers.",
                learnMore: { url: "https://oauth.net/2/token-introspection/", text: "📚 Token Introspection" }
            },
            {
                q: "What's the implicit flow and why is it discouraged?",
                options: ["Tokens in URL fragment, security risks", "Most secure", "Recommended flow", "Server-side flow"],
                correct: 0,
                explanation: "Implicit flow returns tokens directly in URL fragment (no code exchange). Discouraged: tokens exposed in browser history, logs. Use auth code + PKCE instead.",
                learnMore: { url: "https://oauth.net/2/grant-types/implicit/", text: "📚 Implicit Flow" }
            },
        ]
    },

    's-ansible': {
        1: [
            {
                q: "What is Ansible used for?",
                options: ["IT automation and configuration management", "Container runtime", "Programming language", "Database"],
                correct: 0,
                explanation: "Ansible automates IT tasks: configuration management, application deployment, cloud provisioning, and orchestration. It uses simple YAML playbooks.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/index.html", text: "📚 Ansible Documentation" }
            },
            {
                q: "Is Ansible agentless?",
                options: ["Yes, uses SSH for communication", "No, requires agent", "Sometimes", "Depends on OS"],
                correct: 0,
                explanation: "Ansible is agentless: it connects to managed hosts via SSH (or WinRM for Windows). No agent software needs to be installed on target machines.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/getting_started/index.html", text: "📚 Getting Started" }
            },
            {
                q: "What language are Ansible playbooks written in?",
                options: ["YAML", "JSON", "Python", "XML"],
                correct: 0,
                explanation: "Ansible playbooks are written in YAML (Yet Another Markup Language). YAML is human-readable and defines tasks, variables, and conditions declaratively.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html", text: "📚 Playbook Intro" }
            },
        ],
        2: [
            {
                q: "What is an Ansible playbook?",
                options: ["YAML file defining automation tasks", "Python script", "Shell script", "Config file"],
                correct: 0,
                explanation: "A playbook is a YAML file containing plays. Each play targets hosts and defines tasks to execute. Playbooks are the core of Ansible automation.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html", text: "📚 Intro to Playbooks" }
            },
            {
                q: "What's an Ansible inventory?",
                options: ["List of managed hosts", "Storage of variables", "Task queue", "Role collection"],
                correct: 0,
                explanation: "Inventory defines managed hosts and groups. Can be static (INI/YAML file) or dynamic (script querying cloud provider). Hosts can have group_vars and host_vars.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html", text: "📚 Inventory" }
            },
            {
                q: "What's an Ansible task?",
                options: ["Single action to execute (module call)", "Collection of playbooks", "Inventory entry", "Variable"],
                correct: 0,
                explanation: "A task is a single action calling an Ansible module (apt, copy, service, template, etc.). Tasks have names, module arguments, and optional conditions.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html#tasks-list", text: "📚 Tasks" }
            },
        ],
        3: [
            {
                q: "What's the difference between a role and a playbook?",
                options: ["Role is reusable component, playbook orchestrates roles", "Same thing", "Role is larger", "Playbook is reusable"],
                correct: 0,
                explanation: "Roles are reusable units with structured directories (tasks, handlers, vars, templates). Playbooks orchestrate roles and standalone tasks for specific scenarios.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html", text: "📚 Roles" }
            },
            {
                q: "What does 'ansible-playbook -i inventory playbook.yml' do?",
                options: ["Runs playbook against hosts in inventory", "Creates inventory", "Validates playbook", "Generates docs"],
                correct: 0,
                explanation: "This command runs playbook.yml against hosts defined in the inventory file. -i specifies inventory; playbook defines what tasks to execute.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/cli/ansible-playbook.html", text: "📚 ansible-playbook CLI" }
            },
            {
                q: "What's an Ansible module?",
                options: ["Unit of code that performs specific action", "Configuration file", "Log file", "Template"],
                correct: 0,
                explanation: "Modules are units of code Ansible runs on managed nodes. Examples: apt (packages), copy (files), service (daemons), template (Jinja2), command (shell).",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/module_plugin_guide/modules_intro.html", text: "📚 Modules" }
            },
            {
                q: "What's a handler in Ansible?",
                options: ["Task triggered by notification from other tasks", "Error handler", "Event handler", "File handler"],
                correct: 0,
                explanation: "Handlers are tasks triggered by 'notify' from other tasks. Common use: restart service after config change. Handlers run once at end of play, even if notified multiple times.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_handlers.html", text: "📚 Handlers" }
            },
        ],
        4: [
            {
                q: "What is Ansible AWX/Tower?",
                options: ["Web UI and API for Ansible automation", "Cloud provider", "Database", "Monitoring tool"],
                correct: 0,
                explanation: "AWX (open source) / Tower (enterprise) provides web UI, REST API, RBAC, job scheduling, and credentials management for Ansible. Enables team collaboration.",
                learnMore: { url: "https://github.com/ansible/awx", text: "📚 AWX Project" }
            },
            {
                q: "What's Ansible Galaxy?",
                options: ["Repository for sharing roles and collections", "Cloud service", "IDE", "Testing tool"],
                correct: 0,
                explanation: "Ansible Galaxy is a hub for sharing roles and collections. Use 'ansible-galaxy install' to download community roles. Organizations can host private Galaxy servers.",
                learnMore: { url: "https://galaxy.ansible.com/", text: "📚 Ansible Galaxy" }
            },
            {
                q: "What are Ansible facts?",
                options: ["System information gathered from managed hosts", "User facts", "Network facts", "Storage facts"],
                correct: 0,
                explanation: "Facts are variables automatically discovered from hosts: OS, IP, CPU, memory, mounts, etc. Access via ansible_facts or gather_facts module. Use in conditionals and templates.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_vars_facts.html", text: "📚 Facts" }
            },
            {
                q: "What's idempotency in Ansible context?",
                options: ["Running playbook multiple times produces same result", "Running once", "Random execution", "No guarantee"],
                correct: 0,
                explanation: "Idempotent tasks check current state before acting. Running playbook repeatedly yields same result: package already installed → no action. Design tasks to be idempotent.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/reference_appendices/glossary.html#term-Idempotency", text: "📚 Idempotency" }
            },
        ],
        5: [
            {
                q: "How do you handle secrets in Ansible?",
                options: ["Ansible Vault for encrypted variables", "Plain text", "Environment only", "Cannot handle secrets"],
                correct: 0,
                explanation: "Ansible Vault encrypts sensitive data (passwords, keys) in files. Use 'ansible-vault create/edit/encrypt/decrypt'. Pass --ask-vault-pass or vault password file at runtime.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/vault_guide/index.html", text: "📚 Ansible Vault" }
            },
            {
                q: "What's an Ansible collection?",
                options: ["Distribution format for roles, modules, plugins", "File collection", "Log collection", "User collection"],
                correct: 0,
                explanation: "Collections bundle roles, modules, plugins, and playbooks in a standard format. Namespace.collection format (e.g., community.general). Install from Galaxy or Automation Hub.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/collections_guide/index.html", text: "📚 Collections" }
            },
            {
                q: "How do you test Ansible playbooks?",
                options: ["Molecule for testing, --check for dry run", "No testing", "Manual only", "External tools only"],
                correct: 0,
                explanation: "Molecule tests roles in containers/VMs (create, converge, verify, destroy). --check does dry run. --diff shows changes. ansible-lint checks best practices.",
                learnMore: { url: "https://ansible.readthedocs.io/projects/molecule/", text: "📚 Molecule" }
            },
            {
                q: "What's Ansible callback plugins?",
                options: ["Customize output and behavior of playbook runs", "Network callbacks", "User callbacks", "Storage callbacks"],
                correct: 0,
                explanation: "Callback plugins customize output format and behavior: JSON output, profiling, notifications to Slack/Teams. Configure in ansible.cfg or ANSIBLE_CALLBACKS_ENABLED.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/plugins/callback.html", text: "📚 Callback Plugins" }
            },
            {
                q: "How does Ansible handle failed tasks?",
                options: ["Stop by default, can use ignore_errors or block/rescue", "Continue always", "Retry automatically", "Cannot handle"],
                correct: 0,
                explanation: "Ansible stops on failure by default. Use ignore_errors: yes to continue. block/rescue/always provides try/catch semantics. failed_when customizes failure conditions.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_error_handling.html", text: "📚 Error Handling" }
            },
        ]
    },

    's-monitoring': {
        1: [
            {
                q: "What is Prometheus?",
                options: ["Time-series monitoring system", "Log aggregator", "APM tool", "Tracing system"],
                correct: 0,
                explanation: "Prometheus is an open-source time-series monitoring system. It collects metrics via HTTP pull, stores them locally, and supports powerful queries and alerting.",
                learnMore: { url: "https://prometheus.io/docs/introduction/overview/", text: "📚 Prometheus Overview" }
            },
            {
                q: "What's the pull vs push model in monitoring?",
                options: ["Pull: monitor fetches metrics; Push: targets send metrics", "Same thing", "Pull is deprecated", "Push is deprecated"],
                correct: 0,
                explanation: "Pull: monitoring system fetches metrics from targets (Prometheus style). Push: targets send metrics to collector (Graphite, InfluxDB style). Each has trade-offs.",
                learnMore: { url: "https://prometheus.io/docs/introduction/faq/#why-do-you-pull-rather-than-push", text: "📚 Pull vs Push" }
            },
            {
                q: "What type of data does Prometheus store?",
                options: ["Time-series metrics", "Logs only", "Traces only", "Events only"],
                correct: 0,
                explanation: "Prometheus stores time-series data: numeric values with timestamps and labels. It's not for logs (use Loki) or traces (use Jaeger/Tempo).",
                learnMore: { url: "https://prometheus.io/docs/concepts/data_model/", text: "📚 Data Model" }
            },
        ],
        2: [
            {
                q: "What is Grafana used for?",
                options: ["Visualization and dashboards", "Data collection", "Alerting only", "Log storage"],
                correct: 0,
                explanation: "Grafana is a visualization platform for creating dashboards. It queries data from Prometheus, InfluxDB, Elasticsearch, and many other sources.",
                learnMore: { url: "https://grafana.com/docs/grafana/latest/", text: "📚 Grafana Docs" }
            },
            {
                q: "What's a Prometheus metric type 'counter'?",
                options: ["Cumulative value that only increases", "Current value", "Distribution", "Boolean"],
                correct: 0,
                explanation: "Counter is cumulative: only increases (or resets to zero). Use for requests_total, errors_total. Query with rate() to get per-second increase.",
                learnMore: { url: "https://prometheus.io/docs/concepts/metric_types/#counter", text: "📚 Counter Metrics" }
            },
            {
                q: "What's a Prometheus metric type 'gauge'?",
                options: ["Value that can go up and down", "Only increases", "Histogram", "Summary"],
                correct: 0,
                explanation: "Gauge represents a value that can increase or decrease: temperature, memory usage, queue size. Snapshot of current state.",
                learnMore: { url: "https://prometheus.io/docs/concepts/metric_types/#gauge", text: "📚 Gauge Metrics" }
            },
        ],
        3: [
            {
                q: "What is PromQL?",
                options: ["Prometheus Query Language", "Postgres extension", "Python library", "Queue system"],
                correct: 0,
                explanation: "PromQL (Prometheus Query Language) queries time-series data. Supports filtering, aggregation, functions (rate, sum, avg), and time ranges.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/querying/basics/", text: "📚 PromQL Basics" }
            },
            {
                q: "What's the ELK stack?",
                options: ["Elasticsearch, Logstash, Kibana", "Error Logging Kit", "Event Log Keeper", "Elastic Load Keeper"],
                correct: 0,
                explanation: "ELK: Elasticsearch (search/storage), Logstash (log processing/ingestion), Kibana (visualization). Popular for centralized logging. Now often includes Beats.",
                learnMore: { url: "https://www.elastic.co/elastic-stack", text: "📚 Elastic Stack" }
            },
            {
                q: "What's an exporter in Prometheus?",
                options: ["Service exposing metrics in Prometheus format", "Data export tool", "Log exporter", "Report generator"],
                correct: 0,
                explanation: "Exporters expose metrics in Prometheus format. Examples: node_exporter (system metrics), mysqld_exporter (MySQL), blackbox_exporter (probing endpoints).",
                learnMore: { url: "https://prometheus.io/docs/instrumenting/exporters/", text: "📚 Exporters" }
            },
            {
                q: "What's a service discovery in Prometheus?",
                options: ["Automatically find targets to monitor", "DNS service", "Network discovery", "User discovery"],
                correct: 0,
                explanation: "Service discovery automatically finds scrape targets: Kubernetes pods, EC2 instances, Consul services. Eliminates manual target configuration.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config", text: "📚 Service Discovery" }
            },
        ],
        4: [
            {
                q: "What's the difference between metrics and logs?",
                options: ["Metrics are numeric measurements, logs are event records", "Same thing", "Logs are numeric", "Metrics are events"],
                correct: 0,
                explanation: "Metrics: numeric measurements over time (request rate, error percentage). Logs: textual event records with details. Metrics for alerting/trends, logs for debugging.",
                learnMore: { url: "https://grafana.com/blog/2016/01/05/logs-and-metrics-and-graphs-oh-my/", text: "📚 Logs vs Metrics" }
            },
            {
                q: "What's distributed tracing?",
                options: ["Track requests across multiple services", "Trace files", "Network tracing", "User tracking"],
                correct: 0,
                explanation: "Distributed tracing tracks requests across microservices. Each service adds spans to a trace. Tools: Jaeger, Zipkin, Tempo. Shows where latency occurs.",
                learnMore: { url: "https://opentelemetry.io/docs/concepts/observability-primer/#distributed-traces", text: "📚 Distributed Tracing" }
            },
            {
                q: "What's Alertmanager in Prometheus ecosystem?",
                options: ["Handles alerts from Prometheus, routes notifications", "Generates alerts", "Stores alerts", "Views alerts"],
                correct: 0,
                explanation: "Alertmanager receives alerts from Prometheus, deduplicates, groups, and routes them to receivers (email, Slack, PagerDuty). Handles silencing and inhibition.",
                learnMore: { url: "https://prometheus.io/docs/alerting/latest/alertmanager/", text: "📚 Alertmanager" }
            },
            {
                q: "What are labels in Prometheus?",
                options: ["Key-value pairs for metric identification", "Display labels", "Category labels", "User labels"],
                correct: 0,
                explanation: "Labels are key-value pairs that identify metric dimensions: instance, job, method, status_code. Enable filtering and aggregation in PromQL queries.",
                learnMore: { url: "https://prometheus.io/docs/practices/naming/#labels", text: "📚 Labels" }
            },
        ],
        5: [
            {
                q: "How do you implement effective alerting?",
                options: ["Alert on symptoms, use severity levels, avoid alert fatigue", "Alert on everything", "No alerts", "Email only"],
                correct: 0,
                explanation: "Effective alerting: alert on user-impacting symptoms (not causes), use severity levels, have clear runbooks, avoid alert fatigue by eliminating noisy alerts.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/", text: "📚 SRE Monitoring" }
            },
            {
                q: "What's cardinality in monitoring context?",
                options: ["Number of unique label combinations for a metric", "Data size", "Query speed", "Storage format"],
                correct: 0,
                explanation: "Cardinality is the number of unique time series (label combinations). High cardinality (user_id as label) causes memory/storage issues. Keep cardinality bounded.",
                learnMore: { url: "https://prometheus.io/docs/practices/naming/#labels", text: "📚 Cardinality" }
            },
            {
                q: "What's the difference between blackbox and whitebox monitoring?",
                options: ["Blackbox: external probing; Whitebox: internal metrics", "Same approach", "Blackbox is internal", "Whitebox is external"],
                correct: 0,
                explanation: "Blackbox: probe from outside (HTTP checks, ping) - what users see. Whitebox: internal metrics from inside the system - why problems occur. Use both.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_black-box-monitoring", text: "📚 Monitoring Types" }
            },
            {
                q: "What are the four golden signals of monitoring?",
                options: ["Latency, traffic, errors, saturation", "CPU, memory, disk, network", "Requests, responses, errors, time", "Users, sessions, pages, clicks"],
                correct: 0,
                explanation: "Four Golden Signals (Google SRE): Latency (response time), Traffic (demand), Errors (failure rate), Saturation (how full/overloaded). Focus monitoring on these.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals", text: "📚 Golden Signals" }
            },
            {
                q: "How do you handle high-cardinality metrics?",
                options: ["Limit labels, aggregate, use recording rules", "Store everything", "Ignore cardinality", "Cannot handle"],
                correct: 0,
                explanation: "Handle high cardinality: avoid unbounded labels (user IDs), pre-aggregate with recording rules, use exemplars for sampling, consider specialized systems for high-cardinality.",
                learnMore: { url: "https://prometheus.io/docs/practices/instrumentation/#do-not-overuse-labels", text: "📚 Label Best Practices" }
            },
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
