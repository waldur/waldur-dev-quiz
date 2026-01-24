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
                options: ["Passes output to another command", "Redirects output to a file", "Creates a background process", "Copies files to directory"],
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
                options: ["Follow log updates in real-time", "Show first lines of file", "Count total line numbers", "Delete old log entries"],
                correct: 0,
                explanation: "The '-f' flag follows the file, displaying new lines as they're appended. Essential for monitoring live logs. Use Ctrl+C to stop.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html", text: "📚 GNU tail Manual" }
            },
            {
                q: "What does 'chmod 755 file' do?",
                options: ["Sets read/write/execute permissions", "Changes the file owner to root", "Moves file to new location", "Compresses file with gzip"],
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
                options: ["Converts stdin to arguments", "Executes commands parallel", "Filters matching output", "Sorts output results"],
                correct: 0,
                explanation: "'xargs' builds and executes commands from stdin. Example: find . -name '*.log' | xargs rm. Use -I{} for placeholders.",
                learnMore: { url: "https://www.gnu.org/software/findutils/manual/html_node/xargs-invocation.html", text: "📚 GNU xargs Manual" }
            },
            {
                q: "How do you run a command in background?",
                options: ["Append & to command", "Prefix with bg cmd", "Use nohup command", "Press Ctrl+Z keys"],
                correct: 0,
                explanation: "Appending '&' runs the command in background immediately. Ctrl+Z suspends a running process, then 'bg' resumes it in background.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Job-Control.html", text: "📚 Bash Job Control" }
            },
            {
                q: "What does 'ps aux' show?",
                options: ["All running processes", "Current disk usage", "Active network ports", "System memory info"],
                correct: 0,
                explanation: "'ps aux' shows all processes: a=all users, u=user-oriented format, x=processes without terminal. Commonly piped to grep.",
                learnMore: { url: "https://man7.org/linux/man-pages/man1/ps.1.html", text: "📚 ps Manual" }
            },
            {
                q: "How do you find which process is using a port?",
                options: ["lsof -i :port or ss -tlnp", "ps --port <number>", "find /proc -port", "grep port /proc"],
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
                options: ["Keeps process running after logout", "Stops a running process now", "Pauses process execution", "Changes process priority"],
                correct: 0,
                explanation: "'nohup' (no hangup) ignores SIGHUP signal sent when terminal closes. Output goes to nohup.out. Combine with & for background.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html", text: "📚 GNU nohup Manual" }
            },
            {
                q: "How do you set an environment variable for all sessions?",
                options: ["Add to ~/.bashrc or ~/.profile", "Run export VAR=value once", "Use set VAR=value syntax", "Run env VAR=value once"],
                correct: 0,
                explanation: "~/.bashrc runs for interactive shells, ~/.profile for login shells. 'export VAR=value' only affects the current session.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html", text: "📚 Bash Startup Files" }
            },
            {
                q: "What does 'awk '{print $1}'' do?",
                options: ["Prints first column of each line", "Prints the first line only", "Counts total word count", "Searches for text match"],
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
                options: ["Changed files and staging area", "Full commit history log", "All remote branch list", "Repository config file"],
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
                options: ["Creates a new Git repository", "Downloads remote repo", "Commits all changes", "Creates a new branch"],
                correct: 0,
                explanation: "'git init' creates a new .git directory, initializing an empty Git repository. Use this to start version control in a project.",
                learnMore: { url: "https://git-scm.com/docs/git-init", text: "📚 Git Init Docs" }
            },
        ],
        2: [
            {
                q: "What's the difference between 'git pull' and 'git fetch'?",
                options: ["Pull also merges, fetch only downloads", "They do exactly the same thing", "Fetch is faster than pull", "Pull only works locally"],
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
                options: ["git reset --soft HEAD~1", "git revert HEAD commit", "git undo last commit", "git rollback previous"],
                correct: 0,
                explanation: "'--soft' keeps changes staged, '--mixed' (default) unstages them, '--hard' discards them. 'revert' creates a new commit that undoes changes.",
                learnMore: { url: "https://git-scm.com/docs/git-reset", text: "📚 Git Reset Docs" }
            },
            {
                q: "What's a pull request / merge request for?",
                options: ["Request code review before merging", "Pull changes from remote", "Request repository access", "Merge branches directly"],
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
                options: ["Changes between commits or working tree", "List of different branches", "Remote server differences", "Config file differences"],
                correct: 0,
                explanation: "'git diff' shows unstaged changes. 'git diff --staged' shows staged changes. 'git diff branch1..branch2' compares branches.",
                learnMore: { url: "https://git-scm.com/docs/git-diff", text: "📚 Git Diff Docs" }
            },
        ],
        4: [
            {
                q: "When should you use 'git rebase' vs 'git merge'?",
                options: ["Rebase for clean history, merge keeps context", "Always use rebase for everything", "Always use merge for everything", "They produce identical results"],
                correct: 0,
                explanation: "Rebase rewrites history for a linear timeline - use for local/feature branches. Merge preserves history - use for shared branches. Never rebase public branches!",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing", text: "📚 Merge vs Rebase Guide" }
            },
            {
                q: "How do you resolve a merge conflict?",
                options: ["Edit files, remove markers, stage and commit", "Run git resolve --auto command", "Delete the conflicting files entirely", "Reset branch back to remote"],
                correct: 0,
                explanation: "Conflicts show <<<<<<<, =======, >>>>>>> markers. Edit to keep desired code, remove markers, 'git add' the file, then commit.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts", text: "📚 Merge Conflicts Guide" }
            },
            {
                q: "What does 'git stash' do?",
                options: ["Temporarily saves uncommitted changes", "Deletes all local changes", "Commits current changes", "Pushes to remote repo"],
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
                options: ["Find commit that introduced a bug", "Split commits into smaller ones", "Divide repo into submodules", "Create multiple branches"],
                correct: 0,
                explanation: "Bisect performs binary search through commits. Mark commits as 'good' or 'bad', and Git finds the first bad commit efficiently.",
                learnMore: { url: "https://git-scm.com/docs/git-bisect", text: "📚 Git Bisect Docs" }
            },
            {
                q: "How do you squash multiple commits?",
                options: ["git rebase -i with squash", "git squash <commits>", "git merge --squash only", "git combine <commits>"],
                correct: 0,
                explanation: "Interactive rebase (-i) lets you squash, edit, reorder, or drop commits. Change 'pick' to 'squash' or 's' to combine with previous commit.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History", text: "📚 Rewriting History" }
            },
            {
                q: "What does 'git reflog' show?",
                options: ["All ref changes including lost commits", "Only branch reference logs", "Remote server activity log", "Git error and debug log"],
                correct: 0,
                explanation: "Reflog tracks all HEAD movements locally - even 'lost' commits after reset. Essential for recovering from mistakes. Entries expire after 90 days.",
                learnMore: { url: "https://git-scm.com/docs/git-reflog", text: "📚 Git Reflog Docs" }
            },
            {
                q: "How do you cherry-pick a commit?",
                options: ["git cherry-pick <hash>", "git pick <hash>", "git copy <hash>", "git select <hash>"],
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
                options: ["[x for x in items] - concise list creation", "A detailed list description document", "Documentation for list methods", "Comparison between two lists"],
                correct: 0,
                explanation: "List comprehensions are concise syntax for creating lists: [expr for item in iterable if condition]. More readable and often faster than loops.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions", text: "📚 List Comprehensions" }
            },
            {
                q: "What's a virtual environment for?",
                options: ["Isolated Python dependencies per project", "Making Python run faster overall", "Running Python in a virtual machine", "Testing code in isolation only"],
                correct: 0,
                explanation: "Virtual environments isolate project dependencies. Each project can have its own package versions. Create with 'python -m venv myenv', activate before use.",
                learnMore: { url: "https://docs.python.org/3/tutorial/venv.html", text: "📚 Python venv Tutorial" }
            },
            {
                q: "What does 'if __name__ == \"__main__\":' do?",
                options: ["Only runs code when executed directly", "Checks the current file name", "Imports the main module", "Defines the main function"],
                correct: 0,
                explanation: "__name__ is '__main__' when the script is run directly, but the module name when imported. This pattern prevents code from running on import.",
                learnMore: { url: "https://docs.python.org/3/library/__main__.html", text: "📚 Python __main__" }
            },
            {
                q: "What's a dictionary in Python?",
                options: ["Key-value data structure", "Word definitions store", "Ordered list of items", "Function collection type"],
                correct: 0,
                explanation: "Dicts map keys to values with O(1) average lookup. Keys must be hashable (immutable). Since Python 3.7, dicts maintain insertion order.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries", text: "📚 Python Dictionaries" }
            },
        ],
        4: [
            {
                q: "What are *args and **kwargs?",
                options: ["Variable positional and keyword arguments", "Pointer arguments to memory address", "Required arguments for all functions", "Global arguments shared by modules"],
                correct: 0,
                explanation: "*args collects extra positional args as tuple. **kwargs collects extra keyword args as dict. Names are convention - * and ** are the operators.",
                learnMore: { url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists", text: "📚 *args and **kwargs" }
            },
            {
                q: "What's a decorator in Python?",
                options: ["Function that modifies another function", "Class attribute for styling output", "Import statement for packages", "Comment type for documentation"],
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
                options: ["Mutex preventing true multi-threading for CPU tasks", "Security feature preventing unauthorized code execution", "Memory manager handling garbage collection", "Import lock preventing circular dependencies"],
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
                options: ["Pointer to commit, enables parallel work", "Full copy of the repository", "Backup of repository state", "Connection to remote server"],
                correct: 0,
                explanation: "Branches are lightweight pointers to commits. Creating a branch is cheap (41-byte file). Enables parallel work on features/fixes without affecting main.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", text: "📚 Git Branching" }
            },
            {
                q: "What's a commit in Git?",
                options: ["Snapshot of changes with message", "A type of branch reference", "Copy of files in directory", "Sync with remote server"],
                correct: 0,
                explanation: "Commits are snapshots of your project at a point in time, with metadata (author, date, message, parent commits). They're immutable once created.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository", text: "📚 Git Commits" }
            },
            {
                q: "What's a remote in Git?",
                options: ["Connection to repository on server", "Copy of repo on your machine", "A specific type of branch", "A specific type of commit"],
                correct: 0,
                explanation: "Remotes are references to repositories on servers (GitHub, GitLab). 'origin' is the default remote. Use 'git remote -v' to list remotes.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", text: "📚 Git Remotes" }
            },
        ],
        2: [
            {
                q: "What does 'git stash' do?",
                options: ["Temporarily saves uncommitted changes", "Permanently deletes all changes", "Creates a new commit with changes", "Pushes changes to the remote"],
                correct: 0,
                explanation: "Stash saves work-in-progress without committing. Useful when switching branches. 'git stash pop' restores. 'git stash list' shows all stashes.",
                learnMore: { url: "https://git-scm.com/docs/git-stash", text: "📚 Git Stash" }
            },
            {
                q: "What's HEAD in Git?",
                options: ["Pointer to current commit/branch", "The very first commit in repo", "The most recent commit in repo", "A branch on the remote server"],
                correct: 0,
                explanation: "HEAD points to the current commit you're on (usually via branch reference). Moving HEAD changes what you see in your working directory.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Internals-Git-References", text: "📚 Git HEAD" }
            },
            {
                q: "What does 'git branch -d' do?",
                options: ["Deletes a merged branch", "Creates a new branch", "Lists all branches", "Renames a branch"],
                correct: 0,
                explanation: "'-d' deletes a merged branch safely. Use '-D' to force delete unmerged branches. Only deletes the pointer, commits remain in history.",
                learnMore: { url: "https://git-scm.com/docs/git-branch", text: "📚 Git Branch" }
            },
        ],
        3: [
            {
                q: "When should you rebase instead of merge?",
                options: ["Clean linear history for feature branches", "Always use rebase in every case", "Never use rebase for anything", "Only on the main/master branch"],
                correct: 0,
                explanation: "Rebase for local/feature branches to get clean history. Never rebase shared branches (rewrites history). Merge preserves context of when integration happened.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing", text: "📚 Rebase vs Merge" }
            },
            {
                q: "What's a fast-forward merge?",
                options: ["Moving branch pointer when no divergence", "A merge that runs very quickly", "A merge that is forced through", "A merge that runs automatically"],
                correct: 0,
                explanation: "Fast-forward happens when target branch hasn't diverged - Git just moves the pointer. No merge commit created. Use '--no-ff' to force merge commit.",
                learnMore: { url: "https://git-scm.com/docs/git-merge#_fast_forward_merge", text: "📚 Fast-forward Merge" }
            },
            {
                q: "What does 'git reset --hard' do?",
                options: ["Discard all changes and reset to commit", "Perform a soft reset keeping staged", "Keep changes in working directory", "Create backup before resetting"],
                correct: 0,
                explanation: "'--hard' discards all changes (staged and working directory). Dangerous! '--soft' keeps changes staged, '--mixed' (default) keeps changes unstaged.",
                learnMore: { url: "https://git-scm.com/docs/git-reset", text: "📚 Git Reset" }
            },
            {
                q: "What's the difference between 'git reset' and 'git revert'?",
                options: ["Reset moves HEAD, revert creates undo commit", "They do exactly the same thing", "Revert moves HEAD to another commit", "Reset creates a new undo commit"],
                correct: 0,
                explanation: "Reset: moves HEAD, potentially losing commits (don't use on shared branches). Revert: creates new commit that undoes changes (safe for shared branches).",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/undoing-changes", text: "📚 Undoing Changes" }
            },
        ],
        4: [
            {
                q: "What does 'git cherry-pick' do?",
                options: ["Apply a specific commit to current branch", "Automatically select best commits", "Delete commits from history", "Rename commits in history"],
                correct: 0,
                explanation: "Cherry-pick copies a commit to current branch. Useful for backporting fixes. Creates new commit with same changes but different hash.",
                learnMore: { url: "https://git-scm.com/docs/git-cherry-pick", text: "📚 Git Cherry-pick" }
            },
            {
                q: "What's an interactive rebase used for?",
                options: ["Edit, squash, reorder commits", "Automatically rebase branches", "Perform a simple merge", "Create a new branch"],
                correct: 0,
                explanation: "'git rebase -i' lets you: squash commits, edit messages, reorder, drop commits. Powerful for cleaning up history before merging.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History", text: "📚 Interactive Rebase" }
            },
            {
                q: "What's a Git tag used for?",
                options: ["Mark specific points like releases", "Create a marker for branches", "Add comments to commits", "Temporarily save changes"],
                correct: 0,
                explanation: "Tags mark important points (releases, versions). Lightweight tags are just pointers. Annotated tags store metadata (tagger, date, message).",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging", text: "📚 Git Tags" }
            },
            {
                q: "What does 'git blame' show?",
                options: ["Who changed each line and when", "List of errors in the code", "Unresolved merge conflicts", "Complete branch history"],
                correct: 0,
                explanation: "'git blame' shows last commit that modified each line. Useful for finding when/why code changed. Use '-L' to limit to line range.",
                learnMore: { url: "https://git-scm.com/docs/git-blame", text: "📚 Git Blame" }
            },
        ],
        5: [
            {
                q: "How does 'git reflog' help in recovery?",
                options: ["Shows all ref changes including lost commits", "Just shows a log of branch references", "Displays remote repository activity", "Shows error and exception logs"],
                correct: 0,
                explanation: "Reflog records HEAD movements locally. Find 'lost' commits after reset/rebase. 'git checkout HEAD@{2}' to recover. Entries expire after 90 days.",
                learnMore: { url: "https://git-scm.com/docs/git-reflog", text: "📚 Git Reflog" }
            },
            {
                q: "What's git worktree?",
                options: ["Multiple working directories for same repo", "Visual tree structure of commits", "Tree view of repository files", "Branching tree visualization"],
                correct: 0,
                explanation: "Worktree lets you check out multiple branches simultaneously in different directories. Useful for comparing branches or working on multiple features.",
                learnMore: { url: "https://git-scm.com/docs/git-worktree", text: "📚 Git Worktree" }
            },
            {
                q: "How do you recover a deleted branch?",
                options: ["Find commit in reflog, recreate branch", "Deleted branches cannot be recovered", "Git automatically recovers branches", "Contact your Git administrator"],
                correct: 0,
                explanation: "Find the commit hash in reflog ('git reflog'), then 'git branch branch-name hash'. Branch is just a pointer - commits aren't deleted immediately.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery", text: "📚 Recovery" }
            },
            {
                q: "What's a detached HEAD state?",
                options: ["HEAD points to commit, not branch", "Repository is broken/corrupted", "HEAD reference was deleted", "Repository has no commits"],
                correct: 0,
                explanation: "Detached HEAD: checked out a commit directly, not a branch. New commits won't belong to any branch. Create a branch to keep them: 'git checkout -b new-branch'.",
                learnMore: { url: "https://git-scm.com/docs/git-checkout#_detached_head", text: "📚 Detached HEAD" }
            },
            {
                q: "What's git bisect used for?",
                options: ["Binary search to find bug-introducing commit", "Split repository into multiple repos", "Merge multiple branches together", "Create annotated release tags"],
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
                options: ["Instructions to build a Docker image", "A currently running container", "Docker daemon configuration", "Container log output file"],
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
                options: ["Starts all services in docker-compose.yml", "Updates the Docker engine", "Uploads images to registry", "Shows container status"],
                correct: 0,
                explanation: "'docker-compose up' creates and starts all services defined in compose file. Add '-d' for detached mode. '--build' rebuilds images.",
                learnMore: { url: "https://docs.docker.com/compose/reference/up/", text: "📚 Compose Up" }
            },
            {
                q: "What's the purpose of exposing a port in Docker?",
                options: ["Allow external access to container", "Increase container security", "Reduce memory usage", "Speed up container startup"],
                correct: 0,
                explanation: "EXPOSE documents which ports the container listens on. '-p host:container' actually publishes the port. Without -p, EXPOSE does nothing for external access.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#expose", text: "📚 Docker Ports" }
            },
            {
                q: "What does 'docker ps' show?",
                options: ["Currently running containers", "All available images", "Docker daemon processes", "Port mapping settings"],
                correct: 0,
                explanation: "'docker ps' lists running containers. Add '-a' for all containers (including stopped). Shows: ID, image, command, status, ports, names.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/ps/", text: "📚 Docker PS" }
            },
        ],
        3: [
            {
                q: "What's the difference between COPY and ADD in Dockerfile?",
                options: ["ADD can extract archives and URLs", "They do exactly the same thing", "COPY is the newer command", "ADD is now deprecated"],
                correct: 0,
                explanation: "COPY is straightforward file copy. ADD can extract tar archives and fetch URLs. Prefer COPY for simplicity; use ADD only when you need its features.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy", text: "📚 COPY vs ADD" }
            },
            {
                q: "Why use .dockerignore?",
                options: ["Exclude files from build context", "Ignore build error messages", "Skip certain image layers", "Disable the build cache"],
                correct: 0,
                explanation: ".dockerignore excludes files from build context sent to daemon. Speeds up builds, reduces image size, prevents secrets from being included.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#dockerignore-file", text: "📚 .dockerignore" }
            },
            {
                q: "What's a Docker layer?",
                options: ["Cached filesystem change from instruction", "Container isolation level", "Security permission layer", "Virtual network layer"],
                correct: 0,
                explanation: "Each Dockerfile instruction creates a layer. Layers are cached and reused if instruction and previous layers unchanged. Optimize by ordering least→most changing.",
                learnMore: { url: "https://docs.docker.com/storage/storagedriver/", text: "📚 Docker Layers" }
            },
            {
                q: "What does 'docker pull' do?",
                options: ["Downloads image from registry", "Pushes image to registry", "Removes image locally", "Lists available images"],
                correct: 0,
                explanation: "'docker pull' downloads image from registry (Docker Hub by default). Specify registry: 'registry.example.com/image:tag'. Layers already present are skipped.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/pull/", text: "📚 Docker Pull" }
            },
        ],
        4: [
            {
                q: "How do multi-stage builds reduce image size?",
                options: ["Only final stage artifacts included", "Files are compressed smaller", "Layers are automatically removed", "Base image is made smaller"],
                correct: 0,
                explanation: "Multi-stage builds use multiple FROM statements. Build tools stay in early stages; COPY only needed artifacts to final stage. Dramatically smaller production images.",
                learnMore: { url: "https://docs.docker.com/build/building/multi-stage/", text: "📚 Multi-stage Builds" }
            },
            {
                q: "What's the difference between docker-compose and Docker Swarm?",
                options: ["Compose for dev, Swarm for production clusters", "They do exactly the same thing", "Swarm is for development only", "Compose is for production clusters"],
                correct: 0,
                explanation: "Compose: define multi-container apps, great for development, single host. Swarm: orchestration for production clusters, multi-node, service discovery, scaling.",
                learnMore: { url: "https://docs.docker.com/engine/swarm/", text: "📚 Docker Swarm" }
            },
            {
                q: "Why use alpine-based images?",
                options: ["Smaller image size, faster downloads", "More features and packages", "Better default security", "Required by Docker daemon"],
                correct: 0,
                explanation: "Alpine Linux is ~5MB vs ~80MB+ for Debian. Smaller attack surface. But: uses musl libc (compatibility issues sometimes), less tooling. Good for production.",
                learnMore: { url: "https://hub.docker.com/_/alpine", text: "📚 Alpine Image" }
            },
            {
                q: "What's a Docker registry?",
                options: ["Storage and distribution for images", "Running container database", "Container log storage", "Configuration file storage"],
                correct: 0,
                explanation: "Registry stores and distributes images. Docker Hub is default public registry. Private options: Harbor, GitLab Registry, AWS ECR, etc.",
                learnMore: { url: "https://docs.docker.com/registry/", text: "📚 Docker Registry" }
            },
        ],
        5: [
            {
                q: "What's the difference between CMD and ENTRYPOINT?",
                options: ["CMD is overridable, ENTRYPOINT is fixed", "They work exactly the same", "CMD is the newer instruction", "ENTRYPOINT is deprecated now"],
                correct: 0,
                explanation: "ENTRYPOINT: the executable (hard to override). CMD: default arguments (easy to override). Best practice: ENTRYPOINT for command, CMD for default args.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact", text: "📚 CMD vs ENTRYPOINT" }
            },
            {
                q: "How do you optimize Docker build cache?",
                options: ["Order instructions least to most changing", "Use completely random order", "Cache optimization is not possible", "Always rebuild from scratch"],
                correct: 0,
                explanation: "Cache invalidates when instruction or previous layer changes. Order: base image → dependencies → code. Copy package.json before code to cache npm install.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache", text: "📚 Build Cache" }
            },
            {
                q: "What's a Docker secret?",
                options: ["Sensitive data management for Swarm", "Hidden container from listing", "Private image in registry", "Encrypted storage volume"],
                correct: 0,
                explanation: "Swarm secrets store sensitive data (passwords, keys) encrypted. Mounted as files in containers. Better than environment variables (visible in ps/logs).",
                learnMore: { url: "https://docs.docker.com/engine/swarm/secrets/", text: "📚 Docker Secrets" }
            },
            {
                q: "What's the purpose of Docker health checks?",
                options: ["Monitor container application health", "Check available disk space", "Verify network connectivity", "Test security configuration"],
                correct: 0,
                explanation: "HEALTHCHECK tests if app inside is working (not just process running). Returns: healthy, unhealthy, starting. Orchestrators can restart unhealthy containers.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#healthcheck", text: "📚 HEALTHCHECK" }
            },
            {
                q: "How do you reduce Docker image attack surface?",
                options: ["Minimal base, non-root user, few tools", "Add more debugging tools", "Always run as root user", "Use larger base images"],
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
                options: ["Continuous Delivery/Deployment", "Code Delivery system", "Continuous Development", "Code Distribution network"],
                correct: 0,
                explanation: "CD can mean Continuous Delivery (automatically prepare releases for deployment) or Continuous Deployment (automatically deploy every change that passes tests).",
                learnMore: { url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment", text: "📚 CI vs CD vs CD" }
            },
            {
                q: "What's the main goal of CI?",
                options: ["Detect integration issues early", "Deploy code to production faster", "Write less code overall", "Reduce testing requirements"],
                correct: 0,
                explanation: "CI's main goal is to detect integration problems early by automatically building and testing code changes frequently, reducing integration pain.",
                learnMore: { url: "https://martinfowler.com/articles/continuousIntegration.html", text: "📚 Martin Fowler on CI" }
            },
        ],
        2: [
            {
                q: "What triggers a CI pipeline typically?",
                options: ["Code push or merge request", "Manual button click only", "Scheduled time trigger only", "Production deployment event"],
                correct: 0,
                explanation: "CI pipelines are typically triggered by code pushes, merge/pull requests, or branch updates. This ensures every change is verified automatically.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/pipelines/", text: "📚 GitLab Pipelines" }
            },
            {
                q: "What's a pipeline stage?",
                options: ["Group of jobs that run together", "A single shell command to run", "The name of a Git branch", "A server running the jobs"],
                correct: 0,
                explanation: "A pipeline stage is a logical grouping of jobs that run together. Common stages include build, test, and deploy. Jobs in a stage run in parallel by default.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/yaml/#stages", text: "📚 GitLab Pipeline Stages" }
            },
            {
                q: "What should happen if CI tests fail?",
                options: ["Block merge until tests are fixed", "Proceed with merge regardless", "Ignore the test failures", "Delete the feature branch"],
                correct: 0,
                explanation: "Failed CI tests should block the merge to protect the main branch. This enforces quality gates and ensures only passing code enters the codebase.",
                learnMore: { url: "https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html", text: "📚 Pipeline-Gated Merges" }
            },
        ],
        3: [
            {
                q: "What's the difference between Continuous Delivery and Deployment?",
                options: ["Delivery needs manual approval, Deployment is automatic", "They are exactly the same thing", "Delivery is fully automatic", "Deployment requires manual approval"],
                correct: 0,
                explanation: "Continuous Delivery means code is always ready to deploy but requires manual approval. Continuous Deployment automatically deploys every passing change to production.",
                learnMore: { url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment", text: "📚 Delivery vs Deployment" }
            },
            {
                q: "What's a build artifact?",
                options: ["Output from build process (binary, package)", "The original source code files", "Just the test result reports", "Server configuration log files"],
                correct: 0,
                explanation: "Build artifacts are files produced by the build process: compiled binaries, packages, container images, or bundles that can be deployed or passed to other stages.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html", text: "📚 GitLab Job Artifacts" }
            },
            {
                q: "What's pipeline caching used for?",
                options: ["Speed up builds by reusing dependencies", "Store pipeline execution logs", "Save test results for review", "Backup source code regularly"],
                correct: 0,
                explanation: "Pipeline caching stores and reuses dependencies (node_modules, pip packages) between pipeline runs, significantly speeding up build times.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/caching/", text: "📚 GitLab Caching" }
            },
            {
                q: "What's a deployment environment?",
                options: ["Target system (dev, staging, prod)", "Your local development IDE", "The CI/CD build server", "A Git branch in the repo"],
                correct: 0,
                explanation: "Deployment environments are target systems where code runs: development, staging, production, etc. Each may have different configurations and access controls.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/environments/", text: "📚 GitLab Environments" }
            },
        ],
        4: [
            {
                q: "What are pipeline artifacts used for?",
                options: ["Pass build outputs between stages/jobs", "Store sensitive secrets securely", "Log errors to monitoring systems", "Cache dependencies between runs"],
                correct: 0,
                explanation: "Pipeline artifacts pass outputs between jobs/stages (e.g., compiled code from build to test stage). Unlike caches, artifacts are job-specific outputs.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html", text: "📚 Job Artifacts" }
            },
            {
                q: "What's a rollback strategy?",
                options: ["Plan to revert failed deployments", "Process to remove old code files", "Procedure to backup databases", "Method to clear system caches"],
                correct: 0,
                explanation: "A rollback strategy is a plan to quickly revert to a previous working version when a deployment fails. Can use previous artifacts, git reverts, or blue-green switching.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/environments/#environment-rollback", text: "📚 Environment Rollback" }
            },
            {
                q: "What's canary deployment?",
                options: ["Gradual rollout to subset of users", "Full deployment to all servers", "Immediate rollback on any error", "Test deployment to dev server"],
                correct: 0,
                explanation: "Canary deployment gradually rolls out changes to a small subset of users first. If issues arise, only a small percentage is affected before full rollout.",
                learnMore: { url: "https://martinfowler.com/bliki/CanaryRelease.html", text: "📚 Canary Releases" }
            },
            {
                q: "What's infrastructure as code in CI/CD?",
                options: ["Define infrastructure in version-controlled files", "Set up servers with manual commands", "Configure resources through web UI", "Use external provisioning tools only"],
                correct: 0,
                explanation: "Infrastructure as Code (IaC) defines infrastructure using version-controlled files (Terraform, Ansible), enabling reproducible, auditable infrastructure changes through CI/CD.",
                learnMore: { url: "https://www.terraform.io/intro", text: "📚 Terraform Introduction" }
            },
        ],
        5: [
            {
                q: "How do you implement blue-green deployments?",
                options: ["Two identical environments, switch traffic", "Single environment with in-place updates", "Gradual rollout to percentage of users", "A/B testing with feature toggles"],
                correct: 0,
                explanation: "Blue-green deployment uses two identical environments. Deploy to inactive one (green), verify it works, then switch traffic from active (blue) to green. Instant rollback possible.",
                learnMore: { url: "https://martinfowler.com/bliki/BlueGreenDeployment.html", text: "📚 Blue-Green Deployment" }
            },
            {
                q: "What's GitOps?",
                options: ["Use Git as source of truth for infra", "Standard Git operations and commands", "GitHub-specific platform features", "Generic Git automation scripts"],
                correct: 0,
                explanation: "GitOps uses Git as the single source of truth for infrastructure and applications. Changes are made via PRs, and automated processes sync Git state to actual infrastructure.",
                learnMore: { url: "https://www.gitops.tech/", text: "📚 GitOps Principles" }
            },
            {
                q: "What's feature flag deployment?",
                options: ["Toggle features without deployment", "Git branches for each feature", "Boolean variables in config files", "Command-line deployment flags"],
                correct: 0,
                explanation: "Feature flags (toggles) allow enabling/disabling features at runtime without deployment. Enables gradual rollouts, A/B testing, and quick disabling of problematic features.",
                learnMore: { url: "https://martinfowler.com/articles/feature-toggles.html", text: "📚 Feature Toggles" }
            },
            {
                q: "What's a deployment pipeline pattern?",
                options: ["Stages: build, test, deploy with gates", "Single step deployment process", "Fully manual deployment process", "No defined deployment pattern"],
                correct: 0,
                explanation: "A deployment pipeline pattern structures CI/CD into stages (build → test → staging → production) with quality gates between each stage ensuring only verified code advances.",
                learnMore: { url: "https://martinfowler.com/bliki/DeploymentPipeline.html", text: "📚 Deployment Pipeline" }
            },
            {
                q: "How do you handle database migrations in CI/CD?",
                options: ["Versioned migrations, backward compatible", "Make direct manual database changes", "Skip migrations in CI/CD pipelines", "Drop and recreate all tables"],
                correct: 0,
                explanation: "Database migrations should be versioned, backward compatible (for rollback), and tested. Run migrations as separate pipeline step before deployment. Avoid destructive changes.",
                learnMore: { url: "https://docs.djangoproject.com/en/4.2/topics/migrations/", text: "📚 Django Migrations" }
            },
        ]
    },

    'f-algorithms': {
        1: [
            {
                q: "What's the purpose of sorting algorithms?",
                options: ["Arrange elements in a specific order", "Delete duplicate elements", "Compress data for storage", "Convert data types"],
                correct: 0,
                explanation: "Sorting algorithms arrange elements in a defined order (ascending, descending, alphabetical). Common algorithms include quicksort, mergesort, and bubble sort.",
                learnMore: { url: "https://www.geeksforgeeks.org/sorting-algorithms/", text: "📚 Sorting Algorithms" }
            },
            {
                q: "What is Big O notation used for?",
                options: ["Describe algorithm efficiency", "Name programming variables", "Format code documentation", "Define function signatures"],
                correct: 0,
                explanation: "Big O notation describes how algorithm performance scales with input size. O(n) means linear time, O(n²) means quadratic time, O(1) means constant time.",
                learnMore: { url: "https://www.bigocheatsheet.com/", text: "📚 Big O Cheat Sheet" }
            },
            {
                q: "What does O(1) complexity mean?",
                options: ["Constant time regardless of input size", "Linear time proportional to input", "Exponential time doubling each step", "Time depends on network speed"],
                correct: 0,
                explanation: "O(1) or constant time means the operation takes the same time regardless of input size. Examples: array index access, hash table lookup.",
                learnMore: { url: "https://www.freecodecamp.org/news/big-o-notation-explained/", text: "📚 Big O Explained" }
            },
        ],
        2: [
            {
                q: "What's the difference between linear and binary search?",
                options: ["Linear checks each element; binary halves sorted data", "Linear is faster than binary search", "Binary works on unsorted data only", "They're identical in performance"],
                correct: 0,
                explanation: "Linear search checks each element sequentially (O(n)). Binary search requires sorted data but halves the search space each step (O(log n)).",
                learnMore: { url: "https://www.geeksforgeeks.org/binary-search/", text: "📚 Binary Search" }
            },
            {
                q: "What's pagination in the context of algorithms?",
                options: ["Dividing results into discrete pages", "Sorting data alphabetically", "Compressing large datasets", "Encrypting user information"],
                correct: 0,
                explanation: "Pagination divides large result sets into smaller pages (e.g., 20 items per page). Uses offset/limit or cursor-based approaches for efficient data retrieval.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/pagination/", text: "📚 DRF Pagination" }
            },
            {
                q: "What's filtering in data algorithms?",
                options: ["Selecting elements matching criteria", "Sorting elements by size", "Compressing repeated values", "Encrypting sensitive fields"],
                correct: 0,
                explanation: "Filtering selects elements that match specified criteria from a collection. Common in database queries (WHERE), array methods (filter), and API endpoints.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/filtering/", text: "📚 DRF Filtering" }
            },
        ],
        3: [
            {
                q: "What's the time complexity of quicksort on average?",
                options: ["O(n log n) using divide and conquer", "O(n²) in all cases consistently", "O(n) linear time always", "O(1) constant time operation"],
                correct: 0,
                explanation: "Quicksort averages O(n log n) by partitioning around a pivot and recursively sorting. Worst case is O(n²) with bad pivot selection (already sorted data).",
                learnMore: { url: "https://www.geeksforgeeks.org/quick-sort/", text: "📚 QuickSort" }
            },
            {
                q: "What's depth-first search (DFS)?",
                options: ["Explore as deep as possible before backtracking", "Visit all neighbors before going deeper", "Search only the first level nodes", "Random traversal of the graph"],
                correct: 0,
                explanation: "DFS explores as far as possible along each branch before backtracking. Uses a stack (explicit or recursion). Good for path finding, topological sort.",
                learnMore: { url: "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/", text: "📚 DFS Algorithm" }
            },
            {
                q: "What's breadth-first search (BFS)?",
                options: ["Visit all neighbors before going deeper", "Explore deep paths before others", "Only search leaf nodes first", "Skip nodes randomly for speed"],
                correct: 0,
                explanation: "BFS visits all neighbors at current depth before moving deeper. Uses a queue. Good for shortest path in unweighted graphs, level-order traversal.",
                learnMore: { url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/", text: "📚 BFS Algorithm" }
            },
            {
                q: "What's a recursive algorithm?",
                options: ["Function that calls itself with smaller input", "Function that never terminates ever", "Function that runs in parallel", "Function that reads from disk"],
                correct: 0,
                explanation: "Recursion is when a function calls itself with a smaller problem until reaching a base case. Used in tree traversal, quicksort, and divide-and-conquer.",
                learnMore: { url: "https://www.geeksforgeeks.org/introduction-to-recursion/", text: "📚 Recursion" }
            },
        ],
        4: [
            {
                q: "When would you use dynamic programming?",
                options: ["Overlapping subproblems with optimal substructure", "Simple loops with no repetition", "Random data with no patterns", "Real-time systems with strict timing"],
                correct: 0,
                explanation: "Dynamic programming works when problems have overlapping subproblems (same calculations repeated) and optimal substructure (optimal solution from optimal subsolutions).",
                learnMore: { url: "https://www.geeksforgeeks.org/dynamic-programming/", text: "📚 Dynamic Programming" }
            },
            {
                q: "What's memoization in algorithms?",
                options: ["Cache computed results to avoid recalculation", "Write detailed comments in code", "Memorize source code by heart", "Store data in permanent memory"],
                correct: 0,
                explanation: "Memoization caches function results for given inputs. If called again with same inputs, returns cached result. Optimizes recursive algorithms significantly.",
                learnMore: { url: "https://www.geeksforgeeks.org/memoization-1d-2d-and-3d/", text: "📚 Memoization" }
            },
            {
                q: "What's a hash collision and how is it handled?",
                options: ["Two keys map to same slot; use chaining or probing", "When hash function returns null value", "Memory overflow during hashing", "Network collision during transfer"],
                correct: 0,
                explanation: "Hash collision occurs when different keys produce the same hash value. Handled via chaining (linked list at each slot) or open addressing (probing for next slot).",
                learnMore: { url: "https://www.geeksforgeeks.org/hashing-set-2-separate-chaining/", text: "📚 Hash Collisions" }
            },
            {
                q: "What's the time complexity of tree balancing?",
                options: ["O(log n) for balanced tree operations", "O(n²) for all tree operations", "O(1) constant for everything", "O(n!) factorial complexity"],
                correct: 0,
                explanation: "Balanced trees (AVL, Red-Black) maintain O(log n) height, ensuring O(log n) search, insert, delete. Unbalanced trees can degrade to O(n) (linked list).",
                learnMore: { url: "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/", text: "📚 AVL Trees" }
            },
        ],
        5: [
            {
                q: "When is Dijkstra's algorithm used?",
                options: ["Shortest path in weighted graphs with non-negative edges", "Sorting arrays of integers quickly", "Finding cycles in directed graphs", "Compressing text using entropy"],
                correct: 0,
                explanation: "Dijkstra finds shortest paths from a source to all vertices in weighted graphs with non-negative edges. Uses priority queue for O((V+E) log V) complexity.",
                learnMore: { url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", text: "📚 Dijkstra's Algorithm" }
            },
            {
                q: "What's the difference between greedy and dynamic programming?",
                options: ["Greedy makes local optimal choices; DP considers all subproblems", "They're identical approaches to problems", "Greedy is always slower than DP", "DP never finds optimal solutions"],
                correct: 0,
                explanation: "Greedy makes locally optimal choices hoping for global optimum (fast but not always optimal). DP systematically solves all subproblems (slower but guaranteed optimal).",
                learnMore: { url: "https://www.geeksforgeeks.org/greedy-approach-vs-dynamic-programming/", text: "📚 Greedy vs DP" }
            },
            {
                q: "What's amortized analysis?",
                options: ["Average cost per operation over sequence of operations", "Worst case analysis for single operation", "Best case scenario only considered", "Random sampling of performance"],
                correct: 0,
                explanation: "Amortized analysis averages time over a sequence of operations. Example: ArrayList resize is O(n) sometimes, but amortized O(1) per insertion over time.",
                learnMore: { url: "https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis/", text: "📚 Amortized Analysis" }
            },
            {
                q: "What's the A* pathfinding algorithm?",
                options: ["Heuristic-guided search combining actual and estimated cost", "Exhaustive search of all possible paths", "Random walk until destination found", "Only works on unweighted graphs"],
                correct: 0,
                explanation: "A* uses f(n) = g(n) + h(n) where g is actual cost from start and h is heuristic estimate to goal. Guarantees shortest path with admissible heuristic.",
                learnMore: { url: "https://www.redblobgames.com/pathfinding/a-star/introduction.html", text: "📚 A* Pathfinding" }
            },
            {
                q: "When would you use a bloom filter?",
                options: ["Probabilistic membership test with no false negatives", "Exact counting of unique elements", "Sorting large datasets efficiently", "Encrypting sensitive information"],
                correct: 0,
                explanation: "Bloom filters test set membership with possible false positives but no false negatives. Space-efficient for large sets. Used in caches, spell checkers, databases.",
                learnMore: { url: "https://www.geeksforgeeks.org/bloom-filters-introduction-and-implementation/", text: "📚 Bloom Filters" }
            },
        ]
    },

    'f-state-machines': {
        1: [
            {
                q: "What is a finite state machine (FSM)?",
                options: ["Model with defined states and transitions between them", "Infinite loop that never terminates", "Database for storing machine data", "Hardware component for calculations"],
                correct: 0,
                explanation: "A finite state machine has a finite number of states, transitions between them triggered by events, and defined initial/final states. Models sequential logic.",
                learnMore: { url: "https://www.geeksforgeeks.org/introduction-of-finite-automata/", text: "📚 Finite Automata" }
            },
            {
                q: "What's a 'state' in state machine terminology?",
                options: ["A specific condition the system can be in", "A variable that stores numbers", "A type of database query result", "A network connection status only"],
                correct: 0,
                explanation: "A state represents a distinct condition or situation of the system. Examples: 'pending', 'approved', 'rejected' for an order, or 'idle', 'running' for a process.",
                learnMore: { url: "https://statecharts.dev/what-is-a-state-machine.html", text: "📚 State Machine Basics" }
            },
            {
                q: "What triggers a state transition?",
                options: ["An event or action that causes state change", "A timer that runs continuously", "A database migration process", "A network packet arriving"],
                correct: 0,
                explanation: "Transitions are triggered by events (user actions, system events, timeouts). The transition may also have guards (conditions) that must be true to proceed.",
                learnMore: { url: "https://statecharts.dev/what-is-a-state-machine.html", text: "📚 Transitions" }
            },
        ],
        2: [
            {
                q: "What's django-fsm used for?",
                options: ["Add state machine behavior to Django models", "File system management in Django", "Fast serialization module for Django", "Form state management only"],
                correct: 0,
                explanation: "django-fsm adds finite state machine behavior to Django models. Defines allowed transitions, guards, and transition callbacks on model fields.",
                learnMore: { url: "https://github.com/viewflow/django-fsm", text: "📚 django-fsm" }
            },
            {
                q: "What's a transition guard?",
                options: ["Condition that must be true for transition to occur", "Security feature preventing unauthorized access", "Backup state before transition happens", "Logging mechanism for transitions"],
                correct: 0,
                explanation: "A guard is a boolean condition checked before a transition. If false, the transition is not allowed. Example: can_approve() checks user has permission.",
                learnMore: { url: "https://github.com/viewflow/django-fsm#transition-decorators", text: "📚 FSM Guards" }
            },
            {
                q: "Why use state machines for workflow?",
                options: ["Enforce valid state transitions and prevent invalid states", "Improve database query performance", "Reduce memory usage significantly", "Make code run faster overall"],
                correct: 0,
                explanation: "State machines enforce business rules by only allowing defined transitions. Prevents invalid states (e.g., can't ship before payment). Makes workflow logic explicit.",
                learnMore: { url: "https://statecharts.dev/benefits-of-statecharts.html", text: "📚 Benefits" }
            },
        ],
        3: [
            {
                q: "What's the difference between Mealy and Moore machines?",
                options: ["Mealy outputs depend on state+input; Moore only on state", "Moore is newer than Mealy machines", "Mealy is only for hardware design", "They're identical in all aspects"],
                correct: 0,
                explanation: "Moore machine outputs depend only on current state. Mealy machine outputs depend on both state AND current input. Mealy can be more responsive but complex.",
                learnMore: { url: "https://www.geeksforgeeks.org/difference-between-mealy-and-moore-machine/", text: "📚 Mealy vs Moore" }
            },
            {
                q: "How does django-fsm define valid transitions?",
                options: ["@transition decorator specifying source and target states", "XML configuration file for transitions", "Database table storing all transitions", "Comments describing allowed states"],
                correct: 0,
                explanation: "django-fsm uses @transition decorator on methods. Specifies source state(s), target state, and optional conditions. Method executes transition logic.",
                learnMore: { url: "https://github.com/viewflow/django-fsm#usage", text: "📚 FSM Transitions" }
            },
            {
                q: "What's a hierarchical state machine?",
                options: ["States can contain nested substates", "Multiple machines running in parallel", "States sorted by priority level", "Machine with very deep call stack"],
                correct: 0,
                explanation: "Hierarchical (nested) state machines allow states to contain substates. Reduces complexity by grouping related states. Parent state can define shared transitions.",
                learnMore: { url: "https://statecharts.dev/what-is-a-statechart.html", text: "📚 Statecharts" }
            },
            {
                q: "What happens when an invalid transition is attempted?",
                options: ["Exception is raised preventing the transition", "System silently ignores the request", "State becomes undefined or null", "All states reset to initial state"],
                correct: 0,
                explanation: "Properly implemented FSM raises an exception for invalid transitions. django-fsm raises TransitionNotAllowed. This protects data integrity.",
                learnMore: { url: "https://github.com/viewflow/django-fsm#exceptions", text: "📚 FSM Exceptions" }
            },
        ],
        4: [
            {
                q: "How do you handle side effects in state transitions?",
                options: ["Callbacks or hooks executed during transition", "Side effects should never occur in FSM", "Store them in separate database table", "Run them in background thread only"],
                correct: 0,
                explanation: "Use pre/post transition callbacks. django-fsm supports @transition(on_enter=...) or signals. Callbacks handle notifications, logging, external API calls.",
                learnMore: { url: "https://github.com/viewflow/django-fsm#signals", text: "📚 FSM Signals" }
            },
            {
                q: "What's the actor pattern in state machines?",
                options: ["Tracking who performed each transition", "Running machines in parallel actors", "Acting out states for debugging", "Animated state visualization"],
                correct: 0,
                explanation: "Actor pattern records who triggered each transition (user, system). Important for audit trails. django-fsm supports by='field' parameter on transitions.",
                learnMore: { url: "https://github.com/viewflow/django-fsm#drawing-transitions", text: "📚 FSM Audit" }
            },
            {
                q: "How do you test state machine behavior?",
                options: ["Test each valid transition and verify invalid ones are rejected", "Only test the happy path transitions", "Skip testing since FSM is declarative", "Test only the final states matter"],
                correct: 0,
                explanation: "Test each valid transition, verify guards work, confirm invalid transitions raise errors, test callbacks execute. State machines need comprehensive testing.",
                learnMore: { url: "https://statecharts.dev/how-to-use-statecharts.html#testing", text: "📚 Testing FSM" }
            },
            {
                q: "What's a state machine diagram?",
                options: ["Visual representation of states and transitions", "UML class diagram variation", "Database schema for states", "Network topology diagram"],
                correct: 0,
                explanation: "State machine diagrams (statecharts) visually show states as nodes, transitions as arrows with labels. Essential for documenting and communicating workflows.",
                learnMore: { url: "https://statecharts.dev/how-to-use-statecharts.html#diagrams", text: "📚 State Diagrams" }
            },
        ],
        5: [
            {
                q: "How do you handle concurrent state machines?",
                options: ["Parallel regions or separate machines with synchronization", "State machines can't run concurrently", "Use single global machine for everything", "Ignore concurrency as it's rare"],
                correct: 0,
                explanation: "Concurrent state machines use parallel regions (orthogonal states) or separate machines with synchronization points. Handle with care for consistency.",
                learnMore: { url: "https://statecharts.dev/glossary/parallel-state.html", text: "📚 Parallel States" }
            },
            {
                q: "What's event sourcing with state machines?",
                options: ["Store all transition events to rebuild current state", "Delete events after state changes", "Store only the current state value", "Events are same as transitions"],
                correct: 0,
                explanation: "Event sourcing stores all transition events rather than current state. Current state is computed by replaying events. Provides complete audit trail and time-travel.",
                learnMore: { url: "https://martinfowler.com/eaaDev/EventSourcing.html", text: "📚 Event Sourcing" }
            },
            {
                q: "How do you migrate state machine definitions?",
                options: ["Plan carefully: add states first, migrate data, then remove old", "Just change the code and redeploy", "Delete all data and start fresh", "State machines can't be migrated"],
                correct: 0,
                explanation: "Migrate carefully: add new states/transitions, migrate existing data, remove old states. Ensure no data is in removed states. Test thoroughly.",
                learnMore: { url: "https://docs.djangoproject.com/en/4.2/topics/migrations/", text: "📚 Data Migrations" }
            },
            {
                q: "What's the difference between internal and external transitions?",
                options: ["Internal stays in same state; external exits and re-enters", "External transitions cross machine boundaries", "Internal transitions are private methods", "They're just naming conventions only"],
                correct: 0,
                explanation: "Internal transitions execute without exiting the state (no exit/entry actions). External transitions exit current state and enter target (even if same state).",
                learnMore: { url: "https://statecharts.dev/glossary/internal-transition.html", text: "📚 Internal Transitions" }
            },
            {
                q: "How do state machines integrate with saga pattern?",
                options: ["Each saga step is a state; compensating actions on failure", "Sagas replace state machines entirely", "State machines can't handle long transactions", "Sagas are only for microservices"],
                correct: 0,
                explanation: "Saga pattern uses state machine to track long-running transactions. Each step is a state. Failure triggers compensating transitions to rollback completed steps.",
                learnMore: { url: "https://microservices.io/patterns/data/saga.html", text: "📚 Saga Pattern" }
            },
        ]
    },

    'f-concurrency': {
        1: [
            {
                q: "What is concurrency in programming?",
                options: ["Multiple tasks making progress in overlapping time", "Running code faster by default", "Using multiple monitors at once", "Writing code in multiple languages"],
                correct: 0,
                explanation: "Concurrency is handling multiple tasks that overlap in time. Tasks may not run simultaneously but progress is interleaved. Enables responsive applications.",
                learnMore: { url: "https://realpython.com/python-concurrency/", text: "📚 Python Concurrency" }
            },
            {
                q: "What's the difference between concurrency and parallelism?",
                options: ["Concurrency is structure; parallelism is simultaneous execution", "They mean exactly the same thing", "Parallelism is slower than concurrency", "Concurrency requires multiple CPUs always"],
                correct: 0,
                explanation: "Concurrency is about structure (dealing with multiple things). Parallelism is about execution (doing multiple things at once). Concurrency enables parallelism.",
                learnMore: { url: "https://blog.golang.org/waza-talk", text: "📚 Concurrency vs Parallelism" }
            },
            {
                q: "What is a thread?",
                options: ["Lightweight unit of execution within a process", "A type of network connection protocol", "Physical wire connecting computer parts", "A debugging tool for tracing code"],
                correct: 0,
                explanation: "A thread is a unit of execution within a process. Threads share process memory. Multiple threads allow concurrent work but require synchronization.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/", text: "📚 Python Threading" }
            },
        ],
        2: [
            {
                q: "What is async/await in Python?",
                options: ["Syntax for writing asynchronous code with coroutines", "A way to speed up all Python code", "Database async query mechanism only", "Testing framework for concurrent code"],
                correct: 0,
                explanation: "async/await is Python syntax for coroutines. async defines a coroutine function, await pauses until the awaited coroutine completes. Uses asyncio event loop.",
                learnMore: { url: "https://realpython.com/async-io-python/", text: "📚 Async IO" }
            },
            {
                q: "What's Python's Global Interpreter Lock (GIL)?",
                options: ["Mutex preventing true thread parallelism in CPython", "Security feature locking global variables", "License for using Python globally", "Memory protection for interpreters"],
                correct: 0,
                explanation: "The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. Limits CPU-bound parallelism but I/O-bound works fine.",
                learnMore: { url: "https://realpython.com/python-gil/", text: "📚 Python GIL" }
            },
            {
                q: "When should you use threading vs asyncio?",
                options: ["Asyncio for I/O-bound; threading for blocking libraries", "Always use threading for everything", "Asyncio only works on Linux systems", "Threading is deprecated in Python"],
                correct: 0,
                explanation: "Use asyncio for I/O-bound tasks with async libraries. Use threading when calling blocking/synchronous libraries or for CPU-bound tasks with GIL workarounds.",
                learnMore: { url: "https://realpython.com/python-concurrency/#when-to-use-which", text: "📚 Concurrency Guide" }
            },
        ],
        3: [
            {
                q: "What is a race condition?",
                options: ["Bug when outcome depends on timing of concurrent operations", "Competition between two racing programs", "Condition checked before program starts", "Performance benchmark between threads"],
                correct: 0,
                explanation: "Race condition occurs when multiple threads access shared data and outcome depends on execution order. Can cause data corruption, crashes, security vulnerabilities.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/#race-conditions", text: "📚 Race Conditions" }
            },
            {
                q: "What is a mutex (lock)?",
                options: ["Synchronization primitive ensuring exclusive access", "A type of silent exception handler", "Memory allocation technique for speed", "Database mutex for transactions only"],
                correct: 0,
                explanation: "Mutex (mutual exclusion) is a lock ensuring only one thread accesses a resource at a time. Threads must acquire lock before accessing, release after.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/#basic-synchronization-using-lock", text: "📚 Threading Locks" }
            },
            {
                q: "What is a deadlock?",
                options: ["When threads wait forever for each other's locks", "When program crashes with error message", "When database transaction times out", "When network connection is blocked"],
                correct: 0,
                explanation: "Deadlock occurs when threads wait for locks held by each other, creating circular dependency. Neither can proceed. Prevented by lock ordering, timeouts.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/#deadlock", text: "📚 Deadlocks" }
            },
            {
                q: "What does 'thread-safe' mean?",
                options: ["Code can be called from multiple threads without corruption", "Thread won't crash the program ever", "Thread is protected from hackers", "Thread has been tested thoroughly"],
                correct: 0,
                explanation: "Thread-safe code can be executed by multiple threads concurrently without race conditions or data corruption. Uses proper synchronization or immutable data.",
                learnMore: { url: "https://docs.python.org/3/glossary.html#term-thread-safe", text: "📚 Thread Safety" }
            },
        ],
        4: [
            {
                q: "What is a semaphore?",
                options: ["Counter-based synchronization allowing N concurrent accesses", "Signal sent between processes only", "Type of timeout for waiting threads", "Memory barrier for CPU caches"],
                correct: 0,
                explanation: "Semaphore is a synchronization primitive with a counter. Allows up to N threads to access a resource. Used for connection pools, rate limiting, bounded buffers.",
                learnMore: { url: "https://docs.python.org/3/library/threading.html#semaphore-objects", text: "📚 Semaphores" }
            },
            {
                q: "What is a thread pool?",
                options: ["Pre-created threads reused for multiple tasks", "Collection of thread documentation files", "Memory pool shared between threads", "Group of threads that must finish together"],
                correct: 0,
                explanation: "Thread pool maintains pre-created threads that execute tasks from a queue. Avoids overhead of creating/destroying threads. Python's concurrent.futures provides ThreadPoolExecutor.",
                learnMore: { url: "https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor", text: "📚 Thread Pool" }
            },
            {
                q: "What's the producer-consumer pattern?",
                options: ["Producers add to queue; consumers take from queue", "One thread produces all the work alone", "Consumer threads create new producers", "Pattern for user interface design only"],
                correct: 0,
                explanation: "Producer-consumer uses a shared queue. Producer threads add items, consumer threads process them. Queue handles synchronization. Common in task pipelines.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/#producer-consumer-using-queue", text: "📚 Producer-Consumer" }
            },
            {
                q: "How do you handle exceptions in async code?",
                options: ["try/except around await; or gather with return_exceptions", "Exceptions don't occur in async code", "Let them crash the event loop always", "Use global exception handler only"],
                correct: 0,
                explanation: "Use try/except around await calls. For gather(), use return_exceptions=True to collect exceptions. Unhandled exceptions in tasks may be silently lost.",
                learnMore: { url: "https://docs.python.org/3/library/asyncio-task.html#asyncio.gather", text: "📚 Async Exceptions" }
            },
        ],
        5: [
            {
                q: "What is the actor model?",
                options: ["Concurrency model where actors communicate via messages only", "Design pattern for user interfaces", "Testing pattern using mock actors", "Security model with user actors"],
                correct: 0,
                explanation: "Actor model has isolated actors that communicate only via async messages. No shared state. Each actor processes messages sequentially. Erlang, Akka implement this.",
                learnMore: { url: "https://www.brianstorti.com/the-actor-model/", text: "📚 Actor Model" }
            },
            {
                q: "What's optimistic vs pessimistic locking?",
                options: ["Optimistic checks at commit; pessimistic locks immediately", "Optimistic is faster in all cases", "Pessimistic never causes conflicts", "They're identical in behavior"],
                correct: 0,
                explanation: "Pessimistic locking acquires lock before reading/writing. Optimistic assumes no conflict, checks version at commit. Optimistic better for low contention.",
                learnMore: { url: "https://www.baeldung.com/cs/optimistic-vs-pessimistic-locking", text: "📚 Locking Strategies" }
            },
            {
                q: "What's a coroutine?",
                options: ["Function that can suspend and resume execution", "Routine that runs on multiple cores", "Core library routine for threading", "Cooperative routine between processes"],
                correct: 0,
                explanation: "Coroutine is a function that can suspend (yield) and resume later from where it stopped. Enables cooperative multitasking. In Python, defined with async def.",
                learnMore: { url: "https://docs.python.org/3/library/asyncio-task.html#coroutines", text: "📚 Coroutines" }
            },
            {
                q: "How does multiprocessing bypass the GIL?",
                options: ["Separate processes with own Python interpreter", "Uses special GIL-free bytecode", "Runs threads in native code only", "Multiprocessing doesn't exist in Python"],
                correct: 0,
                explanation: "multiprocessing spawns separate processes, each with own Python interpreter and GIL. True parallelism but higher overhead (IPC, memory copy). Good for CPU-bound.",
                learnMore: { url: "https://docs.python.org/3/library/multiprocessing.html", text: "📚 Multiprocessing" }
            },
            {
                q: "What's the difference between asyncio.create_task and asyncio.gather?",
                options: ["create_task schedules one; gather waits for multiple", "They're aliases for the same function", "gather creates tasks, create_task gathers", "create_task is deprecated for gather"],
                correct: 0,
                explanation: "create_task() schedules a single coroutine to run soon. gather() runs multiple coroutines concurrently and waits for all to complete. gather returns results in order.",
                learnMore: { url: "https://docs.python.org/3/library/asyncio-task.html", text: "📚 Asyncio Tasks" }
            },
        ]
    },

    'f-immutability': {
        1: [
            {
                q: "What does 'immutable' mean in programming?",
                options: ["Cannot be changed after creation", "Can be changed by any function", "Protected from network access", "Stored permanently on disk"],
                correct: 0,
                explanation: "Immutable data cannot be modified after creation. Any 'change' creates a new object. Examples: strings in Python/Java, frozen objects in JavaScript.",
                learnMore: { url: "https://realpython.com/python-mutable-vs-immutable-types/", text: "📚 Mutable vs Immutable" }
            },
            {
                q: "Which Python type is immutable?",
                options: ["tuple - cannot be modified after creation", "list - can be modified easily", "dict - supports item assignment", "set - allows adding and removing"],
                correct: 0,
                explanation: "Python tuples are immutable - elements can't be added, removed, or changed. Lists, dicts, and sets are mutable. Strings and numbers are also immutable.",
                learnMore: { url: "https://docs.python.org/3/library/stdtypes.html#tuple", text: "📚 Python Tuples" }
            },
            {
                q: "Why is immutability useful?",
                options: ["Prevents unexpected changes and bugs", "Makes programs run much faster", "Required by all programming languages", "Only useful in functional languages"],
                correct: 0,
                explanation: "Immutability prevents accidental modification, makes code easier to reason about, enables safe sharing between threads, and helps with debugging.",
                learnMore: { url: "https://realpython.com/lessons/why-use-immutable-types/", text: "📚 Benefits of Immutability" }
            },
        ],
        2: [
            {
                q: "What is a pure function?",
                options: ["Same input always gives same output, no side effects", "Function with no parameters at all", "Function that never returns a value", "Function written in pure Python only"],
                correct: 0,
                explanation: "Pure function has no side effects (doesn't modify external state) and is deterministic (same inputs always produce same output). Easier to test and reason about.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Pure_function", text: "📚 Pure Functions" }
            },
            {
                q: "What's a side effect in programming?",
                options: ["Modifying state outside function scope", "Returning a value from function", "Passing parameters to function", "Creating local variables inside"],
                correct: 0,
                explanation: "Side effects include modifying global variables, I/O operations, database writes, mutating input arguments. Pure functions avoid side effects.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Side_effect_(computer_science)", text: "📚 Side Effects" }
            },
            {
                q: "How do you update an immutable data structure?",
                options: ["Create new structure with desired changes", "Use special mutation methods built in", "Cast to mutable type temporarily", "Immutable data cannot be updated ever"],
                correct: 0,
                explanation: "Create a new structure containing the changes. For efficiency, implementations often share unchanged parts (structural sharing). Original remains unchanged.",
                learnMore: { url: "https://immutable-js.com/", text: "📚 Immutable.js" }
            },
        ],
        3: [
            {
                q: "What's structural sharing?",
                options: ["New immutable objects share unchanged parts with old", "Sharing code structure between files", "Sharing database schemas between tables", "Sharing memory between threads directly"],
                correct: 0,
                explanation: "Structural sharing reuses unchanged parts when creating modified immutable structures. Only changed paths are new. Makes immutable updates efficient (O(log n) typically).",
                learnMore: { url: "https://hypirion.com/musings/understanding-persistent-vector-pt-1", text: "📚 Structural Sharing" }
            },
            {
                q: "What's a frozen object in JavaScript?",
                options: ["Object that cannot have properties changed", "Object stored in cold storage cache", "Object that runs slower than normal", "Object that freezes browser execution"],
                correct: 0,
                explanation: "Object.freeze() makes an object shallowly immutable. Properties can't be added, removed, or changed. Nested objects must be frozen separately for deep immutability.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze", text: "📚 Object.freeze()" }
            },
            {
                q: "What's the relationship between immutability and hashing?",
                options: ["Immutable objects can have consistent hash values", "Mutable objects have better hash functions", "Hashing requires mutable state always", "No relationship between them at all"],
                correct: 0,
                explanation: "Immutable objects can be safely hashed because their value won't change. Mutable objects can't be reliably used as dictionary keys since hash could change.",
                learnMore: { url: "https://docs.python.org/3/glossary.html#term-hashable", text: "📚 Hashable Objects" }
            },
            {
                q: "How does Python's @dataclass(frozen=True) work?",
                options: ["Creates immutable dataclass preventing attribute changes", "Freezes class definition at import time", "Caches all method return values forever", "Prevents class from being garbage collected"],
                correct: 0,
                explanation: "frozen=True makes dataclass instances immutable. Attempting to set attributes raises FrozenInstanceError. Also makes instances hashable for use in sets/dicts.",
                learnMore: { url: "https://docs.python.org/3/library/dataclasses.html#frozen-instances", text: "📚 Frozen Dataclasses" }
            },
        ],
        4: [
            {
                q: "What's referential transparency?",
                options: ["Expression can be replaced with its value without changing program", "Transparent references that show through code", "Ability to reference any variable anywhere", "Making variables visible in debugger"],
                correct: 0,
                explanation: "Referentially transparent expressions can be substituted with their values without changing program behavior. Key property of pure functions. Enables safe refactoring.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Referential_transparency", text: "📚 Referential Transparency" }
            },
            {
                q: "Why is immutability important for concurrent programming?",
                options: ["No synchronization needed for read-only shared data", "Immutable data can only exist in single thread", "Concurrent programs can't use immutable data", "Mutexes automatically protect immutable data"],
                correct: 0,
                explanation: "Immutable data can be safely shared between threads without locks or synchronization. Race conditions require mutable shared state. Immutability eliminates a class of bugs.",
                learnMore: { url: "https://www.baeldung.com/java-immutable-object", text: "📚 Immutability and Threads" }
            },
            {
                q: "What's copy-on-write (COW)?",
                options: ["Delay copying until modification is needed", "Copy data when writing to disk", "Write copies to multiple locations", "Never copy data just reference it"],
                correct: 0,
                explanation: "Copy-on-write defers copying until data is actually modified. Multiple references share data until one modifies it. Efficient for rarely-modified large data.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Copy-on-write", text: "📚 Copy-on-Write" }
            },
            {
                q: "What's persistent data structure?",
                options: ["Previous versions remain accessible after modification", "Data stored persistently on disk", "Data that survives program restart", "Data that never changes value"],
                correct: 0,
                explanation: "Persistent data structures preserve previous versions when modified. New version shares structure with old via structural sharing. Enables efficient undo, time-travel.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Persistent_data_structure", text: "📚 Persistent Data Structures" }
            },
        ],
        5: [
            {
                q: "What's the difference between defensive copying and immutability?",
                options: ["Defensive copies on every access; immutable needs no copying", "They're identical approaches to safety", "Immutability requires more memory always", "Defensive copying is always faster"],
                correct: 0,
                explanation: "Defensive copying makes copies when passing/returning to prevent unwanted modification. Immutable data doesn't need copies since it can't be modified. Immutability is more efficient.",
                learnMore: { url: "https://wiki.c2.com/?DefensiveCopy", text: "📚 Defensive Copying" }
            },
            {
                q: "How does Immer.js achieve immutability?",
                options: ["Proxy objects track changes, then produce immutable result", "Deep freezes all objects recursively", "Uses Web Workers for isolation", "Copies everything on every change"],
                correct: 0,
                explanation: "Immer uses JavaScript Proxy to track mutations to a draft. After mutations, produces new immutable state with structural sharing. 'Write mutable code, get immutable data.'",
                learnMore: { url: "https://immerjs.github.io/immer/", text: "📚 Immer.js" }
            },
            {
                q: "What's value semantics vs reference semantics?",
                options: ["Value: equality by content; Reference: equality by identity", "They mean the same thing in practice", "Value semantics uses more memory always", "Reference semantics is always immutable"],
                correct: 0,
                explanation: "Value semantics: objects are equal if contents are equal, copies are independent. Reference semantics: equality is identity, copies share data. Immutability enables value semantics.",
                learnMore: { url: "https://isocpp.org/wiki/faq/value-vs-ref-semantics", text: "📚 Value Semantics" }
            },
            {
                q: "How do functional languages optimize immutable operations?",
                options: ["Structural sharing, lazy evaluation, and tail call optimization", "They don't optimize immutable operations", "By using mutable data internally secretly", "By avoiding immutability when possible"],
                correct: 0,
                explanation: "Functional languages use structural sharing (share unchanged parts), lazy evaluation (compute only when needed), and tail call optimization (reuse stack frames).",
                learnMore: { url: "https://www.haskell.org/", text: "📚 Haskell" }
            },
            {
                q: "What's the trade-off of immutability?",
                options: ["More allocations but safer code and better parallelism", "No trade-offs immutability is always better", "Immutable code is always slower overall", "Immutability uses less memory than mutable"],
                correct: 0,
                explanation: "Immutability trades increased memory allocation for safety, easier reasoning, thread safety, and debugging. With structural sharing, overhead is often minimal.",
                learnMore: { url: "https://www.yegor256.com/2014/06/09/objects-should-be-immutable.html", text: "📚 Immutability Trade-offs" }
            },
        ]
    },

    'f-type-systems': {
        1: [
            {
                q: "What is static typing?",
                options: ["Type checking at compile time before running", "Types that don't change during execution", "Typing speed of the programmer", "Types stored in static variables only"],
                correct: 0,
                explanation: "Static typing checks types at compile time. Errors caught before running code. Examples: Java, TypeScript, Go. Contrasts with dynamic typing (checked at runtime).",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html", text: "📚 TypeScript Types" }
            },
            {
                q: "What is dynamic typing?",
                options: ["Type checking at runtime when code executes", "Types that change based on user input", "Fast typing on keyboard rapidly", "Types stored in dynamic variables"],
                correct: 0,
                explanation: "Dynamic typing checks types at runtime. More flexible but errors only found when code runs. Examples: Python, JavaScript, Ruby.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Dynamic_typing", text: "📚 Dynamic Typing" }
            },
            {
                q: "What is TypeScript?",
                options: ["JavaScript with static type annotations", "A new programming language from scratch", "Microsoft's replacement for JavaScript", "Type-focused templating language"],
                correct: 0,
                explanation: "TypeScript adds optional static types to JavaScript. Compiles to plain JavaScript. Catches type errors at compile time. Widely used in large codebases.",
                learnMore: { url: "https://www.typescriptlang.org/", text: "📚 TypeScript" }
            },
        ],
        2: [
            {
                q: "What are Python type hints?",
                options: ["Optional type annotations for better tooling and documentation", "Required type declarations like Java", "A different Python dialect with types", "Comments describing expected types"],
                correct: 0,
                explanation: "Python type hints (PEP 484) are optional annotations. Not enforced at runtime but used by tools like mypy, IDEs. Improve documentation and catch errors.",
                learnMore: { url: "https://docs.python.org/3/library/typing.html", text: "📚 Python Typing" }
            },
            {
                q: "What's the difference between any and unknown in TypeScript?",
                options: ["any skips checks; unknown requires type narrowing", "They're exactly the same type", "unknown allows more operations than any", "any is for objects, unknown for primitives"],
                correct: 0,
                explanation: "any disables type checking - anything allowed. unknown is type-safe: must narrow type (check it) before using. Prefer unknown over any for safety.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", text: "📚 Type Narrowing" }
            },
            {
                q: "What's type inference?",
                options: ["Compiler automatically determines types from context", "Developer manually writes all type annotations", "Types are randomly assigned by compiler", "Type information stored in database"],
                correct: 0,
                explanation: "Type inference lets compiler deduce types from code context. 'let x = 5' infers x is number. Reduces annotation noise while keeping type safety.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/type-inference.html", text: "📚 Type Inference" }
            },
        ],
        3: [
            {
                q: "What are generics in type systems?",
                options: ["Types parameterized by other types for reusability", "Generic functions that accept any input", "Types that are very general and loose", "Brand-name types vs generic types"],
                correct: 0,
                explanation: "Generics allow types to be parameterized. Array<T> works for any type T. Enables reusable, type-safe code. Called generics (Java/TS) or parametric polymorphism (FP).",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/generics.html", text: "📚 TypeScript Generics" }
            },
            {
                q: "What's a union type?",
                options: ["Value can be one of several specified types", "Combining multiple values into one", "Type that includes all possible values", "Database union operation type"],
                correct: 0,
                explanation: "Union type (A | B) means value is either type A or type B. Must handle all possibilities. Example: string | number accepts either strings or numbers.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types", text: "📚 Union Types" }
            },
            {
                q: "What's type narrowing?",
                options: ["Refining type to more specific one through checks", "Making types smaller in memory", "Reducing number of types in codebase", "Converting types to narrower values"],
                correct: 0,
                explanation: "Type narrowing refines a type based on control flow. After 'if (typeof x === 'string')', TypeScript knows x is string inside the block. Enables safe operations.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", text: "📚 Type Narrowing" }
            },
            {
                q: "What's the difference between interface and type in TypeScript?",
                options: ["Interface is extendable; type is more flexible with unions", "They're completely identical always", "Interface is for functions only", "Type is deprecated for interface"],
                correct: 0,
                explanation: "Interfaces can be extended/merged and are good for objects. Type aliases are more flexible (unions, tuples, primitives). Both work for object shapes.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces", text: "📚 Interface vs Type" }
            },
        ],
        4: [
            {
                q: "What's structural typing vs nominal typing?",
                options: ["Structural: compatible if same shape; Nominal: must be same named type", "They're the same thing with different names", "Structural is for structures, nominal for classes", "Nominal is newer and always better"],
                correct: 0,
                explanation: "Structural typing (TypeScript, Go) checks shape/structure. Nominal typing (Java, C#) requires explicit type declaration. {name: string} compatible with any matching shape in TS.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html", text: "📚 Type Compatibility" }
            },
            {
                q: "What's a discriminated union?",
                options: ["Union with shared literal property to distinguish variants", "Union that excludes certain types", "Discriminating between union members randomly", "Union types that are deprecated"],
                correct: 0,
                explanation: "Discriminated unions use a common literal property (discriminant) to distinguish variants. type Shape = {kind: 'circle', r} | {kind: 'square', side}. Switch on 'kind'.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions", text: "📚 Discriminated Unions" }
            },
            {
                q: "What are type guards?",
                options: ["Functions that narrow types through runtime checks", "Security features protecting type data", "Guards preventing type assignments", "Type annotations on guard statements"],
                correct: 0,
                explanation: "Type guards are functions returning boolean that narrow types. 'function isString(x): x is string' tells TypeScript x is string when function returns true.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates", text: "📚 Type Guards" }
            },
            {
                q: "What's mypy used for?",
                options: ["Static type checker for Python code", "My personal Python interpreter", "Python testing framework for types", "Memory profiler for Python"],
                correct: 0,
                explanation: "mypy is a static type checker for Python. Analyzes type hints without running code. Catches type errors, enforces annotations. CI integration common.",
                learnMore: { url: "https://mypy.readthedocs.io/", text: "📚 mypy" }
            },
        ],
        5: [
            {
                q: "What's covariance and contravariance?",
                options: ["How subtyping works for generic type parameters", "Variance in code coverage statistics", "Different variable naming conventions", "Co-located vs contra-located code"],
                correct: 0,
                explanation: "Covariance: if A extends B, Container<A> extends Container<B> (output position). Contravariance: opposite (input position). Invariant: neither. Affects type safety.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/generics.html#variance-annotations", text: "📚 Variance" }
            },
            {
                q: "What are conditional types in TypeScript?",
                options: ["Types that depend on type conditions: T extends U ? X : Y", "Types used only in conditional statements", "Conditional compilation of type code", "Types that may or may not exist"],
                correct: 0,
                explanation: "Conditional types: T extends U ? X : Y. If T assignable to U, type is X, else Y. Enables powerful type transformations. Used in utility types like Exclude, Extract.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html", text: "📚 Conditional Types" }
            },
            {
                q: "What's the infer keyword in TypeScript?",
                options: ["Extract type from within conditional type", "Infer types automatically everywhere", "Inference engine initialization keyword", "Internal type system keyword only"],
                correct: 0,
                explanation: "infer declares a type variable within conditional type to extract a component. ReturnType<T> uses 'T extends (...) => infer R ? R : never' to extract return type.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types", text: "📚 Infer Keyword" }
            },
            {
                q: "What's Protocol in Python typing?",
                options: ["Structural subtyping defining expected methods/attributes", "Network protocol type annotations", "Security protocol enforcement in types", "Protocol buffer type integration"],
                correct: 0,
                explanation: "Protocol (typing.Protocol) enables structural subtyping in Python. Class is subtype if it has required methods/attributes. Duck typing with type checking.",
                learnMore: { url: "https://docs.python.org/3/library/typing.html#typing.Protocol", text: "📚 Python Protocol" }
            },
            {
                q: "What's the Liskov Substitution Principle in typing?",
                options: ["Subtypes must be substitutable for their base types", "Types should have unique names globally", "List types should be substituted with arrays", "Substitution of variables is type-checked"],
                correct: 0,
                explanation: "LSP: if S is subtype of T, S should be usable wherever T is expected without breaking program. Violated if subtype changes behavior. Core OOP principle.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Liskov_substitution_principle", text: "📚 Liskov Principle" }
            },
        ]
    },

    'f-memory-perf': {
        1: [
            {
                q: "What is RAM in computing?",
                options: ["Fast temporary storage for running programs", "Permanent storage like hard drives", "Graphics memory for displays only", "Network memory for data transfer"],
                correct: 0,
                explanation: "RAM (Random Access Memory) is fast, temporary storage. Programs and data load into RAM for quick CPU access. Lost when power off. Faster than disk, slower than CPU cache.",
                learnMore: { url: "https://www.howtogeek.com/791/what-is-ram-and-how-much-memory-do-you-need/", text: "📚 What is RAM" }
            },
            {
                q: "What is memory allocation?",
                options: ["Reserving memory space for data or objects", "Sending memory to other computers", "Deleting memory that's not needed", "Measuring total available memory"],
                correct: 0,
                explanation: "Memory allocation reserves space in RAM for variables, objects, arrays. Can be static (compile time) or dynamic (runtime). Deallocation frees memory when no longer needed.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memory_management", text: "📚 Memory Management" }
            },
            {
                q: "What is garbage collection?",
                options: ["Automatic reclaiming of unused memory", "Deleting files from hard drive", "Cleaning up unused code comments", "Removing bugs from programs"],
                correct: 0,
                explanation: "Garbage collection (GC) automatically frees memory that's no longer referenced. Python, Java, JavaScript use GC. Removes burden of manual deallocation.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)", text: "📚 Garbage Collection" }
            },
        ],
        2: [
            {
                q: "What is a memory leak?",
                options: ["Memory that's allocated but never freed", "Memory hardware that's physically damaged", "Confidential data escaping to hackers", "Memory that runs slower over time"],
                correct: 0,
                explanation: "Memory leak occurs when memory is allocated but never released. Program's memory usage grows continuously. Eventually causes slowdown or crash. Common in long-running apps.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memory_leak", text: "📚 Memory Leaks" }
            },
            {
                q: "What is lazy loading?",
                options: ["Defer loading until actually needed", "Loading data very slowly on purpose", "A programmer who doesn't load data", "Background loading while user waits"],
                correct: 0,
                explanation: "Lazy loading defers loading resources until they're needed. Load images when scrolled into view, load modules on first use. Improves initial load time.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading", text: "📚 Lazy Loading" }
            },
            {
                q: "What is memoization?",
                options: ["Caching function results to avoid recalculation", "Memorizing code syntax for exams", "Writing memos about function behavior", "Memory optimization technique only"],
                correct: 0,
                explanation: "Memoization caches function results based on inputs. If called with same arguments, returns cached result. Effective for expensive pure functions. Trade memory for speed.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memoization", text: "📚 Memoization" }
            },
        ],
        3: [
            {
                q: "What is a CPU cache?",
                options: ["Fast memory between CPU and RAM", "Backup storage for CPU data", "CPU instructions stored on disk", "Hidden CPU processing cycles"],
                correct: 0,
                explanation: "CPU cache (L1, L2, L3) is extremely fast memory on/near CPU. Stores frequently accessed data. Cache hits are fast; misses require slower RAM access.",
                learnMore: { url: "https://www.extremetech.com/extreme/188776-how-l1-and-l2-cpu-caches-work-and-why-theyre-an-essential-part-of-modern-chips", text: "📚 CPU Cache" }
            },
            {
                q: "What's the difference between stack and heap memory?",
                options: ["Stack is automatic LIFO; heap is dynamic manual/GC", "Stack is slower than heap memory", "Heap is only for small variables", "They're the same thing different names"],
                correct: 0,
                explanation: "Stack: automatic, LIFO, fast, limited size, for local variables. Heap: dynamic allocation, larger, slower, needs explicit free or GC. Objects typically on heap.",
                learnMore: { url: "https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/", text: "📚 Stack vs Heap" }
            },
            {
                q: "What is memory profiling?",
                options: ["Measuring memory usage to find issues", "Writing memory specifications document", "Comparing memory between computers", "Protecting memory from unauthorized access"],
                correct: 0,
                explanation: "Memory profiling measures memory usage over time. Identifies leaks, high usage, allocation patterns. Tools: memory_profiler (Python), Chrome DevTools, Valgrind.",
                learnMore: { url: "https://pypi.org/project/memory-profiler/", text: "📚 memory_profiler" }
            },
            {
                q: "What does O(1) space complexity mean?",
                options: ["Constant memory regardless of input size", "One byte of memory used total", "Memory grows linearly with input", "No memory used at all ever"],
                correct: 0,
                explanation: "O(1) space complexity means memory usage doesn't grow with input size. Algorithm uses fixed amount of memory. O(n) would grow proportionally with input.",
                learnMore: { url: "https://www.geeksforgeeks.org/g-fact-86/", text: "📚 Space Complexity" }
            },
        ],
        4: [
            {
                q: "What is memory fragmentation?",
                options: ["Free memory split into small unusable chunks", "Memory breaking into fragments physically", "Fragmented files in memory system", "Memory that works in fragments only"],
                correct: 0,
                explanation: "Fragmentation occurs when free memory is split into small, non-contiguous blocks. Large allocations may fail even with enough total free space. Defragmentation helps.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Fragmentation_(computing)", text: "📚 Memory Fragmentation" }
            },
            {
                q: "What's the purpose of memory pooling?",
                options: ["Pre-allocate and reuse memory blocks", "Pool memory from multiple machines", "Shared memory between processes", "Cooling memory with water pooling"],
                correct: 0,
                explanation: "Memory pooling pre-allocates blocks and reuses them. Avoids allocation/deallocation overhead. Reduces fragmentation. Common for frequently created/destroyed objects.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memory_pool", text: "📚 Memory Pooling" }
            },
            {
                q: "What's cache locality?",
                options: ["Accessing nearby memory locations for cache efficiency", "Local cache server location", "Caching data for local users only", "Location where cache is stored"],
                correct: 0,
                explanation: "Cache locality: accessing memory sequentially or nearby (spatial locality), or recently accessed (temporal locality). Improves cache hit rate. Arrays better than linked lists.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Locality_of_reference", text: "📚 Cache Locality" }
            },
            {
                q: "What's a weak reference?",
                options: ["Reference that doesn't prevent garbage collection", "Reference that might be null sometimes", "Slow reference compared to strong", "Reference in weakly-typed language"],
                correct: 0,
                explanation: "Weak reference doesn't prevent object from being garbage collected. Useful for caches: object stays if other refs exist, can be collected if only weak refs remain.",
                learnMore: { url: "https://docs.python.org/3/library/weakref.html", text: "📚 Python weakref" }
            },
        ],
        5: [
            {
                q: "What's virtual memory?",
                options: ["Using disk as extension of RAM", "Memory in virtual machines only", "Simulated memory for testing", "Memory that doesn't physically exist"],
                correct: 0,
                explanation: "Virtual memory uses disk to extend available RAM. OS swaps pages between RAM and disk. Enables running programs larger than physical RAM. Disk access is slow though.",
                learnMore: { url: "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/", text: "📚 Virtual Memory" }
            },
            {
                q: "What's a memory-mapped file?",
                options: ["File mapped directly to memory address space", "File containing memory dump data", "Map of memory layout in file", "File stored in RAM instead of disk"],
                correct: 0,
                explanation: "Memory-mapped files map file contents to memory addresses. Access file like memory array. OS handles reading/writing pages. Efficient for large files, shared memory.",
                learnMore: { url: "https://docs.python.org/3/library/mmap.html", text: "📚 Python mmap" }
            },
            {
                q: "What's copy-on-write in memory management?",
                options: ["Share pages until one is modified", "Copy all memory before writing", "Write operations copy to backup", "Copy-paste operations in memory"],
                correct: 0,
                explanation: "Copy-on-write shares memory pages between processes until one modifies. Only then is page copied. Efficient for fork(): child shares parent pages until writes.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Copy-on-write", text: "📚 Copy-on-Write" }
            },
            {
                q: "How do you identify memory bottlenecks?",
                options: ["Profile memory usage, check cache misses, analyze allocations", "Memory bottlenecks can't be identified", "Only hardware upgrade solves memory issues", "Read the source code very carefully"],
                correct: 0,
                explanation: "Use profilers (Valgrind, memory_profiler), check cache miss rates, analyze allocation patterns, monitor GC pauses, review data structure choices. Often cache locality issue.",
                learnMore: { url: "https://www.brendangregg.com/FlameGraphs/memoryflamegraphs.html", text: "📚 Memory Profiling" }
            },
            {
                q: "What's NUMA in high-performance computing?",
                options: ["Non-Uniform Memory Access where memory speed varies by location", "New Unified Memory Architecture standard", "Network Unified Memory Access protocol", "Node-based Unified Memory Allocation"],
                correct: 0,
                explanation: "NUMA: Non-Uniform Memory Access. In multi-CPU systems, memory attached to different CPUs has different access times. Local memory faster. Important for HPC optimization.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Non-uniform_memory_access", text: "📚 NUMA" }
            },
        ]
    },

    'f-security-basics': {
        1: [
            {
                q: "What is authentication?",
                options: ["Verifying who the user is", "Determining what user can access", "Encrypting user data securely", "Logging user activity for audit"],
                correct: 0,
                explanation: "Authentication verifies identity (who are you?). Methods: passwords, biometrics, tokens. Different from authorization (what can you do?).",
                learnMore: { url: "https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization", text: "📚 Auth Fundamentals" }
            },
            {
                q: "What is authorization?",
                options: ["Determining what user can access or do", "Verifying the user's identity", "Encrypting user passwords securely", "Creating new user accounts"],
                correct: 0,
                explanation: "Authorization determines permissions (what can you do?). After authentication, system checks if user is authorized for requested action. RBAC is common pattern.",
                learnMore: { url: "https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization", text: "📚 Authorization" }
            },
            {
                q: "What is HTTPS?",
                options: ["HTTP with encryption via TLS", "Faster version of HTTP protocol", "HTTP for hosting websites only", "HTTP with more features added"],
                correct: 0,
                explanation: "HTTPS encrypts HTTP traffic using TLS (Transport Layer Security). Protects data in transit from eavesdropping and tampering. Standard for all web traffic.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS", text: "📚 HTTPS" }
            },
        ],
        2: [
            {
                q: "What is SQL injection?",
                options: ["Malicious SQL in user input to manipulate database", "Injecting SQL database with more data", "Adding new SQL tables dynamically", "Optimizing SQL query performance"],
                correct: 0,
                explanation: "SQL injection: attacker inserts malicious SQL via input fields. Can read/modify/delete data. Prevented by parameterized queries, ORMs, input validation.",
                learnMore: { url: "https://owasp.org/www-community/attacks/SQL_Injection", text: "📚 SQL Injection" }
            },
            {
                q: "What is XSS (Cross-Site Scripting)?",
                options: ["Injecting malicious scripts into web pages", "Copying scripts between websites", "Cross-browser script compatibility", "Server-side script execution"],
                correct: 0,
                explanation: "XSS injects malicious JavaScript into pages viewed by other users. Can steal cookies, sessions, data. Prevent by escaping output, Content Security Policy.",
                learnMore: { url: "https://owasp.org/www-community/attacks/xss/", text: "📚 XSS" }
            },
            {
                q: "What is password hashing?",
                options: ["One-way transformation storing password safely", "Encrypting passwords to decrypt later", "Creating password from hash values", "Splitting passwords into parts"],
                correct: 0,
                explanation: "Hashing converts password to fixed-length string that can't be reversed. Store hash, not password. Use bcrypt, Argon2 with salt. Never store plaintext passwords.",
                learnMore: { url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html", text: "📚 Password Storage" }
            },
        ],
        3: [
            {
                q: "What is CORS (Cross-Origin Resource Sharing)?",
                options: ["Browser security allowing controlled cross-origin requests", "Copying resources between servers", "Core resource sharing protocol", "Cross-browser resource compatibility"],
                correct: 0,
                explanation: "CORS allows servers to specify which origins can access resources. Browser enforces same-origin policy; CORS headers enable controlled exceptions for APIs.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", text: "📚 CORS" }
            },
            {
                q: "What is CSRF (Cross-Site Request Forgery)?",
                options: ["Tricking user's browser to make unwanted requests", "Creating fake websites that look real", "Forging digital signatures on requests", "Cross-browser request handling"],
                correct: 0,
                explanation: "CSRF tricks authenticated user's browser into making unintended requests. Attacker exploits existing session. Prevent with CSRF tokens, SameSite cookies.",
                learnMore: { url: "https://owasp.org/www-community/attacks/csrf", text: "📚 CSRF" }
            },
            {
                q: "What is principle of least privilege?",
                options: ["Grant minimum permissions needed for task", "Give everyone administrative access", "Privilege escalation prevention technique", "Least important users get access first"],
                correct: 0,
                explanation: "Least privilege: users/processes get only permissions they need. Limits damage from compromise or mistake. Apply to users, services, API tokens.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Principle_of_least_privilege", text: "📚 Least Privilege" }
            },
            {
                q: "What's input validation?",
                options: ["Checking user input meets expected format and constraints", "Validating that input fields exist", "Checking database input connections", "Validating programming language input"],
                correct: 0,
                explanation: "Input validation ensures user input matches expected format, type, length, range. First line of defense. Validate on server (client validation is bypassable).",
                learnMore: { url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html", text: "📚 Input Validation" }
            },
        ],
        4: [
            {
                q: "What is OAuth 2.0?",
                options: ["Authorization framework for delegated access", "Authentication protocol replacing passwords", "Open authentication for all applications", "Second version of auth library"],
                correct: 0,
                explanation: "OAuth 2.0 is authorization framework enabling apps to get limited access to user accounts on other services. User grants permission without sharing password.",
                learnMore: { url: "https://oauth.net/2/", text: "📚 OAuth 2.0" }
            },
            {
                q: "What is JWT (JSON Web Token)?",
                options: ["Signed token containing claims as JSON", "Java Web Token for authentication", "JSON writing template format", "JavaScript web tokenization"],
                correct: 0,
                explanation: "JWT is self-contained token with claims (user info). Signed (and optionally encrypted). Used for stateless authentication. Contains header, payload, signature.",
                learnMore: { url: "https://jwt.io/introduction", text: "📚 JWT Introduction" }
            },
            {
                q: "What's defense in depth?",
                options: ["Multiple layers of security controls", "Defending the deepest database layer", "Deep security audit process", "In-depth security documentation"],
                correct: 0,
                explanation: "Defense in depth uses multiple security layers. If one fails, others protect. Includes: network security, application security, access controls, encryption, monitoring.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Defense_in_depth_(computing)", text: "📚 Defense in Depth" }
            },
            {
                q: "What's rate limiting?",
                options: ["Restricting request frequency to prevent abuse", "Limiting data transfer rates only", "Rating the quality of API limits", "Limiting the rate of code changes"],
                correct: 0,
                explanation: "Rate limiting restricts how many requests client can make in time period. Prevents DoS, brute force, API abuse. Return 429 Too Many Requests when exceeded.",
                learnMore: { url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/", text: "📚 Rate Limiting" }
            },
        ],
        5: [
            {
                q: "What's the OWASP Top 10?",
                options: ["List of most critical web application security risks", "Top 10 web development frameworks", "Best 10 security products to buy", "Ranking of secure programming languages"],
                correct: 0,
                explanation: "OWASP Top 10 lists most critical web security risks. Updated periodically. Includes injection, broken auth, XSS, CSRF, misconfig. Standard awareness document.",
                learnMore: { url: "https://owasp.org/www-project-top-ten/", text: "📚 OWASP Top 10" }
            },
            {
                q: "What's the difference between encryption and hashing?",
                options: ["Encryption is reversible; hashing is one-way", "They're identical cryptographic operations", "Hashing is faster encryption method", "Encryption is for passwords only"],
                correct: 0,
                explanation: "Encryption is reversible with key (for protecting data in transit/rest). Hashing is one-way (for passwords, integrity checks). Different use cases.",
                learnMore: { url: "https://www.thesslstore.com/blog/difference-encryption-hashing-salting/", text: "📚 Encryption vs Hashing" }
            },
            {
                q: "What's security through obscurity?",
                options: ["Bad practice of hiding implementation for security", "Obscure but effective security method", "Security for obscure legacy systems", "Hiding security logs from attackers"],
                correct: 0,
                explanation: "Security through obscurity relies on keeping implementation secret. Bad practice: assume attackers know your system. Security should work even if design is public.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Security_through_obscurity", text: "📚 Security Obscurity" }
            },
            {
                q: "What's a security audit?",
                options: ["Systematic evaluation of security controls", "Automatic security scanning only", "Logging security events to files", "Auditing user permissions list"],
                correct: 0,
                explanation: "Security audit systematically evaluates security controls, policies, procedures. Includes code review, penetration testing, compliance checking. Regular audits essential.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Information_technology_security_audit", text: "📚 Security Audits" }
            },
            {
                q: "What's the principle of fail-safe defaults?",
                options: ["Default to denying access unless explicitly granted", "Systems fail safely without data loss", "Safe default configuration for software", "Failing fast to detect errors early"],
                correct: 0,
                explanation: "Fail-safe defaults: base access decisions on permission (allowlist) not exclusion (denylist). Default deny, explicitly grant. Safer than trying to block everything bad.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Fail-safe", text: "📚 Fail-Safe Defaults" }
            },
        ]
    },

    'f-debugging': {
        1: [
            {
                q: "What is a debugger?",
                options: ["Tool to step through code and inspect state", "Program that automatically fixes bugs", "Log file viewer for error messages", "Code formatter that removes bugs"],
                correct: 0,
                explanation: "A debugger lets you pause execution, step through code line by line, inspect variables, and understand program flow. Essential for finding root causes.",
                learnMore: { url: "https://docs.python.org/3/library/pdb.html", text: "📚 Python Debugger" }
            },
            {
                q: "What is a breakpoint?",
                options: ["Point where debugger pauses execution", "Point where program crashes with error", "Breaking code into smaller functions", "Point of no return in code flow"],
                correct: 0,
                explanation: "Breakpoint is a marker where debugger pauses execution. You can then inspect variables, call stack, step through code. Set in IDE or with debugger commands.",
                learnMore: { url: "https://code.visualstudio.com/docs/editor/debugging#_breakpoints", text: "📚 VS Code Breakpoints" }
            },
            {
                q: "What is print debugging?",
                options: ["Adding print statements to trace execution", "Debugging code that prints output", "Printing stack traces on errors", "Debugging printer hardware issues"],
                correct: 0,
                explanation: "Print debugging adds print/log statements to trace values and execution flow. Quick and works anywhere. Remove or use logging when done. Also called 'printf debugging'.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Debugging#Techniques", text: "📚 Debugging Techniques" }
            },
        ],
        2: [
            {
                q: "What is pdb in Python?",
                options: ["Python's built-in interactive debugger", "Python database connector module", "Python development board tool", "Package dependency browser"],
                correct: 0,
                explanation: "pdb is Python's built-in debugger. Use 'import pdb; pdb.set_trace()' or 'breakpoint()' to start. Commands: n(next), s(step), c(continue), p(print), l(list).",
                learnMore: { url: "https://docs.python.org/3/library/pdb.html", text: "📚 pdb Documentation" }
            },
            {
                q: "What's the browser DevTools Console used for?",
                options: ["Execute JavaScript and view logs/errors", "Design console UI components only", "Develop console games in browser", "Console for server administration"],
                correct: 0,
                explanation: "Browser DevTools Console shows JavaScript errors, warnings, console.log output. Can execute JS interactively, inspect DOM elements, test code snippets.",
                learnMore: { url: "https://developer.chrome.com/docs/devtools/console/", text: "📚 Chrome Console" }
            },
            {
                q: "What is a stack trace?",
                options: ["List of function calls leading to error", "Memory stack usage statistics", "Stack data structure visualization", "Trace of all variables in stack"],
                correct: 0,
                explanation: "Stack trace shows the chain of function calls that led to an error. Most recent call at top. Essential for finding where and why errors occurred.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Stack_trace", text: "📚 Stack Traces" }
            },
        ],
        3: [
            {
                q: "What's the Network tab in browser DevTools?",
                options: ["Shows all HTTP requests and responses", "Network configuration settings", "Internet connection speed test", "Network administrator controls"],
                correct: 0,
                explanation: "Network tab shows all HTTP requests: URLs, methods, status codes, timing, headers, payloads. Essential for debugging API calls, performance issues, CORS errors.",
                learnMore: { url: "https://developer.chrome.com/docs/devtools/network/", text: "📚 Chrome Network Tab" }
            },
            {
                q: "What's a conditional breakpoint?",
                options: ["Breakpoint that only triggers when condition is true", "Breakpoint for conditional statements only", "Multiple breakpoints set conditionally", "Breakpoint that can be disabled"],
                correct: 0,
                explanation: "Conditional breakpoint pauses only when specified condition is true. Useful for debugging specific cases in loops or when variable has certain value.",
                learnMore: { url: "https://code.visualstudio.com/docs/editor/debugging#_conditional-breakpoints", text: "📚 Conditional Breakpoints" }
            },
            {
                q: "What's the purpose of logging levels?",
                options: ["Categorize log messages by severity", "Limit number of log entries created", "Level up logging capabilities over time", "Track user levels in application"],
                correct: 0,
                explanation: "Logging levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) categorize messages by severity. Configure to show only relevant levels. Debug locally, warn+ in production.",
                learnMore: { url: "https://docs.python.org/3/library/logging.html#logging-levels", text: "📚 Logging Levels" }
            },
            {
                q: "What's remote debugging?",
                options: ["Debugging code running on different machine", "Debugging from a remote location", "Debugging remote APIs and services", "Remotely controlled debug robot"],
                correct: 0,
                explanation: "Remote debugging connects debugger to code running on different machine/container. Useful for debugging production issues, containers, mobile apps, servers.",
                learnMore: { url: "https://code.visualstudio.com/docs/editor/debugging#_remote-debugging", text: "📚 Remote Debugging" }
            },
        ],
        4: [
            {
                q: "What's CPU profiling?",
                options: ["Measuring where program spends execution time", "Counting CPU cores used by program", "Profile of CPU hardware capabilities", "Profiling CPU temperature during execution"],
                correct: 0,
                explanation: "CPU profiling identifies where program spends time. Shows hotspots (slow functions). Tools: cProfile (Python), Chrome DevTools, perf. Optimize the hotspots.",
                learnMore: { url: "https://docs.python.org/3/library/profile.html", text: "📚 Python Profilers" }
            },
            {
                q: "What's a flame graph?",
                options: ["Visualization of call stack over time", "Temperature monitoring visualization", "Error rate visualization graph", "Network traffic flame patterns"],
                correct: 0,
                explanation: "Flame graphs visualize profiled stack traces. X-axis is alphabetical (not time), Y-axis is stack depth. Width is time spent. Wide bars are optimization targets.",
                learnMore: { url: "https://www.brendangregg.com/flamegraphs.html", text: "📚 Flame Graphs" }
            },
            {
                q: "What's the React DevTools used for?",
                options: ["Inspect React component tree and state", "Develop React applications faster", "Tools for reacting to user input", "DevTools that react to changes"],
                correct: 0,
                explanation: "React DevTools browser extension shows component tree, props, state, hooks. Can edit state, profile renders, highlight updates. Essential for React debugging.",
                learnMore: { url: "https://react.dev/learn/react-developer-tools", text: "📚 React DevTools" }
            },
            {
                q: "How do you debug memory issues?",
                options: ["Use memory profiler, check heap snapshots, track allocations", "Memory issues fix themselves over time", "Just add more RAM to the server", "Memory can't be debugged directly"],
                correct: 0,
                explanation: "Memory debugging: use profilers (memory_profiler, Chrome heap snapshots), track allocations over time, identify leaks (growing memory), check object retention.",
                learnMore: { url: "https://developer.chrome.com/docs/devtools/memory-problems/", text: "📚 Memory Problems" }
            },
        ],
        5: [
            {
                q: "What's post-mortem debugging?",
                options: ["Debugging after crash using core dump", "Debugging very old legacy code", "Debugging code after deployment", "Debugging someone else's code"],
                correct: 0,
                explanation: "Post-mortem debugging analyzes program state after crash. Core dumps capture memory at crash time. Load into debugger to inspect stack, variables at failure point.",
                learnMore: { url: "https://docs.python.org/3/library/pdb.html#pdb.post_mortem", text: "📚 Post-Mortem pdb" }
            },
            {
                q: "What's tracing vs profiling?",
                options: ["Tracing records events; profiling measures performance", "They're exactly the same thing", "Tracing is for errors; profiling for warnings", "Profiling is manual; tracing is automatic"],
                correct: 0,
                explanation: "Tracing records sequence of events (function calls, system calls) for understanding flow. Profiling aggregates time/resources for performance analysis. Different purposes.",
                learnMore: { url: "https://opentelemetry.io/docs/concepts/observability-primer/", text: "📚 Observability" }
            },
            {
                q: "What's time-travel debugging?",
                options: ["Record execution to replay and debug backwards", "Debug code from different time zones", "Travel back before bugs were introduced", "Schedule debugging for later time"],
                correct: 0,
                explanation: "Time-travel debugging records execution allowing replay forwards and backwards. Step back to see how state changed. Tools: rr (Linux), VS debugger (Windows).",
                learnMore: { url: "https://rr-project.org/", text: "📚 rr Project" }
            },
            {
                q: "How do you debug race conditions?",
                options: ["Add logging, use thread sanitizers, try to reproduce reliably", "Race conditions can't be debugged", "Just add more sleep statements", "Run the program faster"],
                correct: 0,
                explanation: "Race conditions are hard: add detailed logging with timestamps, use sanitizers (ThreadSanitizer), stress test to reproduce, review shared state access, use proper locks.",
                learnMore: { url: "https://clang.llvm.org/docs/ThreadSanitizer.html", text: "📚 Thread Sanitizer" }
            },
            {
                q: "What's distributed tracing?",
                options: ["Tracking requests across multiple services", "Distributing debug work across team", "Tracing code distribution to servers", "Distributed storage of trace logs"],
                correct: 0,
                explanation: "Distributed tracing tracks requests across microservices. Assigns trace ID propagated through calls. Shows latency breakdown, identifies slow services. Jaeger, Zipkin are tools.",
                learnMore: { url: "https://opentelemetry.io/docs/concepts/signals/traces/", text: "📚 Distributed Tracing" }
            },
        ]
    },

    'f-code-review': {
        1: [
            {
                q: "What is code review?",
                options: ["Examining code changes before merging", "Reviewing code performance metrics", "Reading code documentation only", "Automated code testing process"],
                correct: 0,
                explanation: "Code review is the process of examining code changes by someone other than the author before merging. Catches bugs, improves quality, shares knowledge.",
                learnMore: { url: "https://google.github.io/eng-practices/review/", text: "📚 Google Code Review" }
            },
            {
                q: "What's a pull request (PR)?",
                options: ["Request to merge branch changes into main", "Request to pull code from repository", "Request for help with coding", "Automated merge notification"],
                correct: 0,
                explanation: "A pull request is a request to merge changes from one branch into another. Platform for discussion, review, and approval before merging. GitHub/GitLab term.",
                learnMore: { url: "https://docs.github.com/en/pull-requests", text: "📚 GitHub PRs" }
            },
            {
                q: "Why is code review important?",
                options: ["Catches bugs, shares knowledge, ensures quality", "Only required by strict managers", "Slows down development intentionally", "Replaces need for testing"],
                correct: 0,
                explanation: "Code review catches bugs early, spreads knowledge across team, ensures code quality and consistency, mentors developers, and documents decisions.",
                learnMore: { url: "https://stackoverflow.blog/2019/09/30/how-to-make-good-code-reviews-better/", text: "📚 Good Code Reviews" }
            },
        ],
        2: [
            {
                q: "What should you look for in a code review?",
                options: ["Logic errors, style, security, readability", "Only syntax errors and typos", "Whether you like the code style", "How fast the author typed it"],
                correct: 0,
                explanation: "Review for: correctness, logic errors, edge cases, security issues, code style, readability, test coverage, documentation. Be thorough but constructive.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html", text: "📚 What to Look For" }
            },
            {
                q: "How should you give code review feedback?",
                options: ["Be constructive, specific, and suggest solutions", "Just say 'this is wrong' and reject", "Approve everything to be friendly", "Only point out the worst issues"],
                correct: 0,
                explanation: "Give specific, actionable feedback. Explain why something is problematic. Suggest alternatives. Be respectful - critique code not person. Acknowledge good work too.",
                learnMore: { url: "https://conventionalcomments.org/", text: "📚 Conventional Comments" }
            },
            {
                q: "How should you respond to code review feedback?",
                options: ["Consider feedback objectively and discuss if needed", "Argue against every comment made", "Accept all changes without thinking", "Ignore feedback you disagree with"],
                correct: 0,
                explanation: "Read feedback objectively, don't take it personally. Ask for clarification if unclear. Discuss disagreements respectfully. Thank reviewers for their time.",
                learnMore: { url: "https://google.github.io/eng-practices/review/developer/handling-comments.html", text: "📚 Handling Comments" }
            },
        ],
        3: [
            {
                q: "What's the ideal size for a pull request?",
                options: ["Small and focused on one change", "As large as possible for efficiency", "Exactly 500 lines of code", "One PR per sprint cycle"],
                correct: 0,
                explanation: "Small, focused PRs are easier to review thoroughly. Large PRs get rubber-stamped. Aim for <400 lines changed. Break large features into logical increments.",
                learnMore: { url: "https://google.github.io/eng-practices/review/developer/small-cls.html", text: "📚 Small CLs" }
            },
            {
                q: "What's nitpicking in code review?",
                options: ["Minor style comments that don't affect functionality", "Picking only the best nits to review", "Important security feedback always", "Performance optimization suggestions"],
                correct: 0,
                explanation: "Nitpicking focuses on minor style issues. Some nitpicks are valid (consistency), but too many distract from important issues. Mark optional vs required changes.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/pushback-pushback.html", text: "📚 Review Standards" }
            },
            {
                q: "What's a LGTM in code review?",
                options: ["Looks Good To Me - approval signal", "Let's Get This Merged immediately", "Look Gently Through My code", "Large Git Transaction Made"],
                correct: 0,
                explanation: "LGTM (Looks Good To Me) signals approval. Reviewer has examined the code and approves merging. Some teams require multiple LGTMs before merge.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/", text: "📚 Review Guidelines" }
            },
            {
                q: "When should you request changes vs approve with comments?",
                options: ["Request changes for issues that must be fixed", "Always request changes for any comment", "Never request changes to be friendly", "Request changes randomly for balance"],
                correct: 0,
                explanation: "Request changes for blocking issues (bugs, security, breaking changes). Approve with comments for optional improvements. Be clear about what's required vs suggested.",
                learnMore: { url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews", text: "📚 Required Reviews" }
            },
        ],
        4: [
            {
                q: "How do you review code in an unfamiliar codebase?",
                options: ["Read context, ask questions, focus on general principles", "Refuse to review unfamiliar code", "Approve without understanding it", "Only check if tests pass"],
                correct: 0,
                explanation: "Read surrounding code for context. Ask author to explain unfamiliar parts. Focus on general principles (logic, readability, security). Still catches many issues.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/navigate.html", text: "📚 Navigate a CL" }
            },
            {
                q: "What's the purpose of review checklists?",
                options: ["Ensure consistent, thorough reviews", "Make reviews take longer intentionally", "Replace actual code examination", "Track reviewer productivity metrics"],
                correct: 0,
                explanation: "Checklists ensure reviewers check important areas consistently: tests, security, documentation, error handling. Helps new reviewers learn what to check.",
                learnMore: { url: "https://www.michaelagreiler.com/code-review-checklist/", text: "📚 Review Checklist" }
            },
            {
                q: "How do you handle disagreements in code review?",
                options: ["Discuss objectively, escalate if stuck, respect decisions", "Author always wins the argument", "Reviewer always has final say", "Just merge and fix issues later"],
                correct: 0,
                explanation: "Discuss technical merits objectively. If stuck, involve third party or tech lead. Once decided, accept the decision. Document rationale for future reference.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/pushback-pushback.html", text: "📚 Resolving Conflicts" }
            },
            {
                q: "What's pair programming vs code review?",
                options: ["Pair: real-time collaboration; Review: async examination", "They're the same thing exactly", "Pair is better than review always", "Review replaces pair programming"],
                correct: 0,
                explanation: "Pair programming is synchronous: two developers work together real-time. Code review is asynchronous: examination after code is written. Both valuable, different tradeoffs.",
                learnMore: { url: "https://martinfowler.com/articles/on-pair-programming.html", text: "📚 Pair Programming" }
            },
        ],
        5: [
            {
                q: "How do you review performance-critical code?",
                options: ["Check algorithms, measure, consider edge cases and scale", "Assume the author tested performance", "Only review if there are benchmarks", "Performance can't be reviewed effectively"],
                correct: 0,
                explanation: "Review algorithm complexity, check benchmarks, consider scale and edge cases, look for common issues (N+1 queries, unnecessary work). Request profiling data if needed.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html#performance", text: "📚 Performance Review" }
            },
            {
                q: "How do you review security-sensitive code?",
                options: ["Check auth, input validation, injection, data exposure", "Trust that security team will review", "Security is automatic if tests pass", "Only specialists can review security"],
                correct: 0,
                explanation: "Check authentication/authorization, input validation, injection vulnerabilities, sensitive data handling, crypto usage. Everyone can catch common issues. Involve security team for high-risk.",
                learnMore: { url: "https://owasp.org/www-project-code-review-guide/", text: "📚 OWASP Review Guide" }
            },
            {
                q: "What metrics indicate code review effectiveness?",
                options: ["Defects found, review time, review coverage, knowledge spread", "Only number of PRs reviewed matters", "Lines of code reviewed per hour", "Zero metrics needed for reviews"],
                correct: 0,
                explanation: "Track: defects found in review vs production, time to review, coverage (% reviewed), knowledge sharing (who reviews what). Balance speed with thoroughness.",
                learnMore: { url: "https://www.pluralsight.com/blog/tutorials/code-review-best-practices", text: "📚 Review Metrics" }
            },
            {
                q: "How do you maintain code review quality at scale?",
                options: ["Automate checks, use CODEOWNERS, train reviewers, set SLAs", "Just add more reviewers to projects", "Remove code review when team grows", "Only senior developers should review"],
                correct: 0,
                explanation: "Use linters and static analysis to automate style/security checks. CODEOWNERS assign experts. Train new reviewers. Set review SLAs. Keep PRs small.",
                learnMore: { url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners", text: "📚 CODEOWNERS" }
            },
            {
                q: "What's the reviewer's responsibility for correctness?",
                options: ["Share responsibility with author but not full ownership", "100% responsible for all bugs after LGTM", "Zero responsibility - author owns all bugs", "Only responsible for style issues"],
                correct: 0,
                explanation: "Reviewers share responsibility for code quality but authors remain primarily responsible. Review is safety net, not replacement for author testing. Review what you can in reasonable time.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/standard.html", text: "📚 Review Standard" }
            },
        ]
    },

    'f-refactoring': {
        1: [
            {
                q: "What is refactoring?",
                options: ["Restructuring code without changing behavior", "Rewriting code from scratch completely", "Fixing bugs in existing code", "Adding new features to code"],
                correct: 0,
                explanation: "Refactoring improves code structure without changing external behavior. Makes code more readable, maintainable, or efficient. Tests ensure behavior unchanged.",
                learnMore: { url: "https://refactoring.com/", text: "📚 Refactoring.com" }
            },
            {
                q: "Why refactor code?",
                options: ["Improve readability, reduce complexity, ease maintenance", "Just to make code look different", "Because managers require it quarterly", "To increase lines of code count"],
                correct: 0,
                explanation: "Refactoring improves code quality: easier to understand, modify, and maintain. Reduces technical debt. Makes future changes faster and safer.",
                learnMore: { url: "https://martinfowler.com/books/refactoring.html", text: "📚 Refactoring Book" }
            },
            {
                q: "When should you refactor?",
                options: ["When code is hard to understand or modify", "Only when explicitly told to refactor", "Whenever you touch any code at all", "Never, original code is always best"],
                correct: 0,
                explanation: "Refactor when: adding features (make changes easier), fixing bugs (understand code better), code review (improve clarity). Small continuous refactoring beats big rewrites.",
                learnMore: { url: "https://martinfowler.com/bliki/OpportunisticRefactoring.html", text: "📚 Opportunistic Refactoring" }
            },
        ],
        2: [
            {
                q: "What's extract function refactoring?",
                options: ["Pull code into new named function", "Remove a function from codebase", "Extract function to external file", "Document what function does"],
                correct: 0,
                explanation: "Extract function moves code block into new named function. Reduces complexity, names the operation, enables reuse. One of most common refactorings.",
                learnMore: { url: "https://refactoring.guru/extract-method", text: "📚 Extract Method" }
            },
            {
                q: "What's a code smell?",
                options: ["Indicator of potential problems in code", "Compiler error from bad code", "Bug that affects runtime behavior", "Code that has syntax errors"],
                correct: 0,
                explanation: "Code smells are patterns indicating deeper problems: long methods, duplicate code, god classes. Not bugs, but make code harder to maintain. Refactoring addresses them.",
                learnMore: { url: "https://refactoring.guru/refactoring/smells", text: "📚 Code Smells" }
            },
            {
                q: "What's rename refactoring?",
                options: ["Give clearer names to variables, functions, classes", "Rename files in the project", "Rename the project itself", "Remove names from code entirely"],
                correct: 0,
                explanation: "Rename improves names of identifiers (variables, functions, classes). Good names are crucial for readability. IDEs can rename safely across codebase.",
                learnMore: { url: "https://refactoring.guru/rename-method", text: "📚 Rename Method" }
            },
        ],
        3: [
            {
                q: "What's DRY (Don't Repeat Yourself)?",
                options: ["Avoid duplicating knowledge in code", "Delete redundant YAML files", "Dry run tests before committing", "Documentation review yearly"],
                correct: 0,
                explanation: "DRY means every piece of knowledge should have single authoritative representation. Duplicated code is harder to maintain - change in one place misses others.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself", text: "📚 DRY Principle" }
            },
            {
                q: "What's the 'rule of three' for duplication?",
                options: ["Refactor when you see something three times", "Maximum three lines per function", "Three developers must review code", "Code runs three times faster"],
                correct: 0,
                explanation: "Rule of three: first time write it, second time wince at duplication, third time refactor. Avoids premature abstraction while still eliminating real duplication.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)", text: "📚 Rule of Three" }
            },
            {
                q: "What's inline refactoring?",
                options: ["Replace function call with function body", "Add inline comments to code", "Inline CSS in HTML elements", "Put all code on one line"],
                correct: 0,
                explanation: "Inline replaces function call with its body, then deletes function. Useful when function no longer pulls its weight - name doesn't add clarity, or only one caller.",
                learnMore: { url: "https://refactoring.guru/inline-method", text: "📚 Inline Method" }
            },
            {
                q: "What's extract variable refactoring?",
                options: ["Name a complex expression with variable", "Remove variables from code", "Extract variables to config file", "Variable extraction optimization"],
                correct: 0,
                explanation: "Extract variable gives a name to a complex expression. Makes code self-documenting. Can also enable reuse if same expression used multiple times.",
                learnMore: { url: "https://refactoring.guru/extract-variable", text: "📚 Extract Variable" }
            },
        ],
        4: [
            {
                q: "What's the strangler fig pattern?",
                options: ["Gradually replace old system with new", "Kill old code immediately always", "Strange code patterns to avoid", "Fig tree data structure pattern"],
                correct: 0,
                explanation: "Strangler fig gradually replaces old system by building new around it. Route increasing traffic to new system. Eventually old system dies. Safer than big-bang rewrite.",
                learnMore: { url: "https://martinfowler.com/bliki/StranglerFigApplication.html", text: "📚 Strangler Fig" }
            },
            {
                q: "What's move method refactoring?",
                options: ["Move method to class that uses it most", "Move method up in the file", "Move method to separate file", "Rename method with move prefix"],
                correct: 0,
                explanation: "Move method relocates method to class where it makes more sense - usually the class whose data it uses most. Improves cohesion and reduces coupling.",
                learnMore: { url: "https://refactoring.guru/move-method", text: "📚 Move Method" }
            },
            {
                q: "How do you safely refactor?",
                options: ["Have tests, make small changes, commit frequently", "Refactor everything at once for speed", "Skip tests since behavior unchanged", "Only refactor on weekends alone"],
                correct: 0,
                explanation: "Safe refactoring: comprehensive test coverage first, small incremental changes, run tests after each change, commit frequently. Revert if tests fail.",
                learnMore: { url: "https://martinfowler.com/books/refactoring.html", text: "📚 Safe Refactoring" }
            },
            {
                q: "What's feature envy code smell?",
                options: ["Method uses another class's data more than its own", "Envying features in other languages", "Feature requests from users", "Envy between team members"],
                correct: 0,
                explanation: "Feature envy: method seems more interested in another class's data than its own. Solution: move the method to the class whose data it uses most.",
                learnMore: { url: "https://refactoring.guru/smells/feature-envy", text: "📚 Feature Envy" }
            },
        ],
        5: [
            {
                q: "What's the difference between refactoring and rewriting?",
                options: ["Refactoring is incremental; rewriting is from scratch", "They're the same thing basically", "Rewriting is always better approach", "Refactoring only changes comments"],
                correct: 0,
                explanation: "Refactoring: incremental improvement keeping system working. Rewriting: starting from scratch. Refactoring is safer, maintains working software. Rewrites often fail.",
                learnMore: { url: "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/", text: "📚 Joel on Rewrites" }
            },
            {
                q: "What's primitive obsession code smell?",
                options: ["Using primitives instead of domain objects", "Obsessing over optimization prematurely", "Primitive loops instead of iterators", "Basic coding skills obsession"],
                correct: 0,
                explanation: "Primitive obsession uses primitives (strings, ints) for domain concepts. Example: phone number as string. Solution: create small classes for domain concepts.",
                learnMore: { url: "https://refactoring.guru/smells/primitive-obsession", text: "📚 Primitive Obsession" }
            },
            {
                q: "How do you refactor legacy code without tests?",
                options: ["Add characterization tests first, then refactor", "Just refactor carefully by reading code", "Legacy code cannot be refactored safely", "Delete legacy code and rewrite it"],
                correct: 0,
                explanation: "Add characterization tests that capture current behavior (even if buggy). Then refactor with safety net. 'Working Effectively with Legacy Code' covers techniques.",
                learnMore: { url: "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052", text: "📚 Legacy Code Book" }
            },
            {
                q: "What's shotgun surgery code smell?",
                options: ["Single change requires modifying many classes", "Quick surgical fixes to code", "Random changes across codebase", "Surgery on database schema"],
                correct: 0,
                explanation: "Shotgun surgery: one logical change requires modifying many classes. Indicates scattered responsibility. Solution: move related code together into single class.",
                learnMore: { url: "https://refactoring.guru/smells/shotgun-surgery", text: "📚 Shotgun Surgery" }
            },
            {
                q: "What's the 'boy scout rule' in refactoring?",
                options: ["Leave code cleaner than you found it", "Code must be reviewed by scouts", "Only scouts can refactor code", "Camping metaphor for code structure"],
                correct: 0,
                explanation: "Boy scout rule: always leave code better than you found it. Make small improvements when you touch code. Continuous small improvements beat big refactoring projects.",
                learnMore: { url: "https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html", text: "📚 Boy Scout Rule" }
            },
        ]
    },

    'f-documentation': {
        1: [
            {
                q: "Why is documentation important?",
                options: ["Helps others understand and use the code", "Only required for public projects", "Slows down development always", "Compilers need it to run code"],
                correct: 0,
                explanation: "Documentation helps others (and future you) understand, use, and maintain code. Reduces onboarding time, prevents misuse, captures decisions.",
                learnMore: { url: "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/", text: "📚 Beginner's Guide" }
            },
            {
                q: "What should a README file contain?",
                options: ["Project description, setup instructions, usage examples", "Complete source code listing", "Only the project name and author", "Marketing materials for the project"],
                correct: 0,
                explanation: "README should include: project description, installation instructions, usage examples, contribution guidelines, license. First thing visitors see.",
                learnMore: { url: "https://www.makeareadme.com/", text: "📚 Make a README" }
            },
            {
                q: "What are inline code comments for?",
                options: ["Explain why code does something non-obvious", "Describe what every line does", "Replace good variable names", "Make code look more professional"],
                correct: 0,
                explanation: "Comments explain 'why' not 'what'. Code shows what; comments explain non-obvious reasoning, workarounds, gotchas. Don't repeat what code clearly shows.",
                learnMore: { url: "https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/", text: "📚 Comment Best Practices" }
            },
        ],
        2: [
            {
                q: "What's a docstring?",
                options: ["Documentation string embedded in code", "Document version string identifier", "String for documenting documents", "Documentation in string format only"],
                correct: 0,
                explanation: "Docstrings are documentation embedded in code (Python, JavaScript). Describe function purpose, parameters, return value. Tools can extract them for API docs.",
                learnMore: { url: "https://peps.python.org/pep-0257/", text: "📚 PEP 257 Docstrings" }
            },
            {
                q: "What's API documentation?",
                options: ["Description of how to use an API", "Automatic programming interface", "API deployment instructions", "Application process index"],
                correct: 0,
                explanation: "API documentation describes endpoints, parameters, responses, authentication. Essential for API consumers. Tools: Swagger/OpenAPI, Postman, ReadMe.",
                learnMore: { url: "https://swagger.io/specification/", text: "📚 OpenAPI Spec" }
            },
            {
                q: "What's the difference between comments and documentation?",
                options: ["Comments in code; documentation external or generated", "They're exactly the same thing", "Comments are wrong; documentation correct", "Documentation is only for users"],
                correct: 0,
                explanation: "Comments are inline notes for developers reading code. Documentation is user-facing guides, API docs, tutorials. Some overlap (docstrings become API docs).",
                learnMore: { url: "https://www.writethedocs.org/", text: "📚 Write the Docs" }
            },
        ],
        3: [
            {
                q: "What's docs-as-code?",
                options: ["Treat documentation like code: version control, review, CI", "Code that generates documentation automatically", "Documentation written in code comments only", "Coding documentation websites from scratch"],
                correct: 0,
                explanation: "Docs-as-code treats docs like software: store in version control, review changes, use CI to build/deploy. Markdown, static site generators, automated checks.",
                learnMore: { url: "https://www.writethedocs.org/guide/docs-as-code/", text: "📚 Docs as Code" }
            },
            {
                q: "What's an ADR (Architecture Decision Record)?",
                options: ["Document recording architecture decisions and rationale", "Automatic documentation record", "API development record", "Application deployment record"],
                correct: 0,
                explanation: "ADRs document significant architecture decisions: context, decision, consequences. Captures 'why' for future reference. Helps new team members understand history.",
                learnMore: { url: "https://adr.github.io/", text: "📚 ADR GitHub" }
            },
            {
                q: "What's JSDoc/TSDoc?",
                options: ["Documentation format for JavaScript/TypeScript", "JSON documentation standard", "Java Server Document format", "TypeScript Document compiler"],
                correct: 0,
                explanation: "JSDoc/TSDoc are documentation standards for JavaScript/TypeScript. Special comments describe functions, parameters, types. IDEs use for intellisense, tools generate docs.",
                learnMore: { url: "https://jsdoc.app/", text: "📚 JSDoc" }
            },
            {
                q: "What's a changelog?",
                options: ["Log of notable changes in each release", "Log of all code changes in git", "Log of database schema changes", "Log of server configuration changes"],
                correct: 0,
                explanation: "Changelog documents notable changes for each release: new features, bug fixes, breaking changes. Human-readable summary (not raw git log). Follows conventions.",
                learnMore: { url: "https://keepachangelog.com/", text: "📚 Keep a Changelog" }
            },
        ],
        4: [
            {
                q: "What makes documentation effective?",
                options: ["Clear, accurate, up-to-date, well-organized", "As long as possible with every detail", "Written by separate documentation team", "Generated automatically without review"],
                correct: 0,
                explanation: "Effective docs are: accurate (matches reality), clear (understandable), current (updated with code), organized (easy to navigate), appropriate (right level of detail).",
                learnMore: { url: "https://developers.google.com/style", text: "📚 Google Developer Style" }
            },
            {
                q: "What's Diátaxis documentation framework?",
                options: ["Four types: tutorials, how-to, reference, explanation", "Diagnostic axis for documentation issues", "Database diagram axis system", "Dialect for documentation languages"],
                correct: 0,
                explanation: "Diátaxis defines four doc types: tutorials (learning-oriented), how-to guides (goal-oriented), reference (information-oriented), explanation (understanding-oriented).",
                learnMore: { url: "https://diataxis.fr/", text: "📚 Diátaxis" }
            },
            {
                q: "How do you keep documentation up to date?",
                options: ["Automate generation, review with code changes, test docs", "Documentation will naturally stay current", "Update only during major releases", "Assign one person to update everything"],
                correct: 0,
                explanation: "Keep docs current: generate from code where possible, review docs in PRs, test examples automatically, schedule doc reviews, make updating easy.",
                learnMore: { url: "https://www.writethedocs.org/guide/docs-as-code/", text: "📚 Docs Automation" }
            },
            {
                q: "What's a runbook?",
                options: ["Procedures for handling operational tasks", "Book about running the application", "Running list of documentation", "Marathon training documentation"],
                correct: 0,
                explanation: "Runbook documents operational procedures: how to deploy, handle incidents, perform maintenance. Step-by-step instructions for on-call engineers.",
                learnMore: { url: "https://www.atlassian.com/incident-management/kpis/runbooks", text: "📚 Runbooks" }
            },
        ],
        5: [
            {
                q: "What's documentation testing?",
                options: ["Verify code examples in docs actually work", "Testing documentation grammar", "Testing how fast docs load", "A/B testing documentation layouts"],
                correct: 0,
                explanation: "Documentation testing extracts and runs code examples to ensure they work. Tools: doctest (Python), rustdoc (Rust). Prevents examples from becoming outdated.",
                learnMore: { url: "https://docs.python.org/3/library/doctest.html", text: "📚 Python doctest" }
            },
            {
                q: "What's technical writing best practice for developers?",
                options: ["Be concise, use active voice, provide examples", "Use as much jargon as possible", "Write very long detailed paragraphs", "Avoid all code examples in text"],
                correct: 0,
                explanation: "Good technical writing: active voice, concise sentences, code examples, consistent terminology, good structure, appropriate audience level. Skip unnecessary words.",
                learnMore: { url: "https://developers.google.com/tech-writing/one", text: "📚 Tech Writing Course" }
            },
            {
                q: "How do you document a REST API effectively?",
                options: ["OpenAPI spec with examples, authentication, error codes", "Just list the endpoint URLs available", "Only document the happy path flows", "Let users figure it out from code"],
                correct: 0,
                explanation: "REST API docs need: endpoints with methods, request/response schemas, authentication, error codes, rate limits, examples. OpenAPI spec enables tools and testing.",
                learnMore: { url: "https://learn.openapis.org/", text: "📚 Learn OpenAPI" }
            },
            {
                q: "What's the role of examples in documentation?",
                options: ["Show practical usage that readers can adapt", "Fill space to make docs look complete", "Examples are optional bonus content", "Replace need for explanatory text"],
                correct: 0,
                explanation: "Examples show practical usage. Good examples: realistic scenarios, copy-paste ready, cover common cases, progress from simple to complex. Often most-read section.",
                learnMore: { url: "https://developers.google.com/style/examples", text: "📚 Writing Examples" }
            },
            {
                q: "What's information architecture in documentation?",
                options: ["Organizing and structuring documentation for findability", "Building documentation website architecture", "Architecture documentation diagrams", "Information about software architecture"],
                correct: 0,
                explanation: "Information architecture organizes docs for discoverability: navigation structure, categories, search, cross-linking. Good IA helps users find what they need quickly.",
                learnMore: { url: "https://www.nngroup.com/articles/ia-vs-navigation/", text: "📚 IA vs Navigation" }
            },
        ]
    },

    'f-build-systems': {
        1: [
            {
                q: "What is a build system?",
                options: ["Tool that automates compiling and packaging code", "System for building physical servers", "Blueprint for application architecture", "Team structure for development"],
                correct: 0,
                explanation: "Build systems automate transforming source code into deployable artifacts: compiling, bundling, minifying, running tests. Examples: npm, webpack, make, gradle.",
                learnMore: { url: "https://vitejs.dev/guide/why.html", text: "📚 Why Vite" }
            },
            {
                q: "What's npm used for?",
                options: ["JavaScript package manager and script runner", "New project manager tool", "Network protocol manager", "Node performance monitor"],
                correct: 0,
                explanation: "npm (Node Package Manager) installs JavaScript dependencies, manages package.json, runs scripts defined in package.json. Standard tool for JavaScript projects.",
                learnMore: { url: "https://docs.npmjs.com/", text: "📚 npm Documentation" }
            },
            {
                q: "What's pip in Python?",
                options: ["Package installer for Python", "Python interface protocol", "Performance improvement program", "Python internal parser"],
                correct: 0,
                explanation: "pip installs Python packages from PyPI (Python Package Index). Used to install dependencies listed in requirements.txt or pyproject.toml.",
                learnMore: { url: "https://pip.pypa.io/en/stable/", text: "📚 pip Documentation" }
            },
        ],
        2: [
            {
                q: "What's a bundler in web development?",
                options: ["Combines multiple files into optimized bundles", "Bundles user data for analytics", "Groups developers into teams", "Packs files for shipping to users"],
                correct: 0,
                explanation: "Bundlers combine JavaScript modules, CSS, assets into optimized bundles for browser. Tree-shake unused code, minify, split chunks. Examples: webpack, Vite, esbuild.",
                learnMore: { url: "https://vitejs.dev/guide/", text: "📚 Vite Guide" }
            },
            {
                q: "What's the purpose of package.json?",
                options: ["Define project metadata, dependencies, and scripts", "Package JSON data for transmission", "Configure JSON parsing settings", "List of JSON files in project"],
                correct: 0,
                explanation: "package.json defines: project name/version, dependencies (runtime and dev), scripts (build, test), configuration for tools. Central config for JavaScript projects.",
                learnMore: { url: "https://docs.npmjs.com/cli/v9/configuring-npm/package-json", text: "📚 package.json" }
            },
            {
                q: "What's a lockfile (package-lock.json)?",
                options: ["Exact dependency versions for reproducible installs", "Lock project from unauthorized access", "File that locks during npm install", "Configuration to lock package versions"],
                correct: 0,
                explanation: "Lockfiles record exact versions of all dependencies (including transitive). Ensures everyone installs identical versions. Commit to version control.",
                learnMore: { url: "https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json", text: "📚 package-lock.json" }
            },
        ],
        3: [
            {
                q: "What's hot module replacement (HMR)?",
                options: ["Update modules in browser without full reload", "Replacing failed hardware modules quickly", "Hot swapping code in production", "Module replacement during migration"],
                correct: 0,
                explanation: "HMR updates changed modules in browser without full page reload. Preserves application state. Dramatically speeds up development. Vite, webpack provide HMR.",
                learnMore: { url: "https://vitejs.dev/guide/features.html#hot-module-replacement", text: "📚 Vite HMR" }
            },
            {
                q: "What's tree shaking?",
                options: ["Remove unused code from bundle", "Restructure code into tree format", "Shake tests to find failures", "Random code removal for testing"],
                correct: 0,
                explanation: "Tree shaking eliminates unused exports from bundle. Bundler analyzes imports and removes dead code. Requires ES modules (import/export). Reduces bundle size.",
                learnMore: { url: "https://webpack.js.org/guides/tree-shaking/", text: "📚 Tree Shaking" }
            },
            {
                q: "What's the difference between devDependencies and dependencies?",
                options: ["devDeps for development only; deps for production runtime", "They're exactly the same thing", "devDeps are optional extras", "Dependencies are for development"],
                correct: 0,
                explanation: "dependencies needed at runtime (React, lodash). devDependencies for development only (testing, building) - not included in production bundle. Affects install with --production.",
                learnMore: { url: "https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file", text: "📚 npm Dependencies" }
            },
            {
                q: "What's minification?",
                options: ["Shrink code by removing whitespace, renaming variables", "Making code more readable with formatting", "Finding minimum code to fix bugs", "Minimizing number of dependencies"],
                correct: 0,
                explanation: "Minification reduces code size: remove whitespace/comments, shorten variable names, optimize code. Faster downloads, faster parsing. Tools: terser, esbuild.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Glossary/Minification", text: "📚 Minification" }
            },
        ],
        4: [
            {
                q: "What's code splitting?",
                options: ["Divide code into chunks loaded on demand", "Split code between multiple developers", "Separate code into different repositories", "Split long functions into smaller ones"],
                correct: 0,
                explanation: "Code splitting divides bundle into chunks loaded when needed. Initial bundle is smaller, additional code loads on navigation/interaction. Improves time to interactive.",
                learnMore: { url: "https://vitejs.dev/guide/features.html#async-chunk-loading-optimization", text: "📚 Vite Code Splitting" }
            },
            {
                q: "What's uv in Python?",
                options: ["Fast Python package installer written in Rust", "Ultraviolet testing framework", "Universal version manager", "Unified virtual environment tool"],
                correct: 0,
                explanation: "uv is a fast Python package installer and resolver written in Rust. Drop-in replacement for pip and pip-tools. 10-100x faster than pip for many operations.",
                learnMore: { url: "https://github.com/astral-sh/uv", text: "📚 uv" }
            },
            {
                q: "What's a monorepo?",
                options: ["Single repository containing multiple projects", "Repository with single project only", "Monitor repository for changes", "Monopoly over code repositories"],
                correct: 0,
                explanation: "Monorepo contains multiple projects/packages in one repository. Shared tooling, atomic changes across projects, simplified dependencies. Tools: Nx, Turborepo, Lerna.",
                learnMore: { url: "https://monorepo.tools/", text: "📚 Monorepo Tools" }
            },
            {
                q: "What's a virtual environment in Python?",
                options: ["Isolated Python installation for project dependencies", "Virtual reality Python programming", "Environment for testing in VMs", "Simulated Python interpreter"],
                correct: 0,
                explanation: "Virtual environment isolates project dependencies from system Python and other projects. Each project has own packages. Created with venv, managed by pip or uv.",
                learnMore: { url: "https://docs.python.org/3/library/venv.html", text: "📚 Python venv" }
            },
        ],
        5: [
            {
                q: "What's incremental build?",
                options: ["Only rebuild changed parts", "Build in small increments over time", "Add features incrementally to build", "Small increases in build performance"],
                correct: 0,
                explanation: "Incremental build only recompiles changed files and their dependents. Dramatically faster than full rebuild. Requires tracking dependencies between files.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/project-references.html", text: "📚 TS Incremental" }
            },
            {
                q: "What's build caching?",
                options: ["Store build outputs to avoid redundant work", "Cache for storing built applications", "Caching user builds for deployment", "Build artifacts in browser cache"],
                correct: 0,
                explanation: "Build caching stores intermediate outputs. If inputs unchanged, use cached output. Local and remote caching possible. Tools: Nx, Turborepo, Gradle have built-in caching.",
                learnMore: { url: "https://turbo.build/repo/docs/core-concepts/caching", text: "📚 Turborepo Caching" }
            },
            {
                q: "What's artifact management?",
                options: ["Store and version build outputs for deployment", "Managing artistic elements in UI", "Artifact collection in archaeology", "Version control for binary files"],
                correct: 0,
                explanation: "Artifact management stores versioned build outputs: Docker images, packages, binaries. Enables reproducible deployments. Tools: Docker Hub, npm registry, Artifactory.",
                learnMore: { url: "https://docs.github.com/en/packages", text: "📚 GitHub Packages" }
            },
            {
                q: "What's the difference between build and compile?",
                options: ["Build is broader: compile plus test, bundle, package", "They mean exactly the same thing", "Compile is broader than building", "Build is for web, compile for apps"],
                correct: 0,
                explanation: "Compiling translates source to machine/intermediate code. Building includes compiling plus: running tests, bundling, generating docs, packaging for distribution.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Software_build", text: "📚 Software Build" }
            },
            {
                q: "What's reproducible builds?",
                options: ["Same source always produces bit-identical output", "Building the same feature multiple times", "Reproducing bugs in build process", "Copy-paste builds between projects"],
                correct: 0,
                explanation: "Reproducible builds: given same source, tools, and environment, output is bit-for-bit identical. Important for security (verify builds), debugging, compliance.",
                learnMore: { url: "https://reproducible-builds.org/", text: "📚 Reproducible Builds" }
            },
        ]
    },

    'f-linux': {
        1: [
            {
                q: "What is Linux?",
                options: ["Open-source operating system kernel", "A type of web browser", "Programming language from Linus", "Microsoft's server software"],
                correct: 0,
                explanation: "Linux is an open-source OS kernel. Combined with GNU tools and other software, forms complete operating systems (distributions). Powers most servers, Android, embedded devices.",
                learnMore: { url: "https://www.linux.org/", text: "📚 Linux.org" }
            },
            {
                q: "What's a Linux distribution?",
                options: ["Complete OS built on Linux kernel", "Method of distributing Linux code", "Linux kernel version number", "Distribution of Linux users globally"],
                correct: 0,
                explanation: "A distribution (distro) packages Linux kernel with software, package manager, desktop environment. Examples: Ubuntu, Debian, Fedora, CentOS. Different distros suit different needs.",
                learnMore: { url: "https://distrowatch.com/", text: "📚 DistroWatch" }
            },
            {
                q: "What's the root user in Linux?",
                options: ["Administrator with full system access", "First user created on the system", "User in the root directory", "Default login username always"],
                correct: 0,
                explanation: "Root is the superuser with unrestricted access to everything. Can modify any file, install software, change system settings. Use with caution; prefer sudo for admin tasks.",
                learnMore: { url: "https://www.linux.com/training-tutorials/linux-101-root-and-sudo/", text: "📚 Root and Sudo" }
            },
        ],
        2: [
            {
                q: "What's systemd?",
                options: ["Init system and service manager for Linux", "System daemon for memory management", "Security daemon for authentication", "Storage daemon for disk access"],
                correct: 0,
                explanation: "systemd is Linux's init system - first process started. Manages services (start, stop, restart), handles logging (journald), mounts filesystems, and more.",
                learnMore: { url: "https://www.freedesktop.org/wiki/Software/systemd/", text: "📚 systemd" }
            },
            {
                q: "What does 'chmod 755' do?",
                options: ["Set file permissions: owner all, group/others read+execute", "Change file modification date to 755", "Move file to directory 755", "Set file mode to compression level"],
                correct: 0,
                explanation: "chmod 755 sets permissions: owner can read/write/execute (7), group and others can read/execute (5). Common for scripts and executables that should be readable by all.",
                learnMore: { url: "https://www.geeksforgeeks.org/chmod-command-linux/", text: "📚 chmod" }
            },
            {
                q: "What's the purpose of /etc directory?",
                options: ["Store system configuration files", "Temporary files and caches", "User home directories location", "Executable binary programs"],
                correct: 0,
                explanation: "/etc contains system-wide configuration files. Examples: /etc/passwd (users), /etc/hosts (hostname mapping), /etc/nginx/ (nginx config). 'Editable Text Configuration'.",
                learnMore: { url: "https://www.pathname.com/fhs/pub/fhs-2.3.html#ETCHOSTSPECIFICSYSTEMCONFIGURATION", text: "📚 Filesystem Hierarchy" }
            },
        ],
        3: [
            {
                q: "How do you manage services with systemctl?",
                options: ["systemctl start/stop/restart/status service-name", "systemctl run service-name now", "systemctl execute service-name", "services start service-name"],
                correct: 0,
                explanation: "systemctl controls systemd services: start (begin), stop (end), restart (stop then start), status (check state), enable (start on boot), disable (don't start on boot).",
                learnMore: { url: "https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units", text: "📚 systemctl Tutorial" }
            },
            {
                q: "What's SSH used for?",
                options: ["Secure remote login to systems", "Super-fast shell for local use", "System shell hardware access", "Secure storage hosting only"],
                correct: 0,
                explanation: "SSH (Secure Shell) enables encrypted remote login and command execution. Used to manage servers, transfer files (scp, sftp), tunnel connections. Key-based auth preferred.",
                learnMore: { url: "https://www.ssh.com/academy/ssh", text: "📚 SSH Academy" }
            },
            {
                q: "What's a process in Linux?",
                options: ["Running instance of a program", "Method of processing files", "Linux installation procedure", "Processing unit of the CPU"],
                correct: 0,
                explanation: "A process is a running program instance with its own memory space, PID (process ID), and resources. View with ps, htop. Kill with kill PID. Parent-child relationships.",
                learnMore: { url: "https://www.geeksforgeeks.org/processes-in-linuxunix/", text: "📚 Linux Processes" }
            },
            {
                q: "What's the difference between apt and yum?",
                options: ["Package managers for different distro families", "apt is newer version of yum tool", "yum is for servers, apt for desktops", "No difference, just different names"],
                correct: 0,
                explanation: "apt is Debian/Ubuntu package manager. yum/dnf is Red Hat/CentOS/Fedora package manager. Different commands, different package formats (.deb vs .rpm).",
                learnMore: { url: "https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg", text: "📚 Package Management" }
            },
        ],
        4: [
            {
                q: "What are Linux file permissions?",
                options: ["Read, write, execute for owner/group/others", "Open, close, save permissions only", "Create, delete, move permissions", "Admin, user, guest access levels"],
                correct: 0,
                explanation: "Linux permissions: read (r), write (w), execute (x) for three categories: owner, group, others. Shown as rwxrwxrwx or numeric (755). ls -l displays them.",
                learnMore: { url: "https://www.redhat.com/sysadmin/linux-file-permissions-explained", text: "📚 File Permissions" }
            },
            {
                q: "What's cron used for?",
                options: ["Schedule recurring tasks to run automatically", "Chronological logging of events", "System boot time measurement", "CPU core management utility"],
                correct: 0,
                explanation: "cron schedules recurring jobs. crontab defines schedule (minute, hour, day, month, weekday) and command. Used for backups, cleanup, reports. systemd timers are alternative.",
                learnMore: { url: "https://crontab.guru/", text: "📚 Crontab Guru" }
            },
            {
                q: "What's /var/log used for?",
                options: ["System and application log files", "Variable configuration files", "Logical volume management", "Version archive storage"],
                correct: 0,
                explanation: "/var/log stores log files: syslog, auth.log, application logs. Essential for troubleshooting. Use journalctl for systemd logs, or tail/less for traditional logs.",
                learnMore: { url: "https://www.loggly.com/ultimate-guide/linux-logging-basics/", text: "📚 Linux Logging" }
            },
            {
                q: "What's iptables/nftables?",
                options: ["Linux firewall for filtering network traffic", "Table management for databases", "IP address lookup tables", "Network testing utilities"],
                correct: 0,
                explanation: "iptables/nftables are Linux firewall tools. Filter incoming/outgoing packets by rules. Define chains of rules for ACCEPT, DROP, REJECT. nftables is newer replacement.",
                learnMore: { url: "https://wiki.nftables.org/", text: "📚 nftables" }
            },
        ],
        5: [
            {
                q: "What's LVM (Logical Volume Manager)?",
                options: ["Flexible disk space management abstraction layer", "Linux virtual machine manager", "Log volume monitoring system", "Local version management tool"],
                correct: 0,
                explanation: "LVM adds abstraction layer over physical disks. Create, resize, move logical volumes without downtime. Snapshots for backups. More flexible than partitions.",
                learnMore: { url: "https://www.redhat.com/sysadmin/lvm-vs-partitioning", text: "📚 LVM Guide" }
            },
            {
                q: "What are namespaces in Linux?",
                options: ["Kernel feature for resource isolation", "Naming convention for variables", "Directory naming system only", "User namespace for DNS lookups"],
                correct: 0,
                explanation: "Namespaces isolate system resources: PID, network, mount, user, etc. Foundation of containers. Each namespace has its own view of resources.",
                learnMore: { url: "https://man7.org/linux/man-pages/man7/namespaces.7.html", text: "📚 Namespaces" }
            },
            {
                q: "What are cgroups?",
                options: ["Limit and account for resource usage", "Control groups for user permissions", "CPU grouping for multiprocessing", "Configuration groups for services"],
                correct: 0,
                explanation: "cgroups (control groups) limit, account, and isolate resource usage (CPU, memory, I/O). Used by containers and systemd to manage resource allocation.",
                learnMore: { url: "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html", text: "📚 cgroups v2" }
            },
            {
                q: "What's SELinux?",
                options: ["Mandatory access control security system", "Secure execution Linux environment", "Southeast Linux distribution variant", "Serial Linux communication protocol"],
                correct: 0,
                explanation: "SELinux (Security-Enhanced Linux) provides mandatory access control. Restricts what processes can access based on policy, beyond standard permissions. Complex but powerful.",
                learnMore: { url: "https://www.redhat.com/en/topics/linux/what-is-selinux", text: "📚 SELinux" }
            },
            {
                q: "What's strace used for?",
                options: ["Trace system calls made by programs", "Trace network packets in stack", "String tracing in source code", "Storage tracing for disk I/O"],
                correct: 0,
                explanation: "strace traces system calls and signals. Shows what a program is doing at OS level: file access, network, memory. Powerful debugging tool for mysterious issues.",
                learnMore: { url: "https://strace.io/", text: "📚 strace" }
            },
        ]
    },

    'f-sql': {
        1: [
            {
                q: "What is SQL?",
                options: ["Language for querying and managing databases", "Server quality language protocol", "System query library for data", "Structured queue language"],
                correct: 0,
                explanation: "SQL (Structured Query Language) is the standard language for relational databases. Used to query, insert, update, delete data, and manage database structure.",
                learnMore: { url: "https://www.w3schools.com/sql/", text: "📚 SQL Tutorial" }
            },
            {
                q: "What's a SELECT statement?",
                options: ["Query to retrieve data from tables", "Statement to choose which database", "Selection of tables to create", "Selector for database connections"],
                correct: 0,
                explanation: "SELECT retrieves data from tables. SELECT columns FROM table WHERE condition. Most common SQL statement. Can join tables, aggregate, sort, limit results.",
                learnMore: { url: "https://www.postgresql.org/docs/current/sql-select.html", text: "📚 PostgreSQL SELECT" }
            },
            {
                q: "What's a WHERE clause?",
                options: ["Filter rows based on conditions", "Specify where to store data", "Location of database server", "Where to send query results"],
                correct: 0,
                explanation: "WHERE filters which rows are returned or affected. SELECT * FROM users WHERE active = true. Can use AND, OR, IN, LIKE, comparison operators.",
                learnMore: { url: "https://www.w3schools.com/sql/sql_where.asp", text: "📚 SQL WHERE" }
            },
        ],
        2: [
            {
                q: "What's a JOIN in SQL?",
                options: ["Combine rows from multiple tables", "Join two databases together", "Connect to database server", "Merge duplicate rows in table"],
                correct: 0,
                explanation: "JOIN combines rows from multiple tables based on related columns. Types: INNER (matching only), LEFT (all left + matching), RIGHT, FULL. Essential for relational data.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-join.html", text: "📚 PostgreSQL JOIN" }
            },
            {
                q: "What's a primary key?",
                options: ["Unique identifier for each row", "Most important column in table", "First column created in table", "Key to access the database"],
                correct: 0,
                explanation: "Primary key uniquely identifies each row. Cannot be NULL, must be unique. Often auto-incrementing integer or UUID. Foreign keys reference primary keys.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-PRIMARY-KEYS", text: "📚 Primary Keys" }
            },
            {
                q: "What's a foreign key?",
                options: ["Reference to primary key in another table", "Key from a foreign database", "Secondary unique identifier", "Key that can be null values"],
                correct: 0,
                explanation: "Foreign key links tables together by referencing another table's primary key. Enforces referential integrity - can't have orphaned references. Creates relationships.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK", text: "📚 Foreign Keys" }
            },
        ],
        3: [
            {
                q: "What's an index in SQL?",
                options: ["Data structure to speed up queries", "Table of contents for documentation", "List of all tables in database", "Index number for each row"],
                correct: 0,
                explanation: "Index is data structure (usually B-tree) that speeds up queries on indexed columns. Trade-off: faster reads, slower writes (index must be updated). Choose wisely.",
                learnMore: { url: "https://www.postgresql.org/docs/current/indexes.html", text: "📚 PostgreSQL Indexes" }
            },
            {
                q: "What's a transaction in SQL?",
                options: ["Group of operations that succeed or fail together", "Transfer of data between tables", "Action performed on database", "Transaction log entry only"],
                correct: 0,
                explanation: "Transaction groups operations into atomic unit. Either all succeed (COMMIT) or all fail (ROLLBACK). ACID properties ensure data integrity. BEGIN...COMMIT/ROLLBACK.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", text: "📚 Transactions" }
            },
            {
                q: "What's GROUP BY used for?",
                options: ["Aggregate rows with same values", "Group tables in database", "Sort results into groups", "Group queries together for batch"],
                correct: 0,
                explanation: "GROUP BY groups rows with same values for aggregation. Used with COUNT, SUM, AVG, MAX, MIN. SELECT department, COUNT(*) FROM employees GROUP BY department.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-agg.html", text: "📚 GROUP BY" }
            },
            {
                q: "What's the difference between WHERE and HAVING?",
                options: ["WHERE filters rows; HAVING filters groups", "They're exactly the same thing", "HAVING is older syntax for WHERE", "WHERE for SELECT, HAVING for UPDATE"],
                correct: 0,
                explanation: "WHERE filters individual rows before grouping. HAVING filters groups after aggregation. SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-agg.html", text: "📚 HAVING" }
            },
        ],
        4: [
            {
                q: "What's query optimization?",
                options: ["Improving query performance and efficiency", "Optimizing database storage size", "Finding optimal database design", "Best way to write SQL syntax"],
                correct: 0,
                explanation: "Query optimization improves performance: use indexes, avoid SELECT *, optimize JOINs, use EXPLAIN to analyze. Database query planner also optimizes automatically.",
                learnMore: { url: "https://www.postgresql.org/docs/current/performance-tips.html", text: "📚 Performance Tips" }
            },
            {
                q: "What does EXPLAIN show?",
                options: ["Query execution plan and costs", "Explanation of SQL syntax", "Database structure documentation", "List of recent queries executed"],
                correct: 0,
                explanation: "EXPLAIN shows how database will execute query: which indexes used, join order, estimated costs. EXPLAIN ANALYZE actually runs query and shows real timings.",
                learnMore: { url: "https://www.postgresql.org/docs/current/using-explain.html", text: "📚 Using EXPLAIN" }
            },
            {
                q: "What's an N+1 query problem?",
                options: ["Executing N extra queries instead of one efficient query", "Having N+1 tables in database", "Query that returns N+1 results", "Error when N+1 users connect"],
                correct: 0,
                explanation: "N+1 problem: 1 query gets N items, then N queries get related data for each. Should be 2 queries using JOIN or IN. Very common ORM issue. Devastating for performance.",
                learnMore: { url: "https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm", text: "📚 N+1 Problem" }
            },
            {
                q: "What's database normalization?",
                options: ["Organizing data to reduce redundancy", "Normalizing query response times", "Setting database to normal mode", "Standard database naming conventions"],
                correct: 0,
                explanation: "Normalization organizes tables to reduce redundancy and dependency. Normal forms (1NF, 2NF, 3NF) define rules. Trade-off: less redundancy vs more JOINs.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl.html", text: "📚 Database Design" }
            },
        ],
        5: [
            {
                q: "What's a database migration?",
                options: ["Version-controlled database schema changes", "Moving database to new server", "Migrating data between tables", "Database backup and restore process"],
                correct: 0,
                explanation: "Migrations are version-controlled schema changes. Each migration modifies schema (add table, column, index). Applied in order. Rollback possible. Django, Rails have built-in.",
                learnMore: { url: "https://docs.djangoproject.com/en/4.2/topics/migrations/", text: "📚 Django Migrations" }
            },
            {
                q: "What's a materialized view?",
                options: ["Precomputed query results stored as table", "Visual representation of database", "View that can be modified", "Virtual view of materials inventory"],
                correct: 0,
                explanation: "Materialized view stores query results physically (unlike regular views). Must be refreshed when data changes. Trade-off: faster reads vs stale data. Good for expensive queries.",
                learnMore: { url: "https://www.postgresql.org/docs/current/rules-materializedviews.html", text: "📚 Materialized Views" }
            },
            {
                q: "What's database sharding?",
                options: ["Splitting data across multiple databases", "Breaking large tables into shards", "Sharing database between applications", "Shredding deleted database records"],
                correct: 0,
                explanation: "Sharding splits data across multiple database instances. Each shard has subset of data (e.g., by user ID). Enables horizontal scaling. Complex: cross-shard queries, rebalancing.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl-partitioning.html", text: "📚 Table Partitioning" }
            },
            {
                q: "What's a database deadlock?",
                options: ["Two transactions waiting for each other's locks", "Database that stops responding", "Dead connection to database", "Lock that prevents all queries"],
                correct: 0,
                explanation: "Deadlock: Transaction A holds lock 1, waits for lock 2. Transaction B holds lock 2, waits for lock 1. Neither can proceed. Database detects and aborts one.",
                learnMore: { url: "https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-DEADLOCKS", text: "📚 Deadlocks" }
            },
            {
                q: "What are ACID properties?",
                options: ["Atomicity, Consistency, Isolation, Durability", "Automated, Concurrent, Indexed, Distributed", "Add, Create, Insert, Delete operations", "Advanced Computing in Databases"],
                correct: 0,
                explanation: "ACID: Atomicity (all or nothing), Consistency (valid state to valid state), Isolation (concurrent transactions don't interfere), Durability (committed data persists).",
                learnMore: { url: "https://www.postgresql.org/docs/current/transaction-iso.html", text: "📚 Transaction Isolation" }
            },
        ]
    },

    'f-ai-prompting': {
        1: [
            {
                q: "What is a prompt in AI context?",
                options: ["Input text given to AI model", "Warning message from the AI", "Quick response mode setting", "Command to start the AI program"],
                correct: 0,
                explanation: "A prompt is the input text you provide to an AI model. The model generates a response based on the prompt. Better prompts lead to better outputs.",
                learnMore: { url: "https://platform.openai.com/docs/guides/prompt-engineering", text: "📚 Prompt Engineering" }
            },
            {
                q: "What's prompt engineering?",
                options: ["Crafting effective prompts for AI models", "Building prompts with software tools", "Engineering AI model architecture", "Technical writing for documentation"],
                correct: 0,
                explanation: "Prompt engineering is the skill of writing prompts that get desired outputs from AI models. Includes techniques like giving examples, specifying format, role-playing.",
                learnMore: { url: "https://www.promptingguide.ai/", text: "📚 Prompting Guide" }
            },
            {
                q: "Why does specificity matter in prompts?",
                options: ["Specific prompts get more accurate responses", "AI prefers shorter specific prompts", "Specificity makes AI run faster", "Generic prompts are always better"],
                correct: 0,
                explanation: "Specific prompts reduce ambiguity and guide the model to relevant responses. Instead of 'write code', say 'write a Python function that validates email addresses'.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/prompt-engineering", text: "📚 Claude Prompting" }
            },
        ],
        2: [
            {
                q: "What's few-shot prompting?",
                options: ["Providing examples in the prompt", "Limiting AI to few responses", "Quick short prompts only", "Taking few attempts to get response"],
                correct: 0,
                explanation: "Few-shot prompting includes examples of desired input-output pairs in the prompt. Model learns the pattern from examples. Very effective for consistent formatting.",
                learnMore: { url: "https://www.promptingguide.ai/techniques/fewshot", text: "📚 Few-Shot Prompting" }
            },
            {
                q: "What's zero-shot prompting?",
                options: ["Asking without providing examples", "Prompting that never works", "Instant response prompting", "Prompts with zero words"],
                correct: 0,
                explanation: "Zero-shot prompting asks the model to perform a task without examples. Relies on model's training knowledge. Works for common tasks but may need few-shot for specific formats.",
                learnMore: { url: "https://www.promptingguide.ai/techniques/zeroshot", text: "📚 Zero-Shot Prompting" }
            },
            {
                q: "What's the role of context in prompts?",
                options: ["Background info helps AI understand the task", "Context slows down AI responses", "Context is only for conversation history", "Less context is always better"],
                correct: 0,
                explanation: "Context provides background information: what you're working on, constraints, audience, desired outcome. Helps AI understand the full picture and give relevant responses.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/give-claude-a-role", text: "📚 Context and Roles" }
            },
        ],
        3: [
            {
                q: "What's chain-of-thought prompting?",
                options: ["Ask AI to explain reasoning step by step", "Chain multiple prompts together", "Thought experiment prompting", "Sequential conversation prompting"],
                correct: 0,
                explanation: "Chain-of-thought prompting asks the model to show reasoning steps. 'Let's think step by step' or requesting explanation improves accuracy on complex problems.",
                learnMore: { url: "https://www.promptingguide.ai/techniques/cot", text: "📚 Chain of Thought" }
            },
            {
                q: "What's system prompt vs user prompt?",
                options: ["System sets behavior; user provides the request", "System is automated; user is manual", "System prompts are optional always", "No difference between them at all"],
                correct: 0,
                explanation: "System prompt sets AI behavior, role, and constraints (persists across messages). User prompt is the specific request. System: 'You are a Python expert.' User: 'How do I sort a list?'",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/system-prompts", text: "📚 System Prompts" }
            },
            {
                q: "What's prompt injection?",
                options: ["Malicious input that changes AI behavior", "Injecting prompts into database", "Adding prompts to existing code", "Injection of prompt variables"],
                correct: 0,
                explanation: "Prompt injection is when user input contains instructions that override the intended prompt behavior. Security concern for AI applications. Sanitize and validate inputs.",
                learnMore: { url: "https://www.lakera.ai/blog/guide-to-prompt-injection", text: "📚 Prompt Injection" }
            },
            {
                q: "What's the purpose of output formatting instructions?",
                options: ["Get responses in specific structure", "Make AI output look prettier", "Format instructions are ignored", "Only for code generation tasks"],
                correct: 0,
                explanation: "Formatting instructions ('respond in JSON', 'use bullet points', 'include code blocks') ensure output is in usable format. Essential for programmatic use of AI outputs.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/control-output-format", text: "📚 Output Format" }
            },
        ],
        4: [
            {
                q: "What's retrieval-augmented generation (RAG)?",
                options: ["Enhance prompts with retrieved relevant documents", "Random augmented generation technique", "Retrieving AI-generated content", "Augmenting retrieval database queries"],
                correct: 0,
                explanation: "RAG retrieves relevant documents and includes them in prompt context. AI generates response using both its training and retrieved information. Useful for current/specific knowledge.",
                learnMore: { url: "https://www.pinecone.io/learn/retrieval-augmented-generation/", text: "📚 RAG" }
            },
            {
                q: "What's temperature in AI models?",
                options: ["Parameter controlling response randomness", "How fast the model processes", "Thermal cooling of AI hardware", "Temperature of training data"],
                correct: 0,
                explanation: "Temperature controls randomness. Low (0-0.3): deterministic, focused. High (0.7-1): creative, varied. Use low for factual tasks, higher for creative writing.",
                learnMore: { url: "https://platform.openai.com/docs/guides/text-generation/how-should-i-set-the-temperature-parameter", text: "📚 Temperature" }
            },
            {
                q: "What's prompt chaining?",
                options: ["Breaking complex task into sequential prompts", "Chaining keywords in single prompt", "Blockchain for prompt storage", "Connecting multiple AI models together"],
                correct: 0,
                explanation: "Prompt chaining breaks complex tasks into steps. Output of one prompt becomes input for next. Enables more complex reasoning and longer outputs than single prompt.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/chain-prompts", text: "📚 Prompt Chaining" }
            },
            {
                q: "What's constitutional AI prompting?",
                options: ["Having AI critique and revise its own outputs", "Legal prompts for AI contracts", "Constitution of prompt rules", "Government-approved AI prompts"],
                correct: 0,
                explanation: "Constitutional AI has the model critique and revise its outputs against principles. 'Review your response for potential harms and revise.' Self-correction technique.",
                learnMore: { url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback", text: "📚 Constitutional AI" }
            },
        ],
        5: [
            {
                q: "What's prompt decomposition?",
                options: ["Breaking complex prompts into simpler sub-tasks", "Decomposing prompts after use", "Analyzing prompt word frequencies", "Removing unnecessary prompt words"],
                correct: 0,
                explanation: "Prompt decomposition breaks complex tasks into simpler sub-prompts. Each sub-task is easier for the model. Combine results for final answer. Improves reliability.",
                learnMore: { url: "https://www.promptingguide.ai/techniques/decomposition", text: "📚 Decomposition" }
            },
            {
                q: "What's meta-prompting?",
                options: ["Using AI to generate or improve prompts", "Prompts about prompt metadata", "Meta-analysis of prompt data", "Prompts for meta learning models"],
                correct: 0,
                explanation: "Meta-prompting uses AI to generate, evaluate, or improve prompts. 'Write a prompt that would...', 'How could this prompt be improved?' AI helping with prompting.",
                learnMore: { url: "https://arxiv.org/abs/2401.12954", text: "📚 Meta-Prompting" }
            },
            {
                q: "What's the difference between instructions and examples in prompts?",
                options: ["Instructions tell what to do; examples show how", "They're identical approaches to prompting", "Examples are always better than instructions", "Instructions don't work for AI models"],
                correct: 0,
                explanation: "Instructions explicitly state rules. Examples demonstrate desired behavior. Combine both: instructions for rules, examples for format/style. Examples often more effective than long instructions.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/give-examples", text: "📚 Using Examples" }
            },
            {
                q: "How do you debug ineffective prompts?",
                options: ["Test variations, analyze failures, iterate", "Prompts either work or they don't", "Use longer prompts every time", "Just use different AI model"],
                correct: 0,
                explanation: "Debug prompts: test with variations, analyze where responses fail expectations, add examples of failures, clarify ambiguous parts, try different phrasings. Iterate systematically.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/debugging-prompts", text: "📚 Debugging Prompts" }
            },
            {
                q: "What's prompt compression?",
                options: ["Reducing prompt length while preserving meaning", "Compressing prompt file storage", "ZIP compression of prompts", "Shorter prompts are always worse"],
                correct: 0,
                explanation: "Prompt compression reduces token count while keeping essential information. Important for cost and context length limits. Remove redundancy, use concise phrasing, prioritize key info.",
                learnMore: { url: "https://www.llmlingua.com/", text: "📚 LLMLingua" }
            },
        ]
    },

    'f-ai-coding': {
        1: [
            {
                q: "What's GitHub Copilot?",
                options: ["AI coding assistant suggesting code completions", "GitHub's code review automation", "Pilot program for new GitHub features", "GitHub's copilot for navigation"],
                correct: 0,
                explanation: "GitHub Copilot is an AI pair programmer that suggests code completions as you type. Trained on public code. Integrates with VS Code, JetBrains, and other editors.",
                learnMore: { url: "https://github.com/features/copilot", text: "📚 GitHub Copilot" }
            },
            {
                q: "What's inline code completion?",
                options: ["AI suggesting code as you type", "Completing inline CSS styles", "Inlining function calls in code", "Auto-completing inline comments"],
                correct: 0,
                explanation: "Inline completion shows AI suggestions as you type, often as ghost text. Accept with Tab. Suggestions based on current file context, cursor position, and prompt.",
                learnMore: { url: "https://code.visualstudio.com/docs/copilot/overview", text: "📚 VS Code Copilot" }
            },
            {
                q: "How do comments help AI code generation?",
                options: ["Describe intent for AI to generate code", "Comments are ignored by AI", "Only special AI comments work", "Comments slow down AI generation"],
                correct: 0,
                explanation: "Comments describing what you want help AI generate appropriate code. '// Function to validate email format' followed by newline often generates the function.",
                learnMore: { url: "https://github.blog/2022-09-14-8-things-you-didnt-know-you-could-do-with-github-copilot/", text: "📚 Copilot Tips" }
            },
        ],
        2: [
            {
                q: "What's Cursor?",
                options: ["AI-native code editor with built-in AI features", "Mouse cursor customization tool", "Code navigation cursor system", "Cursor-based programming language"],
                correct: 0,
                explanation: "Cursor is an AI-native code editor built on VS Code. Features: AI chat, code generation, codebase understanding, multi-file editing. Designed for AI-assisted development.",
                learnMore: { url: "https://cursor.sh/", text: "📚 Cursor" }
            },
            {
                q: "What's Claude Code?",
                options: ["Anthropic's CLI tool for coding with Claude", "Code name for Claude AI project", "Special code language for Claude", "Claude's coding assistant bot"],
                correct: 0,
                explanation: "Claude Code is Anthropic's official CLI for coding with Claude. Agentic coding with file editing, terminal commands, and multi-step task execution.",
                learnMore: { url: "https://claude.ai/code", text: "📚 Claude Code" }
            },
            {
                q: "What should you verify in AI-generated code?",
                options: ["Correctness, security, and fit with codebase", "Only check if it runs without errors", "AI code is always correct", "Just verify syntax is valid"],
                correct: 0,
                explanation: "Always verify AI code: correctness (does it do what you want?), security (no vulnerabilities?), style (fits codebase?), edge cases (handles errors?). Trust but verify.",
                learnMore: { url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", text: "📚 Copilot Best Practices" }
            },
        ],
        3: [
            {
                q: "What's chat-based code assistance?",
                options: ["Conversational AI interface for coding help", "Chat room for developers only", "Chatbot that writes all code", "Code comments written as chat"],
                correct: 0,
                explanation: "Chat interfaces let you ask coding questions, request explanations, generate code through conversation. More flexible than inline completion. Can discuss context and alternatives.",
                learnMore: { url: "https://docs.github.com/en/copilot/github-copilot-chat", text: "📚 Copilot Chat" }
            },
            {
                q: "What's codebase context in AI coding?",
                options: ["AI understanding your entire project", "Context menu in code editors", "Base code that AI modifies", "Contextual comments in code"],
                correct: 0,
                explanation: "Codebase context means AI understands your project structure, existing code, patterns, and dependencies. Better context leads to more relevant suggestions. Some tools index whole codebases.",
                learnMore: { url: "https://cursor.sh/features", text: "📚 Cursor Features" }
            },
            {
                q: "When is AI code generation most useful?",
                options: ["Boilerplate, tests, well-defined patterns", "Novel algorithms requiring research", "Security-critical code sections", "All code should be AI-generated"],
                correct: 0,
                explanation: "AI excels at: boilerplate, repetitive patterns, tests, documentation, common tasks. Less suitable for: novel algorithms, security-critical code, complex business logic requiring domain expertise.",
                learnMore: { url: "https://github.blog/2022-09-14-8-things-you-didnt-know-you-could-do-with-github-copilot/", text: "📚 Copilot Use Cases" }
            },
            {
                q: "What's agentic coding?",
                options: ["AI autonomously performing multi-step coding tasks", "Coding for AI agents specifically", "Agent-based modeling in code", "Agents that review code quality"],
                correct: 0,
                explanation: "Agentic coding lets AI autonomously perform multi-step tasks: create files, run tests, fix errors, iterate. More autonomous than simple completion. Claude Code operates this way.",
                learnMore: { url: "https://www.anthropic.com/claude/code", text: "📚 Claude Code" }
            },
        ],
        4: [
            {
                q: "How do you provide good context to AI coding tools?",
                options: ["Open relevant files, write clear comments, explain intent", "Context doesn't matter for AI", "Only current file matters for context", "Maximum context is always best"],
                correct: 0,
                explanation: "Good context: open related files, write descriptive comments/docstrings, explain the goal. Reference existing patterns. Clear intent helps AI generate appropriate code.",
                learnMore: { url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot", text: "📚 Prompt Engineering" }
            },
            {
                q: "What's the role of tests in AI-assisted coding?",
                options: ["Verify AI code works, guide generation, enable iteration", "Tests are unnecessary with AI coding", "AI can't understand test code", "Only manual testing works"],
                correct: 0,
                explanation: "Tests verify AI-generated code works correctly. Test-driven: write tests first, AI generates implementation. Tests enable confident iteration and catch AI errors.",
                learnMore: { url: "https://github.blog/2023-01-17-github-copilot-for-unit-tests/", text: "📚 Copilot for Tests" }
            },
            {
                q: "How do you handle AI code that's almost right?",
                options: ["Edit manually, or iterate with more specific instructions", "Accept it as-is always", "Reject and rewrite from scratch", "AI code can't be modified"],
                correct: 0,
                explanation: "Iterate: edit small issues manually, regenerate with more specific instructions, use chat to refine. AI gets you 80% there; you refine the last 20%. Efficient workflow.",
                learnMore: { url: "https://cursor.sh/features", text: "📚 Iterative Editing" }
            },
            {
                q: "What are AI coding tool limitations?",
                options: ["May be outdated, incorrect, or insecure", "AI has no limitations anymore", "Only works on certain languages", "Limitations don't affect code quality"],
                correct: 0,
                explanation: "AI limitations: training data cutoff (may not know new APIs), can generate incorrect/insecure code, may not match your style, doesn't understand full business context.",
                learnMore: { url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", text: "📚 Best Practices" }
            },
        ],
        5: [
            {
                q: "What's code generation with retrieval?",
                options: ["AI retrieves relevant code examples to inform generation", "Retrieving previously generated code", "Code generation backup retrieval", "Generating code to retrieve data"],
                correct: 0,
                explanation: "Retrieval-augmented generation for code: AI retrieves relevant code snippets, documentation, or examples from codebase/web to inform better generation. Combines knowledge sources.",
                learnMore: { url: "https://www.cursor.sh/", text: "📚 Cursor RAG" }
            },
            {
                q: "How do you integrate AI coding into team workflow?",
                options: ["Establish guidelines, review AI code, share prompts", "Everyone uses AI independently", "AI replaces code review process", "Ban AI coding in teams"],
                correct: 0,
                explanation: "Team integration: establish acceptable use guidelines, still require code review for AI code, share effective prompts/techniques, discuss security/legal implications.",
                learnMore: { url: "https://resources.github.com/copilot-trust-center/", text: "📚 Copilot Trust Center" }
            },
            {
                q: "What's multi-file AI editing?",
                options: ["AI modifies multiple related files coherently", "Editing files in multiple editors", "Multiple AI models editing same file", "Editing multiple copies of file"],
                correct: 0,
                explanation: "Multi-file editing lets AI make coordinated changes across files: rename across codebase, refactor touching multiple files, implement feature spanning files. Maintains consistency.",
                learnMore: { url: "https://cursor.sh/features", text: "📚 Multi-File Editing" }
            },
            {
                q: "What's the future of AI-assisted development?",
                options: ["More autonomous agents, better context, human oversight", "AI will replace all developers soon", "AI coding is just a passing trend", "No significant changes expected"],
                correct: 0,
                explanation: "Trends: more autonomous agents handling complex tasks, better codebase understanding, natural language as interface. Human oversight remains essential for quality and correctness.",
                learnMore: { url: "https://www.anthropic.com/research", text: "📚 AI Research" }
            },
            {
                q: "How do you measure AI coding tool effectiveness?",
                options: ["Acceptance rate, time saved, code quality metrics", "Only count lines generated per day", "No metrics needed for AI tools", "Measure only by cost savings"],
                correct: 0,
                explanation: "Measure: suggestion acceptance rate, time saved, code quality (bugs, reviews), developer satisfaction. Balance speed vs quality. Track both productivity and code health.",
                learnMore: { url: "https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/", text: "📚 Copilot Impact Research" }
            },
        ]
    },

    'f-ai-agents': {
        1: [
            {
                q: "What's an AI agent?",
                options: ["AI that takes actions to achieve goals autonomously", "Agent who sells AI products", "AI model that only answers questions", "Artificial intelligence agency"],
                correct: 0,
                explanation: "AI agent is an AI system that perceives environment, makes decisions, and takes actions to achieve goals. Unlike chatbots that just respond, agents act autonomously.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Building Effective Agents" }
            },
            {
                q: "What's tool use in AI agents?",
                options: ["AI calling external tools and APIs", "Tools for building AI models", "AI using physical robot tools", "User tools for controlling AI"],
                correct: 0,
                explanation: "Tool use allows AI to call external functions: search the web, run code, query databases, access APIs. Extends capabilities beyond just text generation.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/tool-use", text: "📚 Tool Use" }
            },
            {
                q: "What's the agent loop?",
                options: ["Cycle of observe, think, act, repeat", "Circular dependency in AI code", "Loop that trains AI agents", "Feedback loop for user input"],
                correct: 0,
                explanation: "Agent loop: observe (perceive state), think (decide action), act (execute), observe result, repeat until goal achieved. Core pattern for autonomous AI agents.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agent Loop" }
            },
        ],
        2: [
            {
                q: "What's MCP (Model Context Protocol)?",
                options: ["Standard for connecting AI to tools and data", "Master control program for AI", "Model checkpoint protocol", "Message compression protocol"],
                correct: 0,
                explanation: "MCP is Anthropic's open standard for connecting AI models to external data sources and tools. Defines how AI requests tool execution and receives results.",
                learnMore: { url: "https://www.anthropic.com/news/model-context-protocol", text: "📚 MCP" }
            },
            {
                q: "What's an MCP server?",
                options: ["Service that provides tools to AI via MCP protocol", "Server running AI model inference", "Management control panel server", "Message coordination protocol server"],
                correct: 0,
                explanation: "MCP server exposes tools and data to AI models. Defines available tools, handles requests, returns results. Examples: file system access, database queries, API calls.",
                learnMore: { url: "https://modelcontextprotocol.io/", text: "📚 MCP Documentation" }
            },
            {
                q: "What's function calling in AI?",
                options: ["AI requests execution of defined functions", "Calling functions that return AI responses", "Functions that train AI models", "User calling AI functions directly"],
                correct: 0,
                explanation: "Function calling lets AI models request execution of predefined functions with parameters. Model decides when/how to call based on user request. Results returned to model.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/tool-use", text: "📚 Function Calling" }
            },
        ],
        3: [
            {
                q: "What's an agentic workflow?",
                options: ["AI autonomously completing multi-step tasks", "Workflow for training AI agents", "Human agents using AI tools", "Workflow managed by AI agency"],
                correct: 0,
                explanation: "Agentic workflow: AI plans steps, executes them, handles errors, iterates until complete. More autonomous than single prompt-response. Claude Code operates this way.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agentic Workflows" }
            },
            {
                q: "What's prompt chaining in agents?",
                options: ["Output of one step becomes input for next", "Chaining prompts in single message", "Blockchain for storing prompts", "Multiple users prompting together"],
                correct: 0,
                explanation: "Prompt chaining: break complex task into steps, where each step's output feeds into the next. Agent orchestrates the chain. Enables complex reasoning and actions.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/chain-prompts", text: "📚 Prompt Chaining" }
            },
            {
                q: "What's tool schema in MCP?",
                options: ["Definition of what tool does and its parameters", "Database schema for tool storage", "Schema of AI model tools", "Tool versioning schema"],
                correct: 0,
                explanation: "Tool schema defines: tool name, description, input parameters (types, descriptions, required/optional). AI model uses schema to understand when and how to call tools.",
                learnMore: { url: "https://modelcontextprotocol.io/docs/specification/schema", text: "📚 Tool Schema" }
            },
            {
                q: "What's human-in-the-loop for AI agents?",
                options: ["Human approval required for certain actions", "Human training AI continuously", "Humans physically in AI loop", "Human loops replaced by AI"],
                correct: 0,
                explanation: "Human-in-the-loop requires human approval for sensitive actions: file deletion, external API calls, deployments. Balances autonomy with safety. Often configurable per action type.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Human Oversight" }
            },
        ],
        4: [
            {
                q: "What's agent planning?",
                options: ["AI breaking down goals into actionable steps", "Planning to deploy AI agents", "Scheduling agent execution times", "Planning AI model architecture"],
                correct: 0,
                explanation: "Agent planning: AI analyzes goal, breaks into sub-goals, determines action sequence, anticipates obstacles. Good planning improves success rate. May involve explicit planning steps.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agent Planning" }
            },
            {
                q: "How do agents handle errors?",
                options: ["Detect, analyze, and retry with different approach", "Errors always stop the agent", "Ignore errors and continue always", "Errors are not possible for agents"],
                correct: 0,
                explanation: "Good agents: detect errors, understand what went wrong, try alternative approaches, ask for help if stuck. Robustness to errors is crucial for autonomous operation.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/tool-use#error-handling", text: "📚 Error Handling" }
            },
            {
                q: "What's context window management in agents?",
                options: ["Managing limited memory for long-running tasks", "Windows for viewing AI context", "Context switching between agents", "Window size for agent display"],
                correct: 0,
                explanation: "Agents must manage context window limits. Strategies: summarize history, keep relevant info, discard old details, use external memory. Critical for long-running tasks.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/long-context-window-tips", text: "📚 Context Management" }
            },
            {
                q: "What's agent observability?",
                options: ["Ability to monitor and debug agent behavior", "Agents observing user behavior", "Observable patterns in AI code", "Quantum observability principle"],
                correct: 0,
                explanation: "Agent observability: logging decisions, actions, errors. Enables debugging, understanding agent behavior, improving prompts. Critical for production agents. Include traces and metrics.",
                learnMore: { url: "https://langfuse.com/", text: "📚 Langfuse" }
            },
        ],
        5: [
            {
                q: "What's multi-agent orchestration?",
                options: ["Coordinating multiple AI agents working together", "Multiple users controlling one agent", "Orchestrating agent training process", "Playing multiple agent games"],
                correct: 0,
                explanation: "Multi-agent orchestration coordinates multiple specialized agents. Agents may collaborate, delegate, or compete. Complex workflows split between experts. Requires coordination layer.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Multi-Agent Systems" }
            },
            {
                q: "What's agent memory?",
                options: ["Persisting information across agent sessions", "Memory used by AI model inference", "Short-term context window only", "Agent memorizing training data"],
                correct: 0,
                explanation: "Agent memory persists across sessions: user preferences, learned facts, past interactions. Types: short-term (context), long-term (vector DB), episodic (specific memories).",
                learnMore: { url: "https://www.pinecone.io/learn/langchain-agents/", text: "📚 Agent Memory" }
            },
            {
                q: "What's the ReAct pattern?",
                options: ["Reasoning and Acting interleaved in steps", "React framework for AI agents", "Reactive programming for agents", "Agent reaction time measurement"],
                correct: 0,
                explanation: "ReAct (Reasoning + Acting): agent alternates between reasoning (thinking about what to do) and acting (calling tools). Explicit reasoning improves decision quality.",
                learnMore: { url: "https://arxiv.org/abs/2210.03629", text: "📚 ReAct Paper" }
            },
            {
                q: "How do you evaluate AI agent performance?",
                options: ["Task success rate, efficiency, safety, user satisfaction", "Only check if agent responds", "Count number of tool calls made", "No evaluation needed for agents"],
                correct: 0,
                explanation: "Evaluate: task completion rate, steps/cost to complete, error rate, safety (no harmful actions), user satisfaction. Create benchmarks for your use cases. Monitor production metrics.",
                learnMore: { url: "https://www.anthropic.com/research/evaluating-ai-agents", text: "📚 Agent Evaluation" }
            },
            {
                q: "What are safety considerations for AI agents?",
                options: ["Limit permissions, require approval, monitor actions", "Agents are inherently safe always", "Safety only matters for robots", "Just trust the AI decisions"],
                correct: 0,
                explanation: "Agent safety: principle of least privilege (minimal permissions), approval gates for sensitive actions, action logging, rate limits, sandboxing, kill switches. Critical for production.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agent Safety" }
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
                options: ["Django REST Framework", "Flask web framework", "FastAPI framework", "Express.js framework"],
                correct: 0,
                explanation: "Waldur's backend (waldur-mastermind) is built on Django REST Framework, providing a powerful REST API with serializers, viewsets, and authentication.",
                learnMore: { url: "https://docs.waldur.com/", text: "📚 Waldur Documentation" }
            },
            {
                q: "What's Waldur's frontend framework?",
                options: ["React with Redux", "Angular framework", "Vue.js framework", "jQuery library"],
                correct: 0,
                explanation: "Waldur's frontend (waldur-homeport) uses React with Redux for state management, providing a modern single-page application experience.",
                learnMore: { url: "https://github.com/waldur/waldur-homeport", text: "📚 Waldur Homeport" }
            },
            {
                q: "What database does Waldur primarily use?",
                options: ["PostgreSQL relational DB", "MySQL relational DB", "MongoDB document DB", "SQLite embedded DB"],
                correct: 0,
                explanation: "Waldur uses PostgreSQL as its primary database, leveraging its robust features like JSON fields, full-text search, and transactional integrity.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/deployment/", text: "📚 Waldur Deployment" }
            },
        ],
        2: [
            {
                q: "What are Structure Apps in Waldur?",
                options: ["Pluggable modules for resource types", "Mobile applications for users", "Database table structures", "REST API endpoint definitions"],
                correct: 0,
                explanation: "Structure Apps are Waldur plugins that define new resource types (e.g., OpenStack, SLURM). Each provides models, serializers, views, and backend logic.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Waldur Plugins" }
            },
            {
                q: "What's Celery used for in Waldur?",
                options: ["Async task processing", "HTTP web serving", "Database connections", "Frontend rendering"],
                correct: 0,
                explanation: "Celery handles asynchronous tasks in Waldur: resource provisioning, periodic sync with backends, sending notifications, generating reports, and other background jobs.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/", text: "📚 Celery Documentation" }
            },
            {
                q: "What message broker does Waldur use with Celery?",
                options: ["Redis or RabbitMQ", "Apache Kafka", "Amazon SQS", "Direct in-process"],
                correct: 0,
                explanation: "Waldur uses Redis (default) or RabbitMQ as Celery's message broker. Redis is simpler to deploy; RabbitMQ offers more advanced features for larger installations.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/getting-started/backends-and-brokers/", text: "📚 Celery Brokers" }
            },
        ],
        3: [
            {
                q: "How does Waldur's plugin system work?",
                options: ["Django apps registered via settings", "npm packages from registry", "Docker containers as plugins", "Independent microservices"],
                correct: 0,
                explanation: "Waldur plugins are Django apps registered in INSTALLED_APPS. They hook into core via extensions registry, providing new resource types, views, and background tasks.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/", text: "📚 Developer Guide" }
            },
            {
                q: "What's the purpose of waldur-mastermind?",
                options: ["Main backend with core and plugins", "Frontend web application", "Mobile application code", "Documentation website"],
                correct: 0,
                explanation: "waldur-mastermind is the main backend repository containing waldur-core and all official plugins. It's the single deployable backend component.",
                learnMore: { url: "https://github.com/waldur/waldur-mastermind", text: "📚 Waldur Mastermind" }
            },
            {
                q: "How are Waldur API endpoints structured?",
                options: ["DRF ViewSets with routers", "Flask route decorators", "Raw Django view functions", "GraphQL resolvers only"],
                correct: 0,
                explanation: "Waldur uses DRF ViewSets registered with routers. ViewSets provide CRUD operations automatically. Custom actions are added with @action decorator.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/viewsets/", text: "📚 DRF ViewSets" }
            },
            {
                q: "What serializers does Waldur use?",
                options: ["DRF serializers for API I/O", "JSON format only", "XML format only", "Custom binary format"],
                correct: 0,
                explanation: "Waldur uses DRF serializers for validation, parsing input, and formatting output. HyperlinkedModelSerializer provides URL-based relationships between resources.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/serializers/", text: "📚 DRF Serializers" }
            },
        ],
        4: [
            {
                q: "What's the role of waldur-core vs plugins?",
                options: ["Core provides base, plugins add integrations", "Core is an optional component", "Plugins are part of core", "There is no difference"],
                correct: 0,
                explanation: "waldur-core provides base models (Customer, Project), permissions, marketplace, and infrastructure. Plugins add specific provider integrations (OpenStack, Azure, etc.).",
                learnMore: { url: "https://docs.waldur.com/developer-guide/structure/", text: "📚 Waldur Structure" }
            },
            {
                q: "How does Waldur handle background jobs?",
                options: ["Celery tasks with periodic scheduling", "System cron job entries", "Python threads directly", "No background job support"],
                correct: 0,
                explanation: "Waldur uses Celery for background jobs. Celery Beat schedules periodic tasks (sync, cleanup). Tasks are defined with @shared_task decorator and can be chained.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/userguide/periodic-tasks.html", text: "📚 Periodic Tasks" }
            },
            {
                q: "What's the structure of a Waldur plugin?",
                options: ["Django app with models, views, tasks", "Single Python file module", "Configuration files only", "Frontend components only"],
                correct: 0,
                explanation: "A Waldur plugin is a Django app with: models.py (resources), serializers.py (API format), views.py (viewsets), tasks.py (Celery tasks), and extension.py (registration).",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Plugin Development" }
            },
            {
                q: "How does Waldur manage database migrations?",
                options: ["Django migrations per app", "Raw SQL scripts only", "Manual schema changes", "No migration support"],
                correct: 0,
                explanation: "Waldur uses Django migrations. Each app has its own migrations folder. Run makemigrations when models change, then migrate to apply. Migrations are version-controlled.",
                learnMore: { url: "https://docs.djangoproject.com/en/4.2/topics/migrations/", text: "📚 Django Migrations" }
            },
        ],
        5: [
            {
                q: "How do you extend Waldur with custom resource types?",
                options: ["Create structure app with models and views", "Directly modify the core code", "Use configuration files only", "Build external API bridge"],
                correct: 0,
                explanation: "Create a new Django app with: Resource model inheriting from marketplace.Resource, serializers, viewsets, processor for order handling, and register via extension.py.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/plugins/", text: "📚 Custom Plugins" }
            },
            {
                q: "How does Waldur handle multi-tenancy at database level?",
                options: ["Shared database with filtering", "Separate database per tenant", "PostgreSQL schemas per tenant", "No multi-tenancy support"],
                correct: 0,
                explanation: "Waldur uses shared database with Customer (organization) and Project models. QuerySets are filtered by user permissions. No tenant isolation at DB level - it's application-level.",
                learnMore: { url: "https://docs.waldur.com/user-guide/organizations/", text: "📚 Organizations" }
            },
            {
                q: "What's the Waldur executor pattern?",
                options: ["Backend-specific provisioning logic", "User permission executor", "Celery task runner pattern", "Database query executor"],
                correct: 0,
                explanation: "Executors contain backend-specific provisioning logic. They implement create/update/delete for resources, communicating with external APIs (OpenStack, SLURM, etc.).",
                learnMore: { url: "https://docs.waldur.com/developer-guide/", text: "📚 Developer Guide" }
            },
            {
                q: "How does Waldur handle service provider backends?",
                options: ["Backend classes with common interface", "Direct API calls everywhere", "Hardcoded provider logic", "External configuration files"],
                correct: 0,
                explanation: "Each provider has a Backend class implementing common interface (create_resource, delete_resource). ServiceSettings stores credentials. Allows multiple instances per provider type.",
                learnMore: { url: "https://docs.waldur.com/developer-guide/backends/", text: "📚 Backend Development" }
            },
            {
                q: "What's the role of waldur-homeport?",
                options: ["React frontend application", "Django backend service", "PostgreSQL database", "Nginx load balancer"],
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
                options: ["Request to create/modify/terminate a resource", "Shopping cart for saved offerings", "Invoice for consumed resources", "Report of usage statistics"],
                correct: 0,
                explanation: "An Order is a request to perform an action on a resource: create, update, or terminate. Orders go through approval workflow and are processed by backend executors.",
                learnMore: { url: "https://docs.waldur.com/user-guide/orders/", text: "📚 Order Management" }
            },
            {
                q: "What's an offering component?",
                options: ["Measurable unit like CPU cores or RAM", "UI component for rendering forms", "Plugin for extending functionality", "Category for grouping offerings"],
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
                options: ["Custom configuration options for resources", "Styling the offering display page", "Grouping offerings in categories", "Setting user access permissions"],
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
                options: ["Generate invoices based on component usage and prices", "Billing is not supported in marketplace", "Only external billing systems work", "Manual invoice creation only"],
                correct: 0,
                explanation: "Waldur generates invoices periodically based on resource usage and plan prices. Supports fixed and usage-based billing. Integrates with payment systems.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/billing/", text: "📚 Billing System" }
            },
            {
                q: "What's offering secret options for?",
                options: ["Provider-only configuration not visible to users", "Storing user secrets and credentials", "Managing API keys for users", "Encrypted password storage"],
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
                options: ["Set of permissions assignable to users", "Type of user account in system", "Organization configuration setting", "Resource allocation limit"],
                correct: 0,
                explanation: "A role is a named set of permissions (e.g., owner, manager, member). Assigning a role to a user grants all permissions defined in that role.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/roles/", text: "📚 Roles" }
            },
            {
                q: "At what levels can permissions be assigned in Waldur?",
                options: ["Customer/Organization, Project, Resource", "User account level only", "Global system level only", "Resource level only"],
                correct: 0,
                explanation: "Permissions can be assigned at: Customer (organization) level, Project level, or specific resource level. Each level has its own set of applicable roles.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/permissions/", text: "📚 Permission Levels" }
            },
            {
                q: "What's the 'owner' role in an organization?",
                options: ["Full administrative access to organization", "Read-only access to resources", "Access to projects only", "Access to billing only"],
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

    'c-billing': {
        1: [
            {
                q: "What does Waldur's billing system track?",
                options: ["Resource usage and costs for customers", "Employee payroll and salaries", "Hardware inventory costs only", "Network bandwidth usage only"],
                correct: 0,
                explanation: "Waldur billing tracks resource consumption, calculates costs based on pricing plans, generates invoices for customers/organizations."
            },
            {
                q: "What's a price estimate in Waldur?",
                options: ["Projected cost for a resource", "Final invoice amount", "Discount percentage offered", "Price negotiation tool"],
                correct: 0,
                explanation: "Price estimates show projected costs before/during resource usage. Helps users understand costs. Updated as usage changes."
            },
            {
                q: "What's an invoice in Waldur?",
                options: ["Bill for resource usage in a period", "List of available resources", "User activity report only", "System configuration file"],
                correct: 0,
                explanation: "Invoices summarize charges for a billing period (usually monthly). Include line items per resource, totals, and payment status."
            },
        ],
        2: [
            {
                q: "How does Waldur calculate resource costs?",
                options: ["Pricing plans with rates per unit", "Fixed price for everything", "Random pricing each month", "Users set their own prices"],
                correct: 0,
                explanation: "Pricing plans define rates: per hour, per GB, per unit. Resources tracked against plans. Costs = usage × rate."
            },
            {
                q: "What are pricing components?",
                options: ["Individual billable aspects of a resource", "Hardware components tracked", "Pricing team members", "Component diagrams for pricing"],
                correct: 0,
                explanation: "Pricing components are individual billable items: CPU hours, storage GB, RAM GB, etc. Each has its own rate and measurement."
            },
            {
                q: "What's a billing period in Waldur?",
                options: ["Time range for aggregating charges", "Time to pay an invoice", "Period of free trial usage", "Billing team work schedule"],
                correct: 0,
                explanation: "Billing period is typically monthly. Usage aggregated, invoice generated at period end. Can be customized per customer."
            },
        ],
        3: [
            {
                q: "How does Waldur handle different currencies?",
                options: ["Configurable currency per customer/offering", "Only USD supported always", "Automatic conversion daily", "Currency not tracked in billing"],
                correct: 0,
                explanation: "Waldur supports configurable currencies. Offerings can specify currency. Invoices generated in customer's currency."
            },
            {
                q: "What's credit management in Waldur?",
                options: ["Prepaid balance that offsets invoices", "Credit card payment processing", "User credit score tracking", "Database credit transactions"],
                correct: 0,
                explanation: "Credits are prepaid amounts applied to invoices. Organizations can have credit balance. Invoices reduced by available credits."
            },
            {
                q: "How are usage metrics collected for billing?",
                options: ["Backend plugins report usage periodically", "Users manually enter usage", "Random sampling of resources", "No usage tracking needed"],
                correct: 0,
                explanation: "Backend plugins (OpenStack, SLURM, etc.) report usage metrics via pull tasks. Stored in database, aggregated for billing."
            },
            {
                q: "What's a pricing plan in Waldur?",
                options: ["Set of pricing components for an offering", "Plan to change prices later", "Marketing pricing strategy", "User subscription tier"],
                correct: 0,
                explanation: "Pricing plan defines how an offering is billed: components, rates, billing frequency. Offerings can have multiple plans."
            },
        ],
        4: [
            {
                q: "How does Waldur integrate with payment systems?",
                options: ["Payment gateways via plugins", "Only manual bank transfers", "No payment integration available", "Direct cryptocurrency only"],
                correct: 0,
                explanation: "Waldur can integrate with payment gateways (Stripe, PayPal) via plugins. Handles payment processing, status updates, refunds."
            },
            {
                q: "What's invoice approval workflow?",
                options: ["Review and approve invoices before sending", "Automatic approval always", "Invoices never need approval", "Users approve their own invoices"],
                correct: 0,
                explanation: "Invoice approval allows staff to review before sending to customers. Catch errors, adjust if needed. Configurable per organization."
            },
            {
                q: "How does downtime billing work?",
                options: ["Track and potentially credit for outages", "Charge full price regardless", "No downtime tracking exists", "Automatic full refund always"],
                correct: 0,
                explanation: "Waldur can track resource downtime. Credits or adjustments can be applied based on SLA agreements. Configurable per offering."
            },
            {
                q: "What's resource cost allocation?",
                options: ["Attribute costs to projects/departments", "Allocating resources based on cost", "Cost of allocating new resources", "Random cost distribution"],
                correct: 0,
                explanation: "Cost allocation attributes charges to specific projects, departments, or cost centers. Enables chargeback/showback reporting."
            },
        ],
        5: [
            {
                q: "How do you implement custom billing logic?",
                options: ["Custom handlers/plugins for calculation", "Modify core billing code directly", "Custom billing not supported", "External billing system only"],
                correct: 0,
                explanation: "Custom billing via plugins: define custom components, calculation methods, reporting. Hook into billing events."
            },
            {
                q: "What's metered vs fixed pricing?",
                options: ["Metered: per usage; Fixed: flat rate", "Metered is more expensive always", "Fixed means unchangeable prices", "No difference in Waldur"],
                correct: 0,
                explanation: "Metered pricing charges per actual usage (CPU hours, GB). Fixed pricing charges flat rate regardless of usage. Can combine both."
            },
            {
                q: "How does Waldur handle billing disputes?",
                options: ["Support tickets, adjustments, credit notes", "No dispute mechanism exists", "Automatic refund on any complaint", "Legal action is only option"],
                correct: 0,
                explanation: "Disputes handled via support. Staff can issue adjustments, credit notes. Audit trail maintained. Configurable dispute workflow."
            },
            {
                q: "What reports does Waldur billing generate?",
                options: ["Usage, cost, invoice, revenue reports", "No billing reports available", "Only PDF invoices generated", "Reports require external tools"],
                correct: 0,
                explanation: "Waldur generates: usage reports, cost breakdowns, invoice summaries, revenue analytics. Export to CSV/Excel. API access for custom reports."
            },
            {
                q: "How do you backfill billing data?",
                options: ["Run collection tasks for past periods", "Manually edit database records", "Backfilling is not possible", "Delete and recreate resources"],
                correct: 0,
                explanation: "If usage data missing, run collection tasks for historical periods. Check backend data availability. May need manual adjustments for gaps."
            },
        ]
    },

    'c-quotas': {
        1: [
            {
                q: "What are quotas in Waldur?",
                options: ["Limits on resource usage", "Quality metrics for resources", "Queue management system", "Quota voting system"],
                correct: 0,
                explanation: "Quotas limit how much of a resource can be used: CPU cores, RAM, storage, VMs. Prevents overuse, enables fair sharing."
            },
            {
                q: "Why are quotas important?",
                options: ["Prevent resource exhaustion and control costs", "Only for compliance requirements", "Quotas slow down the system", "Purely decorative feature"],
                correct: 0,
                explanation: "Quotas prevent single users from exhausting shared resources, control costs, enable capacity planning, ensure fair allocation."
            },
            {
                q: "At what level are quotas applied?",
                options: ["Customer, project, or user level", "Only at global system level", "Only per individual resource", "Quotas can't be hierarchical"],
                correct: 0,
                explanation: "Quotas can be set at multiple levels: customer (organization), project, user. Lower levels inherit and are bounded by higher levels."
            },
        ],
        2: [
            {
                q: "What happens when quota is exceeded?",
                options: ["New resource creation is blocked", "System crashes immediately", "Resources are automatically deleted", "Users are charged extra fees"],
                correct: 0,
                explanation: "When quota reached, new resource creation is blocked with error message. Existing resources continue working. User must delete or request increase."
            },
            {
                q: "How do users request quota increases?",
                options: ["Submit request through Waldur UI/API", "Email system administrator directly", "Quotas cannot be increased ever", "Automatic increase on payment"],
                correct: 0,
                explanation: "Users request quota increases through Waldur. Requests go to approval workflow. Administrators review and approve/reject."
            },
            {
                q: "What's quota usage tracking?",
                options: ["Monitoring current usage against limits", "Tracking quota change history", "Usage tracking is separate feature", "Manual counting of resources"],
                correct: 0,
                explanation: "Waldur tracks current usage against quotas: how much used vs allowed. Displayed in UI. Alerts when approaching limits."
            },
        ],
        3: [
            {
                q: "How are quotas inherited in hierarchy?",
                options: ["Child quotas bounded by parent quotas", "No inheritance between levels", "Children override parent quotas", "Only leaf nodes have quotas"],
                correct: 0,
                explanation: "Quota inheritance: project quotas bounded by customer quota. Can't exceed parent. Sum of children can't exceed parent."
            },
            {
                q: "What's a quota scope?",
                options: ["Entity that quota applies to", "Range of quota values allowed", "Scope of quota enforcement code", "User permission scope only"],
                correct: 0,
                explanation: "Quota scope is the entity (customer, project, offering) the quota applies to. Scopes can have different quota types."
            },
            {
                q: "How do you set default quotas?",
                options: ["Configure defaults in settings or offerings", "Defaults are hardcoded only", "No default quotas exist", "Users set their own defaults"],
                correct: 0,
                explanation: "Default quotas set in configuration or per offering. Applied when creating new projects/customers. Can be overridden per entity."
            },
            {
                q: "What's quota aggregation?",
                options: ["Summing usage across child resources", "Averaging quotas across projects", "Aggregating quota requests", "Statistical quota analysis"],
                correct: 0,
                explanation: "Quota aggregation sums usage from child entities. Customer quota usage = sum of project usages. Ensures parent limits respected."
            },
        ],
        4: [
            {
                q: "How do quotas interact with offerings?",
                options: ["Offerings can define quota limits and types", "Quotas are independent of offerings", "Offerings ignore quota system", "One global quota per offering"],
                correct: 0,
                explanation: "Offerings define which quotas apply: what types, default limits. Ordering checks offering quotas. Provider can set offering-specific limits."
            },
            {
                q: "What's quota reservation?",
                options: ["Temporarily hold quota during provisioning", "Reserving quota for future use", "Quota for reservation system only", "No reservation concept exists"],
                correct: 0,
                explanation: "During resource creation, quota is reserved before provisioning completes. If creation fails, reservation released. Prevents race conditions."
            },
            {
                q: "How do you monitor quota utilization?",
                options: ["Dashboard, reports, alerts for threshold", "No monitoring capabilities exist", "Only through database queries", "External monitoring required"],
                correct: 0,
                explanation: "Waldur provides: quota dashboards, utilization reports, configurable alerts when approaching limits. API for custom monitoring."
            },
            {
                q: "What's over-provisioning in quotas?",
                options: ["Allowing more than physical capacity", "Always having excess quota", "Quota errors in provisioning", "Over-counting resource usage"],
                correct: 0,
                explanation: "Over-provisioning allows quotas exceeding physical capacity, assuming not all users use full quota. Risky but enables flexibility."
            },
        ],
        5: [
            {
                q: "How do you implement custom quota types?",
                options: ["Define in plugin with handlers", "Custom quotas not supported", "Modify core quota code only", "Request from Waldur team"],
                correct: 0,
                explanation: "Custom quotas defined in plugins: specify quota name, aggregation logic, enforcement points. Register with quota system."
            },
            {
                q: "How do quotas work with scheduling?",
                options: ["Check quota before scheduling resources", "Scheduling ignores quotas completely", "Quotas only checked monthly", "Scheduler sets quotas automatically"],
                correct: 0,
                explanation: "Resource scheduling (SLURM jobs, etc.) checks quotas before allocation. Job rejected if would exceed quota. Enables fair scheduling."
            },
            {
                q: "What's quota policy management?",
                options: ["Rules for automatic quota adjustment", "Policy documents about quotas", "Political quota allocation system", "No policy features exist"],
                correct: 0,
                explanation: "Quota policies: automatic adjustments based on rules, time-based quotas, automatic cleanup of unused quota allocations."
            },
            {
                q: "How do you handle quota migration?",
                options: ["Transfer quota between entities", "Quotas are fixed permanently", "Delete and recreate quotas only", "Migration not supported"],
                correct: 0,
                explanation: "Quota migration: when reorganizing (merge projects, move resources), quotas can be transferred. Requires careful planning to avoid gaps."
            },
            {
                q: "What's burst quota?",
                options: ["Temporary quota increase above normal limit", "Fast quota consumption", "Quota for burst computing", "Burst of quota requests"],
                correct: 0,
                explanation: "Burst quota allows temporary exceeding normal limits for short periods. Useful for peak usage. Returns to normal after burst period."
            },
        ]
    },

    'c-notifications': {
        1: [
            {
                q: "What's the Waldur notification system for?",
                options: ["Alert users about events and changes", "Internal system debugging logs", "Notifying developers of bugs", "Network notification protocol"],
                correct: 0,
                explanation: "Notifications alert users about relevant events: resource state changes, approvals needed, quota warnings, system announcements."
            },
            {
                q: "What channels does Waldur support for notifications?",
                options: ["Email, webhooks, UI notifications", "Only email notifications available", "SMS messages exclusively", "Physical mail only"],
                correct: 0,
                explanation: "Waldur supports: email notifications, webhooks for integrations, in-app UI notifications. Channels configurable per notification type."
            },
            {
                q: "What triggers notifications?",
                options: ["Events like state changes and approvals", "Only manual admin triggers", "Random periodic notifications", "User must request each one"],
                correct: 0,
                explanation: "Notifications triggered by events: resource created/deleted, state changes, approval requests, quota thresholds, scheduled reports."
            },
        ],
        2: [
            {
                q: "How do users manage notification preferences?",
                options: ["Settings page to enable/disable types", "No user control over notifications", "Only admin controls all settings", "Preferences in external system"],
                correct: 0,
                explanation: "Users configure preferences: which notification types to receive, which channels, frequency (immediate vs digest). Accessible in profile settings."
            },
            {
                q: "What's a webhook notification?",
                options: ["HTTP callback to external URL on events", "Hook for web page updates", "Web-based notification popup", "Webhook is email alternative name"],
                correct: 0,
                explanation: "Webhooks send HTTP POST requests to configured URLs when events occur. Enables integration with external systems: Slack, ticketing systems, custom apps."
            },
            {
                q: "What's notification templating?",
                options: ["Customizable message templates", "Template for notification settings", "Notification system templates", "Creating notification types"],
                correct: 0,
                explanation: "Templates define notification content: subject, body, variables. Customizable per organization. Use Django template syntax."
            },
        ],
        3: [
            {
                q: "How does Waldur handle notification delivery?",
                options: ["Async tasks via Celery queue", "Synchronous blocking delivery", "Delivery handled by email server", "Users poll for notifications"],
                correct: 0,
                explanation: "Notifications sent via Celery async tasks. Prevents blocking user requests. Retries on failure. Tracks delivery status."
            },
            {
                q: "What's notification filtering?",
                options: ["Rules to determine who receives what", "Filtering spam notifications", "Searching notification history", "Email filtering rules only"],
                correct: 0,
                explanation: "Filters determine recipients: by role, permission, resource ownership. Not everyone gets all notifications - only relevant parties."
            },
            {
                q: "How do you test notifications?",
                options: ["Test mode sends to specified address", "No testing capability exists", "Send to all users and check", "Notifications can't be tested"],
                correct: 0,
                explanation: "Test mode redirects all notifications to specified email/webhook. Verify templates, triggering. Debug in development without spamming users."
            },
            {
                q: "What's notification batching?",
                options: ["Group multiple notifications into digest", "Sending notifications in bulk", "Batch processing notification requests", "No batching feature exists"],
                correct: 0,
                explanation: "Batching groups notifications into digest emails: hourly/daily summary instead of individual emails. Reduces inbox noise."
            },
        ],
        4: [
            {
                q: "How do you implement custom notification types?",
                options: ["Define event type, template, and handlers", "Custom types not supported", "Email Waldur support team", "Fork and modify core code"],
                correct: 0,
                explanation: "Custom notifications: define event type, create templates, register handlers. Plugin notifications follow same pattern."
            },
            {
                q: "What's the notification event system?",
                options: ["Central event bus for notification triggers", "Calendar events that notify", "Event planning notifications", "System event logs only"],
                correct: 0,
                explanation: "Event system: actions emit events, notification system subscribes. Decoupled: code emits event, notification system handles delivery."
            },
            {
                q: "How do notifications integrate with RBAC?",
                options: ["Recipients filtered by permissions", "All users get all notifications", "RBAC doesn't affect notifications", "Separate notification permissions"],
                correct: 0,
                explanation: "Notifications respect RBAC: users only notified about resources they can access. Managers get different notifications than members."
            },
            {
                q: "What's notification escalation?",
                options: ["Escalate if not acknowledged in time", "Increasing notification frequency", "Escalating notification importance", "No escalation feature exists"],
                correct: 0,
                explanation: "Escalation: if action required but not taken, escalate to manager or admin. Time-based triggers. Prevents ignored requests."
            },
        ],
        5: [
            {
                q: "How do you monitor notification delivery?",
                options: ["Delivery logs, bounce tracking, metrics", "No delivery monitoring available", "Check user complaints only", "Email server handles monitoring"],
                correct: 0,
                explanation: "Monitor: delivery logs, bounce/error tracking, success rates, queue depth. Alert on delivery failures. Dashboard for visibility."
            },
            {
                q: "What's notification deduplication?",
                options: ["Prevent duplicate notifications for same event", "Remove duplicate content text", "Merge duplicate templates", "No deduplication needed"],
                correct: 0,
                explanation: "Deduplication prevents duplicate notifications: same event in short window, multiple triggers for one action. Uses event IDs and timing."
            },
            {
                q: "How do you handle notification failures?",
                options: ["Retry with backoff, log errors, alert admin", "Failures silently ignored", "User must resend manually", "No failure handling exists"],
                correct: 0,
                explanation: "Handle failures: retry with exponential backoff, log errors, move to dead letter queue after max retries. Alert admin on persistent failures."
            },
            {
                q: "What's multi-language notification support?",
                options: ["Templates in multiple languages per user preference", "Only English supported", "Automatic translation of all text", "Separate systems per language"],
                correct: 0,
                explanation: "Multi-language: templates defined in supported languages, user preference determines which used. Falls back to default if translation missing."
            },
            {
                q: "How do you audit notification history?",
                options: ["Logs who received what when", "No notification history kept", "Only store for 24 hours", "Audit handled externally only"],
                correct: 0,
                explanation: "Audit logs: notification type, recipient, channel, timestamp, content summary. Useful for compliance, debugging, user support."
            },
        ]
    },

    'c-celery': {
        1: [
            {
                q: "What's Celery used for in Waldur?",
                options: ["Asynchronous background task processing", "Database query caching system", "Frontend state management", "User session handling"],
                correct: 0,
                explanation: "Celery handles async background tasks: resource provisioning, sync with backends, sending notifications, generating reports. Non-blocking."
            },
            {
                q: "What's a Celery task?",
                options: ["Function executed asynchronously by workers", "Item on user's todo list", "Database task queue entry", "Celery vegetable processing"],
                correct: 0,
                explanation: "Celery task is a Python function decorated with @shared_task. Called asynchronously, executed by worker processes. Returns result or raises exception."
            },
            {
                q: "What's a Celery worker?",
                options: ["Process that executes tasks from queue", "Person who manages Celery", "Thread inside main application", "External API service worker"],
                correct: 0,
                explanation: "Worker is separate process that pulls tasks from queue and executes them. Multiple workers can run in parallel. Scalable."
            },
        ],
        2: [
            {
                q: "What's a message broker in Celery?",
                options: ["Middleware that queues task messages", "Person who brokers task deals", "Broker for stock trading tasks", "Message formatting service"],
                correct: 0,
                explanation: "Message broker (Redis, RabbitMQ) queues task messages between app and workers. Waldur typically uses Redis. Handles delivery guarantees."
            },
            {
                q: "What's Celery Beat?",
                options: ["Scheduler for periodic tasks", "Monitoring heartbeat service", "Beat detection in audio tasks", "Performance benchmark tool"],
                correct: 0,
                explanation: "Celery Beat schedules periodic tasks: run every hour, daily at midnight, etc. Separate process. Waldur uses for sync, cleanup, reporting."
            },
            {
                q: "How do you define a periodic task?",
                options: ["Configure in CELERY_BEAT_SCHEDULE setting", "Call task in infinite loop", "Use time.sleep() in task", "Periodic tasks not supported"],
                correct: 0,
                explanation: "Periodic tasks defined in CELERY_BEAT_SCHEDULE: task name, schedule (crontab or interval), arguments. Beat process executes on schedule."
            },
        ],
        3: [
            {
                q: "What's task retry in Celery?",
                options: ["Automatic re-execution on failure", "User manually retrying failed task", "Retry deprecated in Celery", "Only manual retry supported"],
                correct: 0,
                explanation: "Tasks can auto-retry on failure: max_retries, retry delay, exponential backoff. Handle transient errors (network, rate limits)."
            },
            {
                q: "What's a task result backend?",
                options: ["Store task results for later retrieval", "Backend server running tasks", "Result of backend operations", "Database for task code storage"],
                correct: 0,
                explanation: "Result backend (Redis, database) stores task results. Retrieve results later by task ID. Optional - some tasks don't need results stored."
            },
            {
                q: "What's task priority in Celery?",
                options: ["Higher priority tasks processed first", "Priority of Celery over other apps", "All tasks have same priority", "Priority set by execution time"],
                correct: 0,
                explanation: "Task priority determines queue order. Higher priority processed first. Waldur uses for urgent vs batch tasks. Requires broker support."
            },
            {
                q: "What's a task chain?",
                options: ["Sequence of tasks where output feeds input", "Blockchain for task tracking", "Physical chain securing servers", "Tasks chained to prevent deletion"],
                correct: 0,
                explanation: "Task chain: tasks executed in sequence, each receiving previous result. chain(task1.s(), task2.s()). For dependent operations."
            },
        ],
        4: [
            {
                q: "What's task idempotency?",
                options: ["Same result regardless of execution count", "Task with unique ID always", "Identical task definitions", "Idempotent tasks run faster"],
                correct: 0,
                explanation: "Idempotent task: running multiple times has same effect as running once. Important for retries - avoid duplicate side effects."
            },
            {
                q: "How do you monitor Celery tasks?",
                options: ["Flower dashboard, logs, metrics", "No monitoring available for Celery", "Only through print statements", "Monitoring is automatic"],
                correct: 0,
                explanation: "Monitor with: Flower web dashboard, task logs, Prometheus metrics, alerting on failure rates. Essential for production."
            },
            {
                q: "What's task rate limiting?",
                options: ["Limit how many tasks execute per time period", "Limiting task result size", "Rate of task code changes", "No rate limiting in Celery"],
                correct: 0,
                explanation: "Rate limiting prevents overwhelming backends: max N tasks per second. Useful for external API calls, resource provisioning."
            },
            {
                q: "What's a Celery canvas?",
                options: ["Primitives for composing task workflows", "Visual task designer tool", "Canvas for drawing task diagrams", "Celery's display output"],
                correct: 0,
                explanation: "Canvas provides workflow primitives: chain, group (parallel), chord (group + callback), map. Compose complex async workflows."
            },
        ],
        5: [
            {
                q: "How do you handle long-running tasks?",
                options: ["Extend timeout, chunk work, progress tracking", "Long tasks not supported", "Just increase server memory", "Split into many small apps"],
                correct: 0,
                explanation: "Long tasks: set appropriate timeout, emit progress updates, chunk large data, consider splitting into sub-tasks. Avoid blocking workers."
            },
            {
                q: "What's task serialization?",
                options: ["Converting task arguments for transport", "Running tasks in serial order", "Serializing task code to disk", "Serial number for each task"],
                correct: 0,
                explanation: "Serialization converts task args to bytes for broker transport. JSON (safe) or pickle (flexible). JSON recommended for security."
            },
            {
                q: "How do you scale Celery workers?",
                options: ["Run multiple workers, use autoscaling", "Only one worker allowed ever", "Workers scale automatically always", "Scaling not needed for Celery"],
                correct: 0,
                explanation: "Scale: run multiple workers across machines, use autoscaling based on queue depth. Concurrency setting per worker. Distribute load."
            },
            {
                q: "What's task routing?",
                options: ["Send specific tasks to specific queues", "Network routing for tasks", "Routing tasks to users", "Task URL routing pattern"],
                correct: 0,
                explanation: "Routing sends tasks to designated queues: high-priority queue, dedicated queue for heavy tasks. Workers consume from specific queues."
            },
            {
                q: "How do you debug Celery tasks?",
                options: ["Run eager mode, check logs, test synchronously", "Celery tasks can't be debugged", "Use only print debugging", "Debug in production only"],
                correct: 0,
                explanation: "Debug: CELERY_TASK_ALWAYS_EAGER for sync execution, detailed logging, test tasks directly, Flower for inspection. Reproduce locally."
            },
        ]
    },

    'c-api-design': {
        1: [
            {
                q: "What API style does Waldur use?",
                options: ["REST API with JSON responses", "GraphQL exclusively", "SOAP XML services", "gRPC protocol only"],
                correct: 0,
                explanation: "Waldur uses REST API built with Django REST Framework. JSON request/response format. Follows REST conventions for resources and actions."
            },
            {
                q: "What's API versioning?",
                options: ["Different API versions for compatibility", "Version control for API code", "Numbering API endpoints", "Versioning is unnecessary"],
                correct: 0,
                explanation: "API versioning allows breaking changes without affecting existing clients. Waldur supports versions (v1, v2). Deprecate old versions over time."
            },
            {
                q: "What's an API endpoint?",
                options: ["URL path for accessing a resource", "End of API development", "Physical server endpoint", "Final API response data"],
                correct: 0,
                explanation: "Endpoint is URL path representing a resource or action: /api/customers/, /api/projects/{id}/. HTTP method determines operation (GET, POST, etc.)."
            },
        ],
        2: [
            {
                q: "What HTTP methods does REST API use?",
                options: ["GET, POST, PUT, PATCH, DELETE", "Only GET and POST methods", "FETCH, SEND, UPDATE, REMOVE", "REST doesn't use HTTP methods"],
                correct: 0,
                explanation: "REST uses HTTP methods: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove). Method indicates action on resource."
            },
            {
                q: "What's pagination in Waldur API?",
                options: ["Split large results into pages", "API documentation pages", "Paging through error messages", "No pagination support exists"],
                correct: 0,
                explanation: "Pagination splits large results: page_size, page parameters. Prevents overwhelming responses. Returns links to next/previous pages. Default limit configurable."
            },
            {
                q: "How does Waldur API handle authentication?",
                options: ["Token-based authentication", "No authentication required", "Only basic auth supported", "Session cookies exclusively"],
                correct: 0,
                explanation: "Waldur uses token authentication: obtain token via login, include in Authorization header. Also supports session auth for browser. Token rotation recommended."
            },
        ],
        3: [
            {
                q: "What's filtering in Waldur API?",
                options: ["Query parameters to narrow results", "Removing sensitive data from responses", "Filtering API logs", "Backend code filtering"],
                correct: 0,
                explanation: "Filtering uses query parameters: ?state=active&name__contains=test. DRF filterset defines available filters. Reduces response data."
            },
            {
                q: "What are nested resources in API?",
                options: ["Resources accessed through parent URL", "Deeply nested JSON structures", "Resources within resources file", "Nesting is anti-pattern"],
                correct: 0,
                explanation: "Nested resources: /projects/{id}/resources/ accesses resources within project. Shows relationship. Alternative to flat URLs with filters."
            },
            {
                q: "What's an API serializer?",
                options: ["Converts objects to/from JSON", "Serializes API requests to queue", "Serial number generator", "Order of API execution"],
                correct: 0,
                explanation: "Serializer converts Django models to JSON (output) and validates JSON input (create/update). Defines which fields exposed, validation rules."
            },
            {
                q: "What's HATEOAS in REST?",
                options: ["Responses include links to related actions", "Hate-based API design pattern", "Historical API tracing system", "Hardware API optimization"],
                correct: 0,
                explanation: "HATEOAS: responses include hyperlinks to related resources and available actions. Client discovers API by following links. Waldur uses hyperlinked serializers."
            },
        ],
        4: [
            {
                q: "How does Waldur handle API errors?",
                options: ["Consistent error format with codes", "Plain text error messages", "No error handling defined", "Errors return empty response"],
                correct: 0,
                explanation: "Waldur returns consistent error format: HTTP status code, error message, detail. 400 for validation, 403 for permission, 404 for not found, 500 for server error."
            },
            {
                q: "What's API throttling?",
                options: ["Limit request rate per client", "Slowing down all API responses", "Throttle API development speed", "No throttling in Waldur API"],
                correct: 0,
                explanation: "Throttling limits requests per time period per user/IP. Prevents abuse, ensures fair usage. Returns 429 when exceeded. Configurable rates."
            },
            {
                q: "How do you document Waldur API?",
                options: ["OpenAPI/Swagger auto-generated docs", "Manual documentation only", "No documentation available", "External wiki pages only"],
                correct: 0,
                explanation: "Waldur generates OpenAPI schema from code. Swagger UI for interactive exploration. Auto-generated keeps docs in sync with code."
            },
            {
                q: "What's bulk operations in API?",
                options: ["Process multiple items in one request", "Bulk data export feature", "Operations on bulk storage", "Large request body size"],
                correct: 0,
                explanation: "Bulk operations: create, update, delete multiple items in single request. More efficient than individual calls. Waldur supports for some resources."
            },
        ],
        5: [
            {
                q: "How do you maintain API backward compatibility?",
                options: ["Deprecate gradually, version breaking changes", "Change API freely anytime", "Never change API once released", "Compatibility not important"],
                correct: 0,
                explanation: "Backward compatibility: add fields without removing, deprecate with warnings, version breaking changes. Give clients time to migrate."
            },
            {
                q: "What's API schema evolution?",
                options: ["How API structure changes over time", "Database schema for API", "Evolution of API technology", "Schema evolution theory"],
                correct: 0,
                explanation: "Schema evolution: how API changes between versions. Track additions, deprecations, removals. Communicate changes via changelog. Support old versions temporarily."
            },
            {
                q: "How do you test Waldur APIs?",
                options: ["Unit tests, integration tests, API tests", "Only manual testing needed", "Testing not necessary for APIs", "Frontend tests cover APIs"],
                correct: 0,
                explanation: "API testing: unit tests for serializers/views, integration tests for full requests, automated API tests. DRF test client. Coverage for all endpoints."
            },
            {
                q: "What's hypermedia API design?",
                options: ["Links guide client through API actions", "Media streaming through API", "Hypermedia file uploads", "Multimedia API responses"],
                correct: 0,
                explanation: "Hypermedia: API responses include links to available actions. Client doesn't hardcode URLs. Discoverable API. Waldur uses hyperlinked relationships."
            },
            {
                q: "How do you handle API migrations?",
                options: ["Version new endpoints, support both, deprecate old", "Immediate switch to new API", "Migrations not needed", "Users handle migration themselves"],
                correct: 0,
                explanation: "API migration: introduce new version, support both during transition, deprecate warnings, remove old after grace period. Communicate timeline."
            },
        ]
    },

    'c-multi-tenant': {
        1: [
            {
                q: "What's multi-tenancy in Waldur?",
                options: ["Multiple organizations share one system", "Multiple servers per organization", "Tenants renting server space", "Single user per system only"],
                correct: 0,
                explanation: "Multi-tenancy: multiple organizations (tenants) share single Waldur installation. Data isolated between tenants. Efficient resource usage."
            },
            {
                q: "What's a customer in Waldur?",
                options: ["Top-level organization/tenant entity", "Individual user account", "Customer service department", "Paying subscriber only"],
                correct: 0,
                explanation: "Customer is top-level organization entity. Contains projects, users, resources. Primary tenant boundary. Billing/quotas at customer level."
            },
            {
                q: "How are tenants isolated?",
                options: ["Data filtering at application level", "Separate databases per tenant", "No isolation between tenants", "Physical server separation only"],
                correct: 0,
                explanation: "Waldur uses application-level isolation: queries filtered by customer/project. All tenants share database but can only access their data."
            },
        ],
        2: [
            {
                q: "What's the organization hierarchy in Waldur?",
                options: ["Customer > Project > Resources", "Resources > Projects > Customer", "Flat structure no hierarchy", "User > Customer > Resources"],
                correct: 0,
                explanation: "Hierarchy: Customer (organization) contains Projects, Projects contain Resources. Users belong to Customer with project-specific roles."
            },
            {
                q: "How do users belong to multiple organizations?",
                options: ["User can have roles in multiple customers", "Users limited to one organization", "Separate accounts per organization", "Not supported in Waldur"],
                correct: 0,
                explanation: "Users can have roles in multiple customers. Switch between organizations in UI. Permissions scoped to customer/project context."
            },
            {
                q: "What's project-level isolation?",
                options: ["Resources in project isolated from others", "Projects on separate servers", "Physical isolation of project files", "No project isolation exists"],
                correct: 0,
                explanation: "Project isolation: resources within project visible to project members. Different projects in same customer are separate. Enables team boundaries."
            },
        ],
        3: [
            {
                q: "How does Waldur handle shared resources?",
                options: ["Service settings shared, resources per tenant", "All resources fully shared", "No sharing capabilities exist", "Resources shared between all users"],
                correct: 0,
                explanation: "Service settings (provider credentials) can be shared across customers. Individual resources belong to specific project. Enables managed services."
            },
            {
                q: "What's tenant onboarding?",
                options: ["Process of creating new customer/organization", "Tenant rental agreement process", "User training for tenants", "Onboarding tenants to cloud"],
                correct: 0,
                explanation: "Onboarding: create customer, configure quotas, assign admin users, set up projects. Can be self-service or admin-driven. API support for automation."
            },
            {
                q: "How are quotas scoped in multi-tenant?",
                options: ["Quotas at customer, project, and offering levels", "Global quotas for all tenants", "No quota system in multi-tenant", "Quotas only for single tenant"],
                correct: 0,
                explanation: "Quotas scoped hierarchically: customer-level limits, project-level within customer, offering-level per service. Enables resource governance."
            },
            {
                q: "What's tenant customization?",
                options: ["Per-customer configuration and branding", "Customizing tenant buildings", "All tenants identical configuration", "Tenants can't be customized"],
                correct: 0,
                explanation: "Customization: per-customer settings, branding, notification templates, default quotas. Enables managed service flexibility."
            },
        ],
        4: [
            {
                q: "How do you migrate between tenants?",
                options: ["Move projects/resources between customers", "Migration not supported", "Delete and recreate in new tenant", "Export/import only option"],
                correct: 0,
                explanation: "Migration moves projects or resources between customers. Requires admin privileges. Updates ownership, preserves resource data."
            },
            {
                q: "What's cross-tenant reporting?",
                options: ["Aggregated reports across all tenants", "Tenants report on each other", "No cross-tenant data access", "External reporting tools only"],
                correct: 0,
                explanation: "Admin can generate reports across all tenants: usage summaries, billing totals, resource counts. Scoped by admin permissions."
            },
            {
                q: "How do service providers work in multi-tenant?",
                options: ["Providers can serve multiple customers", "One provider per customer only", "Providers are same as tenants", "No provider concept exists"],
                correct: 0,
                explanation: "Service providers (offerings) can serve multiple customers. Provider configures offering, customers order from it. Enables marketplace model."
            },
            {
                q: "What's tenant-aware caching?",
                options: ["Cache keys include tenant identifier", "Shared cache across all tenants", "No caching in multi-tenant", "Cache per user not tenant"],
                correct: 0,
                explanation: "Cache keys include tenant ID to prevent data leakage. Tenant A's cached data never served to Tenant B. Important for security."
            },
        ],
        5: [
            {
                q: "How do you implement tenant data isolation?",
                options: ["Filter all queries by customer/project", "Separate databases recommended", "No special implementation needed", "Encryption is sufficient"],
                correct: 0,
                explanation: "Query filtering: all querysets filtered by customer/project based on user context. Views enforce filtering. Test isolation in code reviews."
            },
            {
                q: "What's tenant provisioning automation?",
                options: ["Automated setup of new tenants", "Manual provisioning only", "Provisioning not needed", "Tenants provision themselves"],
                correct: 0,
                explanation: "Automated provisioning: API/scripts create customer, default projects, quotas, admin users. Integrates with external systems (CRM, billing)."
            },
            {
                q: "How do you handle tenant deletion?",
                options: ["Cleanup all tenant data and resources", "Just mark as deleted keep data", "Deletion not supported", "Transfer to another tenant only"],
                correct: 0,
                explanation: "Tenant deletion: terminate resources, cleanup data, handle billing. Soft delete preserves for recovery. Hard delete removes completely. Consider data retention."
            },
            {
                q: "What's federation in multi-tenant context?",
                options: ["Multiple Waldur instances sharing resources", "Federal government tenants", "Federation of tenant users", "No federation in Waldur"],
                correct: 0,
                explanation: "Federation connects multiple Waldur instances. Resources from one available in another. Enables consortium deployments, geographic distribution."
            },
            {
                q: "How do you test multi-tenant isolation?",
                options: ["Test data doesn't leak between tenants", "Testing handled by database", "Isolation testing not needed", "Manual inspection of data"],
                correct: 0,
                explanation: "Test isolation: create multiple test tenants, verify queries only return own data, test permission boundaries. Automated tests for isolation."
            },
        ]
    },

    'c-reporting': {
        1: [
            {
                q: "What does Waldur reporting provide?",
                options: ["Usage, cost, and resource analytics", "Bug reporting system only", "Report writing interface", "Newspaper-style reports"],
                correct: 0,
                explanation: "Waldur reporting provides analytics: resource usage, cost breakdowns, utilization trends, billing summaries. Helps with capacity planning and chargeback."
            },
            {
                q: "What types of reports does Waldur generate?",
                options: ["Usage, billing, cost allocation reports", "Only PDF documents", "Bug and error reports only", "No reporting capabilities"],
                correct: 0,
                explanation: "Report types: usage reports (resource consumption), billing reports (invoices, charges), cost allocation (per project/team), capacity reports."
            },
            {
                q: "How do you access reports in Waldur?",
                options: ["Web UI dashboards and export options", "Command line only", "External reporting tools only", "Reports not accessible to users"],
                correct: 0,
                explanation: "Reports accessed via web UI: dashboard views, exportable to CSV/Excel, scheduled email delivery. API access for custom integrations."
            },
        ],
        2: [
            {
                q: "What's resource utilization reporting?",
                options: ["Track actual usage vs allocated resources", "Report on resource creation", "User resource requests reporting", "Resource list generation"],
                correct: 0,
                explanation: "Utilization reports show actual vs allocated: CPU usage %, memory utilization, storage consumption. Identifies over/under-provisioned resources."
            },
            {
                q: "What's cost allocation reporting?",
                options: ["Attribute costs to departments/projects", "Allocating report generation costs", "Cost of report storage", "Pricing for report access"],
                correct: 0,
                explanation: "Cost allocation attributes charges to cost centers: departments, projects, teams. Enables chargeback (billing) or showback (visibility)."
            },
            {
                q: "How do scheduled reports work?",
                options: ["Automatically generated and sent on schedule", "Users manually schedule each run", "Reports generated on demand only", "Scheduling not supported"],
                correct: 0,
                explanation: "Scheduled reports: configure frequency (daily, weekly, monthly), recipients, format. Celery Beat triggers generation. Email or store results."
            },
        ],
        3: [
            {
                q: "What metrics does Waldur collect?",
                options: ["Usage, performance, and business metrics", "Only error metrics collected", "No metrics collection available", "Metrics from external tools only"],
                correct: 0,
                explanation: "Waldur collects: resource usage (CPU, memory, storage), API metrics, business metrics (orders, costs). Backend plugins report resource metrics."
            },
            {
                q: "How do you create custom reports?",
                options: ["API queries with filters and aggregations", "Custom reports not supported", "Modify source code only way", "Request from Waldur support"],
                correct: 0,
                explanation: "Custom reports via API: query resources, filter by criteria, aggregate data. Export results. Build dashboards with visualization tools."
            },
            {
                q: "What's trend analysis in reporting?",
                options: ["Track metrics over time to identify patterns", "Trending topics in reports", "Report popularity metrics", "Analysis of report downloads"],
                correct: 0,
                explanation: "Trend analysis tracks metrics over time: usage growth, cost trends, seasonal patterns. Enables forecasting, capacity planning."
            },
            {
                q: "How does reporting integrate with billing?",
                options: ["Share data for cost reports and invoices", "Billing and reporting are separate", "Reports generate invoices directly", "No integration between them"],
                correct: 0,
                explanation: "Reporting uses billing data: cost breakdowns, invoice summaries, spending trends. Shared data model ensures consistency."
            },
        ],
        4: [
            {
                q: "What's report data aggregation?",
                options: ["Summarize detailed data into totals", "Collecting report definitions", "Aggregating report files", "Database aggregation only"],
                correct: 0,
                explanation: "Aggregation summarizes data: total by customer, average per project, max/min values. Different granularity levels (daily, monthly, yearly)."
            },
            {
                q: "How do you export report data?",
                options: ["CSV, Excel, JSON, PDF formats", "Only view in browser", "Export to proprietary format", "No export functionality"],
                correct: 0,
                explanation: "Export formats: CSV for data analysis, Excel for business users, JSON for integration, PDF for formal reports. API enables custom exports."
            },
            {
                q: "What's report caching?",
                options: ["Store generated reports for quick access", "Caching is bad for reports", "Reports always generated fresh", "Cache report templates only"],
                correct: 0,
                explanation: "Report caching stores generated reports. Avoids regenerating expensive reports. Invalidate when source data changes. TTL-based expiration."
            },
            {
                q: "How do you filter reports by scope?",
                options: ["Customer, project, date range, resource type", "No filtering capabilities", "Filter in external tools only", "Only date range filtering"],
                correct: 0,
                explanation: "Filter reports: by organization (customer), project, date range, resource type, tags. Combine filters for specific views."
            },
        ],
        5: [
            {
                q: "How do you implement custom report plugins?",
                options: ["Define data sources, queries, and renderers", "Custom plugins not supported", "Modify core reporting code", "Use external BI tools only"],
                correct: 0,
                explanation: "Custom plugins: define metric collectors, report queries, output renderers. Register with reporting framework. Follow plugin patterns."
            },
            {
                q: "What's real-time vs batch reporting?",
                options: ["Real-time: live data; Batch: processed periodically", "They are identical approaches", "Real-time doesn't exist in Waldur", "Batch is deprecated"],
                correct: 0,
                explanation: "Real-time shows current state (dashboard). Batch processes historical data periodically (daily summaries). Choose based on need."
            },
            {
                q: "How do you ensure report accuracy?",
                options: ["Validate data sources, test calculations", "Reports are always accurate", "Accuracy not measurable", "Manual verification only way"],
                correct: 0,
                explanation: "Ensure accuracy: validate source data, unit tests for calculations, reconcile with billing, document methodology. Audit periodically."
            },
            {
                q: "What's report access control?",
                options: ["Permissions determine who sees what", "All reports visible to all users", "Admin controls all report access", "No access control for reports"],
                correct: 0,
                explanation: "Report access follows permissions: users see their scope's data. Admins see all. Cross-customer reports require admin rights."
            },
            {
                q: "How do you integrate with external BI tools?",
                options: ["API exports data to BI platforms", "No external integration possible", "Built-in BI sufficient", "Manual data entry only"],
                correct: 0,
                explanation: "BI integration: API provides data exports, scheduled data dumps, direct database access for analytics. Connect Grafana, Tableau, Power BI."
            },
        ]
    },

    'c-waldur-ui': {
        1: [
            {
                q: "What framework does Waldur UI use?",
                options: ["React with TypeScript", "Angular framework", "Vue.js library", "jQuery and plain JavaScript"],
                correct: 0,
                explanation: "Waldur Homeport uses React with TypeScript. Modern component-based architecture. Redux for state management."
            },
            {
                q: "What's Redux used for in Waldur?",
                options: ["Global state management", "Database queries", "API routing", "Form validation only"],
                correct: 0,
                explanation: "Redux manages global application state: user session, fetched data, UI state. Single source of truth. Predictable state updates."
            },
            {
                q: "What's a React component?",
                options: ["Reusable UI building block", "Server-side rendering unit", "Database component", "API endpoint handler"],
                correct: 0,
                explanation: "React component is reusable UI piece. Has props (inputs), state (internal), and renders JSX. Waldur has component library for consistency."
            },
        ],
        2: [
            {
                q: "How is Waldur UI structured?",
                options: ["Feature-based folder organization", "Single file application", "Database-driven structure", "Random file organization"],
                correct: 0,
                explanation: "Feature-based structure: each feature (customers, projects, etc.) has folder with components, actions, reducers. Shared components in common."
            },
            {
                q: "What's the Waldur component library?",
                options: ["Shared reusable UI components", "External npm package", "Component documentation site", "Library for server components"],
                correct: 0,
                explanation: "Waldur has shared component library: buttons, forms, tables, modals. Ensures consistency. Documented with examples."
            },
            {
                q: "How does routing work in Waldur UI?",
                options: ["React Router for client-side routing", "Server-side routing only", "No routing - single page", "URL routing via Redux"],
                correct: 0,
                explanation: "React Router handles client-side routing. URL maps to components. Navigation without full page reload. Nested routes for hierarchy."
            },
        ],
        3: [
            {
                q: "How does Waldur UI handle API calls?",
                options: ["Redux actions with async middleware", "Direct fetch in components", "Server-side API only", "No API calls from frontend"],
                correct: 0,
                explanation: "API calls via Redux actions. Async middleware (redux-thunk) handles promises. Results stored in Redux state. Components read from state."
            },
            {
                q: "What's lazy loading in Waldur UI?",
                options: ["Load code only when route accessed", "Slow loading on purpose", "Loading indicator component", "Lazy evaluation of state"],
                correct: 0,
                explanation: "Lazy loading splits code by route. Code for route loaded only when navigated to. Improves initial load time. React.lazy + Suspense."
            },
            {
                q: "How does Waldur handle UI theming?",
                options: ["CSS variables and theme configuration", "Hardcoded styles only", "No theming support", "External CSS files only"],
                correct: 0,
                explanation: "Theming via CSS variables, configurable colors/branding. Organizations can customize appearance. Bootstrap-based with overrides."
            },
            {
                q: "What's the Waldur translation system?",
                options: ["react-intl for internationalization", "Browser auto-translation", "No translation support", "Server-side translation only"],
                correct: 0,
                explanation: "Internationalization via react-intl. Message catalogs per language. Formatters for dates, numbers. Add translations in locale files."
            },
        ],
        4: [
            {
                q: "How do you add new features to Waldur UI?",
                options: ["Create feature folder with components, actions, reducers", "Modify existing components only", "Features added via plugins only", "Request from core team"],
                correct: 0,
                explanation: "New features: create folder under features, add components, define Redux actions/reducers, add routes, connect to API. Follow existing patterns."
            },
            {
                q: "What's code splitting in Waldur UI?",
                options: ["Split bundles for faster loading", "Split code between developers", "Code review splitting", "Server-side code separation"],
                correct: 0,
                explanation: "Code splitting creates separate bundles per route/feature. User downloads only needed code. Webpack handles splitting. Improves performance."
            },
            {
                q: "How does Waldur UI handle errors?",
                options: ["Error boundaries and toast notifications", "Console.log only", "Crashes on any error", "Errors ignored silently"],
                correct: 0,
                explanation: "Error boundaries catch component errors, show fallback UI. API errors shown as toast notifications. User-friendly error messages."
            },
            {
                q: "What testing tools does Waldur UI use?",
                options: ["Jest and React Testing Library", "No frontend testing", "Manual testing only", "Selenium exclusively"],
                correct: 0,
                explanation: "Testing: Jest for unit tests, React Testing Library for component tests. Test user interactions. Coverage targets. CI runs tests."
            },
        ],
        5: [
            {
                q: "How do you optimize Waldur UI performance?",
                options: ["Memoization, code splitting, lazy loading", "Performance optimization not needed", "Just add more servers", "Disable features for speed"],
                correct: 0,
                explanation: "Optimize: React.memo for expensive components, useMemo/useCallback, code splitting, lazy loading, virtualization for large lists."
            },
            {
                q: "How does Waldur UI handle real-time updates?",
                options: ["Polling or WebSocket connections", "Page refresh only way", "Real-time not supported", "Server push via HTTP"],
                correct: 0,
                explanation: "Real-time via polling (periodic API calls) or WebSocket for instant updates. Resource state changes reflected in UI. Configurable intervals."
            },
            {
                q: "What's the plugin UI architecture?",
                options: ["Extension points for plugin components", "Plugins modify core code", "No UI plugin support", "Plugins are backend only"],
                correct: 0,
                explanation: "UI plugins: register components at extension points, add routes, extend menus. Core provides hooks for plugin UI. Maintains modularity."
            },
            {
                q: "How do you debug Waldur UI?",
                options: ["React DevTools, Redux DevTools, browser console", "No debugging available", "Print statements only", "Debug in production only"],
                correct: 0,
                explanation: "Debug tools: React DevTools for components, Redux DevTools for state, browser console, network tab. Source maps for development."
            },
            {
                q: "What's accessible UI design in Waldur?",
                options: ["ARIA attributes, keyboard navigation, contrast", "Accessibility not implemented", "Screen reader software handles it", "Only visual design matters"],
                correct: 0,
                explanation: "Accessibility: ARIA labels, keyboard navigation, sufficient color contrast, focus management. Follows WCAG guidelines. Enables assistive technology."
            },
        ]
    },

    'c-waldur-forms': {
        1: [
            {
                q: "What library does Waldur use for forms?",
                options: ["React Hook Form or Redux Form", "Plain HTML forms only", "Custom form library", "No form library used"],
                correct: 0,
                explanation: "Waldur uses form libraries for complex forms: validation, field state, submission handling. Provides consistent form UX."
            },
            {
                q: "What's form validation?",
                options: ["Checking input meets requirements", "Validating form design looks good", "Form performance testing", "Backend form processing"],
                correct: 0,
                explanation: "Form validation checks user input: required fields, format (email, phone), ranges, custom rules. Show errors, prevent invalid submission."
            },
            {
                q: "What's a form field component?",
                options: ["Reusable input with label and validation", "Database field representation", "Field in a data form", "Server-side form field"],
                correct: 0,
                explanation: "Form field component wraps input with label, error display, help text. Standardizes appearance. Connects to form state automatically."
            },
        ],
        2: [
            {
                q: "How does client-side validation work?",
                options: ["Validate before server submission", "Client validates server response", "Only server validates forms", "Validation runs on database"],
                correct: 0,
                explanation: "Client-side: validate in browser before submit. Instant feedback. Still validate on server (client can be bypassed). Better UX."
            },
            {
                q: "What are controlled components?",
                options: ["Form inputs controlled by React state", "Components with access control", "Server-controlled components", "Admin-managed components"],
                correct: 0,
                explanation: "Controlled components: React state is single source of truth for input value. onChange updates state, value comes from state. Enables validation, transformation."
            },
            {
                q: "How do you handle form submission?",
                options: ["onSubmit handler calls API", "Form auto-submits to server", "Submission handled by browser", "No submission handling needed"],
                correct: 0,
                explanation: "onSubmit handler: prevent default, validate, call API action, handle success/error. Show loading state during submission. Reset or navigate on success."
            },
        ],
        3: [
            {
                q: "What's conditional form fields?",
                options: ["Fields shown based on other field values", "Fields with if-statements", "Conditionally required fields", "Optional form fields only"],
                correct: 0,
                explanation: "Conditional fields: show/hide based on other values. Example: show 'other' text field when 'other' selected in dropdown. Dynamic forms."
            },
            {
                q: "How do you handle form arrays?",
                options: ["Dynamic list of repeated field groups", "Arrays in select dropdowns", "Multiple forms in array", "Array validation rules"],
                correct: 0,
                explanation: "Form arrays: add/remove repeated field groups. Example: multiple IP addresses, multiple team members. useFieldArray hook or similar."
            },
            {
                q: "What's form field error handling?",
                options: ["Display validation errors near fields", "Errors logged to console only", "Single error for whole form", "Errors not shown to users"],
                correct: 0,
                explanation: "Field-level errors shown near each field. Clear when corrected. Summary of all errors optional. Accessible error messages."
            },
            {
                q: "How do async validators work?",
                options: ["Validate against server during input", "Async is same as sync validation", "Only on form submission", "Async validation not supported"],
                correct: 0,
                explanation: "Async validators call server: check uniqueness, verify availability. Debounce to avoid excessive calls. Show loading state."
            },
        ],
        4: [
            {
                q: "What's form state management?",
                options: ["Track values, errors, touched, dirty status", "State stored in database", "Only track current value", "No state management needed"],
                correct: 0,
                explanation: "Form state: values (current inputs), errors (validation issues), touched (user interacted), dirty (changed from initial). Enables smart UX."
            },
            {
                q: "How do you handle file uploads in forms?",
                options: ["File input with preview and upload handling", "Files not supported in forms", "Only URL input for files", "Backend handles file forms"],
                correct: 0,
                explanation: "File uploads: file input component, preview images, progress indicator, upload to server (may be separate endpoint). Validate type/size."
            },
            {
                q: "What's form wizard pattern?",
                options: ["Multi-step form with navigation", "Wizard character in form UI", "Automatic form generation", "Form with helpful tooltips"],
                correct: 0,
                explanation: "Form wizard: split complex form into steps. Next/back navigation. Validate per step. Summary before final submit. Progress indicator."
            },
            {
                q: "How do you pre-populate forms?",
                options: ["Load initial values from API or props", "Users always start with empty forms", "Pre-population not possible", "Database pre-fills forms"],
                correct: 0,
                explanation: "Pre-populate: for edit forms, load existing data as initial values. Pass via props or fetch in component. Reset to initial available."
            },
        ],
        5: [
            {
                q: "How do you test forms?",
                options: ["Simulate user input and verify behavior", "Forms don't need testing", "Manual testing sufficient", "Only test submit button"],
                correct: 0,
                explanation: "Test forms: simulate typing, check validation errors appear, submit and verify API called, test edge cases. React Testing Library for interactions."
            },
            {
                q: "What's optimistic form updates?",
                options: ["Update UI before server confirms", "Being optimistic about form success", "Server-optimistic responses", "Optimized form rendering"],
                correct: 0,
                explanation: "Optimistic updates: show success immediately, rollback if server fails. Better perceived performance. Use for likely-to-succeed operations."
            },
            {
                q: "How do you handle complex form logic?",
                options: ["Custom hooks to encapsulate logic", "Put all logic in component", "Complex forms not supported", "Logic only in validation"],
                correct: 0,
                explanation: "Complex logic: custom hooks encapsulate business rules, computed values, conditional logic. Keep components clean. Reusable across forms."
            },
            {
                q: "What's form performance optimization?",
                options: ["Minimize re-renders, debounce validation", "Forms are always fast enough", "Optimization not possible", "Just simplify the form"],
                correct: 0,
                explanation: "Optimize: minimize re-renders (subscribe only to needed state), debounce expensive validation, virtualize long option lists."
            },
            {
                q: "How do you handle form accessibility?",
                options: ["Labels, ARIA attributes, keyboard support", "Accessibility handled by browser", "Not relevant for forms", "Screen readers not supported"],
                correct: 0,
                explanation: "Accessible forms: proper labels, error announcements, keyboard navigation, focus management. Associate errors with fields via ARIA."
            },
        ]
    },

    'c-waldur-tables': {
        1: [
            {
                q: "What are data tables used for in Waldur?",
                options: ["Display lists of resources with features", "Spreadsheet editing only", "Database table management", "HTML table styling"],
                correct: 0,
                explanation: "Data tables display resource lists: customers, projects, resources. Features: sorting, filtering, pagination, actions. Primary data view."
            },
            {
                q: "What's table pagination?",
                options: ["Split large data into pages", "Page layout for tables", "Pagination of table code", "Navigating table rows"],
                correct: 0,
                explanation: "Pagination splits large datasets into pages. User navigates pages. Page size configurable. Server-side for performance with big data."
            },
            {
                q: "What's column sorting in tables?",
                options: ["Order rows by column values", "Sorting column definitions", "Column position arrangement", "Sort order of table creation"],
                correct: 0,
                explanation: "Column sorting orders rows by clicked column. Ascending/descending toggle. Can be client-side or server-side. Visual indicator shows sort state."
            },
        ],
        2: [
            {
                q: "What's table filtering?",
                options: ["Show only rows matching criteria", "Filter table from page", "Remove table columns", "Filter table events"],
                correct: 0,
                explanation: "Filtering shows subset of rows: by status, date range, search text. Filter controls above table. Can combine multiple filters."
            },
            {
                q: "What are row actions in tables?",
                options: ["Operations available on each row", "Actions that create rows", "Row-level animation", "Database row operations"],
                correct: 0,
                explanation: "Row actions: buttons/menu for operations on item (edit, delete, view details). Context-sensitive based on item state and user permissions."
            },
            {
                q: "What's table column configuration?",
                options: ["Define which columns to display", "Configure column database", "Column width only", "No configuration possible"],
                correct: 0,
                explanation: "Column config: which columns shown, order, width, formatter. Can be user-customizable or fixed. Save preferences per user."
            },
        ],
        3: [
            {
                q: "What's server-side vs client-side tables?",
                options: ["Server-side: data fetched per page; Client: all data loaded", "Server tables on server", "No difference for users", "Client-side not supported"],
                correct: 0,
                explanation: "Server-side: fetch only current page from API. Good for large datasets. Client-side: load all data, filter/sort in browser. For small datasets."
            },
            {
                q: "What's table state management?",
                options: ["Track current page, sort, filters", "State of table loading", "Table HTML state", "No state for tables"],
                correct: 0,
                explanation: "Table state: current page, page size, sort column/direction, active filters, selected rows. Managed in component or URL params."
            },
            {
                q: "How do you export table data?",
                options: ["Download as CSV/Excel from table", "Copy-paste only option", "Export not available", "Screenshot the table"],
                correct: 0,
                explanation: "Export feature downloads visible data: CSV for data analysis, Excel for business users. May export current page or all matching filters."
            },
            {
                q: "What's row selection in tables?",
                options: ["Select one or multiple rows for bulk actions", "Selecting row height", "Row color selection", "No row selection needed"],
                correct: 0,
                explanation: "Row selection: checkbox per row, select all. Enable bulk actions (delete multiple, change state). Track selection in state."
            },
        ],
        4: [
            {
                q: "What's virtualized tables?",
                options: ["Render only visible rows for performance", "Virtual reality tables", "Virtualized storage tables", "Tables in virtual machines"],
                correct: 0,
                explanation: "Virtualization renders only visible rows in DOM. Handles thousands of rows smoothly. Essential for large datasets without pagination."
            },
            {
                q: "How do you handle table loading states?",
                options: ["Show skeletons or spinners during load", "Freeze table during load", "No loading indication needed", "Empty table until loaded"],
                correct: 0,
                explanation: "Loading states: skeleton rows, spinner overlay, loading text. Indicate partial loading for server-side. Maintain layout stability."
            },
            {
                q: "What's inline editing in tables?",
                options: ["Edit cell values directly in table", "Edit table HTML inline", "Editing table structure", "No inline editing possible"],
                correct: 0,
                explanation: "Inline editing: click cell to edit value directly. Save on blur or enter. Validate before saving. Alternative to modal forms."
            },
            {
                q: "How do you customize table cell rendering?",
                options: ["Custom cell renderer components", "Only text in cells allowed", "CSS customization only", "Renderer not customizable"],
                correct: 0,
                explanation: "Custom renderers: render special content (links, badges, icons, progress bars). Formatter functions or components per column."
            },
        ],
        5: [
            {
                q: "How do you optimize large tables?",
                options: ["Virtualization, server-side ops, pagination", "Large tables not supported", "Just add more memory", "Optimization not needed"],
                correct: 0,
                explanation: "Optimize: virtualize rows, server-side sorting/filtering, pagination, memoize cell renders, debounce filters. Profile to find bottlenecks."
            },
            {
                q: "What's table state persistence?",
                options: ["Save table config across sessions", "Persist table in database", "State saved automatically", "Persistence not supported"],
                correct: 0,
                explanation: "Persistence: save column config, sort, filters to localStorage or user preferences. Restore on return. Per-table settings."
            },
            {
                q: "How do you handle table errors?",
                options: ["Error states for load failures, retry option", "Errors crash the table", "Empty table on error", "No error handling"],
                correct: 0,
                explanation: "Handle errors: show error message on load failure, retry button, partial data indication. Don't lose user's filter state on error."
            },
            {
                q: "What's accessible table design?",
                options: ["Proper table markup, ARIA attributes, keyboard nav", "Tables are accessible by default", "Screen readers handle it", "Accessibility not possible"],
                correct: 0,
                explanation: "Accessible tables: semantic table elements, ARIA labels, keyboard navigation for actions, proper column headers. Test with screen readers."
            },
            {
                q: "How do you test table components?",
                options: ["Test rendering, interactions, pagination, filtering", "Tables too complex to test", "Manual testing only", "Test framework handles it"],
                correct: 0,
                explanation: "Test tables: render with mock data, test sorting/filtering, verify pagination, test row actions. Integration tests for API interaction."
            },
        ]
    },

    'c-waldur-modals': {
        1: [
            {
                q: "What's a modal dialog?",
                options: ["Overlay window requiring user action", "Dialog about application modes", "Mode selection interface", "Background processing dialog"],
                correct: 0,
                explanation: "Modal is overlay window that blocks interaction with rest of page until dismissed. Used for forms, confirmations, important information."
            },
            {
                q: "When should you use a modal?",
                options: ["Important actions needing focus", "All forms should be modals", "Never use modals", "Only for error messages"],
                correct: 0,
                explanation: "Use modals for: confirmations (delete?), focused forms, important alerts. Don't overuse - disruptive to flow. Consider inline alternatives."
            },
            {
                q: "What's modal state management?",
                options: ["Track which modals are open", "State inside modal only", "No state for modals", "Modals manage own state"],
                correct: 0,
                explanation: "Modal state: which modals open, data for modal content. Can be local state, context, or Redux. Open/close functions."
            },
        ],
        2: [
            {
                q: "How do you open modals in Waldur?",
                options: ["Actions that dispatch modal open events", "Direct DOM manipulation", "Only links can open modals", "Modals open automatically"],
                correct: 0,
                explanation: "Open modals via actions: dispatch action with modal type and data. Modal manager renders appropriate modal. Decoupled from trigger."
            },
            {
                q: "What's a confirmation modal?",
                options: ["Ask user to confirm before action", "Modal confirming success", "Password confirmation modal", "Configuration settings modal"],
                correct: 0,
                explanation: "Confirmation modal asks 'Are you sure?' before destructive actions (delete, stop resource). Prevents accidental actions. Confirm/Cancel buttons."
            },
            {
                q: "How do you pass data to modals?",
                options: ["Include data in modal open action", "Global variables for modal data", "Modal fetches own data", "Data passed via URL only"],
                correct: 0,
                explanation: "Pass data when opening: modal receives props with context (resource ID, action type). Modal can fetch additional data if needed."
            },
        ],
        3: [
            {
                q: "What's modal backdrop handling?",
                options: ["Click outside to close modal", "Backdrop is purely decorative", "Backdrop clicking not supported", "Backdrop prevents scrolling only"],
                correct: 0,
                explanation: "Backdrop click typically closes modal. Can be disabled for important modals. Provides intuitive dismissal. Darkens background for focus."
            },
            {
                q: "How do you handle modal accessibility?",
                options: ["Focus trap, ARIA attributes, escape key", "Modals are accessible by default", "Browser handles accessibility", "Accessibility not important"],
                correct: 0,
                explanation: "Accessible modals: focus trapped inside, return focus on close, ARIA role='dialog', labelledby title, Escape key closes. Test with screen readers."
            },
            {
                q: "What's a form modal?",
                options: ["Modal containing a form", "Modal form factor", "Form for modal settings", "Modal for formatting"],
                correct: 0,
                explanation: "Form modal: modal with input form inside. Submit closes modal on success. Show validation errors inline. Often for create/edit operations."
            },
            {
                q: "How do you handle modal loading states?",
                options: ["Show spinner during async operations", "Modals load instantly always", "Disable modal during load", "No loading indicator needed"],
                correct: 0,
                explanation: "Loading states: show spinner when fetching data or submitting. Disable submit button during submission. Prevent double-submit."
            },
        ],
        4: [
            {
                q: "What's a wizard modal?",
                options: ["Multi-step modal with navigation", "Magical wizard character", "Help wizard feature", "Setup wizard only"],
                correct: 0,
                explanation: "Wizard modal has multiple steps: form spread across screens. Next/Back navigation. Progress indicator. Final step confirms all."
            },
            {
                q: "How do you stack multiple modals?",
                options: ["z-index management, backdrop per modal", "Only one modal at a time", "Stacking not supported", "Modals close previous automatically"],
                correct: 0,
                explanation: "Stacking: modal opens another modal. Manage z-index stack. Each has backdrop. Closing returns to previous. Use sparingly - complex."
            },
            {
                q: "What's modal size and positioning?",
                options: ["Configurable size and centered position", "Fixed size only", "Full screen modals only", "Position not configurable"],
                correct: 0,
                explanation: "Modal size: small, medium, large, full-screen variants. Typically centered. May scroll for tall content. Responsive for mobile."
            },
            {
                q: "How do you animate modals?",
                options: ["CSS transitions for open/close", "No animations recommended", "JavaScript animations only", "Animations slow modals down"],
                correct: 0,
                explanation: "Animate: fade backdrop, slide/scale modal. CSS transitions or animation library. Exit animations on close. Keep snappy (200-300ms)."
            },
        ],
        5: [
            {
                q: "How do you test modal components?",
                options: ["Test open/close, content rendering, actions", "Modals can't be tested", "Only test modal trigger", "Visual testing only"],
                correct: 0,
                explanation: "Test modals: trigger open, verify content renders, test form submission, verify close behavior. Check accessibility. Test keyboard navigation."
            },
            {
                q: "What's modal portal rendering?",
                options: ["Render modal outside component tree", "Portal to another application", "Modal for portals feature", "Rendering in portal view"],
                correct: 0,
                explanation: "Portal renders modal at document body level, not inside component. Avoids z-index/overflow issues. React createPortal or library support."
            },
            {
                q: "How do you handle modal state cleanup?",
                options: ["Reset form state on close", "State persists between opens", "No cleanup needed", "Framework handles cleanup"],
                correct: 0,
                explanation: "Cleanup: reset form state on close, clear errors, cancel pending requests. Don't persist stale data. Consider unmount vs hide."
            },
            {
                q: "What's responsive modal design?",
                options: ["Adapt modal for different screen sizes", "Responsive to user actions", "Modal responds quickly", "Fixed design for all screens"],
                correct: 0,
                explanation: "Responsive: full-screen on mobile, centered overlay on desktop. Adjust padding, buttons. Consider drawer pattern on mobile."
            },
            {
                q: "How do you prevent modal content overflow?",
                options: ["Scrollable body, fixed header/footer", "Overflow just hidden", "Don't put long content in modals", "No overflow handling"],
                correct: 0,
                explanation: "Handle overflow: modal body scrolls, header and action buttons fixed. Max-height based on viewport. Test with long content."
            },
        ]
    },

    'c-site-agent': {
        1: [
            {
                q: "What's Waldur Site Agent?",
                options: ["Local agent running at provider site", "Website monitoring agent", "User support agent", "Sales representative"],
                correct: 0,
                explanation: "Site Agent runs at provider location, connecting local resources (SLURM, storage) to central Waldur. Enables remote resource management."
            },
            {
                q: "Why use Site Agent?",
                options: ["Manage resources behind firewalls", "Agents are faster than API", "Required for all deployments", "Marketing purposes only"],
                correct: 0,
                explanation: "Site Agent enables managing resources not directly accessible: behind firewalls, in private networks. Agent initiates outbound connections."
            },
            {
                q: "How does Site Agent communicate?",
                options: ["Outbound HTTPS to central Waldur", "Inbound connections to agent", "Direct database access", "Email-based communication"],
                correct: 0,
                explanation: "Agent initiates outbound HTTPS connections to central Waldur. No inbound required. Polls for tasks, reports status. Firewall-friendly."
            },
        ],
        2: [
            {
                q: "What tasks does Site Agent perform?",
                options: ["Provision resources, collect metrics, sync state", "Only monitoring tasks", "User authentication only", "No specific tasks defined"],
                correct: 0,
                explanation: "Agent tasks: provision/delete local resources, collect usage metrics, sync resource state, execute operations requested by central Waldur."
            },
            {
                q: "How is Site Agent configured?",
                options: ["Configuration file with credentials and settings", "Auto-configured remotely", "No configuration needed", "Configured in database only"],
                correct: 0,
                explanation: "Agent configured via config file: central Waldur URL, authentication token, local backend settings. Can be managed via deployment tools."
            },
            {
                q: "What's the agent-server protocol?",
                options: ["Pull tasks from queue, report results", "REST API with webhooks", "GraphQL subscriptions", "Custom binary protocol"],
                correct: 0,
                explanation: "Agent polls central server for pending tasks. Executes locally. Reports results back. Simple and reliable over unreliable networks."
            },
        ],
        3: [
            {
                q: "What backends does Site Agent support?",
                options: ["SLURM, OpenStack, storage systems", "Only SLURM integration", "Generic backends only", "Backend support varies"],
                correct: 0,
                explanation: "Agent supports multiple backends: SLURM for HPC, OpenStack deployments, storage systems, custom backends via plugins."
            },
            {
                q: "How does Site Agent handle failures?",
                options: ["Retry with backoff, report errors to central", "Fails silently on errors", "Manual intervention required", "No failure handling"],
                correct: 0,
                explanation: "Failure handling: retry tasks with exponential backoff, report persistent errors to central. Task queue ensures no lost work."
            },
            {
                q: "What's agent registration?",
                options: ["Agent authenticates with central Waldur", "User registers for agent access", "Agent self-registration process", "Registration not required"],
                correct: 0,
                explanation: "Registration: agent authenticates to central Waldur using token or certificate. Establishes trust. Configuration specifies which service provider."
            },
            {
                q: "How do you monitor Site Agent?",
                options: ["Health endpoint, logs, central dashboard", "No monitoring available", "Agent self-monitors only", "External tools required"],
                correct: 0,
                explanation: "Monitor: agent health endpoint, local logs, central Waldur shows agent status and last check-in. Alert on communication failures."
            },
        ],
        4: [
            {
                q: "How do you develop Site Agent plugins?",
                options: ["Python modules implementing defined interface", "Only core team can add plugins", "Plugins not supported", "JavaScript plugins only"],
                correct: 0,
                explanation: "Agent plugins: Python modules implementing task handlers. Define supported operations. Register with agent. Follow existing plugin patterns."
            },
            {
                q: "What's agent task queueing?",
                options: ["Tasks queued until agent processes them", "No queueing - immediate execution", "Agent queues in database only", "Central manages all queues"],
                correct: 0,
                explanation: "Central queues tasks for agent. Agent pulls when ready. Handles offline agents: tasks wait until agent reconnects. Order and priority supported."
            },
            {
                q: "How does Site Agent handle security?",
                options: ["TLS encryption, token auth, minimal privileges", "Security handled by network only", "No special security measures", "Agents have full admin access"],
                correct: 0,
                explanation: "Security: TLS for all communication, token-based authentication, agent has minimal privileges needed, secrets encrypted in config."
            },
            {
                q: "What's agent high availability?",
                options: ["Multiple agents for redundancy", "HA not supported for agents", "Single agent is sufficient", "Central handles HA"],
                correct: 0,
                explanation: "HA: multiple agents can serve same site. Task distribution across agents. If one fails, others continue. Central coordinates."
            },
        ],
        5: [
            {
                q: "How do you upgrade Site Agent?",
                options: ["Rolling upgrade with version compatibility", "Full downtime required", "Upgrades not recommended", "Central upgrades automatically"],
                correct: 0,
                explanation: "Upgrade: check version compatibility, update agent software, restart. Rolling upgrade for HA setups. Central backward compatible with older agents."
            },
            {
                q: "What's the agent scaling model?",
                options: ["Horizontal scaling with multiple agents", "Vertical scaling only option", "Scaling not supported", "Central handles all scaling"],
                correct: 0,
                explanation: "Scale horizontally: add more agents for load distribution. Useful for large sites with many resources. Central load-balances task distribution."
            },
            {
                q: "How do you troubleshoot Site Agent?",
                options: ["Check logs, test connectivity, verify config", "No troubleshooting available", "Only central team can troubleshoot", "Reinstall to fix issues"],
                correct: 0,
                explanation: "Troubleshoot: check agent logs, test connectivity to central, verify configuration, check backend connectivity. Central shows agent errors."
            },
            {
                q: "What's agent capability reporting?",
                options: ["Agent reports what operations it supports", "Central knows all agent capabilities", "Capabilities hardcoded", "No capability reporting"],
                correct: 0,
                explanation: "Agent reports capabilities to central: supported backends, available resources, version info. Central uses to route appropriate tasks."
            },
            {
                q: "How do you test Site Agent integrations?",
                options: ["Test environment, mock backends, integration tests", "No testing methodology", "Test in production only", "Central team tests everything"],
                correct: 0,
                explanation: "Testing: local test environment, mock backend responses, integration tests with real backends. CI for automated testing."
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
                options: ["Open source cloud computing platform", "Linux-based operating system kernel", "Relational database management system", "Container runtime environment"],
                correct: 0,
                explanation: "OpenStack is an open source cloud computing platform that controls pools of compute, storage, and networking resources, enabling private and public cloud deployments.",
                learnMore: { url: "https://www.openstack.org/software/", text: "📚 OpenStack Overview" }
            },
            {
                q: "What's the relationship between OpenStack and IaaS?",
                options: ["OpenStack provides Infrastructure as a Service", "OpenStack is a Platform as a Service", "OpenStack is a Software as a Service", "OpenStack has no cloud service model"],
                correct: 0,
                explanation: "OpenStack provides IaaS (Infrastructure as a Service): on-demand compute, storage, and networking resources. Users get virtual infrastructure without managing physical hardware.",
                learnMore: { url: "https://docs.openstack.org/", text: "📚 OpenStack Docs" }
            },
            {
                q: "Is OpenStack a single application or collection of services?",
                options: ["Collection of interconnected services", "Single monolithic application binary", "Linux operating system distribution", "Relational database management tool"],
                correct: 0,
                explanation: "OpenStack is a collection of services (Nova, Neutron, Cinder, etc.) that work together. Each service handles a specific function and communicates via APIs.",
                learnMore: { url: "https://www.openstack.org/software/project-navigator/", text: "📚 OpenStack Projects" }
            },
        ],
        2: [
            {
                q: "What OpenStack component manages compute (VMs)?",
                options: ["Nova - the compute service", "Neutron - the networking layer", "Cinder - the block storage", "Swift - the object store"],
                correct: 0,
                explanation: "Nova is the compute service managing virtual machines. It handles VM lifecycle (create, resize, migrate, delete), scheduling, and hypervisor interaction.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/", text: "📚 Nova Documentation" }
            },
            {
                q: "What does Keystone provide in OpenStack?",
                options: ["Identity and authentication service", "Block storage volume management", "Virtual networking capabilities", "Compute instance scheduling"],
                correct: 0,
                explanation: "Keystone is the identity service providing authentication (who you are) and authorization (what you can do). It manages users, projects, roles, and service catalog.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/", text: "📚 Keystone Documentation" }
            },
            {
                q: "What's Glance used for in OpenStack?",
                options: ["Image service for VM disk images", "Cluster monitoring and alerting", "Virtual network configuration", "Block storage volume service"],
                correct: 0,
                explanation: "Glance is the image service storing and retrieving VM disk images. It supports multiple formats (qcow2, raw, vmdk) and backends (file, Swift, Ceph).",
                learnMore: { url: "https://docs.openstack.org/glance/latest/", text: "📚 Glance Documentation" }
            },
        ],
        3: [
            {
                q: "What's the role of Neutron?",
                options: ["Network connectivity as a service", "Block storage volume management", "Object storage for file backups", "Infrastructure stack orchestration"],
                correct: 0,
                explanation: "Neutron provides networking as a service: virtual networks, subnets, routers, firewalls, VPNs, and load balancers. Supports multiple backends (OVS, OVN, etc.).",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/", text: "📚 Neutron Documentation" }
            },
            {
                q: "What does Cinder provide?",
                options: ["Block storage volumes for VMs", "Object storage for backups", "Virtual network configuration", "User identity management"],
                correct: 0,
                explanation: "Cinder provides block storage volumes that attach to VMs like virtual disks. Supports multiple backends (LVM, Ceph, NetApp) and features like snapshots and backups.",
                learnMore: { url: "https://docs.openstack.org/cinder/latest/", text: "📚 Cinder Documentation" }
            },
            {
                q: "What's Swift in OpenStack?",
                options: ["Object storage service for files", "Block storage volume service", "Virtual network configuration", "Compute instance management"],
                correct: 0,
                explanation: "Swift is object storage for unstructured data (files, images, backups). Highly scalable and redundant. Access via REST API, not mounted like block storage.",
                learnMore: { url: "https://docs.openstack.org/swift/latest/", text: "📚 Swift Documentation" }
            },
            {
                q: "What's Heat used for?",
                options: ["Orchestration with YAML templates", "System monitoring and metrics", "Virtual network configuration", "Block storage volume service"],
                correct: 0,
                explanation: "Heat is the orchestration service using templates (HOT format) to define infrastructure stacks: VMs, networks, volumes, etc. Enables infrastructure as code.",
                learnMore: { url: "https://docs.openstack.org/heat/latest/", text: "📚 Heat Documentation" }
            },
        ],
        4: [
            {
                q: "How does Waldur integrate with OpenStack?",
                options: ["Via OpenStack APIs to provision resources", "Through direct database table access", "Using SSH commands to hypervisors", "Through manual data synchronization"],
                correct: 0,
                explanation: "Waldur integrates via OpenStack APIs (python-openstackclient libraries). It creates VMs, networks, volumes on behalf of users, syncs state, and reports usage.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/openstack/", text: "📚 Waldur OpenStack" }
            },
            {
                q: "What's a Nova flavor?",
                options: ["VM size specification (CPU, RAM, disk)", "Virtual network configuration type", "Block storage volume class type", "User role and permission set"],
                correct: 0,
                explanation: "A flavor defines VM size: vCPUs, RAM, root disk, ephemeral disk. Admins create flavors (m1.small, m1.large). Users select flavor when launching VMs.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/user/flavors.html", text: "📚 Nova Flavors" }
            },
            {
                q: "What's a security group in OpenStack?",
                options: ["Firewall rules for VM instances", "Collection of user accounts", "Pool of storage volumes", "Set of virtual network subnets"],
                correct: 0,
                explanation: "Security groups are virtual firewalls defining ingress/egress rules for instances. Rules specify protocol, port range, and source/destination CIDR or group.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html#security-groups", text: "📚 Security Groups" }
            },
            {
                q: "What's floating IP used for?",
                options: ["Public IP that moves between instances", "Private IP for internal network", "DNS name for service discovery", "Load balancer virtual address"],
                correct: 0,
                explanation: "Floating IPs are public IPs that can be associated with instances for external access. They can be moved between instances, enabling failover and maintenance.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html#floating-ips", text: "📚 Floating IPs" }
            },
        ],
        5: [
            {
                q: "What's a Keystone domain used for?",
                options: ["Namespace for projects and users", "DNS resolution for services", "Network isolation between VMs", "Storage pool for volumes"],
                correct: 0,
                explanation: "Domains are top-level containers for projects and users, enabling multi-tenancy. Each domain has independent users, projects, and roles. Useful for resellers.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/admin/identity-concepts.html", text: "📚 Identity Concepts" }
            },
            {
                q: "How does OpenStack handle multi-region deployments?",
                options: ["Multiple regions with shared Keystone", "Only single region is supported", "Automatic cross-region replication", "External third-party tools only"],
                correct: 0,
                explanation: "Multi-region deployments share a central Keystone for identity but have independent Nova, Neutron, etc. per region. Regions appear in service catalog.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/admin/identity-concepts.html#regions", text: "📚 OpenStack Regions" }
            },
            {
                q: "What's Ceph integration with OpenStack?",
                options: ["Distributed storage backend for services", "Alternative compute service to Nova", "Alternative network service to Neutron", "Alternative identity service to Keystone"],
                correct: 0,
                explanation: "Ceph provides distributed storage backend for Cinder (block), Glance (images), and Nova (ephemeral disks). Offers scalability, replication, and snapshots.",
                learnMore: { url: "https://docs.ceph.com/en/latest/rbd/rbd-openstack/", text: "📚 Ceph with OpenStack" }
            },
            {
                q: "What's the relationship between Nova and Placement?",
                options: ["Placement tracks resources for Nova scheduling", "They are the exact same service", "Placement fully replaced Nova compute", "There is no relationship between them"],
                correct: 0,
                explanation: "Placement tracks resource inventory (CPUs, RAM, disk) and allocation. Nova scheduler queries Placement to find hosts with available capacity for new VMs.",
                learnMore: { url: "https://docs.openstack.org/placement/latest/", text: "📚 Placement Service" }
            },
            {
                q: "How do you troubleshoot Nova instance launch failures?",
                options: ["Check nova-compute logs and placement", "Simply restart all OpenStack services", "Reinstall OpenStack from scratch", "Contact vendor support immediately"],
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
                options: ["Set of nodes running containerized applications", "Single container running in isolation", "Virtual network between services", "Persistent storage volume pool"],
                correct: 0,
                explanation: "A cluster is a set of machines (nodes) running Kubernetes. It has a control plane (managing the cluster) and worker nodes (running workloads in pods).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/", text: "📚 Cluster Components" }
            },
        ],
        2: [
            {
                q: "What is a Helm chart?",
                options: ["Package of Kubernetes resources", "Monitoring dashboard for metrics", "Network diagram of cluster", "Storage class configuration"],
                correct: 0,
                explanation: "Helm charts package Kubernetes manifests with templating. They define applications (deployments, services, configmaps) with configurable values for easy deployment.",
                learnMore: { url: "https://helm.sh/docs/topics/charts/", text: "📚 Helm Charts" }
            },
            {
                q: "What's a Kubernetes node?",
                options: ["Machine (physical/virtual) running pods", "Container running application code", "Network connection between pods", "Storage volume for data"],
                correct: 0,
                explanation: "A node is a worker machine (physical or VM) in the cluster. Each node runs kubelet (agent), container runtime, and kube-proxy. Nodes host pods.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/architecture/nodes/", text: "📚 Nodes" }
            },
            {
                q: "What's the control plane in Kubernetes?",
                options: ["Components that manage cluster state", "Worker nodes running applications", "Containers inside the pods", "Storage backend for volumes"],
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
                options: ["HTTP/HTTPS routing to services", "Internal network between pods", "Persistent storage volume", "Compute resource quota"],
                correct: 0,
                explanation: "Ingress manages external HTTP/HTTPS access to services. It provides routing rules, TLS termination, and load balancing. Requires an Ingress controller (nginx, traefik).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/ingress/", text: "📚 Ingress" }
            },
            {
                q: "What's a ServiceAccount used for?",
                options: ["Non-human identity for API authentication", "User account for cluster developers", "Billing account for resource costs", "Storage account for persistent data"],
                correct: 0,
                explanation: "ServiceAccounts provide identity for non-human processes (pods, CI/CD, monitoring tools) to authenticate to the Kubernetes API. Combined with RBAC, they control what actions are permitted.",
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
                options: ["HPC workload manager and job scheduler", "Scientific programming language", "Distributed storage system", "Network routing protocol"],
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
                options: ["HPC clusters and supercomputers", "Web application servers", "Mobile app backends", "Desktop applications"],
                correct: 0,
                explanation: "SLURM is used in HPC (High Performance Computing) environments: research clusters, supercomputers, and scientific computing centers where batch job scheduling is essential.",
                learnMore: { url: "https://slurm.schedmd.com/quickstart.html", text: "📚 SLURM Quickstart" }
            },
        ],
        2: [
            {
                q: "What's a SLURM partition?",
                options: ["Group of nodes with shared properties", "Filesystem disk partition", "Virtual network segment", "User permission group"],
                correct: 0,
                explanation: "A partition (queue) is a group of nodes with common properties (GPU nodes, high-memory, etc.). Jobs are submitted to partitions based on requirements.",
                learnMore: { url: "https://slurm.schedmd.com/quickstart.html#partitions", text: "📚 SLURM Partitions" }
            },
            {
                q: "What command submits a job to SLURM?",
                options: ["sbatch command", "slurm-submit", "qsub command", "run-job tool"],
                correct: 0,
                explanation: "sbatch submits batch job scripts to SLURM. The script contains #SBATCH directives for resource requests and the commands to run.",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html", text: "📚 sbatch Command" }
            },
            {
                q: "What's the difference between sbatch and srun?",
                options: ["sbatch is batch, srun is interactive", "They are the same command", "srun is now deprecated", "sbatch is interactive mode"],
                correct: 0,
                explanation: "sbatch submits a batch script for later execution. srun runs commands directly (interactive or within a batch job for parallel execution across nodes).",
                learnMore: { url: "https://slurm.schedmd.com/srun.html", text: "📚 srun Command" }
            },
        ],
        3: [
            {
                q: "What does squeue show?",
                options: ["Current job queue status", "Disk storage quota", "User permissions list", "Node hardware specs"],
                correct: 0,
                explanation: "squeue displays the job queue: pending and running jobs, their states, resources, time limits, and which nodes they're running on.",
                learnMore: { url: "https://slurm.schedmd.com/squeue.html", text: "📚 squeue Command" }
            },
            {
                q: "What's a job array in SLURM?",
                options: ["Multiple similar jobs as one submission", "Array of compute nodes", "Programming data structure", "Storage disk array"],
                correct: 0,
                explanation: "Job arrays submit many similar jobs with one command (--array=0-100). Each array task gets unique SLURM_ARRAY_TASK_ID for parameter sweeps.",
                learnMore: { url: "https://slurm.schedmd.com/job_array.html", text: "📚 Job Arrays" }
            },
            {
                q: "What does scancel do?",
                options: ["Cancel pending or running jobs", "Scan cluster for errors", "Cancel user accounts", "Scan nodes for issues"],
                correct: 0,
                explanation: "scancel cancels jobs by ID, name, user, or other criteria. Can cancel pending jobs (removes from queue) or running jobs (terminates processes).",
                learnMore: { url: "https://slurm.schedmd.com/scancel.html", text: "📚 scancel Command" }
            },
            {
                q: "What's a SLURM reservation?",
                options: ["Reserved resources for specific users", "Online booking system", "Disk space reservation", "Memory limit reservation"],
                correct: 0,
                explanation: "Reservations pre-allocate nodes/resources for specific users, accounts, or maintenance windows. Jobs matching reservation criteria can use reserved resources.",
                learnMore: { url: "https://slurm.schedmd.com/reservations.html", text: "📚 Reservations" }
            },
        ],
        4: [
            {
                q: "How does SLURM accounting work?",
                options: ["Tracks resource usage for fairshare", "Simple text file logging", "No usage tracking at all", "External tools only"],
                correct: 0,
                explanation: "SLURM accounting tracks CPU-hours, memory, GPU usage per user/account. Data feeds into fairshare scheduling and usage reports. Uses slurmdbd daemon.",
                learnMore: { url: "https://slurm.schedmd.com/accounting.html", text: "📚 SLURM Accounting" }
            },
            {
                q: "What's sacct used for?",
                options: ["View accounting data for jobs", "Manage user accounts", "Set access control rules", "List system accounts"],
                correct: 0,
                explanation: "sacct queries the accounting database for job history: runtime, resources used, exit status. Essential for analyzing completed jobs and usage patterns.",
                learnMore: { url: "https://slurm.schedmd.com/sacct.html", text: "📚 sacct Command" }
            },
            {
                q: "What's a QOS (Quality of Service) in SLURM?",
                options: ["Priority and resource limits for jobs", "Network quality metrics", "Customer service level", "Technical support tier"],
                correct: 0,
                explanation: "QOS defines job class properties: priority, max resources, preemption rights. Users/accounts can be assigned QOS (normal, high-priority, debug) for differentiated service.",
                learnMore: { url: "https://slurm.schedmd.com/qos.html", text: "📚 Quality of Service" }
            },
            {
                q: "How do you request specific resources in sbatch?",
                options: ["#SBATCH directives like --nodes", "Command line arguments only", "External config file only", "Cannot specify resources"],
                correct: 0,
                explanation: "#SBATCH directives in job scripts specify resources: --nodes, --ntasks, --cpus-per-task, --mem, --time, --gres=gpu:2, --partition, etc.",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html#SECTION_OPTIONS", text: "📚 sbatch Options" }
            },
        ],
        5: [
            {
                q: "What's fairshare scheduling in SLURM?",
                options: ["Priority based on usage vs allocation", "Equal time for all users", "First come first served order", "Random job scheduling"],
                correct: 0,
                explanation: "Fairshare adjusts job priority based on historical usage vs allocated share. Heavy users get lower priority; underutilized accounts get higher priority.",
                learnMore: { url: "https://slurm.schedmd.com/fair_tree.html", text: "📚 Fair Tree Scheduling" }
            },
            {
                q: "How does Waldur integrate with SLURM?",
                options: ["Track allocations and report usage", "No SLURM integration exists", "Direct database connections", "SSH commands only"],
                correct: 0,
                explanation: "Waldur's SLURM plugin creates allocations (accounts), syncs usage data from sacct, and can manage resource limits. Enables self-service HPC access through Waldur.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/providers/slurm/", text: "📚 Waldur SLURM" }
            },
            {
                q: "What's a SLURM federation?",
                options: ["Multiple clusters managed together", "Single standalone cluster", "User permission group", "Virtual network setup"],
                correct: 0,
                explanation: "Federation connects multiple SLURM clusters. Users can submit jobs that run on any cluster in the federation. Enables unified access to distributed resources.",
                learnMore: { url: "https://slurm.schedmd.com/federation.html", text: "📚 SLURM Federation" }
            },
            {
                q: "What's job dependency in SLURM?",
                options: ["Jobs that wait for other jobs", "Code library dependency", "Package dependency manager", "No dependency support"],
                correct: 0,
                explanation: "Job dependencies (--dependency) make jobs wait for other jobs: afterok (run if previous succeeded), afterany (run regardless), afternotok (run if failed).",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html#OPT_dependency", text: "📚 Job Dependencies" }
            },
            {
                q: "How do you troubleshoot job failures in SLURM?",
                options: ["Check job output, scontrol, sacct", "Simply restart the cluster", "Contact admin only option", "Cannot troubleshoot jobs"],
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
                options: ["Federated authentication across multiple apps", "Distributed data storage and replication", "Network routing between data centers", "Secure file sharing between users"],
                correct: 0,
                explanation: "OIDC provides federated authentication: users log in once with an identity provider (Google, Microsoft, institutional IdP) and access multiple applications without separate passwords.",
                learnMore: { url: "https://openid.net/developers/how-connect-works/", text: "📚 How OIDC Works" }
            },
            {
                q: "Is OIDC related to OAuth?",
                options: ["Yes, OIDC is built on top of OAuth 2.0", "No, they are completely separate protocols", "OIDC is the older protocol that OAuth replaced", "OAuth 2.0 is built on top of OIDC"],
                correct: 0,
                explanation: "OIDC extends OAuth 2.0 with identity layer. OAuth handles authorization (what you can access), OIDC adds authentication (who you are) via ID tokens.",
                learnMore: { url: "https://oauth.net/articles/authentication/", text: "📚 OAuth vs OIDC" }
            },
        ],
        2: [
            {
                q: "What's the relationship between OIDC and OAuth 2.0?",
                options: ["OIDC adds identity layer on top of OAuth 2.0", "They are completely separate specifications", "OAuth 2.0 is replacing OIDC gradually", "They are the same protocol with different names"],
                correct: 0,
                explanation: "OIDC uses OAuth 2.0 flows for authorization but adds ID tokens for authentication. OAuth alone doesn't verify identity; OIDC does.",
                learnMore: { url: "https://auth0.com/docs/authenticate/protocols/openid-connect-protocol", text: "📚 OIDC Protocol" }
            },
            {
                q: "What is an ID token?",
                options: ["JWT containing user identity claims", "Encrypted session cookie for browsers", "Hashed password stored in database", "API key for service authentication"],
                correct: 0,
                explanation: "ID token is a JWT (JSON Web Token) containing claims about the user: subject (sub), name, email, issuer (iss), audience (aud), expiration (exp).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#IDToken", text: "📚 ID Token Spec" }
            },
            {
                q: "What's an access token used for?",
                options: ["Authorize requests to protected APIs", "Identify user in client application", "Reset forgotten user passwords", "Manage active user sessions"],
                correct: 0,
                explanation: "Access tokens authorize API requests. They're sent in Authorization header (Bearer token) to access protected resources. Unlike ID tokens, they're not for user identity.",
                learnMore: { url: "https://auth0.com/docs/secure/tokens/access-tokens", text: "📚 Access Tokens" }
            },
        ],
        3: [
            {
                q: "What's the authorization code flow?",
                options: ["Server exchanges authorization code for tokens", "Tokens are issued directly to the browser", "User sends password directly to the app", "Device polls server for authorization"],
                correct: 0,
                explanation: "Authorization code flow: redirect to IdP → user authenticates → redirect back with code → backend exchanges code for tokens. Secure for server-side apps.",
                learnMore: { url: "https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow", text: "📚 Auth Code Flow" }
            },
            {
                q: "What is PKCE used for?",
                options: ["Protect auth code flow for public clients", "Encrypt tokens stored in the browser", "Hash passwords before transmission", "Manage distributed user sessions"],
                correct: 0,
                explanation: "PKCE (Proof Key for Code Exchange) protects auth code flow for public clients (mobile, SPA). Uses code_verifier and code_challenge to prevent code interception attacks.",
                learnMore: { url: "https://oauth.net/2/pkce/", text: "📚 PKCE" }
            },
            {
                q: "What's the difference between ID token and access token?",
                options: ["ID token identifies user, access token calls APIs", "They are the same thing with different names", "Access token identifies, ID token authorizes", "ID token calls APIs, access token identifies"],
                correct: 0,
                explanation: "ID token: proves user identity (for your app). Access token: authorizes API access (for resource servers). Don't use ID tokens to call APIs.",
                learnMore: { url: "https://auth0.com/blog/id-token-access-token-what-is-the-difference/", text: "📚 ID vs Access Token" }
            },
            {
                q: "What's a refresh token?",
                options: ["Gets new access tokens without re-login", "Resets user password on expiration", "Refreshes the browser session cookie", "Clears the application token cache"],
                correct: 0,
                explanation: "Refresh tokens get new access tokens when they expire, without re-prompting user login. They're long-lived and must be stored securely.",
                learnMore: { url: "https://auth0.com/docs/secure/tokens/refresh-tokens", text: "📚 Refresh Tokens" }
            },
        ],
        4: [
            {
                q: "What are OIDC scopes?",
                options: ["Define what user information is accessible", "Define security boundaries between services", "Define network segments for isolation", "Define API rate limits per client"],
                correct: 0,
                explanation: "Scopes define what claims (user info) are accessible: openid (required), profile (name), email, address, phone. Users consent to requested scopes.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims", text: "📚 OIDC Scopes" }
            },
            {
                q: "What's the 'openid' scope required for?",
                options: ["Indicates OIDC request and returns ID token", "Grants full API access to the application", "Provides administrator access to the IdP", "It's optional and can be omitted safely"],
                correct: 0,
                explanation: "The 'openid' scope is required for OIDC requests. It tells the authorization server to return an ID token (not just access token like plain OAuth).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest", text: "📚 Auth Request" }
            },
            {
                q: "What claims are in the 'profile' scope?",
                options: ["name, family_name, given_name, picture, etc.", "Only the user's email address is included", "Only the user's phone number is included", "Only the user's street address is included"],
                correct: 0,
                explanation: "Profile scope includes: name, family_name, given_name, middle_name, nickname, picture, website, gender, birthdate, zoneinfo, locale, updated_at.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims", text: "📚 Profile Claims" }
            },
            {
                q: "What's the userinfo endpoint?",
                options: ["Returns claims about the authenticated user", "Handles user login and authentication", "Handles user logout and session end", "Exchanges authorization code for tokens"],
                correct: 0,
                explanation: "The userinfo endpoint returns claims about the authenticated user when called with a valid access token. Alternative to getting all claims from ID token.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#UserInfo", text: "📚 UserInfo Endpoint" }
            },
        ],
        5: [
            {
                q: "How do you validate an ID token?",
                options: ["Verify signature, issuer, audience, expiration", "Query the database for token existence", "Always trust tokens without verification", "Compare hash values in local storage"],
                correct: 0,
                explanation: "Validate ID token: verify JWT signature (using provider's keys), check iss (issuer), aud (audience = your client_id), exp (not expired), iat (issued time).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation", text: "📚 Token Validation" }
            },
            {
                q: "What's the discovery document (.well-known/openid-configuration)?",
                options: ["Metadata about provider endpoints and capabilities", "Directory listing of all registered users", "Application-specific configuration settings", "Server access log file in JSON format"],
                correct: 0,
                explanation: "Discovery document provides provider metadata: authorization/token/userinfo endpoints, supported scopes, signing algorithms, JWKS URI for token verification.",
                learnMore: { url: "https://openid.net/specs/openid-connect-discovery-1_0.html", text: "📚 OIDC Discovery" }
            },
            {
                q: "How does Waldur use OIDC?",
                options: ["Authenticate users via external identity providers", "Internal password authentication only", "Waldur does not support OIDC protocol", "Only for API service-to-service auth"],
                correct: 0,
                explanation: "Waldur supports OIDC for SSO: users authenticate via institutional IdP (eduGAIN, GÉANT, Google). Waldur creates/updates users based on ID token claims.",
                learnMore: { url: "https://docs.waldur.com/admin-guide/authentication/", text: "📚 Waldur Authentication" }
            },
            {
                q: "What's token introspection?",
                options: ["Validate token via authorization server query", "Decode and view the token's raw contents", "Request a new token using refresh token", "Invalidate and revoke an active token"],
                correct: 0,
                explanation: "Token introspection queries the authorization server to validate a token and get its metadata (active, scope, expiration). Used by resource servers.",
                learnMore: { url: "https://oauth.net/2/token-introspection/", text: "📚 Token Introspection" }
            },
            {
                q: "What's the implicit flow and why is it discouraged?",
                options: ["Tokens in URL fragment expose security risks", "It's actually the most secure flow available", "It's the recommended flow for all apps", "It's a server-side flow for backends"],
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
                options: ["IT automation and configuration management", "Container runtime environment", "General programming language", "Relational database system"],
                correct: 0,
                explanation: "Ansible automates IT tasks: configuration management, application deployment, cloud provisioning, and orchestration. It uses simple YAML playbooks.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/index.html", text: "📚 Ansible Documentation" }
            },
            {
                q: "Is Ansible agentless?",
                options: ["Yes, uses SSH for communication", "No, requires agent on targets", "Only sometimes agentless", "Depends on the target OS"],
                correct: 0,
                explanation: "Ansible is agentless: it connects to managed hosts via SSH (or WinRM for Windows). No agent software needs to be installed on target machines.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/getting_started/index.html", text: "📚 Getting Started" }
            },
            {
                q: "What language are Ansible playbooks written in?",
                options: ["YAML markup language", "JSON data format", "Python programming", "XML markup format"],
                correct: 0,
                explanation: "Ansible playbooks are written in YAML (Yet Another Markup Language). YAML is human-readable and defines tasks, variables, and conditions declaratively.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html", text: "📚 Playbook Intro" }
            },
        ],
        2: [
            {
                q: "What is an Ansible playbook?",
                options: ["YAML file defining automation tasks", "Python script for automation", "Shell script for deployment", "Config file for settings"],
                correct: 0,
                explanation: "A playbook is a YAML file containing plays. Each play targets hosts and defines tasks to execute. Playbooks are the core of Ansible automation.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html", text: "📚 Intro to Playbooks" }
            },
            {
                q: "What's an Ansible inventory?",
                options: ["List of managed hosts and groups", "Storage of playbook variables", "Queue for pending tasks", "Collection of reusable roles"],
                correct: 0,
                explanation: "Inventory defines managed hosts and groups. Can be static (INI/YAML file) or dynamic (script querying cloud provider). Hosts can have group_vars and host_vars.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html", text: "📚 Inventory" }
            },
            {
                q: "What's an Ansible task?",
                options: ["Single action to execute (module call)", "Collection of multiple playbooks", "Entry in the inventory file", "Variable defined in playbook"],
                correct: 0,
                explanation: "A task is a single action calling an Ansible module (apt, copy, service, template, etc.). Tasks have names, module arguments, and optional conditions.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html#tasks-list", text: "📚 Tasks" }
            },
        ],
        3: [
            {
                q: "What's the difference between a role and a playbook?",
                options: ["Role is reusable component, playbook orchestrates", "They are exactly the same thing", "Role is larger than playbook", "Playbook is the reusable one"],
                correct: 0,
                explanation: "Roles are reusable units with structured directories (tasks, handlers, vars, templates). Playbooks orchestrate roles and standalone tasks for specific scenarios.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html", text: "📚 Roles" }
            },
            {
                q: "What does 'ansible-playbook -i inventory playbook.yml' do?",
                options: ["Runs playbook against hosts in inventory", "Creates a new inventory file", "Validates playbook syntax only", "Generates documentation files"],
                correct: 0,
                explanation: "This command runs playbook.yml against hosts defined in the inventory file. -i specifies inventory; playbook defines what tasks to execute.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/cli/ansible-playbook.html", text: "📚 ansible-playbook CLI" }
            },
            {
                q: "What's an Ansible module?",
                options: ["Unit of code that performs specific action", "Configuration file for settings", "Log file for task output", "Template file for rendering"],
                correct: 0,
                explanation: "Modules are units of code Ansible runs on managed nodes. Examples: apt (packages), copy (files), service (daemons), template (Jinja2), command (shell).",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/module_plugin_guide/modules_intro.html", text: "📚 Modules" }
            },
            {
                q: "What's a handler in Ansible?",
                options: ["Task triggered by notification from others", "Handler for catching task errors", "Handler for system events", "Handler for file operations"],
                correct: 0,
                explanation: "Handlers are tasks triggered by 'notify' from other tasks. Common use: restart service after config change. Handlers run once at end of play, even if notified multiple times.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_handlers.html", text: "📚 Handlers" }
            },
        ],
        4: [
            {
                q: "What is Ansible AWX/Tower?",
                options: ["Web UI and API for Ansible automation", "Cloud provider for hosting Ansible", "Database for storing playbooks", "Monitoring tool for Ansible"],
                correct: 0,
                explanation: "AWX (open source) / Tower (enterprise) provides web UI, REST API, RBAC, job scheduling, and credentials management for Ansible. Enables team collaboration.",
                learnMore: { url: "https://github.com/ansible/awx", text: "📚 AWX Project" }
            },
            {
                q: "What's Ansible Galaxy?",
                options: ["Repository for sharing roles and collections", "Cloud service for running Ansible", "IDE for writing playbooks", "Testing tool for playbooks"],
                correct: 0,
                explanation: "Ansible Galaxy is a hub for sharing roles and collections. Use 'ansible-galaxy install' to download community roles. Organizations can host private Galaxy servers.",
                learnMore: { url: "https://galaxy.ansible.com/", text: "📚 Ansible Galaxy" }
            },
            {
                q: "What are Ansible facts?",
                options: ["System info gathered from managed hosts", "User-defined facts only", "Network topology facts only", "Storage capacity facts only"],
                correct: 0,
                explanation: "Facts are variables automatically discovered from hosts: OS, IP, CPU, memory, mounts, etc. Access via ansible_facts or gather_facts module. Use in conditionals and templates.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_vars_facts.html", text: "📚 Facts" }
            },
            {
                q: "What's idempotency in Ansible context?",
                options: ["Running playbook multiple times = same result", "Running the playbook only once", "Random execution order each time", "No guarantee of consistency"],
                correct: 0,
                explanation: "Idempotent tasks check current state before acting. Running playbook repeatedly yields same result: package already installed → no action. Design tasks to be idempotent.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/reference_appendices/glossary.html#term-Idempotency", text: "📚 Idempotency" }
            },
        ],
        5: [
            {
                q: "How do you handle secrets in Ansible?",
                options: ["Ansible Vault for encrypted variables", "Store secrets in plain text files", "Use environment variables only", "Ansible cannot handle secrets"],
                correct: 0,
                explanation: "Ansible Vault encrypts sensitive data (passwords, keys) in files. Use 'ansible-vault create/edit/encrypt/decrypt'. Pass --ask-vault-pass or vault password file at runtime.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/vault_guide/index.html", text: "📚 Ansible Vault" }
            },
            {
                q: "What's an Ansible collection?",
                options: ["Distribution format for roles, modules, plugins", "Collection of files on disk", "Collection of execution logs", "Collection of user accounts"],
                correct: 0,
                explanation: "Collections bundle roles, modules, plugins, and playbooks in a standard format. Namespace.collection format (e.g., community.general). Install from Galaxy or Automation Hub.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/collections_guide/index.html", text: "📚 Collections" }
            },
            {
                q: "How do you test Ansible playbooks?",
                options: ["Molecule for testing, --check for dry run", "No testing is possible", "Manual testing only is supported", "External tools only, not Ansible"],
                correct: 0,
                explanation: "Molecule tests roles in containers/VMs (create, converge, verify, destroy). --check does dry run. --diff shows changes. ansible-lint checks best practices.",
                learnMore: { url: "https://ansible.readthedocs.io/projects/molecule/", text: "📚 Molecule" }
            },
            {
                q: "What's Ansible callback plugins?",
                options: ["Customize output and behavior of runs", "Callbacks for network operations", "Callbacks for user interactions", "Callbacks for storage events"],
                correct: 0,
                explanation: "Callback plugins customize output format and behavior: JSON output, profiling, notifications to Slack/Teams. Configure in ansible.cfg or ANSIBLE_CALLBACKS_ENABLED.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/plugins/callback.html", text: "📚 Callback Plugins" }
            },
            {
                q: "How does Ansible handle failed tasks?",
                options: ["Stop by default, ignore_errors or block/rescue", "Continue always without stopping", "Retry automatically three times", "Cannot handle failures at all"],
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
                options: ["Time-series monitoring system", "Log aggregation platform", "Application performance tool", "Distributed tracing system"],
                correct: 0,
                explanation: "Prometheus is an open-source time-series monitoring system. It collects metrics via HTTP pull, stores them locally, and supports powerful queries and alerting.",
                learnMore: { url: "https://prometheus.io/docs/introduction/overview/", text: "📚 Prometheus Overview" }
            },
            {
                q: "What's the pull vs push model in monitoring?",
                options: ["Pull: monitor fetches; Push: targets send", "They are exactly the same thing", "Pull model is now deprecated", "Push model is now deprecated"],
                correct: 0,
                explanation: "Pull: monitoring system fetches metrics from targets (Prometheus style). Push: targets send metrics to collector (Graphite, InfluxDB style). Each has trade-offs.",
                learnMore: { url: "https://prometheus.io/docs/introduction/faq/#why-do-you-pull-rather-than-push", text: "📚 Pull vs Push" }
            },
            {
                q: "What type of data does Prometheus store?",
                options: ["Time-series numeric metrics", "Application log entries", "Distributed trace spans", "System event records"],
                correct: 0,
                explanation: "Prometheus stores time-series data: numeric values with timestamps and labels. It's not for logs (use Loki) or traces (use Jaeger/Tempo).",
                learnMore: { url: "https://prometheus.io/docs/concepts/data_model/", text: "📚 Data Model" }
            },
        ],
        2: [
            {
                q: "What is Grafana used for?",
                options: ["Visualization and dashboards", "Collecting metrics from targets", "Alerting functionality only", "Long-term log storage"],
                correct: 0,
                explanation: "Grafana is a visualization platform for creating dashboards. It queries data from Prometheus, InfluxDB, Elasticsearch, and many other sources.",
                learnMore: { url: "https://grafana.com/docs/grafana/latest/", text: "📚 Grafana Docs" }
            },
            {
                q: "What's a Prometheus metric type 'counter'?",
                options: ["Cumulative value that only increases", "Current instantaneous value", "Statistical distribution bucket", "Boolean true/false value"],
                correct: 0,
                explanation: "Counter is cumulative: only increases (or resets to zero). Use for requests_total, errors_total. Query with rate() to get per-second increase.",
                learnMore: { url: "https://prometheus.io/docs/concepts/metric_types/#counter", text: "📚 Counter Metrics" }
            },
            {
                q: "What's a Prometheus metric type 'gauge'?",
                options: ["Value that can go up and down", "Value that only increases", "Histogram with buckets", "Summary with quantiles"],
                correct: 0,
                explanation: "Gauge represents a value that can increase or decrease: temperature, memory usage, queue size. Snapshot of current state.",
                learnMore: { url: "https://prometheus.io/docs/concepts/metric_types/#gauge", text: "📚 Gauge Metrics" }
            },
        ],
        3: [
            {
                q: "What is PromQL?",
                options: ["Prometheus Query Language", "PostgreSQL extension module", "Python monitoring library", "Queue management system"],
                correct: 0,
                explanation: "PromQL (Prometheus Query Language) queries time-series data. Supports filtering, aggregation, functions (rate, sum, avg), and time ranges.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/querying/basics/", text: "📚 PromQL Basics" }
            },
            {
                q: "What's the ELK stack?",
                options: ["Elasticsearch, Logstash, Kibana", "Error Logging Kit framework", "Event Log Keeper system", "Elastic Load Keeper service"],
                correct: 0,
                explanation: "ELK: Elasticsearch (search/storage), Logstash (log processing/ingestion), Kibana (visualization). Popular for centralized logging. Now often includes Beats.",
                learnMore: { url: "https://www.elastic.co/elastic-stack", text: "📚 Elastic Stack" }
            },
            {
                q: "What's an exporter in Prometheus?",
                options: ["Service exposing metrics in Prometheus format", "Tool for exporting data to files", "Log exporter to external systems", "Report generator for dashboards"],
                correct: 0,
                explanation: "Exporters expose metrics in Prometheus format. Examples: node_exporter (system metrics), mysqld_exporter (MySQL), blackbox_exporter (probing endpoints).",
                learnMore: { url: "https://prometheus.io/docs/instrumenting/exporters/", text: "📚 Exporters" }
            },
            {
                q: "What's a service discovery in Prometheus?",
                options: ["Automatically find targets to monitor", "DNS service resolution system", "Network device discovery tool", "User account discovery scan"],
                correct: 0,
                explanation: "Service discovery automatically finds scrape targets: Kubernetes pods, EC2 instances, Consul services. Eliminates manual target configuration.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config", text: "📚 Service Discovery" }
            },
        ],
        4: [
            {
                q: "What's the difference between metrics and logs?",
                options: ["Metrics are numeric, logs are event records", "They are exactly the same thing", "Logs are numeric measurements", "Metrics are event records"],
                correct: 0,
                explanation: "Metrics: numeric measurements over time (request rate, error percentage). Logs: textual event records with details. Metrics for alerting/trends, logs for debugging.",
                learnMore: { url: "https://grafana.com/blog/2016/01/05/logs-and-metrics-and-graphs-oh-my/", text: "📚 Logs vs Metrics" }
            },
            {
                q: "What's distributed tracing?",
                options: ["Track requests across multiple services", "Trace log files on disk", "Network packet tracing tool", "User behavior tracking system"],
                correct: 0,
                explanation: "Distributed tracing tracks requests across microservices. Each service adds spans to a trace. Tools: Jaeger, Zipkin, Tempo. Shows where latency occurs.",
                learnMore: { url: "https://opentelemetry.io/docs/concepts/observability-primer/#distributed-traces", text: "📚 Distributed Tracing" }
            },
            {
                q: "What's Alertmanager in Prometheus ecosystem?",
                options: ["Handles alerts and routes notifications", "Generates alerts from metrics", "Stores alert history long-term", "Views alerts in dashboards"],
                correct: 0,
                explanation: "Alertmanager receives alerts from Prometheus, deduplicates, groups, and routes them to receivers (email, Slack, PagerDuty). Handles silencing and inhibition.",
                learnMore: { url: "https://prometheus.io/docs/alerting/latest/alertmanager/", text: "📚 Alertmanager" }
            },
            {
                q: "What are labels in Prometheus?",
                options: ["Key-value pairs for metric identification", "Display labels for dashboards", "Category labels for grouping", "User labels for permissions"],
                correct: 0,
                explanation: "Labels are key-value pairs that identify metric dimensions: instance, job, method, status_code. Enable filtering and aggregation in PromQL queries.",
                learnMore: { url: "https://prometheus.io/docs/practices/naming/#labels", text: "📚 Labels" }
            },
        ],
        5: [
            {
                q: "How do you implement effective alerting?",
                options: ["Alert on symptoms, avoid alert fatigue", "Alert on every possible metric", "Disable all alerting entirely", "Use email notifications only"],
                correct: 0,
                explanation: "Effective alerting: alert on user-impacting symptoms (not causes), use severity levels, have clear runbooks, avoid alert fatigue by eliminating noisy alerts.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/", text: "📚 SRE Monitoring" }
            },
            {
                q: "What's cardinality in monitoring context?",
                options: ["Number of unique label combinations", "Total size of stored data", "Speed of query execution", "Format of stored metrics"],
                correct: 0,
                explanation: "Cardinality is the number of unique time series (label combinations). High cardinality (user_id as label) causes memory/storage issues. Keep cardinality bounded.",
                learnMore: { url: "https://prometheus.io/docs/practices/naming/#labels", text: "📚 Cardinality" }
            },
            {
                q: "What's the difference between blackbox and whitebox monitoring?",
                options: ["Blackbox: external; Whitebox: internal", "They use the same approach", "Blackbox monitors internally", "Whitebox monitors externally"],
                correct: 0,
                explanation: "Blackbox: probe from outside (HTTP checks, ping) - what users see. Whitebox: internal metrics from inside the system - why problems occur. Use both.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_black-box-monitoring", text: "📚 Monitoring Types" }
            },
            {
                q: "What are the four golden signals of monitoring?",
                options: ["Latency, traffic, errors, saturation", "CPU, memory, disk, network only", "Requests, responses, errors, time", "Users, sessions, pages, clicks"],
                correct: 0,
                explanation: "Four Golden Signals (Google SRE): Latency (response time), Traffic (demand), Errors (failure rate), Saturation (how full/overloaded). Focus monitoring on these.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals", text: "📚 Golden Signals" }
            },
            {
                q: "How do you handle high-cardinality metrics?",
                options: ["Limit labels, aggregate, use recording rules", "Store all possible combinations", "Ignore cardinality completely", "High cardinality cannot be handled"],
                correct: 0,
                explanation: "Handle high cardinality: avoid unbounded labels (user IDs), pre-aggregate with recording rules, use exemplars for sampling, consider specialized systems for high-cardinality.",
                learnMore: { url: "https://prometheus.io/docs/practices/instrumentation/#do-not-overuse-labels", text: "📚 Label Best Practices" }
            },
        ]
    },

    's-azure': {
        1: [
            {
                q: "What is Microsoft Azure?",
                options: ["Cloud computing platform from Microsoft", "Blue color palette tool", "Windows desktop application", "Database management system"],
                correct: 0,
                explanation: "Azure is Microsoft's cloud platform offering IaaS, PaaS, SaaS. Provides VMs, storage, databases, AI services, and more."
            },
            {
                q: "What's an Azure subscription?",
                options: ["Billing and access boundary for resources", "Magazine subscription from Microsoft", "Email newsletter service", "Software update schedule"],
                correct: 0,
                explanation: "Azure subscription is container for billing and access management. Resources created within subscriptions. Can have multiple per organization."
            },
            {
                q: "What's a Resource Group in Azure?",
                options: ["Logical container for related resources", "Group of Azure administrators", "Resource usage report", "Team collaboration feature"],
                correct: 0,
                explanation: "Resource Group is logical container holding related Azure resources. Enables management, access control, and billing at group level."
            },
        ],
        2: [
            {
                q: "What's Azure Virtual Machine?",
                options: ["IaaS compute service for VMs", "Virtual reality from Microsoft", "Desktop virtualization only", "Container service"],
                correct: 0,
                explanation: "Azure VMs provide IaaS compute: choose OS, size, storage. Full control over OS. Scale sets for auto-scaling."
            },
            {
                q: "What's Azure Active Directory?",
                options: ["Identity and access management service", "File directory in cloud", "Active user tracking tool", "Directory of Azure services"],
                correct: 0,
                explanation: "Azure AD (now Entra ID) provides identity management: authentication, SSO, MFA, conditional access. Integrates with Office 365, Azure resources."
            },
            {
                q: "What's Azure Storage?",
                options: ["Scalable cloud storage service", "Local disk storage only", "Database storage backend", "File sharing application"],
                correct: 0,
                explanation: "Azure Storage provides: blob storage (objects), file shares, queues, tables. Highly durable and available. Multiple redundancy options."
            },
        ],
        3: [
            {
                q: "What's an ARM template?",
                options: ["JSON template for deploying Azure resources", "Template for ARM processors", "Azure Resource Manager app", "ARM architecture documentation"],
                correct: 0,
                explanation: "ARM (Azure Resource Manager) templates are JSON files defining Azure infrastructure. Enables Infrastructure as Code, repeatable deployments."
            },
            {
                q: "What's Azure CLI?",
                options: ["Command-line interface for Azure management", "Client library installer", "Continuous integration tool", "Container Linux image"],
                correct: 0,
                explanation: "Azure CLI is cross-platform command-line tool for managing Azure resources. az commands for creating, configuring, managing services."
            },
            {
                q: "What's Azure RBAC?",
                options: ["Role-Based Access Control for Azure", "Resource backup and copy tool", "Regional bandwidth allocation", "Routing and bridging control"],
                correct: 0,
                explanation: "Azure RBAC controls who can do what with Azure resources. Assign roles (Owner, Contributor, Reader, custom) at various scopes."
            },
            {
                q: "How does Waldur integrate with Azure?",
                options: ["Azure plugin provisions VMs via Azure APIs", "No Azure integration available", "Manual Azure management only", "Azure manages Waldur"],
                correct: 0,
                explanation: "Waldur Azure plugin creates VMs, manages storage using Azure APIs. Service settings store Azure credentials. Users order Azure resources through marketplace."
            },
        ],
        4: [
            {
                q: "What's Azure Service Principal?",
                options: ["Application identity for automated access", "Principal Azure support contact", "Primary Azure service instance", "Service pricing principal"],
                correct: 0,
                explanation: "Service Principal is identity for applications/services to access Azure resources. Used for automation, CI/CD, Waldur integration. Has credentials and permissions."
            },
            {
                q: "What's Azure Virtual Network?",
                options: ["Isolated network for Azure resources", "VPN to Azure datacenter", "Virtual network simulator", "Network monitoring service"],
                correct: 0,
                explanation: "VNet provides isolated network for Azure resources. Define IP ranges, subnets, security rules. Connect to on-premises via VPN/ExpressRoute."
            },
            {
                q: "How do you manage Azure costs?",
                options: ["Cost Management, budgets, reserved instances", "Azure is free for all usage", "Costs can't be controlled", "Only Microsoft manages costs"],
                correct: 0,
                explanation: "Azure Cost Management: track spending, set budgets, get alerts. Reserved Instances for discounts. Right-size resources. Spot VMs for savings."
            },
            {
                q: "What's Azure Monitor?",
                options: ["Monitoring service for Azure resources", "Screen display for Azure", "User activity monitoring only", "Network monitoring tool"],
                correct: 0,
                explanation: "Azure Monitor collects metrics and logs from Azure resources. Alerts, dashboards, Log Analytics for querying. Integrates with Grafana."
            },
        ],
        5: [
            {
                q: "What's Azure Managed Identity?",
                options: ["Azure-managed credentials for services", "User identity management", "Manual identity creation", "Identity only for humans"],
                correct: 0,
                explanation: "Managed Identity provides automatic credentials for Azure resources. No secret management needed. System-assigned or user-assigned."
            },
            {
                q: "How do you implement Azure governance?",
                options: ["Policies, blueprints, management groups", "Governance not available in Azure", "Manual compliance checking only", "Governance is automatic"],
                correct: 0,
                explanation: "Azure governance: Policies enforce rules, Blueprints template environments, Management Groups organize subscriptions. Azure Policy for compliance."
            },
            {
                q: "What's Azure Bicep?",
                options: ["Domain-specific language for ARM templates", "Azure fitness program", "Backup and copy tool", "Binary compression format"],
                correct: 0,
                explanation: "Bicep is declarative DSL that compiles to ARM templates. Cleaner syntax than JSON. Microsoft-supported IaC for Azure."
            },
            {
                q: "How do you handle Azure multi-region deployments?",
                options: ["Traffic Manager, geo-redundancy, paired regions", "Deploy to one region only", "Azure handles automatically", "Multi-region not supported"],
                correct: 0,
                explanation: "Multi-region: Traffic Manager for routing, geo-redundant storage, deploy to paired regions for disaster recovery. Consider latency and compliance."
            },
            {
                q: "What's Azure DevOps integration?",
                options: ["CI/CD pipelines for Azure deployments", "Development operations only", "No DevOps integration", "Azure replaces DevOps"],
                correct: 0,
                explanation: "Azure DevOps provides: repos, pipelines, boards, artifacts. CI/CD for Azure deployments. Integrate with ARM templates, Terraform, Bicep."
            },
        ]
    },

    's-gitlab-cicd': {
        1: [
            {
                q: "What is GitLab CI/CD?",
                options: ["Built-in CI/CD platform in GitLab", "External CI tool for GitLab", "Git branch naming convention", "Code review feature only"],
                correct: 0,
                explanation: "GitLab CI/CD is integrated automation platform. Define pipelines in .gitlab-ci.yml. Build, test, deploy automatically on code changes."
            },
            {
                q: "What's a GitLab pipeline?",
                options: ["Automated workflow triggered by events", "Git branch connection path", "Code merge request process", "Manual deployment procedure"],
                correct: 0,
                explanation: "Pipeline is automated workflow: series of stages and jobs. Triggered by push, merge request, schedule. Visualized in GitLab UI."
            },
            {
                q: "What's .gitlab-ci.yml?",
                options: ["Configuration file defining pipeline", "Git ignore file for CI", "GitLab settings file", "CI log output file"],
                correct: 0,
                explanation: ".gitlab-ci.yml defines pipeline: stages, jobs, scripts, conditions. YAML format in repo root. GitLab reads on events to run pipeline."
            },
        ],
        2: [
            {
                q: "What's a GitLab Runner?",
                options: ["Agent that executes CI jobs", "Person running GitLab server", "Fast code execution mode", "Git branch runner tool"],
                correct: 0,
                explanation: "Runner is agent executing CI jobs. Can be shared (GitLab-provided) or self-hosted. Supports Docker, Kubernetes, shell executors."
            },
            {
                q: "What are pipeline stages?",
                options: ["Groups of jobs running sequentially", "Development stages of code", "Deployment environments only", "Git branch stages"],
                correct: 0,
                explanation: "Stages group jobs that run in parallel within stage. Stages run sequentially. Common: build, test, deploy. Defined in stages: key."
            },
            {
                q: "What's a CI/CD job?",
                options: ["Individual task in a pipeline", "Employment at GitLab company", "CI configuration job file", "Database job queue"],
                correct: 0,
                explanation: "Job is individual task: has script, runs in stage, produces artifacts. Jobs in same stage run in parallel. Defined with name and script."
            },
        ],
        3: [
            {
                q: "What are pipeline artifacts?",
                options: ["Files passed between jobs or downloaded", "Artifact repository integration", "Pipeline metadata files", "Historical pipeline records"],
                correct: 0,
                explanation: "Artifacts are files from job: build outputs, test results, reports. Passed to later jobs or downloaded. Defined with artifacts: key."
            },
            {
                q: "What's GitLab's environment feature?",
                options: ["Track deployments to specific environments", "Environment variables only", "Server environment setup", "Git environment branches"],
                correct: 0,
                explanation: "Environments track deployments: staging, production. Shows deployment history, enables rollback, links to deployed URLs. Defined in job."
            },
            {
                q: "What are CI/CD variables?",
                options: ["Configuration values available in jobs", "Variable job execution time", "Variables in code only", "Database variables"],
                correct: 0,
                explanation: "Variables provide configuration: secrets, settings. Defined in UI (protected, masked) or .gitlab-ci.yml. Available as environment variables."
            },
            {
                q: "What's the only/except syntax?",
                options: ["Control when jobs run based on conditions", "Only run job once ever", "Exception handling in jobs", "Exclusive job execution"],
                correct: 0,
                explanation: "only/except (now rules:) control job execution: run only on main branch, except for tags, on merge requests. Conditional execution."
            },
        ],
        4: [
            {
                q: "What's GitLab's rules: syntax?",
                options: ["Flexible job conditions replacing only/except", "Rules for code review", "Merge request rules", "Repository access rules"],
                correct: 0,
                explanation: "rules: is flexible condition syntax: if, when, changes. More powerful than only/except. Can set variables, allow failure conditionally."
            },
            {
                q: "What's a parent-child pipeline?",
                options: ["Pipeline triggering sub-pipelines", "Pipeline inheritance pattern", "Parent repository pipeline", "Child branch automation"],
                correct: 0,
                explanation: "Parent-child: main pipeline triggers child pipelines. Good for complex repos, monorepos. Children can have own .gitlab-ci.yml."
            },
            {
                q: "What's GitLab's Docker integration?",
                options: ["Build and push images, use Docker executor", "Docker is not supported", "Only for Docker Hub", "Docker desktop integration"],
                correct: 0,
                explanation: "GitLab CI integrates Docker: build images in jobs, push to GitLab registry, use Docker executor for jobs. docker-in-docker or kaniko."
            },
            {
                q: "What are protected branches in CI/CD context?",
                options: ["Branches with special CI rules and permissions", "Branches that can't be merged", "Backup branch protection", "Protected from all changes"],
                correct: 0,
                explanation: "Protected branches: restricted who can push/merge. Protected CI variables only available on protected branches. Prevents secrets in feature branches."
            },
        ],
        5: [
            {
                q: "What's GitLab's Auto DevOps?",
                options: ["Automatic CI/CD without configuration", "Automatic code generation", "DevOps team automation", "Auto-scaling GitLab runners"],
                correct: 0,
                explanation: "Auto DevOps provides automatic CI/CD: detects language, builds, tests, deploys. Works out of box. Customizable. Good starting point."
            },
            {
                q: "How do you implement GitLab releases?",
                options: ["Release feature with artifacts and notes", "Git tags only option", "External release tooling", "Releases not supported"],
                correct: 0,
                explanation: "GitLab Releases: create from tags, attach artifacts, release notes. API for automation. Integrates with CI/CD for automatic releases."
            },
            {
                q: "What's GitLab's SAST/DAST?",
                options: ["Security scanning in CI pipeline", "Source and destination testing", "Static and dynamic typing", "Secret management tools"],
                correct: 0,
                explanation: "SAST (Static Application Security Testing) and DAST (Dynamic) scan for vulnerabilities. Integrated in CI pipeline. Results in merge request."
            },
            {
                q: "How do you scale GitLab CI/CD?",
                options: ["Multiple runners, autoscaling, caching", "GitLab handles scaling automatically", "Only vertical scaling possible", "Scaling not needed"],
                correct: 0,
                explanation: "Scale CI: multiple runners (different sizes), autoscaling runners on cloud, shared cache for dependencies, parallel jobs."
            },
            {
                q: "What's GitLab's component catalog?",
                options: ["Reusable CI/CD components across projects", "Software component library", "GitLab feature catalog", "Component documentation"],
                correct: 0,
                explanation: "CI/CD Catalog: share reusable pipeline components. Include templates, jobs. Publish to catalog for organization use. DRY principle for CI/CD."
            },
        ]
    },

    // ============================================================================
    // LITERACY TIER - Additional Skills
    // ============================================================================

    'l-browser-apps': {
        1: [
            {
                q: "What does SPA stand for in web development?",
                options: ["Single Page Application", "Server Page Architecture", "Synchronized Page Access", "Static Page Assembly"],
                correct: 0,
                explanation: "SPA (Single Page Application) loads once and dynamically updates content without full page reloads, providing a smoother user experience."
            },
            {
                q: "What is an API in web development?",
                options: ["A contract defining how software components communicate", "A tool for automated browser testing", "A database for storing user sessions", "A protocol for encrypting web traffic"],
                correct: 0,
                explanation: "An API defines how software components communicate. Web APIs typically use HTTP to exchange data between frontend and backend."
            },
            {
                q: "Which browser feature helps developers debug JavaScript code?",
                options: ["Developer Tools with Console panel", "Browser extension marketplace", "Reading mode for articles", "Password manager settings"],
                correct: 0,
                explanation: "Browser Developer Tools (F12) include a Console for JavaScript debugging, Network tab for requests, and Elements for DOM inspection."
            },
        ],
        2: [
            {
                q: "What does JSON stand for?",
                options: ["JavaScript Object Notation", "Java Serialized Object Network", "JavaScript Oriented Name-value", "Java Standard Output Notation"],
                correct: 0,
                explanation: "JSON is a lightweight data format that's easy for humans to read and machines to parse. It's the standard for web API data exchange."
            },
            {
                q: "Which HTTP method is used to retrieve data without modifying it?",
                options: ["GET - retrieves data only", "POST - sends data to server", "PUT - replaces entire resource", "DELETE - removes a resource"],
                correct: 0,
                explanation: "GET retrieves data without side effects. POST creates, PUT/PATCH updates, and DELETE removes resources."
            },
            {
                q: "What information does the Network tab in DevTools display?",
                options: ["HTTP requests, responses, and timing data", "JavaScript syntax errors and warnings", "Applied CSS styles and computed values", "HTML element hierarchy and attributes"],
                correct: 0,
                explanation: "The Network tab shows all HTTP requests, their timing, headers, payloads, and responses - essential for debugging API calls."
            },
        ],
        3: [
            {
                q: "What is CORS in web development?",
                options: ["Security policy controlling cross-domain requests", "Caching system for static resources", "Protocol for real-time communication", "Standard for compressing web assets"],
                correct: 0,
                explanation: "CORS is a security mechanism that controls which domains can access resources from another domain, preventing unauthorized cross-site requests."
            },
            {
                q: "What's the difference between localStorage and sessionStorage?",
                options: ["localStorage persists until cleared, sessionStorage clears on tab close", "localStorage has 5MB limit, sessionStorage has unlimited storage", "localStorage is synchronous, sessionStorage is asynchronous", "localStorage is domain-specific, sessionStorage is global"],
                correct: 0,
                explanation: "localStorage persists until explicitly cleared. sessionStorage is cleared when the browser tab closes. Both store key-value pairs."
            },
            {
                q: "What is the DOM in web browsers?",
                options: ["Tree structure representing HTML that JavaScript can modify", "Database for storing offline application data", "Protocol for downloading web resources", "Memory allocation system for browser tabs"],
                correct: 0,
                explanation: "The DOM is a tree representation of HTML that JavaScript can manipulate to dynamically change page content and structure."
            },
            {
                q: "What does a 404 HTTP status code indicate?",
                options: ["The requested resource was not found on server", "The server encountered an internal error", "The request requires user authentication", "The request was successful and complete"],
                correct: 0,
                explanation: "404 means the requested resource doesn't exist. 200 is success, 401/403 are auth errors, 500 is server error."
            },
        ]
    },

    'l-containers-101': {
        1: [
            {
                q: "What is a container in software development?",
                options: ["Isolated environment packaging an app with its dependencies", "Physical server dedicated to one application", "Database system for storing application data", "Network device that routes traffic between services"],
                correct: 0,
                explanation: "Containers package applications with their dependencies in isolated environments, ensuring consistent behavior across different systems."
            },
            {
                q: "What is Docker used for?",
                options: ["Building, sharing, and running containerized applications", "Writing and compiling programming code", "Storing and querying structured data", "Managing operating system installations"],
                correct: 0,
                explanation: "Docker is the most popular container platform, providing tools to build, share, and run containerized applications."
            },
            {
                q: "What is the relationship between a Docker image and container?",
                options: ["Image is a template, container is a running instance", "Image runs the app, container stores the code", "They are different names for the same thing", "Image is for Linux, container is for Windows"],
                correct: 0,
                explanation: "An image is a read-only template with application code and dependencies. Containers are running instances of images."
            },
        ],
        2: [
            {
                q: "What information does 'docker ps' display?",
                options: ["List of currently running containers", "List of all available Docker images", "Docker daemon version and settings", "Network configuration and port mappings"],
                correct: 0,
                explanation: "'docker ps' lists running containers. Add '-a' to see all containers including stopped ones."
            },
            {
                q: "What does container immutability mean?",
                options: ["Running containers shouldn't be modified directly", "Containers cannot be stopped once started", "Container images cannot be updated", "Containers automatically save their state"],
                correct: 0,
                explanation: "Immutable containers aren't modified in place. Changes require building a new image and replacing the container."
            },
            {
                q: "Which command displays output from a container?",
                options: ["docker logs <container> shows stdout/stderr", "docker cat <container> prints file contents", "docker tail <container> streams output", "docker read <container> fetches console"],
                correct: 0,
                explanation: "'docker logs' shows stdout/stderr from a container. Add '-f' to follow logs in real-time."
            },
        ],
        3: [
            {
                q: "What does a container restart policy control?",
                options: ["Automatic restart behavior after crashes or host reboot", "How container images are updated and replaced", "Network reconnection after connectivity loss", "Data persistence when container stops"],
                correct: 0,
                explanation: "Restart policies (no, always, on-failure, unless-stopped) define automatic container restart behavior after crashes or reboots."
            },
            {
                q: "What's the key difference between containers and virtual machines?",
                options: ["Containers share host OS kernel, VMs include full OS", "Containers provide stronger isolation than VMs", "VMs are faster to start than containers", "Containers require dedicated hardware, VMs don't"],
                correct: 0,
                explanation: "Containers share the host kernel and are lightweight. VMs include full OS, providing stronger isolation but more overhead."
            },
            {
                q: "What is the purpose of a Docker volume?",
                options: ["Persistent storage that survives container removal", "Allocated memory for container processes", "Virtual network interface for containers", "CPU cores assigned to the container"],
                correct: 0,
                explanation: "Volumes persist data outside the container filesystem, surviving container removal. Essential for databases and stateful apps."
            },
            {
                q: "What does 'docker exec -it container bash' accomplish?",
                options: ["Opens an interactive shell inside a running container", "Builds a new image from a running container", "Gracefully stops the specified container", "Displays detailed container configuration"],
                correct: 0,
                explanation: "'exec' runs commands in running containers. '-it' enables interactive terminal mode, 'bash' starts a shell session."
            },
        ]
    },

    'l-iac-concepts': {
        1: [
            {
                q: "What does IaC stand for?",
                options: ["Infrastructure as Code - managing infra via code files", "Internet and Computing - network protocols", "Integrated Application Control - app management", "Internal Access Configuration - security settings"],
                correct: 0,
                explanation: "Infrastructure as Code manages infrastructure through code files rather than manual processes, enabling version control and automation."
            },
            {
                q: "What is Ansible primarily used for?",
                options: ["Automating server configuration and deployment", "Building container images from scratch", "Storing application data in databases", "Monitoring application performance metrics"],
                correct: 0,
                explanation: "Ansible automates software provisioning, configuration management, and deployment using simple YAML playbooks."
            },
            {
                q: "What is Terraform primarily used for?",
                options: ["Provisioning cloud infrastructure resources", "Monitoring server health and metrics", "Running continuous integration pipelines", "Orchestrating container deployments"],
                correct: 0,
                explanation: "Terraform provisions and manages infrastructure across multiple cloud providers using declarative configuration files."
            },
        ],
        2: [
            {
                q: "What is declarative configuration?",
                options: ["Describing desired end state, tool determines steps", "Writing step-by-step procedural instructions", "Configuring systems manually via UI", "Generating configs at application runtime"],
                correct: 0,
                explanation: "Declarative: you describe WHAT you want (desired state). The tool figures out HOW to achieve it. Imperative: you describe exact steps."
            },
            {
                q: "What does idempotency mean in IaC?",
                options: ["Running config repeatedly produces same result", "Configuration can only be applied once", "Changes are automatically rolled back", "Each run produces different outcomes"],
                correct: 0,
                explanation: "Idempotent operations can run repeatedly without changing the result beyond the initial run. Essential for reliable automation."
            },
            {
                q: "What is a playbook in Ansible?",
                options: ["YAML file defining automation tasks to execute", "Python script for data processing", "Database storing server configurations", "Log file recording execution history"],
                correct: 0,
                explanation: "Playbooks are Ansible's configuration files written in YAML, defining tasks to execute on managed hosts."
            },
        ],
        3: [
            {
                q: "What is Terraform state used for?",
                options: ["Tracking which real resources match your config", "Monitoring current CPU and memory usage", "Recording network traffic between services", "Storing application debug logs"],
                correct: 0,
                explanation: "Terraform state tracks which real resources correspond to your configuration, enabling updates and deletions."
            },
            {
                q: "What is the main difference between Ansible and Terraform?",
                options: ["Ansible configures servers, Terraform provisions infrastructure", "They are interchangeable tools for same purpose", "Ansible only works with cloud providers", "Terraform only works on Linux systems"],
                correct: 0,
                explanation: "Terraform excels at provisioning infrastructure (VMs, networks). Ansible excels at configuring software on existing servers. Often used together."
            },
            {
                q: "Why store IaC files in version control?",
                options: ["Track changes, collaboration, audit history, rollback", "It's technically required by IaC tools", "Configurations run faster from repositories", "Files are automatically compressed smaller"],
                correct: 0,
                explanation: "Version control provides change history, enables code review, supports rollback, and documents infrastructure evolution."
            },
            {
                q: "What is configuration drift?",
                options: ["Manual changes causing systems to differ from code", "Scheduled automatic updates to infrastructure", "Network latency between data centers", "Memory leaks in running applications"],
                correct: 0,
                explanation: "Drift occurs when manual changes cause actual infrastructure to differ from IaC definitions. IaC tools can detect and correct drift."
            },
        ]
    },

    'l-k8s-concepts': {
        1: [
            {
                q: "What is Kubernetes primarily used for?",
                options: ["Orchestrating containerized applications across clusters", "Writing and compiling application source code", "Storing structured data in relational tables", "Building web user interfaces and components"],
                correct: 0,
                explanation: "Kubernetes (K8s) automates deployment, scaling, and management of containerized applications across clusters of machines."
            },
            {
                q: "What is a Pod in Kubernetes?",
                options: ["Smallest deployable unit containing one or more containers", "Physical server in the Kubernetes cluster", "Network device routing traffic between nodes", "Persistent storage volume for application data"],
                correct: 0,
                explanation: "A Pod is the smallest K8s unit, containing one or more containers that share storage and network, always co-located."
            },
            {
                q: "What is kubectl?",
                options: ["Command-line tool for managing Kubernetes clusters", "Web-based dashboard for Kubernetes monitoring", "Container runtime that executes containers", "Automated testing framework for K8s apps"],
                correct: 0,
                explanation: "kubectl is the CLI for interacting with Kubernetes clusters - deploying apps, inspecting resources, viewing logs."
            },
        ],
        2: [
            {
                q: "What's the relationship between Pods and Deployments?",
                options: ["Deployment manages Pod replicas and updates", "They are different names for same concept", "Pod contains multiple Deployments inside", "Deployment runs inside a single Pod"],
                correct: 0,
                explanation: "Deployment manages Pod replicas, handles rolling updates, and ensures desired state. Pods are the actual running instances."
            },
            {
                q: "What does a Kubernetes Service provide?",
                options: ["Stable network endpoint for accessing Pods", "Background job processing for batch tasks", "Persistent storage for application data", "Configuration templates for deployments"],
                correct: 0,
                explanation: "Services provide stable IP/DNS for accessing Pods, load balancing traffic even as Pods are created and destroyed."
            },
            {
                q: "What is a namespace in Kubernetes?",
                options: ["Virtual partition for isolating cluster resources", "File system path inside a container", "Unique identifier for container images", "Protocol for inter-pod communication"],
                correct: 0,
                explanation: "Namespaces partition cluster resources between teams or environments, providing isolation and resource quota boundaries."
            },
        ],
        3: [
            {
                q: "What information does 'kubectl get pods' display?",
                options: ["List of Pods with their current status", "Cluster node hardware information", "Service endpoint IP addresses", "Deployment configuration YAML files"],
                correct: 0,
                explanation: "'kubectl get pods' lists Pods in current namespace with status. Add '-A' for all namespaces, '-o wide' for more details."
            },
            {
                q: "What is the purpose of a ReplicaSet?",
                options: ["Ensures specified number of identical Pods are running", "Provides persistent storage for stateful apps", "Defines network traffic rules between Pods", "Manages user authentication and authorization"],
                correct: 0,
                explanation: "ReplicaSet maintains a stable set of replica Pods. Deployments manage ReplicaSets, adding update strategies."
            },
            {
                q: "How do Pods communicate within a Kubernetes cluster?",
                options: ["Via cluster networking where each Pod gets an IP", "Only through Service load balancers", "By routing through external internet", "Direct communication between Pods is blocked"],
                correct: 0,
                explanation: "Kubernetes provides flat networking where all Pods can reach each other by IP. Services add discovery and load balancing."
            },
            {
                q: "What is a ConfigMap used for?",
                options: ["Storing non-sensitive configuration as key-value pairs", "Storing encrypted secrets and credentials", "Defining network firewall rules", "Managing persistent storage volumes"],
                correct: 0,
                explanation: "ConfigMaps store configuration as key-value pairs, injected into Pods as environment variables or mounted files."
            },
        ]
    },

    'l-waldur-local': {
        1: [
            {
                q: "What tool is used to run Waldur locally for development?",
                options: ["docker-compose for orchestrating multiple services", "npm start for the JavaScript frontend only", "python manage.py runserver for Django", "kubectl apply for Kubernetes deployment"],
                correct: 0,
                explanation: "Waldur uses docker-compose to orchestrate its services (API, UI, database, etc.) for local development."
            },
            {
                q: "What is docker-compose used for?",
                options: ["Defining and running multi-container applications", "Running a single container in isolation", "Building container images from Dockerfiles", "Monitoring container network traffic"],
                correct: 0,
                explanation: "docker-compose uses YAML files to define and run multi-container applications, managing their lifecycle together."
            },
            {
                q: "Which file defines Waldur's local development setup?",
                options: ["docker-compose.yml defines all services", "Dockerfile builds a single container", "package.json lists JavaScript dependencies", "settings.py configures Django application"],
                correct: 0,
                explanation: "docker-compose.yml defines services, networks, and volumes. Waldur's compose file sets up all required components."
            },
        ],
        2: [
            {
                q: "What command starts all Waldur services locally?",
                options: ["docker-compose up starts all defined services", "docker start waldur starts one container", "waldur run is not a valid command", "npm start only runs the frontend"],
                correct: 0,
                explanation: "'docker-compose up' starts all services. Add '-d' for detached mode, '--build' to rebuild images."
            },
            {
                q: "How do you view logs from the Waldur API container?",
                options: ["docker-compose logs api shows service output", "cat /var/log/api reads host file system", "waldur logs is not a valid command", "kubectl logs api requires Kubernetes"],
                correct: 0,
                explanation: "'docker-compose logs <service>' shows logs. Add '-f' to follow in real-time. Service names are defined in compose file."
            },
            {
                q: "What database system does Waldur use for data storage?",
                options: ["PostgreSQL relational database", "MySQL relational database", "MongoDB document database", "SQLite embedded database"],
                correct: 0,
                explanation: "Waldur uses PostgreSQL for data persistence. The compose setup includes a postgres service container."
            },
        ],
        3: [
            {
                q: "How do you rebuild Waldur containers after code changes?",
                options: ["docker-compose up --build rebuilds images", "docker restart only restarts existing", "docker refresh is not a valid command", "docker-compose reload is not supported"],
                correct: 0,
                explanation: "'--build' forces image rebuild before starting. Essential when Dockerfile or dependencies change."
            },
            {
                q: "What is the default URL for Waldur API locally?",
                options: ["http://localhost/api/ with standard port", "http://waldur.local/ requires DNS setup", "http://0.0.0.0:8000/ is Django default", "http://admin.waldur/ is not configured"],
                correct: 0,
                explanation: "Waldur API is typically available at localhost with /api/ prefix. Check compose file for exact port mappings."
            },
            {
                q: "How do you access the Waldur PostgreSQL database directly?",
                options: ["docker-compose exec db psql for Postgres shell", "mysql -u root is for MySQL databases", "sqlite3 waldur.db is for SQLite only", "docker-compose logs db shows logs not shell"],
                correct: 0,
                explanation: "'docker-compose exec db psql' opens PostgreSQL shell. Use -U flag for username, database name as argument."
            },
            {
                q: "What does 'docker-compose down' do?",
                options: ["Stops and removes containers and networks", "Pauses containers but keeps them running", "Restarts all containers with new config", "Shows current container status and health"],
                correct: 0,
                explanation: "'down' stops containers and removes them plus networks. Add '-v' to also remove volumes (warning: deletes data)."
            },
        ]
    },

    'l-workflow': {
        1: [
            {
                q: "What is a feature branch in Git?",
                options: ["Separate branch for developing a specific feature", "The main production branch of the repo", "A branch that has been deleted", "A tag marking a release version"],
                correct: 0,
                explanation: "Feature branches isolate development work, allowing parallel development without affecting main code until ready."
            },
            {
                q: "What is a Pull Request (PR)?",
                options: ["Request to merge your changes into another branch", "Request to download code from remote repo", "A formal bug report filed in the tracker", "A request for new feature from customer"],
                correct: 0,
                explanation: "PRs propose changes for review before merging. They enable code review, discussion, and CI checks."
            },
            {
                q: "What is Jira commonly used for in development teams?",
                options: ["Tracking issues, tasks, and project progress", "Hosting Git repositories and code", "Running automated CI/CD pipelines", "Managing container deployments"],
                correct: 0,
                explanation: "Jira tracks issues, tasks, and project progress. Teams use it to manage work items and sprints."
            },
        ],
        2: [
            {
                q: "What should you do before starting work on a new feature?",
                options: ["Create a new branch from latest main branch", "Commit your changes directly to main branch", "Delete all your old feature branches first", "Merge all open PRs before starting"],
                correct: 0,
                explanation: "Start from updated main to avoid conflicts. Create a descriptive branch name like 'feature/add-login'."
            },
            {
                q: "What is code review in software development?",
                options: ["Team members examining changes before merge", "Automated testing of code functionality", "Monitoring application performance metrics", "Writing technical documentation for code"],
                correct: 0,
                explanation: "Code review catches bugs, shares knowledge, ensures standards, and improves code quality through peer feedback."
            },
            {
                q: "Why should commits reference Jira ticket numbers?",
                options: ["Provides traceability between code and requirements", "Git requires ticket numbers in commits", "Makes CI builds run significantly faster", "Reduces the size of commit history"],
                correct: 0,
                explanation: "Linking provides traceability, helps track what changes address which requirements, and aids debugging."
            },
        ],
        3: [
            {
                q: "What makes a good Pull Request description?",
                options: ["Explains what changed, why, and how to test", "Contains only the Jira ticket number", "Left empty since code speaks for itself", "Copy of all the changed code inline"],
                correct: 0,
                explanation: "Good descriptions help reviewers understand context, changes made, and how to verify correctness."
            },
            {
                q: "When should you update your feature branch from main?",
                options: ["Regularly throughout development and before merge", "Never - keep your branch completely isolated", "Only when Git reports merge conflicts", "Only once at the very beginning"],
                correct: 0,
                explanation: "Regular updates reduce merge conflicts and catch integration issues early. Rebase or merge from main frequently."
            },
            {
                q: "What does CI mean in development workflow?",
                options: ["Continuous Integration - automated build and test", "Code Inspection - manual review process", "Customer Interface - user-facing features", "Container Image - Docker artifacts"],
                correct: 0,
                explanation: "CI automatically builds and tests code on every commit, catching issues early and ensuring code quality."
            },
            {
                q: "What should you do after your PR is approved?",
                options: ["Merge to main and delete the feature branch", "Create another PR with more changes", "Keep the branch for future reference", "Revert all the changes you made"],
                correct: 0,
                explanation: "After approval and CI passing, merge to main and delete the feature branch to keep the repository clean."
            },
        ]
    },

    // ============================================================================
    // PRODUCT TIER - Additional Skills
    // ============================================================================

    'p-use-cases': {
        1: [
            {
                q: "What type of organizations typically use Waldur?",
                options: ["Research institutions, universities, and government agencies", "Exclusively early-stage startup companies", "Only financial banking institutions", "Primarily retail and e-commerce companies"],
                correct: 0,
                explanation: "Waldur serves research institutions, universities, government agencies, and organizations managing shared computing resources."
            },
            {
                q: "What is a common use case for Waldur?",
                options: ["Managing cloud resource allocation for researchers", "Scheduling social media posts and campaigns", "Streaming video content to end users", "Hosting email servers and mailboxes"],
                correct: 0,
                explanation: "Waldur helps organizations manage and allocate computing resources (VMs, HPC, storage) to users and projects."
            },
            {
                q: "Why do customers choose Waldur over alternatives?",
                options: ["Self-service portal with admin control and visibility", "Built-in gaming and entertainment features", "Social networking and collaboration tools", "Photo and video editing capabilities"],
                correct: 0,
                explanation: "Waldur provides self-service portals where users request resources, while admins maintain control and visibility."
            },
        ],
        2: [
            {
                q: "How does Waldur help with resource allocation?",
                options: ["Automated provisioning with configurable approval workflows", "Manual processing through email requests only", "Phone-based support for all requests", "No automation - fully manual process"],
                correct: 0,
                explanation: "Waldur automates resource provisioning with configurable approval workflows, quotas, and billing integration."
            },
            {
                q: "What reporting capabilities does Waldur provide?",
                options: ["Usage tracking, cost allocation, and audit logs", "Only basic text-based application logs", "No reporting features are included", "Email-based weekly summary reports only"],
                correct: 0,
                explanation: "Waldur tracks resource usage, allocates costs to projects/departments, and maintains audit logs for compliance."
            },
            {
                q: "How does Waldur support multi-tenancy?",
                options: ["Isolated organizations with their own users and resources", "Single shared workspace for all users", "Multi-tenancy is not supported", "Maximum of two tenants allowed"],
                correct: 0,
                explanation: "Waldur supports multiple organizations, each with isolated users, projects, and resources on shared infrastructure."
            },
        ],
        3: [
            {
                q: "What is a typical deployment scenario for research institutions?",
                options: ["Federated access to HPC clusters and cloud resources", "Single desktop application installation", "Offline-only system with no network access", "Manual tracking using spreadsheets"],
                correct: 0,
                explanation: "Research institutions federate access across HPC clusters, OpenStack clouds, and commercial clouds through Waldur."
            },
            {
                q: "How does Waldur integrate with existing infrastructure?",
                options: ["Through plugins connecting to various backends", "Only as complete infrastructure replacement", "Integration with existing systems not possible", "Through manual data entry and sync"],
                correct: 0,
                explanation: "Waldur's plugin architecture connects to OpenStack, Kubernetes, SLURM, Azure, and other backends."
            },
            {
                q: "What compliance features does Waldur provide?",
                options: ["Audit trails, approval workflows, and access controls", "No compliance-related features included", "Only basic activity logging capabilities", "Requires third-party compliance tools"],
                correct: 0,
                explanation: "Waldur provides audit trails, configurable approval workflows, and fine-grained access controls for compliance."
            },
            {
                q: "How do customers typically measure Waldur ROI?",
                options: ["Time saved, resource utilization, and reduced overhead", "Only by counting total number of users", "By measuring lines of code written", "By counting number of servers managed"],
                correct: 0,
                explanation: "ROI comes from reduced manual work, better resource utilization, faster provisioning, and improved visibility."
            },
        ]
    },

    'p-deployment-options': {
        1: [
            {
                q: "Where can Waldur be deployed?",
                options: ["Cloud, on-premises, or hybrid environments", "Only in public cloud environments", "Only in on-premises data centers", "Only on desktop computers"],
                correct: 0,
                explanation: "Waldur supports flexible deployment: public cloud, private data centers, or hybrid combinations."
            },
            {
                q: "What is an on-premises deployment?",
                options: ["Running software in your own data center", "Using a public cloud service provider", "Installing a mobile application", "Adding a browser extension"],
                correct: 0,
                explanation: "On-premises means hosting in your own infrastructure, giving full control over hardware and data."
            },
            {
                q: "What is a SaaS deployment model?",
                options: ["Software hosted and managed by the vendor", "Software you install and manage yourself", "Desktop application you download", "Mobile app from an app store"],
                correct: 0,
                explanation: "SaaS is vendor-hosted, reducing operational burden. Customers access via internet without managing infrastructure."
            },
        ],
        2: [
            {
                q: "What is an air-gapped deployment?",
                options: ["Isolated network with no internet connection", "Standard cloud-based deployment setup", "Mobile deployment for field workers", "Development and testing environment"],
                correct: 0,
                explanation: "Air-gapped systems have no external network access, used for high-security environments requiring complete isolation."
            },
            {
                q: "What deployment method does Waldur use?",
                options: ["Docker containers with Kubernetes or compose", "Traditional Windows installer package", "Manual file copying to servers", "FTP upload of application files"],
                correct: 0,
                explanation: "Waldur is containerized for consistent deployment across environments using Docker, Kubernetes, or docker-compose."
            },
            {
                q: "Why might an organization choose on-premises deployment?",
                options: ["Data sovereignty, security, and compliance needs", "On-premises is always the cheapest option", "Performance is always better on-premises", "Docker requires on-premises deployment"],
                correct: 0,
                explanation: "On-premises gives control over data location, meets regulatory requirements, and addresses security policies."
            },
        ],
        3: [
            {
                q: "What is hybrid cloud deployment?",
                options: ["Combination of on-premises and cloud resources", "Using two different public cloud providers", "Running on both desktop and mobile", "Separate development and production systems"],
                correct: 0,
                explanation: "Hybrid combines private infrastructure with public cloud, balancing control, cost, and flexibility."
            },
            {
                q: "What are considerations for air-gapped Waldur deployment?",
                options: ["Offline updates, local registry, and manual sync", "Standard internet-based update process", "Cloud backup is mandatory requirement", "No special considerations are needed"],
                correct: 0,
                explanation: "Air-gapped requires offline update mechanisms, local container registries, and manual data import procedures."
            },
            {
                q: "How does Waldur handle high availability?",
                options: ["Multiple replicas behind a load balancer", "Single server deployment is required", "Manual failover process only", "High availability is not supported"],
                correct: 0,
                explanation: "Waldur supports HA through container orchestration, database replication, and load balancing."
            },
            {
                q: "What is the recommended production deployment?",
                options: ["Kubernetes cluster with Helm charts", "docker-compose running on a laptop", "Manual installation on bare metal", "Windows Server with IIS web server"],
                correct: 0,
                explanation: "Production deployments typically use Kubernetes for scalability, reliability, and operational features."
            },
        ]
    },

    'p-vertical-hpc': {
        1: [
            {
                q: "What does HPC stand for?",
                options: ["High Performance Computing for complex problems", "High Power Configuration for servers", "Hosted Private Cloud infrastructure", "Hardware Processing Center facility"],
                correct: 0,
                explanation: "HPC uses supercomputers and clusters to solve complex computational problems in science, engineering, and research."
            },
            {
                q: "What is SLURM in HPC context?",
                options: ["Job scheduler and resource manager for clusters", "Distributed storage system for large files", "Network protocol for cluster communication", "Programming language for parallel computing"],
                correct: 0,
                explanation: "SLURM (Simple Linux Utility for Resource Management) schedules and manages jobs on HPC clusters."
            },
            {
                q: "What is a compute allocation in HPC?",
                options: ["Assigned computing resources granted to a project", "Network bandwidth allocated to users", "Storage quota for research data", "User account creation request"],
                correct: 0,
                explanation: "Allocations grant projects access to compute hours, typically measured in core-hours or node-hours."
            },
        ],
        2: [
            {
                q: "How does Waldur integrate with SLURM?",
                options: ["Through a SLURM plugin for allocation management", "Direct integration is not available", "Only through manual configuration files", "Via email-based request processing"],
                correct: 0,
                explanation: "Waldur's SLURM plugin manages allocations, submits accounting data, and provides usage visibility."
            },
            {
                q: "What are core-hours in HPC accounting?",
                options: ["CPU cores multiplied by hours of usage", "Amount of storage used over time", "Network bandwidth consumption rate", "Memory usage over time period"],
                correct: 0,
                explanation: "Core-hours measure compute usage: 1 job using 100 cores for 2 hours = 200 core-hours."
            },
            {
                q: "What is an HPC allocation workflow in Waldur?",
                options: ["Request, approval, provisioning, and usage tracking", "Instant access without any approval process", "Email request sent directly to admin", "No structured workflow is provided"],
                correct: 0,
                explanation: "Users request allocations, approvers review, Waldur provisions access, and tracks usage against quotas."
            },
        ],
        3: [
            {
                q: "How does Waldur report HPC usage?",
                options: ["Pulls SLURM accounting data for reports", "Requires manual data entry for reports", "Reporting features are not included", "Requires separate third-party tools"],
                correct: 0,
                explanation: "Waldur syncs with SLURM accounting database to show usage, remaining allocation, and generate reports."
            },
            {
                q: "What is a common challenge in HPC resource management?",
                options: ["Fair share scheduling and allocation tracking", "Having too much unused compute capacity", "Not having any users for the resources", "Simple single-user access management"],
                correct: 0,
                explanation: "HPC centers must fairly allocate limited resources across many projects and track usage for billing/reporting."
            },
            {
                q: "How does Waldur support AI/ML workloads?",
                options: ["GPU allocation management and Jupyter integration", "AI and ML workloads are not supported", "Only CPU-based workloads are supported", "Requires separate dedicated AI system"],
                correct: 0,
                explanation: "Waldur manages GPU allocations and can integrate with Jupyter hubs for AI/ML researcher workflows."
            },
            {
                q: "What reporting do HPC centers typically need?",
                options: ["Usage by project, user, and resource type", "Only total usage", "No reporting needed", "Manual spreadsheets only"],
                correct: 0,
                explanation: "HPC centers report usage breakdowns for billing, capacity planning, and demonstrating resource utilization."
            },
        ]
    },

    'p-vertical-gov': {
        1: [
            {
                q: "What is a key requirement for government IT systems?",
                options: ["Compliance and audit capabilities", "Fastest performance", "Cheapest cost", "Social media integration"],
                correct: 0,
                explanation: "Government systems must meet regulatory compliance, maintain audit trails, and ensure data sovereignty."
            },
            {
                q: "What is data sovereignty?",
                options: ["Data subject to laws of country where stored", "Data ownership by users", "Data encryption", "Data compression"],
                correct: 0,
                explanation: "Data sovereignty means data is subject to laws of its storage location, critical for government compliance."
            },
            {
                q: "Why is audit logging important for government?",
                options: ["Accountability and compliance verification", "Performance optimization", "Cost reduction", "User convenience"],
                correct: 0,
                explanation: "Audit logs provide accountability, support compliance audits, and help investigate security incidents."
            },
        ],
        2: [
            {
                q: "How does Waldur support government compliance?",
                options: ["Audit trails, approval workflows, access controls", "No compliance features", "Third-party tools only", "Manual processes"],
                correct: 0,
                explanation: "Waldur provides comprehensive audit logging, configurable approvals, and fine-grained access controls."
            },
            {
                q: "What is an approval workflow?",
                options: ["Multi-step process requiring authorized approvals", "Automatic approval", "No approval needed", "Email confirmation"],
                correct: 0,
                explanation: "Approval workflows ensure proper authorization before provisioning resources, meeting policy requirements."
            },
            {
                q: "Why might government prefer on-premises deployment?",
                options: ["Data control, security policies, regulations", "Always cheaper", "Better performance", "Easier setup"],
                correct: 0,
                explanation: "On-premises keeps data within controlled environments, meeting security policies and regulatory requirements."
            },
        ],
        3: [
            {
                q: "What security features does Waldur provide?",
                options: ["RBAC, MFA support, encryption, audit logs", "No security features", "Basic password only", "Third-party required"],
                correct: 0,
                explanation: "Waldur includes role-based access control, MFA integration, data encryption, and comprehensive audit logging."
            },
            {
                q: "How does Waldur handle sensitive data classification?",
                options: ["Configurable data handling policies and access controls", "No classification support", "Single security level", "Manual tracking"],
                correct: 0,
                explanation: "Waldur's access controls and policies can enforce data classification requirements and handling rules."
            },
            {
                q: "What is change management in government context?",
                options: ["Controlled process for implementing changes", "Immediate changes", "No process needed", "Automatic updates"],
                correct: 0,
                explanation: "Change management ensures changes are reviewed, tested, approved, and documented before implementation."
            },
            {
                q: "How does Waldur support disaster recovery requirements?",
                options: ["Backup support, stateless design, documented recovery", "No DR support", "Automatic failover only", "Manual recovery only"],
                correct: 0,
                explanation: "Waldur's containerized design and database backups support disaster recovery planning and procedures."
            },
        ]
    },

    'p-vertical-fed': {
        1: [
            {
                q: "What is federation in the context of Waldur?",
                options: ["Multiple organizations sharing resources through one portal", "Single organization", "Social network", "Email federation"],
                correct: 0,
                explanation: "Federation enables multiple organizations to collaborate and share resources through a unified platform."
            },
            {
                q: "What is a consortium?",
                options: ["Group of organizations collaborating on shared goals", "Single company", "Software license", "Network protocol"],
                correct: 0,
                explanation: "Consortiums are partnerships where organizations pool resources, common in research and academic contexts."
            },
            {
                q: "Why do organizations federate resources?",
                options: ["Share costs, increase capacity, enable collaboration", "Legal requirement", "Reduce users", "Simplify billing"],
                correct: 0,
                explanation: "Federation allows resource sharing, cost distribution, and collaboration while maintaining organizational boundaries."
            },
        ],
        2: [
            {
                q: "How does Waldur support multi-organization setups?",
                options: ["Hierarchical organization structure with isolation", "Single organization only", "No multi-org support", "Separate installations"],
                correct: 0,
                explanation: "Waldur supports organization hierarchies where each org has isolated users and resources within shared infrastructure."
            },
            {
                q: "What is federated identity?",
                options: ["Single sign-on across multiple organizations", "Separate logins per system", "No identity management", "Local accounts only"],
                correct: 0,
                explanation: "Federated identity allows users to authenticate once and access resources across member organizations."
            },
            {
                q: "How are resources shared in a federation?",
                options: ["Through marketplace offerings and cross-org permissions", "Copy data manually", "No sharing possible", "Email attachments"],
                correct: 0,
                explanation: "Waldur marketplace enables organizations to offer resources to federation members with appropriate access controls."
            },
        ],
        3: [
            {
                q: "What is a common federated research infrastructure use case?",
                options: ["European research networks sharing computing resources", "Single university lab", "Small business IT", "Home computing"],
                correct: 0,
                explanation: "Research federations like EGI or GÉANT member organizations share HPC, cloud, and data resources."
            },
            {
                q: "How does billing work in federated setups?",
                options: ["Configurable billing per organization with aggregated reporting", "Single invoice", "No billing", "Cash payments"],
                correct: 0,
                explanation: "Waldur tracks usage per organization, enabling internal billing, chargebacks, or funding allocation reporting."
            },
            {
                q: "What governance challenges exist in federations?",
                options: ["Coordinating policies across autonomous organizations", "Single authority", "No governance needed", "Automatic resolution"],
                correct: 0,
                explanation: "Federations must balance organizational autonomy with shared policies, requiring clear governance structures."
            },
            {
                q: "How does Waldur handle cross-organization projects?",
                options: ["Projects can include members from multiple organizations", "Single org projects only", "No project support", "Manual coordination"],
                correct: 0,
                explanation: "Waldur projects can span organizations, enabling collaborative resource usage with appropriate permissions."
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

// Get all available levels for a skill (only levels with actual questions)
function getAvailableLevels(skillId) {
    const skillQuestions = questions[skillId];
    if (!skillQuestions) return [];
    return Object.keys(skillQuestions)
        .map(Number)
        .filter(level => skillQuestions[level] && skillQuestions[level].length > 0)
        .sort((a, b) => a - b);
}

// Check if skill has questions (at least one level with non-empty questions)
function hasQuestions(skillId) {
    const skillQuestions = questions[skillId];
    if (!skillQuestions) return false;
    return Object.values(skillQuestions).some(levelQ => levelQ && levelQ.length > 0);
}
