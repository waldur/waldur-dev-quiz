import type { Question, QuestionBank } from '@/types/game'

export const questions: QuestionBank = {
    // ============================================================================
    // LITERACY TIER
    // ============================================================================

    'l-cli': {
        1: [
            {
                q: "Which command lists files in the current directory?",
                options: ["cat", "cd", "rm", "ls"],
                correct: 3,
                explanation: "The 'ls' command lists directory contents. 'cd' changes directory, 'rm' removes files, and 'cat' displays file contents.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html", text: "📚 GNU ls Manual" }
            },
            {
                q: "What does 'cd ..' do?",
                options: ["Delete the current directory", "Create a new subdirectory", "Move to the parent directory", "List all files in directory"],
                correct: 2,
                explanation: "In Unix, '..' represents the parent directory. 'cd ..' navigates one level up in the directory tree.",
                learnMore: { url: "https://linuxcommand.org/lc3_lts0020.php", text: "📚 Navigation Tutorial" }
            },
            {
                q: "Which command prints the current directory path?",
                options: ["path", "pwd", "dir", "where"],
                correct: 1,
                explanation: "'pwd' stands for 'Print Working Directory'. It shows the absolute path of your current location in the filesystem.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/pwd-invocation.html", text: "📚 GNU pwd Manual" }
            },
            {
                q: "What command creates a new directory?",
                options: ["newdir", "md", "create", "mkdir"],
                correct: 3,
                explanation: "'mkdir' stands for 'Make Directory'. Use 'mkdir -p' to create nested directories in one command.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/mkdir-invocation.html", text: "📚 GNU mkdir Manual" }
            },
        ],
        2: [
            {
                q: "What does 'ls -la' show that 'ls' doesn't?",
                options: ["Only directory names listed", "Full file content previews", "Hidden files and detailed info", "Currently running processes"],
                correct: 2,
                explanation: "The '-l' flag shows long format (permissions, size, date), and '-a' shows hidden files (those starting with '.').",
                learnMore: { url: "https://linuxize.com/post/how-to-list-files-in-linux-using-the-ls-command/", text: "📚 ls Command Guide" }
            },
            {
                q: "How do you redirect output to a file?",
                options: ["| filename", "> filename", "< filename", ">> filename only appends"],
                correct: 1,
                explanation: "'>' redirects output and overwrites the file. '>>' appends instead. '|' pipes to another command, '<' reads from a file.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html", text: "📚 Bash Redirections" }
            },
            {
                q: "What does the pipe operator '|' do?",
                options: ["Copies files to directory", "Passes output to another command", "Creates a background process", "Redirects output to a file"],
                correct: 1,
                explanation: "Pipes connect commands by sending stdout of one command to stdin of the next, enabling powerful command chains.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Pipelines.html", text: "📚 Bash Pipelines" }
            },
            {
                q: "How do you view the contents of a file?",
                options: ["read filename", "open filename", "view filename", "cat filename"],
                correct: 3,
                explanation: "'cat' concatenates and displays file contents. For large files, use 'less' or 'more' for paginated viewing.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html", text: "📚 GNU cat Manual" }
            },
        ],
        3: [
            {
                q: "What's the difference between '>' and '>>'?",
                options: ["Local vs remote", "Text vs binary", "Overwrite vs append", "Same thing"],
                correct: 2,
                explanation: "'>' overwrites the file completely. '>>' appends to the end, preserving existing content. Use >> for log files!",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html", text: "📚 Bash Redirections" }
            },
            {
                q: "How do you find files by name recursively?",
                options: ["grep -r 'pattern' in files", "find . -name 'pattern' search", "locate 'pattern' from cache", "ls -R 'pattern' in current dir"],
                correct: 1,
                explanation: "'find' searches directory trees. Use -name for filename patterns, -type f for files only, -mtime for modification time.",
                learnMore: { url: "https://www.gnu.org/software/findutils/manual/html_mono/find.html", text: "📚 GNU Find Manual" }
            },
            {
                q: "What does 'tail -f logfile' do?",
                options: ["Follow log updates in real-time", "Show first lines of file", "Delete old log entries", "Count total line numbers"],
                correct: 0,
                explanation: "The '-f' flag follows the file, displaying new lines as they're appended. Essential for monitoring live logs. Use Ctrl+C to stop.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/tail-invocation.html", text: "📚 GNU tail Manual" }
            },
            {
                q: "What does 'chmod 755 file' do?",
                options: ["Changes the file owner to root", "Moves file to new location", "Compresses file with gzip", "Sets read/write/execute permissions"],
                correct: 3,
                explanation: "755 = rwxr-xr-x (owner: full access, group/others: read+execute). Each digit is owner/group/others. 7=rwx, 5=r-x, 4=r--.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html", text: "📚 GNU chmod Manual" }
            },
            {
                q: "How do you search for text within files?",
                options: ["look 'text' file", "grep 'text' file", "search 'text' file", "find 'text' file"],
                correct: 1,
                explanation: "'grep' searches file contents for patterns. Use -r for recursive, -i for case-insensitive, -n for line numbers.",
                learnMore: { url: "https://www.gnu.org/software/grep/manual/grep.html", text: "📚 GNU grep Manual" }
            },
        ],
        4: [
            {
                q: "What does 'xargs' do in a pipeline?",
                options: ["Converts stdin to arguments", "Filters matching output", "Sorts output results", "Executes commands parallel"],
                correct: 0,
                explanation: "'xargs' builds and executes commands from stdin. Example: find . -name '*.log' | xargs rm. Use -I{} for placeholders.",
                learnMore: { url: "https://www.gnu.org/software/findutils/manual/html_node/xargs-invocation.html", text: "📚 GNU xargs Manual" }
            },
            {
                q: "How do you run a command in background?",
                options: ["Use nohup command", "Prefix with bg cmd", "Press Ctrl+Z keys", "Append & to command"],
                correct: 3,
                explanation: "Appending '&' runs the command in background immediately. Ctrl+Z suspends a running process, then 'bg' resumes it in background.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Job-Control.html", text: "📚 Bash Job Control" }
            },
            {
                q: "What does 'ps aux' show?",
                options: ["All running processes", "Current disk usage", "System memory info", "Active network ports"],
                correct: 0,
                explanation: "'ps aux' shows all processes: a=all users, u=user-oriented format, x=processes without terminal. Commonly piped to grep.",
                learnMore: { url: "https://man7.org/linux/man-pages/man1/ps.1.html", text: "📚 ps Manual" }
            },
            {
                q: "How do you find which process is using a port?",
                options: ["grep port /etc/services", "netstat --find-port <num>", "ps aux --filter port=<num>", "lsof -i :port or ss -tlnp"],
                correct: 3,
                explanation: "'lsof -i :8080' shows processes using port 8080. 'netstat -tlnp' or 'ss -tlnp' also work. Useful for debugging port conflicts.",
                learnMore: { url: "https://man7.org/linux/man-pages/man8/lsof.8.html", text: "📚 lsof Manual" }
            },
        ],
        5: [
            {
                q: "What's the purpose of /dev/null?",
                options: ["Discard output silently", "Network interface", "Root device", "Generate random data"],
                correct: 0,
                explanation: "/dev/null is a 'black hole' - writes disappear, reads return EOF. Use 'command > /dev/null 2>&1' to silence all output.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Null_device", text: "📚 Null Device Wiki" }
            },
            {
                q: "How do you capture both stdout and stderr to a file?",
                options: ["command 2> file", "command > file", "command | file", "command &> file"],
                correct: 3,
                explanation: "'&>' redirects both streams (Bash 4+). Traditional syntax: 'command > file 2>&1'. '2>' redirects only stderr.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html", text: "📚 Bash Redirections" }
            },
            {
                q: "What does 'nohup' do?",
                options: ["Pauses process execution", "Changes process priority", "Stops a running process now", "Keeps process running after logout"],
                correct: 3,
                explanation: "'nohup' (no hangup) ignores SIGHUP signal sent when terminal closes. Output goes to nohup.out. Combine with & for background.",
                learnMore: { url: "https://www.gnu.org/software/coreutils/manual/html_node/nohup-invocation.html", text: "📚 GNU nohup Manual" }
            },
            {
                q: "How do you set an environment variable for all sessions?",
                options: ["Run env VAR=value once", "Use set VAR=value syntax", "Add to ~/.bashrc or ~/.profile", "Run export VAR=value once"],
                correct: 2,
                explanation: "~/.bashrc runs for interactive shells, ~/.profile for login shells. 'export VAR=value' only affects the current session.",
                learnMore: { url: "https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html", text: "📚 Bash Startup Files" }
            },
            {
                q: "What does 'awk '{print $1}'' do?",
                options: ["Prints first column of each line", "Counts total word count", "Prints the first line only", "Searches for text match"],
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
                options: ["git fetch", "git pull", "git download", "git clone"],
                correct: 3,
                explanation: "'git clone' creates a local copy of a remote repository, including all branches and history. 'pull' and 'fetch' are for updating existing repos.",
                learnMore: { url: "https://git-scm.com/docs/git-clone", text: "📚 Git Clone Docs" }
            },
            {
                q: "What does 'git status' show?",
                options: ["Changed files and staging area", "Repository config file", "Full commit history log", "All remote branch list"],
                correct: 0,
                explanation: "'git status' shows the working tree status: staged changes, unstaged modifications, and untracked files.",
                learnMore: { url: "https://git-scm.com/docs/git-status", text: "📚 Git Status Docs" }
            },
            {
                q: "How do you stage a file for commit?",
                options: ["git stage filename", "git commit filename", "git push filename", "git add filename"],
                correct: 3,
                explanation: "'git add' moves changes to the staging area (index). Use 'git add .' to stage all changes or 'git add -p' for interactive staging.",
                learnMore: { url: "https://git-scm.com/docs/git-add", text: "📚 Git Add Docs" }
            },
            {
                q: "What does 'git init' do?",
                options: ["Downloads remote repo", "Commits all changes", "Creates a new Git repository", "Creates a new branch"],
                correct: 2,
                explanation: "'git init' creates a new .git directory, initializing an empty Git repository. Use this to start version control in a project.",
                learnMore: { url: "https://git-scm.com/docs/git-init", text: "📚 Git Init Docs" }
            },
        ],
        2: [
            {
                q: "What's the difference between 'git pull' and 'git fetch'?",
                options: ["Pull also merges, fetch only downloads", "Pull only works locally", "They do exactly the same thing", "Fetch is faster than pull"],
                correct: 0,
                explanation: "'git fetch' downloads changes without modifying your working directory. 'git pull' = fetch + merge. Use fetch when you want to review changes first.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/syncing/git-fetch", text: "📚 Fetch vs Pull Guide" }
            },
            {
                q: "How do you create a new branch?",
                options: ["git new name", "git branch -new name", "git create name", "git checkout -b name"],
                correct: 3,
                explanation: "'git checkout -b name' creates and switches to a new branch. Modern Git also supports 'git switch -c name' for the same purpose.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/using-branches", text: "📚 Git Branching Guide" }
            },
            {
                q: "What does 'git commit -m' do?",
                options: ["Commit changes to main branch", "Commit all files without staging", "Commit with an inline message", "Commit changes and push remote"],
                correct: 2,
                explanation: "The '-m' flag lets you provide a commit message inline. Without it, Git opens an editor for the message. Write clear, descriptive messages!",
                learnMore: { url: "https://cbea.ms/git-commit/", text: "📚 Commit Message Guide" }
            },
            {
                q: "How do you switch to an existing branch?",
                options: ["git branch --switch branchname", "git switch branchname only", "Both git checkout and git switch", "git checkout branchname only"],
                correct: 2,
                explanation: "Both 'git checkout' and 'git switch' can change branches. 'git switch' (introduced in Git 2.23) is more intuitive for branch operations.",
                learnMore: { url: "https://git-scm.com/docs/git-switch", text: "📚 Git Switch Docs" }
            },
        ],
        3: [
            {
                q: "How do you undo the last commit but keep changes?",
                options: ["git undo last commit", "git reset --soft HEAD~1", "git rollback previous", "git revert HEAD commit"],
                correct: 1,
                explanation: "'--soft' keeps changes staged, '--mixed' (default) unstages them, '--hard' discards them. 'revert' creates a new commit that undoes changes.",
                learnMore: { url: "https://git-scm.com/docs/git-reset", text: "📚 Git Reset Docs" }
            },
            {
                q: "What's a pull request / merge request for?",
                options: ["Pull changes from remote", "Request repository access", "Request code review before merging", "Merge branches directly"],
                correct: 2,
                explanation: "PRs/MRs enable code review, discussion, and CI checks before merging. They're central to collaborative Git workflows like GitHub Flow.",
                learnMore: { url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests", text: "📚 GitHub PR Guide" }
            },
            {
                q: "How do you see commit history?",
                options: ["git commits", "git log", "git history", "git show-all"],
                correct: 1,
                explanation: "'git log' shows commit history. Add --oneline for compact view, --graph for branch visualization, -p for diffs.",
                learnMore: { url: "https://git-scm.com/docs/git-log", text: "📚 Git Log Docs" }
            },
            {
                q: "What does 'git diff' show?",
                options: ["List of all available branches", "Differences with remote server", "Changes in working tree or commits", "Differences in config settings"],
                correct: 2,
                explanation: "'git diff' shows unstaged changes. 'git diff --staged' shows staged changes. 'git diff branch1..branch2' compares branches.",
                learnMore: { url: "https://git-scm.com/docs/git-diff", text: "📚 Git Diff Docs" }
            },
        ],
        4: [
            {
                q: "When should you use 'git rebase' vs 'git merge'?",
                options: ["Rebase for clean history; merge keeps context", "Always rebase, whatever the circumstances", "Always merge, whatever the circumstances", "They produce identical results every time"],
                correct: 0,
                explanation: "Rebase rewrites history for a linear timeline - use for local/feature branches. Merge preserves history - use for shared branches. Never rebase public branches!",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing", text: "📚 Merge vs Rebase Guide" }
            },
            {
                q: "How do you resolve a merge conflict?",
                options: ["Delete the conflicting files entirely", "Reset branch back to remote", "Edit files, remove markers, stage and commit", "Run git resolve --auto command"],
                correct: 2,
                explanation: "Conflicts show <<<<<<<, =======, >>>>>>> markers. Edit to keep desired code, remove markers, 'git add' the file, then commit.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts", text: "📚 Merge Conflicts Guide" }
            },
            {
                q: "What does 'git stash' do?",
                options: ["Pushes changes to remote repo", "Commits all staged modifications", "Temporarily saves uncommitted work", "Deletes all untracked local files"],
                correct: 2,
                explanation: "Stash saves work-in-progress without committing. 'git stash pop' restores and removes from stash. 'git stash list' shows all stashes.",
                learnMore: { url: "https://git-scm.com/docs/git-stash", text: "📚 Git Stash Docs" }
            },
            {
                q: "How do you see what branches exist on remote?",
                options: ["git branch -r", "git remote branches", "git list branches", "git show remote"],
                correct: 0,
                explanation: "'-r' shows remote branches, '-a' shows all (local + remote). Run 'git fetch' first to update remote branch info.",
                learnMore: { url: "https://git-scm.com/docs/git-branch", text: "📚 Git Branch Docs" }
            },
        ],
        5: [
            {
                q: "What does 'git bisect' help you do?",
                options: ["Find commit that introduced a bug", "Create multiple branches", "Split commits into smaller ones", "Divide repo into submodules"],
                correct: 0,
                explanation: "Bisect performs binary search through commits. Mark commits as 'good' or 'bad', and Git finds the first bad commit efficiently.",
                learnMore: { url: "https://git-scm.com/docs/git-bisect", text: "📚 Git Bisect Docs" }
            },
            {
                q: "How do you squash multiple commits?",
                options: ["git rebase -i with squash", "git combine <commits>", "git merge --squash only", "git squash <commits>"],
                correct: 0,
                explanation: "Interactive rebase (-i) lets you squash, edit, reorder, or drop commits. Change 'pick' to 'squash' or 's' to combine with previous commit.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History", text: "📚 Rewriting History" }
            },
            {
                q: "What does 'git reflog' show?",
                options: ["Remote server push and pull activity", "Git internal error and debug messages", "Only the most recent branch references", "All ref updates including lost commits"],
                correct: 3,
                explanation: "Reflog tracks all HEAD movements locally - even 'lost' commits after reset. Essential for recovering from mistakes. Entries expire after 90 days.",
                learnMore: { url: "https://git-scm.com/docs/git-reflog", text: "📚 Git Reflog Docs" }
            },
            {
                q: "How do you cherry-pick a commit?",
                options: ["git pick <hash>", "git cherry-pick <hash>", "git copy <hash>", "git select <hash>"],
                correct: 1,
                explanation: "Cherry-pick applies a specific commit to current branch. Useful for backporting fixes. Creates a new commit with the same changes.",
                learnMore: { url: "https://git-scm.com/docs/git-cherry-pick", text: "📚 Git Cherry-pick Docs" }
            },
            {
                q: "What's a Git hook used for?",
                options: ["Hook remote servers", "Link branches", "Connect repositories", "Run scripts on Git events"],
                correct: 3,
                explanation: "Hooks are scripts triggered by Git events: pre-commit (lint), commit-msg (validate message), pre-push (run tests). Found in .git/hooks/.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks", text: "📚 Git Hooks Guide" }
            },
        ]
    },

    'l-containers-101': {
        1: [
            {
                q: "What's the main benefit of containers?",
                options: ["Applications need no dependencies at all", "The same environment runs on every machine", "Containers always outperform virtual machines", "Processes get direct access to the hardware"],
                correct: 1,
                explanation: "Containers package applications with their dependencies, ensuring 'it works on my machine' translates to 'it works everywhere'.",
                learnMore: { url: "https://docs.docker.com/get-started/overview/", text: "📚 Docker Overview" }
            },
            {
                q: "What's the difference between an image and a container?",
                options: ["The container is the template; the image runs it", "The image stores data; the container stores code", "The image is the template; the container runs it", "They are the same thing under two different names"],
                correct: 2,
                explanation: "An image is a read-only blueprint (like a class). A container is a running instance of that image (like an object). Multiple containers can share one image.",
                learnMore: { url: "https://docs.docker.com/get-started/overview/#images", text: "📚 Images & Containers" }
            },
            {
                q: "Why are containers considered 'immutable'?",
                options: ["Their filesystem is mounted strictly read-only", "Changes to the filesystem are lost on restart", "They cannot be modified once they are published", "They are isolated from the network entirely"],
                correct: 1,
                explanation: "Container filesystems are ephemeral - changes are lost when the container stops. Use volumes for persistent data. This promotes reproducibility.",
                learnMore: { url: "https://docs.docker.com/storage/volumes/", text: "📚 Docker Volumes" }
            },
        ],
        2: [
            {
                q: "How do you view logs of a container?",
                options: ["docker logs container-name", "cat /var/log/docker", "docker show logs", "docker output"],
                correct: 0,
                explanation: "'docker logs' shows stdout/stderr from the container. Add '-f' to follow logs in real-time, '--tail 100' to see last 100 lines.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/logs/", text: "📚 Docker Logs Docs" }
            },
            {
                q: "What does restart policy 'always' mean?",
                options: ["It restarts on a crash, but not after a reboot", "It restarts only when an operator asks for it", "It restarts after a crash and after a host reboot", "It restarts once and then gives up on failure"],
                correct: 2,
                explanation: "The 'always' restart policy ensures containers restart after crashes and when Docker daemon starts. Use 'unless-stopped' to exclude manual stops.",
                learnMore: { url: "https://docs.docker.com/config/containers/start-containers-automatically/", text: "📚 Restart Policies" }
            },
            {
                q: "Where should container logs typically go?",
                options: ["To stdout and stderr, for the runtime to collect", "To a log file on a volume inside the container", "To /var/log within the container filesystem", "To a database the application writes to itself"],
                correct: 0,
                explanation: "The 12-factor app principle: log to stdout/stderr, let the platform (Docker, K8s) collect and aggregate logs externally.",
                learnMore: { url: "https://12factor.net/logs", text: "📚 12-Factor Logs" }
            },
        ],
        3: [
            {
                q: "What's the purpose of a volume in Docker?",
                options: ["To increase the storage available to an image", "To share CPU and memory between containers", "To keep data when the container is replaced", "To expose network storage to the host only"],
                correct: 2,
                explanation: "Volumes persist data beyond container lifecycle. Data in the container filesystem is lost when the container is removed. Use volumes for databases, uploads, etc.",
                learnMore: { url: "https://docs.docker.com/storage/volumes/", text: "📚 Docker Volumes" }
            },
            {
                q: "Why use multi-stage builds?",
                options: ["Several containers are produced from one file", "The final image excludes compilers and build tools", "Build steps execute in parallel across stages", "Layer caching is disabled to force a clean build"],
                correct: 1,
                explanation: "Multi-stage builds use multiple FROM statements. Build tools stay in early stages; only artifacts copy to final stage. Results in much smaller production images.",
                learnMore: { url: "https://docs.docker.com/build/building/multi-stage/", text: "📚 Multi-stage Builds" }
            },
            {
                q: "What does 'docker exec -it container bash' do?",
                options: ["Starts a new container and runs bash inside it", "Prints the container's configuration and state", "Opens an interactive shell in a running container", "Runs the build steps defined in the Dockerfile"],
                correct: 2,
                explanation: "'exec' runs a command in a running container. '-i' keeps stdin open, '-t' allocates a TTY. Essential for debugging running containers.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/exec/", text: "📚 Docker exec Docs" }
            },
            {
                q: "What's a Docker network used for?",
                options: ["Sharing CPU allocation between containers", "Letting containers reach each other by name", "Giving containers access to the internet only", "Mounting shared storage between containers"],
                correct: 1,
                explanation: "Docker networks enable container-to-container communication. Containers on the same network can reach each other by container name as hostname.",
                learnMore: { url: "https://docs.docker.com/network/", text: "📚 Docker Networking" }
            },
        ],
        4: [
            {
                q: "What's the difference between ENTRYPOINT and CMD?",
                options: ["ENTRYPOINT is fixed; CMD supplies default arguments", "CMD runs first, then ENTRYPOINT receives its output", "ENTRYPOINT is optional; CMD is always required", "They are interchangeable and behave identically"],
                correct: 0,
                explanation: "ENTRYPOINT defines the executable. CMD provides default arguments that can be overridden. Best practice: ENTRYPOINT for the command, CMD for default args.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact", text: "📚 CMD vs ENTRYPOINT" }
            },
            {
                q: "What does 'docker system prune' do?",
                options: ["Restarts the Docker daemon and its containers", "Removes unused containers, images and networks", "Prints disk usage for images and containers", "Updates Docker to the latest available version"],
                correct: 1,
                explanation: "'prune' removes unused resources. Add '-a' to also remove unused images (not just dangling). Add '--volumes' to include volumes. Reclaims disk space.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/system_prune/", text: "📚 Docker Prune Docs" }
            },
            {
                q: "Why should you use specific image tags instead of 'latest'?",
                options: ["Tagged images download faster from the registry", "Specific tags produce measurably smaller images", "Builds stay reproducible and change only on purpose", "The latest tag is rejected by most registries"],
                correct: 2,
                explanation: "'latest' is mutable - it changes when new versions release. Specific tags (e.g., 'node:18.17.0') ensure reproducible builds and prevent surprise breakages.",
                learnMore: { url: "https://docs.docker.com/develop/dev-best-practices/", text: "📚 Docker Best Practices" }
            },
            {
                q: "What's the purpose of a health check in Docker?",
                options: ["It checks that the host has enough disk space", "It tells the runtime whether the app is working", "It verifies that the network bridge is still up", "It benchmarks the container's CPU allocation"],
                correct: 1,
                explanation: "HEALTHCHECK tests if the application inside is working (not just if the process is running). Docker marks unhealthy containers, and orchestrators can restart them.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#healthcheck", text: "📚 Docker HEALTHCHECK" }
            },
        ],
        5: [
            {
                q: "When would you use '--init' flag with docker run?",
                options: ["To run first-time setup before the entrypoint", "To reap zombie processes and forward signals", "To initialise the container's storage volumes", "To attach an interactive terminal to the shell"],
                correct: 1,
                explanation: "'--init' adds a tiny init process (tini) as PID 1. It properly forwards signals and reaps zombie processes. Important when your app spawns child processes.",
                learnMore: { url: "https://docs.docker.com/engine/reference/run/#specify-an-init-process", text: "📚 Docker Init Process" }
            },
            {
                q: "What's the security risk of running containers as root?",
                options: ["An escape from the container reaches host root", "The container consumes more memory than needed", "Networking between containers becomes unstable", "Image builds run measurably slower as a result"],
                correct: 0,
                explanation: "Container root = host root (same UID 0). A container escape vulnerability could give attacker host root access. Always use non-root users in production.",
                learnMore: { url: "https://docs.docker.com/engine/security/rootless/", text: "📚 Rootless Docker" }
            },
            {
                q: "How do you limit container memory usage?",
                options: ["By choosing a smaller base image to start from", "By editing configuration files in the container", "With the --memory flag or a compose limit", "Memory cannot be limited, only CPU can be"],
                correct: 2,
                explanation: "'docker run --memory=512m' or 'mem_limit: 512m' in compose. Without limits, one container can consume all host memory, affecting others.",
                learnMore: { url: "https://docs.docker.com/config/containers/resource_constraints/", text: "📚 Resource Constraints" }
            },
            {
                q: "What's the difference between bind mounts and volumes?",
                options: ["Bind mounts are Docker-managed; volumes map host paths", "Volumes are Docker-managed; bind mounts map host paths", "Bind mounts are always faster than named volumes", "Volumes are deprecated in favour of bind mounts"],
                correct: 1,
                explanation: "Volumes: Docker manages storage location, portable, better for production. Bind mounts: you specify exact host path, good for development (live code reload).",
                learnMore: { url: "https://docs.docker.com/storage/", text: "📚 Docker Storage" }
            },
            {
                q: "Why use a non-root user in Dockerfile?",
                options: ["Images built this way are noticeably smaller", "Least privilege: a breach gains less power", "The container starts and executes faster", "Docker refuses to run containers as root"],
                correct: 1,
                explanation: "Non-root users limit damage from container escapes. Add 'USER appuser' after creating the user. Many base images provide non-root users (e.g., 'node' user in node images).",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user", text: "📚 Dockerfile USER" }
            },
        ]
    },

    'l-k8s-concepts': {
        1: [
            {
                q: "What is a Pod in Kubernetes?",
                options: ["A single worker machine that runs the workloads", "A logical grouping used to separate resources", "A group of machines managed as a single unit", "The smallest deployable unit, holding containers"],
                correct: 3,
                explanation: "A Pod is the atomic unit in K8s - one or more containers sharing network/storage. Containers in a pod share localhost and can communicate via IPC.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/pods/", text: "📚 K8s Pod Docs" }
            },
            {
                q: "What's the role of a Deployment?",
                options: ["It manages pod replicas and rolling updates", "It routes external traffic to healthy pods", "It schedules pods onto suitable worker nodes", "It stores configuration data for the cluster"],
                correct: 0,
                explanation: "Deployments manage ReplicaSets, which manage Pods. They handle rolling updates, rollbacks, and scaling. Most common way to run stateless apps.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/", text: "📚 K8s Deployments" }
            },
            {
                q: "What does a Service do in Kubernetes?",
                options: ["It runs one-off jobs to completion on a node", "It gives a stable network endpoint for pods", "It stores credentials for the workloads to use", "It provisions persistent storage for a pod"],
                correct: 1,
                explanation: "Services provide stable IP/DNS for pods (which have ephemeral IPs). Types: ClusterIP (internal), NodePort, LoadBalancer (external).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/service/", text: "📚 K8s Services" }
            },
        ],
        2: [
            {
                q: "What's the difference between a Deployment and a StatefulSet?",
                options: ["Deployment keeps stable pod identity and order", "StatefulSet is deprecated in current versions", "StatefulSet keeps stable pod identity and order", "Deployment is the newer of the two resources"],
                correct: 2,
                explanation: "StatefulSets give pods stable identities (pod-0, pod-1) and ordered deployment/scaling. Use for databases, Kafka, etc. Deployments are for stateless apps.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/", text: "📚 K8s StatefulSets" }
            },
            {
                q: "What is a namespace used for?",
                options: ["Resolving service names to cluster IP addresses", "Separating resources logically within a cluster", "Allocating persistent storage to a workload", "Enforcing CPU limits across the whole cluster"],
                correct: 1,
                explanation: "Namespaces partition cluster resources for multiple teams/projects. Resources can have same name in different namespaces. Apply quotas per namespace.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/", text: "📚 K8s Namespaces" }
            },
            {
                q: "What's a ReplicaSet?",
                options: ["It keeps the requested number of pods running", "It balances incoming traffic across the pods", "It takes periodic backups of the cluster state", "It stores replicated data across the nodes"],
                correct: 0,
                explanation: "ReplicaSet maintains desired number of pod replicas. If a pod dies, it creates a new one. Usually managed by Deployments, not created directly.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/", text: "📚 K8s ReplicaSets" }
            },
        ],
        3: [
            {
                q: "When is Kubernetes appropriate vs simpler solutions?",
                options: ["A single static website with steady traffic", "Development environments and nothing else", "Many services needing scaling and self-healing", "Any workload at all, regardless of its size"],
                correct: 2,
                explanation: "K8s adds complexity. It shines with microservices, auto-scaling needs, multi-team environments. For simple apps, consider Docker Compose or PaaS.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/", text: "📚 What is K8s?" }
            },
            {
                q: "What does kubectl apply -f do?",
                options: ["Creates or updates resources from a YAML file", "Deletes the resources listed in a YAML file", "Streams logs from the pods named in a file", "Opens a shell session inside a running pod"],
                correct: 0,
                explanation: "'apply' creates resources if they don't exist, updates if they do (declarative). 'create' only creates (imperative). Apply is preferred for GitOps.",
                learnMore: { url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/", text: "📚 kubectl Cheatsheet" }
            },
            {
                q: "What's the difference between a Job and a CronJob?",
                options: ["A Job runs on a schedule; a CronJob runs once", "A Job runs once; a CronJob runs on a schedule", "A CronJob is deprecated in current releases", "They are the same object under different names"],
                correct: 1,
                explanation: "Jobs run pods to completion (batch tasks, migrations). CronJobs create Jobs on a schedule (like cron). Both ensure tasks complete successfully.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/job/", text: "📚 K8s Jobs" }
            },
            {
                q: "What does a PersistentVolumeClaim do?",
                options: ["It reserves CPU capacity for a set of pods", "It claims a network address for a workload", "It requests storage of a given size and class", "It requests additional memory for a pod"],
                correct: 2,
                explanation: "PVC requests storage (size, access mode). K8s matches it to a PersistentVolume. Abstracts storage details from pods - pods just reference the PVC.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/", text: "📚 K8s Storage" }
            },
        ],
        4: [
            {
                q: "What's the purpose of a ConfigMap?",
                options: ["Holding credentials and other secret values", "Mapping persistent storage volumes to pods", "Holding non-sensitive configuration for pods", "Configuring networking between namespaces"],
                correct: 2,
                explanation: "ConfigMaps store config (env vars, config files) separately from images. Mount as files or inject as env vars. Enables config changes without rebuilding images.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/configuration/configmap/", text: "📚 K8s ConfigMaps" }
            },
            {
                q: "What's the difference between ConfigMap and Secret?",
                options: ["Secrets are encrypted by default wherever stored", "ConfigMaps are encrypted while Secrets are plaintext", "Secrets hold sensitive values, with tighter controls", "They are the same object under two different names"],
                correct: 2,
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
                options: ["Manage databases", "Balance load", "Run a pod on every node", "Schedule jobs"],
                correct: 2,
                explanation: "DaemonSets ensure one pod per node (or per matching node). Use for node-level concerns: log collectors, monitoring agents, network plugins.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/", text: "📚 K8s DaemonSets" }
            },
        ],
        5: [
            {
                q: "How do Horizontal Pod Autoscalers work?",
                options: ["They add or remove nodes as demand changes", "They add or remove pods based on metrics", "They raise the CPU and memory of each pod", "They require an operator to scale manually"],
                correct: 1,
                explanation: "HPA monitors metrics (via metrics-server) and adjusts replica count. Configure min/max replicas and target utilization. Works with Deployments/StatefulSets.",
                learnMore: { url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/", text: "📚 K8s HPA" }
            },
            {
                q: "What's the difference between readiness and liveness probes?",
                options: ["Liveness gates traffic; readiness triggers restarts", "Readiness gates traffic; liveness triggers restarts", "Readiness restarts a pod that stops responding", "They are two names for the same health check"],
                correct: 1,
                explanation: "Readiness: 'Can I receive traffic?' (removes from Service endpoints if failing). Liveness: 'Am I alive?' (restarts container if failing). Use both!",
                learnMore: { url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/", text: "📚 K8s Probes" }
            },
            {
                q: "What's the difference between a resource request and a limit?",
                options: ["Request drives scheduling; limit caps usage", "Limit drives scheduling; request caps usage", "Request covers CPU while limit covers memory", "They are two names for the same setting"],
                correct: 0,
                explanation: "The scheduler places a pod using its requests, while the limit is what the runtime enforces once it runs. Exceeding a memory limit gets the container killed; exceeding a CPU limit throttles it instead.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/", text: "📚 Requests and limits" }
            },
            {
                q: "How does pod scheduling work?",
                options: ["The first node with any free capacity is used", "A node is chosen at random from the cluster", "The scheduler picks a node that fits the pod", "The user names the node in every pod spec"],
                correct: 2,
                explanation: "kube-scheduler filters nodes (resource requirements, taints, affinity) then scores remaining nodes. Highest score wins. Can be customized or replaced.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/", text: "📚 K8s Scheduler" }
            },
            {
                q: "What's pod affinity/anti-affinity?",
                options: ["Rules binding a pod to specific CPU cores", "Rules placing pods near or away from other pods", "Rules controlling which volumes a pod may use", "Rules assigning network policies to a pod"],
                correct: 1,
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
                options: ["The total sum of all elements", "The number of items in a sequence", "The first element of a sequence", "The last element of a sequence"],
                correct: 1,
                explanation: "'len()' returns the number of items in a container (list, string, dict, etc.). It's a built-in function, not a method.",
                learnMore: { url: "https://docs.python.org/3/library/functions.html#len", text: "📚 Python len()" }
            },
            {
                q: "How do you create a list in Python?",
                options: ["(1, 2, 3)", "<1, 2, 3>", "[1, 2, 3]", "{1, 2, 3}"],
                correct: 2,
                explanation: "Square brackets [] create lists. Curly braces {} create sets or dicts. Parentheses () create tuples. Lists are mutable ordered collections.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists", text: "📚 Python Lists" }
            },
        ],
        2: [
            {
                q: "What's the difference between a list and a tuple?",
                options: ["Lists use more memory than tuples always", "Tuples can only hold two elements", "Lists are ordered, tuples are unordered", "Lists are mutable, tuples are immutable"],
                correct: 3,
                explanation: "Lists can be modified after creation (mutable), tuples cannot (immutable). Use tuples for fixed data, lists for dynamic collections.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences", text: "📚 Tuples vs Lists" }
            },
            {
                q: "How do you handle exceptions in Python?",
                options: ["try/except block", "handle/error", "catch/throw", "error/rescue"],
                correct: 0,
                explanation: "Python uses try/except for exception handling. You can catch specific exceptions and optionally use 'finally' for cleanup code.",
                learnMore: { url: "https://docs.python.org/3/tutorial/errors.html", text: "📚 Python Exceptions" }
            },
            {
                q: "What does 'import os' do?",
                options: ["Makes os module available", "Installs os package", "Opens operating system", "Creates os object"],
                correct: 0,
                explanation: "'import' loads a module into your program's namespace. The 'os' module provides OS-level operations like file paths and environment variables.",
                learnMore: { url: "https://docs.python.org/3/library/os.html", text: "📚 Python os Module" }
            },
        ],
        3: [
            {
                q: "What is a list comprehension?",
                options: ["Documentation for list methods", "Comparison between two lists", "[x for x in items] - concise list creation", "A detailed list description document"],
                correct: 2,
                explanation: "List comprehensions are concise syntax for creating lists: [expr for item in iterable if condition]. More readable and often faster than loops.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions", text: "📚 List Comprehensions" }
            },
            {
                q: "What's a virtual environment for?",
                options: ["Making Python run faster overall", "Testing code in isolation only", "Isolated Python dependencies per project", "Running Python in a virtual machine"],
                correct: 2,
                explanation: "Virtual environments isolate project dependencies. Each project can have its own package versions. Create with 'python -m venv myenv', activate before use.",
                learnMore: { url: "https://docs.python.org/3/tutorial/venv.html", text: "📚 Python venv Tutorial" }
            },
            {
                q: "What does 'if __name__ == \"__main__\":' do?",
                options: ["Checks the current file name", "Defines the main function", "Only runs code when executed directly", "Imports the main module"],
                correct: 2,
                explanation: "__name__ is '__main__' when the script is run directly, but the module name when imported. This pattern prevents code from running on import.",
                learnMore: { url: "https://docs.python.org/3/library/__main__.html", text: "📚 Python __main__" }
            },
            {
                q: "What's a dictionary in Python?",
                options: ["Word definitions store", "Key-value data structure", "Function collection type", "Ordered list of items"],
                correct: 1,
                explanation: "Dicts map keys to values with O(1) average lookup. Keys must be hashable (immutable). Since Python 3.7, dicts maintain insertion order.",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries", text: "📚 Python Dictionaries" }
            },
            {
                q: "What does this list comprehension produce?",
                code: "result = [x**2 for x in range(5) if x % 2 == 0]",
                options: ["[1, 9, 25]", "[0, 1, 4, 9, 16]", "[4, 16]", "[0, 4, 16]"],
                correct: 3,
                explanation: "range(5) gives 0,1,2,3,4. The filter 'if x % 2 == 0' keeps even numbers: 0,2,4. Squaring gives [0, 4, 16].",
                learnMore: { url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions", text: "📚 List Comprehensions" }
            },
        ],
        4: [
            {
                q: "What are *args and **kwargs?",
                options: ["Global arguments shared by modules", "Variable positional and keyword arguments", "Required arguments for all functions", "Pointer arguments to memory address"],
                correct: 1,
                explanation: "*args collects extra positional args as tuple. **kwargs collects extra keyword args as dict. Names are convention - * and ** are the operators.",
                learnMore: { url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists", text: "📚 *args and **kwargs" }
            },
            {
                q: "What's a decorator in Python?",
                options: ["Function that modifies another function", "Comment type for documentation", "Class attribute for styling output", "Import statement for packages"],
                correct: 0,
                explanation: "Decorators wrap functions to add behavior. @decorator is syntactic sugar for func = decorator(func). Common uses: logging, caching, auth checks.",
                learnMore: { url: "https://realpython.com/primer-on-python-decorators/", text: "📚 Decorators Guide" }
            },
            {
                q: "What's the difference between a generator and a list?",
                options: ["Generator yields items lazily, uses less memory", "Generators store all items in memory upfront", "Generators can be indexed, lists cannot", "Lists can only iterate once, generators multiple times"],
                correct: 0,
                explanation: "Generators produce values on-demand with 'yield'. Memory efficient for large sequences. Can only iterate once. Use (x for x in items) for generator expressions.",
                learnMore: { url: "https://docs.python.org/3/howto/functional.html#generators", text: "📚 Python Generators" }
            },
            {
                q: "What does 'with open()' do differently than just 'open()'?",
                options: ["Automatically closes file, handles exceptions", "Provides buffered reading for better performance", "Opens file in binary mode by default", "Allows multiple files to be opened at once"],
                correct: 0,
                explanation: "'with' is a context manager that ensures cleanup (file.close()) even if exceptions occur. Always use 'with' for files, locks, connections.",
                learnMore: { url: "https://docs.python.org/3/reference/compound_stmts.html#with", text: "📚 Context Managers" }
            },
            {
                q: "What will this function return for get_data(1, 2, x=3, y=4)?",
                code: "def get_data(*args, **kwargs):\n    return len(args), len(kwargs)",
                options: ["(0, 4)", "(2, 2)", "(4, 0)", "(1, 3)"],
                correct: 1,
                explanation: "1 and 2 are positional args captured by *args (length 2). x=3 and y=4 are keyword args captured by **kwargs (length 2). Result: (2, 2).",
                learnMore: { url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists", text: "📚 *args and **kwargs" }
            },
        ],
        5: [
            {
                q: "What does a context manager guarantee?",
                options: ["Cleanup runs even when the block raises", "The block executes atomically as one unit", "The block runs in its own separate namespace", "Exceptions inside the block are suppressed"],
                correct: 0,
                explanation: "__enter__ and __exit__ bracket the block and __exit__ runs whether the body completed or raised — which is why `with open(...)` beats a manual close(). Returning True from __exit__ would swallow the exception."
            },
            {
                q: "How do you achieve true parallelism in Python?",
                options: ["Using generator-based concurrency", "Multiprocessing or free-threaded mode", "Using async/await coroutines only", "Using the threading module for it"],
                correct: 1,
                explanation: "multiprocessing spawns separate processes (each with own GIL). Free-threaded Python (3.13+) disables the GIL entirely. Threading helps I/O-bound tasks. async/await is single-threaded concurrency for I/O.",
                learnMore: { url: "https://docs.python.org/3/library/multiprocessing.html", text: "📚 multiprocessing" }
            },
            {
                q: "What's a metaclass in Python?",
                options: ["A base class for all inheritance", "An abstract class defining interfaces", "A static class with no instances", "A class of a class, controls creation"],
                correct: 3,
                explanation: "Metaclasses are 'classes of classes' - they control how classes are created. type() is the default metaclass. Rarely needed, but powerful for frameworks.",
                learnMore: { url: "https://realpython.com/python-metaclasses/", text: "📚 Python Metaclasses" }
            },
            {
                q: "What's the difference between @staticmethod and @classmethod?",
                options: ["staticmethod can reach the instance attributes", "staticmethod gets nothing; classmethod gets cls", "classmethod exists only for private methods", "classmethod may only be called on instances"],
                correct: 1,
                explanation: "@staticmethod: no automatic first argument (like plain function). @classmethod: receives class as first arg (cls), useful for alternative constructors.",
                learnMore: { url: "https://docs.python.org/3/library/functions.html#classmethod", text: "📚 classmethod/staticmethod" }
            },
            {
                q: "What are __slots__ used for?",
                options: ["Scheduling async execution time slots", "Controlling module import slot order", "Memory optimization by restricting attrs", "Defining fixed method dispatch slots"],
                correct: 2,
                explanation: "__slots__ replaces instance __dict__ with fixed-size array. Saves memory for many instances. Prevents adding arbitrary attributes. Use for data classes with many instances.",
                learnMore: { url: "https://docs.python.org/3/reference/datamodel.html#slots", text: "📚 Python __slots__" }
            },
        ]
    },

    'l-django': {
        1: [
            {
                q: "What is Django?",
                options: ["Python package manager and build tool", "Python web framework with batteries included", "Standalone Python ORM for databases", "Python template engine for HTML generation"],
                correct: 1,
                explanation: "Django is a high-level Python web framework with 'batteries included': ORM, admin, auth, forms. Follows MTV (Model-Template-View) pattern.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/intro/overview/", text: "📚 Django Overview" }
            },
            {
                q: "What does 'manage.py runserver' do?",
                options: ["Installs packages", "Deploys to production", "Starts development server", "Creates database"],
                correct: 2,
                explanation: "runserver starts a lightweight development server with auto-reload. Never use in production - use gunicorn/uwsgi behind nginx instead.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/django-admin/#runserver", text: "📚 Django runserver" }
            },
            {
                q: "What is a Django model?",
                options: ["Function that handles HTTP requests", "Configuration for URL routing and dispatch", "File containing HTML with template tags", "Python class representing a database table"],
                correct: 3,
                explanation: "Models define database schema as Python classes. Each model class = one table. Attributes = columns. Django generates SQL from models automatically.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/models/", text: "📚 Django Models" }
            },
        ],
        2: [
            {
                q: "What does 'makemigrations' do?",
                options: ["Applies pending migrations to the database", "Creates migration files from model changes", "Shows current migration status for apps", "Removes old and conflicting migrations"],
                correct: 1,
                explanation: "makemigrations detects model changes and creates migration files (Python scripts). migrate actually applies them. Always makemigrations before migrate.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/migrations/", text: "📚 Django Migrations" }
            },
            {
                q: "What is the Django ORM?",
                options: ["An object-relational mapper for queries", "An output render module for templates", "An online resource manager for assets", "An object registry model for settings"],
                correct: 0,
                explanation: "The ORM translates Python objects to database rows and vice versa. Write Python, not SQL. Supports multiple databases with same code.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/queries/", text: "📚 Django ORM Queries" }
            },
            {
                q: "How do you query all objects of a model?",
                options: ["Model.query.all()", "Model.all()", "get_all(Model)", "Model.objects.all()"],
                correct: 3,
                explanation: "'objects' is the default Manager. all() returns a QuerySet of all rows. QuerySets are lazy - database isn't hit until you iterate or evaluate.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/models/querysets/", text: "📚 QuerySet API" }
            },
        ],
        3: [
            {
                q: "What's the purpose of Django admin?",
                options: ["Built-in automated testing framework", "Auto-generated CRUD interface for models", "Command line management utility tool", "Server deployment configuration tool"],
                correct: 1,
                explanation: "Django admin auto-generates an admin interface from your models. Great for content management and debugging. Highly customizable with ModelAdmin classes.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/contrib/admin/", text: "📚 Django Admin" }
            },
            {
                q: "What does a Django view do?",
                options: ["Handles HTTP request and returns response", "Maps URL patterns to handlers", "Renders HTML with dynamic content", "Defines database schema as Python class"],
                correct: 0,
                explanation: "Views receive HTTP requests, process data (query DB, validate forms), and return HTTP responses. The 'controller' in MVC terms.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/http/views/", text: "📚 Django Views" }
            },
            {
                q: "What's the difference between FBV and CBV?",
                options: ["Fast rendering vs basic rendering views", "Frontend views vs backend views split", "File-based vs class-based views", "Function-based vs class-based views"],
                correct: 3,
                explanation: "FBVs are simple functions. CBVs use classes with inheritance for reusability (ListView, CreateView, etc.). CBVs reduce boilerplate for common patterns.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/class-based-views/", text: "📚 Class-based Views" }
            },
            {
                q: "What does 'migrate' command do?",
                options: ["Generates new migration from models", "Lists all pending migration files", "Applies migration files to database", "Reverts previously applied migrations"],
                correct: 2,
                explanation: "'migrate' applies pending migrations to the database, creating/altering tables. Use 'migrate app_name 0001' to migrate to specific version.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/django-admin/#migrate", text: "📚 Django migrate" }
            },
        ],
        4: [
            {
                q: "What's the difference between ForeignKey and ManyToManyField?",
                options: ["FK requires through table, M2M doesn't", "FK is many-to-one, M2M is many-to-many relationship", "M2M can only link to same model type", "FK is for optional fields, M2M for required"],
                correct: 1,
                explanation: "ForeignKey: one object links to one (many-to-one). ManyToManyField: many objects link to many (creates join table automatically).",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/examples/many_to_many/", text: "📚 M2M Relationships" }
            },
            {
                q: "What are Django signals used for?",
                options: ["Handle asynchronous background tasks", "Send real-time updates to frontend clients", "Notify when certain actions occur in framework", "Implement inter-process communication"],
                correct: 2,
                explanation: "Signals allow decoupled apps to react to events (pre_save, post_save, etc.). Use sparingly - they can make code hard to follow. Consider overriding save() instead.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/signals/", text: "📚 Django Signals" }
            },
            {
                q: "What's middleware in Django?",
                options: ["Background task queue for async operations", "Caching layer for template rendering", "ORM layer that connects models to database", "Hooks into request/response processing globally"],
                correct: 3,
                explanation: "Middleware processes requests/responses globally. Runs before views (request) and after (response). Used for: auth, sessions, CSRF, compression.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/http/middleware/", text: "📚 Django Middleware" }
            },
            {
                q: "How do you create a custom management command?",
                options: ["Create file in management/commands/ dir", "Register it through the admin interface", "Add handler functions inside manage.py", "Use management command decorator syntax"],
                correct: 0,
                explanation: "Create app/management/commands/mycommand.py with a Command class inheriting BaseCommand. Implement handle() method. Run with 'manage.py mycommand'.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/howto/custom-management-commands/", text: "📚 Custom Commands" }
            },
        ],
        5: [
            {
                q: "How do you optimize N+1 query problems in Django?",
                options: ["Replace ORM queries with raw SQL calls", "Increase database connection timeout value", "Add composite indexes on related tables", "Use select_related and prefetch_related"],
                correct: 3,
                explanation: "N+1: fetching related objects in a loop causes N extra queries. select_related (JOIN) or prefetch_related (separate query, then Python join) solve this.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/models/querysets/#select-related", text: "📚 select_related" }
            },
            {
                q: "What's the difference between select_related and prefetch_related?",
                options: ["prefetch_related joins; select_related queries again", "select_related covers reverse foreign keys too", "select_related joins; prefetch_related queries again", "select_related is for M2M, prefetch_related for FK"],
                correct: 2,
                explanation: "select_related: SQL JOIN, good for ForeignKey/OneToOne (single-valued). prefetch_related: separate query + Python merge, required for M2M/reverse FK.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/ref/models/querysets/#prefetch-related", text: "📚 prefetch_related" }
            },
            {
                q: "How do you implement custom model managers?",
                options: ["Create class extending models.Manager", "Add manager decorators to model class", "Configure manager in model Meta options", "Define manager settings in settings.py"],
                correct: 0,
                explanation: "Custom managers add reusable query methods. Inherit from Manager, add methods returning QuerySets. Assign to model: objects = MyManager().",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/managers/", text: "📚 Custom Managers" }
            },
            {
                q: "What's Django REST Framework used for?",
                options: ["Testing framework", "REST API client", "Building APIs with Django", "Database REST interface"],
                correct: 2,
                explanation: "DRF adds powerful API tools: serializers, viewsets, routers, authentication, throttling, browsable API. The standard for Django APIs.",
                learnMore: { url: "https://www.django-rest-framework.org/", text: "📚 DRF Documentation" }
            },
            {
                q: "How do you handle database transactions in Django?",
                options: ["Manually call connection.commit() each time", "transaction.atomic() decorator or context mgr", "Django has no built-in transaction support", "Only auto-commit mode is available in Django"],
                correct: 1,
                explanation: "atomic() ensures all-or-nothing: either all operations commit or all rollback on error. Use as decorator or 'with transaction.atomic():' block.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/db/transactions/", text: "📚 DB Transactions" }
            },
        ]
    },

    'l-react': {
        1: [
            {
                q: "What is a React component?",
                options: ["A module that handles browser routing", "Reusable UI building block that returns JSX", "A function that fetches data from APIs", "A hook that manages application state"],
                correct: 1,
                explanation: "Components are independent, reusable pieces of UI. They accept props and return React elements (JSX). Can be functions or classes (functions preferred).",
                learnMore: { url: "https://react.dev/learn/your-first-component", text: "📚 React Components" }
            },
            {
                q: "What is JSX?",
                options: ["A way to embed CSS directly in JavaScript", "A separate templating language compiled at runtime", "React's replacement for HTML in the browser", "JavaScript syntax extension for writing HTML-like code"],
                correct: 3,
                explanation: "JSX lets you write HTML-like markup in JavaScript. It's compiled to React.createElement() calls. Not required but makes code more readable.",
                learnMore: { url: "https://react.dev/learn/writing-markup-with-jsx", text: "📚 JSX Guide" }
            },
            {
                q: "How do you pass data to a child component?",
                options: ["Using props", "Using event emitters", "Using global variables", "Using useState in the child"],
                correct: 0,
                explanation: "Props (properties) pass data from parent to child. They're read-only in the child. Like function arguments for components.",
                learnMore: { url: "https://react.dev/learn/passing-props-to-a-component", text: "📚 Passing Props" }
            },
        ],
        2: [
            {
                q: "What is useState hook for?",
                options: ["Subscribing to external data sources", "Managing state that triggers re-renders", "Caching expensive computed values", "Accessing DOM elements directly by ref"],
                correct: 1,
                explanation: "useState adds state to functional components. Returns [value, setValue]. When state changes, component re-renders. Initial value passed as argument.",
                learnMore: { url: "https://react.dev/reference/react/useState", text: "📚 useState Hook" }
            },
            {
                q: "When does useEffect run?",
                options: ["Only during the initial mount", "After render, when dependencies change", "Before the component renders", "Synchronously during render"],
                correct: 1,
                explanation: "useEffect runs after render. Dependencies array controls when: [] = mount only, [dep] = when dep changes, no array = every render. Return cleanup function.",
                learnMore: { url: "https://react.dev/reference/react/useEffect", text: "📚 useEffect Hook" }
            },
            {
                q: "What causes a React component to re-render?",
                options: ["Any variable in the component changes", "The component's functions are called", "A setTimeout callback fires", "State or props change"],
                correct: 3,
                explanation: "Components re-render when: their state changes, their props change, or their parent re-renders. React batches updates for performance.",
                learnMore: { url: "https://react.dev/learn/render-and-commit", text: "📚 Render & Commit" }
            },
        ],
        3: [
            {
                q: "What's the purpose of the key prop in lists?",
                options: ["Required for list items to render", "Enables CSS animations on list items", "Helps React track which items changed", "Improves accessibility for screen readers"],
                correct: 2,
                explanation: "Keys help React identify which items changed/added/removed. Use stable, unique IDs (not array index). Without keys, React re-renders entire list.",
                learnMore: { url: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key", text: "📚 List Keys" }
            },
            {
                q: "What is prop drilling?",
                options: ["Setting default values for props", "Validating props with PropTypes", "Destructuring props in function parameters", "Passing props through many component levels"],
                correct: 3,
                explanation: "Prop drilling: passing props through intermediate components that don't use them. Makes code hard to maintain. Context or state management libraries solve this.",
                learnMore: { url: "https://react.dev/learn/passing-data-deeply-with-context", text: "📚 Context API" }
            },
            {
                q: "What does useContext solve?",
                options: ["Handles side effects like data fetching", "Memoizes expensive calculations", "Avoids prop drilling by sharing state globally", "Manages local component state"],
                correct: 2,
                explanation: "Context provides a way to pass data through the component tree without prop drilling. Create with createContext(), provide value at top, consume with useContext.",
                learnMore: { url: "https://react.dev/reference/react/useContext", text: "📚 useContext Hook" }
            },
            {
                q: "What's the difference between state and props?",
                options: ["Props trigger re-renders, state doesn't", "State is internal and mutable, props come from parent", "State is for strings, props for objects", "State is shared between components, props are local"],
                correct: 1,
                explanation: "Props: external, passed from parent, read-only. State: internal, managed by component, triggers re-render when changed. Both cause re-renders.",
                learnMore: { url: "https://react.dev/learn/state-a-components-memory", text: "📚 State vs Props" }
            },
        ],
        4: [
            {
                q: "When would you use useCallback?",
                options: ["To keep a function identity stable across renders", "To run a callback after a state update commits", "To handle asynchronous work inside an effect", "To create event handlers for DOM elements"],
                correct: 0,
                explanation: "useCallback memoizes functions so they don't change reference on every render. Useful when passing callbacks to memoized children (React.memo).",
                learnMore: { url: "https://react.dev/reference/react/useCallback", text: "📚 useCallback Hook" }
            },
            {
                q: "What's the difference between controlled and uncontrolled components?",
                options: ["Controlled are functional, uncontrolled are class-based", "Controlled components use hooks, uncontrolled use classes", "Controlled use refs, uncontrolled use state", "Controlled: React manages state; Uncontrolled: DOM manages state"],
                correct: 3,
                explanation: "Controlled: form value in React state, onChange updates it. Uncontrolled: DOM holds the value, use ref to read it. Controlled is usually preferred.",
                learnMore: { url: "https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components", text: "📚 Controlled Components" }
            },
            {
                q: "What does useMemo do?",
                options: ["Stores values that persist without causing re-renders", "Caches computed values between re-renders", "Creates a memoized version of a component", "Memoizes callback functions for child components"],
                correct: 1,
                explanation: "useMemo caches expensive calculations between re-renders. Only recalculates when dependencies change. Don't overuse - has its own cost.",
                learnMore: { url: "https://react.dev/reference/react/useMemo", text: "📚 useMemo Hook" }
            },
            {
                q: "What's useRef used for?",
                options: ["Referencing external modules at runtime", "Holding a value across renders, or a DOM node", "Creating references to a child's internal state", "Storing previous props purely for comparison"],
                correct: 1,
                explanation: "useRef returns mutable object persisting across renders. .current doesn't trigger re-render when changed. Used for: DOM refs, storing previous values, timers.",
                learnMore: { url: "https://react.dev/reference/react/useRef", text: "📚 useRef Hook" }
            },
        ],
        5: [
            {
                q: "How does React's reconciliation algorithm work?",
                options: ["It batches updates until the browser is idle", "It diffs in background threads via Web Workers", "It compares element trees and updates what changed", "It replaces the whole DOM on every state change"],
                correct: 2,
                explanation: "React compares old and new virtual DOM trees (diffing). Uses heuristics: different types = replace subtree, same type = update props, keys help list diffing.",
                learnMore: { url: "https://react.dev/learn/preserving-and-resetting-state", text: "📚 Reconciliation" }
            },
            {
                q: "What's React.lazy used for?",
                options: ["Delaying state updates for performance", "Creating components with delayed initialization", "Code splitting to load components on demand", "Deferring component rendering until visible"],
                correct: 2,
                explanation: "React.lazy enables code splitting - load components only when needed. Use with Suspense for loading states. Reduces initial bundle size.",
                learnMore: { url: "https://react.dev/reference/react/lazy", text: "📚 React.lazy" }
            },
            {
                q: "What are React error boundaries?",
                options: ["Components that catch JS errors in child tree", "Try-catch wrappers for async operations", "Middleware for handling API errors", "Validation layers for props and state"],
                correct: 0,
                explanation: "Error boundaries catch JavaScript errors in child component tree, log them, and display fallback UI. Must be class components with componentDidCatch/getDerivedStateFromError.",
                learnMore: { url: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary", text: "📚 Error Boundaries" }
            },
            {
                q: "How does useReducer differ from useState?",
                options: ["It persists state to localStorage automatically", "It provides built-in undo and redo behaviour", "It suits complex state driven by dispatched actions", "It shares state between components without context"],
                correct: 2,
                explanation: "useReducer is like useState but uses reducer function (state, action) => newState. Better for complex state logic, multiple sub-values, or when next state depends on previous.",
                learnMore: { url: "https://react.dev/reference/react/useReducer", text: "📚 useReducer Hook" }
            },
            {
                q: "What's the purpose of React.memo?",
                options: ["Store computed values across renders", "Memoize event handlers automatically", "Cache component instances in memory", "Skip re-renders when props haven't changed"],
                correct: 3,
                explanation: "React.memo is a HOC that memoizes component output. Skips re-render if props haven't changed (shallow comparison). Note: React 19's React Compiler can auto-memoize, reducing the need for manual React.memo.",
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
                options: ["A Linux-based operating system distro", "A cloud resource management platform", "A distributed NoSQL database engine", "A server-side programming language"],
                correct: 1,
                explanation: "Waldur is an open-source cloud resource management platform for organizations to manage cloud infrastructure, track usage, and handle billing across multiple providers.",
                learnMore: { url: "https://docs.waldur.com/latest/", text: "📚 Waldur Documentation" }
            },
            {
                q: "What does multi-tenancy mean in Waldur?",
                options: ["Running services on multiple servers", "Maintaining separate database per user", "Multiple organizations share the platform", "Multiple users sharing one account"],
                correct: 2,
                explanation: "Multi-tenancy allows multiple organizations (customers) to use the same Waldur instance while keeping their data isolated. Each org sees only their resources.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/staff-users/organization-management/", text: "📚 Organizations Guide" }
            },
            {
                q: "Who are the main users of Waldur?",
                options: ["Network infrastructure engineers only", "Organizations managing cloud resources", "Database administrators managing storage", "Individual software developers only"],
                correct: 1,
                explanation: "Waldur serves organizations (research institutions, universities, companies) needing to manage cloud resources across teams with proper governance and billing.",
                learnMore: { url: "https://waldur.com/", text: "📚 Waldur Homepage" }
            },
        ],
        2: [
            {
                q: "What is a Waldur marketplace?",
                options: ["A catalog of available resource offerings", "A job board for hiring cloud engineers", "An app store for installing extensions", "An online store for purchasing hardware"],
                correct: 0,
                explanation: "The marketplace is a catalog where users browse and order resources (VMs, storage, services). Providers publish offerings, customers order them through the marketplace.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/marketplace/", text: "📚 Marketplace Guide" }
            },
            {
                q: "What is a resource in Waldur context?",
                options: ["Configuration template for deployments", "User role and permission definition", "Billing rate and pricing structure", "Provisioned cloud asset (VM, storage, etc.)"],
                correct: 3,
                explanation: "A resource is any provisioned asset: virtual machines, volumes, networks, or services. Resources are tracked throughout their lifecycle with usage and billing data.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/resource_management/", text: "📚 Resources Guide" }
            },
            {
                q: "What is an organization (customer) in Waldur?",
                options: ["Group of resources with shared configuration", "Service provider offering cloud resources", "Top-level entity that owns projects and billing", "Collection of users with same permissions"],
                correct: 2,
                explanation: "Organization is the top-level entity representing a company/institution. It contains projects, users with roles, and handles billing. Also called 'customer' in the API.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/staff-users/organization-management/", text: "📚 Organizations" }
            },
        ],
        3: [
            {
                q: "What's the hierarchy: Organization > Project > ?",
                options: ["Resource", "Provider", "Offering", "Category"],
                correct: 0,
                explanation: "The hierarchy is Organization → Project → Resource. Organizations own projects, projects contain resources. Users are assigned to orgs/projects with specific roles.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/project-management/", text: "📚 Projects Guide" }
            },
            {
                q: "What role does a Provider play in Waldur?",
                options: ["Backend that fulfills resource requests", "System that tracks resource usage", "User with administrative permissions", "Organization that consumes cloud resources"],
                correct: 0,
                explanation: "Providers (service providers) offer resources through the marketplace. They define offerings, handle provisioning, and may be external clouds or internal infrastructure.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/site-agent/", text: "📚 Providers Guide" }
            },
            {
                q: "What is a Project in Waldur?",
                options: ["Template for provisioning similar resources", "Container for resources with its own budget/team", "Marketplace category for organizing offerings", "Backend integration with cloud provider"],
                correct: 1,
                explanation: "Projects group resources for a specific purpose, team, or budget. They have their own members, quotas, and billing. One org can have multiple projects.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/project-management/", text: "📚 Projects Guide" }
            },
            {
                q: "What is a Resource in Waldur?",
                options: ["A provisioned item created from an order", "A physical server in the provider's rack", "A document describing what may be ordered", "A budget line reserved for one project"],
                correct: 0,
                explanation: "An order placed against an offering produces a resource: the thing the user actually has, with its own state, limits and usage. Offerings describe what may be ordered; resources are what exists."
            },
        ],
        4: [
            {
                q: "How does Waldur handle resource lifecycle states?",
                options: ["Manual tracking via admin dashboard", "State machine with defined transitions", "No built-in state management system", "Simple binary on/off status toggles"],
                correct: 1,
                explanation: "Resources follow a state machine: Creating → OK → Updating/Terminating. Each state has allowed transitions. Erred states indicate problems needing attention.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/background/", text: "📚 Core Concepts" }
            },
            {
                q: "What are resource actions in Waldur?",
                options: ["Audit log entries for tracking changes", "Role-based user permission assignments", "Billing and cost calculation events", "Operations like start, stop, and resize"],
                correct: 3,
                explanation: "Actions are operations users can perform on resources (start, stop, restart, resize). Available actions depend on resource state and type. Actions create async tasks.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/resource_management/", text: "📚 Resource Actions" }
            },
            {
                q: "How does quota management work in Waldur?",
                options: ["Per-user quotas on API request rates", "Disk storage quotas on mounted volumes", "Limits on resources per org and project", "No built-in quota support in platform"],
                correct: 2,
                explanation: "Quotas limit resource consumption (CPU cores, RAM, storage, VMs) at organization or project level. Prevents overspending and ensures fair resource distribution.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/quotas/", text: "📚 Quotas Guide" }
            },
            {
                q: "What's the purpose of offering components?",
                options: ["Rendering the frontend widgets and their forms", "Configuring network routing between the nodes", "Measurable attributes such as CPU and RAM to bill", "Extending the plugin system with new modules"],
                correct: 2,
                explanation: "Components define measurable units (CPU, RAM, storage) with prices. Used for usage-based billing. Each offering can have multiple components with different pricing.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/adding-an-offering/", text: "📚 Components" }
            },
        ],
        5: [
            {
                q: "What's the plugin architecture advantage in Waldur?",
                options: ["Extensible without modifying core codebase", "Improves database query performance overall", "Reduces API response time significantly", "Simplifies the deployment pipeline setup"],
                correct: 0,
                explanation: "Plugins add support for new cloud providers, resource types, or features without changing core code. Each plugin is a Django app with defined interfaces.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/plugins/plugins/", text: "📚 Plugin Development" }
            },
            {
                q: "How does Waldur integrate with external providers?",
                options: ["Backend plugins with defined interfaces", "Direct database connections to providers", "REST calls without any abstraction layer", "Manual CSV sync on a scheduled basis"],
                correct: 0,
                explanation: "Backend plugins implement provider-specific logic (OpenStack, Azure, SLURM). They translate Waldur operations to provider APIs and sync state back.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/plugins/plugins/", text: "📚 Backend Plugins" }
            },
            {
                q: "What's the role of Waldur API?",
                options: ["Automated test runner for backend services", "RESTful interface for all platform operations", "Internal message bus between microservices", "Static documentation hosting for developers"],
                correct: 1,
                explanation: "The REST API exposes all Waldur functionality. Frontend uses it, integrations use it, and it's the primary interface. Built with Django REST Framework.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/openapi/", text: "📚 API Documentation" }
            },
            {
                q: "How does approval workflow work in Waldur?",
                options: ["Notifications are sent after order completion", "Orders can require approval before processing", "Approvals are managed through external tools", "All orders are processed automatically by default"],
                correct: 1,
                explanation: "Orders can require manager approval before execution. Configurable per offering. Enables governance - managers review before resources are provisioned.",
                learnMore: { url: "https://docs.waldur.com/latest/about/concepts/marketplace/", text: "📚 Approval Workflow" }
            },
            {
                q: "What does the marketplace add over direct backend access?",
                options: ["Ordering, approval, quota and billing in one place", "Faster provisioning than the backend can manage", "A replacement for the backend's own admin tools", "Direct SSH access to every provisioned machine"],
                correct: 0,
                explanation: "The backends already provision. What the marketplace adds is the mediation around it — a catalogue, approvals, quotas, usage and invoices — applied consistently across every provider."
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
                options: ["Ordered collection with numeric index access", "Collection mapping keys to values in pairs", "Structure connecting nodes through edges", "Hierarchical structure with parent-child nodes"],
                correct: 0,
                explanation: "Arrays store elements in contiguous memory, accessed by numeric index. O(1) access by index, but O(n) insertion/deletion in middle due to shifting.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Array_(data_structure)", text: "📚 Array Data Structure" }
            },
            {
                q: "What's the time complexity of array index access?",
                options: ["O(n)", "O(n²)", "O(1)", "O(log n)"],
                correct: 2,
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
                options: ["Fast lookup by key", "Simple iteration", "Ordered data needed", "Memory efficiency"],
                correct: 0,
                explanation: "Hash maps provide O(1) average lookup/insert/delete by key. Use when you need fast access by non-numeric keys. Arrays are better for ordered, indexed data.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Hash_table", text: "📚 Hash Table" }
            },
            {
                q: "What's a queue's ordering principle?",
                options: ["Elements accessed in randomized order", "LIFO - Last In First Out ordering", "FIFO - First In First Out ordering", "Elements ordered by assigned priority"],
                correct: 2,
                explanation: "Queue is First-In-First-Out: enqueue adds to back, dequeue removes from front. Used for: task scheduling, BFS, buffering, message queues.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)", text: "📚 Queue Data Structure" }
            },
            {
                q: "What's the main advantage of a linked list over an array?",
                options: ["Faster element access by index position", "Simpler implementation with less code", "Uses less memory per stored element", "No element shifting needed on insert"],
                correct: 3,
                explanation: "Linked lists don't require shifting elements on insert/delete - just update pointers. Note: finding the position is still O(n). Trade-off: O(n) access, more memory per element (pointers).",
                learnMore: { url: "https://en.wikipedia.org/wiki/Linked_list", text: "📚 Linked List" }
            },
        ],
        3: [
            {
                q: "In Waldur, why is org hierarchy a tree structure?",
                options: ["Flat structures are easier to manage", "Enables circular reference relationships", "Parent-child relationships with single root", "Optimized for fast query performance"],
                correct: 2,
                explanation: "Trees model hierarchies: Organization → Project → Resource. Each node has one parent (except root). No cycles allowed. Enables permission inheritance down the tree.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Tree_(data_structure)", text: "📚 Tree Structure" }
            },
            {
                q: "Why does Celery use queues?",
                options: ["Run each task immediately upon submission", "Process tasks in the order they arrived", "Execute tasks in randomized batch order", "Distribute tasks across multiple threads"],
                correct: 1,
                explanation: "Message queues decouple producers from consumers. Tasks wait in queue until workers are available. Enables async processing, load distribution, and reliability.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/getting-started/introduction.html", text: "📚 Celery Intro" }
            },
            {
                q: "What's a binary search tree used for?",
                options: ["Managing nested function call operations", "Storing key-value pairs with fast hashing", "Processing elements in arrival order", "Efficient searching and sorted data access"],
                correct: 3,
                explanation: "BST maintains sorted order: left children < parent < right children. O(log n) search/insert/delete (balanced). In-order traversal gives sorted sequence.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Binary_search_tree", text: "📚 Binary Search Tree" }
            },
            {
                q: "When would you use a set instead of a list?",
                options: ["Need to access elements by numeric index", "Need to store duplicate values in order", "Need elements sorted by insertion time", "Need unique elements with fast membership lookup"],
                correct: 3,
                explanation: "Sets store unique elements with O(1) average membership test. No duplicates, no ordering (usually). Use for: deduplication, membership checks, set operations.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Set_(abstract_data_type)", text: "📚 Set Data Structure" }
            },
        ],
        4: [
            {
                q: "What's the time complexity of hash table insertion (average)?",
                options: ["O(n²)", "O(1)", "O(log n)", "O(n)"],
                correct: 1,
                explanation: "Hash tables achieve O(1) average through hash function + array indexing. Good hash function distributes keys evenly, minimizing collisions.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Hash_table#Performance", text: "📚 Hash Table Performance" }
            },
            {
                q: "What's a priority queue?",
                options: ["Queue where elements have priority-based ordering", "Queue restricted to only one priority category", "Queue with elements accessed in random order", "Stack variant with a limited capacity buffer"],
                correct: 0,
                explanation: "Priority queue retrieves highest (or lowest) priority element first. Usually implemented with heap. Used for: Dijkstra's algorithm, task scheduling, event simulation.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Priority_queue", text: "📚 Priority Queue" }
            },
            {
                q: "What's the worst-case time complexity of hash table operations?",
                options: ["O(log n) through balanced tree fallback", "O(1) constant time in all scenarios", "O(n) linear time due to hash collisions", "O(n squared) due to nested iteration"],
                correct: 2,
                explanation: "Worst case: all keys hash to same bucket (chain), becoming a linked list. O(n) search. Good hash functions and resizing prevent this in practice.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Hash_table#Collision_resolution", text: "📚 Hash Collisions" }
            },
            {
                q: "When is a doubly linked list preferred over singly linked?",
                options: ["Simpler implementation with fewer pointers", "More memory-efficient per stored element", "Need to traverse in both directions easily", "Provides faster sequential forward iteration"],
                correct: 2,
                explanation: "Doubly linked lists have prev+next pointers, enabling bidirectional traversal and O(1) deletion with only node reference. Cost: more memory per node.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Doubly_linked_list", text: "📚 Doubly Linked List" }
            },
        ],
        5: [
            {
                q: "When would a B-tree be better than a binary tree?",
                options: ["For disk-based storage to minimize I/O reads", "It is always better regardless of use case", "When the data set is small and simple", "When data fits entirely in memory only"],
                correct: 0,
                explanation: "B-trees have high branching factor, reducing tree height. Fewer disk reads needed. Used in databases and filesystems. Each node fits in one disk block.",
                learnMore: { url: "https://en.wikipedia.org/wiki/B-tree", text: "📚 B-tree" }
            },
            {
                q: "What's the purpose of a bloom filter?",
                options: ["Probabilistic membership testing, space-efficient", "General-purpose data compression algorithm", "Exact set membership with zero false positives", "Efficient sorting of large numerical datasets"],
                correct: 0,
                explanation: "Bloom filters test membership with possible false positives, no false negatives. Very space-efficient. Used for: cache lookups, spell checkers, network routing.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Bloom_filter", text: "📚 Bloom Filter" }
            },
            {
                q: "What's a trie used for?",
                options: ["Managing a bounded queue of elements", "Sorting numbers by magnitude quickly", "Efficient string prefix search operations", "Traversing nodes in a weighted graph"],
                correct: 2,
                explanation: "Tries (prefix trees) store strings with shared prefixes. O(m) lookup where m=key length. Used for: autocomplete, spell check, IP routing, dictionary storage.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Trie", text: "📚 Trie" }
            },
            {
                q: "What's the difference between a heap and a BST?",
                options: ["BST keeps the minimum or maximum at the root", "They are structurally identical data structures", "Heap keeps all elements in fully sorted order", "Heap has min/max at root, BST is fully sorted"],
                correct: 3,
                explanation: "Heap: parent ≥ children (max-heap), only guarantees root is max. BST: left < parent < right, fully sorted. Heap for priority queue, BST for ordered operations.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Heap_(data_structure)", text: "📚 Heap" }
            },
            {
                q: "When would you use a graph over a tree?",
                options: ["Graphs offer a simpler structural representation", "Nodes can have multiple parents and form cycles", "Each node requires exactly one parent reference", "Graphs provide faster lookup operations overall"],
                correct: 1,
                explanation: "Graphs allow cycles and multiple edges between nodes. Model: social networks, road maps, dependencies. Trees are special acyclic graphs with single parent per node.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)", text: "📚 Graph" }
            },
        ]
    },

    'f-design-patterns': {
        1: [
            {
                q: "What is a design pattern?",
                options: ["Reusable solution to common problem", "A code library you import into projects", "A testing methodology for software", "A specific programming language feature"],
                correct: 0,
                explanation: "Design patterns are proven solutions to recurring design problems. They provide templates, not code. Named by Gang of Four (GoF) book in 1994.",
                learnMore: { url: "https://refactoring.guru/design-patterns", text: "📚 Design Patterns" }
            },
            {
                q: "Why use design patterns?",
                options: ["They make code run faster automatically", "Required for object-oriented programming", "Proven solutions, common vocabulary", "They reduce the amount of code needed"],
                correct: 2,
                explanation: "Patterns provide tested solutions and shared vocabulary. 'Let's use Observer here' communicates clearly. But don't force patterns - use when they fit.",
                learnMore: { url: "https://refactoring.guru/design-patterns/why-learn-patterns", text: "📚 Why Patterns?" }
            },
            {
                q: "What's the Singleton pattern?",
                options: ["Wraps objects to add new functionality", "Provides multiple implementations of an interface", "Ensures only one instance of a class exists", "Creates a new instance for each request"],
                correct: 2,
                explanation: "Singleton ensures single instance with global access point. Use sparingly - can make testing difficult. Common for: loggers, config, connection pools.",
                learnMore: { url: "https://refactoring.guru/design-patterns/singleton", text: "📚 Singleton Pattern" }
            },
        ],
        2: [
            {
                q: "What does the Factory pattern do?",
                options: ["Creates objects without specifying exact class", "Defines an interface for creating families of objects", "Adds functionality to objects dynamically", "Ensures only one instance exists globally"],
                correct: 0,
                explanation: "Factory encapsulates object creation. Client requests object by type/config, factory returns appropriate subclass. Decouples creation from use.",
                learnMore: { url: "https://refactoring.guru/design-patterns/factory-method", text: "📚 Factory Pattern" }
            },
            {
                q: "What is a Mixin in Python/Django?",
                options: ["Abstract base class requiring implementation", "Interface defining method signatures only", "A decorator that modifies function behavior", "Class providing methods for other classes to inherit"],
                correct: 3,
                explanation: "Mixins add reusable functionality via multiple inheritance. In Django: LoginRequiredMixin, PermissionRequiredMixin. Keep mixins focused on one concern.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/class-based-views/mixins/", text: "📚 Django Mixins" }
            },
            {
                q: "What's the Builder pattern used for?",
                options: ["Construct complex objects step by step", "Clone existing objects to create new ones", "Create objects through inheritance hierarchy", "Create objects using a central registry"],
                correct: 0,
                explanation: "Builder constructs complex objects step-by-step. Separates construction from representation. Useful when objects have many optional parameters.",
                learnMore: { url: "https://refactoring.guru/design-patterns/builder", text: "📚 Builder Pattern" }
            },
        ],
        3: [
            {
                q: "When would you use the Strategy pattern?",
                options: ["Construct complex objects with many options", "Swap algorithms at runtime without changing client", "Ensure only one instance of a service exists", "Notify multiple objects when state changes"],
                correct: 1,
                explanation: "Strategy defines interchangeable algorithms. Context holds a strategy and delegates to it. Change behavior without changing context. Example: payment methods.",
                learnMore: { url: "https://refactoring.guru/design-patterns/strategy", text: "📚 Strategy Pattern" }
            },
            {
                q: "What's the Observer pattern used for?",
                options: ["Notify multiple objects of state changes", "Construct complex objects incrementally", "Restrict a class to a single instance", "Add behavior to functions dynamically"],
                correct: 0,
                explanation: "Observer enables publish-subscribe: subject notifies observers of changes. Loose coupling - subject doesn't know observers. Django signals use this pattern.",
                learnMore: { url: "https://refactoring.guru/design-patterns/observer", text: "📚 Observer Pattern" }
            },
            {
                q: "What does the Template Method pattern do?",
                options: ["Allow object behavior to change based on state", "Define algorithm skeleton, let subclasses override steps", "Provide simplified interface to complex subsystem", "Generate objects from configuration templates"],
                correct: 1,
                explanation: "Template Method defines algorithm structure in base class, subclasses override specific steps. Django's class-based views use this extensively.",
                learnMore: { url: "https://refactoring.guru/design-patterns/template-method", text: "📚 Template Method" }
            },
            {
                q: "What's the Iterator pattern?",
                options: ["Walk a collection without exposing its structure", "Transform every element held in a collection", "Filter the elements according to a condition", "Combine several collections into a single one"],
                correct: 0,
                explanation: "Iterator provides sequential access to elements without exposing underlying representation. Python's for loops use iterators. __iter__ and __next__ methods.",
                learnMore: { url: "https://refactoring.guru/design-patterns/iterator", text: "📚 Iterator Pattern" }
            },
        ],
        4: [
            {
                q: "How does the Adapter pattern help?",
                options: ["Controls access to another object", "Adds new behavior to objects dynamically", "Provides a simplified API to complex systems", "Makes incompatible interfaces work together"],
                correct: 3,
                explanation: "Adapter wraps an object to provide different interface. Like power adapters for different outlets. Use to integrate legacy code or third-party libraries.",
                learnMore: { url: "https://refactoring.guru/design-patterns/adapter", text: "📚 Adapter Pattern" }
            },
            {
                q: "What's the Facade pattern?",
                options: ["Separates abstraction from implementation", "Converts one interface to another expected by client", "Simple interface to complex subsystem", "Wraps objects to add additional responsibilities"],
                correct: 2,
                explanation: "Facade provides simplified interface to complex system. Hides complexity from clients. Django's ORM is a facade over SQL. Makes systems easier to use.",
                learnMore: { url: "https://refactoring.guru/design-patterns/facade", text: "📚 Facade Pattern" }
            },
            {
                q: "When would you use the Command pattern?",
                options: ["To provide a simplified interface to subsystems", "Encapsulate requests as objects for undo/queue", "When object creation needs to be delegated", "When you need to notify multiple listeners"],
                correct: 1,
                explanation: "Command encapsulates action as object. Enables: undo/redo, queuing, logging, transactions. Celery tasks are command objects sent to workers.",
                learnMore: { url: "https://refactoring.guru/design-patterns/command", text: "📚 Command Pattern" }
            },
            {
                q: "What's the Repository pattern used for?",
                options: ["Abstract data access with collection-like interface", "Manage object lifecycle and dependencies", "Store configuration settings centrally", "Provide undo/redo functionality for operations"],
                correct: 0,
                explanation: "Repository abstracts data storage, providing collection-like interface. Domain code doesn't know about database. Enables switching storage implementations.",
                learnMore: { url: "https://martinfowler.com/eaaCatalog/repository.html", text: "📚 Repository Pattern" }
            },
        ],
        5: [
            {
                q: "What's the difference between Proxy and Decorator patterns?",
                options: ["Proxy is for remote objects, Decorator for local", "Proxy creates new objects, Decorator modifies existing", "Proxy controls access, Decorator adds behavior", "Decorator manages lifecycle, Proxy adds features"],
                correct: 2,
                explanation: "Proxy controls access (lazy loading, security, caching). Decorator adds behavior (logging, timing). Both wrap objects but with different intent.",
                learnMore: { url: "https://refactoring.guru/design-patterns/proxy", text: "📚 Proxy vs Decorator" }
            },
            {
                q: "What's the Chain of Responsibility pattern?",
                options: ["Pass request through handler chain until processed", "Queue requests for batch processing later", "Route request to a specific handler based on type", "Distribute request to all handlers simultaneously"],
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
                options: ["Enable publish-subscribe event notification", "Pass requests through a chain of handlers", "Provide a unified interface to a subsystem", "Centralize complex communications between objects"],
                correct: 3,
                explanation: "Mediator centralizes complex communications between objects. Objects don't reference each other directly. Reduces coupling in complex UIs or workflows.",
                learnMore: { url: "https://refactoring.guru/design-patterns/mediator", text: "📚 Mediator Pattern" }
            },
            {
                q: "What's the difference between Abstract Factory and Factory Method?",
                options: ["Factory Method requires interfaces, Abstract Factory doesn't", "Abstract Factory creates families, Factory Method single product", "Factory Method uses inheritance, Abstract Factory uses composition only", "Abstract Factory is simpler and more commonly used"],
                correct: 1,
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
                options: ["PUT", "DELETE", "POST", "GET"],
                correct: 3,
                explanation: "GET retrieves data without modifying it. Should be idempotent and safe (no side effects). Response can be cached. Never use GET for mutations.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET", text: "📚 HTTP GET" }
            },
            {
                q: "Which HTTP method creates a new resource?",
                options: ["DELETE", "GET", "HEAD", "POST"],
                correct: 3,
                explanation: "POST creates new resources. Not idempotent - multiple calls create multiple resources. Returns 201 Created with Location header pointing to new resource.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST", text: "📚 HTTP POST" }
            },
        ],
        2: [
            {
                q: "What HTTP status code indicates 'Created'?",
                options: ["204", "201", "301", "200"],
                correct: 1,
                explanation: "201 Created: request succeeded, new resource created. Should include Location header with URL of new resource. Used with POST (and sometimes PUT).",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201", text: "📚 HTTP 201" }
            },
            {
                q: "What's the difference between PUT and PATCH?",
                options: ["PUT is for collections, PATCH for single items", "PUT replaces entire resource, PATCH updates partially", "PUT creates resources, PATCH deletes them", "PATCH must be idempotent, PUT is not"],
                correct: 1,
                explanation: "PUT replaces entire resource (send complete object). PATCH modifies specific fields (send only changes). PATCH is more bandwidth-efficient for updates.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH", text: "📚 PUT vs PATCH" }
            },
            {
                q: "What does status code 404 mean?",
                options: ["Unauthorized", "Not Found", "Server Error", "Bad Request"],
                correct: 1,
                explanation: "404 Not Found: requested resource doesn't exist. Client error (4xx range). Could mean wrong URL, deleted resource, or unauthorized but hiding existence.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404", text: "📚 HTTP 404" }
            },
        ],
        3: [
            {
                q: "What does idempotent mean for an API operation?",
                options: ["Every call is recorded in the operation audit log", "The operation requires authenticated access tokens", "The operation completes within a time limit", "Same result regardless of how many times called"],
                correct: 3,
                explanation: "Idempotent: calling N times has same effect as calling once. GET, PUT, DELETE should be idempotent. POST is not (creates new resource each time).",
                learnMore: { url: "https://restfulapi.net/idempotent-rest-apis/", text: "📚 Idempotency" }
            },
            {
                q: "Which HTTP methods should be idempotent?",
                options: ["Only safe methods like GET and HEAD", "GET, PUT, DELETE", "POST, PUT, PATCH", "Methods that modify data: POST, PUT, DELETE"],
                correct: 1,
                explanation: "GET (read), PUT (replace), DELETE (remove) should be idempotent. POST creates new resources, so multiple calls create multiple resources (not idempotent).",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent", text: "📚 Idempotent Methods" }
            },
            {
                q: "What's the purpose of HTTP status code 204?",
                options: ["Resource moved permanently", "Request accepted for async processing", "Success with no content to return", "Resource was created successfully"],
                correct: 2,
                explanation: "204 No Content: success, but no response body. Common for DELETE (deleted successfully, nothing to return) or PUT when not returning updated resource.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204", text: "📚 HTTP 204" }
            },
            {
                q: "What should a RESTful URL look like?",
                options: ["/resource/get/1 with action in the path", "/resources/{id} using noun-based naming", "Any format the developer chooses to use", "/getResource?id=1 with verb-based naming"],
                correct: 1,
                explanation: "RESTful URLs use nouns (resources), not verbs. HTTP methods provide the verbs: GET /users/123 (read user), DELETE /users/123 (delete user).",
                learnMore: { url: "https://restfulapi.net/resource-naming/", text: "📚 REST URL Naming" }
            },
        ],
        4: [
            {
                q: "What's HATEOAS in REST?",
                options: ["Hardware-optimized API routing protocol", "Hostile API deprecation design pattern", "Responses include links to related actions", "Historical API request tracing subsystem"],
                correct: 2,
                explanation: "HATEOAS: responses include links to related resources/actions. Clients discover API by following links, not hardcoding URLs. Level 3 of Richardson Maturity Model.",
                learnMore: { url: "https://restfulapi.net/hateoas/", text: "📚 HATEOAS" }
            },
            {
                q: "What are the benefits of pagination in APIs?",
                options: ["Allows sorting data on the server", "Required for authentication to work", "Enables filtering by date ranges", "Reduce response size, improve performance"],
                correct: 3,
                explanation: "Pagination prevents huge responses: limit memory, network, processing. Common patterns: offset/limit, cursor-based, page number. Include total count and next/prev links.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/pagination/", text: "📚 DRF Pagination" }
            },
            {
                q: "What does a 202 Accepted response tell the client?",
                options: ["The request was taken but is not finished", "The request succeeded and the body is empty", "The request needs authentication to proceed", "The resource was created at a new location"],
                correct: 0,
                explanation: "202 fits long-running work: the server accepted the request but the result is not ready. The client polls a status endpoint or waits for an event — exactly how provisioning orders behave."
            },
            {
                q: "What's the difference between 401 and 403?",
                options: ["401 = not authenticated, 403 = not authorized", "403 = resource not found, 401 = method not allowed", "401 = server error, 403 = client error", "401 = temporary, 403 = permanent denial"],
                correct: 0,
                explanation: "401 Unauthorized: 'Who are you?' (no/invalid credentials). 403 Forbidden: 'I know who you are, but you can't do this' (insufficient permissions).",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401", text: "📚 401 vs 403" }
            },
        ],
        5: [
            {
                q: "How should API versioning be handled?",
                options: ["Change port numbers for each version", "Embed version in resource IDs", "URL path, header, or query param with deprecation policy", "Use different HTTP methods for different versions"],
                correct: 2,
                explanation: "Version in URL (/v1/), header (Accept: application/vnd.api+json;version=1), or query param. Announce deprecations, provide migration time, support old versions.",
                learnMore: { url: "https://restfulapi.net/versioning/", text: "📚 API Versioning" }
            },
            {
                q: "What's the Richardson Maturity Model?",
                options: ["Client-server compatibility measurement", "API documentation completeness rating", "HTTP authentication standard with four levels", "Levels of REST API maturity (0-3)"],
                correct: 3,
                explanation: "Level 0: HTTP as tunnel. Level 1: Resources. Level 2: HTTP methods. Level 3: HATEOAS. Most APIs are Level 2. Level 3 enables discoverable APIs.",
                learnMore: { url: "https://martinfowler.com/articles/richardsonMaturityModel.html", text: "📚 Richardson Model" }
            },
            {
                q: "When should you use GraphQL over REST?",
                options: ["When caching support out of the box matters most", "Flexible queries fetching several resources at once", "When browser compatibility is the main concern", "For simple APIs with predictable data needs"],
                correct: 1,
                explanation: "GraphQL shines when: clients need different data shapes, mobile needs minimal data, reducing round trips matters. REST is simpler for standard CRUD.",
                learnMore: { url: "https://graphql.org/learn/", text: "📚 GraphQL Introduction" }
            },
            {
                q: "What's an API gateway used for?",
                options: ["Compile API specifications into code", "Store session data between microservices", "Manage database connections for services", "Route requests, handle auth, rate limiting"],
                correct: 3,
                explanation: "API gateway is single entry point for clients. Handles: routing, auth, rate limiting, logging, SSL termination. Examples: Kong, AWS API Gateway, nginx.",
                learnMore: { url: "https://microservices.io/patterns/apigateway.html", text: "📚 API Gateway Pattern" }
            },
            {
                q: "How do you handle breaking changes in APIs?",
                options: ["Version, deprecation warnings, migration guides", "Use feature flags in request headers", "Return different status codes for old vs new clients", "Automatically transform old requests to new format"],
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
                options: ["Tests the entire application end to end", "Tests the user interface rendering and layout", "Tests a single function or component in isolation", "Tests the database schema and stored queries"],
                correct: 2,
                explanation: "Unit tests verify individual functions/methods in isolation. Fast, pinpoint failures precisely. Mock dependencies to test code in isolation.",
                learnMore: { url: "https://martinfowler.com/bliki/UnitTest.html", text: "📚 Unit Testing" }
            },
            {
                q: "What does 'assert' do in tests?",
                options: ["Sets up test fixtures", "Verifies a condition is true", "Catches exceptions silently", "Logs test execution progress"],
                correct: 1,
                explanation: "Assert verifies expected conditions. 'assert x == 5' fails if x isn't 5. pytest provides detailed failure messages showing actual vs expected.",
                learnMore: { url: "https://docs.pytest.org/en/stable/how-to/assert.html", text: "📚 pytest Assertions" }
            },
            {
                q: "Why write automated tests?",
                options: ["Generate documentation automatically", "Catch bugs early, enable safe refactoring", "Replace the need for code reviews", "Eliminate all bugs before production"],
                correct: 1,
                explanation: "Tests catch bugs before production, document expected behavior, and enable confident refactoring. Investment pays off in fewer bugs.",
                learnMore: { url: "https://docs.pytest.org/en/stable/", text: "📚 pytest Documentation" }
            },
        ],
        2: [
            {
                q: "What's the purpose of test fixtures?",
                options: ["Define assertions to verify test results", "Mark tests for conditional execution", "Measure code coverage during execution", "Set up test data and state before tests run"],
                correct: 3,
                explanation: "Fixtures provide test context: database records, mock objects, temp files. pytest fixtures use @pytest.fixture decorator with function/class/module scope.",
                learnMore: { url: "https://docs.pytest.org/en/stable/how-to/fixtures.html", text: "📚 pytest Fixtures" }
            },
            {
                q: "In pytest, how do you mark a test to skip?",
                options: ["# skip comment above the test", "@pytest.mark.skip decorator on it", "skip() function call inside the test", "@skip decorator from unittest module"],
                correct: 1,
                explanation: "@pytest.mark.skip skips test unconditionally. Use @pytest.mark.skipif(condition) for conditional skips. Add reason='...' for documentation.",
                learnMore: { url: "https://docs.pytest.org/en/stable/how-to/skipping.html", text: "📚 Skipping Tests" }
            },
            {
                q: "What's the Arrange-Act-Assert pattern?",
                options: ["How tests are discovered and collected", "Setup, execute, verify - test structure", "Method for parallel test execution", "Pattern for organizing test files"],
                correct: 1,
                explanation: "AAA structures tests: Arrange (setup), Act (execute code under test), Assert (verify results). Also called Given-When-Then. Makes tests readable.",
                learnMore: { url: "https://martinfowler.com/bliki/GivenWhenThen.html", text: "📚 AAA Pattern" }
            },
        ],
        3: [
            {
                q: "What's the difference between mocking and stubbing?",
                options: ["Stubs replace the system, mocks extend it", "Stubs are for classes, mocks for functions", "Mocks are used in unit tests, stubs in integration", "Mocks verify behavior, stubs provide canned responses"],
                correct: 3,
                explanation: "Stub: provides predetermined responses. Mock: also verifies interactions (was method called with correct args?). Mocks are stubs with verification.",
                learnMore: { url: "https://martinfowler.com/articles/mocksArentStubs.html", text: "📚 Mocks vs Stubs" }
            },
            {
                q: "What is test coverage?",
                options: ["Time taken to run the test suite", "Number of assertions per test function", "Percentage of code executed by tests", "Ratio of passing to failing tests"],
                correct: 2,
                explanation: "Coverage measures what code runs during tests. 100% coverage doesn't mean bug-free - only that lines executed, not all scenarios tested.",
                learnMore: { url: "https://coverage.readthedocs.io/", text: "📚 Coverage.py" }
            },
            {
                q: "What's a test double?",
                options: ["Pair programming during test writing", "Second assertion in a test case", "Generic term for mock, stub, fake, spy", "Running same test twice for reliability"],
                correct: 2,
                explanation: "Test double is an umbrella term: Stub (canned answers), Mock (verifies calls), Fake (working implementation), Spy (records calls).",
                learnMore: { url: "https://martinfowler.com/bliki/TestDouble.html", text: "📚 Test Doubles" }
            },
            {
                q: "What's regression testing?",
                options: ["Ensure changes don't break existing functionality", "Analyzing test results to find patterns", "Testing backward compatibility only", "Testing code by reverting to previous versions"],
                correct: 0,
                explanation: "Regression tests verify existing features still work after code changes. Run full test suite before merging. CI/CD automates this.",
                learnMore: { url: "https://martinfowler.com/bliki/SelfTestingCode.html", text: "📚 Regression Testing" }
            },
        ],
        4: [
            {
                q: "When should you use integration tests vs unit tests?",
                options: ["Integration for component interactions, unit for isolation", "Unit for frontend, integration for backend only", "Integration before deployment, unit after", "Unit for slow operations, integration for fast ones"],
                correct: 0,
                explanation: "Unit tests: isolated logic, fast, many. Integration tests: component interactions (API + DB), slower, fewer. Both are valuable at different levels.",
                learnMore: { url: "https://martinfowler.com/bliki/IntegrationTest.html", text: "📚 Integration Testing" }
            },
            {
                q: "What's test-driven development (TDD)?",
                options: ["Write tests before implementation code", "Focus testing effort on drivers and utilities", "Write implementation then comprehensive tests", "Development process driven by QA team"],
                correct: 0,
                explanation: "TDD cycle: Red (failing test) → Green (minimal code to pass) → Refactor. Forces thinking about API/design first. Results in testable, focused code.",
                learnMore: { url: "https://martinfowler.com/bliki/TestDrivenDevelopment.html", text: "📚 TDD" }
            },
            {
                q: "What's a flaky test?",
                options: ["Test that checks multiple conditions at once", "Test with weak assertions that pass too easily", "Test that sometimes passes, sometimes fails randomly", "Test that depends on external services"],
                correct: 2,
                explanation: "Flaky tests fail intermittently due to: race conditions, time dependencies, shared state, network issues. Erode trust in test suite. Fix or quarantine.",
                learnMore: { url: "https://testing.googleblog.com/2020/12/test-flakiness-one-of-main-challenges.html", text: "📚 Flaky Tests" }
            },
            {
                q: "When is 100% code coverage a bad goal?",
                options: ["When the team is inexperienced with testing", "When working on legacy code with no tests", "Can lead to meaningless tests, diminishing returns", "If the project has strict deadlines"],
                correct: 2,
                explanation: "Chasing 100% can lead to testing trivial code (getters), testing implementation vs behavior, or meaningless assertions. Focus on critical paths.",
                learnMore: { url: "https://martinfowler.com/bliki/TestCoverage.html", text: "📚 Test Coverage" }
            },
        ],
        5: [
            {
                q: "What's property-based testing?",
                options: ["Test that object attributes have correct types", "Check that setters and getters work properly", "Verify properties files are loaded correctly", "Generate random inputs to verify invariants hold"],
                correct: 3,
                explanation: "Property-based testing generates random inputs and checks invariants (e.g., sort(sort(x)) == sort(x)). Finds edge cases you didn't think of. See Hypothesis.",
                learnMore: { url: "https://hypothesis.readthedocs.io/", text: "📚 Hypothesis" }
            },
            {
                q: "What's mutation testing?",
                options: ["Test how code handles data transformations", "Verify database schema migrations work", "Modify code to check if tests catch changes", "Test code behavior under changing conditions"],
                correct: 2,
                explanation: "Mutation testing introduces bugs (mutations) and checks if tests fail. If tests pass with buggy code, they're not testing effectively.",
                learnMore: { url: "https://mutmut.readthedocs.io/", text: "📚 mutmut" }
            },
            {
                q: "What's contract testing?",
                options: ["Ensure code complies with coding standards", "Verify API contracts between services", "Test third-party library integrations", "Validate configuration against schema"],
                correct: 1,
                explanation: "Contract tests verify service interfaces match expectations. Consumer writes contract, provider verifies. Pact is popular tool. Catches integration issues early.",
                learnMore: { url: "https://docs.pact.io/", text: "📚 Pact Contract Testing" }
            },
            {
                q: "What's the test pyramid?",
                options: ["Focus on integration tests as the foundation", "E2E tests at base, unit tests at top", "More unit tests, fewer integration, fewest E2E", "Equal number of tests at each level"],
                correct: 2,
                explanation: "Pyramid: many fast unit tests at base, fewer integration in middle, few slow E2E at top. Unit tests are cheap, E2E are expensive to maintain.",
                learnMore: { url: "https://martinfowler.com/bliki/TestPyramid.html", text: "📚 Test Pyramid" }
            },
            {
                q: "When is end-to-end testing most valuable?",
                options: ["Critical user journeys, integration verification", "When unit tests are too difficult to write", "As the primary testing strategy for all features", "For testing individual functions and methods"],
                correct: 0,
                explanation: "E2E tests verify complete user flows. Slow and brittle, so use sparingly for critical paths. Unit/integration tests should be foundation.",
                learnMore: { url: "https://martinfowler.com/bliki/BroadStackTest.html", text: "📚 E2E Testing" }
            },
        ],
        6: [
            {
                q: "What does property-based testing generate for you?",
                options: ["Mock objects matching each collaborator", "Documentation examples from the test names", "Inputs that must satisfy a stated invariant", "Assertions derived from the production code"],
                correct: 2,
                explanation: "You state a property — round-tripping a value returns it unchanged, say — and the framework generates inputs trying to break it, then shrinks any failure to a minimal case. Hypothesis is the Python implementation.",
                learnMore: { url: "https://hypothesis.readthedocs.io/en/latest/", text: "📚 Hypothesis" }
            },
            {
                q: "What does mutation testing measure?",
                options: ["How much of the code each test file executes", "How long the suite takes as the codebase grows", "How often a test's result changes between runs", "Whether tests fail when the code is deliberately broken"],
                correct: 3,
                explanation: "It mutates the source — flipping a comparison, dropping a call — and reports mutants no test caught. It answers the question coverage cannot: whether the executed lines are actually asserted on."
            },
            {
                q: "What distinguishes a stub from a mock?",
                options: ["They are two names for exactly the same thing", "A stub returns canned data; a mock asserts on calls", "A stub is generated; a mock is written by hand", "A stub is for HTTP; a mock is for the database"],
                correct: 1,
                explanation: "A stub supplies answers so the test can proceed. A mock additionally verifies the interaction happened as expected — which couples the test to implementation detail, so it earns its place only when the call itself is the behaviour."
            },
            {
                q: "Why does contract testing exist between a service and its clients?",
                options: ["To replace unit tests inside each service", "To measure the latency between the two systems", "To generate client code from the server's source", "To catch breaking changes without running both together"],
                correct: 3,
                explanation: "Each side tests against a shared contract, so a provider change that breaks a consumer fails in the provider's own pipeline. Waldur gets a similar effect from a generated SDK plus type checking at the consumer."
            },
            {
                q: "A test passes alone but fails in the suite. What is the usual cause?",
                options: ["State leaking between tests, exposed by ordering", "A bug that only appears under heavy CPU load", "An assertion that is too strict for real data", "Insufficient coverage of the module under test"],
                correct: 0,
                explanation: "Module-level caches, database rows and patched globals outlive the test that created them. Randomising order surfaces the dependency instead of letting it hide behind an alphabetical run."
            },
            {
                q: "What is the risk of snapshot tests as the only assertion?",
                options: ["Snapshots run far slower than explicit assertions", "Snapshots only work for pure functions", "Snapshots get updated reflexively when they fail", "Snapshots cannot represent nested structures"],
                correct: 2,
                explanation: "A failing snapshot says something changed, not that something is wrong, so the fix becomes an update. They work best pinning output nobody intends to change, alongside explicit assertions on the behaviour that matters."
            },
        ],
        7: [
            {
                q: "How do you keep a test that depends on the clock deterministic?",
                options: ["Freeze or inject time rather than reading it directly", "Add a sleep long enough to cover the variance", "Assert on a range instead of an exact timestamp", "Run the test only during off-peak CI hours"],
                correct: 0,
                explanation: "Injecting a clock — or freezing it, as freezegun does — makes the passage of time an input to the test. Sleeping makes the suite slower and still fails on a loaded runner."
            },
            {
                q: "When is a real dependency in a container better than a mock?",
                options: ["Never — mocks are faster and therefore preferred", "When the behaviour under test is the integration itself", "Whenever a container image happens to be available", "Only when the dependency has no client library"],
                correct: 1,
                explanation: "A mock encodes your belief about the dependency; a real Postgres or emulated cloud exercises the driver, the SQL and the error paths. The cost is startup time, so it is spent where the integration is the risk."
            },
            {
                q: "Why is 100% line coverage not evidence of correctness?",
                options: ["Coverage tools miss lines inside comprehensions", "Branch coverage counts differently across languages", "Coverage excludes code imported from libraries", "Executed code is not necessarily asserted on"],
                correct: 3,
                explanation: "A test that imports a module and asserts nothing still covers it. Coverage finds untested code, which is useful; it says nothing about whether the tested code does the right thing."
            },
            {
                q: "What is the trade-off of a transaction-rollback database fixture?",
                options: ["It cannot be used with test factories or fixtures", "It is fast but hides anything that commits or nests", "It is slow but perfectly isolates every test", "It requires a separate database per test worker"],
                correct: 1,
                explanation: "Wrapping each test in a rolled-back transaction is far faster than truncating tables, but code that commits, uses savepoints or relies on on-commit hooks behaves differently than in production."
            },
            {
                q: "What must hold before a suite can run in parallel workers?",
                options: ["Tests must be ordered alphabetically by name", "The suite must have no fixtures at all", "Tests must not share mutable external state", "Every test must complete within one second"],
                correct: 2,
                explanation: "Parallel workers collide on shared databases, fixed ports, temp paths and global caches. Each worker needs its own slice — which is the same discipline that keeps a serial suite from order-dependent failures."
            },
            {
                q: "Where should the weight of a Waldur test suite sit?",
                options: ["Mostly fast tests, with integration where risk concentrates", "Entirely at the end-to-end level, since that is realistic", "Entirely at the unit level, since those run fastest", "Evenly split across every level regardless of risk"],
                correct: 0,
                explanation: "Fast tests give the tightest feedback, but the defects that hurt live between components — permissions, state transitions, contracts. The E2E suite with its emulators exists to cover exactly that band, not to duplicate unit tests."
            },
        ]
    },

    'f-git': {
        1: [
            {
                q: "What is a branch in Git?",
                options: ["A complete copy of the entire repository", "A configured connection to a remote server", "Pointer to a commit, enables parallel work", "An automatic backup of the repository state"],
                correct: 2,
                explanation: "Branches are lightweight pointers to commits. Creating a branch is cheap (41-byte file). Enables parallel work on features/fixes without affecting main.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", text: "📚 Git Branching" }
            },
            {
                q: "What's a commit in Git?",
                options: ["Sync with remote server", "Copy of files in directory", "A type of branch reference", "Snapshot of changes with message"],
                correct: 3,
                explanation: "Commits are snapshots of your project at a point in time, with metadata (author, date, message, parent commits). They're immutable once created.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository", text: "📚 Git Commits" }
            },
            {
                q: "What's a remote in Git?",
                options: ["A specific type of commit", "Connection to repository on server", "A specific type of branch", "Copy of repo on your machine"],
                correct: 1,
                explanation: "Remotes are references to repositories on servers (GitHub, GitLab). 'origin' is the default remote. Use 'git remote -v' to list remotes.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", text: "📚 Git Remotes" }
            },
        ],
        2: [
            {
                q: "What belongs in a .gitignore file?",
                options: ["Paths git should not track, such as build output", "Paths that must be committed on every change", "The list of branches nobody is allowed to push", "Files that should be encrypted before commit"],
                correct: 0,
                explanation: "Build artifacts, dependencies and local environment files belong there. Note that it only affects untracked paths — a file already committed keeps being tracked until it is explicitly removed from the index.",
                learnMore: { url: "https://git-scm.com/docs/git-stash", text: "📚 Git Stash" }
            },
            {
                q: "What's HEAD in Git?",
                options: ["A branch on the remote server", "The most recent commit in repo", "Pointer to current commit/branch", "The very first commit in repo"],
                correct: 2,
                explanation: "HEAD points to the current commit you're on (usually via branch reference). Moving HEAD changes what you see in your working directory.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Internals-Git-References", text: "📚 Git HEAD" }
            },
            {
                q: "What does 'git branch -d' do?",
                options: ["Renames a branch", "Deletes a merged branch", "Lists all branches", "Creates a new branch"],
                correct: 1,
                explanation: "'-d' deletes a merged branch safely. Use '-D' to force delete unmerged branches. Only deletes the pointer, commits remain in history.",
                learnMore: { url: "https://git-scm.com/docs/git-branch", text: "📚 Git Branch" }
            },
        ],
        3: [
            {
                q: "When should you rebase instead of merge?",
                options: ["For a clean linear history on feature branches", "Only when working on the main branch itself", "Never, since rebase is unsafe in all cases", "Always, no matter what the situation is"],
                correct: 0,
                explanation: "Rebase for local/feature branches to get clean history. Never rebase shared branches (rewrites history). Merge preserves context of when integration happened.",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/merging-vs-rebasing", text: "📚 Rebase vs Merge" }
            },
            {
                q: "What's a fast-forward merge?",
                options: ["A merge that runs automatically", "A merge that is forced through", "A merge that runs very quickly", "Moving branch pointer when no divergence"],
                correct: 3,
                explanation: "Fast-forward happens when target branch hasn't diverged - Git just moves the pointer. No merge commit created. Use '--no-ff' to force merge commit.",
                learnMore: { url: "https://git-scm.com/docs/git-merge#_fast_forward_merge", text: "📚 Fast-forward Merge" }
            },
            {
                q: "What does 'git reset --hard' do?",
                options: ["Discard all changes and reset to commit", "Perform a soft reset keeping staged", "Create backup before resetting", "Keep changes in working directory"],
                correct: 0,
                explanation: "'--hard' discards all changes (staged and working directory). Dangerous! '--soft' keeps changes staged, '--mixed' (default) keeps changes unstaged.",
                learnMore: { url: "https://git-scm.com/docs/git-reset", text: "📚 Git Reset" }
            },
            {
                q: "What's the difference between 'git reset' and 'git revert'?",
                options: ["Reset creates a new undo commit", "Reset moves HEAD, revert creates undo commit", "They do exactly the same thing", "Revert moves HEAD to another commit"],
                correct: 1,
                explanation: "Reset: moves HEAD, potentially losing commits (don't use on shared branches). Revert: creates new commit that undoes changes (safe for shared branches).",
                learnMore: { url: "https://www.atlassian.com/git/tutorials/undoing-changes", text: "📚 Undoing Changes" }
            },
            {
                q: "What will happen after running these commands?",
                code: "git checkout -b feature\ngit add .\ngit commit -m \"WIP\"\ngit checkout main\ngit merge feature",
                options: ["The feature branch will be deleted", "Main will be reset to the previous commit", "A fast-forward merge of the feature branch into main", "A merge conflict will always occur"],
                correct: 2,
                explanation: "Since feature branched from main and main hasn't changed, Git can fast-forward main to the feature commit. No merge commit needed.",
                learnMore: { url: "https://git-scm.com/docs/git-merge#_fast_forward_merge", text: "📚 Fast-forward Merge" }
            },
        ],
        4: [
            {
                q: "What does 'git cherry-pick' do?",
                options: ["Apply a specific commit to current branch", "Rename commits in history", "Delete commits from history", "Automatically select best commits"],
                correct: 0,
                explanation: "Cherry-pick copies a commit to current branch. Useful for backporting fixes. Creates new commit with same changes but different hash.",
                learnMore: { url: "https://git-scm.com/docs/git-cherry-pick", text: "📚 Git Cherry-pick" }
            },
            {
                q: "What's an interactive rebase used for?",
                options: ["Create a new branch", "Perform a simple merge", "Edit, squash, reorder commits", "Automatically rebase branches"],
                correct: 2,
                explanation: "'git rebase -i' lets you: squash commits, edit messages, reorder, drop commits. Powerful for cleaning up history before merging.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History", text: "📚 Interactive Rebase" }
            },
            {
                q: "What's a Git tag used for?",
                options: ["Add comments to commits", "Mark specific points like releases", "Temporarily save changes", "Create a marker for branches"],
                correct: 1,
                explanation: "Tags mark important points (releases, versions). Lightweight tags are just pointers. Annotated tags store metadata (tagger, date, message).",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Basics-Tagging", text: "📚 Git Tags" }
            },
            {
                q: "What does 'git blame' show?",
                options: ["Who changed each line and when", "List of errors in the code", "Complete branch history", "Unresolved merge conflicts"],
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
                options: ["A tree-style view of the repository files", "A visual tree of the commit relationships", "Several working directories for one repository", "A diagram showing where branches diverge"],
                correct: 2,
                explanation: "Worktree lets you check out multiple branches simultaneously in different directories. Useful for comparing branches or working on multiple features.",
                learnMore: { url: "https://git-scm.com/docs/git-worktree", text: "📚 Git Worktree" }
            },
            {
                q: "How do you recover a deleted branch?",
                options: ["Deleted branches cannot be recovered", "Contact your Git administrator", "Git automatically recovers branches", "Find commit in reflog, recreate branch"],
                correct: 3,
                explanation: "Find the commit hash in reflog ('git reflog'), then 'git branch branch-name hash'. Branch is just a pointer - commits aren't deleted immediately.",
                learnMore: { url: "https://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery", text: "📚 Recovery" }
            },
            {
                q: "What's a detached HEAD state?",
                options: ["HEAD reference was deleted", "Repository has no commits", "HEAD points to commit, not branch", "Repository is broken/corrupted"],
                correct: 2,
                explanation: "Detached HEAD: checked out a commit directly, not a branch. New commits won't belong to any branch. Create a branch to keep them: 'git checkout -b new-branch'.",
                learnMore: { url: "https://git-scm.com/docs/git-checkout#_detached_head", text: "📚 Detached HEAD" }
            },
            {
                q: "What's git bisect used for?",
                options: ["Create annotated release tags", "Split repository into multiple repos", "Merge multiple branches together", "Binary search to find bug-introducing commit"],
                correct: 3,
                explanation: "Bisect does binary search through history. Mark commits 'good' or 'bad', Git narrows down to the first bad commit efficiently. Great for debugging.",
                learnMore: { url: "https://git-scm.com/docs/git-bisect", text: "📚 Git Bisect" }
            },
        ],
        6: [
            {
                q: "What does 'git sparse-checkout' allow you to do?",
                options: ["Check out only a subset of files from a repository", "Create sparse commits with partial staging", "Compress repository data for faster cloning", "Run garbage collection on sparse objects"],
                correct: 0,
                explanation: "Sparse checkout lets you work with only specific directories or files in a large repository. Combined with partial clone (--filter=blob:none), it's essential for monorepo workflows."
            },
            {
                q: "Which command schedules automatic repository maintenance tasks like gc, commit-graph, and prefetch?",
                options: ["git clean --scheduled", "git gc --auto-schedule", "git maintenance start", "git optimize --background"],
                correct: 2,
                explanation: "git maintenance start registers a cron/systemd schedule for background tasks: gc, commit-graph updates, prefetch from remotes, loose-objects cleanup, and incremental-repack."
            },
            {
                q: "What is a git bundle used for?",
                options: ["Creating a ZIP archive of the working directory", "Packaging repository data for offline transfer between machines", "Bundling multiple repositories into a monorepo structure", "Compressing Git objects for smaller disk usage"],
                correct: 1,
                explanation: "git bundle creates a single file containing Git objects and refs that can be transferred offline (USB, email) and used as a remote. Useful when network access is unavailable."
            },
            {
                q: "How do git notes differ from commit messages?",
                options: ["Notes are only visible in GitHub web interface", "Notes replace commit messages after a rebase operation", "Notes are encrypted while commit messages are plain text", "Notes can be added or modified without changing commit hashes"],
                correct: 3,
                explanation: "Git notes attach metadata to commits without altering the commit SHA. This lets you add code review comments, CI results, or annotations after the fact without rewriting history."
            },
            {
                q: "What advantage does 'git subtree' have over 'git submodule' for including external repositories?",
                options: ["Subtree stores only lightweight references to the external project", "Subtree requires less disk space and avoids large repository bloat", "Subtree merges code directly into the repo, no extra clone steps", "Subtree automatically keeps external dependencies at latest version"],
                correct: 2,
                explanation: "git subtree merges external repo content directly into your tree. Contributors can clone and work normally without running 'git submodule init/update'. Trade-off: harder to push changes back upstream."
            },
            {
                q: "In a monorepo strategy, what is the primary purpose of path-based CI filtering?",
                options: ["Limiting developer access to specific directories based on team roles", "Running only the CI pipelines relevant to the changed directories", "Filtering file paths during git clone for smaller checkouts", "Sorting files by path for faster indexing in large repositories"],
                correct: 1,
                explanation: "Path-based CI filtering triggers only pipelines affected by changed files (e.g., changes in services/api/ run only API tests). This avoids running all pipelines on every commit, keeping CI fast in monorepos."
            },
        ],
        7: [
            {
                q: "Which tool is recommended for rewriting history across an entire repository?",
                options: ["git filter-repo, the supported successor to filter-branch", "git filter-branch, still the fastest supported option", "git rebase --root, replaying every commit interactively", "git gc --aggressive, which drops unreachable objects"],
                correct: 0,
                explanation: "git filter-branch is deprecated: it is slow and easy to misuse. git filter-repo rewrites paths, authors and blobs in one pass and refuses to run on a repository with unpushed work by default.",
                learnMore: { url: "https://git-scm.com/docs/git-filter-branch#_warning", text: "📚 Why not filter-branch" }
            },
            {
                q: "What does 'git worktree add' give you that a second clone does not?",
                options: ["An automatic sync between the two directories", "Another checked-out branch sharing one object store", "A compressed copy that consumes far less disk", "A read-only checkout that cannot be committed to"],
                correct: 1,
                explanation: "Worktrees share the repository's objects and refs, so a second branch is checked out without re-downloading history. Each worktree has its own index and HEAD, and a branch can only be checked out in one of them."
            },
            {
                q: "What does 'git rerere' do during a long-running rebase?",
                options: ["Reruns the test suite after each applied commit", "Retries the failed merge with a different strategy", "Rewrites the commits to remove conflicting hunks", "Replays conflict resolutions it has already recorded"],
                correct: 3,
                explanation: "Reuse recorded resolution stores how you resolved a conflicting hunk and reapplies it when the same conflict reappears — which it does constantly when rebasing a long branch repeatedly."
            },
            {
                q: "How does 'git bisect run' find a regression without manual steps?",
                options: ["It asks the user to confirm each bisection step", "It runs a script per candidate and uses the exit status", "It reads the CI history to find the first red build", "It compares each commit's diff against a known pattern"],
                correct: 1,
                explanation: "The script exits 0 for good and non-zero for bad, and bisect walks the range automatically. Exit code 125 marks a commit untestable so it is skipped rather than treated as a verdict."
            },
            {
                q: "What does cloning with --filter=blob:none achieve?",
                options: ["Binary files are permanently excluded from the clone", "The clone is read-only until the filter is removed", "File contents are fetched lazily, history stays complete", "Only the most recent commit is fetched, as with depth 1"],
                correct: 2,
                explanation: "A partial clone downloads commits and trees but defers blobs until a command needs them. Unlike a shallow clone the history is intact, so log and blame still work — at the cost of fetching on demand."
            },
            {
                q: "What does 'git merge --verify-signatures' actually check?",
                options: ["That the commit being merged carries a valid signature", "That every commit in the repository has been signed", "That the remote server presented a valid TLS certificate", "That the merge will not introduce any conflicting hunks"],
                correct: 0,
                explanation: "It verifies the signature on the tip commit being merged and aborts if it is missing or invalid. Enforcing signing across a whole branch is a server-side policy, not something this flag provides."
            },
        ]
    },

    'f-docker': {
        1: [
            {
                q: "What is a Dockerfile?",
                options: ["Container log output file", "Docker daemon configuration", "Instructions to build a Docker image", "A currently running container"],
                correct: 2,
                explanation: "Dockerfile contains instructions (FROM, RUN, COPY, etc.) to build an image layer by layer. Each instruction creates a cached layer.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/", text: "📚 Dockerfile Reference" }
            },
            {
                q: "What command builds a Docker image?",
                options: ["docker compile", "docker make", "docker create", "docker build"],
                correct: 3,
                explanation: "'docker build' reads Dockerfile and creates image. Use '-t name:tag' to tag the image. Build context is sent to daemon (use .dockerignore).",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/build/", text: "📚 Docker Build" }
            },
            {
                q: "What command runs a container?",
                options: ["docker run", "docker exec", "docker begin", "docker start"],
                correct: 0,
                explanation: "'docker run' creates and starts a container from an image. 'docker start' starts an existing stopped container. 'docker exec' runs commands in running container.",
                learnMore: { url: "https://docs.docker.com/engine/reference/run/", text: "📚 Docker Run" }
            },
        ],
        2: [
            {
                q: "What does 'docker compose up' do?",
                options: ["Shows container status", "Updates the Docker engine", "Uploads images to registry", "Starts all services in compose.yaml"],
                correct: 3,
                explanation: "'docker compose up' creates and starts all services defined in compose file. Add '-d' for detached mode. '--build' rebuilds images.",
                learnMore: { url: "https://docs.docker.com/compose/reference/up/", text: "📚 Compose Up" }
            },
            {
                q: "What's the purpose of exposing a port in Docker?",
                options: ["Allow external access to container", "Speed up container startup", "Increase container security", "Reduce memory usage"],
                correct: 0,
                explanation: "EXPOSE documents which ports the container listens on. '-p host:container' actually publishes the port. Without -p, EXPOSE does nothing for external access.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#expose", text: "📚 Docker Ports" }
            },
            {
                q: "What does 'docker ps' show?",
                options: ["Docker daemon processes", "All available images", "Currently running containers", "Port mapping settings"],
                correct: 2,
                explanation: "'docker ps' lists running containers. Add '-a' for all containers (including stopped). Shows: ID, image, command, status, ports, names.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/ps/", text: "📚 Docker PS" }
            },
        ],
        3: [
            {
                q: "What's the difference between COPY and ADD in Dockerfile?",
                options: ["ADD can extract archives and URLs", "COPY is the newer command", "ADD is now deprecated", "They do exactly the same thing"],
                correct: 0,
                explanation: "COPY is straightforward file copy. ADD can extract tar archives and fetch URLs. Prefer COPY for simplicity; use ADD only when you need its features.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy", text: "📚 COPY vs ADD" }
            },
            {
                q: "Why use .dockerignore?",
                options: ["Disable the build cache", "Exclude files from build context", "Skip certain image layers", "Ignore build error messages"],
                correct: 1,
                explanation: ".dockerignore excludes files from build context sent to daemon. Speeds up builds, reduces image size, prevents secrets from being included.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#dockerignore-file", text: "📚 .dockerignore" }
            },
            {
                q: "What's a Docker layer?",
                options: ["Cached filesystem change from instruction", "Virtual network overlay for containers", "Container runtime isolation level", "Security permission boundary scope"],
                correct: 0,
                explanation: "Each Dockerfile instruction creates a layer. Layers are cached and reused if instruction and previous layers unchanged. Optimize by ordering least→most changing.",
                learnMore: { url: "https://docs.docker.com/storage/storagedriver/", text: "📚 Docker Layers" }
            },
            {
                q: "What does 'docker pull' do?",
                options: ["Removes image locally", "Downloads image from registry", "Pushes image to registry", "Lists available images"],
                correct: 1,
                explanation: "'docker pull' downloads image from registry (Docker Hub by default). Specify registry: 'registry.example.com/image:tag'. Layers already present are skipped.",
                learnMore: { url: "https://docs.docker.com/engine/reference/commandline/pull/", text: "📚 Docker Pull" }
            },
            {
                q: "What will this Dockerfile produce?",
                code: "FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD [\"python\", \"app.py\"]",
                options: ["A Python app image with dependencies cached via separate copy step", "An image that copies requirements.txt but never installs packages", "A container that re-runs pip install each time it starts up fresh", "An image that installs dependencies but omits application source"],
                correct: 0,
                explanation: "This Dockerfile copies requirements.txt first and installs dependencies separately. This means the pip install layer is cached when only code changes. COPY . . then adds the app code.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache", text: "📚 Build Cache" }
            },
        ],
        4: [
            {
                q: "How do multi-stage builds reduce image size?",
                options: ["Base image is made smaller", "Only final stage artifacts included", "Layers are automatically removed", "Files are compressed smaller"],
                correct: 1,
                explanation: "Multi-stage builds use multiple FROM statements. Build tools stay in early stages; COPY only needed artifacts to final stage. Dramatically smaller production images.",
                learnMore: { url: "https://docs.docker.com/build/building/multi-stage/", text: "📚 Multi-stage Builds" }
            },
            {
                q: "What's the difference between Docker Compose and Kubernetes?",
                options: ["Both tools provide identical container orchestration capabilities", "Kubernetes handles local development; Compose handles production", "Compose targets dev and simple setups; Kubernetes runs clusters", "Compose manages production clusters; Kubernetes is for dev only"],
                correct: 2,
                explanation: "Compose: define multi-container apps, great for development and simple deployments, single host. Kubernetes: orchestration for production clusters, multi-node, service discovery, auto-scaling.",
                learnMore: { url: "https://docs.docker.com/compose/", text: "📚 Docker Compose" }
            },
            {
                q: "Why use alpine-based images?",
                options: ["Stronger security defaults out of the box", "A much smaller image that pulls faster", "A larger set of preinstalled packages", "It is required by the Docker daemon"],
                correct: 1,
                explanation: "Alpine Linux is ~5MB vs ~80MB+ for Debian. Smaller attack surface. But: uses musl libc (compatibility issues sometimes), less tooling. Good for production.",
                learnMore: { url: "https://hub.docker.com/_/alpine", text: "📚 Alpine Image" }
            },
            {
                q: "What's a Docker registry?",
                options: ["Running container database", "Storage and distribution for images", "Configuration file storage", "Container log storage"],
                correct: 1,
                explanation: "Registry stores and distributes images. Docker Hub is default public registry. Private options: Harbor, GitLab Registry, AWS ECR, etc.",
                learnMore: { url: "https://docs.docker.com/registry/", text: "📚 Docker Registry" }
            },
        ],
        5: [
            {
                q: "What decides where a container's stdout ends up?",
                options: ["The logging driver configured for the daemon", "The application's own log file configuration", "The volume mounted at /var/log in the image", "The restart policy set for that container"],
                correct: 0,
                explanation: "Containers write to stdout and stderr, and the daemon's logging driver decides whether that lands in json-file, journald or a remote collector. `docker logs` only works with drivers that can read back."
            },
            {
                q: "How do you optimize Docker build cache?",
                options: ["Use completely random order", "Cache optimization is not possible", "Order instructions least to most changing", "Always rebuild from scratch"],
                correct: 2,
                explanation: "Cache invalidates when instruction or previous layer changes. Order: base image → dependencies → code. Copy package.json before code to cache npm install.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache", text: "📚 Build Cache" }
            },
            {
                q: "What's a Docker secret?",
                options: ["Private image in registry", "Encrypted storage volume", "Hidden container from listing", "Sensitive data management for Swarm"],
                correct: 3,
                explanation: "Swarm secrets store sensitive data (passwords, keys) encrypted. Mounted as files in containers. Better than environment variables (visible in ps/logs).",
                learnMore: { url: "https://docs.docker.com/engine/swarm/secrets/", text: "📚 Docker Secrets" }
            },
            {
                q: "What's the purpose of Docker health checks?",
                options: ["Test security configuration", "Check available disk space", "Monitor container application health", "Verify network connectivity"],
                correct: 2,
                explanation: "HEALTHCHECK tests if app inside is working (not just process running). Returns: healthy, unhealthy, starting. Orchestrators can restart unhealthy containers.",
                learnMore: { url: "https://docs.docker.com/engine/reference/builder/#healthcheck", text: "📚 HEALTHCHECK" }
            },
            {
                q: "How do you reduce Docker image attack surface?",
                options: ["Add comprehensive debugging tools for runtime diagnostics", "Run all processes as root to simplify permission handling", "Use full-featured base images with extensive tooling packages", "Use minimal base images, non-root user, and fewer tools"],
                correct: 3,
                explanation: "Use minimal base (alpine, distroless), non-root USER, remove shells/tools if not needed, scan for vulnerabilities (Trivy, Snyk), update regularly.",
                learnMore: { url: "https://docs.docker.com/develop/security-best-practices/", text: "📚 Security Best Practices" }
            },
            {
                q: "What is the issue with this Dockerfile?",
                code: "FROM node:18\nCOPY . .\nRUN npm install\nRUN npm run build\nEXPOSE 3000\nCMD [\"node\", \"dist/server.js\"]",
                options: ["The EXPOSE port does not match the application listening port value", "The CMD instruction uses an unsupported syntax for node startup", "The FROM base image tag is outdated and no longer maintained now", "Copying all files before npm install breaks dependency layer caching"],
                correct: 3,
                explanation: "COPY . . before npm install means any code change invalidates the npm install cache. Better: COPY package*.json first, npm install, then COPY the rest.",
                learnMore: { url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/", text: "📚 Dockerfile Best Practices" }
            },
        ],
        6: [
            {
                q: "What is the primary advantage of Docker BuildKit over the legacy build engine?",
                options: ["A different container runtime used for execution", "Parallel stages, better caching and secret mounts", "Dockerfiles replaced by a YAML configuration", "Support limited to multi-architecture base images"],
                correct: 1,
                explanation: "BuildKit parallelizes independent stages, supports cache mounts (--mount=type=cache), secret mounts (--mount=type=secret), and SSH forwarding. It produces smaller build contexts and faster builds."
            },
            {
                q: "Which tool is commonly used to scan Docker images for known CVEs and security vulnerabilities?",
                options: ["Docker Bench for Security", "Trivy or Docker Scout", "docker audit --vulnerabilities", "docker inspect --security"],
                correct: 1,
                explanation: "Trivy and Docker Scout scan container images against vulnerability databases (CVE). They analyze OS packages and application dependencies, reporting severity levels and fix versions."
            },
            {
                q: "What does Docker rootless mode achieve?",
                options: ["The root user is removed inside every container", "Containers are restricted to read-only storage", "The daemon and containers run without root", "Containers run without any user namespaces"],
                correct: 2,
                explanation: "Rootless mode runs the Docker daemon as a non-root user, reducing the attack surface. Even if a container escape occurs, the attacker has only unprivileged user access on the host."
            },
            {
                q: "In Docker Compose v2, how do you specify that a service should wait for a dependency to be healthy before starting?",
                options: ["restart: on-failure with a retry count set", "network_mode: wait-for-healthy on the service", "depends_on with condition: service_healthy", "links with the wait: true parameter set"],
                correct: 2,
                explanation: "Compose v2 supports depends_on with condition: service_healthy. The dependency must define a healthcheck. This replaces third-party wait-for-it scripts for service readiness."
            },
            {
                q: "How do you build a Docker image for multiple CPU architectures (e.g., amd64 and arm64) in a single command?",
                options: ["Run 'docker build' twice with different --arch flags and tag each separately", "Use 'docker buildx build --platform linux/amd64,linux/arm64' with a builder instance", "Set the TARGETARCH variable in the Dockerfile and rebuild manually per platform", "Use 'docker manifest create' to merge pre-built single-arch images together"],
                correct: 1,
                explanation: "docker buildx with --platform builds for multiple architectures simultaneously using QEMU emulation or native builders. It pushes a manifest list so Docker automatically pulls the right arch."
            },
            {
                q: "What does the 'docker init' command generate for an existing project?",
                options: ["A volume prepopulated with project templates", "A Dockerfile, .dockerignore and compose file", "A script that installs Docker on the host", "A git repository with Docker branch rules"],
                correct: 1,
                explanation: "docker init detects the project language/framework and generates a Dockerfile, .dockerignore, and compose.yaml with best practices applied. It supports Python, Node, Go, Rust, and others."
            },
        ],
        7: [
            {
                q: "What does RUN --mount=type=cache give a BuildKit build?",
                options: ["A directory that survives across builds for package caches", "A layer that is discarded before the image is committed", "A shared volume mounted into the running container", "A read-only mount of the host's package manager cache"],
                correct: 0,
                explanation: "Cache mounts persist between builds without landing in the image, so pip, apt or npm downloads are reused even when the layer is rebuilt. The content never becomes part of a published layer.",
                learnMore: { url: "https://docs.docker.com/build/cache/optimize/", text: "📚 Build cache" }
            },
            {
                q: "How should a build-time credential reach a Dockerfile?",
                options: ["Through an ENV set just before it is needed", "Through a COPY of the file, deleted in a later RUN", "Through RUN --mount=type=secret, never in a layer", "Through an ARG, since build args are not persisted"],
                correct: 2,
                explanation: "Secret mounts expose the value only for that RUN and never write it to a layer. Build args appear in image history, and a file deleted in a later layer is still recoverable from the earlier one."
            },
            {
                q: "What does rootless mode change about running containers?",
                options: ["Containers keep root but drop every Linux capability", "The container filesystem becomes entirely read-only", "Only signed images may be started by the daemon", "The daemon and containers run as an unprivileged user"],
                correct: 3,
                explanation: "Rootless mode runs the daemon and containers under a normal user with user namespaces mapping container root to an unprivileged host UID, so a container escape does not land on host root."
            },
            {
                q: "Why attach an SBOM and provenance attestation to an image?",
                options: ["To allow the image to run without a base image", "To record what is inside it and how it was built", "To reduce the image size by deduplicating layers", "To let the registry serve the image over more mirrors"],
                correct: 1,
                explanation: "An SBOM lists the components so a new CVE can be matched against deployed images, while provenance records the build inputs. buildx can generate both as attestations attached to the pushed image."
            },
            {
                q: "A distroless image has no shell. How do you inspect it at runtime?",
                options: ["Rebuild it from a base image that includes a shell", "Use docker cp to extract the filesystem and read it", "Restart it with an entrypoint override of /bin/sh", "Attach a debug container sharing its namespaces"],
                correct: 3,
                explanation: "Ephemeral debug containers join the target's namespaces and bring their own tools, so the minimal image stays minimal. Overriding the entrypoint fails because there is no shell inside to run."
            },
            {
                q: "Why pin a base image by digest rather than by tag?",
                options: ["A tag can be moved to point at different content later", "A digest downloads faster than a tag reference does", "Tags are unavailable on private registries by default", "A digest allows the image to skip signature checks"],
                correct: 0,
                explanation: "Tags are mutable pointers, so the same Dockerfile can produce different images over time. A digest names exact content, which is what makes a build reproducible and an audit meaningful."
            },
        ]
    },

    'f-ci-cd': {
        1: [
            {
                q: "What does CI stand for?",
                options: ["Code Inspection", "Continuous Integration", "Continuous Improvement", "Code Integration"],
                correct: 1,
                explanation: "CI stands for Continuous Integration - the practice of frequently merging code changes into a shared repository, where automated builds and tests verify each integration.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/introduction/", text: "📚 GitLab CI/CD Introduction" }
            },
            {
                q: "What does CD stand for (in CI/CD)?",
                options: ["Code Delivery system", "Continuous Delivery/Deployment", "Continuous Development", "Code Distribution network"],
                correct: 1,
                explanation: "CD can mean Continuous Delivery (automatically prepare releases for deployment) or Continuous Deployment (automatically deploy every change that passes tests).",
                learnMore: { url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment", text: "📚 CI vs CD vs CD" }
            },
            {
                q: "What's the main goal of CI?",
                options: ["Detect integration issues early", "Write less code overall", "Deploy code to production faster", "Reduce testing requirements"],
                correct: 0,
                explanation: "CI's main goal is to detect integration problems early by automatically building and testing code changes frequently, reducing integration pain.",
                learnMore: { url: "https://martinfowler.com/articles/continuousIntegration.html", text: "📚 Martin Fowler on CI" }
            },
        ],
        2: [
            {
                q: "What triggers a CI pipeline typically?",
                options: ["Scheduled time trigger only", "Production deployment event", "Code push or merge request", "Manual button click only"],
                correct: 2,
                explanation: "CI pipelines are typically triggered by code pushes, merge/pull requests, or branch updates. This ensures every change is verified automatically.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/pipelines/", text: "📚 GitLab Pipelines" }
            },
            {
                q: "What's a pipeline stage?",
                options: ["The name of a Git branch", "Group of jobs that run together", "A single shell command to run", "A server running the jobs"],
                correct: 1,
                explanation: "A pipeline stage is a logical grouping of jobs that run together. Common stages include build, test, and deploy. Jobs in a stage run in parallel by default.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/yaml/#stages", text: "📚 GitLab Pipeline Stages" }
            },
            {
                q: "What should happen if CI tests fail?",
                options: ["Proceed with merge regardless", "Block merge until tests are fixed", "Delete the feature branch", "Ignore the test failures"],
                correct: 1,
                explanation: "Failed CI tests should block the merge to protect the main branch. This enforces quality gates and ensures only passing code enters the codebase.",
                learnMore: { url: "https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html", text: "📚 Pipeline-Gated Merges" }
            },
        ],
        3: [
            {
                q: "What's the difference between Continuous Delivery and Deployment?",
                options: ["Delivery requires manual approval to deploy; Deployment is automatic", "Deployment requires manual approval while Delivery is fully automated", "Delivery pushes changes to production automatically with no gates", "Both terms describe exactly the same process with no distinction"],
                correct: 0,
                explanation: "Continuous Delivery means code is always ready to deploy but requires manual approval. Continuous Deployment automatically deploys every passing change to production.",
                learnMore: { url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment", text: "📚 Delivery vs Deployment" }
            },
            {
                q: "What's a build artifact?",
                options: ["The output of a build, such as a package", "The reports produced by the test stage", "Configuration logs written by the server", "The original source files before building"],
                correct: 0,
                explanation: "Build artifacts are files produced by the build process: compiled binaries, packages, container images, or bundles that can be deployed or passed to other stages.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html", text: "📚 GitLab Job Artifacts" }
            },
            {
                q: "What's pipeline caching used for?",
                options: ["Storing the logs each pipeline produces", "Reusing dependencies to speed up builds", "Backing up the source code on a schedule", "Keeping test results for later review"],
                correct: 1,
                explanation: "Pipeline caching stores and reuses dependencies (node_modules, pip packages) between pipeline runs, significantly speeding up build times.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/caching/", text: "📚 GitLab Caching" }
            },
            {
                q: "What's a deployment environment?",
                options: ["A Git branch in the repo", "Target system (dev, staging, prod)", "The CI/CD build server", "Your local development IDE"],
                correct: 1,
                explanation: "Deployment environments are target systems where code runs: development, staging, production, etc. Each may have different configurations and access controls.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/environments/", text: "📚 GitLab Environments" }
            },
        ],
        4: [
            {
                q: "What are pipeline artifacts used for?",
                options: ["Pass build outputs between stages/jobs", "Cache dependencies between runs", "Log errors to monitoring systems", "Store sensitive secrets securely"],
                correct: 0,
                explanation: "Pipeline artifacts pass outputs between jobs/stages (e.g., compiled code from build to test stage). Unlike caches, artifacts are job-specific outputs.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html", text: "📚 Job Artifacts" }
            },
            {
                q: "What's a rollback strategy?",
                options: ["Process to remove old code files", "Method to clear system caches", "Plan to revert failed deployments", "Procedure to backup databases"],
                correct: 2,
                explanation: "A rollback strategy is a plan to quickly revert to a previous working version when a deployment fails. Can use previous artifacts, git reverts, or blue-green switching.",
                learnMore: { url: "https://docs.gitlab.com/ee/ci/environments/#environment-rollback", text: "📚 Environment Rollback" }
            },
            {
                q: "What's canary deployment?",
                options: ["Test deployment to dev server", "Gradual rollout to subset of users", "Immediate rollback on any error", "Full deployment to all servers"],
                correct: 1,
                explanation: "Canary deployment gradually rolls out changes to a small subset of users first. If issues arise, only a small percentage is affected before full rollout.",
                learnMore: { url: "https://martinfowler.com/bliki/CanaryRelease.html", text: "📚 Canary Releases" }
            },
            {
                q: "What's infrastructure as code in CI/CD?",
                options: ["Provisioning delegated to external tools only", "Resources configured through a web console", "Infrastructure defined in version-controlled files", "Servers set up by manually typed commands"],
                correct: 2,
                explanation: "Infrastructure as Code (IaC) defines infrastructure using version-controlled files (Terraform, Ansible), enabling reproducible, auditable infrastructure changes through CI/CD.",
                learnMore: { url: "https://www.terraform.io/intro", text: "📚 Terraform Introduction" }
            },
        ],
        5: [
            {
                q: "How do you implement blue-green deployments?",
                options: ["Two identical environments, switch traffic", "A/B testing with feature toggles", "Single environment with in-place updates", "Gradual rollout to percentage of users"],
                correct: 0,
                explanation: "Blue-green deployment uses two identical environments. Deploy to inactive one (green), verify it works, then switch traffic from active (blue) to green. Instant rollback possible.",
                learnMore: { url: "https://martinfowler.com/bliki/BlueGreenDeployment.html", text: "📚 Blue-Green Deployment" }
            },
            {
                q: "What's GitOps?",
                options: ["GitHub-specific platform features", "Standard Git operations and commands", "Use Git as source of truth for infra", "Generic Git automation scripts"],
                correct: 2,
                explanation: "GitOps uses Git as the single source of truth for infrastructure and applications. Changes are made via PRs, and automated processes sync Git state to actual infrastructure.",
                learnMore: { url: "https://www.gitops.tech/", text: "📚 GitOps Principles" }
            },
            {
                q: "What's feature flag deployment?",
                options: ["Git branches for each feature", "Command-line deployment flags", "Toggle features without deployment", "Boolean variables in config files"],
                correct: 2,
                explanation: "Feature flags (toggles) allow enabling/disabling features at runtime without deployment. Enables gradual rollouts, A/B testing, and quick disabling of problematic features.",
                learnMore: { url: "https://martinfowler.com/articles/feature-toggles.html", text: "📚 Feature Toggles" }
            },
            {
                q: "What's a deployment pipeline pattern?",
                options: ["Single step deployment process", "Stages: build, test, deploy with gates", "Fully manual deployment process", "No defined deployment pattern"],
                correct: 1,
                explanation: "A deployment pipeline pattern structures CI/CD into stages (build → test → staging → production) with quality gates between each stage ensuring only verified code advances.",
                learnMore: { url: "https://martinfowler.com/bliki/DeploymentPipeline.html", text: "📚 Deployment Pipeline" }
            },
            {
                q: "How do you handle database migrations in CI/CD?",
                options: ["Make direct manual database changes", "Skip migrations in CI/CD pipelines", "Drop and recreate all tables", "Versioned migrations, backward compatible"],
                correct: 3,
                explanation: "Database migrations should be versioned, backward compatible (for rollback), and tested. Run migrations as separate pipeline step before deployment. Avoid destructive changes.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/migrations/", text: "📚 Django Migrations" }
            },
        ],
        6: [
            {
                q: "Why shard a long test job across parallel CI runners?",
                options: ["Wall-clock time drops without dropping coverage", "Each shard needs a smaller machine to run", "Sharded jobs are billed at a lower rate", "Flaky tests stop failing when they are split"],
                correct: 0,
                explanation: "Splitting the suite across runners cuts feedback time proportionally. Mastermind's test stage fans out across shards as a child pipeline, and the parent reports the combined status."
            },
            {
                q: "What does a downstream pipeline trigger accomplish?",
                options: ["It merges the branch once the pipeline passes", "It publishes the artifacts to a package registry", "A change here runs the consumer's pipeline too", "It reruns this pipeline after a delay"],
                correct: 2,
                explanation: "Frontend changes trigger the integration-testing suite and platform changes trigger the packaging stack, so cross-repo breakage is attributed to the commit that caused it rather than discovered days later."
            },
            {
                q: "Why set an expiry on CI artifacts?",
                options: ["Stored artifacts accumulate cost and storage pressure", "Expired artifacts make pipelines run faster", "Artifacts cannot be downloaded after a pipeline ends", "The runner refuses to start without an expiry set"],
                correct: 0,
                explanation: "Every job that uploads logs, reports or builds keeps them until they expire. Without a policy the storage grows without bound — which is why an explicit expiry is set repository-wide."
            },
            {
                q: "What makes a pipeline cache different from an artifact?",
                options: ["A cache persists forever while artifacts expire", "A cache speeds up jobs; artifacts pass results along", "A cache is encrypted while artifacts are public", "Artifacts are shared between jobs, caches are not"],
                correct: 1,
                explanation: "A cache is an optimisation that must be safe to lose — dependencies, compiled intermediates. An artifact is an output later stages or humans consume, so correctness depends on it."
            },
            {
                q: "How should a pipeline handle a job that occasionally fails for network reasons?",
                options: ["Marking the job as allowed to fail permanently", "Retrying the entire pipeline from the first stage", "Removing the job until the network is more reliable", "A bounded retry on that job, not on the whole pipeline"],
                correct: 3,
                explanation: "A targeted retry with a limit absorbs genuine flakiness without masking real failures. Allowing failure quietly removes the signal, and rerunning everything wastes the stages that already passed."
            },
            {
                q: "Why validate the CI configuration itself before pushing?",
                options: ["Validation is required before a merge request opens", "A malformed pipeline fails after the push, wasting a cycle", "Validation runs the jobs locally on your machine", "The configuration cannot be changed once pushed"],
                correct: 1,
                explanation: "A lint step catches a broken include or a mistyped key immediately rather than after a push, a queue wait and a failed pipeline. GitLab exposes a lint API for exactly that."
            },
        ],
        7: [
            {
                q: "What does an OpenID Connect token from CI to a cloud replace?",
                options: ["The container registry's own authentication step", "The signing key used for release artifacts", "Long-lived static credentials stored as CI variables", "The need for any authorization on the cloud side"],
                correct: 2,
                explanation: "The runner presents a short-lived identity token the cloud verifies and exchanges for temporary credentials, so there is no long-lived secret in the project to leak or rotate."
            },
            {
                q: "Why produce a signed provenance attestation in the release pipeline?",
                options: ["It records which source and inputs produced an artifact", "It compresses the artifact for faster distribution", "It replaces the need to run tests before release", "It allows the artifact to bypass registry limits"],
                correct: 0,
                explanation: "Provenance ties the published artifact to the commit, pipeline and inputs that built it, so a consumer can verify it came from the expected build rather than from someone's laptop."
            },
            {
                q: "A pipeline needs a secret only one job may read. What is the mechanism?",
                options: ["Pass it as a build argument to every job", "Print it from an earlier job into an artifact", "Scope the variable to that job's environment or role", "Store it in the repository, encrypted at rest"],
                correct: 2,
                explanation: "Restricting a variable to a protected branch and a specific environment limits exposure to the jobs that genuinely need it. Anything passed through artifacts or build args is readable by whatever comes next."
            },
            {
                q: "What is the point of a merge train?",
                options: ["Merge requests are merged in alphabetical order", "Pipelines are cancelled when a newer one starts", "Reviewers are assigned automatically in rotation", "Merges are tested against the queue's combined result"],
                correct: 3,
                explanation: "Each candidate is tested against the branch as it will exist after the ones ahead of it merge, so two individually-green changes that conflict semantically are caught before they both land."
            },
            {
                q: "Why do nightly SDK regeneration jobs exist in this ecosystem?",
                options: ["Nightly builds replace the need for release tagging", "The published SDK tracks the backend schema automatically", "Nightly runs are cheaper than on-commit pipelines", "The SDK cannot be generated during a normal pipeline"],
                correct: 1,
                explanation: "The TypeScript and Python clients are generated from the backend's OpenAPI schema, so a scheduled job publishes a dev version tracking develop and consumers pick it up without a manual step."
            },
            {
                q: "How should a pipeline behave when a scheduled job and a push job collide?",
                options: ["Both run and the later result silently wins", "The scheduled run is always cancelled first", "Jobs queue indefinitely until manually released", "Concurrency controls decide which run proceeds"],
                correct: 3,
                explanation: "Without an explicit concurrency or interruptible policy, overlapping runs can deploy out of order or fight over shared state. Making the rule explicit is what keeps the outcome deterministic."
            },
        ]
    },

    'f-algorithms': {
        1: [
            {
                q: "What's the purpose of sorting algorithms?",
                options: ["Compress data for more efficient storage use", "Convert elements between different data types", "Arrange elements into a defined specific order", "Remove duplicate elements from a collection"],
                correct: 2,
                explanation: "Sorting algorithms arrange elements in a defined order (ascending, descending, alphabetical). Common algorithms include quicksort, mergesort, and bubble sort.",
                learnMore: { url: "https://www.geeksforgeeks.org/sorting-algorithms/", text: "📚 Sorting Algorithms" }
            },
            {
                q: "What is Big O notation used for?",
                options: ["Name programming variables", "Format code documentation", "Define function signatures", "Describe algorithm efficiency"],
                correct: 3,
                explanation: "Big O notation describes how algorithm performance scales with input size. O(n) means linear time, O(n²) means quadratic time, O(1) means constant time.",
                learnMore: { url: "https://www.bigocheatsheet.com/", text: "📚 Big O Cheat Sheet" }
            },
            {
                q: "What does O(1) complexity mean?",
                options: ["Time depends on network speed", "Constant time regardless of input size", "Linear time proportional to input", "Exponential time doubling each step"],
                correct: 1,
                explanation: "O(1) or constant time means the operation takes the same time regardless of input size. Examples: array index access, hash table lookup.",
                learnMore: { url: "https://www.freecodecamp.org/news/big-o-notation-explained/", text: "📚 Big O Explained" }
            },
        ],
        2: [
            {
                q: "What's the difference between linear and binary search?",
                options: ["Linear search is consistently faster than binary on sorted datasets", "Linear checks each element sequentially; binary halves sorted data", "Both algorithms perform identically on all types of input datasets", "Binary search only operates on unsorted and randomized data inputs"],
                correct: 1,
                explanation: "Linear search checks each element sequentially (O(n)). Binary search requires sorted data but halves the search space each step (O(log n)).",
                learnMore: { url: "https://www.geeksforgeeks.org/binary-search/", text: "📚 Binary Search" }
            },
            {
                q: "What's pagination in the context of algorithms?",
                options: ["Dividing results into discrete pages", "Compressing large datasets", "Encrypting user information", "Sorting data alphabetically"],
                correct: 0,
                explanation: "Pagination divides large result sets into smaller pages (e.g., 20 items per page). Uses offset/limit or cursor-based approaches for efficient data retrieval.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/pagination/", text: "📚 DRF Pagination" }
            },
            {
                q: "What's filtering in data algorithms?",
                options: ["Sorting elements by size", "Selecting elements matching criteria", "Encrypting sensitive fields", "Compressing repeated values"],
                correct: 1,
                explanation: "Filtering selects elements that match specified criteria from a collection. Common in database queries (WHERE), array methods (filter), and API endpoints.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/filtering/", text: "📚 DRF Filtering" }
            },
        ],
        3: [
            {
                q: "What's the time complexity of quicksort on average?",
                options: ["O(n log n) using divide and conquer", "O(n) linear time always", "O(1) constant time operation", "O(n²) in all cases consistently"],
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
                options: ["Visit all neighbors before going deeper", "Only search leaf nodes first", "Explore deep paths before others", "Skip nodes randomly for speed"],
                correct: 0,
                explanation: "BFS visits all neighbors at current depth before moving deeper. Uses a queue. Good for shortest path in unweighted graphs, level-order traversal.",
                learnMore: { url: "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/", text: "📚 BFS Algorithm" }
            },
            {
                q: "What's a recursive algorithm?",
                options: ["A function that never terminates its work", "A function calling itself with smaller input", "A function that runs in parallel threads", "A function that reads its input from disk"],
                correct: 1,
                explanation: "Recursion is when a function calls itself with a smaller problem until reaching a base case. Used in tree traversal, quicksort, and divide-and-conquer.",
                learnMore: { url: "https://www.geeksforgeeks.org/introduction-to-recursion/", text: "📚 Recursion" }
            },
        ],
        4: [
            {
                q: "When would you use dynamic programming?",
                options: ["Real-time systems requiring strict timing guarantees", "Overlapping subproblems with optimal substructure", "Simple iterative loops with no repeated computation", "Problems with random data and no recurring patterns"],
                correct: 1,
                explanation: "Dynamic programming works when problems have overlapping subproblems (same calculations repeated) and optimal substructure (optimal solution from optimal subsolutions).",
                learnMore: { url: "https://www.geeksforgeeks.org/dynamic-programming/", text: "📚 Dynamic Programming" }
            },
            {
                q: "What's memoization in algorithms?",
                options: ["Cache computed results to avoid repeated calculation", "Generate detailed execution logs during processing", "Persist intermediate data into permanent storage", "Compress function outputs to reduce memory usage"],
                correct: 0,
                explanation: "Memoization caches function results for given inputs. If called again with same inputs, returns cached result. Optimizes recursive algorithms significantly.",
                learnMore: { url: "https://www.geeksforgeeks.org/memoization-1d-2d-and-3d/", text: "📚 Memoization" }
            },
            {
                q: "What's a hash collision and how is it handled?",
                options: ["Two keys map to the same slot; resolved by chaining or probing", "Memory overflow that occurs when the hash table is full", "When the hash function produces a null or undefined value", "Network packet collision during distributed data transfer"],
                correct: 0,
                explanation: "Hash collision occurs when different keys produce the same hash value. Handled via chaining (linked list at each slot) or open addressing (probing for next slot).",
                learnMore: { url: "https://www.geeksforgeeks.org/hashing-set-2-separate-chaining/", text: "📚 Hash Collisions" }
            },
            {
                q: "What's the time complexity of tree balancing?",
                options: ["O(1) constant for everything", "O(log n) for balanced tree operations", "O(n²) for all tree operations", "O(n!) factorial complexity"],
                correct: 1,
                explanation: "Balanced trees (AVL, Red-Black) maintain O(log n) height, ensuring O(log n) search, insert, delete. Unbalanced trees can degrade to O(n) (linked list).",
                learnMore: { url: "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/", text: "📚 AVL Trees" }
            },
        ],
        5: [
            {
                q: "When is Dijkstra's algorithm used?",
                options: ["Compressing text data by leveraging character frequency patterns", "Detecting and identifying cycles within directed graph structures", "Finding shortest paths in weighted graphs with non-negative edges", "Sorting elements in arrays using comparison operations efficiently"],
                correct: 2,
                explanation: "Dijkstra finds shortest paths from a source to all vertices in weighted graphs with non-negative edges. Uses priority queue for O((V+E) log V) complexity.",
                learnMore: { url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", text: "📚 Dijkstra's Algorithm" }
            },
            {
                q: "What's the difference between greedy and dynamic programming?",
                options: ["DP approximates solutions but never finds the true optimal answer", "Greedy makes locally optimal choices; DP evaluates all subproblems", "Greedy algorithms are consistently slower than DP in all scenarios", "Both approaches solve optimization problems in an identical manner"],
                correct: 1,
                explanation: "Greedy makes locally optimal choices hoping for global optimum (fast but not always optimal). DP systematically solves all subproblems (slower but guaranteed optimal).",
                learnMore: { url: "https://www.geeksforgeeks.org/greedy-approach-vs-dynamic-programming/", text: "📚 Greedy vs DP" }
            },
            {
                q: "What's amortized analysis?",
                options: ["Averaging the cost per operation over a sequence of operations", "Analyzing the worst-case cost of every single operation", "Considering only the best-case scenario for performance", "Randomly sampling operations to estimate average runtime"],
                correct: 0,
                explanation: "Amortized analysis averages time over a sequence of operations. Example: ArrayList resize is O(n) sometimes, but amortized O(1) per insertion over time.",
                learnMore: { url: "https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis/", text: "📚 Amortized Analysis" }
            },
            {
                q: "What's the A* pathfinding algorithm?",
                options: ["Exhaustive brute-force search exploring all possible paths", "Heuristic-guided search combining actual cost and estimate", "Graph traversal algorithm that only handles unweighted edges", "Randomized walk algorithm that explores until goal is found"],
                correct: 1,
                explanation: "A* uses f(n) = g(n) + h(n) where g is actual cost from start and h is heuristic estimate to goal. Guarantees shortest path with admissible heuristic.",
                learnMore: { url: "https://www.redblobgames.com/pathfinding/a-star/introduction.html", text: "📚 A* Pathfinding" }
            },
            {
                q: "When would you use a bloom filter?",
                options: ["Symmetric encryption method for protecting sensitive user data", "Probabilistic set membership test allowing no false negatives", "Exact counting structure for tracking all unique element values", "Comparison-based algorithm for sorting large datasets quickly"],
                correct: 1,
                explanation: "Bloom filters test set membership with possible false positives but no false negatives. Space-efficient for large sets. Used in caches, spell checkers, databases.",
                learnMore: { url: "https://www.geeksforgeeks.org/bloom-filters-introduction-and-implementation/", text: "📚 Bloom Filters" }
            },
        ]
    },

    'f-state-machines': {
        1: [
            {
                q: "What is a finite state machine (FSM)?",
                options: ["Infinite processing loop that runs until system power off", "Computation model with defined states and transitions between them", "Hardware component dedicated to arithmetic calculations", "Persistent database schema used for storing machine data"],
                correct: 1,
                explanation: "A finite state machine has a finite number of states, transitions between them triggered by events, and defined initial/final states. Models sequential logic.",
                learnMore: { url: "https://www.geeksforgeeks.org/introduction-of-finite-automata/", text: "📚 Finite Automata" }
            },
            {
                q: "What's a 'state' in state machine terminology?",
                options: ["A variable that stores numbers", "A network connection status only", "A specific condition the system can be in", "A type of database query result"],
                correct: 2,
                explanation: "A state represents a distinct condition or situation of the system. Examples: 'pending', 'approved', 'rejected' for an order, or 'idle', 'running' for a process.",
                learnMore: { url: "https://statecharts.dev/what-is-a-state-machine.html", text: "📚 State Machine Basics" }
            },
            {
                q: "What triggers a state transition?",
                options: ["A background timer process that runs on a fixed schedule", "An event or condition that causes a change between states", "A network packet arriving at the server input interface", "A database schema migration applied during a deployment"],
                correct: 1,
                explanation: "Transitions are triggered by events (user actions, system events, timeouts). The transition may also have guards (conditions) that must be true to proceed.",
                learnMore: { url: "https://statecharts.dev/what-is-a-state-machine.html", text: "📚 Transitions" }
            },
        ],
        2: [
            {
                q: "What's django-fsm-2 used for?",
                options: ["File system management in Django", "Fast serialization module for Django", "Add state machine behavior to Django models", "Form state management only"],
                correct: 2,
                explanation: "django-fsm-2 adds finite state machine behavior to Django models. Defines allowed transitions, guards, and transition callbacks on model fields.",
                learnMore: { url: "https://github.com/django-commons/django-fsm-2", text: "📚 django-fsm-2" }
            },
            {
                q: "What's a transition guard?",
                options: ["Condition that must be true for transition to occur", "Logging mechanism for transitions", "Security feature preventing unauthorized access", "Backup state before transition happens"],
                correct: 0,
                explanation: "A guard is a boolean condition checked before a transition. If false, the transition is not allowed. Example: can_approve() checks user has permission.",
                learnMore: { url: "https://github.com/django-commons/django-fsm-2#transition-decorators", text: "📚 FSM Guards" }
            },
            {
                q: "Why use state machines for workflow?",
                options: ["Enforce valid transitions and prevent illegal state changes", "Significantly reduce overall application memory consumption", "Improve the execution speed of database query operations", "Increase general code execution performance across modules"],
                correct: 0,
                explanation: "State machines enforce business rules by only allowing defined transitions. Prevents invalid states (e.g., can't ship before payment). Makes workflow logic explicit.",
                learnMore: { url: "https://statecharts.dev/benefits-of-statecharts.html", text: "📚 Benefits" }
            },
        ],
        3: [
            {
                q: "What's the difference between Mealy and Moore machines?",
                options: ["Mealy machines are restricted to hardware design applications only", "Both machine types produce identical behavior in all situations now", "Moore machines are a newer replacement for legacy Mealy definitions", "Mealy outputs depend on state plus input; Moore only on current state"],
                correct: 3,
                explanation: "Moore machine outputs depend only on current state. Mealy machine outputs depend on both state AND current input. Mealy can be more responsive but complex.",
                learnMore: { url: "https://www.geeksforgeeks.org/difference-between-mealy-and-moore-machine/", text: "📚 Mealy vs Moore" }
            },
            {
                q: "How does django-fsm-2 define valid transitions?",
                options: ["An XML configuration file that declares transition mappings", "@transition decorator specifying source and target state values", "Inline comments describing which state changes are permitted", "A database table that stores all allowed transition records"],
                correct: 1,
                explanation: "django-fsm-2 uses @transition decorator on methods. Specifies source state(s), target state, and optional conditions. Method executes transition logic.",
                learnMore: { url: "https://github.com/django-commons/django-fsm-2#usage", text: "📚 FSM Transitions" }
            },
            {
                q: "What's a hierarchical state machine?",
                options: ["Multiple machines running in parallel", "States can contain nested substates", "States sorted by priority level", "Machine with very deep call stack"],
                correct: 1,
                explanation: "Hierarchical (nested) state machines allow states to contain substates. Reduces complexity by grouping related states. Parent state can define shared transitions.",
                learnMore: { url: "https://statecharts.dev/what-is-a-statechart.html", text: "📚 Statecharts" }
            },
            {
                q: "What happens when an invalid transition is attempted?",
                options: ["Every state resets back to the initial one", "The state is left undefined or set to null", "The request is silently ignored by the system", "An exception is raised and nothing changes"],
                correct: 3,
                explanation: "Properly implemented FSM raises an exception for invalid transitions. django-fsm-2 raises TransitionNotAllowed. This protects data integrity.",
                learnMore: { url: "https://github.com/django-commons/django-fsm-2#exceptions", text: "📚 FSM Exceptions" }
            },
        ],
        4: [
            {
                q: "How do you handle side effects in state transitions?",
                options: ["Side effects should never occur in FSM", "Callbacks or hooks executed during transition", "Run them in background thread only", "Store them in separate database table"],
                correct: 1,
                explanation: "Use pre/post transition callbacks. django-fsm-2 supports @transition(on_enter=...) or signals. Callbacks handle notifications, logging, external API calls.",
                learnMore: { url: "https://github.com/django-commons/django-fsm-2#signals", text: "📚 FSM Signals" }
            },
            {
                q: "What's the actor pattern in state machines?",
                options: ["Tracking who performed each transition", "Running machines in parallel actors", "Animated state visualization", "Acting out states for debugging"],
                correct: 0,
                explanation: "Actor pattern records who triggered each transition (user, system). Important for audit trails. django-fsm-2 supports by='field' parameter on transitions.",
                learnMore: { url: "https://github.com/django-commons/django-fsm-2#drawing-transitions", text: "📚 FSM Audit" }
            },
            {
                q: "How do you test state machine behavior?",
                options: ["Test valid transitions and verify invalid ones are properly rejected", "Only assert that the final end states match expected output values", "Only verify the expected happy path transitions succeed correctly", "Skip all testing because FSM logic is inherently declarative code"],
                correct: 0,
                explanation: "Test each valid transition, verify guards work, confirm invalid transitions raise errors, test callbacks execute. State machines need comprehensive testing.",
                learnMore: { url: "https://statecharts.dev/how-to-use-statecharts.html#testing", text: "📚 Testing FSM" }
            },
            {
                q: "What's a state machine diagram?",
                options: ["A visual representation of states and transitions between them", "A database schema layout that represents state storage", "A network topology map showing connection relationships", "A UML class diagram variant for object-oriented design"],
                correct: 0,
                explanation: "State machine diagrams (statecharts) visually show states as nodes, transitions as arrows with labels. Essential for documenting and communicating workflows.",
                learnMore: { url: "https://statecharts.dev/how-to-use-statecharts.html#diagrams", text: "📚 State Diagrams" }
            },
        ],
        5: [
            {
                q: "How do you handle concurrent state machines?",
                options: ["Concurrency is ignored since it rarely occurs in real applications", "Parallel regions or separate machines with synchronization points", "A single global state machine that manages all system components", "Concurrent execution is unsupported by state machine formalisms"],
                correct: 1,
                explanation: "Concurrent state machines use parallel regions (orthogonal states) or separate machines with synchronization points. Handle with care for consistency.",
                learnMore: { url: "https://statecharts.dev/glossary/parallel-state.html", text: "📚 Parallel States" }
            },
            {
                q: "What's event sourcing with state machines?",
                options: ["Events and transitions are interchangeable equivalent concepts", "Delete historical events immediately after each state changes", "Store all transition events and replay them to rebuild state", "Store only the latest current state and discard past history"],
                correct: 2,
                explanation: "Event sourcing stores all transition events rather than current state. Current state is computed by replaying events. Provides complete audit trail and time-travel.",
                learnMore: { url: "https://martinfowler.com/eaaDev/EventSourcing.html", text: "📚 Event Sourcing" }
            },
            {
                q: "How do you migrate state machine definitions?",
                options: ["State machine definitions are immutable and cannot be migrated", "Add new states first, then migrate existing data, then remove old", "Change the source code directly and redeploy the application", "Delete all existing data and rebuild the state machine fresh"],
                correct: 1,
                explanation: "Migrate carefully: add new states/transitions, migrate existing data, remove old states. Ensure no data is in removed states. Test thoroughly.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/migrations/", text: "📚 Data Migrations" }
            },
            {
                q: "What's the difference between internal and external transitions?",
                options: ["External stays put; internal exits and re-enters", "They are naming conventions with no difference", "Internal transitions are simply private methods", "Internal stays put; external exits and re-enters"],
                correct: 3,
                explanation: "Internal transitions execute without exiting the state (no exit/entry actions). External transitions exit current state and enter target (even if same state).",
                learnMore: { url: "https://statecharts.dev/glossary/internal-transition.html", text: "📚 Internal Transitions" }
            },
            {
                q: "How do state machines integrate with saga pattern?",
                options: ["State machines are unable to handle long-running transactions", "Each saga step maps to a state; failures trigger compensation", "The saga pattern is only applicable within microservice systems", "Sagas completely replace the need for state machine management"],
                correct: 1,
                explanation: "Saga pattern uses state machine to track long-running transactions. Each step is a state. Failure triggers compensating transitions to rollback completed steps.",
                learnMore: { url: "https://microservices.io/patterns/data/saga.html", text: "📚 Saga Pattern" }
            },
        ]
    },

    'f-concurrency': {
        1: [
            {
                q: "What is concurrency in programming?",
                options: ["Writing application code using multiple languages", "Automatically running code faster with no changes", "Multiple tasks making progress in overlapping time", "Using multiple display monitors at the same time"],
                correct: 2,
                explanation: "Concurrency is handling multiple tasks that overlap in time. Tasks may not run simultaneously but progress is interleaved. Enables responsive applications.",
                learnMore: { url: "https://realpython.com/python-concurrency/", text: "📚 Python Concurrency" }
            },
            {
                q: "What's the difference between concurrency and parallelism?",
                options: ["Concurrency requires multiple CPUs; parallelism does not", "Both describe simultaneous execution on multiple processors", "Parallelism is about structure; concurrency is execution", "Concurrency is structure; parallelism is simultaneous execution"],
                correct: 3,
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
                options: ["A mechanism only for asynchronous database queries", "A way to make all Python code run measurably faster", "Syntax for writing coroutines that await results", "A testing framework aimed at concurrent programs"],
                correct: 2,
                explanation: "async/await is Python syntax for coroutines. async defines a coroutine function, await pauses until the awaited coroutine completes. Uses asyncio event loop.",
                learnMore: { url: "https://realpython.com/async-io-python/", text: "📚 Async IO" }
            },
            {
                q: "What's Python's Global Interpreter Lock (GIL)?",
                options: ["A licence key required to distribute Python", "A mutex preventing parallel bytecode in CPython", "A security feature that locks global variables", "A memory protection layer between interpreters"],
                correct: 1,
                explanation: "The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. Limits CPU-bound parallelism but I/O-bound works fine. Python 3.13+ offers a free-threaded build without the GIL.",
                learnMore: { url: "https://realpython.com/python-gil/", text: "📚 Python GIL" }
            },
            {
                q: "When should you use threading vs asyncio?",
                options: ["Threading for event loops; asyncio for parallel threads", "Asyncio for I/O-bound; threading for blocking libraries", "Threading for I/O-bound; asyncio for CPU-bound tasks", "Asyncio for CPU-bound; threading for network-bound tasks"],
                correct: 1,
                explanation: "Use asyncio for I/O-bound tasks with async libraries. Use threading when calling blocking/synchronous libraries. For CPU-bound tasks, use multiprocessing or free-threaded Python (3.13+).",
                learnMore: { url: "https://realpython.com/python-concurrency/#when-to-use-which", text: "📚 Concurrency Guide" }
            },
        ],
        3: [
            {
                q: "What is a race condition?",
                options: ["Bug when outcome depends on timing of concurrent operations", "Error when a thread exceeds its allotted CPU time", "Deadlock caused by two threads waiting on each other", "Condition where a thread blocks another indefinitely"],
                correct: 0,
                explanation: "Race condition occurs when multiple threads access shared data and outcome depends on execution order. Can cause data corruption, crashes, security vulnerabilities.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/#race-conditions", text: "📚 Race Conditions" }
            },
            {
                q: "What is a mutex (lock)?",
                options: ["A memory allocation technique that improves speed", "A primitive giving one thread exclusive access", "A handler that silently swallows raised exceptions", "A database construct used only inside transactions"],
                correct: 1,
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
                options: ["Code that prevents threads from running concurrently", "Code callable from multiple threads without corruption", "Code that runs only on a single thread at a time", "Code that uses locks on every function internally"],
                correct: 1,
                explanation: "Thread-safe code can be executed by multiple threads concurrently without race conditions or data corruption. Uses proper synchronization or immutable data.",
                learnMore: { url: "https://docs.python.org/3/glossary.html#term-thread-safe", text: "📚 Thread Safety" }
            },
        ],
        4: [
            {
                q: "What is a semaphore?",
                options: ["A barrier blocking until all threads arrive", "A counter allowing N threads through at once", "A binary flag allowing just one thread in", "A lock that queues threads by their priority"],
                correct: 1,
                explanation: "Semaphore is a synchronization primitive with a counter. Allows up to N threads to access a resource. Used for connection pools, rate limiting, bounded buffers.",
                learnMore: { url: "https://docs.python.org/3/library/threading.html#semaphore-objects", text: "📚 Semaphores" }
            },
            {
                q: "What is a thread pool?",
                options: ["Memory pool shared between threads", "Collection of thread documentation files", "Group of threads that must finish together", "Pre-created threads reused for multiple tasks"],
                correct: 3,
                explanation: "Thread pool maintains pre-created threads that execute tasks from a queue. Avoids overhead of creating/destroying threads. Python's concurrent.futures provides ThreadPoolExecutor.",
                learnMore: { url: "https://docs.python.org/3/library/concurrent.futures.html#threadpoolexecutor", text: "📚 Thread Pool" }
            },
            {
                q: "What's the producer-consumer pattern?",
                options: ["Consumer threads spawn the producer threads in turn", "Producers add to a queue, consumers take from it", "A pattern used only for user interface design", "One thread produces and performs all of the work"],
                correct: 1,
                explanation: "Producer-consumer uses a shared queue. Producer threads add items, consumer threads process them. Queue handles synchronization. Common in task pipelines.",
                learnMore: { url: "https://realpython.com/intro-to-python-threading/#producer-consumer-using-queue", text: "📚 Producer-Consumer" }
            },
            {
                q: "How do you handle exceptions in async code?",
                options: ["Exceptions propagate automatically without special handling", "try/except around await; or gather with return_exceptions", "Wrap the entire event loop in a single try/except block", "Register a callback that catches errors after completion"],
                correct: 1,
                explanation: "Use try/except around await calls. For gather(), use return_exceptions=True to collect exceptions. Unhandled exceptions in tasks may be silently lost.",
                learnMore: { url: "https://docs.python.org/3/library/asyncio-task.html#asyncio.gather", text: "📚 Async Exceptions" }
            },
        ],
        5: [
            {
                q: "What is the actor model?",
                options: ["Concurrency model where actors communicate via messages only", "Model where shared memory is divided among threads", "Pattern where processes share a global mutable state", "Model where workers pull tasks from a shared queue"],
                correct: 0,
                explanation: "Actor model has isolated actors that communicate only via async messages. No shared state. Each actor processes messages sequentially. Erlang, Akka implement this.",
                learnMore: { url: "https://www.brianstorti.com/the-actor-model/", text: "📚 Actor Model" }
            },
            {
                q: "What's optimistic vs pessimistic locking?",
                options: ["Pessimistic checks at commit; optimistic locks immediately", "Optimistic locks the row first; pessimistic uses versioning", "Optimistic checks at commit time; pessimistic locks upfront", "Optimistic uses timeouts; pessimistic uses retry loops"],
                correct: 2,
                explanation: "Pessimistic locking acquires lock before reading/writing. Optimistic assumes no conflict, checks version at commit. Optimistic better for low contention.",
                learnMore: { url: "https://www.baeldung.com/cs/optimistic-vs-pessimistic-locking", text: "📚 Locking Strategies" }
            },
            {
                q: "What's a coroutine?",
                options: ["Routine that runs on multiple cores", "Core library routine for threading", "Function that can suspend and resume execution", "Cooperative routine between processes"],
                correct: 2,
                explanation: "Coroutine is a function that can suspend (yield) and resume later from where it stopped. Enables cooperative multitasking. In Python, defined with async def.",
                learnMore: { url: "https://docs.python.org/3/library/asyncio-task.html#coroutines", text: "📚 Coroutines" }
            },
            {
                q: "How does multiprocessing bypass the GIL?",
                options: ["Uses special GIL-free bytecode", "Runs threads in native code only", "Multiprocessing doesn't exist in Python", "Separate processes with own Python interpreter"],
                correct: 3,
                explanation: "multiprocessing spawns separate processes, each with own Python interpreter and GIL. True parallelism but higher overhead (IPC, memory copy). Good for CPU-bound. Alternative: free-threaded Python (3.13+) disables the GIL entirely.",
                learnMore: { url: "https://docs.python.org/3/library/multiprocessing.html", text: "📚 Multiprocessing" }
            },
            {
                q: "What's the difference between asyncio.create_task and asyncio.gather?",
                options: ["gather schedules one; create_task awaits several", "They are aliases for exactly the same function", "create_task is deprecated in favour of gather", "create_task schedules one; gather awaits several"],
                correct: 3,
                explanation: "create_task() schedules a single coroutine to run soon. gather() runs multiple coroutines concurrently and waits for all to complete. gather returns results in order.",
                learnMore: { url: "https://docs.python.org/3/library/asyncio-task.html", text: "📚 Asyncio Tasks" }
            },
        ]
    },

    'f-immutability': {
        1: [
            {
                q: "What does 'immutable' mean in programming?",
                options: ["Can be changed by any function", "Stored permanently on disk", "Protected from network access", "Cannot be changed after creation"],
                correct: 3,
                explanation: "Immutable data cannot be modified after creation. Any 'change' creates a new object. Examples: strings in Python/Java, frozen objects in JavaScript.",
                learnMore: { url: "https://realpython.com/python-mutable-vs-immutable-types/", text: "📚 Mutable vs Immutable" }
            },
            {
                q: "Which Python type is immutable?",
                options: ["tuple - cannot be modified after creation", "dict - supports item assignment", "set - allows adding and removing", "list - can be modified easily"],
                correct: 0,
                explanation: "Python tuples are immutable - elements can't be added, removed, or changed. Lists, dicts, and sets are mutable. Strings and numbers are also immutable.",
                learnMore: { url: "https://docs.python.org/3/library/stdtypes.html#tuple", text: "📚 Python Tuples" }
            },
            {
                q: "Why is immutability useful?",
                options: ["Makes programs run much faster", "Only useful in functional languages", "Required by all programming languages", "Prevents unexpected changes and bugs"],
                correct: 3,
                explanation: "Immutability prevents accidental modification, makes code easier to reason about, enables safe sharing between threads, and helps with debugging.",
                learnMore: { url: "https://realpython.com/lessons/why-use-immutable-types/", text: "📚 Benefits of Immutability" }
            },
        ],
        2: [
            {
                q: "What is a pure function?",
                options: ["A function that never returns any value at all", "A function that takes no parameters at all", "Same input gives same output, with no side effects", "A function written only in standard Python"],
                correct: 2,
                explanation: "Pure function has no side effects (doesn't modify external state) and is deterministic (same inputs always produce same output). Easier to test and reason about.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Pure_function", text: "📚 Pure Functions" }
            },
            {
                q: "What's a side effect in programming?",
                options: ["Creating local variables inside", "Passing parameters to function", "Modifying state outside function scope", "Returning a value from function"],
                correct: 2,
                explanation: "Side effects include modifying global variables, I/O operations, database writes, mutating input arguments. Pure functions avoid side effects.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Side_effect_(computer_science)", text: "📚 Side Effects" }
            },
            {
                q: "How do you update an immutable data structure?",
                options: ["Create new structure with desired changes", "Immutable data cannot be updated ever", "Cast to mutable type temporarily", "Use special mutation methods built in"],
                correct: 0,
                explanation: "Create a new structure containing the changes. For efficiency, implementations often share unchanged parts (structural sharing). Original remains unchanged.",
                learnMore: { url: "https://immutable-js.com/", text: "📚 Immutable.js" }
            },
        ],
        3: [
            {
                q: "What's structural sharing?",
                options: ["Sharing code structure between source files", "New immutable objects reuse unchanged parts", "Sharing memory directly between two threads", "Sharing one schema between database tables"],
                correct: 1,
                explanation: "Structural sharing reuses unchanged parts when creating modified immutable structures. Only changed paths are new. Makes immutable updates efficient (O(log n) typically).",
                learnMore: { url: "https://hypirion.com/musings/understanding-persistent-vector-pt-1", text: "📚 Structural Sharing" }
            },
            {
                q: "What's a frozen object in JavaScript?",
                options: ["Object that freezes browser execution", "Object that runs slower than normal", "Object that cannot have properties changed", "Object stored in cold storage cache"],
                correct: 2,
                explanation: "Object.freeze() makes an object shallowly immutable. Properties can't be added, removed, or changed. Nested objects must be frozen separately for deep immutability.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze", text: "📚 Object.freeze()" }
            },
            {
                q: "What's the relationship between immutability and hashing?",
                options: ["Hashing requires mutable state always", "No relationship between them at all", "Immutable objects can have consistent hash values", "Mutable objects have better hash functions"],
                correct: 2,
                explanation: "Immutable objects can be safely hashed because their value won't change. Mutable objects can't be reliably used as dictionary keys since hash could change.",
                learnMore: { url: "https://docs.python.org/3/glossary.html#term-hashable", text: "📚 Hashable Objects" }
            },
            {
                q: "How does Python's @dataclass(frozen=True) work?",
                options: ["It blocks attribute assignment after creation", "It caches every method's return value forever", "It freezes the class definition at import time", "It prevents the class from being collected"],
                correct: 0,
                explanation: "frozen=True makes dataclass instances immutable. Attempting to set attributes raises FrozenInstanceError. Also makes instances hashable for use in sets/dicts.",
                learnMore: { url: "https://docs.python.org/3/library/dataclasses.html#frozen-instances", text: "📚 Frozen Dataclasses" }
            },
        ],
        4: [
            {
                q: "What's referential transparency?",
                options: ["Variables are transparently passed between function scopes", "References to objects can be inspected at any program point", "Function always returns a new reference to the same object", "Expression can be replaced with its value without changing behavior"],
                correct: 3,
                explanation: "Referentially transparent expressions can be substituted with their values without changing program behavior. Key property of pure functions. Enables safe refactoring.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Referential_transparency", text: "📚 Referential Transparency" }
            },
            {
                q: "Why is immutability important for concurrent programming?",
                options: ["Mutexes automatically protect immutable data", "Concurrent programs can't use immutable data", "No synchronization needed for read-only shared data", "Immutable data can only exist in single thread"],
                correct: 2,
                explanation: "Immutable data can be safely shared between threads without locks or synchronization. Race conditions require mutable shared state. Immutability eliminates a class of bugs.",
                learnMore: { url: "https://www.baeldung.com/java-immutable-object", text: "📚 Immutability and Threads" }
            },
            {
                q: "What's copy-on-write (COW)?",
                options: ["Never copy data just reference it", "Write copies to multiple locations", "Delay copying until modification is needed", "Copy data when writing to disk"],
                correct: 2,
                explanation: "Copy-on-write defers copying until data is actually modified. Multiple references share data until one modifies it. Efficient for rarely-modified large data.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Copy-on-write", text: "📚 Copy-on-Write" }
            },
            {
                q: "What's persistent data structure?",
                options: ["Structure that serializes data for network transmission", "Structure that caches computed results for faster access", "Previous versions remain accessible after modification", "Structure that compresses data to save memory space"],
                correct: 2,
                explanation: "Persistent data structures preserve previous versions when modified. New version shares structure with old via structural sharing. Enables efficient undo, time-travel.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Persistent_data_structure", text: "📚 Persistent Data Structures" }
            },
        ],
        5: [
            {
                q: "What's the difference between defensive copying and immutability?",
                options: ["Defensive copying prevents writes; immutability prevents reads", "Immutability copies on access; defensive copying freezes state", "Defensive copying locks the object; immutability uses cloning", "Defensive copies on every access; immutable needs no copying"],
                correct: 3,
                explanation: "Defensive copying makes copies when passing/returning to prevent unwanted modification. Immutable data doesn't need copies since it can't be modified. Immutability is more efficient.",
                learnMore: { url: "https://wiki.c2.com/?DefensiveCopy", text: "📚 Defensive Copying" }
            },
            {
                q: "How does Immer.js achieve immutability?",
                options: ["Proxy objects track changes then produce an immutable result", "Freezes objects deeply then clones on every access", "Wraps all values in read-only WeakRef containers", "Compiles code at build time to remove all mutations"],
                correct: 0,
                explanation: "Immer uses JavaScript Proxy to track mutations to a draft. After mutations, produces new immutable state with structural sharing. 'Write mutable code, get immutable data.'",
                learnMore: { url: "https://immerjs.github.io/immer/", text: "📚 Immer.js" }
            },
            {
                q: "What's value semantics vs reference semantics?",
                options: ["Value: equality by location; Reference: equality by content", "Value: equality by content; Reference: equality by identity", "Value: shared mutable state; Reference: independent copies", "Value: identity comparison; Reference: structural comparison"],
                correct: 1,
                explanation: "Value semantics: objects are equal if contents are equal, copies are independent. Reference semantics: equality is identity, copies share data. Immutability enables value semantics.",
                learnMore: { url: "https://isocpp.org/wiki/faq/value-vs-ref-semantics", text: "📚 Value Semantics" }
            },
            {
                q: "How do functional languages optimize immutable operations?",
                options: ["Structural sharing, lazy evaluation, and tail call optimization", "Compile-time conversion of immutable types to mutable ones", "Garbage collection tuned specifically for short-lived objects", "Copy-on-write semantics with mutable internal buffers"],
                correct: 0,
                explanation: "Functional languages use structural sharing (share unchanged parts), lazy evaluation (compute only when needed), and tail call optimization (reuse stack frames).",
                learnMore: { url: "https://www.haskell.org/", text: "📚 Haskell" }
            },
            {
                q: "What's the trade-off of immutability?",
                options: ["Immutable code is always slower in every case", "More allocation, but safer sharing across threads", "Immutable data always uses less memory than mutable", "There is no trade-off; it is always the better choice"],
                correct: 1,
                explanation: "Immutability trades increased memory allocation for safety, easier reasoning, thread safety, and debugging. With structural sharing, overhead is often minimal.",
                learnMore: { url: "https://www.yegor256.com/2014/06/09/objects-should-be-immutable.html", text: "📚 Immutability Trade-offs" }
            },
        ]
    },

    'f-type-systems': {
        1: [
            {
                q: "What is static typing?",
                options: ["Type checking at compile time before running", "Typing speed of the programmer", "Types that don't change during execution", "Types stored in static variables only"],
                correct: 0,
                explanation: "Static typing checks types at compile time. Errors caught before running code. Examples: Java, TypeScript, Go. Contrasts with dynamic typing (checked at runtime).",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html", text: "📚 TypeScript Types" }
            },
            {
                q: "What is dynamic typing?",
                options: ["Fast typing on keyboard rapidly", "Types stored in dynamic variables", "Type checking at runtime when code executes", "Types that change based on user input"],
                correct: 2,
                explanation: "Dynamic typing checks types at runtime. More flexible but errors only found when code runs. Examples: Python, JavaScript, Ruby.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Dynamic_typing", text: "📚 Dynamic Typing" }
            },
            {
                q: "What is TypeScript?",
                options: ["Microsoft's replacement for JavaScript", "Type-focused templating language", "JavaScript with static type annotations", "A new programming language from scratch"],
                correct: 2,
                explanation: "TypeScript adds optional static types to JavaScript. Compiles to plain JavaScript. Catches type errors at compile time. Widely used in large codebases.",
                learnMore: { url: "https://www.typescriptlang.org/", text: "📚 TypeScript" }
            },
        ],
        2: [
            {
                q: "What are Python type hints?",
                options: ["A separate type language embedded inside Python docstrings", "Optional type annotations for better tooling and documentation", "Mandatory type declarations enforced at runtime by Python", "Compiled type checks that prevent code from running if wrong"],
                correct: 1,
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
                options: ["Type information stored in database", "Developer manually writes all type annotations", "Compiler automatically determines types from context", "Types are randomly assigned by compiler"],
                correct: 2,
                explanation: "Type inference lets compiler deduce types from code context. 'let x = 5' infers x is number. Reduces annotation noise while keeping type safety.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/type-inference.html", text: "📚 Type Inference" }
            },
        ],
        3: [
            {
                q: "What are generics in type systems?",
                options: ["Types parameterised by other types for reuse", "Brand-name types as opposed to generic ones", "Functions that accept absolutely any input", "Types that are deliberately loose and general"],
                correct: 0,
                explanation: "Generics allow types to be parameterized. Array<T> works for any type T. Enables reusable, type-safe code. Called generics (Java/TS) or parametric polymorphism (FP).",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/generics.html", text: "📚 TypeScript Generics" }
            },
            {
                q: "What's a union type?",
                options: ["Database union operation type", "Value can be one of several specified types", "Combining multiple values into one", "Type that includes all possible values"],
                correct: 1,
                explanation: "Union type (A | B) means value is either type A or type B. Must handle all possibilities. Example: string | number accepts either strings or numbers.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types", text: "📚 Union Types" }
            },
            {
                q: "What's type narrowing?",
                options: ["Reducing how many types a codebase declares", "Making a type occupy less memory at runtime", "Refining a type to a more specific one by checks", "Converting a value into a narrower type by cast"],
                correct: 2,
                explanation: "Type narrowing refines a type based on control flow. After 'if (typeof x === 'string')', TypeScript knows x is string inside the block. Enables safe operations.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", text: "📚 Type Narrowing" }
            },
            {
                q: "What's the difference between interface and type in TypeScript?",
                options: ["Type supports extension via inheritance; interface does not", "Interface handles only primitive types; type handles objects", "Interface is extendable; type is more flexible with unions", "Type is for object shapes only; interface handles all types"],
                correct: 2,
                explanation: "Interfaces can be extended/merged and are good for objects. Type aliases are more flexible (unions, tuples, primitives). Both work for object shapes.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces", text: "📚 Interface vs Type" }
            },
        ],
        4: [
            {
                q: "What's structural typing vs nominal typing?",
                options: ["Nominal: compatible if same shape; Structural: same named type", "Structural: compatible if same shape; Nominal: must be same named type", "Nominal: uses duck typing for compatibility; Structural: uses names", "Structural: must share the same declared name to be compatible"],
                correct: 1,
                explanation: "Structural typing (TypeScript, Go interfaces) checks shape/structure. Nominal typing (Java, C#) requires explicit type declaration. {name: string} compatible with any matching shape in TS.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/type-compatibility.html", text: "📚 Type Compatibility" }
            },
            {
                q: "What's a discriminated union?",
                options: ["Union where all members must implement a common interface", "Union that narrows types based on runtime typeof checks", "Union that restricts members to only primitive type values", "Union with shared literal property to distinguish variants"],
                correct: 3,
                explanation: "Discriminated unions use a common literal property (discriminant) to distinguish variants. type Shape = {kind: 'circle', r} | {kind: 'square', side}. Switch on 'kind'.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions", text: "📚 Discriminated Unions" }
            },
            {
                q: "What are type guards?",
                options: ["Guards that prevent any type being assigned", "Security features that protect type metadata", "Functions narrowing a type by a runtime check", "Type annotations written on guard statements"],
                correct: 2,
                explanation: "Type guards are functions returning boolean that narrow types. 'function isString(x): x is string' tells TypeScript x is string when function returns true.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates", text: "📚 Type Guards" }
            },
            {
                q: "What's mypy used for?",
                options: ["My personal Python interpreter", "Memory profiler for Python", "Static type checker for Python code", "Python testing framework for types"],
                correct: 2,
                explanation: "mypy is a static type checker for Python. Analyzes type hints without running code. Catches type errors, enforces annotations. CI integration common.",
                learnMore: { url: "https://mypy.readthedocs.io/", text: "📚 mypy" }
            },
        ],
        5: [
            {
                q: "What's covariance and contravariance?",
                options: ["How subtyping applies to type parameters", "Two different variable naming conventions", "Co-located versus contra-located source code", "Variance measured in code coverage figures"],
                correct: 0,
                explanation: "Covariance: if A extends B, Container<A> extends Container<B> (output position). Contravariance: opposite (input position). Invariant: neither. Affects type safety.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/generics.html#variance-annotations", text: "📚 Variance" }
            },
            {
                q: "What are conditional types in TypeScript?",
                options: ["Types that depend on type conditions: T extends U ? X : Y", "Types inferred from conditional expressions in assignments", "Types that only apply inside if/else conditional blocks", "Types that narrow automatically based on control flow"],
                correct: 0,
                explanation: "Conditional types: T extends U ? X : Y. If T assignable to U, type is X, else Y. Enables powerful type transformations. Used in utility types like Exclude, Extract.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html", text: "📚 Conditional Types" }
            },
            {
                q: "What's the infer keyword in TypeScript?",
                options: ["Internal type system keyword only", "Infer types automatically everywhere", "Extract type from within conditional type", "Inference engine initialization keyword"],
                correct: 2,
                explanation: "infer declares a type variable within conditional type to extract a component. ReturnType<T> uses 'T extends (...) => infer R ? R : never' to extract return type.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types", text: "📚 Infer Keyword" }
            },
            {
                q: "What's Protocol in Python typing?",
                options: ["Abstract base class requiring explicit inheritance to match", "Runtime type checking interface using isinstance validation", "Generic type alias that maps method signatures to classes", "Structural subtyping defining expected methods and attributes"],
                correct: 3,
                explanation: "Protocol (typing.Protocol) enables structural subtyping in Python. Class is subtype if it has required methods/attributes. Duck typing with type checking.",
                learnMore: { url: "https://docs.python.org/3/library/typing.html#typing.Protocol", text: "📚 Python Protocol" }
            },
            {
                q: "What's the Liskov Substitution Principle in typing?",
                options: ["Substitution of variables is type-checked", "Types should have unique names globally", "Subtypes must be substitutable for their base types", "List types should be substituted with arrays"],
                correct: 2,
                explanation: "LSP: if S is subtype of T, S should be usable wherever T is expected without breaking program. Violated if subtype changes behavior. Core OOP principle.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Liskov_substitution_principle", text: "📚 Liskov Principle" }
            },
        ]
    },

    'f-memory-perf': {
        1: [
            {
                q: "What is RAM in computing?",
                options: ["Fast temporary storage for running programs", "Graphics memory for displays only", "Network memory for data transfer", "Permanent storage like hard drives"],
                correct: 0,
                explanation: "RAM (Random Access Memory) is fast, temporary storage. Programs and data load into RAM for quick CPU access. Lost when power off. Faster than disk, slower than CPU cache.",
                learnMore: { url: "https://www.howtogeek.com/791/what-is-ram-and-how-much-memory-do-you-need/", text: "📚 What is RAM" }
            },
            {
                q: "What is memory allocation?",
                options: ["Deleting memory that's not needed", "Sending memory to other computers", "Measuring total available memory", "Reserving memory space for data or objects"],
                correct: 3,
                explanation: "Memory allocation reserves space in RAM for variables, objects, arrays. Can be static (compile time) or dynamic (runtime). Deallocation frees memory when no longer needed.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memory_management", text: "📚 Memory Management" }
            },
            {
                q: "What is garbage collection?",
                options: ["Removing bugs from programs", "Automatic reclaiming of unused memory", "Cleaning up unused code comments", "Deleting files from hard drive"],
                correct: 1,
                explanation: "Garbage collection (GC) automatically frees memory that's no longer referenced. Python, Java, JavaScript use GC. Removes burden of manual deallocation.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)", text: "📚 Garbage Collection" }
            },
        ],
        2: [
            {
                q: "What is a memory leak?",
                options: ["Memory hardware that's physically damaged", "Memory that runs slower over time", "Memory that's allocated but never freed", "Confidential data escaping to hackers"],
                correct: 2,
                explanation: "Memory leak occurs when memory is allocated but never released. Program's memory usage grows continuously. Eventually causes slowdown or crash. Common in long-running apps.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memory_leak", text: "📚 Memory Leaks" }
            },
            {
                q: "What is lazy loading?",
                options: ["Defer loading until actually needed", "Background loading while user waits", "A programmer who doesn't load data", "Loading data very slowly on purpose"],
                correct: 0,
                explanation: "Lazy loading defers loading resources until they're needed. Load images when scrolled into view, load modules on first use. Improves initial load time.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading", text: "📚 Lazy Loading" }
            },
            {
                q: "What is memoization?",
                options: ["Memorising syntax for a certification exam", "Caching results so a call is not recomputed", "Writing memos describing what functions do", "A technique that only optimises memory use"],
                correct: 1,
                explanation: "Memoization caches function results based on inputs. If called with same arguments, returns cached result. Effective for expensive pure functions. Trade memory for speed.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memoization", text: "📚 Memoization" }
            },
        ],
        3: [
            {
                q: "What is a CPU cache?",
                options: ["Hidden CPU processing cycles", "Fast memory between CPU and RAM", "CPU instructions stored on disk", "Backup storage for CPU data"],
                correct: 1,
                explanation: "CPU cache (L1, L2, L3) is extremely fast memory on/near CPU. Stores frequently accessed data. Cache hits are fast; misses require slower RAM access.",
                learnMore: { url: "https://www.extremetech.com/extreme/188776-how-l1-and-l2-cpu-caches-work-and-why-theyre-an-essential-part-of-modern-chips", text: "📚 CPU Cache" }
            },
            {
                q: "What's the difference between stack and heap memory?",
                options: ["Heap is automatic and LIFO; stack is dynamic", "They are the same region under two names", "Stack is automatic and LIFO; heap is dynamic", "The stack is slower than the heap to access"],
                correct: 2,
                explanation: "Stack: automatic, LIFO, fast, limited size, for local variables. Heap: dynamic allocation, larger, slower, needs explicit free or GC. Objects typically on heap.",
                learnMore: { url: "https://www.geeksforgeeks.org/stack-vs-heap-memory-allocation/", text: "📚 Stack vs Heap" }
            },
            {
                q: "What is memory profiling?",
                options: ["Measuring memory usage to find issues", "Comparing memory between computers", "Writing memory specifications document", "Protecting memory from unauthorized access"],
                correct: 0,
                explanation: "Memory profiling measures memory usage over time. Identifies leaks, high usage, allocation patterns. Tools: memory_profiler (Python), Chrome DevTools, Valgrind.",
                learnMore: { url: "https://pypi.org/project/memory-profiler/", text: "📚 memory_profiler" }
            },
            {
                q: "What does O(1) space complexity mean?",
                options: ["One byte of memory used total", "Memory grows linearly with input", "Constant memory regardless of input size", "No memory used at all ever"],
                correct: 2,
                explanation: "O(1) space complexity means memory usage doesn't grow with input size. Algorithm uses fixed amount of memory. O(n) would grow proportionally with input.",
                learnMore: { url: "https://www.geeksforgeeks.org/g-fact-86/", text: "📚 Space Complexity" }
            },
        ],
        4: [
            {
                q: "What is memory fragmentation?",
                options: ["Memory that works in fragments only", "Fragmented files in memory system", "Free memory split into small unusable chunks", "Memory breaking into fragments physically"],
                correct: 2,
                explanation: "Fragmentation occurs when free memory is split into small, non-contiguous blocks. Large allocations may fail even with enough total free space. Defragmentation helps.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Fragmentation_(computing)", text: "📚 Memory Fragmentation" }
            },
            {
                q: "What's the purpose of memory pooling?",
                options: ["Pool memory from multiple machines", "Cooling memory with water pooling", "Pre-allocate and reuse memory blocks", "Shared memory between processes"],
                correct: 2,
                explanation: "Memory pooling pre-allocates blocks and reuses them. Avoids allocation/deallocation overhead. Reduces fragmentation. Common for frequently created/destroyed objects.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Memory_pool", text: "📚 Memory Pooling" }
            },
            {
                q: "What's cache locality?",
                options: ["Distributing cache across multiple geographic locations", "Keeping cached data close to the application web server", "Storing frequently used data in a local cache server", "Accessing nearby memory locations for CPU cache efficiency"],
                correct: 3,
                explanation: "Cache locality: accessing memory sequentially or nearby (spatial locality), or recently accessed (temporal locality). Improves cache hit rate. Arrays better than linked lists.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Locality_of_reference", text: "📚 Cache Locality" }
            },
            {
                q: "What's a weak reference?",
                options: ["A reference that is slower than a strong one", "A reference that may become null at any moment", "A reference used in weakly-typed languages only", "A reference that does not prevent collection"],
                correct: 3,
                explanation: "Weak reference doesn't prevent object from being garbage collected. Useful for caches: object stays if other refs exist, can be collected if only weak refs remain.",
                learnMore: { url: "https://docs.python.org/3/library/weakref.html", text: "📚 Python weakref" }
            },
        ],
        5: [
            {
                q: "What's virtual memory?",
                options: ["Simulated memory for testing", "Using disk as extension of RAM", "Memory that doesn't physically exist", "Memory in virtual machines only"],
                correct: 1,
                explanation: "Virtual memory uses disk to extend available RAM. OS swaps pages between RAM and disk. Enables running programs larger than physical RAM. Disk access is slow though.",
                learnMore: { url: "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/", text: "📚 Virtual Memory" }
            },
            {
                q: "What's a memory-mapped file?",
                options: ["A file mapped into the process address space", "A file kept in RAM instead of on the disk", "A file containing a dump of process memory", "A description of the memory layout on disk"],
                correct: 0,
                explanation: "Memory-mapped files map file contents to memory addresses. Access file like memory array. OS handles reading/writing pages. Efficient for large files, shared memory.",
                learnMore: { url: "https://docs.python.org/3/library/mmap.html", text: "📚 Python mmap" }
            },
            {
                q: "What's copy-on-write in memory management?",
                options: ["Copy-paste operations in memory", "Write operations copy to backup", "Copy all memory before writing", "Share pages until one is modified"],
                correct: 3,
                explanation: "Copy-on-write shares memory pages between processes until one modifies. Only then is page copied. Efficient for fork(): child shares parent pages until writes.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Copy-on-write", text: "📚 Copy-on-Write" }
            },
            {
                q: "How do you identify memory bottlenecks?",
                options: ["Review source code for functions with high cyclomatic complexity", "Run load tests and compare response times under stress", "Profile memory usage, check cache misses, analyze allocations", "Monitor CPU utilization and correlate with thread counts"],
                correct: 2,
                explanation: "Use profilers (Valgrind, memory_profiler), check cache miss rates, analyze allocation patterns, monitor GC pauses, review data structure choices. Often cache locality issue.",
                learnMore: { url: "https://www.brendangregg.com/FlameGraphs/memoryflamegraphs.html", text: "📚 Memory Profiling" }
            },
            {
                q: "What's NUMA in high-performance computing?",
                options: ["New Unified Memory Architecture for multi-core processors", "Network-based Unified Memory Access across cluster nodes", "Non-Uniform Memory Access where speed varies by location", "Node-level Unified Memory Allocation for shared segments"],
                correct: 2,
                explanation: "NUMA: Non-Uniform Memory Access. In multi-CPU systems, memory attached to different CPUs has different access times. Local memory faster. Important for HPC optimization.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Non-uniform_memory_access", text: "📚 NUMA" }
            },
        ]
    },

    'f-security-basics': {
        1: [
            {
                q: "What is authentication?",
                options: ["Encrypting user data securely", "Logging user activity for audit", "Verifying who the user is", "Determining what user can access"],
                correct: 2,
                explanation: "Authentication verifies identity (who are you?). Methods: passwords, biometrics, tokens. Different from authorization (what can you do?).",
                learnMore: { url: "https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization", text: "📚 Auth Fundamentals" }
            },
            {
                q: "What is authorization?",
                options: ["Encrypting user passwords securely", "Creating new user accounts", "Verifying the user's identity", "Determining what user can access or do"],
                correct: 3,
                explanation: "Authorization determines permissions (what can you do?). After authentication, system checks if user is authorized for requested action. RBAC is common pattern.",
                learnMore: { url: "https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization", text: "📚 Authorization" }
            },
            {
                q: "What is HTTPS?",
                options: ["HTTP with encryption via TLS", "HTTP for hosting websites only", "Faster version of HTTP protocol", "HTTP with more features added"],
                correct: 0,
                explanation: "HTTPS encrypts HTTP traffic using TLS (Transport Layer Security). Protects data in transit from eavesdropping and tampering. Standard for all web traffic.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS", text: "📚 HTTPS" }
            },
        ],
        2: [
            {
                q: "What is SQL injection?",
                options: ["Adding new SQL tables to a schema at runtime", "Malicious SQL in user input that alters a query", "Loading a database with far more rows than usual", "Rewriting slow SQL queries so they run faster"],
                correct: 1,
                explanation: "SQL injection: attacker inserts malicious SQL via input fields. Can read/modify/delete data. Prevented by parameterized queries, ORMs, input validation.",
                learnMore: { url: "https://owasp.org/www-community/attacks/SQL_Injection", text: "📚 SQL Injection" }
            },
            {
                q: "What is XSS (Cross-Site Scripting)?",
                options: ["Injecting malicious scripts into web pages", "Cross-browser script compatibility", "Copying scripts between websites", "Server-side script execution"],
                correct: 0,
                explanation: "XSS injects malicious JavaScript into pages viewed by other users. Can steal cookies, sessions, data. Prevent by escaping output, Content Security Policy.",
                learnMore: { url: "https://owasp.org/www-community/attacks/xss/", text: "📚 XSS" }
            },
            {
                q: "What is password hashing?",
                options: ["Creating password from hash values", "One-way transformation storing password safely", "Splitting passwords into parts", "Encrypting passwords to decrypt later"],
                correct: 1,
                explanation: "Hashing converts password to fixed-length string that can't be reversed. Store hash, not password. Use bcrypt, Argon2 with salt. Never store plaintext passwords.",
                learnMore: { url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html", text: "📚 Password Storage" }
            },
        ],
        3: [
            {
                q: "What is CORS (Cross-Origin Resource Sharing)?",
                options: ["Browser security allowing controlled cross-origin requests", "Protocol encrypting resources shared between two servers", "Server-side mechanism that blocks all external API calls", "Firewall rule limiting which ports accept inbound traffic"],
                correct: 0,
                explanation: "CORS allows servers to specify which origins can access resources. Browser enforces same-origin policy; CORS headers enable controlled exceptions for APIs.",
                learnMore: { url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS", text: "📚 CORS" }
            },
            {
                q: "What is CSRF (Cross-Site Request Forgery)?",
                options: ["Building fake websites that look like real ones", "Forging the digital signature on a request", "Handling requests across different browsers", "Tricking a browser into sending unwanted requests"],
                correct: 3,
                explanation: "CSRF tricks authenticated user's browser into making unintended requests. Attacker exploits existing session. Prevent with CSRF tokens, SameSite cookies.",
                learnMore: { url: "https://owasp.org/www-community/attacks/csrf", text: "📚 CSRF" }
            },
            {
                q: "What is principle of least privilege?",
                options: ["Give everyone administrative access", "Grant minimum permissions needed for task", "Privilege escalation prevention technique", "Least important users get access first"],
                correct: 1,
                explanation: "Least privilege: users/processes get only permissions they need. Limits damage from compromise or mistake. Apply to users, services, API tokens.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Principle_of_least_privilege", text: "📚 Least Privilege" }
            },
            {
                q: "What's input validation?",
                options: ["Logging every user input for auditing and error tracking", "Checking user input meets expected format and constraints", "Encrypting all user input before storing it in the database", "Sanitizing output before rendering it in the browser HTML"],
                correct: 1,
                explanation: "Input validation ensures user input matches expected format, type, length, range. First line of defense. Validate on server (client validation is bypassable).",
                learnMore: { url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html", text: "📚 Input Validation" }
            },
        ],
        4: [
            {
                q: "What is OAuth 2.0?",
                options: ["Second version of auth library", "Open authentication for all applications", "Authentication protocol replacing passwords", "Authorization framework for delegated access"],
                correct: 3,
                explanation: "OAuth 2.0 is authorization framework enabling apps to get limited access to user accounts on other services. User grants permission without sharing password.",
                learnMore: { url: "https://oauth.net/2/", text: "📚 OAuth 2.0" }
            },
            {
                q: "What is JWT (JSON Web Token)?",
                options: ["Java Web Token for authentication", "Signed token containing claims as JSON", "JSON writing template format", "JavaScript web tokenization"],
                correct: 1,
                explanation: "JWT is self-contained token with claims (user info). Signed (and optionally encrypted). Used for stateless authentication. Contains header, payload, signature.",
                learnMore: { url: "https://jwt.io/introduction", text: "📚 JWT Introduction" }
            },
            {
                q: "What's defense in depth?",
                options: ["Defending the deepest database layer", "Multiple layers of security controls", "In-depth security documentation", "Deep security audit process"],
                correct: 1,
                explanation: "Defense in depth uses multiple security layers. If one fails, others protect. Includes: network security, application security, access controls, encryption, monitoring.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Defense_in_depth_(computing)", text: "📚 Defense in Depth" }
            },
            {
                q: "What's rate limiting?",
                options: ["Capping how often a client may call an endpoint", "Capping the network bandwidth a client may use", "Scoring how strict an API's own limits are", "Limiting how often code changes may be deployed"],
                correct: 0,
                explanation: "Rate limiting restricts how many requests client can make in time period. Prevents DoS, brute force, API abuse. Return 429 Too Many Requests when exceeded.",
                learnMore: { url: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/", text: "📚 Rate Limiting" }
            },
        ],
        5: [
            {
                q: "What's the OWASP Top 10?",
                options: ["List of the most critical web application security risks", "Ranking of the ten most popular web development frameworks", "Checklist of ten mandatory compliance requirements for APIs", "Guide to the ten most common programming language mistakes"],
                correct: 0,
                explanation: "OWASP Top 10 lists most critical web security risks. Updated periodically. Includes injection, broken auth, XSS, CSRF, misconfig. Standard awareness document.",
                learnMore: { url: "https://owasp.org/www-project-top-ten/", text: "📚 OWASP Top 10" }
            },
            {
                q: "What's the difference between encryption and hashing?",
                options: ["Encryption is for passwords only", "Encryption is reversible; hashing is one-way", "They're identical cryptographic operations", "Hashing is faster encryption method"],
                correct: 1,
                explanation: "Encryption is reversible with key (for protecting data in transit/rest). Hashing is one-way (for passwords, integrity checks). Different use cases.",
                learnMore: { url: "https://www.thesslstore.com/blog/difference-encryption-hashing-salting/", text: "📚 Encryption vs Hashing" }
            },
            {
                q: "What's security through obscurity?",
                options: ["Keeping security logs away from attackers' reach", "Relying on hidden details instead of real controls", "Protecting obscure legacy systems that lack patches", "An obscure but unusually effective defence method"],
                correct: 1,
                explanation: "Security through obscurity relies on keeping implementation secret. Bad practice: assume attackers know your system. Security should work even if design is public.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Security_through_obscurity", text: "📚 Security Obscurity" }
            },
            {
                q: "What's a security audit?",
                options: ["An automated vulnerability scan and nothing more", "A systematic evaluation of security controls", "Writing security events into an append-only log", "Reviewing the list of user permissions once"],
                correct: 1,
                explanation: "Security audit systematically evaluates security controls, policies, procedures. Includes code review, penetration testing, compliance checking. Regular audits essential.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Information_technology_security_audit", text: "📚 Security Audits" }
            },
            {
                q: "What's the principle of fail-safe defaults?",
                options: ["Fail fast so that errors surface early on", "Ship a safe default configuration with software", "Deny access by default unless it is granted", "Ensure systems fail without losing any data"],
                correct: 2,
                explanation: "Fail-safe defaults: base access decisions on permission (allowlist) not exclusion (denylist). Default deny, explicitly grant. Safer than trying to block everything bad.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Fail-safe", text: "📚 Fail-Safe Defaults" }
            },
        ]
    },

    'f-debugging': {
        1: [
            {
                q: "What is a debugger?",
                options: ["Log file viewer for error messages", "Program that automatically fixes bugs", "Tool to step through code and inspect state", "Code formatter that removes bugs"],
                correct: 2,
                explanation: "A debugger lets you pause execution, step through code line by line, inspect variables, and understand program flow. Essential for finding root causes.",
                learnMore: { url: "https://docs.python.org/3/library/pdb.html", text: "📚 Python Debugger" }
            },
            {
                q: "What is a breakpoint?",
                options: ["Point of no return in code flow", "Point where debugger pauses execution", "Point where program crashes with error", "Breaking code into smaller functions"],
                correct: 1,
                explanation: "Breakpoint is a marker where debugger pauses execution. You can then inspect variables, call stack, step through code. Set in IDE or with debugger commands.",
                learnMore: { url: "https://code.visualstudio.com/docs/editor/debugging#_breakpoints", text: "📚 VS Code Breakpoints" }
            },
            {
                q: "What is print debugging?",
                options: ["Debugging printer hardware issues", "Debugging code that prints output", "Printing stack traces on errors", "Adding print statements to trace execution"],
                correct: 3,
                explanation: "Print debugging adds print/log statements to trace values and execution flow. Quick and works anywhere. Remove or use logging when done. Also called 'printf debugging'.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Debugging#Techniques", text: "📚 Debugging Techniques" }
            },
        ],
        2: [
            {
                q: "What is pdb in Python?",
                options: ["Python database connector module", "Python development board tool", "Python's built-in interactive debugger", "Package dependency browser"],
                correct: 2,
                explanation: "pdb is Python's built-in debugger. Use 'import pdb; pdb.set_trace()' or 'breakpoint()' to start. Commands: n(next), s(step), c(continue), p(print), l(list).",
                learnMore: { url: "https://docs.python.org/3/library/pdb.html", text: "📚 pdb Documentation" }
            },
            {
                q: "What's the browser DevTools Console used for?",
                options: ["Console for server administration", "Develop console games in browser", "Design console UI components only", "Execute JavaScript and view logs/errors"],
                correct: 3,
                explanation: "Browser DevTools Console shows JavaScript errors, warnings, console.log output. Can execute JS interactively, inspect DOM elements, test code snippets.",
                learnMore: { url: "https://developer.chrome.com/docs/devtools/console/", text: "📚 Chrome Console" }
            },
            {
                q: "What is a stack trace?",
                options: ["Trace of all variables in stack", "List of function calls leading to error", "Memory stack usage statistics", "Stack data structure visualization"],
                correct: 1,
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
                options: ["A breakpoint that fires only if a condition holds", "A breakpoint set only on conditional statements", "Several breakpoints that are set conditionally", "A breakpoint that can be disabled temporarily"],
                correct: 0,
                explanation: "Conditional breakpoint pauses only when specified condition is true. Useful for debugging specific cases in loops or when variable has certain value.",
                learnMore: { url: "https://code.visualstudio.com/docs/editor/debugging#_conditional-breakpoints", text: "📚 Conditional Breakpoints" }
            },
            {
                q: "What's the purpose of logging levels?",
                options: ["Limit number of log entries created", "Track user levels in application", "Categorize log messages by severity", "Level up logging capabilities over time"],
                correct: 2,
                explanation: "Logging levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) categorize messages by severity. Configure to show only relevant levels. Debug locally, warn+ in production.",
                learnMore: { url: "https://docs.python.org/3/library/logging.html#logging-levels", text: "📚 Logging Levels" }
            },
            {
                q: "What's remote debugging?",
                options: ["Debugging code running on different machine", "Debugging remote APIs and services", "Remotely controlled debug robot", "Debugging from a remote location"],
                correct: 0,
                explanation: "Remote debugging connects debugger to code running on different machine/container. Useful for debugging production issues, containers, mobile apps, servers.",
                learnMore: { url: "https://code.visualstudio.com/docs/editor/debugging#_remote-debugging", text: "📚 Remote Debugging" }
            },
        ],
        4: [
            {
                q: "What's CPU profiling?",
                options: ["Profiling CPU temperature during execution", "Measuring where program spends execution time", "Profile of CPU hardware capabilities", "Counting CPU cores used by program"],
                correct: 1,
                explanation: "CPU profiling identifies where program spends time. Shows hotspots (slow functions). Tools: cProfile (Python), Chrome DevTools, perf. Optimize the hotspots.",
                learnMore: { url: "https://docs.python.org/3/library/profile.html", text: "📚 Python Profilers" }
            },
            {
                q: "What's a flame graph?",
                options: ["Network traffic flame patterns", "Error rate visualization graph", "Visualization of call stack over time", "Temperature monitoring visualization"],
                correct: 2,
                explanation: "Flame graphs visualize profiled stack traces. X-axis is alphabetical (not time), Y-axis is stack depth. Width is time spent. Wide bars are optimization targets.",
                learnMore: { url: "https://www.brendangregg.com/flamegraphs.html", text: "📚 Flame Graphs" }
            },
            {
                q: "What's the React DevTools used for?",
                options: ["Tools for reacting to user input", "Develop React applications faster", "Inspect React component tree and state", "DevTools that react to changes"],
                correct: 2,
                explanation: "React DevTools browser extension shows component tree, props, state, hooks. Can edit state, profile renders, highlight updates. Essential for React debugging.",
                learnMore: { url: "https://react.dev/learn/react-developer-tools", text: "📚 React DevTools" }
            },
            {
                q: "How do you debug memory issues?",
                options: ["Review application logs for timeout and connection errors", "Run load tests and measure average response time per route", "Use memory profiler, check heap snapshots, track allocations", "Monitor CPU usage graphs and correlate spikes with requests"],
                correct: 2,
                explanation: "Memory debugging: use profilers (memory_profiler, Chrome heap snapshots), track allocations over time, identify leaks (growing memory), check object retention.",
                learnMore: { url: "https://developer.chrome.com/docs/devtools/memory-problems/", text: "📚 Memory Problems" }
            },
        ],
        5: [
            {
                q: "What's post-mortem debugging?",
                options: ["Debugging after crash using core dump", "Debugging code after deployment", "Debugging very old legacy code", "Debugging someone else's code"],
                correct: 0,
                explanation: "Post-mortem debugging analyzes program state after crash. Core dumps capture memory at crash time. Load into debugger to inspect stack, variables at failure point.",
                learnMore: { url: "https://docs.python.org/3/library/pdb.html#pdb.post_mortem", text: "📚 Post-Mortem pdb" }
            },
            {
                q: "What's tracing vs profiling?",
                options: ["Tracing records events; profiling measures performance", "They're exactly the same thing", "Profiling is manual; tracing is automatic", "Tracing is for errors; profiling for warnings"],
                correct: 0,
                explanation: "Tracing records sequence of events (function calls, system calls) for understanding flow. Profiling aggregates time/resources for performance analysis. Different purposes.",
                learnMore: { url: "https://opentelemetry.io/docs/concepts/observability-primer/", text: "📚 Observability" }
            },
            {
                q: "What's time-travel debugging?",
                options: ["Travel back before bugs were introduced", "Record execution to replay and debug backwards", "Debug code from different time zones", "Schedule debugging for later time"],
                correct: 1,
                explanation: "Time-travel debugging records execution allowing replay forwards and backwards. Step back to see how state changed. Tools: rr (Linux), VS debugger (Windows).",
                learnMore: { url: "https://rr-project.org/", text: "📚 rr Project" }
            },
            {
                q: "How do you debug race conditions?",
                options: ["Add logging, use thread sanitizers, try to reproduce reliably", "Rewrite the code to use a single thread for all operations", "Wrap all shared variables in try/except blocks for safety", "Increase thread pool size and add timeouts to all locks"],
                correct: 0,
                explanation: "Race conditions are hard: add detailed logging with timestamps, use sanitizers (ThreadSanitizer), stress test to reproduce, review shared state access, use proper locks.",
                learnMore: { url: "https://clang.llvm.org/docs/ThreadSanitizer.html", text: "📚 Thread Sanitizer" }
            },
            {
                q: "What's distributed tracing?",
                options: ["Tracing code distribution to servers", "Distributing debug work across team", "Distributed storage of trace logs", "Tracking requests across multiple services"],
                correct: 3,
                explanation: "Distributed tracing tracks requests across microservices. Assigns trace ID propagated through calls. Shows latency breakdown, identifies slow services. Jaeger, Zipkin are tools.",
                learnMore: { url: "https://opentelemetry.io/docs/concepts/signals/traces/", text: "📚 Distributed Tracing" }
            },
        ]
    },

    'f-code-review': {
        1: [
            {
                q: "What is code review?",
                options: ["Examining code changes before merging", "Reviewing code performance metrics", "Automated code testing process", "Reading code documentation only"],
                correct: 0,
                explanation: "Code review is the process of examining code changes by someone other than the author before merging. Catches bugs, improves quality, shares knowledge.",
                learnMore: { url: "https://google.github.io/eng-practices/review/", text: "📚 Google Code Review" }
            },
            {
                q: "When is the best time to review a change?",
                options: ["Soon after it opens, while it is still small", "After it has been merged into the main branch", "Once the release for that quarter is prepared", "Only when the author has asked more than once"],
                correct: 0,
                explanation: "Review latency dominates cycle time, and large changes get shallower reviews. Small changes looked at promptly catch more problems and cost the author far less rework."
            },
            {
                q: "Why is code review important?",
                options: ["Catches bugs, shares knowledge, and ensures code quality", "Generates automated documentation from inline comments", "Replaces the need for writing unit and integration tests", "Ensures only senior developers write production code"],
                correct: 0,
                explanation: "Code review catches bugs early, spreads knowledge across team, ensures code quality and consistency, mentors developers, and documents decisions.",
                learnMore: { url: "https://stackoverflow.blog/2019/09/30/how-to-make-good-code-reviews-better/", text: "📚 Good Code Reviews" }
            },
        ],
        2: [
            {
                q: "What should you look for in a code review?",
                options: ["Syntax errors and typos, and nothing more", "How quickly the author produced the change", "Logic errors, security, readability and style", "Whether the style matches your own taste"],
                correct: 2,
                explanation: "Review for: correctness, logic errors, edge cases, security issues, code style, readability, test coverage, documentation. Be thorough but constructive.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html", text: "📚 What to Look For" }
            },
            {
                q: "How should you give code review feedback?",
                options: ["State that it is wrong and reject the change", "Be constructive and specific, and suggest fixes", "Approve everything to keep the team friendly", "Mention only the single worst issue you find"],
                correct: 1,
                explanation: "Give specific, actionable feedback. Explain why something is problematic. Suggest alternatives. Be respectful - critique code not person. Acknowledge good work too.",
                learnMore: { url: "https://conventionalcomments.org/", text: "📚 Conventional Comments" }
            },
            {
                q: "How should you respond to code review feedback?",
                options: ["Apply all suggested changes immediately without question", "Reject comments that don't match your coding preferences", "Wait until all comments are resolved before responding", "Consider feedback objectively and discuss when you disagree"],
                correct: 3,
                explanation: "Read feedback objectively, don't take it personally. Ask for clarification if unclear. Discuss disagreements respectfully. Thank reviewers for their time.",
                learnMore: { url: "https://google.github.io/eng-practices/review/developer/handling-comments.html", text: "📚 Handling Comments" }
            },
        ],
        3: [
            {
                q: "What's the ideal size for a pull request?",
                options: ["Small and focused on one change", "Exactly 500 lines of code", "One PR per sprint cycle", "As large as possible for efficiency"],
                correct: 0,
                explanation: "Small, focused PRs are easier to review thoroughly. Large PRs get rubber-stamped. Aim for <400 lines changed. Break large features into logical increments.",
                learnMore: { url: "https://google.github.io/eng-practices/review/developer/small-cls.html", text: "📚 Small CLs" }
            },
            {
                q: "What's nitpicking in code review?",
                options: ["Security feedback that must always be addressed", "Choosing only the strongest points to raise", "Minor style comments that do not affect behaviour", "Suggestions aimed at improving performance"],
                correct: 2,
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
                options: ["Never request changes to be friendly", "Always request changes for any comment", "Request changes for issues that must be fixed", "Request changes randomly for balance"],
                correct: 2,
                explanation: "Request changes for blocking issues (bugs, security, breaking changes). Approve with comments for optional improvements. Be clear about what's required vs suggested.",
                learnMore: { url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews", text: "📚 Required Reviews" }
            },
        ],
        4: [
            {
                q: "How do you review code in an unfamiliar codebase?",
                options: ["Decline and wait until you learn the codebase", "Read context, ask questions, apply general principles", "Run the test suite and approve if it passes", "Approve quickly and trust the author's judgment"],
                correct: 1,
                explanation: "Read surrounding code for context. Ask author to explain unfamiliar parts. Focus on general principles (logic, readability, security). Still catches many issues.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/navigate.html", text: "📚 Navigate a CL" }
            },
            {
                q: "What's the purpose of review checklists?",
                options: ["Ensure consistent, thorough reviews", "Replace actual code examination", "Make reviews take longer intentionally", "Track reviewer productivity metrics"],
                correct: 0,
                explanation: "Checklists ensure reviewers check important areas consistently: tests, security, documentation, error handling. Helps new reviewers learn what to check.",
                learnMore: { url: "https://www.michaelagreiler.com/code-review-checklist/", text: "📚 Review Checklist" }
            },
            {
                q: "How do you handle disagreements in code review?",
                options: ["Merge the change now and address issues afterward", "Let the reviewer override since they have authority", "Discuss objectively, escalate if needed, respect outcomes", "Defer to the author since they wrote the code"],
                correct: 2,
                explanation: "Discuss technical merits objectively. If stuck, involve third party or tech lead. Once decided, accept the decision. Document rationale for future reference.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/pushback-pushback.html", text: "📚 Resolving Conflicts" }
            },
            {
                q: "What's pair programming vs code review?",
                options: ["They achieve the same thing in the same way", "Review can fully replace pairing in all cases", "Pairing is always superior to reviewing later", "Pairing is live collaboration; review is async"],
                correct: 3,
                explanation: "Pair programming is synchronous: two developers work together real-time. Code review is asynchronous: examination after code is written. Both valuable, different tradeoffs.",
                learnMore: { url: "https://martinfowler.com/articles/on-pair-programming.html", text: "📚 Pair Programming" }
            },
        ],
        5: [
            {
                q: "How do you review performance-critical code?",
                options: ["Performance problems can only be found during testing", "Only review performance when benchmarks are provided", "Check algorithms, measure impact, consider scale and edges", "Trust that the author has benchmarked their changes"],
                correct: 2,
                explanation: "Review algorithm complexity, check benchmarks, consider scale and edge cases, look for common issues (N+1 queries, unnecessary work). Request profiling data if needed.",
                learnMore: { url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html#performance", text: "📚 Performance Review" }
            },
            {
                q: "How do you review security-sensitive code?",
                options: ["Only trained security specialists can review this", "Check auth, input validation, injection, data exposure", "Rely on the security team for a separate review", "Security issues are caught automatically by tests"],
                correct: 1,
                explanation: "Check authentication/authorization, input validation, injection vulnerabilities, sensitive data handling, crypto usage. Everyone can catch common issues. Involve security team for high-risk.",
                learnMore: { url: "https://owasp.org/www-project-code-review-guide/", text: "📚 OWASP Review Guide" }
            },
            {
                q: "What metrics indicate code review effectiveness?",
                options: ["No formal metrics are needed for measuring reviews", "Lines of code reviewed per hour is the best metric", "Total number of PRs reviewed is the main indicator", "Defects found, review time, coverage, knowledge spread"],
                correct: 3,
                explanation: "Track: defects found in review vs production, time to review, coverage (% reviewed), knowledge sharing (who reviews what). Balance speed with thoroughness.",
                learnMore: { url: "https://www.pluralsight.com/blog/tutorials/code-review-best-practices", text: "📚 Review Metrics" }
            },
            {
                q: "How do you maintain code review quality at scale?",
                options: ["Restrict review duties to only the senior developers", "Automate checks, use CODEOWNERS, train reviewers, set SLAs", "Remove mandatory reviews once the team is large enough", "Add more reviewers to every pull request that is opened"],
                correct: 1,
                explanation: "Use linters and static analysis to automate style/security checks. CODEOWNERS assign experts. Train new reviewers. Set review SLAs. Keep PRs small.",
                learnMore: { url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners", text: "📚 CODEOWNERS" }
            },
            {
                q: "What's the reviewer's responsibility for correctness?",
                options: ["Shared with the author, but not sole ownership", "Limited strictly to style and formatting issues", "Complete: every later bug is the reviewer's fault", "None at all, since the author owns every defect"],
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
                options: ["Adding new features to code", "Fixing bugs in existing code", "Rewriting code from scratch completely", "Restructuring code without changing behavior"],
                correct: 3,
                explanation: "Refactoring improves code structure without changing external behavior. Makes code more readable, maintainable, or efficient. Tests ensure behavior unchanged.",
                learnMore: { url: "https://refactoring.com/", text: "📚 Refactoring.com" }
            },
            {
                q: "Why refactor code?",
                options: ["To increase the total lines of code in the repository", "Because management mandates it on a regular schedule", "Improve readability, reduce complexity, ease maintenance", "To make the code look different without changing behavior"],
                correct: 2,
                explanation: "Refactoring improves code quality: easier to understand, modify, and maintain. Reduces technical debt. Makes future changes faster and safer.",
                learnMore: { url: "https://martinfowler.com/books/refactoring.html", text: "📚 Refactoring Book" }
            },
            {
                q: "When should you refactor?",
                options: ["Whenever you touch any code at all", "Only when explicitly told to refactor", "Never, original code is always best", "When code is hard to understand or modify"],
                correct: 3,
                explanation: "Refactor when: adding features (make changes easier), fixing bugs (understand code better), code review (improve clarity). Small continuous refactoring beats big rewrites.",
                learnMore: { url: "https://martinfowler.com/bliki/OpportunisticRefactoring.html", text: "📚 Opportunistic Refactoring" }
            },
        ],
        2: [
            {
                q: "What's extract function refactoring?",
                options: ["Document what function does", "Remove a function from codebase", "Pull code into new named function", "Extract function to external file"],
                correct: 2,
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
                options: ["Rename files and directories within the project tree", "Remove all identifiers and use anonymous references", "Rename the project repository and its directory path", "Give clearer names to variables, functions, and classes"],
                correct: 3,
                explanation: "Rename improves names of identifiers (variables, functions, classes). Good names are crucial for readability. IDEs can rename safely across codebase.",
                learnMore: { url: "https://refactoring.guru/rename-method", text: "📚 Rename Method" }
            },
        ],
        3: [
            {
                q: "What's DRY (Don't Repeat Yourself)?",
                options: ["Documentation review yearly", "Delete redundant YAML files", "Avoid duplicating knowledge in code", "Dry run tests before committing"],
                correct: 2,
                explanation: "DRY means every piece of knowledge should have single authoritative representation. Duplicated code is harder to maintain - change in one place misses others.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself", text: "📚 DRY Principle" }
            },
            {
                q: "What's the 'rule of three' for duplication?",
                options: ["Three developers must review every change", "Refactor once you have seen it three times", "A function may contain at most three lines", "The code then runs about three times faster"],
                correct: 1,
                explanation: "Rule of three: first time write it, second time wince at duplication, third time refactor. Avoids premature abstraction while still eliminating real duplication.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)", text: "📚 Rule of Three" }
            },
            {
                q: "What's inline refactoring?",
                options: ["Replace a function call with the function's body", "Consolidate all code onto a single physical line", "Add inline CSS styles directly in HTML elements", "Insert inline comments explaining every code block"],
                correct: 0,
                explanation: "Inline replaces function call with its body, then deletes function. Useful when function no longer pulls its weight - name doesn't add clarity, or only one caller.",
                learnMore: { url: "https://refactoring.guru/inline-method", text: "📚 Inline Method" }
            },
            {
                q: "What's extract variable refactoring?",
                options: ["Name a complex expression with variable", "Variable extraction optimization", "Extract variables to config file", "Remove variables from code"],
                correct: 0,
                explanation: "Extract variable gives a name to a complex expression. Makes code self-documenting. Can also enable reuse if same expression used multiple times.",
                learnMore: { url: "https://refactoring.guru/extract-variable", text: "📚 Extract Variable" }
            },
        ],
        4: [
            {
                q: "What's the strangler fig pattern?",
                options: ["Kill old code immediately always", "Strange code patterns to avoid", "Fig tree data structure pattern", "Gradually replace old system with new"],
                correct: 3,
                explanation: "Strangler fig gradually replaces old system by building new around it. Route increasing traffic to new system. Eventually old system dies. Safer than big-bang rewrite.",
                learnMore: { url: "https://martinfowler.com/bliki/StranglerFigApplication.html", text: "📚 Strangler Fig" }
            },
            {
                q: "What's move method refactoring?",
                options: ["Move method up in the file", "Move method to class that uses it most", "Move method to separate file", "Rename method with move prefix"],
                correct: 1,
                explanation: "Move method relocates method to class where it makes more sense - usually the class whose data it uses most. Improves cohesion and reduces coupling.",
                learnMore: { url: "https://refactoring.guru/move-method", text: "📚 Move Method" }
            },
            {
                q: "How do you safely refactor?",
                options: ["Keep tests green, change little, commit often", "Skip the tests, since behaviour is unchanged", "Refactor everything at once to move faster", "Rewrite the whole module from scratch instead"],
                correct: 0,
                explanation: "Safe refactoring: comprehensive test coverage first, small incremental changes, run tests after each change, commit frequently. Revert if tests fail.",
                learnMore: { url: "https://martinfowler.com/books/refactoring.html", text: "📚 Safe Refactoring" }
            },
            {
                q: "What's feature envy code smell?",
                options: ["Rivalry between developers competing over feature scope", "Wanting features available in other programming languages", "Excessive feature requests from end users of the system", "A method uses another class's data more than its own"],
                correct: 3,
                explanation: "Feature envy: method seems more interested in another class's data than its own. Solution: move the method to the class whose data it uses most.",
                learnMore: { url: "https://refactoring.guru/smells/feature-envy", text: "📚 Feature Envy" }
            },
        ],
        5: [
            {
                q: "What's the difference between refactoring and rewriting?",
                options: ["Rewriting from scratch is always the better approach to take", "Refactoring only involves updating comments and documentation", "Both terms describe the same process with different wording", "Refactoring changes code incrementally; rewriting starts fresh"],
                correct: 3,
                explanation: "Refactoring: incremental improvement keeping system working. Rewriting: starting from scratch. Refactoring is safer, maintains working software. Rewrites often fail.",
                learnMore: { url: "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/", text: "📚 Joel on Rewrites" }
            },
            {
                q: "What's primitive obsession code smell?",
                options: ["Using primitives instead of domain objects", "Primitive loops instead of iterators", "Obsessing over optimization prematurely", "Basic coding skills obsession"],
                correct: 0,
                explanation: "Primitive obsession uses primitives (strings, ints) for domain concepts. Example: phone number as string. Solution: create small classes for domain concepts.",
                learnMore: { url: "https://refactoring.guru/smells/primitive-obsession", text: "📚 Primitive Obsession" }
            },
            {
                q: "How do you refactor legacy code without tests?",
                options: ["Legacy code cannot be refactored safely", "Add characterization tests first, then refactor", "Delete legacy code and rewrite it", "Just refactor carefully by reading code"],
                correct: 1,
                explanation: "Add characterization tests that capture current behavior (even if buggy). Then refactor with safety net. 'Working Effectively with Legacy Code' covers techniques.",
                learnMore: { url: "https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052", text: "📚 Legacy Code Book" }
            },
            {
                q: "What's shotgun surgery code smell?",
                options: ["Applying minimal targeted fixes to isolated code sections", "Making random unrelated changes across the entire codebase", "A single change requires modifying many different classes", "Performing rapid schema changes to the database directly"],
                correct: 2,
                explanation: "Shotgun surgery: one logical change requires modifying many classes. Indicates scattered responsibility. Solution: move related code together into single class.",
                learnMore: { url: "https://refactoring.guru/smells/shotgun-surgery", text: "📚 Shotgun Surgery" }
            },
            {
                q: "What's the 'boy scout rule' in refactoring?",
                options: ["Code must be reviewed by scouts", "Only scouts can refactor code", "Camping metaphor for code structure", "Leave code cleaner than you found it"],
                correct: 3,
                explanation: "Boy scout rule: always leave code better than you found it. Make small improvements when you touch code. Continuous small improvements beat big refactoring projects.",
                learnMore: { url: "https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html", text: "📚 Boy Scout Rule" }
            },
        ]
    },

    'f-documentation': {
        1: [
            {
                q: "Why is documentation important?",
                options: ["Slows down development always", "Compilers need it to run code", "Helps others understand and use the code", "Only required for public projects"],
                correct: 2,
                explanation: "Documentation helps others (and future you) understand, use, and maintain code. Reduces onboarding time, prevents misuse, captures decisions.",
                learnMore: { url: "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/", text: "📚 Beginner's Guide" }
            },
            {
                q: "What should a README file contain?",
                options: ["Project description, setup instructions, and usage examples", "Marketing copy and promotional materials for the project", "Only the project name and the author's contact details", "A complete listing of all source code in the project"],
                correct: 0,
                explanation: "README should include: project description, installation instructions, usage examples, contribution guidelines, license. First thing visitors see.",
                learnMore: { url: "https://www.makeareadme.com/", text: "📚 Make a README" }
            },
            {
                q: "What are inline code comments for?",
                options: ["Replacing the need for good variable names", "Describing what each individual line performs", "Explaining why the code does something odd", "Making the source look more professional"],
                correct: 2,
                explanation: "Comments explain 'why' not 'what'. Code shows what; comments explain non-obvious reasoning, workarounds, gotchas. Don't repeat what code clearly shows.",
                learnMore: { url: "https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/", text: "📚 Comment Best Practices" }
            },
        ],
        2: [
            {
                q: "What's a docstring?",
                options: ["String for documenting documents", "Documentation in string format only", "Document version string identifier", "Documentation string embedded in code"],
                correct: 3,
                explanation: "Docstrings are documentation embedded in code (Python, JavaScript). Describe function purpose, parameters, return value. Tools can extract them for API docs.",
                learnMore: { url: "https://peps.python.org/pep-0257/", text: "📚 PEP 257 Docstrings" }
            },
            {
                q: "What's API documentation?",
                options: ["Application process index", "API deployment instructions", "Description of how to use an API", "Automatic programming interface"],
                correct: 2,
                explanation: "API documentation describes endpoints, parameters, responses, authentication. Essential for API consumers. Tools: Swagger/OpenAPI, Postman, ReadMe.",
                learnMore: { url: "https://swagger.io/specification/", text: "📚 OpenAPI Spec" }
            },
            {
                q: "What's the difference between comments and documentation?",
                options: ["Comments live in code; documentation is external or generated", "Comments are always wrong while documentation is always right", "They serve the exact same purpose in a software project", "Documentation is only written for end users of the product"],
                correct: 0,
                explanation: "Comments are inline notes for developers reading code. Documentation is user-facing guides, API docs, tutorials. Some overlap (docstrings become API docs).",
                learnMore: { url: "https://www.writethedocs.org/", text: "📚 Write the Docs" }
            },
        ],
        3: [
            {
                q: "What's docs-as-code?",
                options: ["Code that generates the documentation itself", "Hand-coding a documentation site from scratch", "Docs in version control, reviewed and built by CI", "Documentation kept only inside code comments"],
                correct: 2,
                explanation: "Docs-as-code treats docs like software: store in version control, review changes, use CI to build/deploy. Markdown, static site generators, automated checks.",
                learnMore: { url: "https://www.writethedocs.org/guide/docs-as-code/", text: "📚 Docs as Code" }
            },
            {
                q: "What's an ADR (Architecture Decision Record)?",
                options: ["An automatic documentation record generated from source code", "An application deployment record listing release environments", "A document recording architecture decisions and their rationale", "An API development record tracking endpoint version history"],
                correct: 2,
                explanation: "ADRs document significant architecture decisions: context, decision, consequences. Captures 'why' for future reference. Helps new team members understand history.",
                learnMore: { url: "https://adr.github.io/", text: "📚 ADR GitHub" }
            },
            {
                q: "What's JSDoc/TSDoc?",
                options: ["A server-side document rendering format for Java projects", "A documentation format for JavaScript and TypeScript code", "A TypeScript compilation tool that generates documentation", "A standard for documenting JSON data schemas and formats"],
                correct: 1,
                explanation: "JSDoc/TSDoc are documentation standards for JavaScript/TypeScript. Special comments describe functions, parameters, types. IDEs use for intellisense, tools generate docs.",
                learnMore: { url: "https://jsdoc.app/", text: "📚 JSDoc" }
            },
            {
                q: "What's a changelog?",
                options: ["Log of server configuration changes", "Log of notable changes in each release", "Log of database schema changes", "Log of all code changes in git"],
                correct: 1,
                explanation: "Changelog documents notable changes for each release: new features, bug fixes, breaking changes. Human-readable summary (not raw git log). Follows conventions.",
                learnMore: { url: "https://keepachangelog.com/", text: "📚 Keep a Changelog" }
            },
        ],
        4: [
            {
                q: "What makes documentation effective?",
                options: ["Generated automatically without review", "As long as possible with every detail", "Clear, accurate, up-to-date, well-organized", "Written by separate documentation team"],
                correct: 2,
                explanation: "Effective docs are: accurate (matches reality), clear (understandable), current (updated with code), organized (easy to navigate), appropriate (right level of detail).",
                learnMore: { url: "https://developers.google.com/style", text: "📚 Google Developer Style" }
            },
            {
                q: "What's Diátaxis documentation framework?",
                options: ["A dialect specification for writing documentation languages", "A diagnostic axis tool for identifying documentation issues", "A database diagramming system with axis-based chart layouts", "Four types: tutorials, how-to guides, reference, explanation"],
                correct: 3,
                explanation: "Diátaxis defines four doc types: tutorials (learning-oriented), how-to guides (goal-oriented), reference (information-oriented), explanation (understanding-oriented).",
                learnMore: { url: "https://diataxis.fr/", text: "📚 Diátaxis" }
            },
            {
                q: "How do you keep documentation up to date?",
                options: ["Assign one dedicated person to maintain all documentation", "Documentation naturally stays current without intervention", "Automate generation, review with code changes, test docs", "Schedule documentation updates only during major releases"],
                correct: 2,
                explanation: "Keep docs current: generate from code where possible, review docs in PRs, test examples automatically, schedule doc reviews, make updating easy.",
                learnMore: { url: "https://www.writethedocs.org/guide/docs-as-code/", text: "📚 Docs Automation" }
            },
            {
                q: "What's a runbook?",
                options: ["Procedures for handling operational tasks", "Running list of documentation", "Book about running the application", "Marathon training documentation"],
                correct: 0,
                explanation: "Runbook documents operational procedures: how to deploy, handle incidents, perform maintenance. Step-by-step instructions for on-call engineers.",
                learnMore: { url: "https://www.atlassian.com/incident-management/kpis/runbooks", text: "📚 Runbooks" }
            },
        ],
        5: [
            {
                q: "What's documentation testing?",
                options: ["Verify code examples in docs actually work", "A/B testing documentation layouts", "Testing how fast docs load", "Testing documentation grammar"],
                correct: 0,
                explanation: "Documentation testing extracts and runs code examples to ensure they work. Tools: doctest (Python), rustdoc (Rust). Prevents examples from becoming outdated.",
                learnMore: { url: "https://docs.python.org/3/library/doctest.html", text: "📚 Python doctest" }
            },
            {
                q: "What's technical writing best practice for developers?",
                options: ["Write long, thorough, densely packed paragraphs", "Keep code examples out of the prose entirely", "Be concise, use active voice, show examples", "Use as much domain jargon as you possibly can"],
                correct: 2,
                explanation: "Good technical writing: active voice, concise sentences, code examples, consistent terminology, good structure, appropriate audience level. Skip unnecessary words.",
                learnMore: { url: "https://developers.google.com/tech-writing/one", text: "📚 Tech Writing Course" }
            },
            {
                q: "How do you document a REST API effectively?",
                options: ["Document only the happy path flows and ignore edge cases", "Let users read the source code to learn the API behavior", "Use OpenAPI spec with examples, auth details, error codes", "List all the available endpoint URLs without extra detail"],
                correct: 2,
                explanation: "REST API docs need: endpoints with methods, request/response schemas, authentication, error codes, rate limits, examples. OpenAPI spec enables tools and testing.",
                learnMore: { url: "https://learn.openapis.org/", text: "📚 Learn OpenAPI" }
            },
            {
                q: "What's the role of examples in documentation?",
                options: ["Examples are optional bonus content", "Fill space to make docs look complete", "Replace need for explanatory text", "Show practical usage that readers can adapt"],
                correct: 3,
                explanation: "Examples show practical usage. Good examples: realistic scenarios, copy-paste ready, cover common cases, progress from simple to complex. Often most-read section.",
                learnMore: { url: "https://developers.google.com/style/examples", text: "📚 Writing Examples" }
            },
            {
                q: "What's information architecture in documentation?",
                options: ["Building the documentation website's front end", "Documenting the architecture of the software", "Structuring the docs so readers can find things", "Drawing architecture diagrams for the system"],
                correct: 2,
                explanation: "Information architecture organizes docs for discoverability: navigation structure, categories, search, cross-linking. Good IA helps users find what they need quickly.",
                learnMore: { url: "https://www.nngroup.com/articles/ia-vs-navigation/", text: "📚 IA vs Navigation" }
            },
        ]
    },

    'f-build-systems': {
        1: [
            {
                q: "What is a build system?",
                options: ["A system used for building physical servers", "A tool automating compiling and packaging", "A team structure adopted for development", "A blueprint of the application's architecture"],
                correct: 1,
                explanation: "Build systems automate transforming source code into deployable artifacts: compiling, bundling, minifying, running tests. Examples: npm, webpack, make, gradle.",
                learnMore: { url: "https://vitejs.dev/guide/why.html", text: "📚 Why Vite" }
            },
            {
                q: "What's npm used for?",
                options: ["A Node.js performance monitoring and profiling service", "A network protocol manager for configuring connections", "JavaScript package manager and project script runner", "A new project manager tool for organizing team tasks"],
                correct: 2,
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
                options: ["Packages project files for distribution and shipping", "Organizes developers into collaborative working teams", "Bundles user data together for analytics processing", "Combines multiple source files into optimized bundles"],
                correct: 3,
                explanation: "Bundlers combine JavaScript modules, CSS, assets into optimized bundles for browser. Tree-shake unused code, minify, split chunks. Examples: webpack, Vite, esbuild.",
                learnMore: { url: "https://vitejs.dev/guide/", text: "📚 Vite Guide" }
            },
            {
                q: "What's the purpose of package.json?",
                options: ["Configure how JSON files are parsed in the application", "Package and serialize JSON data for network transmission", "Define project metadata, dependencies, and build scripts", "Provide a list of all JSON files included in the project"],
                correct: 2,
                explanation: "package.json defines: project name/version, dependencies (runtime and dev), scripts (build, test), configuration for tools. Central config for JavaScript projects.",
                learnMore: { url: "https://docs.npmjs.com/cli/v9/configuring-npm/package-json", text: "📚 package.json" }
            },
            {
                q: "What's a lockfile (package-lock.json)?",
                options: ["Exact dependency versions for repeatable installs", "A file that is locked while npm install runs", "Configuration that pins package version ranges", "A lock preventing unauthorised project access"],
                correct: 0,
                explanation: "Lockfiles record exact versions of all dependencies (including transitive). Ensures everyone installs identical versions. Commit to version control.",
                learnMore: { url: "https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json", text: "📚 package-lock.json" }
            },
        ],
        3: [
            {
                q: "What's hot module replacement (HMR)?",
                options: ["Module replacement during migration", "Hot swapping code in production", "Replacing failed hardware modules quickly", "Update modules in browser without full reload"],
                correct: 3,
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
                options: ["devDependencies are optional extras you can leave out", "There is no real difference between the two categories", "Regular dependencies are only used during development", "devDeps are for development only; deps are for production"],
                correct: 3,
                explanation: "dependencies needed at runtime (React, lodash). devDependencies for development only (testing, building) - not included in production bundle. Affects install with --production.",
                learnMore: { url: "https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file", text: "📚 npm Dependencies" }
            },
            {
                q: "What's minification?",
                options: ["Identify the minimum code change needed to fix a bug", "Shrink code by removing whitespace and renaming variables", "Reduce the total number of dependencies in your project", "Auto-format code to make it more readable and consistent"],
                correct: 1,
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
                options: ["An ultraviolet-themed Python testing framework", "A universal version manager for Python runtimes", "A fast Python package installer written in Rust", "A unified virtual environment management tool"],
                correct: 2,
                explanation: "uv is a fast Python package installer and resolver written in Rust. Drop-in replacement for pip and pip-tools. 10-100x faster than pip for many operations.",
                learnMore: { url: "https://github.com/astral-sh/uv", text: "📚 uv" }
            },
            {
                q: "What's a monorepo?",
                options: ["A monopoly held over a set of repositories", "One repository holding several projects", "A watcher monitoring a repo for changes", "A repository holding exactly one project"],
                correct: 1,
                explanation: "Monorepo contains multiple projects/packages in one repository. Shared tooling, atomic changes across projects, simplified dependencies. Tools: Nx, Turborepo, Lerna.",
                learnMore: { url: "https://monorepo.tools/", text: "📚 Monorepo Tools" }
            },
            {
                q: "What's a peer dependency?",
                options: ["A package the host application must supply", "A package installed alongside as its own copy", "A package needed only while developing code", "A package mirrored from a second registry"],
                correct: 0,
                explanation: "A plugin declares a peer dependency so it uses the host application's copy of a library — one React, not two. Two copies of a framework in one bundle is a classic source of baffling runtime errors."
            },
        ],
        5: [
            {
                q: "What's incremental build?",
                options: ["Build in small increments over time", "Only rebuild changed parts", "Small increases in build performance", "Add features incrementally to build"],
                correct: 1,
                explanation: "Incremental build only recompiles changed files and their dependents. Dramatically faster than full rebuild. Requires tracking dependencies between files.",
                learnMore: { url: "https://www.typescriptlang.org/docs/handbook/project-references.html", text: "📚 TS Incremental" }
            },
            {
                q: "What's build caching?",
                options: ["Cache for storing built applications", "Caching user builds for deployment", "Build artifacts in browser cache", "Store build outputs to avoid redundant work"],
                correct: 3,
                explanation: "Build caching stores intermediate outputs. If inputs unchanged, use cached output. Local and remote caching possible. Tools: Nx, Turborepo, Gradle have built-in caching.",
                learnMore: { url: "https://turbo.build/repo/docs/core-concepts/caching", text: "📚 Turborepo Caching" }
            },
            {
                q: "What's artifact management?",
                options: ["Managing artistic elements in the interface", "Storing and versioning build outputs", "Version control applied to binary files", "Collecting artifacts, as in archaeology"],
                correct: 1,
                explanation: "Artifact management stores versioned build outputs: Docker images, packages, binaries. Enables reproducible deployments. Tools: Docker Hub, npm registry, Artifactory.",
                learnMore: { url: "https://docs.github.com/en/packages", text: "📚 GitHub Packages" }
            },
            {
                q: "What's the difference between build and compile?",
                options: ["Build is for web projects while compile is for native apps", "Compile is the broader process that includes build steps", "Build is broader: compile plus test, bundle, and package", "Both terms mean exactly the same thing in practice today"],
                correct: 2,
                explanation: "Compiling translates source to machine/intermediate code. Building includes compiling plus: running tests, bundling, generating docs, packaging for distribution.",
                learnMore: { url: "https://en.wikipedia.org/wiki/Software_build", text: "📚 Software Build" }
            },
            {
                q: "What's reproducible builds?",
                options: ["Same source always produces bit-identical output", "Copy-paste builds between projects", "Building the same feature multiple times", "Reproducing bugs in build process"],
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
                options: ["Open-source operating system kernel", "Microsoft's server software", "A type of web browser", "Programming language from Linus"],
                correct: 0,
                explanation: "Linux is an open-source OS kernel. Combined with GNU tools and other software, forms complete operating systems (distributions). Powers most servers, Android, embedded devices.",
                learnMore: { url: "https://www.linux.org/", text: "📚 Linux.org" }
            },
            {
                q: "What's a Linux distribution?",
                options: ["Distribution of Linux users globally", "Linux kernel version number", "Complete OS built on Linux kernel", "Method of distributing Linux code"],
                correct: 2,
                explanation: "A distribution (distro) packages Linux kernel with software, package manager, desktop environment. Examples: Ubuntu, Debian, Fedora, CentOS. Different distros suit different needs.",
                learnMore: { url: "https://distrowatch.com/", text: "📚 DistroWatch" }
            },
            {
                q: "What's the root user in Linux?",
                options: ["Administrator with full system access", "Default login username always", "User in the root directory", "First user created on the system"],
                correct: 0,
                explanation: "Root is the superuser with unrestricted access to everything. Can modify any file, install software, change system settings. Use with caution; prefer sudo for admin tasks.",
                learnMore: { url: "https://www.linux.com/training-tutorials/linux-101-root-and-sudo/", text: "📚 Root and Sudo" }
            },
        ],
        2: [
            {
                q: "What's systemd?",
                options: ["Init system and service manager for Linux", "Storage daemon for disk access", "Security daemon for authentication", "System daemon for memory management"],
                correct: 0,
                explanation: "systemd is Linux's init system - first process started. Manages services (start, stop, restart), handles logging (journald), mounts filesystems, and more.",
                learnMore: { url: "https://www.freedesktop.org/wiki/Software/systemd/", text: "📚 systemd" }
            },
            {
                q: "What does 'chmod 755' do?",
                options: ["Owner gets all permissions, group and others get read and execute", "Move the specified file into a directory with the path number 755", "Set the file compression mode to the level indicated by the number", "Change the file's last modification timestamp to the value of 755"],
                correct: 0,
                explanation: "chmod 755 sets permissions: owner can read/write/execute (7), group and others can read/execute (5). Common for scripts and executables that should be readable by all.",
                learnMore: { url: "https://www.geeksforgeeks.org/chmod-command-linux/", text: "📚 chmod" }
            },
            {
                q: "What's the purpose of /etc directory?",
                options: ["User home directories location", "Executable binary programs", "Store system configuration files", "Temporary files and caches"],
                correct: 2,
                explanation: "/etc contains system-wide configuration files. Examples: /etc/passwd (users), /etc/hosts (hostname mapping), /etc/nginx/ (nginx config). 'Editable Text Configuration'.",
                learnMore: { url: "https://www.pathname.com/fhs/pub/fhs-2.3.html#ETCHOSTSPECIFICSYSTEMCONFIGURATION", text: "📚 Filesystem Hierarchy" }
            },
        ],
        3: [
            {
                q: "How do you manage services with systemctl?",
                options: ["systemctl start/stop/restart/status service-name", "systemctl execute service-name with default options", "systemctl run service-name with immediate scheduling", "services start service-name using the init daemon"],
                correct: 0,
                explanation: "systemctl controls systemd services: start (begin), stop (end), restart (stop then start), status (check state), enable (start on boot), disable (don't start on boot).",
                learnMore: { url: "https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units", text: "📚 systemctl Tutorial" }
            },
            {
                q: "What's SSH used for?",
                options: ["Secure remote login to systems", "Secure storage hosting only", "System shell hardware access", "Super-fast shell for local use"],
                correct: 0,
                explanation: "SSH (Secure Shell) enables encrypted remote login and command execution. Used to manage servers, transfer files (scp, sftp), tunnel connections. Key-based auth preferred.",
                learnMore: { url: "https://www.ssh.com/academy/ssh", text: "📚 SSH Academy" }
            },
            {
                q: "What's a process in Linux?",
                options: ["Processing unit of the CPU", "Method of processing files", "Linux installation procedure", "Running instance of a program"],
                correct: 3,
                explanation: "A process is a running program instance with its own memory space, PID (process ID), and resources. View with ps, htop. Kill with kill PID. Parent-child relationships.",
                learnMore: { url: "https://www.geeksforgeeks.org/processes-in-linuxunix/", text: "📚 Linux Processes" }
            },
            {
                q: "What's the difference between apt and yum?",
                options: ["No real difference beyond the command name", "yum targets servers while apt targets desktops", "apt is simply a newer version of the yum tool", "Package managers for different distro families"],
                correct: 3,
                explanation: "apt is Debian/Ubuntu package manager. yum/dnf is Red Hat/CentOS/Fedora package manager. Different commands, different package formats (.deb vs .rpm).",
                learnMore: { url: "https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg", text: "📚 Package Management" }
            },
        ],
        4: [
            {
                q: "What are Linux file permissions?",
                options: ["Open, close, save permissions only", "Read, write, execute for owner/group/others", "Admin, user, guest access levels", "Create, delete, move permissions"],
                correct: 1,
                explanation: "Linux permissions: read (r), write (w), execute (x) for three categories: owner, group, others. Shown as rwxrwxrwx or numeric (755). ls -l displays them.",
                learnMore: { url: "https://www.redhat.com/sysadmin/linux-file-permissions-explained", text: "📚 File Permissions" }
            },
            {
                q: "What's cron used for?",
                options: ["Schedule recurring tasks automatically", "CPU core management and allocation", "Chronological logging of system events", "System boot time and uptime measurement"],
                correct: 0,
                explanation: "cron schedules recurring jobs. crontab defines schedule (minute, hour, day, month, weekday) and command. Used for backups, cleanup, reports. systemd timers are alternative.",
                learnMore: { url: "https://crontab.guru/", text: "📚 Crontab Guru" }
            },
            {
                q: "What's /var/log used for?",
                options: ["System and application log files", "Variable configuration files", "Version archive storage", "Logical volume management"],
                correct: 0,
                explanation: "/var/log stores log files: syslog, auth.log, application logs. Essential for troubleshooting. Use journalctl for systemd logs, or tail/less for traditional logs.",
                learnMore: { url: "https://www.loggly.com/ultimate-guide/linux-logging-basics/", text: "📚 Linux Logging" }
            },
            {
                q: "What's iptables/nftables?",
                options: ["IP address resolution lookup tables", "Network connectivity testing utilities", "Linux firewall for filtering traffic", "Table management tool for databases"],
                correct: 2,
                explanation: "iptables/nftables are Linux firewall tools. Filter incoming/outgoing packets by rules. Define chains of rules for ACCEPT, DROP, REJECT. nftables is newer replacement.",
                learnMore: { url: "https://wiki.nftables.org/", text: "📚 nftables" }
            },
        ],
        5: [
            {
                q: "What's LVM (Logical Volume Manager)?",
                options: ["Flexible disk space management abstraction", "Local software version management tool", "Linux virtual machine management tool", "Log volume monitoring and alerting system"],
                correct: 0,
                explanation: "LVM adds abstraction layer over physical disks. Create, resize, move logical volumes without downtime. Snapshots for backups. More flexible than partitions.",
                learnMore: { url: "https://www.redhat.com/sysadmin/lvm-vs-partitioning", text: "📚 LVM Guide" }
            },
            {
                q: "What are namespaces in Linux?",
                options: ["Directory naming system only", "User namespace for DNS lookups", "Naming convention for variables", "Kernel feature for resource isolation"],
                correct: 3,
                explanation: "Namespaces isolate system resources: PID, network, mount, user, etc. Foundation of containers. Each namespace has its own view of resources.",
                learnMore: { url: "https://man7.org/linux/man-pages/man7/namespaces.7.html", text: "📚 Namespaces" }
            },
            {
                q: "What are cgroups?",
                options: ["Control groups for user permissions", "Configuration groups for services", "CPU grouping for multiprocessing", "Limit and account for resource usage"],
                correct: 3,
                explanation: "cgroups (control groups) limit, account, and isolate resource usage (CPU, memory, I/O). Used by containers and systemd to manage resource allocation.",
                learnMore: { url: "https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html", text: "📚 cgroups v2" }
            },
            {
                q: "What's SELinux?",
                options: ["Secure execution Linux environment", "Southeast Linux distribution variant", "Serial Linux communication protocol", "Mandatory access control security system"],
                correct: 3,
                explanation: "SELinux (Security-Enhanced Linux) provides mandatory access control. Restricts what processes can access based on policy, beyond standard permissions. Complex but powerful.",
                learnMore: { url: "https://www.redhat.com/en/topics/linux/what-is-selinux", text: "📚 SELinux" }
            },
            {
                q: "What's strace used for?",
                options: ["Trace network packets in stack", "Trace system calls made by programs", "Storage tracing for disk I/O", "String tracing in source code"],
                correct: 1,
                explanation: "strace traces system calls and signals. Shows what a program is doing at OS level: file access, network, memory. Powerful debugging tool for mysterious issues.",
                learnMore: { url: "https://strace.io/", text: "📚 strace" }
            },
        ],
        6: [
            {
                q: "What does a systemd unit's Restart=on-failure combine with to avoid a crash loop?",
                options: ["WatchdogSec, which disables restarting", "StartLimitBurst and StartLimitIntervalSec", "TimeoutStartSec and TimeoutStopSec", "RestartSec set to a very large value"],
                correct: 1,
                explanation: "Restarting alone will loop forever on a permanent failure. The start-limit settings cap how many restarts are allowed in a window before the unit is left failed for an operator to look at."
            },
            {
                q: "Which cgroup v2 mechanism protects a service's memory under pressure?",
                options: ["MemoryMax, which kills on the first spike", "MemorySwapMax, which disables all swap", "MemoryAccounting, which only measures usage", "MemoryLow, a soft reclaim guarantee"],
                correct: 3,
                explanation: "MemoryLow protects a working set from reclaim while pressure exists elsewhere, whereas MemoryMax is a hard ceiling enforced by the OOM killer. They solve different halves of the problem."
            },
            {
                q: "What does 'journalctl -u service --since' read from?",
                options: ["The service's own stdout redirected to a file", "The structured journal, indexed by unit and time", "The plain text files under /var/log/messages", "The kernel ring buffer, cleared on reboot"],
                correct: 1,
                explanation: "The journal stores structured records with unit, priority and timestamp metadata, so filtering by unit and time range is an index lookup rather than a grep over concatenated text."
            },
            {
                q: "A process holds a deleted file and disk stays full. How do you find it?",
                options: ["df, which shows the filesystem totals", "find with -mtime to locate old files", "lsof for deleted files still held open", "du, which reports the directory sizes"],
                correct: 2,
                explanation: "Space is only released when the last descriptor closes. du and df disagree in exactly this case, and lsof lists the process still holding the unlinked inode — restarting it frees the space."
            },
            {
                q: "What does a high load average with low CPU utilisation indicate on Linux?",
                options: ["Processes blocked in uninterruptible I/O wait", "A miscounted number of CPU cores", "Excessive context switching between threads", "Idle processes that have not been reaped"],
                correct: 0,
                explanation: "Linux counts uninterruptible sleep in the load average, so a saturated disk or a stalled network filesystem raises load while the CPUs sit idle. iostat separates the two."
            },
            {
                q: "Why does a service with PrivateTmp=yes not see files another wrote to /tmp?",
                options: ["The files were removed by the tmpfiles cleaner", "It runs as a user without permission to read them", "It runs with its own mount namespace for /tmp", "Its /tmp is mounted read-only by the manager"],
                correct: 2,
                explanation: "PrivateTmp gives the unit a private /tmp in its own mount namespace — a hardening default that surprises people debugging inter-process file handoffs through /tmp."
            },
        ],
        7: [
            {
                q: "Which tool traces kernel and application events with the lowest overhead?",
                options: ["strace, which stops the process per syscall", "gdb attached to the running process", "A tcpdump capture of all traffic", "eBPF-based tooling such as bpftrace"],
                correct: 3,
                explanation: "strace pays a context switch per syscall, which distorts the very timing you are measuring. eBPF programs run in the kernel and aggregate in place, so production tracing stays viable."
            },
            {
                q: "Why does a container see the host's memory in /proc/meminfo?",
                options: ["The kernel reports totals before applying limits", "/proc is not namespaced; limits live in cgroups", "The container was started with host networking", "Memory limits only apply to swap, not RAM"],
                correct: 1,
                explanation: "Processes read the host's figures unless something maps them, which is why runtimes that trust /proc/meminfo size their heaps wrongly. The real limit is in the cgroup, and tools have to be told to read it."
            },
            {
                q: "What does a growing number of TIME_WAIT sockets indicate?",
                options: ["A firewall silently dropping outbound packets", "A memory leak in the network driver", "Connections that were never established", "Many short-lived connections closed by this side"],
                correct: 3,
                explanation: "The side that closes first holds TIME_WAIT to absorb stray segments. Large counts point at short-lived connections rather than a fault — connection reuse addresses it, unlike tuning the timeout down blindly."
            },
            {
                q: "How does SSSD change authentication on a login node?",
                options: ["It replaces the SSH daemon with its own listener", "It resolves users and groups from a directory", "It stores every user's password hash locally", "It synchronises /etc/passwd between the nodes"],
                correct: 1,
                explanation: "SSSD plugs into NSS and PAM to resolve identities from a remote directory with caching, which is how a cluster picks up the POSIX accounts Waldur publishes through GLAuth without local user files."
            },
            {
                q: "Which mechanism gives a service a capability without full root?",
                options: ["Setting the setuid bit on the service binary", "Adding the service account to the wheel group", "AmbientCapabilities on the unit, dropping the rest", "Running it under sudo with a NOPASSWD rule"],
                correct: 2,
                explanation: "Granting exactly CAP_NET_BIND_SERVICE, say, and dropping everything else leaves a compromised process without the rest of root's power — unlike setuid, which hands over the whole set."
            },
            {
                q: "What is the practical effect of an OOM kill inside a cgroup?",
                options: ["One process is killed while the host stays healthy", "The whole host reboots to reclaim memory", "The kernel swaps the cgroup out to disk instead", "All processes in the cgroup are paused until freed"],
                correct: 0,
                explanation: "The kernel kills within the offending cgroup, so a memory-hungry container does not take the machine with it. The kill appears in the journal — which is what to look for when a service vanishes without a traceback."
            },
        ]
    },

    'f-sql': {
        1: [
            {
                q: "What is SQL?",
                options: ["Language for querying and managing databases", "Structured queue language for messaging", "System-level query library for data access", "Server quality language for networking"],
                correct: 0,
                explanation: "SQL (Structured Query Language) is the standard language for relational databases. Used to query, insert, update, delete data, and manage database structure.",
                learnMore: { url: "https://www.w3schools.com/sql/", text: "📚 SQL Tutorial" }
            },
            {
                q: "What's a SELECT statement?",
                options: ["Statement to choose which database", "Selector for database connections", "Query to retrieve data from tables", "Selection of tables to create"],
                correct: 2,
                explanation: "SELECT retrieves data from tables. SELECT columns FROM table WHERE condition. Most common SQL statement. Can join tables, aggregate, sort, limit results.",
                learnMore: { url: "https://www.postgresql.org/docs/current/sql-select.html", text: "📚 PostgreSQL SELECT" }
            },
            {
                q: "What's a WHERE clause?",
                options: ["Specify where to store data", "Where to send query results", "Location of database server", "Filter rows based on conditions"],
                correct: 3,
                explanation: "WHERE filters which rows are returned or affected. SELECT * FROM users WHERE active = true. Can use AND, OR, IN, LIKE, comparison operators.",
                learnMore: { url: "https://www.w3schools.com/sql/sql_where.asp", text: "📚 SQL WHERE" }
            },
        ],
        2: [
            {
                q: "What's a JOIN in SQL?",
                options: ["Join two databases together", "Connect to database server", "Combine rows from multiple tables", "Merge duplicate rows in table"],
                correct: 2,
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
                options: ["Reference to primary key in another table", "Key that allows nullable column values", "Secondary unique identifier for rows", "Key imported from a foreign database"],
                correct: 0,
                explanation: "Foreign key links tables together by referencing another table's primary key. Enforces referential integrity - can't have orphaned references. Creates relationships.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK", text: "📚 Foreign Keys" }
            },
        ],
        3: [
            {
                q: "What's an index in SQL?",
                options: ["List of all tables in database", "Index number for each row", "Data structure to speed up queries", "Table of contents for documentation"],
                correct: 2,
                explanation: "Index is data structure (usually B-tree) that speeds up queries on indexed columns. Trade-off: faster reads, slower writes (index must be updated). Choose wisely.",
                learnMore: { url: "https://www.postgresql.org/docs/current/indexes.html", text: "📚 PostgreSQL Indexes" }
            },
            {
                q: "What's a transaction in SQL?",
                options: ["Single action performed on one database row", "Group of operations that succeed or fail together", "Log entry recording a completed statement", "Transfer of data between separate tables"],
                correct: 1,
                explanation: "Transaction groups operations into atomic unit. Either all succeed (COMMIT) or all fail (ROLLBACK). ACID properties ensure data integrity. BEGIN...COMMIT/ROLLBACK.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-transactions.html", text: "📚 Transactions" }
            },
            {
                q: "What's GROUP BY used for?",
                options: ["Sort results into groups", "Aggregate rows with same values", "Group queries together for batch", "Group tables in database"],
                correct: 1,
                explanation: "GROUP BY groups rows with same values for aggregation. Used with COUNT, SUM, AVG, MAX, MIN. SELECT department, COUNT(*) FROM employees GROUP BY department.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-agg.html", text: "📚 GROUP BY" }
            },
            {
                q: "What's the difference between WHERE and HAVING?",
                options: ["WHERE filters rows; HAVING filters groups", "WHERE for SELECT, HAVING for UPDATE", "They're exactly the same thing", "HAVING is older syntax for WHERE"],
                correct: 0,
                explanation: "WHERE filters individual rows before grouping. HAVING filters groups after aggregation. SELECT dept, COUNT(*) FROM emp GROUP BY dept HAVING COUNT(*) > 5.",
                learnMore: { url: "https://www.postgresql.org/docs/current/tutorial-agg.html", text: "📚 HAVING" }
            },
        ],
        4: [
            {
                q: "What's query optimization?",
                options: ["Reducing the storage a database occupies", "The correct way to format SQL statements", "Improving the performance of a given query", "Finding the optimal database schema design"],
                correct: 2,
                explanation: "Query optimization improves performance: use indexes, avoid SELECT *, optimize JOINs, use EXPLAIN to analyze. Database query planner also optimizes automatically.",
                learnMore: { url: "https://www.postgresql.org/docs/current/performance-tips.html", text: "📚 Performance Tips" }
            },
            {
                q: "What does EXPLAIN show?",
                options: ["Explanation of SQL syntax", "Database structure documentation", "Query execution plan and costs", "List of recent queries executed"],
                correct: 2,
                explanation: "EXPLAIN shows how database will execute query: which indexes used, join order, estimated costs. EXPLAIN ANALYZE actually runs query and shows real timings.",
                learnMore: { url: "https://www.postgresql.org/docs/current/using-explain.html", text: "📚 Using EXPLAIN" }
            },
            {
                q: "What's an N+1 query problem?",
                options: ["Executing N extra queries instead of one join", "Having too many tables in a single database", "Error when too many users connect at once", "Query that returns more rows than expected"],
                correct: 0,
                explanation: "N+1 problem: 1 query gets N items, then N queries get related data for each. Should be 2 queries using JOIN or IN. Very common ORM issue. Devastating for performance.",
                learnMore: { url: "https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm", text: "📚 N+1 Problem" }
            },
            {
                q: "What's database normalization?",
                options: ["Standard database naming conventions", "Normalizing query response times", "Organizing data to reduce redundancy", "Setting database to normal mode"],
                correct: 2,
                explanation: "Normalization organizes tables to reduce redundancy and dependency. Normal forms (1NF, 2NF, 3NF) define rules. Trade-off: less redundancy vs more JOINs.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl.html", text: "📚 Database Design" }
            },
        ],
        5: [
            {
                q: "What's a database migration?",
                options: ["Migrating data between tables", "Version-controlled database schema changes", "Database backup and restore process", "Moving database to new server"],
                correct: 1,
                explanation: "Migrations are version-controlled schema changes. Each migration modifies schema (add table, column, index). Applied in order. Rollback possible. Django, Rails have built-in.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/migrations/", text: "📚 Django Migrations" }
            },
            {
                q: "What's a materialized view?",
                options: ["Precomputed query results stored as table", "View that can be modified", "Virtual view of materials inventory", "Visual representation of database"],
                correct: 0,
                explanation: "Materialized view stores query results physically (unlike regular views). Must be refreshed when data changes. Trade-off: faster reads vs stale data. Good for expensive queries.",
                learnMore: { url: "https://www.postgresql.org/docs/current/rules-materializedviews.html", text: "📚 Materialized Views" }
            },
            {
                q: "What's database sharding?",
                options: ["Shredding deleted database records", "Breaking large tables into shards", "Sharing database between applications", "Splitting data across multiple databases"],
                correct: 3,
                explanation: "Sharding splits data across multiple database instances. Each shard has subset of data (e.g., by user ID). Enables horizontal scaling. Complex: cross-shard queries, rebalancing.",
                learnMore: { url: "https://www.postgresql.org/docs/current/ddl-partitioning.html", text: "📚 Table Partitioning" }
            },
            {
                q: "What's a database deadlock?",
                options: ["Stale connection that fails to close properly", "Lock that prevents all concurrent queries", "Two transactions waiting for each other's locks", "Database server that stops responding to requests"],
                correct: 2,
                explanation: "Deadlock: Transaction A holds lock 1, waits for lock 2. Transaction B holds lock 2, waits for lock 1. Neither can proceed. Database detects and aborts one.",
                learnMore: { url: "https://www.postgresql.org/docs/current/explicit-locking.html#LOCKING-DEADLOCKS", text: "📚 Deadlocks" }
            },
            {
                q: "What are ACID properties?",
                options: ["Automated, Concurrent, Indexed, Distributed", "Advanced Computing in Databases", "Add, Create, Insert, Delete operations", "Atomicity, Consistency, Isolation, Durability"],
                correct: 3,
                explanation: "ACID: Atomicity (all or nothing), Consistency (valid state to valid state), Isolation (concurrent transactions don't interfere), Durability (committed data persists).",
                learnMore: { url: "https://www.postgresql.org/docs/current/transaction-iso.html", text: "📚 Transaction Isolation" }
            },
        ],
        6: [
            {
                q: "What does SELECT ... FOR UPDATE protect against?",
                options: ["An index becoming stale after many updates", "Two transactions reading then writing the same row", "A long query blocking every other reader", "A deadlock between two unrelated tables"],
                correct: 1,
                explanation: "It locks the selected rows until the transaction ends, closing the read-modify-write window. It is the standard fix for a check-then-act race that an application-level check cannot close on its own.",
                learnMore: { url: "https://www.postgresql.org/docs/current/explicit-locking.html", text: "📚 Explicit locking" }
            },
            {
                q: "Why can an index make a query slower rather than faster?",
                options: ["Indexes are only consulted for queries returning one row", "An index forces a sequential scan of the whole table", "Indexes disable the query planner's cost estimation", "Every write must maintain it, and the planner may misuse it"],
                correct: 3,
                explanation: "Each index adds write cost and storage, and a low-selectivity index can lead the planner into a slower path than a sequential scan. Indexes earn their keep against real query patterns, not intuition."
            },
            {
                q: "What is a partial index good for?",
                options: ["Indexing only the rows a hot query actually filters on", "Indexing part of a column's value, such as a prefix", "Splitting one index across several tablespaces", "Building an index without locking the table"],
                correct: 0,
                explanation: "A WHERE clause on the index keeps it small and hot — for example only non-terminated resources. Smaller indexes mean fewer pages to read and less write amplification for rows outside the predicate."
            },
            {
                q: "What does EXPLAIN ANALYZE add over plain EXPLAIN?",
                options: ["It shows which indexes are missing from the schema", "It estimates cost without consulting the statistics", "It executes the query and reports actual rows and time", "It rewrites the query into a more efficient form"],
                correct: 2,
                explanation: "It runs the query, so estimated and actual row counts can be compared. A large divergence usually means stale statistics or a correlation the planner cannot see."
            },
            {
                q: "How does the N+1 query problem usually appear in Django?",
                options: ["Iterating related objects without select_related", "Using a single query with too many joins at once", "Calling count() on a queryset in a template", "Filtering in Python instead of in the database"],
                correct: 0,
                explanation: "One query fetches the parents and each related access fires another. select_related joins, prefetch_related batches — both replace the per-row round trips that only hurt once the data grows."
            },
            {
                q: "Why prefer a UNIQUE constraint over an application-level check?",
                options: ["Constraints are faster than an equivalent SELECT", "The database enforces it even under concurrent writes", "It produces friendlier error messages for users", "Application checks cannot be written for two columns"],
                correct: 1,
                explanation: "Two concurrent requests can both pass a check and both insert. Only the database sees the whole picture at commit time, which is why the constraint is the guarantee and the check is merely the nicer error."
            },
        ],
        7: [
            {
                q: "Why does a long-running transaction hurt PostgreSQL's autovacuum?",
                options: ["It holds an exclusive lock on the system catalogs", "Autovacuum is disabled while any transaction is open", "It forces every index to be rebuilt afterwards", "Dead rows cannot be reclaimed while it may still see them"],
                correct: 3,
                explanation: "MVCC keeps a row version visible while any snapshot might need it, so an idle-in-transaction session blocks cleanup and lets bloat accumulate across the whole database, not just its own tables."
            },
            {
                q: "What does CREATE INDEX CONCURRENTLY trade for not blocking writes?",
                options: ["A requirement to run it inside an explicit transaction", "Two table passes and a possible invalid index on failure", "A permanently larger index than the normal form", "The inability to use the index for unique constraints"],
                correct: 1,
                explanation: "It scans twice and waits for old transactions, so it is slower and cannot run inside a transaction block. A failure leaves an invalid index that must be dropped — the price of not locking a live table."
            },
            {
                q: "When does adding a column to a large table require a rewrite?",
                options: ["Whenever the column is declared NOT NULL", "Only when the table is partitioned by range", "When the default cannot be stored as metadata only", "Whenever the table has more than one index"],
                correct: 2,
                explanation: "Modern PostgreSQL stores a constant default as catalog metadata, making the add instant. A volatile default or a type change still rewrites every row and holds a strong lock while it does."
            },
            {
                q: "What problem does SERIALIZABLE isolation solve that REPEATABLE READ does not?",
                options: ["Write skew between transactions reading disjoint rows", "Dirty reads of uncommitted data from other sessions", "Deadlocks caused by inconsistent lock ordering", "Lost updates to the very same row"],
                correct: 0,
                explanation: "Write skew is two transactions each reading a set, each deciding it is safe to act, and jointly violating an invariant. SERIALIZABLE detects it and aborts one, so the application must be ready to retry."
            },
            {
                q: "Why does keyset pagination beat OFFSET for deep pages?",
                options: ["It avoids the need for an index on the sort column", "It allows the client to jump to an arbitrary page", "The database skips rows it must otherwise count through", "It returns results in a different, cheaper ordering"],
                correct: 2,
                explanation: "OFFSET 100000 still walks those rows. Seeking from the last key uses the index directly — the trade-off being that arbitrary page jumps are no longer possible, only next and previous."
            },
            {
                q: "What is the risk of a JSONB column replacing normalised columns?",
                options: ["JSONB cannot be indexed in any useful way", "JSONB values are limited to a few kilobytes", "Queries against JSONB always require a full scan", "Constraints, types and planner statistics all get weaker"],
                correct: 3,
                explanation: "JSONB indexes well with GIN, but the schema no longer enforces shape or types, and the planner's estimates for containment queries are far poorer. It suits genuinely variable data, not a shortcut around modelling."
            },
        ]
    },

    'f-ai-prompting': {
        1: [
            {
                q: "What is a prompt in AI context?",
                options: ["Warning message from the AI", "Quick response mode setting", "Input text given to AI model", "Command to start the AI program"],
                correct: 2,
                explanation: "A prompt is the input text you provide to an AI model. The model generates a response based on the prompt. Better prompts lead to better outputs.",
                learnMore: { url: "https://platform.openai.com/docs/guides/prompt-engineering", text: "📚 Prompt Engineering" }
            },
            {
                q: "What's prompt engineering?",
                options: ["Crafting effective prompts for AI models", "Technical writing for documentation", "Building prompts with software tools", "Engineering AI model architecture"],
                correct: 0,
                explanation: "Prompt engineering is the skill of writing prompts that get desired outputs from AI models. Includes techniques like giving examples, specifying format, role-playing.",
                learnMore: { url: "https://www.promptingguide.ai/", text: "📚 Prompting Guide" }
            },
            {
                q: "Why does specificity matter in prompts?",
                options: ["AI prefers shorter specific prompts", "Generic prompts are always better", "Specific prompts get more accurate responses", "Specificity makes AI run faster"],
                correct: 2,
                explanation: "Specific prompts reduce ambiguity and guide the model to relevant responses. Instead of 'write code', say 'write a Python function that validates email addresses'.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/prompt-engineering", text: "📚 Claude Prompting" }
            },
        ],
        2: [
            {
                q: "What's few-shot prompting?",
                options: ["Quick short prompts only", "Limiting AI to few responses", "Providing examples in the prompt", "Taking few attempts to get response"],
                correct: 2,
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
                options: ["Context slows down AI responses", "Less context is always better", "Context is only for conversation history", "Background info helps AI understand the task"],
                correct: 3,
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
                options: ["There is no real difference between them", "System sets behaviour; user brings the request", "System is automated while user is manual", "System prompts are always optional to supply"],
                correct: 1,
                explanation: "System prompt sets AI behavior, role, and constraints (persists across messages). User prompt is the specific request. System: 'You are a Python expert.' User: 'How do I sort a list?'",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/system-prompts", text: "📚 System Prompts" }
            },
            {
                q: "What's prompt injection?",
                options: ["Malicious input that changes AI behavior", "Adding prompts to existing code", "Injecting prompts into database", "Injection of prompt variables"],
                correct: 0,
                explanation: "Prompt injection is when user input contains instructions that override the intended prompt behavior. Security concern for AI applications. Sanitize and validate inputs.",
                learnMore: { url: "https://www.lakera.ai/blog/guide-to-prompt-injection", text: "📚 Prompt Injection" }
            },
            {
                q: "What's the purpose of output formatting instructions?",
                options: ["Only for code generation tasks", "Format instructions are ignored", "Make AI output look prettier", "Get responses in specific structure"],
                correct: 3,
                explanation: "Formatting instructions ('respond in JSON', 'use bullet points', 'include code blocks') ensure output is in usable format. Essential for programmatic use of AI outputs.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/control-output-format", text: "📚 Output Format" }
            },
        ],
        4: [
            {
                q: "What's retrieval-augmented generation (RAG)?",
                options: ["Retrieving content that an AI generated earlier", "A generation technique using random augmentation", "Enriching a prompt with retrieved documents", "Augmenting the queries sent to a database"],
                correct: 2,
                explanation: "RAG retrieves relevant documents and includes them in prompt context. AI generates response using both its training and retrieved information. Useful for current/specific knowledge.",
                learnMore: { url: "https://www.pinecone.io/learn/retrieval-augmented-generation/", text: "📚 RAG" }
            },
            {
                q: "What's temperature in AI models?",
                options: ["How fast the model processes each token", "The temperature recorded in the training data", "A parameter controlling response randomness", "Thermal management of the inference hardware"],
                correct: 2,
                explanation: "Temperature controls randomness. Low (0-0.3): deterministic, focused. High (0.7-1): creative, varied. Use low for factual tasks, higher for creative writing.",
                learnMore: { url: "https://platform.openai.com/docs/guides/text-generation/how-should-i-set-the-temperature-parameter", text: "📚 Temperature" }
            },
            {
                q: "What's prompt chaining?",
                options: ["Breaking complex task into sequential prompts", "Blockchain for prompt storage", "Connecting multiple AI models together", "Chaining keywords in single prompt"],
                correct: 0,
                explanation: "Prompt chaining breaks complex tasks into steps. Output of one prompt becomes input for next. Enables more complex reasoning and longer outputs than single prompt.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/chain-prompts", text: "📚 Prompt Chaining" }
            },
            {
                q: "What's constitutional AI prompting?",
                options: ["Using legally vetted prompts for compliance", "Government-regulated prompts for AI systems", "Defining strict rules for prompt structure", "Having AI critique and revise its own outputs"],
                correct: 3,
                explanation: "Constitutional AI has the model critique and revise its outputs against principles. 'Review your response for potential harms and revise.' Self-correction technique.",
                learnMore: { url: "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback", text: "📚 Constitutional AI" }
            },
        ],
        5: [
            {
                q: "What's prompt decomposition?",
                options: ["Removing words the prompt does not need", "Analysing the word frequencies in a prompt", "Breaking a complex prompt into sub-tasks", "Discarding prompts once they have been used"],
                correct: 2,
                explanation: "Prompt decomposition breaks complex tasks into simpler sub-prompts. Each sub-task is easier for the model. Combine results for final answer. Improves reliability.",
                learnMore: { url: "https://www.promptingguide.ai/techniques/decomposition", text: "📚 Decomposition" }
            },
            {
                q: "What's meta-prompting?",
                options: ["Prompts for meta learning models", "Prompts about prompt metadata", "Meta-analysis of prompt data", "Using AI to generate or improve prompts"],
                correct: 3,
                explanation: "Meta-prompting uses AI to generate, evaluate, or improve prompts. 'Write a prompt that would...', 'How could this prompt be improved?' AI helping with prompting.",
                learnMore: { url: "https://arxiv.org/abs/2401.12954", text: "📚 Meta-Prompting" }
            },
            {
                q: "What's the difference between instructions and examples in prompts?",
                options: ["Instructions don't work for AI models", "They're identical approaches to prompting", "Instructions tell what to do; examples show how", "Examples are always better than instructions"],
                correct: 2,
                explanation: "Instructions explicitly state rules. Examples demonstrate desired behavior. Combine both: instructions for rules, examples for format/style. Examples often more effective than long instructions.",
                learnMore: { url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting", text: "📚 Using Examples" }
            },
            {
                q: "How do you debug ineffective prompts?",
                options: ["Prompts either work or they don't", "Test variations, analyze failures, iterate", "Just use different AI model", "Use longer prompts every time"],
                correct: 1,
                explanation: "Debug prompts: test with variations, analyze where responses fail expectations, add examples of failures, clarify ambiguous parts, try different phrasings. Iterate systematically.",
                learnMore: { url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview", text: "📚 Debugging Prompts" }
            },
            {
                q: "What's prompt compression?",
                options: ["Compressing prompt storage on the file system", "Making prompts shorter always reduces quality", "Reducing prompt length while preserving meaning", "Applying ZIP compression to prompt text files"],
                correct: 2,
                explanation: "Prompt compression reduces token count while keeping essential information. Important for cost and context length limits. Remove redundancy, use concise phrasing, prioritize key info.",
                learnMore: { url: "https://www.llmlingua.com/", text: "📚 LLMLingua" }
            },
        ]
    },

    'f-ai-coding': {
        1: [
            {
                q: "What's GitHub Copilot?",
                options: ["A pilot programme for new GitHub features", "GitHub's built-in tool for navigating code", "An AI pair programmer suggesting code inline", "GitHub's automated service for code review"],
                correct: 2,
                explanation: "GitHub Copilot is an AI pair programmer that suggests code completions as you type. Trained on public code. Integrates with VS Code, JetBrains, and other editors.",
                learnMore: { url: "https://github.com/features/copilot", text: "📚 GitHub Copilot" }
            },
            {
                q: "What's inline code completion?",
                options: ["Inlining function calls automatically", "AI suggesting code as you type", "Completing inline CSS style rules", "Auto-completing inline comments"],
                correct: 1,
                explanation: "Inline completion shows AI suggestions as you type, often as ghost text. Accept with Tab. Suggestions based on current file context, cursor position, and prompt.",
                learnMore: { url: "https://code.visualstudio.com/docs/copilot/overview", text: "📚 VS Code Copilot" }
            },
            {
                q: "How do comments help AI code generation?",
                options: ["They slow the generation of suggestions", "They state the intent the model can act on", "They are ignored entirely by completions", "Only specially tagged comments have effect"],
                correct: 1,
                explanation: "Comments describing what you want help AI generate appropriate code. '// Function to validate email format' followed by newline often generates the function.",
                learnMore: { url: "https://github.blog/2022-09-14-8-things-you-didnt-know-you-could-do-with-github-copilot/", text: "📚 Copilot Tips" }
            },
        ],
        2: [
            {
                q: "What's Cursor?",
                options: ["A code navigation and cursor system", "A cursor-based programming language", "A mouse cursor customization tool", "An AI-native code editor built on VS Code"],
                correct: 3,
                explanation: "Cursor is an AI-native code editor built on VS Code. Features: AI chat, code generation, codebase understanding, multi-file editing. Designed for AI-assisted development.",
                learnMore: { url: "https://cursor.sh/", text: "📚 Cursor" }
            },
            {
                q: "What's Claude Code?",
                options: ["Claude's web-based coding assistant", "A special code language for Claude", "Anthropic's agentic CLI coding tool", "The internal code name for Claude"],
                correct: 2,
                explanation: "Claude Code is Anthropic's official CLI for coding with Claude. Agentic coding with file editing, terminal commands, and multi-step task execution.",
                learnMore: { url: "https://claude.ai/code", text: "📚 Claude Code" }
            },
            {
                q: "What should you verify in AI-generated code?",
                options: ["Correctness, security, and codebase fit", "AI code is always correct by design", "Just verify that the syntax is valid", "Only check if it runs without errors"],
                correct: 0,
                explanation: "Always verify AI code: correctness (does it do what you want?), security (no vulnerabilities?), style (fits codebase?), edge cases (handles errors?). Trust but verify.",
                learnMore: { url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", text: "📚 Copilot Best Practices" }
            },
        ],
        3: [
            {
                q: "What's chat-based code assistance?",
                options: ["A conversational AI coding interface", "Code comments formatted as chat", "A shared chat room for developers", "A chatbot that writes all your code"],
                correct: 0,
                explanation: "Chat interfaces let you ask coding questions, request explanations, generate code through conversation. More flexible than inline completion. Can discuss context and alternatives.",
                learnMore: { url: "https://docs.github.com/en/copilot", text: "📚 Copilot Chat" }
            },
            {
                q: "What's codebase context in AI coding?",
                options: ["AI understanding your whole project", "The base code that AI modifies first", "The context menu in code editors", "Contextual comments added to code"],
                correct: 0,
                explanation: "Codebase context means AI understands your project structure, existing code, patterns, and dependencies. Better context leads to more relevant suggestions. Some tools index whole codebases.",
                learnMore: { url: "https://cursor.sh/features", text: "📚 Cursor Features" }
            },
            {
                q: "When is AI code generation most useful?",
                options: ["Novel algorithms requiring research", "All code should be AI-generated always", "Security-critical authentication code", "Boilerplate, tests, and common patterns"],
                correct: 3,
                explanation: "AI excels at: boilerplate, repetitive patterns, tests, documentation, common tasks. Less suitable for: novel algorithms, security-critical code, complex business logic requiring domain expertise.",
                learnMore: { url: "https://github.blog/2022-09-14-8-things-you-didnt-know-you-could-do-with-github-copilot/", text: "📚 Copilot Use Cases" }
            },
            {
                q: "What's agentic coding?",
                options: ["AI performing multi-step tasks autonomously", "Writing code for AI agents specifically", "Agents that review code quality", "Agent-based modeling in code"],
                correct: 0,
                explanation: "Agentic coding lets AI autonomously perform multi-step tasks: create files, run tests, fix errors, iterate. More autonomous than simple completion. Claude Code operates this way.",
                learnMore: { url: "https://www.anthropic.com/claude/code", text: "📚 Claude Code" }
            },
        ],
        4: [
            {
                q: "How do you provide good context to AI coding tools?",
                options: ["Open relevant files and explain intent clearly", "Context doesn't matter much for AI tools", "Always provide maximum context possible", "Only the current open file matters at all"],
                correct: 0,
                explanation: "Good context: open related files, write descriptive comments/docstrings, explain the goal. Reference existing patterns. Clear intent helps AI generate appropriate code.",
                learnMore: { url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot", text: "📚 Prompt Engineering" }
            },
            {
                q: "What's the role of tests in AI-assisted coding?",
                options: ["Verify AI output and guide generation", "AI tools can't understand test code", "Only manual testing works with AI code", "Tests are unnecessary with AI coding"],
                correct: 0,
                explanation: "Tests verify AI-generated code works correctly. Test-driven: write tests first, AI generates implementation. Tests enable confident iteration and catch AI errors.",
                learnMore: { url: "https://github.blog/2023-01-17-github-copilot-for-unit-tests/", text: "📚 Copilot for Tests" }
            },
            {
                q: "How do you handle AI code that's almost right?",
                options: ["Accept it as-is every time", "Edit or iterate with better instructions", "AI code can't be modified at all", "Reject and rewrite it from scratch"],
                correct: 1,
                explanation: "Iterate: edit small issues manually, regenerate with more specific instructions, use chat to refine. AI gets you 80% there; you refine the last 20%. Efficient workflow.",
                learnMore: { url: "https://cursor.sh/features", text: "📚 Iterative Editing" }
            },
            {
                q: "What are AI coding tool limitations?",
                options: ["It only works on certain languages", "AI tools have no limitations anymore", "Output may be outdated or insecure", "Limitations don't affect code quality"],
                correct: 2,
                explanation: "AI limitations: training data cutoff (may not know new APIs), can generate incorrect/insecure code, may not match your style, doesn't understand full business context.",
                learnMore: { url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot", text: "📚 Best Practices" }
            },
        ],
        5: [
            {
                q: "What's code generation with retrieval?",
                options: ["Relevant examples are retrieved to guide output", "Previously generated code is retrieved again", "A backup system for code that was generated", "Code written specifically to retrieve data"],
                correct: 0,
                explanation: "Retrieval-augmented generation for code: AI retrieves relevant code snippets, documentation, or examples from codebase/web to inform better generation. Combines knowledge sources.",
                learnMore: { url: "https://www.cursor.sh/", text: "📚 Cursor RAG" }
            },
            {
                q: "How do you integrate AI coding into team workflow?",
                options: ["Everyone uses AI tools independently", "Ban AI coding tools in team projects", "Set guidelines, review code, share prompts", "Let AI replace the code review process"],
                correct: 2,
                explanation: "Team integration: establish acceptable use guidelines, still require code review for AI code, share effective prompts/techniques, discuss security/legal implications.",
                learnMore: { url: "https://resources.github.com/copilot-trust-center/", text: "📚 Copilot Trust Center" }
            },
            {
                q: "What's multi-file AI editing?",
                options: ["Multiple AI models editing same file", "AI modifying related files coherently", "Editing files in multiple editors at once", "Editing multiple backup copies of a file"],
                correct: 1,
                explanation: "Multi-file editing lets AI make coordinated changes across files: rename across codebase, refactor touching multiple files, implement feature spanning files. Maintains consistency.",
                learnMore: { url: "https://cursor.sh/features", text: "📚 Multi-File Editing" }
            },
            {
                q: "What's the future of AI-assisted development?",
                options: ["More autonomous agents with human oversight", "AI coding tools are just a passing trend", "No significant changes are expected", "AI will replace all developers soon"],
                correct: 0,
                explanation: "Trends: more autonomous agents handling complex tasks, better codebase understanding, natural language as interface. Human oversight remains essential for quality and correctness.",
                learnMore: { url: "https://www.anthropic.com/research", text: "📚 AI Research" }
            },
            {
                q: "How do you measure AI coding tool effectiveness?",
                options: ["Acceptance rate, time saved, code quality", "Measure effectiveness only by cost savings", "No metrics are needed for AI tools", "Only count lines generated per day"],
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
                options: ["AI that takes actions to achieve goals autonomously", "AI model limited to answering user questions", "AI system trained only on static data inputs", "AI assistant restricted to text-based responses"],
                correct: 0,
                explanation: "AI agent is an AI system that perceives environment, makes decisions, and takes actions to achieve goals. Unlike chatbots that just respond, agents act autonomously.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Building Effective Agents" }
            },
            {
                q: "What's tool use in AI agents?",
                options: ["AI using physical robot tools", "Tools for building AI models", "User tools for controlling AI", "AI calling external tools and APIs"],
                correct: 3,
                explanation: "Tool use allows AI to call external functions: search the web, run code, query databases, access APIs. Extends capabilities beyond just text generation.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/tool-use", text: "📚 Tool Use" }
            },
            {
                q: "What's the agent loop?",
                options: ["Feedback loop for user input", "Cycle of observe, think, act, repeat", "Loop that trains AI agents", "Circular dependency in AI code"],
                correct: 1,
                explanation: "Agent loop: observe (perceive state), think (decide action), act (execute), observe result, repeat until goal achieved. Core pattern for autonomous AI agents.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agent Loop" }
            },
        ],
        2: [
            {
                q: "What's MCP (Model Context Protocol)?",
                options: ["Model checkpoint protocol for saving weights", "Master control program for AI orchestration", "Message compression protocol for AI traffic", "Standard for connecting AI to tools and data"],
                correct: 3,
                explanation: "MCP is Anthropic's open standard for connecting AI models to external data sources and tools. Defines how AI requests tool execution and receives results.",
                learnMore: { url: "https://www.anthropic.com/news/model-context-protocol", text: "📚 MCP" }
            },
            {
                q: "What's an MCP server?",
                options: ["Server running AI model inference and training", "Message coordination protocol service endpoint", "Service that provides tools to AI via MCP standard", "Management control panel for server monitoring"],
                correct: 2,
                explanation: "MCP server exposes tools and data to AI models. Defines available tools, handles requests, returns results. Examples: file system access, database queries, API calls.",
                learnMore: { url: "https://modelcontextprotocol.io/", text: "📚 MCP Documentation" }
            },
            {
                q: "What's function calling in AI?",
                options: ["Calling functions that return AI responses", "User calling AI functions directly", "Functions that train AI models", "AI requests execution of defined functions"],
                correct: 3,
                explanation: "Function calling lets AI models request execution of predefined functions with parameters. Model decides when/how to call based on user request. Results returned to model.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/tool-use", text: "📚 Function Calling" }
            },
        ],
        3: [
            {
                q: "What's an agentic workflow?",
                options: ["Human agents making use of AI tools at work", "AI completing multi-step tasks autonomously", "A workflow designed for training AI agents", "A workflow managed by an external AI agency"],
                correct: 1,
                explanation: "Agentic workflow: AI plans steps, executes them, handles errors, iterates until complete. More autonomous than single prompt-response. Claude Code operates this way.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agentic Workflows" }
            },
            {
                q: "What does a failing tool call give the agent?",
                options: ["An observation it can reason about and retry", "An immediate abort that returns to the user", "Nothing, since errors are stripped beforehand", "A log entry that never re-enters the loop"],
                correct: 0,
                explanation: "The loop is closed: a failed call comes back as an observation the model reasons about, so it can correct the arguments or choose another tool. Swallowing errors leaves the agent guessing."
            },
            {
                q: "What's tool schema in MCP?",
                options: ["Definition of what a tool does and its parameters", "Database schema for storing tool configurations", "Schema describing AI model internal tool usage", "Versioning schema for tool release management"],
                correct: 0,
                explanation: "Tool schema defines: tool name, description, input parameters (types, descriptions, required/optional). AI model uses schema to understand when and how to call tools.",
                learnMore: { url: "https://modelcontextprotocol.io/docs/specification/schema", text: "📚 Tool Schema" }
            },
            {
                q: "What's human-in-the-loop for AI agents?",
                options: ["Humans embedded in the physical AI processing loop", "Human decision-making replaced entirely by AI logic", "Human annotators continuously retraining the model", "Human approval required for certain agent actions"],
                correct: 3,
                explanation: "Human-in-the-loop requires human approval for sensitive actions: file deletion, external API calls, deployments. Balances autonomy with safety. Often configurable per action type.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Human Oversight" }
            },
        ],
        4: [
            {
                q: "What's agent planning?",
                options: ["Scheduling the times at which agents run", "An agent breaking a goal into ordered steps", "Designing the model architecture itself", "Deciding where the agents will be deployed"],
                correct: 1,
                explanation: "Agent planning: AI analyzes goal, breaks into sub-goals, determines action sequence, anticipates obstacles. Good planning improves success rate. May involve explicit planning steps.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Agent Planning" }
            },
            {
                q: "How do agents handle errors?",
                options: ["Errors cannot occur inside autonomous AI agents", "Errors always terminate the agent immediately", "Silently ignore errors and continue processing", "Detect, analyze, and retry with a different approach"],
                correct: 3,
                explanation: "Good agents: detect errors, understand what went wrong, try alternative approaches, ask for help if stuck. Robustness to errors is crucial for autonomous operation.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/tool-use#error-handling", text: "📚 Error Handling" }
            },
            {
                q: "What's context window management in agents?",
                options: ["Viewing the internal context state of the AI model", "Switching context between multiple running agents", "Managing limited memory for long-running tasks", "Setting display window size for the agent interface"],
                correct: 2,
                explanation: "Agents must manage context window limits. Strategies: summarize history, keep relevant info, discard old details, use external memory. Critical for long-running tasks.",
                learnMore: { url: "https://docs.anthropic.com/claude/docs/long-context-window-tips", text: "📚 Context Management" }
            },
            {
                q: "What's agent observability?",
                options: ["Agents observing how users behave over time", "Patterns that are observable in AI-written code", "Being able to monitor and debug agent behaviour", "A principle borrowed from quantum mechanics"],
                correct: 2,
                explanation: "Agent observability: logging decisions, actions, errors. Enables debugging, understanding agent behavior, improving prompts. Critical for production agents. Include traces and metrics.",
                learnMore: { url: "https://langfuse.com/", text: "📚 Langfuse" }
            },
        ],
        5: [
            {
                q: "What's multi-agent orchestration?",
                options: ["Coordinating several agents working together", "Orchestrating the agent training process", "Several users controlling a single agent", "Running the same agent in several games"],
                correct: 0,
                explanation: "Multi-agent orchestration coordinates multiple specialized agents. Agents may collaborate, delegate, or compete. Complex workflows split between experts. Requires coordination layer.",
                learnMore: { url: "https://www.anthropic.com/research/building-effective-agents", text: "📚 Multi-Agent Systems" }
            },
            {
                q: "What's agent memory?",
                options: ["The short-term context window and nothing else", "Information persisted across agent sessions", "The RAM consumed during model inference", "Training data the model has memorised verbatim"],
                correct: 1,
                explanation: "Agent memory persists across sessions: user preferences, learned facts, past interactions. Types: short-term (context), long-term (vector DB), episodic (specific memories).",
                learnMore: { url: "https://www.pinecone.io/learn/langchain-agents/", text: "📚 Agent Memory" }
            },
            {
                q: "What's the ReAct pattern?",
                options: ["The React framework applied to AI agents", "Reactive programming applied to agents", "Reasoning and acting interleaved in steps", "Measuring an agent's reaction latency"],
                correct: 2,
                explanation: "ReAct (Reasoning + Acting): agent alternates between reasoning (thinking about what to do) and acting (calling tools). Explicit reasoning improves decision quality.",
                learnMore: { url: "https://arxiv.org/abs/2210.03629", text: "📚 ReAct Paper" }
            },
            {
                q: "How do you evaluate AI agent performance?",
                options: ["Count the total number of tool calls the agent makes", "Only verify whether the agent returns any response", "No formal evaluation is needed for autonomous agents", "Task success rate, efficiency, safety, and satisfaction"],
                correct: 3,
                explanation: "Evaluate: task completion rate, steps/cost to complete, error rate, safety (no harmful actions), user satisfaction. Create benchmarks for your use cases. Monitor production metrics.",
                learnMore: { url: "https://www.anthropic.com/research/evaluating-ai-agents", text: "📚 Agent Evaluation" }
            },
            {
                q: "What are safety considerations for AI agents?",
                options: ["Limit permissions, require approval, monitor actions", "Agents are inherently safe and need no restrictions", "Safety only matters for physical robotics systems", "Trust all AI decisions without additional oversight"],
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
                options: ["Django REST Framework", "Express.js framework", "Flask web framework", "FastAPI framework"],
                correct: 0,
                explanation: "Waldur's backend (waldur-mastermind) is built on Django REST Framework, providing a powerful REST API with serializers, viewsets, and authentication.",
                learnMore: { url: "https://docs.waldur.com/latest/", text: "📚 Waldur Documentation" }
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
                options: ["SQLite embedded DB", "MongoDB document DB", "PostgreSQL relational DB", "MySQL relational DB"],
                correct: 2,
                explanation: "Waldur uses PostgreSQL as its primary database, leveraging its robust features like JSON fields, full-text search, and transactional integrity.",
                learnMore: { url: "https://docs.waldur.com/latest/about/getting-started/", text: "📚 Waldur Deployment" }
            },
        ],
        2: [
            {
                q: "What are Structure Apps in Waldur?",
                options: ["Pluggable modules for resource types", "REST API endpoint definitions", "Mobile applications for users", "Database table structures"],
                correct: 0,
                explanation: "Structure Apps are Waldur plugins that define new resource types (e.g., OpenStack, SLURM). Each provides models, serializers, views, and backend logic.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/plugins/plugins/", text: "📚 Waldur Plugins" }
            },
            {
                q: "Where do settings an operator changes at runtime live?",
                options: ["In Constance, persisted in the database", "In environment variables read at boot", "In a YAML file reread on every request", "Hardcoded in the Django settings module"],
                correct: 0,
                explanation: "Deployment-level settings live in Django settings and need a restart. Operator-tunable options are Constance settings stored in the database, so they can be changed from the admin interface while the service runs.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/", text: "📚 Celery Documentation" }
            },
            {
                q: "What message broker does Waldur use with Celery?",
                options: ["Amazon SQS", "Apache Kafka", "Direct in-process", "Redis or RabbitMQ"],
                correct: 3,
                explanation: "Waldur uses RabbitMQ as Celery's message broker for task queuing and result storage. RabbitMQ handles background processing for provisioning, billing, and other async operations.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/getting-started/backends-and-brokers/", text: "📚 Celery Brokers" }
            },
        ],
        3: [
            {
                q: "How does Waldur's plugin system work?",
                options: ["Docker containers as plugins", "Django apps registered via settings", "Independent microservices", "npm packages from registry"],
                correct: 1,
                explanation: "Waldur plugins are Django apps registered in INSTALLED_APPS. They hook into core via extensions registry, providing new resource types, views, and background tasks.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/", text: "📚 Developer Guide" }
            },
            {
                q: "What's the purpose of waldur-mastermind?",
                options: ["Frontend web application built with React", "Mobile application codebase for iOS and Android", "Main backend repository with core and plugins", "Documentation website for end users and admins"],
                correct: 2,
                explanation: "waldur-mastermind is the main backend repository containing waldur-core and all official plugins. It's the single deployable backend component.",
                learnMore: { url: "https://github.com/waldur/waldur-mastermind", text: "📚 Waldur Mastermind" }
            },
            {
                q: "How are Waldur API endpoints structured?",
                options: ["DRF ViewSets with routers", "GraphQL resolvers only", "Raw Django view functions", "Flask route decorators"],
                correct: 0,
                explanation: "Waldur uses DRF ViewSets registered with routers. ViewSets provide CRUD operations automatically. Custom actions are added with @action decorator.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/viewsets/", text: "📚 DRF ViewSets" }
            },
            {
                q: "What serializers does Waldur use?",
                options: ["XML-based serialization format exclusively", "Custom binary serialization format only", "Plain JSON serialization without validation", "DRF serializers for API input and output"],
                correct: 3,
                explanation: "Waldur uses DRF serializers for validation, parsing input, and formatting output. HyperlinkedModelSerializer provides URL-based relationships between resources.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/serializers/", text: "📚 DRF Serializers" }
            },
        ],
        4: [
            {
                q: "What's the role of waldur-core vs plugins?",
                options: ["Plugins are bundled directly inside core code", "Core and plugins serve the identical purpose", "Core provides base, plugins add integrations", "Core is an optional add-on to the platform"],
                correct: 2,
                explanation: "waldur-core provides base models (Customer, Project), permissions, marketplace, and infrastructure. Plugins add specific provider integrations (OpenStack, Azure, etc.).",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/waldur-architecture/", text: "📚 Waldur Structure" }
            },
            {
                q: "How does Waldur handle background jobs?",
                options: ["Python threads spawned directly by the app", "Celery tasks with periodic beat scheduling", "No built-in support for background job processing", "System-level cron job entries for scheduling"],
                correct: 1,
                explanation: "Waldur uses Celery for background jobs. Celery Beat schedules periodic tasks (sync, cleanup). Tasks are defined with @shared_task decorator and can be chained.",
                learnMore: { url: "https://docs.celeryq.dev/en/stable/userguide/periodic-tasks.html", text: "📚 Periodic Tasks" }
            },
            {
                q: "What's the structure of a Waldur plugin?",
                options: ["Frontend components and nothing else", "A Django app with models, views and tasks", "A set of configuration files and nothing else", "A single Python module held in one file"],
                correct: 1,
                explanation: "A Waldur plugin is a Django app with: models.py (resources), serializers.py (API format), views.py (viewsets), tasks.py (Celery tasks), and extension.py (registration).",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/plugins/plugins/", text: "📚 Plugin Development" }
            },
            {
                q: "How does Waldur manage database migrations?",
                options: ["Django migrations per app", "Manual schema changes", "Raw SQL scripts only", "No migration support"],
                correct: 0,
                explanation: "Waldur uses Django migrations. Each app has its own migrations folder. Run makemigrations when models change, then migrate to apply. Migrations are version-controlled.",
                learnMore: { url: "https://docs.djangoproject.com/en/stable/topics/migrations/", text: "📚 Django Migrations" }
            },
        ],
        5: [
            {
                q: "How do you extend Waldur with custom resource types?",
                options: ["Use YAML configuration files exclusively", "Directly modify the core source code base", "Build an external API bridge integration", "Create structure app with models and views"],
                correct: 3,
                explanation: "Create a new Django app with: Resource model inheriting from marketplace.Resource, serializers, viewsets, processor for order handling, and register via extension.py.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/plugins/plugins/", text: "📚 Custom Plugins" }
            },
            {
                q: "How does Waldur handle multi-tenancy at database level?",
                options: ["Separate database per tenant", "Shared database with filtering", "PostgreSQL schemas per tenant", "No multi-tenancy support"],
                correct: 1,
                explanation: "Waldur uses shared database with Customer (organization) and Project models. QuerySets are filtered by user permissions. No tenant isolation at DB level - it's application-level.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/creat_an_organization/", text: "📚 Organizations" }
            },
            {
                q: "What's the Waldur executor pattern?",
                options: ["Backend-specific provisioning logic", "User permission executor", "Database query executor", "Celery task runner pattern"],
                correct: 0,
                explanation: "Executors contain backend-specific provisioning logic. They implement create/update/delete for resources, communicating with external APIs (OpenStack, SLURM, etc.).",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/", text: "📚 Developer Guide" }
            },
            {
                q: "How does Waldur handle service provider backends?",
                options: ["Direct API calls everywhere", "Hardcoded provider logic", "Backend classes with common interface", "External configuration files"],
                correct: 2,
                explanation: "Each provider has a Backend class implementing common interface (create_resource, delete_resource). ServiceSettings stores credentials. Allows multiple instances per provider type.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/site-agent/docs/architecture/", text: "📚 Backend Development" }
            },
            {
                q: "What's the role of waldur-homeport?",
                options: ["PostgreSQL database", "React frontend application", "Nginx load balancer", "Django backend service"],
                correct: 1,
                explanation: "waldur-homeport is the React-based frontend SPA. It communicates with waldur-mastermind via REST API. Uses Redux for state, React Router for navigation.",
                learnMore: { url: "https://github.com/waldur/waldur-homeport", text: "📚 Homeport Repository" }
            },
            {
                q: "How does a module such as the AI assistant join the platform?",
                options: ["It registers an extension class the core discovers", "It is imported directly by the core url routing", "It runs as a separate service behind the same proxy", "It is compiled into the main application package"],
                correct: 0,
                explanation: "Modules expose an extension — the chat module registers MarketplaceChatExtension — and the core discovers it, wiring URLs, settings, Celery tasks and permissions without the core importing the plugin."
            },
            {
                q: "Which runtime does Mastermind target today?",
                options: ["Python 3.13 with Django 4.2", "Python 3.13 with Django 6.0", "Python 3.9 with Django 4.2", "Python 3.11 with Django 5.0"],
                correct: 1,
                explanation: "The project pins Python 3.13 and Django 6.0, so features and deprecations from those releases apply. The site agent deliberately supports a wider Python range, since it runs on whatever the provider site has."
            },
        ]
    },

    'c-marketplace': {
        1: [
            {
                q: "What is an Offering in Waldur marketplace?",
                options: ["Sales pitch document for marketing", "User account within an organization", "Template for provisionable resources", "Payment method for billing purposes"],
                correct: 2,
                explanation: "An Offering is a template that defines what can be provisioned: its type, configuration options, pricing plans, and which backend provides it. Users order from offerings.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/marketplace/", text: "📚 Marketplace Guide" }
            },
            {
                q: "What is a Category in the marketplace?",
                options: ["Price tier for billing calculations", "Log severity level for event filtering", "Grouping for offerings like compute or storage", "User role within an organization project"],
                correct: 2,
                explanation: "Categories organize offerings by type (Compute, Storage, HPC, etc.). They help users discover relevant services and can have custom icons and descriptions.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/marketplace/", text: "📚 Marketplace Categories" }
            },
            {
                q: "Who creates offerings in Waldur?",
                options: ["External systems via automated imports", "The platform automatically from templates", "Service providers and administrators", "End users requesting resources directly"],
                correct: 2,
                explanation: "Service providers (organizations with provider role) and staff administrators create offerings. End users consume offerings by placing orders.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/site-agent/", text: "📚 Provider Guide" }
            },
        ],
        2: [
            {
                q: "What's the relationship between Offering and Resource?",
                options: ["Resource is a container that holds Offerings", "They exist independently with no connection", "They are the same entity in the data model", "Offering is template, Resource is instance"],
                correct: 3,
                explanation: "An Offering is a template defining what can be created. A Resource is a provisioned instance created from an offering. Many resources can be created from one offering.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/resource_management/", text: "📚 Resources" }
            },
            {
                q: "What is an Order in Waldur?",
                options: ["Report summarizing resource usage statistics", "Shopping cart for saved offering selections", "Invoice generated for consumed resources", "Request to create, modify, or terminate a resource"],
                correct: 3,
                explanation: "An Order is a request to perform an action on a resource: create, update, or terminate. Orders go through approval workflow and are processed by backend executors.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/order-management/", text: "📚 Order Management" }
            },
            {
                q: "What's an offering component?",
                options: ["Plugin for extending functionality", "Category for grouping offerings", "Measurable unit like CPU cores or RAM", "UI component for rendering forms"],
                correct: 2,
                explanation: "Components define measurable, billable units of an offering: CPU cores, RAM GB, storage TB, etc. Each component has a measurement unit and can have a price.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/adding-an-offering/", text: "📚 Offering Components" }
            },
        ],
        3: [
            {
                q: "What states can a marketplace Order have?",
                options: ["Orders can only be Open or Closed", "Pending, Executing, Done, Erred, etc.", "Only custom user-defined states apply", "Orders have no defined states at all"],
                correct: 1,
                explanation: "Orders transition through states: pending-consumer → pending-provider → executing → done/erred. Approval workflows control state transitions.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/order-management/", text: "📚 Order States" }
            },
            {
                q: "What triggers order processing in Waldur?",
                options: ["Approval or auto-approve then Celery tasks", "An external webhook triggers processing", "Orders execute immediately upon creation", "An admin manually processes each order"],
                correct: 0,
                explanation: "After approval (manual or auto), Celery tasks pick up the order, call the appropriate backend executor, and update the resource and order state.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/marketplace-orders/", text: "📚 Workflows" }
            },
            {
                q: "What's a plan in Waldur marketplace?",
                options: ["Customer support escalation template", "Project milestone tracking document", "Pricing configuration tied to an offering", "Step-by-step deployment specification"],
                correct: 2,
                explanation: "A Plan defines pricing for an offering. It sets prices per component unit and billing period. An offering can have multiple plans (e.g., standard, premium).",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/billing-and-accounting/", text: "📚 Pricing Plans" }
            },
            {
                q: "How does resource termination work?",
                options: ["Resources are deleted directly from database", "A terminate order is processed by backend", "Admin removes the resource entry manually", "Resources expire automatically after timeout"],
                correct: 1,
                explanation: "Termination creates an Order with type='Terminate'. After approval, the backend executor deletes the resource from the provider and marks it terminated in Waldur.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/resource_management/", text: "📚 Resource Lifecycle" }
            },
        ],
        4: [
            {
                q: "How do offering components affect pricing?",
                options: ["They define measurable units like CPU and RAM with prices", "Components serve as documentation for administrators", "Offering components have no effect on pricing at all", "Components are displayed for visual reference only"],
                correct: 0,
                explanation: "Components define billable units. Plans set prices per unit. Usage × Price = Cost. E.g., 4 CPU cores × $0.05/hour = $0.20/hour. Enables usage-based billing.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/billing-and-accounting/", text: "📚 Component Pricing" }
            },
            {
                q: "What's offering attributes used for?",
                options: ["Grouping offerings in categories", "Setting user access permissions", "Styling the offering display page", "Custom configuration options for resources"],
                correct: 3,
                explanation: "Offering attributes define user-configurable options when ordering: dropdown selections, text inputs, checkboxes. They customize what users can request.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/adding-an-offering/", text: "📚 Offering Attributes" }
            },
            {
                q: "How does Waldur track resource usage?",
                options: ["Only external monitoring systems track usage", "Admins enter usage data manually per resource", "Waldur does not track resource usage at all", "Component usage is reported to Waldur periodically"],
                correct: 3,
                explanation: "Backend plugins report component usage periodically (CPU hours, storage GB). This feeds into billing calculations and usage reports.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/staff-users/reporting/", text: "📚 Usage Reporting" }
            },
            {
                q: "What's the approval workflow in marketplace?",
                options: ["Approval is handled by an external system only", "All marketplace orders are auto-approved always", "Orders in the marketplace are never approved", "Orders can require manager or admin approval"],
                correct: 3,
                explanation: "Offerings can require approval: consumer (project manager) and/or provider (service provider). Auto-approve is possible. Configurable per offering.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/marketplace-orders/", text: "📚 Approval Workflows" }
            },
        ],
        5: [
            {
                q: "What's the difference between public and private offerings?",
                options: ["Public visible to all, private to specific customers", "Public offerings are always free of charge", "Private offerings are hosted on external platforms", "Both have the same visibility to all users"],
                correct: 0,
                explanation: "Public offerings are visible to all users in the marketplace. Private offerings are restricted to specific customers, enabling exclusive services or custom pricing.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/adding-an-offering/", text: "📚 Offering Visibility" }
            },
            {
                q: "How does the marketplace handle billing?",
                options: ["Only external billing systems can be integrated", "Admins must create each invoice entry manually", "Billing is not supported within the marketplace", "Invoices generated from component usage and prices"],
                correct: 3,
                explanation: "Waldur generates invoices periodically based on resource usage and plan prices. Supports fixed and usage-based billing. Integrates with payment systems.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/billing-and-accounting/", text: "📚 Billing System" }
            },
            {
                q: "What's offering secret options for?",
                options: ["Provider-only configuration hidden from users", "Encrypted storage for all user passwords", "Management interface for user API keys", "Secure vault for storing user credentials"],
                correct: 0,
                explanation: "Secret options store provider-side configuration hidden from users: backend credentials, internal settings. Only provider staff can view/edit these.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/adding-an-offering/", text: "📚 Secret Options" }
            },
            {
                q: "How do you implement custom offering types?",
                options: ["Edit the YAML configuration file for offerings", "Modify the Waldur core source code directly", "Create a plugin with offering type and processor", "Custom offering types are not supported at all"],
                correct: 2,
                explanation: "Create a plugin defining: offering type identifier, processor class handling orders, optional executor for backend interaction, and serializers for custom attributes.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/plugins/plugins/", text: "📚 Custom Offerings" }
            },
            {
                q: "What's the robot account feature?",
                options: ["A standard account for regular users", "Automated access for resources and integrations", "A temporary account for running tests", "A superuser account for administrators"],
                correct: 1,
                explanation: "Robot accounts provide API access for automated systems and integrations. They have scoped permissions, can be attached to resources, and support credential rotation.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/service-accounts/", text: "📚 Robot Accounts" }
            },
            {
                q: "A Rancher cluster resource contains several sub-projects with their own members.",
                options: ["Resource projects, enabled by a plugin option", "One marketplace resource for each sub-project", "A custom field storing the members as JSON", "Sub-projects cannot be modelled in Waldur"],
                correct: 0,
                explanation: "ResourceProject models a sub-entity inside a Resource, with its own FSM state, limits and role assignments. It is opt-in per offering through the enable_resource_projects plugin option.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/resource-projects/", text: "📚 Resource projects" }
            },
            {
                q: "Why do offerings define slug templates for projects and resources?",
                options: ["To translate names into the user's own language", "To keep every identifier globally unique by design", "To generate readable, predictable backend identifiers", "To shorten the URLs used by the frontend router"],
                correct: 2,
                explanation: "Backends need stable, readable names. A template derives them consistently from the project or resource, and conflicts are surfaced as a warning rather than silently producing a duplicate."
            },
        ]
    },

    'c-permissions': {
        1: [
            {
                q: "What does RBAC stand for?",
                options: ["Request-Based Access", "Resource-Based Access Control", "Role-Based Access Control", "Runtime-Based Access"],
                correct: 2,
                explanation: "RBAC (Role-Based Access Control) assigns permissions through roles. Users get roles (owner, manager, member), and roles define what actions are allowed.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/waldur-permissions/", text: "📚 Permissions Guide" }
            },
            {
                q: "What's the highest permission level in Waldur?",
                options: ["Staff (superuser)", "Organization owner", "Resource manager", "Project admin"],
                correct: 0,
                explanation: "Staff users are superusers with full system access. They can manage all organizations, users, and configurations. Organization owners have full access only within their organization.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/staff-users/user_role_management/", text: "📚 User Management" }
            },
            {
                q: "Can users have different roles in different organizations?",
                options: ["Yes, permissions are assigned per-organization", "Only staff users can have different roles", "Only admin users can hold multiple roles", "No, each user can only have a single role"],
                correct: 0,
                explanation: "Users can have different roles in different organizations and projects. A user might be owner in one org and member in another, enabling flexible multi-tenant access.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/waldur-permissions/", text: "📚 Multi-tenant Permissions" }
            },
        ],
        2: [
            {
                q: "What's a role in Waldur's permission system?",
                options: ["Resource allocation limit", "Type of user account in system", "Set of permissions assignable to users", "Organization configuration setting"],
                correct: 2,
                explanation: "A role is a named set of permissions (e.g., owner, manager, member). Assigning a role to a user grants all permissions defined in that role.",
                learnMore: { url: "https://docs.waldur.com/latest/about/terminology/roles_and_permissions/", text: "📚 Roles" }
            },
            {
                q: "At what levels can permissions be assigned in Waldur?",
                options: ["Only at the individual user account level", "Only at the global system-wide level", "Only at the individual resource level", "Customer, Project, and Resource levels"],
                correct: 3,
                explanation: "Permissions can be assigned at: Customer (organization) level, Project level, or specific resource level. Each level has its own set of applicable roles.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/waldur-permissions/", text: "📚 Permission Levels" }
            },
            {
                q: "What's the 'owner' role in an organization?",
                options: ["Access limited to projects within the org", "Access limited to billing data within the org", "Full administrative access to the organization", "Read-only access to organization resources"],
                correct: 2,
                explanation: "Organization owner has full admin access: create/delete projects, manage members, view billing, configure settings. It's the highest role within an organization.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/creat_an_organization/", text: "📚 Organization Owners" }
            },
        ],
        3: [
            {
                q: "How do project permissions inherit from organization?",
                options: ["Inheritance requires manual configuration only", "There is no permission inheritance at all", "Project permissions override organization roles", "Organization owners can access all projects"],
                correct: 3,
                explanation: "Organization owners automatically have access to all projects within that organization. Project-level permissions are additive - they grant access to users without org-level roles.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/waldur-permissions/", text: "📚 Permission Inheritance" }
            },
            {
                q: "What can a project manager do?",
                options: ["Modify billing settings for the organization", "Create new organizations in the system", "Manage project resources and its members", "Access all projects across organizations"],
                correct: 2,
                explanation: "Project managers can: manage project resources, add/remove project members, approve orders within project scope. They cannot create organizations or access billing.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/project-management/", text: "📚 Project Management" }
            },
            {
                q: "How are permissions checked in Waldur API?",
                options: ["Through database-level trigger functions", "Only validated on the frontend client side", "Through Django middleware interceptors only", "Using DRF permission classes on viewsets"],
                correct: 3,
                explanation: "Waldur uses DRF permission classes on viewsets. Each viewset has permission_classes defining who can access. Custom permission classes check user roles against resources.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/permissions/", text: "📚 DRF Permissions" }
            },
            {
                q: "What's the service manager role?",
                options: ["Manages a specific service offering as provider", "Handles user account creation and management", "Has administrative access to all services", "Responsible for organization billing tasks"],
                correct: 0,
                explanation: "Service managers can manage offerings and resources for a specific service provider. They handle orders, configure offerings, but don't have full organization access.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/site-agent/", text: "📚 Service Managers" }
            },
        ],
        4: [
            {
                q: "What's the difference between owner and manager roles?",
                options: ["Managers have broader access than owners do", "Owners have full access, managers have limited rights", "Owner and manager roles are functionally identical", "Owner role operates only at the project level"],
                correct: 1,
                explanation: "Owners have complete control (billing, settings, all projects). Managers have administrative rights within a limited scope (their project or assigned resources).",
                learnMore: { url: "https://docs.waldur.com/latest/about/terminology/roles_and_permissions/", text: "📚 Owner vs Manager" }
            },
            {
                q: "How do you grant a user access to a project?",
                options: ["Modify the database permission tables directly", "Create a new user account for the project", "Edit the user profile to include the project", "Add a permission with a role via the API or UI"],
                correct: 3,
                explanation: "Use the API endpoint or UI to add a permission entry linking user, project, and role. The user immediately gains access according to their assigned role.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/customer-organization/project-management/", text: "📚 Project Access" }
            },
            {
                q: "What permissions does a project member have?",
                options: ["Read-only access without any resource interaction", "Full administrative access to all project resources", "View and use resources with limited modifications", "No access to any project resources or details"],
                correct: 2,
                explanation: "Project members can view project details, see resources, and use allocated resources. They typically cannot create new resources or manage other members.",
                learnMore: { url: "https://docs.waldur.com/latest/about/terminology/roles_and_permissions/", text: "📚 Member Role" }
            },
            {
                q: "How does Waldur handle permission caching?",
                options: ["There is no caching mechanism for permissions", "Permissions are computed and can be cached for speed", "Only database-level query caching is supported", "Permissions are always recomputed on each request"],
                correct: 1,
                explanation: "Waldur can cache permission checks for performance. Cache is invalidated when permissions change. Reduces database queries for repeated permission checks.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/hardware-requirements/", text: "📚 Performance" }
            },
        ],
        5: [
            {
                q: "How can you implement custom permission logic?",
                options: ["Edit the system configuration file settings", "Set custom flags in the database user table", "Permission logic cannot be customized at all", "Override permission classes in DRF viewsets"],
                correct: 3,
                explanation: "Create custom DRF permission classes inheriting from BasePermission. Override has_permission() and has_object_permission() for custom logic. Assign to viewsets.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/permissions/#custom-permissions", text: "📚 Custom Permissions" }
            },
            {
                q: "What's scope-based filtering in Waldur?",
                options: ["Predefined report filters for administrators", "Client-side filtering in the UI components", "A keyword search feature across all models", "Filter querysets based on user permissions"],
                correct: 3,
                explanation: "Scope-based filtering automatically restricts querysets to objects the user can access. Uses filter backends in DRF to enforce permissions at the database query level.",
                learnMore: { url: "https://www.django-rest-framework.org/api-guide/filtering/", text: "📚 Filtering" }
            },
            {
                q: "How do offering permissions work?",
                options: ["Only administrators can manage offering access", "Control who can order from specific offerings", "There are no dedicated offering permissions", "All offerings are always publicly accessible"],
                correct: 1,
                explanation: "Offerings can be restricted to specific customers or user groups. Offering permissions control visibility and ordering rights, enabling private or exclusive services.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/adding-an-offering/", text: "📚 Offering Permissions" }
            },
            {
                q: "What's the call management feature?",
                options: ["Request and approval workflow for resources", "Phone call logging and tracking for support", "Support ticket management and escalation", "API call monitoring and rate limit tracking"],
                correct: 0,
                explanation: "Call management provides request/approval workflows: users submit calls (requests), managers review and approve/reject. Used for resource allocation with human oversight.",
                learnMore: { url: "https://docs.waldur.com/latest/about/concepts/call-management/", text: "📚 Call Management" }
            },
            {
                q: "How does Waldur audit permission changes?",
                options: ["Event logging tracks all permission modifications", "Administrators must track changes manually", "There is no auditing of permission changes", "Auditing relies on external third-party tools"],
                correct: 0,
                explanation: "Waldur logs permission changes as events: who granted/revoked what role, when, to whom. Audit logs help compliance, security review, and troubleshooting.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/core-concepts/logging/", text: "📚 Audit Logs" }
            },
            {
                q: "What does a RoleAvailability record do to a role?",
                options: ["Restricts it to a scope and that scope's descendants", "Grants it to every user in the given scope", "Marks it as deprecated for future assignments", "Copies its permissions from another role"],
                correct: 0,
                explanation: "A role with no availability records is public everywhere. Records bind it to a scope — an offering for offering-specific roles, a customer for organization-scoped clones — and a per-organization deny-list can conceal a system role."
            },
            {
                q: "How is someone invited to a resource or a resource project?",
                options: ["A staff member assigns the role directly", "The same Invitation model, with a generic scope", "A resource-specific invitation model exists", "Resources cannot be invitation scopes at all"],
                correct: 1,
                explanation: "There is no separate model: the invitation's generic scope points at a Resource or ResourceProject and the role's content type must match. Acceptance runs the same add_user flow as a project invitation."
            },
        ]
    },

    'c-billing': {
        1: [
            {
                q: "What does Waldur's billing system track?",
                options: ["Resource usage and costs for customers", "Network bandwidth usage only", "Hardware inventory costs only", "Employee payroll and salaries"],
                correct: 0,
                explanation: "Waldur billing tracks resource consumption, calculates costs based on pricing plans, generates invoices for customers/organizations."
            },
            {
                q: "What's a price estimate in Waldur?",
                options: ["Final invoice amount", "Projected cost for a resource", "Discount percentage offered", "Price negotiation tool"],
                correct: 1,
                explanation: "Price estimates show projected costs before/during resource usage. Helps users understand costs. Updated as usage changes."
            },
            {
                q: "What's an invoice in Waldur?",
                options: ["List of available resources", "User activity report only", "System configuration file", "Bill for resource usage in a period"],
                correct: 3,
                explanation: "Invoices summarize charges for a billing period (usually monthly). Include line items per resource, totals, and payment status."
            },
        ],
        2: [
            {
                q: "How does Waldur calculate resource costs?",
                options: ["Fixed price for everything", "Random pricing each month", "Pricing plans with rates per unit", "Users set their own prices"],
                correct: 2,
                explanation: "Pricing plans define rates: per hour, per GB, per unit. Resources tracked against plans. Costs = usage × rate."
            },
            {
                q: "What are pricing components?",
                options: ["Diagrams that visualize pricing structure", "Members of the team responsible for pricing", "Individual billable aspects of a resource", "Physical hardware components being tracked"],
                correct: 2,
                explanation: "Pricing components are individual billable items: CPU hours, storage GB, RAM GB, etc. Each has its own rate and measurement."
            },
            {
                q: "What's a billing period in Waldur?",
                options: ["Time to pay an invoice", "Period of free trial usage", "Billing team work schedule", "Time range for aggregating charges"],
                correct: 3,
                explanation: "Billing period is typically monthly. Usage aggregated, invoice generated at period end. Can be customized per customer."
            },
        ],
        3: [
            {
                q: "How does Waldur handle different currencies?",
                options: ["Only USD is supported as the billing currency", "Automatic currency conversion happens daily", "Currency is not tracked within billing records", "Configurable currency per customer or offering"],
                correct: 3,
                explanation: "Waldur supports configurable currencies. Offerings can specify currency. Invoices generated in customer's currency."
            },
            {
                q: "What's credit management in Waldur?",
                options: ["User credit score tracking", "Prepaid balance that offsets invoices", "Database credit transactions", "Credit card payment processing"],
                correct: 1,
                explanation: "Credits are prepaid amounts applied to invoices. Organizations can have credit balance. Invoices reduced by available credits."
            },
            {
                q: "How are usage metrics collected for billing?",
                options: ["Users manually enter their usage data monthly", "Backend plugins report usage periodically", "Random sampling estimates resource consumption", "Frontend UI polls users for resource stats"],
                correct: 1,
                explanation: "Backend plugins (OpenStack, SLURM, etc.) report usage metrics via pull tasks. Stored in database, aggregated for billing."
            },
            {
                q: "What's a pricing plan in Waldur?",
                options: ["Set of pricing components for an offering", "Marketing strategy for customer segments", "Roadmap for future price adjustments", "Tiered subscription level for users"],
                correct: 0,
                explanation: "Pricing plan defines how an offering is billed: components, rates, billing frequency. Offerings can have multiple plans."
            },
        ],
        4: [
            {
                q: "How does Waldur integrate with payment systems?",
                options: ["Only manual bank transfers", "Direct cryptocurrency only", "Payment gateways via plugins", "No payment integration available"],
                correct: 2,
                explanation: "Waldur can integrate with payment gateways (Stripe, PayPal) via plugins. Handles payment processing, status updates, refunds."
            },
            {
                q: "What's invoice approval workflow?",
                options: ["Invoices are always approved automatically", "Review and approve invoices before sending", "Invoices never require any approval step", "Users approve the invoices they receive"],
                correct: 1,
                explanation: "Invoice approval allows staff to review before sending to customers. Catch errors, adjust if needed. Configurable per organization."
            },
            {
                q: "How does downtime billing work?",
                options: ["Charge the full price whatever else happens", "There is no tracking of outages in the platform", "Track outages and credit the customer for them", "Refund the whole invoice automatically each time"],
                correct: 2,
                explanation: "Waldur can track resource downtime. Credits or adjustments can be applied based on SLA agreements. Configurable per offering."
            },
            {
                q: "What's resource cost allocation?",
                options: ["Random cost distribution", "Allocating resources based on cost", "Cost of allocating new resources", "Attribute costs to projects/departments"],
                correct: 3,
                explanation: "Cost allocation attributes charges to specific projects, departments, or cost centers. Enables chargeback/showback reporting."
            },
        ],
        5: [
            {
                q: "How do you implement custom billing logic?",
                options: ["External billing system only", "Modify core billing code directly", "Custom billing not supported", "Custom handlers/plugins for calculation"],
                correct: 3,
                explanation: "Custom billing via plugins: define custom components, calculation methods, reporting. Hook into billing events."
            },
            {
                q: "What's metered vs fixed pricing?",
                options: ["Fixed means unchangeable prices", "Metered: per usage; Fixed: flat rate", "No difference in Waldur", "Metered is more expensive always"],
                correct: 1,
                explanation: "Metered pricing charges per actual usage (CPU hours, GB). Fixed pricing charges flat rate regardless of usage. Can combine both."
            },
            {
                q: "How does Waldur handle billing disputes?",
                options: ["Support tickets, adjustments, credit notes", "Legal action is only option", "Automatic refund on any complaint", "No dispute mechanism exists"],
                correct: 0,
                explanation: "Disputes handled via support. Staff can issue adjustments, credit notes. Audit trail maintained. Configurable dispute workflow."
            },
            {
                q: "What reports does Waldur billing generate?",
                options: ["Only PDF invoices generated", "Usage, cost, invoice, revenue reports", "No billing reports available", "Reports require external tools"],
                correct: 1,
                explanation: "Waldur generates: usage reports, cost breakdowns, invoice summaries, revenue analytics. Export to CSV/Excel. API access for custom reports."
            },
            {
                q: "How do you backfill billing data?",
                options: ["Manually edit database records", "Delete and recreate resources", "Run collection tasks for past periods", "Backfilling is not possible"],
                correct: 2,
                explanation: "If usage data missing, run collection tasks for historical periods. Check backend data availability. May need manual adjustments for gaps."
            },
            {
                q: "A funder pays in advance and consumption draws the balance down.",
                options: ["A quota that blocks orders above the amount", "A manual reconciliation at the end of the year", "Credits, tracked and consumed as usage is recorded", "A discount applied to every future invoice"],
                correct: 2,
                explanation: "Credits model a prepaid balance with its own lifecycle and history, drawn down as consumption is billed — distinct from quotas, which bound how much may exist rather than what has been paid for."
            },
            {
                q: "Why gate an order on a purchase order reference?",
                options: ["Procurement must commit before spending begins", "Purchase orders replace the invoice entirely", "The provider cannot invoice without one technically", "It is the only way to apply a discount to an order"],
                correct: 0,
                explanation: "Public sector and enterprise buyers commit funds before consuming them. Orders — including updates that increase cost — can require a purchase order, with renewal handling built around the same record."
            },
        ]
    },

    'c-quotas': {
        1: [
            {
                q: "What are quotas in Waldur?",
                options: ["Limits on resource usage", "Quota voting system", "Queue management system", "Quality metrics for resources"],
                correct: 0,
                explanation: "Quotas limit how much of a resource can be used: CPU cores, RAM, storage, VMs. Prevents overuse, enables fair sharing."
            },
            {
                q: "Why are quotas important?",
                options: ["Quotas exist solely for audit compliance", "Quotas reduce overall system performance", "Prevent resource exhaustion and control costs", "Quotas serve as a cosmetic UI indicator"],
                correct: 2,
                explanation: "Quotas prevent single users from exhausting shared resources, control costs, enable capacity planning, ensure fair allocation."
            },
            {
                q: "At what level are quotas applied?",
                options: ["Quotas can't be hierarchical", "Only at global system level", "Only per individual resource", "Customer, project, or user level"],
                correct: 3,
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
                options: ["Email system administrator directly", "Automatic increase on payment", "Quotas cannot be increased ever", "Submit request through Waldur UI/API"],
                correct: 3,
                explanation: "Users request quota increases through Waldur. Requests go to approval workflow. Administrators review and approve/reject."
            },
            {
                q: "What's quota usage tracking?",
                options: ["Usage tracking is separate feature", "Tracking quota change history", "Manual counting of resources", "Monitoring current usage against limits"],
                correct: 3,
                explanation: "Waldur tracks current usage against quotas: how much used vs allowed. Displayed in UI. Alerts when approaching limits."
            },
        ],
        3: [
            {
                q: "How are quotas inherited in hierarchy?",
                options: ["Children override parent quotas", "No inheritance between levels", "Only leaf nodes have quotas", "Child quotas bounded by parent quotas"],
                correct: 3,
                explanation: "Quota inheritance: project quotas bounded by customer quota. Can't exceed parent. Sum of children can't exceed parent."
            },
            {
                q: "What's a quota scope?",
                options: ["Entity that quota applies to", "User permission scope only", "Scope of quota enforcement code", "Range of quota values allowed"],
                correct: 0,
                explanation: "Quota scope is the entity (customer, project, offering) the quota applies to. Scopes can have different quota types."
            },
            {
                q: "How do you set default quotas?",
                options: ["Configure defaults in settings or offerings", "Each user defines their own quota defaults", "Defaults are hardcoded in the source code", "Default quotas are set by the message broker"],
                correct: 0,
                explanation: "Default quotas set in configuration or per offering. Applied when creating new projects/customers. Can be overridden per entity."
            },
            {
                q: "What's quota aggregation?",
                options: ["Aggregating quota requests", "Statistical quota analysis", "Summing usage across child resources", "Averaging quotas across projects"],
                correct: 2,
                explanation: "Quota aggregation sums usage from child entities. Customer quota usage = sum of project usages. Ensures parent limits respected."
            },
        ],
        4: [
            {
                q: "How do quotas interact with offerings?",
                options: ["Offerings ignore quota system", "Quotas are independent of offerings", "One global quota per offering", "Offerings can define quota limits and types"],
                correct: 3,
                explanation: "Offerings define which quotas apply: what types, default limits. Ordering checks offering quotas. Provider can set offering-specific limits."
            },
            {
                q: "What's quota reservation?",
                options: ["No reservation concept exists", "Reserving quota for future use", "Temporarily hold quota during provisioning", "Quota for reservation system only"],
                correct: 2,
                explanation: "During resource creation, quota is reserved before provisioning completes. If creation fails, reservation released. Prevents race conditions."
            },
            {
                q: "How do you monitor quota utilization?",
                options: ["Only through database queries", "Dashboard, reports, alerts for threshold", "No monitoring capabilities exist", "External monitoring required"],
                correct: 1,
                explanation: "Waldur provides: quota dashboards, utilization reports, configurable alerts when approaching limits. API for custom monitoring."
            },
            {
                q: "What's over-provisioning in quotas?",
                options: ["Over-counting resource usage", "Always having excess quota", "Quota errors in provisioning", "Allowing more than physical capacity"],
                correct: 3,
                explanation: "Over-provisioning allows quotas exceeding physical capacity, assuming not all users use full quota. Risky but enables flexibility."
            },
        ],
        5: [
            {
                q: "How do you implement custom quota types?",
                options: ["Request from Waldur team", "Define in plugin with handlers", "Modify core quota code only", "Custom quotas not supported"],
                correct: 1,
                explanation: "Custom quotas defined in plugins: specify quota name, aggregation logic, enforcement points. Register with quota system."
            },
            {
                q: "How do quotas work with scheduling?",
                options: ["Check quota before scheduling resources", "Quotas only checked monthly", "Scheduler sets quotas automatically", "Scheduling ignores quotas completely"],
                correct: 0,
                explanation: "Resource scheduling (SLURM jobs, etc.) checks quotas before allocation. Job rejected if would exceed quota. Enables fair scheduling."
            },
            {
                q: "What's quota policy management?",
                options: ["Rules for automatic quota adjustment", "Political quota allocation system", "No policy features exist", "Policy documents about quotas"],
                correct: 0,
                explanation: "Quota policies: automatic adjustments based on rules, time-based quotas, automatic cleanup of unused quota allocations."
            },
            {
                q: "How do you handle quota migration?",
                options: ["Quotas are fixed permanently", "Migration not supported", "Transfer quota between entities", "Delete and recreate quotas only"],
                correct: 2,
                explanation: "Quota migration: when reorganizing (merge projects, move resources), quotas can be transferred. Requires careful planning to avoid gaps."
            },
            {
                q: "What's burst quota?",
                options: ["Sudden spike in quota change requests", "Accelerated rate of quota consumption", "Dedicated quota pool for compute clusters", "Temporary quota increase above normal limit"],
                correct: 3,
                explanation: "Burst quota allows temporary exceeding normal limits for short periods. Useful for peak usage. Returns to normal after burst period."
            },
        ]
    },

    'c-notifications': {
        1: [
            {
                q: "What's the Waldur notification system for?",
                options: ["Notifying developers of bugs", "Internal system debugging logs", "Alert users about events and changes", "Network notification protocol"],
                correct: 2,
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
                options: ["Randomly scheduled periodic notifications", "Only an administrator triggering them by hand", "Events such as state changes and approvals", "The user requesting each one explicitly"],
                correct: 2,
                explanation: "Notifications triggered by events: resource created/deleted, state changes, approval requests, quota thresholds, scheduled reports."
            },
        ],
        2: [
            {
                q: "How do users manage notification preferences?",
                options: ["Preferences in external system", "No user control over notifications", "Only admin controls all settings", "Settings page to enable/disable types"],
                correct: 3,
                explanation: "Users configure preferences: which notification types to receive, which channels, frequency (immediate vs digest). Accessible in profile settings."
            },
            {
                q: "What's a webhook notification?",
                options: ["Web-based notification popup", "HTTP callback to external URL on events", "Webhook is email alternative name", "Hook for web page updates"],
                correct: 1,
                explanation: "Webhooks send HTTP POST requests to configured URLs when events occur. Enables integration with external systems: Slack, ticketing systems, custom apps."
            },
            {
                q: "What's notification templating?",
                options: ["Creating notification types", "Template for notification settings", "Notification system templates", "Customizable message templates"],
                correct: 3,
                explanation: "Templates define notification content: subject, body, variables. Customizable per organization. Use Django template syntax."
            },
        ],
        3: [
            {
                q: "How does Waldur handle notification delivery?",
                options: ["Users poll for notifications", "Synchronous blocking delivery", "Async tasks via Celery queue", "Delivery handled by email server"],
                correct: 2,
                explanation: "Notifications sent via Celery async tasks. Prevents blocking user requests. Retries on failure. Tracks delivery status."
            },
            {
                q: "What's notification filtering?",
                options: ["Searching notification history", "Filtering spam notifications", "Email filtering rules only", "Rules to determine who receives what"],
                correct: 3,
                explanation: "Filters determine recipients: by role, permission, resource ownership. Not everyone gets all notifications - only relevant parties."
            },
            {
                q: "How do you test notifications?",
                options: ["Notifications can't be tested", "Send to all users and check", "Test mode sends to specified address", "No testing capability exists"],
                correct: 2,
                explanation: "Test mode redirects all notifications to specified email/webhook. Verify templates, triggering. Debug in development without spamming users."
            },
            {
                q: "What's notification batching?",
                options: ["Group multiple notifications into digest", "No batching feature exists", "Sending notifications in bulk", "Batch processing notification requests"],
                correct: 0,
                explanation: "Batching groups notifications into digest emails: hourly/daily summary instead of individual emails. Reduces inbox noise."
            },
        ],
        4: [
            {
                q: "How do you implement custom notification types?",
                options: ["Define event type, template, and handlers", "Fork the repository and modify core code", "Custom notification types are not supported", "Submit a feature request to the support team"],
                correct: 0,
                explanation: "Custom notifications: define event type, create templates, register handlers. Plugin notifications follow same pattern."
            },
            {
                q: "What's the notification event system?",
                options: ["Event planning module with notifications", "Persistent system event log for auditing", "Central event bus for notification triggers", "Calendar scheduling system with reminders"],
                correct: 2,
                explanation: "Event system: actions emit events, notification system subscribes. Decoupled: code emits event, notification system handles delivery."
            },
            {
                q: "How do notifications integrate with RBAC?",
                options: ["All users get all notifications", "RBAC doesn't affect notifications", "Recipients filtered by permissions", "Separate notification permissions"],
                correct: 2,
                explanation: "Notifications respect RBAC: users only notified about resources they can access. Managers get different notifications than members."
            },
            {
                q: "What's notification escalation?",
                options: ["Increasing notification frequency", "Escalating notification importance", "No escalation feature exists", "Escalate if not acknowledged in time"],
                correct: 3,
                explanation: "Escalation: if action required but not taken, escalate to manager or admin. Time-based triggers. Prevents ignored requests."
            },
        ],
        5: [
            {
                q: "How do you monitor notification delivery?",
                options: ["No delivery monitoring available", "Check user complaints only", "Email server handles monitoring", "Delivery logs, bounce tracking, metrics"],
                correct: 3,
                explanation: "Monitor: delivery logs, bounce/error tracking, success rates, queue depth. Alert on delivery failures. Dashboard for visibility."
            },
            {
                q: "What's notification deduplication?",
                options: ["Merging similar notification templates together", "Prevent duplicate notifications for same event", "Removing redundant text within message bodies", "Archiving outdated notification configurations"],
                correct: 1,
                explanation: "Deduplication prevents duplicate notifications: same event in short window, multiple triggers for one action. Uses event IDs and timing."
            },
            {
                q: "How do you handle notification failures?",
                options: ["Failures are silently ignored by the system", "Retry with backoff, log errors, alert admin", "Failed notifications are permanently discarded", "Users must manually resend failed messages"],
                correct: 1,
                explanation: "Handle failures: retry with exponential backoff, log errors, move to dead letter queue after max retries. Alert admin on persistent failures."
            },
            {
                q: "What's multi-language notification support?",
                options: ["All notifications are sent in English only", "Automatic machine translation of all message text", "Deploy separate notification systems per language", "Templates in multiple languages per user preference"],
                correct: 3,
                explanation: "Multi-language: templates defined in supported languages, user preference determines which used. Falls back to default if translation missing."
            },
            {
                q: "How do you audit notification history?",
                options: ["Logs who received what when", "No notification history kept", "Audit handled externally only", "Only store for 24 hours"],
                correct: 0,
                explanation: "Audit logs: notification type, recipient, channel, timestamp, content summary. Useful for compliance, debugging, user support."
            },
            {
                q: "Where do project conversations happen inside Waldur?",
                options: ["A comment thread stored on the project record", "An external chat tool linked from the project page", "An email thread the platform forwards to members", "A Matrix room per project, rendered in the UI drawer"],
                correct: 3,
                explanation: "Waldur runs as a Matrix application service: each project gets a room, members are invited by role, and a bot answers operational queries such as !status, !orders and !members from inside the chat.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/matrix-chat/", text: "📚 Matrix chat" }
            },
            {
                q: "Email suits humans. What is the machine-facing notification channel?",
                options: ["Webhooks registered per user in their profile", "Events delivered to a consumer's own broker queue", "A nightly CSV export of everything that changed", "Polling each list endpoint for modified records"],
                correct: 1,
                explanation: "Notifications inform people; the event pub/sub system feeds systems. A consumer binds to the entities it cares about and drains its queue, with delivery re-authorized against live roles."
            },
        ]
    },

    'c-celery': {
        1: [
            {
                q: "What's Celery used for in Waldur?",
                options: ["Asynchronous background task processing", "Frontend state management layer", "User session handling service", "Database query caching system"],
                correct: 0,
                explanation: "Celery handles async background tasks: resource provisioning, sync with backends, sending notifications, generating reports. Non-blocking."
            },
            {
                q: "What's a Celery task?",
                options: ["Background thread within the main process", "Scheduled item on a user's task list", "Database record representing a queued job", "Function executed asynchronously by workers"],
                correct: 3,
                explanation: "Celery task is a Python function decorated with @shared_task. Called asynchronously, executed by worker processes. Returns result or raises exception."
            },
            {
                q: "What's a Celery worker?",
                options: ["Thread inside main application", "Person who manages Celery", "Process that executes tasks from queue", "External API service worker"],
                correct: 2,
                explanation: "Worker is separate process that pulls tasks from queue and executes them. Multiple workers can run in parallel. Scalable."
            },
        ],
        2: [
            {
                q: "What's a message broker in Celery?",
                options: ["Middleware that queues task messages", "Broker for stock trading tasks", "Message formatting service", "Person who brokers task deals"],
                correct: 0,
                explanation: "Message broker (Redis, RabbitMQ) queues task messages between app and workers. Waldur typically uses Redis. Handles delivery guarantees."
            },
            {
                q: "What's Celery Beat?",
                options: ["Scheduler for periodic tasks", "Beat detection in audio tasks", "Performance benchmark tool", "Monitoring heartbeat service"],
                correct: 0,
                explanation: "Celery Beat schedules periodic tasks: run every hour, daily at midnight, etc. Separate process. Waldur uses for sync, cleanup, reporting."
            },
            {
                q: "How do you define a periodic task?",
                options: ["Use time.sleep() delays inside the task body", "Periodic task scheduling is not supported", "Configure in CELERY_BEAT_SCHEDULE setting", "Call the task function in an infinite loop"],
                correct: 2,
                explanation: "Periodic tasks defined in CELERY_BEAT_SCHEDULE: task name, schedule (crontab or interval), arguments. Beat process executes on schedule."
            },
        ],
        3: [
            {
                q: "What's task retry in Celery?",
                options: ["User manually retrying failed task", "Retry deprecated in Celery", "Only manual retry supported", "Automatic re-execution on failure"],
                correct: 3,
                explanation: "Tasks can auto-retry on failure: max_retries, retry delay, exponential backoff. Handle transient errors (network, rate limits)."
            },
            {
                q: "What's a task result backend?",
                options: ["Backend server running tasks", "Store task results for later retrieval", "Result of backend operations", "Database for task code storage"],
                correct: 1,
                explanation: "Result backend (Redis, database) stores task results. Retrieve results later by task ID. Optional - some tasks don't need results stored."
            },
            {
                q: "What's task priority in Celery?",
                options: ["All tasks have same priority", "Priority of Celery over other apps", "Priority set by execution time", "Higher priority tasks processed first"],
                correct: 3,
                explanation: "Task priority determines queue order. Higher priority processed first. Waldur uses for urgent vs batch tasks. Requires broker support."
            },
            {
                q: "What's a task chain?",
                options: ["Physical chain securing servers", "Tasks chained to prevent deletion", "Blockchain for task tracking", "Sequence of tasks where output feeds input"],
                correct: 3,
                explanation: "Task chain: tasks executed in sequence, each receiving previous result. chain(task1.s(), task2.s()). For dependent operations."
            },
        ],
        4: [
            {
                q: "What's task idempotency?",
                options: ["Idempotent tasks have faster execution times", "Same result regardless of execution count", "Each task instance has a globally unique ID", "Multiple tasks sharing identical definitions"],
                correct: 1,
                explanation: "Idempotent task: running multiple times has same effect as running once. Important for retries - avoid duplicate side effects."
            },
            {
                q: "How do you monitor Celery tasks?",
                options: ["Flower dashboard, logs, metrics", "Monitoring is automatic", "No monitoring available for Celery", "Only through print statements"],
                correct: 0,
                explanation: "Monitor with: Flower web dashboard, task logs, Prometheus metrics, alerting on failure rates. Essential for production."
            },
            {
                q: "What's task rate limiting?",
                options: ["Celery does not support any rate limiting", "Constraining the size of task result payloads", "Frequency of task source code modifications", "Limit how many tasks execute per time period"],
                correct: 3,
                explanation: "Rate limiting prevents overwhelming backends: max N tasks per second. Useful for external API calls, resource provisioning."
            },
            {
                q: "What's a Celery canvas?",
                options: ["Primitives for composing task workflows", "Celery's display output", "Canvas for drawing task diagrams", "Visual task designer tool"],
                correct: 0,
                explanation: "Canvas provides workflow primitives: chain, group (parallel), chord (group + callback), map. Compose complex async workflows."
            },
        ],
        5: [
            {
                q: "How do you handle long-running tasks?",
                options: ["Long-running tasks are not supported by Celery", "Extend timeout, chunk work, track progress", "Split the application into many small services", "Increase server memory to handle larger tasks"],
                correct: 1,
                explanation: "Long tasks: set appropriate timeout, emit progress updates, chunk large data, consider splitting into sub-tasks. Avoid blocking workers."
            },
            {
                q: "What's task serialization?",
                options: ["Running the tasks strictly in serial order", "Converting task arguments for transport", "Writing the task's code out to local disk", "Assigning a serial number to each task"],
                correct: 1,
                explanation: "Serialization converts task args to bytes for broker transport. JSON (safe) or pickle (flexible). JSON recommended for security."
            },
            {
                q: "How do you scale Celery workers?",
                options: ["Only one worker allowed ever", "Run multiple workers, use autoscaling", "Scaling not needed for Celery", "Workers scale automatically always"],
                correct: 1,
                explanation: "Scale: run multiple workers across machines, use autoscaling based on queue depth. Concurrency setting per worker. Distribute load."
            },
            {
                q: "What's task routing?",
                options: ["Forwarding task results to specific end users", "Network-level routing between task services", "Send specific tasks to designated queue workers", "URL path routing pattern for task endpoints"],
                correct: 2,
                explanation: "Routing sends tasks to designated queues: high-priority queue, dedicated queue for heavy tasks. Workers consume from specific queues."
            },
            {
                q: "How do you debug Celery tasks?",
                options: ["Rely exclusively on print statement debugging", "Run eager mode, check logs, test synchronously", "Celery tasks cannot be debugged or inspected", "Only debug tasks directly in production servers"],
                correct: 1,
                explanation: "Debug: CELERY_TASK_ALWAYS_EAGER for sync execution, detailed logging, test tasks directly, Flower for inspection. Reproduce locally."
            },
            {
                q: "Why must a task that provisions a resource be idempotent?",
                options: ["Idempotent tasks are scheduled at higher priority", "The broker cannot guarantee ordering between tasks", "It can be delivered or retried more than once", "Celery executes every task exactly twice by design"],
                correct: 2,
                explanation: "A worker can die after acting but before acknowledging, so the task runs again. Making the transition idempotent — checking state before acting — is what keeps a retry from creating a second resource."
            },
            {
                q: "How would you notice that a periodic task silently stopped running?",
                options: ["Cron monitoring that alerts on a missed check-in", "A user reporting that data looks out of date", "The worker logs, reviewed on a regular basis", "Nothing: a task that does not run raises no error"],
                correct: 0,
                explanation: "A task that never starts produces no error and no log line. Registering scheduled jobs with cron monitoring turns the absence of a run into an alert, which is why Sentry cron definitions live alongside the schedule."
            },
        ]
    },

    'c-api-design': {
        1: [
            {
                q: "What API style does Waldur use?",
                options: ["GraphQL query language as the exclusive method", "gRPC protocol with Protocol Buffer definitions", "REST API with JSON request and response format", "SOAP-based XML web services with WSDL schema"],
                correct: 2,
                explanation: "Waldur uses REST API built with Django REST Framework. JSON request/response format. Follows REST conventions for resources and actions."
            },
            {
                q: "How is the Waldur API contract published?",
                options: ["A handwritten Swagger file kept alongside the source tree", "A versioned WSDL document released with every API change", "A Postman collection exported by hand after each release", "An OpenAPI schema generated from code by drf-spectacular"],
                correct: 3,
                explanation: "Waldur generates its OpenAPI schema from serializers and viewsets using drf-spectacular; `waldur spectacular --validate` guards it in CI. The API itself is unversioned under /api/ — clients track it through generated SDKs.",
                learnMore: { url: "https://drf-spectacular.readthedocs.io/en/latest/", text: "📚 drf-spectacular" }
            },
            {
                q: "What's an API endpoint?",
                options: ["End of API development", "URL path for accessing a resource", "Final API response data", "Physical server endpoint"],
                correct: 1,
                explanation: "Endpoint is URL path representing a resource or action: /api/customers/, /api/projects/{id}/. HTTP method determines operation (GET, POST, etc.)."
            },
        ],
        2: [
            {
                q: "What HTTP methods does REST API use?",
                options: ["GET, POST, PUT, PATCH, DELETE", "Only GET and POST methods", "REST doesn't use HTTP methods", "FETCH, SEND, UPDATE, REMOVE"],
                correct: 0,
                explanation: "REST uses HTTP methods: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove). Method indicates action on resource."
            },
            {
                q: "What's pagination in Waldur API?",
                options: ["Split large results into pages", "No pagination support exists", "API documentation pages", "Paging through error messages"],
                correct: 0,
                explanation: "Pagination splits large results: page_size, page parameters. Prevents overwhelming responses. Returns links to next/previous pages. Default limit configurable."
            },
            {
                q: "How does a script authenticate against the Waldur API?",
                options: ["A request digest signed with a shared secret per deployment", "A Personal Access Token in an Authorization Bearer header", "A username and password replayed on every single request", "An API key passed as a query parameter in the request URL"],
                correct: 1,
                explanation: "Personal Access Tokens are named, scoped and time-limited: format w_<expiry>_<random>, stored only as a SHA-256 hash, sent as `Authorization: Bearer`. Session auth serves the browser UI; OIDC and SAML2 cover interactive SSO."
            },
        ],
        3: [
            {
                q: "What's filtering in Waldur API?",
                options: ["Removing sensitive data from responses", "Query parameters to narrow results", "Filtering API logs", "Backend code filtering"],
                correct: 1,
                explanation: "Filtering uses query parameters: ?state=active&name__contains=test. DRF filterset defines available filters. Reduces response data."
            },
            {
                q: "What are nested resources in API?",
                options: ["Nesting is anti-pattern", "Resources within resources file", "Deeply nested JSON structures", "Resources accessed through parent URL"],
                correct: 3,
                explanation: "Nested resources: /projects/{id}/resources/ accesses resources within project. Shows relationship. Alternative to flat URLs with filters."
            },
            {
                q: "What's an API serializer?",
                options: ["Serial number generator", "Order of API execution", "Serializes API requests to queue", "Converts objects to/from JSON"],
                correct: 3,
                explanation: "Serializer converts Django models to JSON (output) and validates JSON input (create/update). Defines which fields exposed, validation rules."
            },
            {
                q: "What stops a change from breaking the OpenAPI schema?",
                options: ["A spectacular --validate check run in CI", "A manual review of the schema each release", "A runtime check on the first API request", "Nothing: the schema is generated on demand"],
                correct: 0,
                explanation: "`waldur spectacular --validate` runs in CI, so a serializer or viewset change that produces an invalid schema fails there — before it can break SDK generation and every consumer downstream."
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
                options: ["Throttle API development speed", "Limit request rate per client", "No throttling in Waldur API", "Slowing down all API responses"],
                correct: 1,
                explanation: "Throttling limits requests per time period per user/IP. Prevents abuse, ensures fair usage. Returns 429 when exceeded. Configurable rates."
            },
            {
                q: "How do you document Waldur API?",
                options: ["No documentation available", "Manual documentation only", "External wiki pages only", "OpenAPI/Swagger auto-generated docs"],
                correct: 3,
                explanation: "Waldur generates OpenAPI schema from code. Swagger UI for interactive exploration. Auto-generated keeps docs in sync with code."
            },
            {
                q: "What's bulk operations in API?",
                options: ["Sending requests with very large body payloads", "Operations for managing bulk storage backends", "Feature for exporting bulk data to external files", "Process multiple items in a single API request"],
                correct: 3,
                explanation: "Bulk operations: create, update, delete multiple items in single request. More efficient than individual calls. Waldur supports for some resources."
            },
        ],
        5: [
            {
                q: "How do you maintain API backward compatibility?",
                options: ["Backward compatibility is not a real concern", "Deprecate gradually, version breaking changes", "Never modify the API once it has been released", "Change the API freely at any point in time"],
                correct: 1,
                explanation: "Backward compatibility: add fields without removing, deprecate with warnings, version breaking changes. Give clients time to migrate."
            },
            {
                q: "What's API schema evolution?",
                options: ["Evolution of API technology", "How API structure changes over time", "Database schema for API", "Schema evolution theory"],
                correct: 1,
                explanation: "Schema evolution: how API changes between versions. Track additions, deprecations, removals. Communicate changes via changelog. Support old versions temporarily."
            },
            {
                q: "How do you test Waldur APIs?",
                options: ["Manual testing on its own is sufficient", "Unit tests, integration tests and API tests", "The frontend's tests already cover the API", "APIs do not require testing in practice"],
                correct: 1,
                explanation: "API testing: unit tests for serializers/views, integration tests for full requests, automated API tests. DRF test client. Coverage for all endpoints."
            },
            {
                q: "What's hypermedia API design?",
                options: ["Streaming media content through API endpoints", "Links in responses guide clients through actions", "Uploading hypermedia files via the API interface", "Embedding multimedia elements in API responses"],
                correct: 1,
                explanation: "Hypermedia: API responses include links to available actions. Client doesn't hardcode URLs. Discoverable API. Waldur uses hyperlinked relationships."
            },
            {
                q: "A serializer gains a field. What keeps Homeport working?",
                options: ["Regenerating the SDK, then fixing the callers tsc flags", "Nothing — unknown fields are ignored by every API client", "The backend keeps a duplicate legacy endpoint indefinitely", "Clients pin an older API version until they choose to move"],
                correct: 0,
                explanation: "The contract is unversioned, so changes propagate by regeneration: validate the schema, regenerate waldur-js-client, run tsc --noEmit in Homeport and fix what broke. The same schema also drives waldur-api-client (Python) and the Ansible collection."
            },
        ]
    },

    'c-multi-tenant': {
        1: [
            {
                q: "What's multi-tenancy in Waldur?",
                options: ["Tenants renting server space", "Multiple organizations share one system", "Single user per system only", "Multiple servers per organization"],
                correct: 1,
                explanation: "Multi-tenancy: multiple organizations (tenants) share single Waldur installation. Data isolated between tenants. Efficient resource usage."
            },
            {
                q: "What's a customer in Waldur?",
                options: ["Individual user account in the system", "Subscriber with an active payment plan", "Department handling customer service tasks", "Top-level organization or tenant entity"],
                correct: 3,
                explanation: "Customer is top-level organization entity. Contains projects, users, resources. Primary tenant boundary. Billing/quotas at customer level."
            },
            {
                q: "How are tenants isolated?",
                options: ["Separate databases per tenant", "Physical server separation only", "No isolation between tenants", "Data filtering at application level"],
                correct: 3,
                explanation: "Waldur uses application-level isolation: queries filtered by customer/project. All tenants share database but can only access their data."
            },
        ],
        2: [
            {
                q: "What's the organization hierarchy in Waldur?",
                options: ["Flat structure no hierarchy", "Customer > Project > Resources", "Resources > Projects > Customer", "User > Customer > Resources"],
                correct: 1,
                explanation: "Hierarchy: Customer (organization) contains Projects, Projects contain Resources. Users belong to Customer with project-specific roles."
            },
            {
                q: "How do users belong to multiple organizations?",
                options: ["Not supported in Waldur", "Separate accounts per organization", "Users limited to one organization", "User can have roles in multiple customers"],
                correct: 3,
                explanation: "Users can have roles in multiple customers. Switch between organizations in UI. Permissions scoped to customer/project context."
            },
            {
                q: "What's project-level isolation?",
                options: ["Physical isolation of project files", "Projects on separate servers", "Resources in project isolated from others", "No project isolation exists"],
                correct: 2,
                explanation: "Project isolation: resources within project visible to project members. Different projects in same customer are separate. Enables team boundaries."
            },
        ],
        3: [
            {
                q: "How does Waldur handle shared resources?",
                options: ["All resources are shared between every user", "Service settings shared, resources per tenant", "Every resource is fully shared across tenants", "Waldur does not have sharing capabilities"],
                correct: 1,
                explanation: "Service settings (provider credentials) can be shared across customers. Individual resources belong to specific project. Enables managed services."
            },
            {
                q: "What's tenant onboarding?",
                options: ["Signing a rental agreement for cloud tenants", "Migration of tenants to a new cloud platform", "Process of creating a new customer organization", "Training program for existing tenant users"],
                correct: 2,
                explanation: "Onboarding: create customer, configure quotas, assign admin users, set up projects. Can be self-service or admin-driven. API support for automation."
            },
            {
                q: "How are quotas scoped in multi-tenant?",
                options: ["One global quota is shared across all tenants", "Quotas at customer, project, and offering levels", "Multi-tenant mode has no quota system at all", "Quotas are only available for a single tenant"],
                correct: 1,
                explanation: "Quotas scoped hierarchically: customer-level limits, project-level within customer, offering-level per service. Enables resource governance."
            },
            {
                q: "What's tenant customization?",
                options: ["Customizing tenant buildings", "All tenants identical configuration", "Tenants can't be customized", "Per-customer configuration and branding"],
                correct: 3,
                explanation: "Customization: per-customer settings, branding, notification templates, default quotas. Enables managed service flexibility."
            },
        ],
        4: [
            {
                q: "How do you migrate between tenants?",
                options: ["Delete everything and recreate in new tenant", "Cross-tenant migration is not supported at all", "Move projects and resources between customers", "Export data and import it into the new tenant"],
                correct: 2,
                explanation: "Migration moves projects or resources between customers. Requires admin privileges. Updates ownership, preserves resource data."
            },
            {
                q: "What's cross-tenant reporting?",
                options: ["Aggregated reports across all tenants", "Tenants report on each other", "External reporting tools only", "No cross-tenant data access"],
                correct: 0,
                explanation: "Admin can generate reports across all tenants: usage summaries, billing totals, resource counts. Scoped by admin permissions."
            },
            {
                q: "How do service providers work in multi-tenant?",
                options: ["One provider per customer only", "Providers are same as tenants", "No provider concept exists", "Providers can serve multiple customers"],
                correct: 3,
                explanation: "Service providers (offerings) can serve multiple customers. Provider configures offering, customers order from it. Enables marketplace model."
            },
            {
                q: "What's tenant-aware caching?",
                options: ["Shared cache across all tenants", "Cache per user not tenant", "Cache keys include tenant identifier", "No caching in multi-tenant"],
                correct: 2,
                explanation: "Cache keys include tenant ID to prevent data leakage. Tenant A's cached data never served to Tenant B. Important for security."
            },
        ],
        5: [
            {
                q: "How do you implement tenant data isolation?",
                options: ["No special implementation needed", "Encryption is sufficient", "Separate databases recommended", "Filter all queries by customer/project"],
                correct: 3,
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
                options: ["Transfer to another tenant only", "Cleanup all tenant data and resources", "Deletion not supported", "Just mark as deleted keep data"],
                correct: 1,
                explanation: "Tenant deletion: terminate resources, cleanup data, handle billing. Soft delete preserves for recovery. Hard delete removes completely. Consider data retention."
            },
            {
                q: "What's federation in multi-tenant context?",
                options: ["Multiple Waldur instances sharing resources", "Tenant accounts belonging to federal agencies", "Waldur does not support any federation features", "Unified login federation for tenant user accounts"],
                correct: 0,
                explanation: "Federation connects multiple Waldur instances. Resources from one available in another. Enables consortium deployments, geographic distribution."
            },
            {
                q: "How do you test multi-tenant isolation?",
                options: ["Isolation does not need testing in practice", "Inspect the stored data manually now and then", "Check that data never leaks between tenants", "The database guarantees it without any tests"],
                correct: 2,
                explanation: "Test isolation: create multiple test tenants, verify queries only return own data, test permission boundaries. Automated tests for isolation."
            },
            {
                q: "What is the scope chain permissions and event bindings both walk?",
                options: ["Region, zone, host and individual instance", "Offering, plan, component and billing unit", "Customer, project, resource, resource project", "User, session, request and response body"],
                correct: 2,
                explanation: "Authorization resolves along that hierarchy, and event scope-keys use the same chain — which is why binding a consumer to a customer picks up its projects' events and why a role on an ancestor grants access below."
            },
            {
                q: "A project moves to a different organization. What has to follow?",
                options: ["Access and billing are re-evaluated for the new parent", "Only the displayed organization name changes", "The project's resources must all be recreated", "Nothing, because projects are independent objects"],
                correct: 0,
                explanation: "Roles, invoicing and visibility all resolve through the parent customer, so a move changes who may see the project and who is billed for it — and downstream consumers are told about the affected resources."
            },
        ]
    },

    'c-reporting': {
        1: [
            {
                q: "What does Waldur reporting provide?",
                options: ["An interface for writing prose reports", "Analytics on usage, cost and resources", "Newspaper-style narrative summaries", "A system for reporting software bugs"],
                correct: 1,
                explanation: "Waldur reporting provides analytics: resource usage, cost breakdowns, utilization trends, billing summaries. Helps with capacity planning and chargeback."
            },
            {
                q: "What types of reports does Waldur generate?",
                options: ["Only PDF formatted document exports", "Usage, billing, and cost allocation reports", "Bug tracking and error diagnostic reports", "Waldur has no built-in reporting features"],
                correct: 1,
                explanation: "Report types: usage reports (resource consumption), billing reports (invoices, charges), cost allocation (per project/team), capacity reports."
            },
            {
                q: "How do you access reports in Waldur?",
                options: ["Web UI dashboards and export options", "External reporting tools only", "Reports not accessible to users", "Command line only"],
                correct: 0,
                explanation: "Reports accessed via web UI: dashboard views, exportable to CSV/Excel, scheduled email delivery. API access for custom integrations."
            },
        ],
        2: [
            {
                q: "What's resource utilization reporting?",
                options: ["Track actual usage vs allocated resources", "Resource list generation", "User resource requests reporting", "Report on resource creation"],
                correct: 0,
                explanation: "Utilization reports show actual vs allocated: CPU usage %, memory utilization, storage consumption. Identifies over/under-provisioned resources."
            },
            {
                q: "What's cost allocation reporting?",
                options: ["Attribute costs to departments/projects", "Cost of report storage", "Pricing for report access", "Allocating report generation costs"],
                correct: 0,
                explanation: "Cost allocation attributes charges to cost centers: departments, projects, teams. Enables chargeback (billing) or showback (visibility)."
            },
            {
                q: "How do scheduled reports work?",
                options: ["Queued by workers and sent via webhooks", "Triggered manually by admin API requests", "Configured per user in their profile page", "Automatically generated and sent on schedule"],
                correct: 3,
                explanation: "Scheduled reports: configure frequency (daily, weekly, monthly), recipients, format. Celery Beat triggers generation. Email or store results."
            },
        ],
        3: [
            {
                q: "What metrics does Waldur collect?",
                options: ["Only error metrics collected", "No metrics collection available", "Usage, performance, and business metrics", "Metrics from external tools only"],
                correct: 2,
                explanation: "Waldur collects: resource usage (CPU, memory, storage), API metrics, business metrics (orders, costs). Backend plugins report resource metrics."
            },
            {
                q: "How do you create custom reports?",
                options: ["API queries with filters and aggregations", "Submit a request to Waldur support team", "Use the built-in report template wizard", "Modify the Django reporting source code"],
                correct: 0,
                explanation: "Custom reports via API: query resources, filter by criteria, aggregate data. Export results. Build dashboards with visualization tools."
            },
            {
                q: "What's trend analysis in reporting?",
                options: ["Track metrics over time to identify patterns", "Ranking report types by user popularity", "Comparing report formats across exports", "Measuring frequency of report generation"],
                correct: 0,
                explanation: "Trend analysis tracks metrics over time: usage growth, cost trends, seasonal patterns. Enables forecasting, capacity planning."
            },
            {
                q: "How does reporting integrate with billing?",
                options: ["Billing and reporting are separate", "No integration between them", "Share data for cost reports and invoices", "Reports generate invoices directly"],
                correct: 2,
                explanation: "Reporting uses billing data: cost breakdowns, invoice summaries, spending trends. Shared data model ensures consistency."
            },
        ],
        4: [
            {
                q: "What's report data aggregation?",
                options: ["Aggregating report files", "Summarize detailed data into totals", "Database aggregation only", "Collecting report definitions"],
                correct: 1,
                explanation: "Aggregation summarizes data: total by customer, average per project, max/min values. Different granularity levels (daily, monthly, yearly)."
            },
            {
                q: "How do you export report data?",
                options: ["Export to proprietary format", "No export functionality", "Only view in browser", "CSV, Excel, JSON, PDF formats"],
                correct: 3,
                explanation: "Export formats: CSV for data analysis, Excel for business users, JSON for integration, PDF for formal reports. API enables custom exports."
            },
            {
                q: "What's report caching?",
                options: ["Caching only the report templates in use", "Reports are always regenerated on demand", "Storing generated reports for fast access", "Discarding reports older than a single day"],
                correct: 2,
                explanation: "Report caching stores generated reports. Avoids regenerating expensive reports. Invalidate when source data changes. TTL-based expiration."
            },
            {
                q: "How do you filter reports by scope?",
                options: ["Only filter by creation date range", "Filter using external analytics tools", "Customer, project, date range, resource type", "Only filter by assigned organization name"],
                correct: 2,
                explanation: "Filter reports: by organization (customer), project, date range, resource type, tags. Combine filters for specific views."
            },
        ],
        5: [
            {
                q: "How do you implement custom report plugins?",
                options: ["Define data sources, queries, and renderers", "Register plugins through the admin settings", "Create Docker containers for each report", "Modify the core reporting module directly"],
                correct: 0,
                explanation: "Custom plugins: define metric collectors, report queries, output renderers. Register with reporting framework. Follow plugin patterns."
            },
            {
                q: "What's real-time vs batch reporting?",
                options: ["Batch mode has been deprecated in new versions", "Real-time: live data; Batch: processed periodically", "Real-time runs on separate dedicated servers", "Both modes generate reports simultaneously"],
                correct: 1,
                explanation: "Real-time shows current state (dashboard). Batch processes historical data periodically (daily summaries). Choose based on need."
            },
            {
                q: "How do you ensure report accuracy?",
                options: ["Manual spot-checking of every generated report", "Accuracy depends on the database engine used", "Reports are verified automatically by the API", "Validate data sources, test calculations, audit"],
                correct: 3,
                explanation: "Ensure accuracy: validate source data, unit tests for calculations, reconcile with billing, document methodology. Audit periodically."
            },
            {
                q: "What's report access control?",
                options: ["Admin controls all report access", "Permissions determine who sees what", "All reports visible to all users", "No access control for reports"],
                correct: 1,
                explanation: "Report access follows permissions: users see their scope's data. Admins see all. Cross-customer reports require admin rights."
            },
            {
                q: "How do you integrate with external BI tools?",
                options: ["API exports data to BI platforms", "Manual data entry only", "Built-in BI sufficient", "No external integration possible"],
                correct: 0,
                explanation: "BI integration: API provides data exports, scheduled data dumps, direct database access for analytics. Connect Grafana, Tableau, Power BI."
            },
            {
                q: "Why ship a reporting feature behind an experimental flag?",
                options: ["Flagged features skip the review process", "It reaches real users gradually while it stabilises", "Flagged code runs faster than released code", "Flags remove the need to test the feature"],
                correct: 1,
                explanation: "A flag decouples deploying from releasing: the code ships, a limited audience exercises it, and the switch is flipped when it holds up — without a long-lived branch drifting away from develop."
            },
            {
                q: "What does a usage timeseries give that a single total cannot?",
                options: ["A more accurate total for the billing period", "A guarantee that the figures were audited", "When consumption happened, so spikes show up", "A smaller volume of data to store and query"],
                correct: 2,
                explanation: "Totals cannot be apportioned or explained. Per-period series show growth, spikes and idle allocations — the basis for both funder reporting and a conversation about right-sizing."
            },
        ]
    },

    'c-waldur-ui': {
        1: [
            {
                q: "What framework does Waldur UI use?",
                options: ["Angular framework", "Vue.js library", "jQuery and plain JavaScript", "React with TypeScript"],
                correct: 3,
                explanation: "Waldur Homeport is React with TypeScript, built and served by Vite. Component-based architecture with feature folders."
            },
            {
                q: "Where does data fetched from the Waldur API live?",
                options: ["In a TanStack React Query cache keyed per query", "In a global Redux store holding raw responses", "In browser localStorage kept between page loads", "In component-local useState inside each view"],
                correct: 0,
                explanation: "Homeport fetches through TanStack React Query: one cache keyed per query, with refetching and invalidation handled for you. Redux survives only for a few cross-cutting UI concerns, and redux-saga has been removed entirely."
            },
            {
                q: "What's a React component?",
                options: ["Server-side rendering unit", "Database component", "API endpoint handler", "Reusable UI building block"],
                correct: 3,
                explanation: "React component is reusable UI piece. Has props (inputs), state (internal), and renders JSX. Waldur has component library for consistency."
            },
        ],
        2: [
            {
                q: "How is Waldur UI structured?",
                options: ["Single file application", "Random file organization", "Feature-based folder organization", "Database-driven structure"],
                correct: 2,
                explanation: "Feature-based structure: each feature (customers, projects, etc.) has a folder with its components, hooks, API calls and routes. Shared components live in common."
            },
            {
                q: "What's the Waldur component library?",
                options: ["Library for server components", "External npm package", "Shared reusable UI components", "Component documentation site"],
                correct: 2,
                explanation: "Waldur has shared component library: buttons, forms, tables, modals. Ensures consistency. Documented with examples."
            },
            {
                q: "How does routing work in Waldur UI?",
                options: ["UI-Router for state-based client-side routing", "Single-page rendering with no route changes", "Server-side page routing with full reloads", "URL hash routing managed via Redux store"],
                correct: 0,
                explanation: "UI-Router for React handles state-based client-side routing. Routes defined in module-specific routes.ts files. Navigation without full page reload. Hierarchical states."
            },
        ],
        3: [
            {
                q: "How does Waldur UI call the backend REST API?",
                options: ["Redux actions with redux-saga side effects for every call", "A GraphQL gateway that aggregates the REST endpoints", "Handwritten fetch calls placed inside each component", "Generated waldur-js-client SDK inside React Query hooks"],
                correct: 3,
                explanation: "API access goes through waldur-js-client — a TypeScript SDK generated from the backend OpenAPI schema — called from TanStack React Query hooks. Regenerate the SDK after backend contract changes, then let tsc find the callers that broke."
            },
            {
                q: "What's lazy loading in Waldur UI?",
                options: ["Lazy evaluation of state", "Slow loading on purpose", "Loading indicator component", "Load code only when route accessed"],
                correct: 3,
                explanation: "Lazy loading splits code by route. Code for route loaded only when navigated to. Improves initial load time. React.lazy + Suspense."
            },
            {
                q: "How does Waldur handle UI theming?",
                options: ["Inline styles defined per component only", "External SASS stylesheets compiled at build", "Hardcoded color values in each component", "CSS variables and theme configuration files"],
                correct: 3,
                explanation: "Theming via CSS variables, configurable colors/branding. Organizations can customize appearance. Bootstrap-based with overrides."
            },
            {
                q: "What's the Waldur translation system?",
                options: ["Third-party translation service integration", "Custom translate function with locale files", "Server-side rendered translated HTML pages", "Browser built-in auto-translation feature"],
                correct: 1,
                explanation: "Internationalization via custom translate/formatJsx helpers. Locale files managed in repository. Local-first approach without external translation services."
            },
        ],
        4: [
            {
                q: "How do you add new features to Waldur UI?",
                options: ["Install external feature packages from the npm registry", "Submit a feature request to the core development team", "Modify existing components to hold the new logic", "Create a feature folder with components, hooks, routes"],
                correct: 3,
                explanation: "New features: create a folder under features, add components and React Query hooks, register routes, call the generated SDK. Follow existing patterns."
            },
            {
                q: "What's code splitting in Waldur UI?",
                options: ["Code review splitting", "Split code between developers", "Split bundles for faster loading", "Server-side code separation"],
                correct: 2,
                explanation: "Code splitting creates separate bundles per route/feature. User downloads only needed code. Vite handles the splitting via dynamic imports. Improves performance."
            },
            {
                q: "How does Waldur UI handle errors?",
                options: ["Component unmounts and full page reloads", "Errors logged to console without user notice", "Silent catch blocks suppress all exceptions", "Error boundaries and toast notifications shown"],
                correct: 3,
                explanation: "Error boundaries catch component errors, show fallback UI. API errors shown as toast notifications. User-friendly error messages."
            },
            {
                q: "What testing tools does Waldur UI use?",
                options: ["Jest with Enzyme for component snapshot tests", "Vitest and React Testing Library, plus Playwright", "Selenium WebDriver drives all of the test scenarios", "Karma and Jasmine run the unit suite in CI"],
                correct: 1,
                explanation: "Unit and component tests run on Vitest with React Testing Library. Playwright covers end-to-end and visual regression runs (yarn test:e2e, yarn test:visual). Jest is not used."
            },
        ],
        5: [
            {
                q: "How do you optimize Waldur UI performance?",
                options: ["Increase server resources to handle the load", "Memoization, code splitting, and lazy loading", "Reduce component count to minimize complexity", "Disable animations and transitions for speed"],
                correct: 1,
                explanation: "Optimize: React.memo for expensive components, useMemo/useCallback, code splitting, lazy loading, virtualization for large lists."
            },
            {
                q: "How does Waldur UI handle real-time updates?",
                options: ["Redux store sync across browser tabs only", "Full page refresh on a timed interval", "Server-sent events via HTTP streaming", "Query refetch plus STOMP over WebSocket"],
                correct: 3,
                explanation: "Lists refetch on an interval through React Query, and pushed events arrive over STOMP on a WebSocket (@stomp/stompjs) fed by RabbitMQ web-STOMP. Resource state changes appear without a reload."
            },
            {
                q: "What's the plugin UI architecture?",
                options: ["Plugins cannot add any UI components", "Plugins only extend the backend API layer", "Plugins directly patch the core UI source", "Extension points for registering plugin components"],
                correct: 3,
                explanation: "UI plugins: register components at extension points, add routes, extend menus. Core provides hooks for plugin UI. Maintains modularity."
            },
            {
                q: "How do you debug Waldur UI?",
                options: ["React DevTools, React Query Devtools, console", "Deploy to staging and test in production mode", "Use the built-in Waldur debug panel interface", "Add console.log statements throughout code"],
                correct: 0,
                explanation: "Debug tools: React DevTools for the component tree, React Query Devtools to inspect cached queries and their state, browser console and network tab. Source maps in development."
            },
            {
                q: "What's accessible UI design in Waldur?",
                options: ["ARIA attributes, keyboard navigation, contrast", "Accessibility is handled by a separate plugin", "Focus only on visual layout and color theme", "Rely on browser default accessibility support"],
                correct: 0,
                explanation: "Accessibility: ARIA labels, keyboard navigation, sufficient color contrast, focus management. Follows WCAG guidelines. Enables assistive technology."
            },
        ]
    },

    'c-waldur-forms': {
        1: [
            {
                q: "What library does Waldur use for forms?",
                options: ["react-final-form with field-level subscriptions", "Redux Form keeping all field state in the store", "React Hook Form with uncontrolled ref-based inputs", "Formik paired with Yup schemas on every form view"],
                correct: 0,
                explanation: "Homeport builds forms with react-final-form, plus react-final-form-arrays for repeated field groups. Field-level subscriptions keep re-renders down on large forms. redux-form is no longer used."
            },
            {
                q: "What's form validation?",
                options: ["Backend form processing", "Validating form design looks good", "Checking input meets requirements", "Form performance testing"],
                correct: 2,
                explanation: "Form validation checks user input: required fields, format (email, phone), ranges, custom rules. Show errors, prevent invalid submission."
            },
            {
                q: "What's a form field component?",
                options: ["Reusable input with label and validation logic", "A column definition inside a database schema", "A server-side model property for form storage", "A raw HTML input element with no extra logic"],
                correct: 0,
                explanation: "Form field component wraps input with label, error display, help text. Standardizes appearance. Connects to form state automatically."
            },
        ],
        2: [
            {
                q: "How does client-side validation work?",
                options: ["Only server validates forms", "Validate before server submission", "Validation runs on database", "Client validates server response"],
                correct: 1,
                explanation: "Client-side: validate in browser before submit. Instant feedback. Still validate on server (client can be bypassed). Better UX."
            },
            {
                q: "What are controlled components?",
                options: ["Server-controlled components", "Components with access control", "Admin-managed components", "Form inputs controlled by React state"],
                correct: 3,
                explanation: "Controlled components: React state is single source of truth for input value. onChange updates state, value comes from state. Enables validation, transformation."
            },
            {
                q: "How do you handle form submission?",
                options: ["Submission handled by browser", "No submission handling needed", "onSubmit handler calls API", "Form auto-submits to server"],
                correct: 2,
                explanation: "onSubmit handler: prevent default, validate, call API action, handle success/error. Show loading state during submission. Reset or navigate on success."
            },
        ],
        3: [
            {
                q: "What's conditional form fields?",
                options: ["Fields with conditional required validation rules", "Fields rendered with inline conditional CSS styles", "Fields shown or hidden based on other field values", "Fields that are always optional in every context"],
                correct: 2,
                explanation: "Conditional fields: show/hide based on other values. Example: show 'other' text field when 'other' selected in dropdown. Dynamic forms."
            },
            {
                q: "How do you handle form arrays?",
                options: ["Dynamic list of repeated field groups in a form", "Validation rules applied to array-type data fields", "Multiple independent forms rendered together", "Array values displayed in dropdown select inputs"],
                correct: 0,
                explanation: "Form arrays: add/remove repeated field groups. Example: multiple IP addresses, multiple team members. Homeport uses FieldArray from react-final-form-arrays."
            },
            {
                q: "What's form field error handling?",
                options: ["Errors logged to console only", "Errors not shown to users", "Single error for whole form", "Display validation errors near fields"],
                correct: 3,
                explanation: "Field-level errors shown near each field. Clear when corrected. Summary of all errors optional. Accessible error messages."
            },
            {
                q: "How do async validators work?",
                options: ["Only on form submission", "Async is same as sync validation", "Async validation not supported", "Validate against server during input"],
                correct: 3,
                explanation: "Async validators call server: check uniqueness, verify availability. Debounce to avoid excessive calls. Show loading state."
            },
        ],
        4: [
            {
                q: "What's form state management?",
                options: ["Only the current input value is maintained", "State resets on every component re-render cycle", "Track values, errors, touched, and dirty status", "Form data stored directly in the database"],
                correct: 2,
                explanation: "Form state: values (current inputs), errors (validation issues), touched (user interacted), dirty (changed from initial). Enables smart UX."
            },
            {
                q: "How do you handle file uploads in forms?",
                options: ["Files must be uploaded separately outside the form", "Only URL text input is accepted for file references", "Backend API handles all file processing independently", "File input with preview and upload progress handling"],
                correct: 3,
                explanation: "File uploads: file input component, preview images, progress indicator, upload to server (may be separate endpoint). Validate type/size."
            },
            {
                q: "What's form wizard pattern?",
                options: ["Multi-step form with navigation", "Wizard character in form UI", "Form with helpful tooltips", "Automatic form generation"],
                correct: 0,
                explanation: "Form wizard: split complex form into steps. Next/back navigation. Validate per step. Summary before final submit. Progress indicator."
            },
            {
                q: "How do you pre-populate forms?",
                options: ["Users always start with empty forms", "Pre-population not possible", "Load initial values from API or props", "Database pre-fills forms"],
                correct: 2,
                explanation: "Pre-populate: for edit forms, load existing data as initial values. Pass via props or fetch in component. Reset to initial available."
            },
        ],
        5: [
            {
                q: "How do you test forms?",
                options: ["Validate form markup matches the HTML snapshot", "Simulate user input and verify expected behavior", "Check that the form component mounts without error", "Only verify that the submit button is rendered"],
                correct: 1,
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
                options: ["Custom hooks to encapsulate logic", "Put all logic in component", "Logic only in validation", "Complex forms not supported"],
                correct: 0,
                explanation: "Complex logic: custom hooks encapsulate business rules, computed values, conditional logic. Keep components clean. Reusable across forms."
            },
            {
                q: "What's form performance optimization?",
                options: ["Performance tuning is not possible for forms", "Use faster hardware to speed up form rendering", "Minimize re-renders and debounce validation calls", "Reduce the total number of fields on every form"],
                correct: 2,
                explanation: "Optimize: minimize re-renders (subscribe only to needed state), debounce expensive validation, virtualize long option lists."
            },
            {
                q: "How do you handle form accessibility?",
                options: ["Screen reader support is not currently available", "Labels, ARIA attributes, and keyboard tab support", "Accessibility is automatically handled by browsers", "Accessibility does not apply to form elements"],
                correct: 1,
                explanation: "Accessible forms: proper labels, error announcements, keyboard navigation, focus management. Associate errors with fields via ARIA."
            },
        ]
    },

    'c-waldur-tables': {
        1: [
            {
                q: "What are data tables used for in Waldur?",
                options: ["Provide inline spreadsheet editing for records", "Display lists of resources with sorting and actions", "Manage database table schemas and migrations", "Apply custom HTML styling to table elements"],
                correct: 1,
                explanation: "Data tables display resource lists: customers, projects, resources. Features: sorting, filtering, pagination, actions. Primary data view."
            },
            {
                q: "What's table pagination?",
                options: ["Page layout for tables", "Navigating table rows", "Pagination of table code", "Split large data into pages"],
                correct: 3,
                explanation: "Pagination splits large datasets into pages. User navigates pages. Page size configurable. Server-side for performance with big data."
            },
            {
                q: "What's column sorting in tables?",
                options: ["Column position arrangement", "Order rows by column values", "Sorting column definitions", "Sort order of table creation"],
                correct: 1,
                explanation: "Column sorting orders rows by clicked column. Ascending/descending toggle. Can be client-side or server-side. Visual indicator shows sort state."
            },
        ],
        2: [
            {
                q: "What's table filtering?",
                options: ["Intercept and process table lifecycle events", "Show only rows matching user-defined criteria", "Hide or remove specific columns from the view", "Remove a table entirely from the current page"],
                correct: 1,
                explanation: "Filtering shows subset of rows: by status, date range, search text. Filter controls above table. Can combine multiple filters."
            },
            {
                q: "What are row actions in tables?",
                options: ["Actions that create rows", "Operations available on each row", "Row-level animation", "Database row operations"],
                correct: 1,
                explanation: "Row actions: buttons/menu for operations on item (edit, delete, view details). Context-sensitive based on item state and user permissions."
            },
            {
                q: "What's table column configuration?",
                options: ["Column width only", "No configuration possible", "Define which columns to display", "Configure column database"],
                correct: 2,
                explanation: "Column config: which columns shown, order, width, formatter. Can be user-customizable or fixed. Save preferences per user."
            },
        ],
        3: [
            {
                q: "What's server-side vs client-side tables?",
                options: ["Both approaches render identically for all users", "Server tables handle sorting, client handles filtering", "Client-side tables are deprecated in newer versions", "Server-side: data fetched per page; Client: all data loaded"],
                correct: 3,
                explanation: "Server-side: fetch only current page from API. Good for large datasets. Client-side: load all data, filter/sort in browser. For small datasets."
            },
            {
                q: "What's table state management?",
                options: ["Track current page, sort order, and active filters", "The table component does not maintain any state", "The serialized HTML structure of the table element", "Whether the table is currently loading data"],
                correct: 0,
                explanation: "Table state: current page, page size, sort column/direction, active filters, selected rows. Managed in component or URL params."
            },
            {
                q: "How do you export table data?",
                options: ["Print the page and scan to a PDF file", "Download as CSV or Excel from the table", "Copy-paste rows into a spreadsheet app", "Take a screenshot of the table contents"],
                correct: 1,
                explanation: "Export feature downloads visible data: CSV for data analysis, Excel for business users. May export current page or all matching filters."
            },
            {
                q: "What's row selection in tables?",
                options: ["Choose which row template layout to render", "Highlight rows with different color themes", "Select one or multiple rows for bulk actions", "Adjust the display height of individual rows"],
                correct: 2,
                explanation: "Row selection: checkbox per row, select all. Enable bulk actions (delete multiple, change state). Track selection in state."
            },
        ],
        4: [
            {
                q: "What's virtualized tables?",
                options: ["Tables hosted inside virtual machines", "Tables stored in virtualized disk volumes", "Render only visible rows for performance", "Tables displayed in a virtual reality view"],
                correct: 2,
                explanation: "Virtualization renders only visible rows in DOM. Handles thousands of rows smoothly. Essential for large datasets without pagination."
            },
            {
                q: "How do you handle table loading states?",
                options: ["Hide the table entirely until data arrives", "Display an empty table until data is loaded", "Show skeletons or spinners during data load", "Freeze the table layout during data fetch"],
                correct: 2,
                explanation: "Loading states: skeleton rows, spinner overlay, loading text. Indicate partial loading for server-side. Maintain layout stability."
            },
            {
                q: "What's inline editing in tables?",
                options: ["Edit table HTML inline", "Edit cell values directly in table", "Editing table structure", "No inline editing possible"],
                correct: 1,
                explanation: "Inline editing: click cell to edit value directly. Save on blur or enter. Validate before saving. Alternative to modal forms."
            },
            {
                q: "How do you customize table cell rendering?",
                options: ["Only text in cells allowed", "Renderer not customizable", "CSS customization only", "Custom cell renderer components"],
                correct: 3,
                explanation: "Custom renderers: render special content (links, badges, icons, progress bars). Formatter functions or components per column."
            },
        ],
        5: [
            {
                q: "How do you optimize large tables?",
                options: ["Increase browser memory allocation for the tab", "Split tables into separate pages per data type", "Reduce column count to improve render speed", "Virtualization, server-side ops, and pagination"],
                correct: 3,
                explanation: "Optimize: virtualize rows, server-side sorting/filtering, pagination, memoize cell renders, debounce filters. Profile to find bottlenecks."
            },
            {
                q: "What's table state persistence?",
                options: ["State saved automatically", "Save table config across sessions", "Persist table in database", "Persistence not supported"],
                correct: 1,
                explanation: "Persistence: save column config, sort, filters to localStorage or user preferences. Restore on return. Per-table settings."
            },
            {
                q: "How do you handle table errors?",
                options: ["Error states for load failures with retry option", "Log errors to console without informing users", "Automatically reload the full page on errors", "Show an empty table without any notification"],
                correct: 0,
                explanation: "Handle errors: show error message on load failure, retry button, partial data indication. Don't lose user's filter state on error."
            },
            {
                q: "What's accessible table design?",
                options: ["Add alt text to every cell value in the table", "Rely on browser defaults for screen readers", "Use only large font sizes for accessibility", "Proper table markup, ARIA attributes, keyboard nav"],
                correct: 3,
                explanation: "Accessible tables: semantic table elements, ARIA labels, keyboard navigation for actions, proper column headers. Test with screen readers."
            },
            {
                q: "How do you test table components?",
                options: ["Only verify the table renders without crashing", "Check that the table API returns correct data", "Test rendering, interactions, pagination, filtering", "Manually click through the table in the browser"],
                correct: 2,
                explanation: "Test tables: render with mock data, test sorting/filtering, verify pagination, test row actions. Integration tests for API interaction."
            },
        ]
    },

    'c-waldur-modals': {
        1: [
            {
                q: "What's a modal dialog?",
                options: ["Overlay window requiring user action", "Background processing dialog", "Mode selection interface", "Dialog about application modes"],
                correct: 0,
                explanation: "Modal is overlay window that blocks interaction with rest of page until dismissed. Used for forms, confirmations, important information."
            },
            {
                q: "When should you use a modal?",
                options: ["All forms should be modals", "Important actions needing focus", "Never use modals", "Only for error messages"],
                correct: 1,
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
                options: ["Navigation links that route to modal pages", "Actions that dispatch modal open events", "Modals appear automatically on page load", "Direct DOM manipulation to show overlays"],
                correct: 1,
                explanation: "Open modals via actions: dispatch action with modal type and data. Modal manager renders appropriate modal. Decoupled from trigger."
            },
            {
                q: "What's a confirmation modal?",
                options: ["Modal confirming success", "Configuration settings modal", "Ask user to confirm before action", "Password confirmation modal"],
                correct: 2,
                explanation: "Confirmation modal asks 'Are you sure?' before destructive actions (delete, stop resource). Prevents accidental actions. Confirm/Cancel buttons."
            },
            {
                q: "How do you pass data to modals?",
                options: ["Include data in modal open action", "Modal fetches own data", "Global variables for modal data", "Data passed via URL only"],
                correct: 0,
                explanation: "Pass data when opening: modal receives props with context (resource ID, action type). Modal can fetch additional data if needed."
            },
        ],
        3: [
            {
                q: "What's modal backdrop handling?",
                options: ["Backdrop clicking not supported", "Backdrop prevents scrolling only", "Click outside to close modal", "Backdrop is purely decorative"],
                correct: 2,
                explanation: "Backdrop click typically closes modal. Can be disabled for important modals. Provides intuitive dismissal. Darkens background for focus."
            },
            {
                q: "How do you handle modal accessibility?",
                options: ["Modals are accessible by default", "Focus trap, ARIA attributes, escape key", "Browser handles accessibility", "Accessibility not important"],
                correct: 1,
                explanation: "Accessible modals: focus trapped inside, return focus on close, ARIA role='dialog', labelledby title, Escape key closes. Test with screen readers."
            },
            {
                q: "What's a form modal?",
                options: ["Modal containing a form", "Form for modal settings", "Modal for formatting", "Modal form factor"],
                correct: 0,
                explanation: "Form modal: modal with input form inside. Submit closes modal on success. Show validation errors inline. Often for create/edit operations."
            },
            {
                q: "How do you handle modal loading states?",
                options: ["Disable modal during load", "Show spinner during async operations", "Modals load instantly always", "No loading indicator needed"],
                correct: 1,
                explanation: "Loading states: show spinner when fetching data or submitting. Disable submit button during submission. Prevent double-submit."
            },
        ],
        4: [
            {
                q: "What's a wizard modal?",
                options: ["Guided tour overlay for new features", "Single-page modal for initial app setup", "Multi-step modal with step navigation", "Contextual help tooltip that pops up"],
                correct: 2,
                explanation: "Wizard modal has multiple steps: form spread across screens. Next/Back navigation. Progress indicator. Final step confirms all."
            },
            {
                q: "How do you stack multiple modals?",
                options: ["Only one modal at a time", "Stacking not supported", "z-index management, backdrop per modal", "Modals close previous automatically"],
                correct: 2,
                explanation: "Stacking: modal opens another modal. Manage z-index stack. Each has backdrop. Closing returns to previous. Use sparingly - complex."
            },
            {
                q: "What's modal size and positioning?",
                options: ["Configurable size with centered positioning", "Fixed dimensions that cannot be overridden", "Sized automatically based on browser window", "Always full screen regardless of content"],
                correct: 0,
                explanation: "Modal size: small, medium, large, full-screen variants. Typically centered. May scroll for tall content. Responsive for mobile."
            },
            {
                q: "How do you animate modals?",
                options: ["Animations slow modals down", "No animations recommended", "JavaScript animations only", "CSS transitions for open/close"],
                correct: 3,
                explanation: "Animate: fade backdrop, slide/scale modal. CSS transitions or animation library. Exit animations on close. Keep snappy (200-300ms)."
            },
        ],
        5: [
            {
                q: "How do you test modal components?",
                options: ["Test open/close behavior, content rendering, actions", "Manually verify modals by clicking through the app", "Only check that the modal trigger button appears", "Compare screenshots of modals across browser types"],
                correct: 0,
                explanation: "Test modals: trigger open, verify content renders, test form submission, verify close behavior. Check accessibility. Test keyboard navigation."
            },
            {
                q: "What's modal portal rendering?",
                options: ["Portal to another application", "Rendering in portal view", "Render modal outside component tree", "Modal for portals feature"],
                correct: 2,
                explanation: "Portal renders modal at document body level, not inside component. Avoids z-index/overflow issues. React createPortal or library support."
            },
            {
                q: "How do you handle modal state cleanup?",
                options: ["Reset form state on close", "Framework handles cleanup", "No cleanup needed", "State persists between opens"],
                correct: 0,
                explanation: "Cleanup: reset form state on close, clear errors, cancel pending requests. Don't persist stale data. Consider unmount vs hide."
            },
            {
                q: "What's responsive modal design?",
                options: ["Minimize animation speed for faster display", "Reduce modal content on slower connections", "Use a fixed layout design for all screens", "Adapt modal layout for different screen sizes"],
                correct: 3,
                explanation: "Responsive: full-screen on mobile, centered overlay on desktop. Adjust padding, buttons. Consider drawer pattern on mobile."
            },
            {
                q: "How do you prevent modal content overflow?",
                options: ["Scrollable body with fixed header and footer", "Truncate all overflowing text with ellipsis", "Limit content length with character validation", "Increase the modal size to fit all the content"],
                correct: 0,
                explanation: "Handle overflow: modal body scrolls, header and action buttons fixed. Max-height based on viewport. Test with long content."
            },
        ]
    },

    'c-site-agent': {
        1: [
            {
                q: "What's Waldur Site Agent?",
                options: ["A monitoring agent for website uptime checks", "A support agent handling user help requests", "A local agent running at the provider site", "A central dashboard for admin configuration"],
                correct: 2,
                explanation: "Site Agent runs at provider location, connecting local resources (SLURM, storage) to central Waldur. Enables remote resource management."
            },
            {
                q: "Why use Site Agent?",
                options: ["Agents are faster than API", "Manage resources behind firewalls", "Marketing purposes only", "Required for all deployments"],
                correct: 1,
                explanation: "Site Agent enables managing resources not directly accessible: behind firewalls, in private networks. Agent initiates outbound connections."
            },
            {
                q: "How does Site Agent communicate?",
                options: ["Email-based communication", "Inbound connections to agent", "Direct database access", "Outbound HTTPS to central Waldur"],
                correct: 3,
                explanation: "The agent opens all connections itself: HTTPS to the Waldur REST API, and STOMP to the message broker when running in event mode. Nothing inbound is required, so it works from behind a firewall."
            },
        ],
        2: [
            {
                q: "What tasks does Site Agent perform?",
                options: ["Generate billing reports for consumed resources", "Handle user authentication and session tokens", "Provision resources, collect metrics, sync state", "Monitor network connectivity between components"],
                correct: 2,
                explanation: "Agent tasks: provision/delete local resources, collect usage metrics, sync resource state, execute operations requested by central Waldur."
            },
            {
                q: "How is Site Agent configured?",
                options: ["Auto-configured remotely by the central server", "Configuration file with credentials and settings", "Environment variables injected at container start", "Configured via the central web admin dashboard"],
                correct: 1,
                explanation: "Agent configured via config file: central Waldur URL, authentication token, local backend settings. Can be managed via deployment tools."
            },
            {
                q: "How does the agent learn that an order needs processing?",
                options: ["Periodic REST polling, or a pushed event over STOMP", "An operator triggers each agent run from the console", "Waldur calls an inbound webhook exposed by the agent", "A GraphQL subscription held open against the server"],
                correct: 0,
                explanation: "Two modes ship side by side: polling_processing sweeps the REST API on a timer, event_processing subscribes over STOMP to the agent's own broker queue and reacts to pushed events. Both are outbound-only.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/site-agent/docs/architecture/", text: "📚 Agent architecture" }
            },
        ],
        3: [
            {
                q: "What backends does Site Agent support?",
                options: ["SLURM, OpenStack, and local storage systems", "Only SLURM clusters for HPC job scheduling", "Only generic backends with standard API calls", "Cloud providers like AWS, GCP, and Azure only"],
                correct: 0,
                explanation: "Agent supports multiple backends: SLURM for HPC, OpenStack deployments, storage systems, custom backends via plugins."
            },
            {
                q: "How does Site Agent handle failures?",
                options: ["Silently skips failed tasks and moves to next", "Immediately aborts the operation on any error", "Queues failed tasks for manual user resolution", "Retry with backoff and report errors to central"],
                correct: 3,
                explanation: "Failure handling: retry tasks with exponential backoff, report persistent errors to central. Task queue ensures no lost work."
            },
            {
                q: "What's agent registration?",
                options: ["Registration not required", "Agent self-registration process", "Agent authenticates with central Waldur", "User registers for agent access"],
                correct: 2,
                explanation: "Registration: agent authenticates to central Waldur using token or certificate. Establishes trust. Configuration specifies which service provider."
            },
            {
                q: "How do you monitor Site Agent?",
                options: ["Health endpoint, logs, and central dashboard", "Requires separate external monitoring tool setup", "Agent only writes to a local file-based log", "Agent provides no built-in monitoring features"],
                correct: 0,
                explanation: "Monitor: agent health endpoint, local logs, central Waldur shows agent status and last check-in. Alert on communication failures."
            },
        ],
        4: [
            {
                q: "How do you develop Site Agent plugins?",
                options: ["Plugins are written as JavaScript Node.js modules", "Python modules implementing a defined interface", "The agent does not support custom plugin modules", "Only the core development team can add new plugins"],
                correct: 1,
                explanation: "Agent plugins: Python modules implementing task handlers. Define supported operations. Register with agent. Follow existing plugin patterns."
            },
            {
                q: "What's agent task queueing?",
                options: ["Tasks queued until agent processes them", "Agent queues in database only", "No queueing - immediate execution", "Central manages all queues"],
                correct: 0,
                explanation: "Central queues tasks for agent. Agent pulls when ready. Handles offline agents: tasks wait until agent reconnects. Order and priority supported."
            },
            {
                q: "How does Site Agent handle security?",
                options: ["Agents are granted full admin access to all systems", "Relies on IP allowlisting without any encryption", "TLS encryption, token auth, and minimal privileges", "Security is handled solely by the network firewall"],
                correct: 2,
                explanation: "Security: TLS for all communication, token-based authentication, agent has minimal privileges needed, secrets encrypted in config."
            },
            {
                q: "What's agent high availability?",
                options: ["Single agent is sufficient", "Multiple agents for redundancy", "Central handles HA", "HA not supported for agents"],
                correct: 1,
                explanation: "HA: multiple agents can serve same site. Task distribution across agents. If one fails, others continue. Central coordinates."
            },
        ],
        5: [
            {
                q: "How do you upgrade Site Agent?",
                options: ["Rolling upgrade with careful version compatibility", "Agents must be redeployed from scratch each time", "Full downtime of all services is always required", "Central server pushes upgrades to agents directly"],
                correct: 0,
                explanation: "Upgrade: check version compatibility, update agent software, restart. Rolling upgrade for HA setups. Central backward compatible with older agents."
            },
            {
                q: "What's the agent scaling model?",
                options: ["Vertical scaling by adding more CPU and memory", "Only a single agent instance can run per site", "Horizontal scaling with multiple agent instances", "Central server handles all scaling transparently"],
                correct: 2,
                explanation: "Scale horizontally: add more agents for load distribution. Useful for large sites with many resources. Central load-balances task distribution."
            },
            {
                q: "How do you troubleshoot Site Agent?",
                options: ["Reinstall the agent completely from scratch", "Submit a support ticket to the central team", "Wait for the agent to automatically self-heal", "Check logs, test connectivity, verify the config"],
                correct: 3,
                explanation: "Troubleshoot: check agent logs, test connectivity to central, verify configuration, check backend connectivity. Central shows agent errors."
            },
            {
                q: "What's agent capability reporting?",
                options: ["Agent reports what operations it can support", "Capabilities are hardcoded in the central server", "Central server discovers capabilities on its own", "There is no capability reporting functionality"],
                correct: 0,
                explanation: "Agent reports capabilities to central: supported backends, available resources, version info. Central uses to route appropriate tasks."
            },
            {
                q: "How do you test Site Agent integrations?",
                options: ["Test environment, mock backends, integration tests", "Skip testing since the agent is already reliable", "Deploy to production and test with real data", "Let the central team handle all agent testing"],
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
                options: ["Relational database management system", "Linux-based operating system kernel", "Open source cloud computing platform", "Container runtime environment"],
                correct: 2,
                explanation: "OpenStack is an open source cloud computing platform that controls pools of compute, storage, and networking resources, enabling private and public cloud deployments.",
                learnMore: { url: "https://www.openstack.org/software/", text: "📚 OpenStack Overview" }
            },
            {
                q: "What's the relationship between OpenStack and IaaS?",
                options: ["OpenStack is delivered as Software as a Service", "OpenStack provides Infrastructure as a Service", "OpenStack is a Platform as a Service offering", "OpenStack maps to no cloud service model"],
                correct: 1,
                explanation: "OpenStack provides IaaS (Infrastructure as a Service): on-demand compute, storage, and networking resources. Users get virtual infrastructure without managing physical hardware.",
                learnMore: { url: "https://docs.openstack.org/", text: "📚 OpenStack Docs" }
            },
            {
                q: "Is OpenStack a single application or collection of services?",
                options: ["Relational database management tool", "Linux operating system distribution", "Collection of interconnected services", "Single monolithic application binary"],
                correct: 2,
                explanation: "OpenStack is a collection of services (Nova, Neutron, Cinder, etc.) that work together. Each service handles a specific function and communicates via APIs.",
                learnMore: { url: "https://www.openstack.org/software/project-navigator/", text: "📚 OpenStack Projects" }
            },
        ],
        2: [
            {
                q: "What OpenStack component manages compute (VMs)?",
                options: ["Nova - the compute service", "Neutron - the networking layer", "Swift - the object store", "Cinder - the block storage"],
                correct: 0,
                explanation: "Nova is the compute service managing virtual machines. It handles VM lifecycle (create, resize, migrate, delete), scheduling, and hypervisor interaction.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/", text: "📚 Nova Documentation" }
            },
            {
                q: "What does Keystone provide in OpenStack?",
                options: ["Identity and authentication service", "Compute instance scheduling", "Virtual networking capabilities", "Block storage volume management"],
                correct: 0,
                explanation: "Keystone is the identity service providing authentication (who you are) and authorization (what you can do). It manages users, projects, roles, and service catalog.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/", text: "📚 Keystone Documentation" }
            },
            {
                q: "What's Glance used for in OpenStack?",
                options: ["Cluster monitoring and alerting", "Block storage volume service", "Image service for VM disk images", "Virtual network configuration"],
                correct: 2,
                explanation: "Glance is the image service storing and retrieving VM disk images. It supports multiple formats (qcow2, raw, vmdk) and backends (file, Swift, Ceph).",
                learnMore: { url: "https://docs.openstack.org/glance/latest/", text: "📚 Glance Documentation" }
            },
        ],
        3: [
            {
                q: "What's the role of Neutron?",
                options: ["Network connectivity as a service", "Object storage for file backups", "Block storage volume management", "Infrastructure stack orchestration"],
                correct: 0,
                explanation: "Neutron provides networking as a service: virtual networks, subnets, routers, firewalls, VPNs, and load balancers. Supports multiple backends (OVS, OVN, etc.).",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/", text: "📚 Neutron Documentation" }
            },
            {
                q: "What does Cinder provide?",
                options: ["User identity management", "Block storage volumes for VMs", "Object storage for backups", "Virtual network configuration"],
                correct: 1,
                explanation: "Cinder provides block storage volumes that attach to VMs like virtual disks. Supports multiple backends (LVM, Ceph, NetApp) and features like snapshots and backups.",
                learnMore: { url: "https://docs.openstack.org/cinder/latest/", text: "📚 Cinder Documentation" }
            },
            {
                q: "What's Swift in OpenStack?",
                options: ["Object storage service for files", "Virtual network configuration", "Compute instance management", "Block storage volume service"],
                correct: 0,
                explanation: "Swift is object storage for unstructured data (files, images, backups). Highly scalable and redundant. Access via REST API, not mounted like block storage.",
                learnMore: { url: "https://docs.openstack.org/swift/latest/", text: "📚 Swift Documentation" }
            },
            {
                q: "What's Heat used for?",
                options: ["System monitoring and metrics", "Orchestration with YAML templates", "Block storage volume service", "Virtual network configuration"],
                correct: 1,
                explanation: "Heat is the orchestration service using templates (HOT format) to define infrastructure stacks: VMs, networks, volumes, etc. Enables infrastructure as code.",
                learnMore: { url: "https://docs.openstack.org/heat/latest/", text: "📚 Heat Documentation" }
            },
        ],
        4: [
            {
                q: "How does Waldur integrate with OpenStack?",
                options: ["Via OpenStack APIs to provision resources", "Through manual data synchronization", "Using SSH commands to hypervisors", "Through direct database table access"],
                correct: 0,
                explanation: "Waldur integrates via OpenStack APIs (python-openstackclient libraries). It creates VMs, networks, volumes on behalf of users, syncs state, and reports usage.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/openstack/", text: "📚 Waldur OpenStack" }
            },
            {
                q: "What's a Nova flavor?",
                options: ["VM size specification (CPU, RAM, disk)", "Virtual network configuration type", "User role and permission set", "Block storage volume class type"],
                correct: 0,
                explanation: "A flavor defines VM size: vCPUs, RAM, root disk, ephemeral disk. Admins create flavors (m1.small, m1.large). Users select flavor when launching VMs.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/user/flavors.html", text: "📚 Nova Flavors" }
            },
            {
                q: "What's a security group in OpenStack?",
                options: ["Firewall rules for VM instances", "Set of virtual network subnets", "Pool of storage volumes", "Collection of user accounts"],
                correct: 0,
                explanation: "Security groups are virtual firewalls defining ingress/egress rules for instances. Rules specify protocol, port range, and source/destination CIDR or group.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html#security-groups", text: "📚 Security Groups" }
            },
            {
                q: "What's floating IP used for?",
                options: ["DNS name for service discovery", "Public IP that moves between instances", "Private IP for internal network", "Load balancer virtual address"],
                correct: 1,
                explanation: "Floating IPs are public IPs that can be associated with instances for external access. They can be moved between instances, enabling failover and maintenance.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/intro-os-networking.html#floating-ips", text: "📚 Floating IPs" }
            },
        ],
        5: [
            {
                q: "What's a Keystone domain used for?",
                options: ["DNS resolution for services", "Namespace for projects and users", "Storage pool for volumes", "Network isolation between VMs"],
                correct: 1,
                explanation: "Domains are top-level containers for projects and users, enabling multi-tenancy. Each domain has independent users, projects, and roles. Useful for resellers.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/admin/identity-concepts.html", text: "📚 Identity Concepts" }
            },
            {
                q: "How does OpenStack handle multi-region deployments?",
                options: ["Only single region is supported", "Automatic cross-region replication", "External third-party tools only", "Multiple regions with shared Keystone"],
                correct: 3,
                explanation: "Multi-region deployments share a central Keystone for identity but have independent Nova, Neutron, etc. per region. Regions appear in service catalog.",
                learnMore: { url: "https://docs.openstack.org/keystone/latest/admin/identity-concepts.html#regions", text: "📚 OpenStack Regions" }
            },
            {
                q: "What's Ceph integration with OpenStack?",
                options: ["Distributed storage backend for services", "Alternative network service to Neutron", "Alternative identity service to Keystone", "Alternative compute service to Nova"],
                correct: 0,
                explanation: "Ceph provides distributed storage backend for Cinder (block), Glance (images), and Nova (ephemeral disks). Offers scalability, replication, and snapshots.",
                learnMore: { url: "https://docs.ceph.com/en/latest/rbd/rbd-openstack/", text: "📚 Ceph with OpenStack" }
            },
            {
                q: "What's the relationship between Nova and Placement?",
                options: ["There is no relationship between them", "Placement tracks resources for Nova scheduling", "They are the exact same service", "Placement fully replaced Nova compute"],
                correct: 1,
                explanation: "Placement tracks resource inventory (CPUs, RAM, disk) and allocation. Nova scheduler queries Placement to find hosts with available capacity for new VMs.",
                learnMore: { url: "https://docs.openstack.org/placement/latest/", text: "📚 Placement Service" }
            },
            {
                q: "How do you troubleshoot Nova instance launch failures?",
                options: ["Reinstall OpenStack from scratch", "Check nova-compute logs and placement", "Simply restart all OpenStack services", "Contact vendor support immediately"],
                correct: 1,
                explanation: "Check: nova-scheduler logs (host selection), nova-compute logs (VM creation), Placement (resource availability), Neutron (network), Glance (image). Use 'openstack server show --diagnostics'.",
                learnMore: { url: "https://docs.openstack.org/nova/latest/admin/support-compute.html", text: "📚 Nova Troubleshooting" }
            },
        ],
        6: [
            {
                q: "A VM runs a router or VPN and its traffic is dropped by the port.",
                options: ["Disable the security group on that port entirely", "Assign a second floating IP to the instance", "Move the instance to a provider network", "Add allowed address pairs for the extra addresses"],
                correct: 3,
                explanation: "Neutron's anti-spoofing drops traffic whose source does not match the port's fixed IP and MAC. Allowed address pairs whitelist the additional address or CIDR the workload legitimately sends from.",
                learnMore: { url: "https://docs.openstack.org/neutron/latest/admin/index.html", text: "📚 Allowed address pairs" }
            },
            {
                q: "What are effective routes on a subnet or router?",
                options: ["The routes actually in force, after all sources merge", "The routes a tenant requested but that were rejected", "The default gateway routes only, without host routes", "The BGP routes learned from an upstream provider"],
                correct: 0,
                explanation: "Host routes, router routes and gateway configuration combine into what a port really uses. Surfacing the effective set is how you explain why traffic takes an unexpected path without reading three separate objects."
            },
            {
                q: "Why attach a security group to a load balancer VIP?",
                options: ["Because Octavia requires one before listeners start", "To let members bypass their own security groups", "To restrict who may reach the VIP itself", "To secure traffic between the VIP and members"],
                correct: 2,
                explanation: "The VIP is a Neutron port like any other. Without a group on it, exposure is governed only by the members' rules, so the listener may be reachable more widely than intended."
            },
            {
                q: "What does config drive provide that the metadata service does not?",
                options: ["Metadata on a local device, needing no network", "Encrypted metadata that the guest can verify", "Metadata that survives an instance rebuild", "A writable channel back to the control plane"],
                correct: 0,
                explanation: "Config drive attaches metadata as a read-only device, so cloud-init works before networking is up or where the 169.254 endpoint is unreachable. It also means user data sits on a device readable inside the guest."
            },
            {
                q: "Why does a project have per-volume-type quota as well as a total?",
                options: ["The overall quota covers boot volumes only", "Storage classes differ in cost and scarcity", "Cinder cannot compute a meaningful total", "Volume types are billed by the image service"],
                correct: 1,
                explanation: "A single gigabyte total lets a project spend its whole allocation on the most expensive backend. Per-type quotas bound fast SSD separately from bulk storage, which is what makes the allocation meaningful."
            },
            {
                q: "What does a Keystone application credential give an automation?",
                options: ["Full administrative rights within one project", "A token that never expires under any condition", "A scoped credential outliving a password change", "A shared secret that any project member reuses"],
                correct: 2,
                explanation: "Application credentials carry a subset of the creating user's roles and can be restricted and expired independently, so a script does not embed a human's password or break when that password rotates."
            },
        ],
        7: [
            {
                q: "What is the practical difference between OVN and the older ML2/OVS agents?",
                options: ["The Neutron API is replaced by a proprietary one", "Only provider networks are supported, not tenant", "Control moves to a distributed database, not agents", "Security groups are no longer needed at all"],
                correct: 2,
                explanation: "OVN keeps logical network state in a distributed database with local controllers programming flows, removing the L3 and DHCP agents. Troubleshooting therefore moves from agent logs to logical flow inspection."
            },
            {
                q: "Live migration fails on a busy VM that never converges. Why?",
                options: ["The instance has a floating IP that cannot be moved", "Shared storage is required and was not configured", "Memory dirties faster than it can be copied across", "The destination host lacks the same hypervisor version"],
                correct: 2,
                explanation: "Pre-copy migration converges only if the dirty rate is below the transfer rate. Post-copy or auto-converge throttling exists precisely for workloads that would otherwise iterate forever."
            },
            {
                q: "What does Placement contribute to scheduling?",
                options: ["Inventories and traits filtered before Nova's own filters", "The final host choice, overriding the Nova scheduler", "The network topology used to pick an availability zone", "The billing records for consumed compute resources"],
                correct: 0,
                explanation: "Placement tracks resource providers, their inventories and traits, and returns allocation candidates. Nova then applies its filters and weighers to that pre-filtered set instead of examining every host."
            },
            {
                q: "When is Cinder multi-attach the wrong answer to sharing data?",
                options: ["When the instances are in different projects", "When the backend supports snapshots", "When the filesystem is not cluster-aware", "When the volume is larger than one terabyte"],
                correct: 2,
                explanation: "Multi-attach presents the same block device to several instances; a normal filesystem mounted twice read-write will corrupt. It needs a clustered filesystem, or the workload wants shared file storage instead."
            },
            {
                q: "What breaks when a tenant's DNS resolution depends on the metadata network?",
                options: ["Floating IPs stop being routable from outside", "Security group rules stop being applied to ports", "Volumes cannot be attached to running instances", "Instances on isolated networks lose name resolution"],
                correct: 3,
                explanation: "A network without a router or DHCP-provided resolver has no path to the resolvers, so the guest boots but cannot resolve anything — an easy failure to misdiagnose as an application fault."
            },
            {
                q: "Why does an emulated OpenStack API help Waldur development?",
                options: ["It is the only way to test Keystone authentication", "The real client libraries and error paths still get exercised", "It validates the business logic more strictly than a cloud", "It removes the need to test provisioning flows at all"],
                correct: 1,
                explanation: "The emulator answers Keystone, Nova, Neutron, Cinder, Glance, Octavia and Placement on their usual ports, including a failure-injection API — so retry and erred-state handling is exercised without a real cloud."
            },
        ]
    },

    's-kubernetes': {
        1: [
            {
                q: "What is Kubernetes primarily used for?",
                options: ["Database clustering", "Virtual machine management", "Network routing", "Container orchestration"],
                correct: 3,
                explanation: "Kubernetes (K8s) orchestrates containers: scheduling, scaling, healing, networking. It automates deployment and management of containerized applications across clusters.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/", text: "📚 Kubernetes Overview" }
            },
            {
                q: "What's kubectl?",
                options: ["A container runtime engine used by Kubernetes", "A background service for cluster networking", "A plugin for container network configuration", "A command-line tool for managing Kubernetes"],
                correct: 3,
                explanation: "kubectl is the CLI for Kubernetes. It communicates with the API server to manage resources: create deployments, check pod status, view logs, exec into containers.",
                learnMore: { url: "https://kubernetes.io/docs/reference/kubectl/", text: "📚 kubectl Reference" }
            },
            {
                q: "What's a Kubernetes cluster?",
                options: ["A pool of persistent storage volumes only", "A single container running in isolation", "A set of nodes running containerised apps", "A virtual network linking the services"],
                correct: 2,
                explanation: "A cluster is a set of machines (nodes) running Kubernetes. It has a control plane (managing the cluster) and worker nodes (running workloads in pods).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/", text: "📚 Cluster Components" }
            },
        ],
        2: [
            {
                q: "What is a Helm chart?",
                options: ["Package of Kubernetes resources", "Network diagram of cluster", "Monitoring dashboard for metrics", "Storage class configuration"],
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
                options: ["Components that manage cluster state", "Storage backend for volumes", "Worker nodes running applications", "Containers inside the pods"],
                correct: 0,
                explanation: "Control plane components manage cluster state: API server (entry point), etcd (state store), scheduler (pod placement), controller manager (reconciliation loops).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/#control-plane-components", text: "📚 Control Plane" }
            },
        ],
        3: [
            {
                q: "What's a Kubernetes operator?",
                options: ["Command-line tool for managing deployments", "Scheduling component for pod placement tasks", "Custom controller that extends the K8s API", "Built-in monitoring agent for cluster health"],
                correct: 2,
                explanation: "Operators are custom controllers that extend Kubernetes with application-specific logic. They use CRDs to manage complex applications (databases, message queues) declaratively.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/", text: "📚 Operators" }
            },
            {
                q: "What does kubectl port-forward do?",
                options: ["Tunnels a local port to a pod's port", "Forwards container logs to a remote host", "Redirects DNS queries between services", "Opens firewall ports on the cluster nodes"],
                correct: 0,
                explanation: "port-forward creates a tunnel from localhost to a pod's port. Useful for debugging: access pod's service without exposing it externally (e.g., database, dashboard).",
                learnMore: { url: "https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/", text: "📚 Port Forwarding" }
            },
            {
                q: "What's an Ingress in Kubernetes?",
                options: ["Compute resource quota", "Internal network between pods", "Persistent storage volume", "HTTP/HTTPS routing to services"],
                correct: 3,
                explanation: "Ingress manages external HTTP/HTTPS access to services. It provides routing rules, TLS termination, and load balancing. Note: Gateway API is the newer successor to Ingress with more features.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/gateway/", text: "📚 Gateway API" }
            },
            {
                q: "What's a ServiceAccount used for?",
                options: ["User account for cluster developers", "Storage account for persistent data", "Billing account for resource costs", "Non-human identity for API authentication"],
                correct: 3,
                explanation: "ServiceAccounts provide identity for non-human processes (pods, CI/CD, monitoring tools) to authenticate to the Kubernetes API. Combined with RBAC, they control what actions are permitted.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/security/service-accounts/", text: "📚 Service Accounts" }
            },
        ],
        4: [
            {
                q: "What's the difference between ClusterIP and LoadBalancer service types?",
                options: ["LoadBalancer restricts access to internal traffic only", "ClusterIP provides external access via public IP address", "ClusterIP is internal only, LoadBalancer exposes externally", "Both types provide identical networking functionality"],
                correct: 2,
                explanation: "ClusterIP exposes service on internal cluster IP (only accessible within cluster). LoadBalancer provisions external load balancer (cloud provider) with public IP.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types", text: "📚 Service Types" }
            },
            {
                q: "What's a PodDisruptionBudget?",
                options: ["Quota that restricts total cluster spending", "Limit on CPU and memory per namespace", "Ensures minimum pods available during disruption", "Policy that limits network bandwidth per pod"],
                correct: 2,
                explanation: "PDB limits voluntary disruptions (upgrades, drain) by ensuring minimum available or maximum unavailable pods. Protects application availability during maintenance.",
                learnMore: { url: "https://kubernetes.io/docs/tasks/run-application/configure-pdb/", text: "📚 Pod Disruption Budget" }
            },
            {
                q: "What's kube-proxy responsible for?",
                options: ["Proxies container runtime calls to the kernel", "Forwards requests between API server and etcd", "Manages persistent volume mounts on each node", "Maintains network rules for service communication"],
                correct: 3,
                explanation: "kube-proxy runs on each node, maintaining network rules that allow communication to pods via Services. Implements Service abstraction using iptables or nftables (recommended since K8s 1.35+).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/overview/components/#kube-proxy", text: "📚 kube-proxy" }
            },
            {
                q: "What's a sidecar container pattern?",
                options: ["Separate pod that monitors the main application", "Mesh network overlay between multiple pods", "Helper container running alongside main container in pod", "External service proxy running outside the cluster"],
                correct: 2,
                explanation: "Sidecar containers run alongside main app in same pod, sharing network and storage. Common for logging agents, proxies (Envoy), or secret management.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/", text: "📚 Sidecar Containers" }
            },
        ],
        5: [
            {
                q: "How do you implement zero-downtime deployments in K8s?",
                options: ["Manual DNS switchover between old and new pods", "Schedule maintenance windows during low traffic", "Rolling updates combined with readiness probes", "Delete all old pods then recreate new ones"],
                correct: 2,
                explanation: "Use RollingUpdate strategy with readiness probes. New pods start and pass readiness before old pods terminate. Configure maxSurge and maxUnavailable for control.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment", text: "📚 Rolling Updates" }
            },
            {
                q: "What's a Custom Resource Definition (CRD)?",
                options: ["Core controller bundled in every K8s release", "Extension that adds custom resources to K8s API", "Network configuration applied to cluster nodes", "Built-in resource type included with Kubernetes"],
                correct: 1,
                explanation: "CRDs extend the Kubernetes API with custom resource types. Define schema in CRD, then create instances. Controllers watch CRDs and reconcile desired state.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/", text: "📚 Custom Resources" }
            },
            {
                q: "How does horizontal pod autoscaling work?",
                options: ["Scheduler distributes pods evenly across all nodes", "Metrics server monitors usage and HPA adjusts replicas", "Admin manually scales replicas using kubectl commands", "Vertical pod autoscaler increases CPU and memory limits"],
                correct: 1,
                explanation: "HPA queries metrics server (CPU, memory, custom metrics), calculates desired replicas based on target utilization, and updates deployment's replica count automatically.",
                learnMore: { url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/", text: "📚 Horizontal Pod Autoscaling" }
            },
            {
                q: "What's pod priority and preemption?",
                options: ["Admin manually preempts pods through the dashboard", "All pods receive equal priority and share resources", "Pods are scheduled strictly in first-come-first-served", "Higher priority pods can evict lower priority ones"],
                correct: 3,
                explanation: "PriorityClasses assign priority to pods. When resources are scarce, scheduler can preempt (evict) lower priority pods to make room for higher priority ones.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/", text: "📚 Pod Priority" }
            },
            {
                q: "What's the difference between RollingUpdate and Recreate deployment strategies?",
                options: ["RollingUpdate terminates all pods before replacing them", "Both strategies behave identically during deployments", "Recreate is faster because it skips health checks", "RollingUpdate has no downtime, Recreate has brief downtime"],
                correct: 3,
                explanation: "RollingUpdate gradually replaces pods (no downtime). Recreate terminates all old pods before starting new ones (brief downtime but simpler, useful for incompatible versions).",
                learnMore: { url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy", text: "📚 Deployment Strategies" }
            },
        ],
        6: [
            {
                q: "What does an operator add on top of a CustomResourceDefinition?",
                options: ["A controller reconciling the resource toward its spec", "A validating schema for the custom resource fields", "A UI for editing the resource in the dashboard", "An admission policy blocking invalid resources"],
                correct: 0,
                explanation: "The CRD only extends the API. The operator is the control loop that watches those objects and drives the external world toward the declared spec — as Waldur's rancher-keycloak-operator does with kopf.",
                learnMore: { url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/", text: "📚 Operator pattern" }
            },
            {
                q: "What does a PodDisruptionBudget protect against?",
                options: ["A pod being evicted for exceeding its memory limit", "Voluntary disruptions taking too many replicas at once", "A node failing unexpectedly and losing its pods", "A deployment rolling out a broken image version"],
                correct: 1,
                explanation: "A PDB constrains voluntary disruptions such as drains and upgrades. It cannot prevent a crash or a hardware failure — those are involuntary and no budget applies."
            },
            {
                q: "Why set CPU requests but often no CPU limit?",
                options: ["Requests are ignored by the scheduler without a limit", "Limits apply only to memory in current Kubernetes", "Without a limit the pod is evicted under pressure", "Limits throttle a burstable workload that has spare capacity"],
                correct: 3,
                explanation: "Requests drive scheduling and the CFS share. A CPU limit throttles even when the node is idle, which shows up as latency nobody can explain — memory is different, since it is not compressible."
            },
            {
                q: "What do topology spread constraints achieve?",
                options: ["Storage replicated across availability zones", "Replicas distributed across zones or nodes evenly", "Pods packed onto as few nodes as possible", "Traffic split evenly between two services"],
                correct: 1,
                explanation: "They express how evenly pods should spread over a topology key, with a skew tolerance. Anti-affinity says avoid; spread constraints say balance, which is usually what a highly available deployment actually wants."
            },
            {
                q: "What runs during an admission webhook call?",
                options: ["A check performed only during kubectl apply", "A policy applied when the pod starts on a node", "Validation or mutation before the object persists", "A background job after the resource is created"],
                correct: 2,
                explanation: "Admission webhooks run inside the API request path, so they can reject or modify objects before persistence. A failing webhook with failurePolicy Fail can therefore block writes cluster-wide."
            },
            {
                q: "How does the Gateway API differ from Ingress?",
                options: ["It splits the roles of infrastructure and route ownership", "It only supports TCP rather than HTTP routing", "It removes the need for a controller implementation", "It is a rewrite of Ingress with identical semantics"],
                correct: 0,
                explanation: "GatewayClass, Gateway and Route are separate objects with separate owners, so a platform team can own listeners and TLS while application teams own routes — expressed in the API rather than in annotations."
            },
        ],
        7: [
            {
                q: "Why does deleting a namespace sometimes hang forever?",
                options: ["The namespace still contains a running pod", "etcd compacts before the delete completes", "A finalizer on a resource never gets cleared", "The API server rate-limits large deletions"],
                correct: 2,
                explanation: "Deletion waits for finalizers to be removed by their controllers. If the controller is gone — an uninstalled operator — nothing clears them, and the namespace stays Terminating until someone intervenes."
            },
            {
                q: "What does a controller's informer cache change about reconciliation?",
                options: ["Writes are batched and applied on a fixed interval", "Events are guaranteed to be delivered exactly once", "The controller sees changes before they reach etcd", "Reads come from a local cache that may be slightly stale"],
                correct: 3,
                explanation: "Informers watch and cache, so a read right after a write may return the old version. Controllers therefore have to be level-triggered and idempotent rather than assuming their last write is visible."
            },
            {
                q: "A StatefulSet rollout stalls on the first pod. Why does nothing else proceed?",
                options: ["The service endpoints must be manually refreshed", "Updates are ordered and wait for each pod to be ready", "The controller retries only once before giving up", "Persistent volumes must be resized before continuing"],
                correct: 1,
                explanation: "StatefulSets update in reverse ordinal order and wait for readiness at each step, by design — an unready pod stops the rollout rather than risking a partially upgraded quorum."
            },
            {
                q: "What is the effect of a default-deny NetworkPolicy in a namespace?",
                options: ["All existing connections are terminated immediately", "Traffic within the namespace remains unrestricted", "Egress to the internet is unaffected by the rule", "Only explicitly allowed traffic reaches those pods"],
                correct: 3,
                explanation: "Once any policy selects a pod, only permitted traffic gets through — including from pods in the same namespace. It also requires a CNI that implements policy, or the object is silently inert."
            },
            {
                q: "How do you debug a crash-looping pod with no shell in its image?",
                options: ["kubectl debug, attaching an ephemeral container", "kubectl exec with a shell from the host node", "Rebuild the image with debugging tools included", "Read the events, since no other option exists"],
                correct: 0,
                explanation: "An ephemeral debug container joins the pod's namespaces with its own tooling, and a copy of the pod can be started with a different command — neither requires shipping a debugger in the production image."
            },
            {
                q: "What makes a Helm upgrade of Waldur safe to repeat?",
                options: ["Each upgrade recreates every object from scratch", "Helm refuses to run the same release version twice", "The chart declares desired state, applied idempotently", "Helm keeps a snapshot of the database beforehand"],
                correct: 2,
                explanation: "A release is a declaration reconciled toward, so re-applying converges rather than compounding. Database migrations are the ordered part — which is why the deployment runs them as their own step before serving traffic."
            },
        ]
    },

    's-slurm': {
        1: [
            {
                q: "What is SLURM?",
                options: ["Scientific programming language", "HPC workload manager and job scheduler", "Network routing protocol", "Distributed storage system"],
                correct: 1,
                explanation: "SLURM (Simple Linux Utility for Resource Management) is a workload manager for HPC clusters. It schedules jobs, allocates resources, and manages compute nodes.",
                learnMore: { url: "https://slurm.schedmd.com/overview.html", text: "📚 SLURM Overview" }
            },
            {
                q: "What does SLURM stand for?",
                options: ["Scalable Linux Unified Resource Manager", "System Level User Resource Manager", "Standard Linux User Resource Monitor", "Simple Linux Utility for Resource Management"],
                correct: 3,
                explanation: "SLURM stands for Simple Linux Utility for Resource Management. It's the most widely used HPC job scheduler, managing some of the world's largest supercomputers.",
                learnMore: { url: "https://slurm.schedmd.com/", text: "📚 SLURM Documentation" }
            },
            {
                q: "What environments typically use SLURM?",
                options: ["Mobile app backend services", "Desktop productivity applications", "HPC clusters and supercomputers", "Web application server hosting"],
                correct: 2,
                explanation: "SLURM is used in HPC (High Performance Computing) environments: research clusters, supercomputers, and scientific computing centers where batch job scheduling is essential.",
                learnMore: { url: "https://slurm.schedmd.com/quickstart.html", text: "📚 SLURM Quickstart" }
            },
        ],
        2: [
            {
                q: "What's a SLURM partition?",
                options: ["Access control group for users", "Virtual network segment in cluster", "Group of nodes with shared properties", "Filesystem disk partition on node"],
                correct: 2,
                explanation: "A partition (queue) is a group of nodes with common properties (GPU nodes, high-memory, etc.). Jobs are submitted to partitions based on requirements.",
                learnMore: { url: "https://slurm.schedmd.com/quickstart.html#partitions", text: "📚 SLURM Partitions" }
            },
            {
                q: "What command submits a job to SLURM?",
                options: ["run-job tool", "sbatch command", "slurm-submit", "qsub command"],
                correct: 1,
                explanation: "sbatch submits batch job scripts to SLURM. The script contains #SBATCH directives for resource requests and the commands to run.",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html", text: "📚 sbatch Command" }
            },
            {
                q: "What's the difference between sbatch and srun?",
                options: ["srun submits a batch job; sbatch runs it now", "They are two names for the same command", "sbatch submits a batch job; srun runs it now", "srun is deprecated in current releases"],
                correct: 2,
                explanation: "sbatch submits a batch script for later execution. srun runs commands directly (interactive or within a batch job for parallel execution across nodes).",
                learnMore: { url: "https://slurm.schedmd.com/srun.html", text: "📚 srun Command" }
            },
        ],
        3: [
            {
                q: "What does squeue show?",
                options: ["Disk storage quota", "User permissions list", "Current job queue status", "Node hardware specs"],
                correct: 2,
                explanation: "squeue displays the job queue: pending and running jobs, their states, resources, time limits, and which nodes they're running on.",
                learnMore: { url: "https://slurm.schedmd.com/squeue.html", text: "📚 squeue Command" }
            },
            {
                q: "What's a job array in SLURM?",
                options: ["Data structure used in job scripts", "Redundant storage disk configuration", "Grouped set of physical compute nodes", "Multiple similar jobs as one submission"],
                correct: 3,
                explanation: "Job arrays submit many similar jobs with one command (--array=0-100). Each array task gets unique SLURM_ARRAY_TASK_ID for parameter sweeps.",
                learnMore: { url: "https://slurm.schedmd.com/job_array.html", text: "📚 Job Arrays" }
            },
            {
                q: "What does scancel do?",
                options: ["Scan nodes for issues", "Cancel pending or running jobs", "Cancel user accounts", "Scan cluster for errors"],
                correct: 1,
                explanation: "scancel cancels jobs by ID, name, user, or other criteria. Can cancel pending jobs (removes from queue) or running jobs (terminates processes).",
                learnMore: { url: "https://slurm.schedmd.com/scancel.html", text: "📚 scancel Command" }
            },
            {
                q: "What's a SLURM reservation?",
                options: ["Dedicated disk space set aside for output", "Reserved resources for specific users or groups", "Online booking system for cluster access", "Pre-allocated memory limits per user job"],
                correct: 1,
                explanation: "Reservations pre-allocate nodes/resources for specific users, accounts, or maintenance windows. Jobs matching reservation criteria can use reserved resources.",
                learnMore: { url: "https://slurm.schedmd.com/reservations.html", text: "📚 Reservations" }
            },
        ],
        4: [
            {
                q: "How does SLURM accounting work?",
                options: ["Tracks resource usage for fairshare scheduling", "Relies on external third-party tools only", "Uses simple text file logging per node", "Does not provide any usage tracking data"],
                correct: 0,
                explanation: "SLURM accounting tracks CPU-hours, memory, GPU usage per user/account. Data feeds into fairshare scheduling and usage reports. Uses slurmdbd daemon.",
                learnMore: { url: "https://slurm.schedmd.com/accounting.html", text: "📚 SLURM Accounting" }
            },
            {
                q: "What's sacct used for?",
                options: ["List system accounts", "View accounting data for jobs", "Set access control rules", "Manage user accounts"],
                correct: 1,
                explanation: "sacct queries the accounting database for job history: runtime, resources used, exit status. Essential for analyzing completed jobs and usage patterns.",
                learnMore: { url: "https://slurm.schedmd.com/sacct.html", text: "📚 sacct Command" }
            },
            {
                q: "What's a QOS (Quality of Service) in SLURM?",
                options: ["Network bandwidth quality measurement tool", "Customer service agreement with the vendor", "Priority and resource limit policy for jobs", "Tiered technical support level for users"],
                correct: 2,
                explanation: "QOS defines job class properties: priority, max resources, preemption rights. Users/accounts can be assigned QOS (normal, high-priority, debug) for differentiated service.",
                learnMore: { url: "https://slurm.schedmd.com/qos.html", text: "📚 Quality of Service" }
            },
            {
                q: "How do you request specific resources in sbatch?",
                options: ["Cannot specify resources", "External config file only", "Command line arguments only", "#SBATCH directives like --nodes"],
                correct: 3,
                explanation: "#SBATCH directives in job scripts specify resources: --nodes, --ntasks, --cpus-per-task, --mem, --time, --gres=gpu:2, --partition, etc.",
                learnMore: { url: "https://slurm.schedmd.com/sbatch.html#SECTION_OPTIONS", text: "📚 sbatch Options" }
            },
        ],
        5: [
            {
                q: "What's fairshare scheduling in SLURM?",
                options: ["Processes all jobs in first-come-first-served order", "Randomly assigns jobs to available nodes", "Gives every user exactly equal time slots", "Adjusts priority based on usage vs allocation"],
                correct: 3,
                explanation: "Fairshare adjusts job priority based on historical usage vs allocated share. Heavy users get lower priority; underutilized accounts get higher priority.",
                learnMore: { url: "https://slurm.schedmd.com/fair_tree.html", text: "📚 Fair Tree Scheduling" }
            },
            {
                q: "What does 'scontrol requeue' do to a running job?",
                options: ["Returns it to the queue to run again later", "Cancels it and discards its output files", "Raises its priority above every other job", "Moves it to a different partition instantly"],
                correct: 0,
                explanation: "Requeueing puts the job back in pending so it runs again — the usual response to a node failure. It only helps if the job is restartable, which is why checkpointing and requeue policy are decided together.",
                learnMore: { url: "https://slurm.schedmd.com/scontrol.html", text: "📚 scontrol" }
            },
            {
                q: "What's a SLURM federation?",
                options: ["Multiple clusters managed as a unified group", "Single standalone cluster with one controller", "Virtual network setup linking remote nodes", "Permission group spanning several user accounts"],
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
                options: ["Simply restart the cluster", "Contact admin only option", "Check job output, scontrol, sacct", "Cannot troubleshoot jobs"],
                correct: 2,
                explanation: "Check: job output/error files, 'scontrol show job <id>' for state/reason, 'sacct -j <id>' for resources/exit code, node logs for system issues.",
                learnMore: { url: "https://slurm.schedmd.com/troubleshoot.html", text: "📚 Troubleshooting" }
            },
        ],
        6: [
            {
                q: "What does a QoS let a site express that a partition does not?",
                options: ["Limits and priority that follow the association", "Which physical nodes a job is allowed to use", "The maximum wall time the cluster permits", "The order in which idle nodes are powered on"],
                correct: 0,
                explanation: "Partitions group hardware; a QoS carries priority factors, limits and preemption rules that follow the association. That is what lets an overspending account be moved to a slowdown tier without changing where it runs.",
                learnMore: { url: "https://slurm.schedmd.com/qos.html", text: "📚 SLURM QoS" }
            },
            {
                q: "What is an association in SLURM accounting?",
                options: ["A record of which node ran which job step", "The cluster, account, user and partition tuple", "A link between two jobs run as a dependency", "A mapping from a POSIX group to a partition"],
                correct: 1,
                explanation: "Limits, fairshare and QoS attach to the association, not to the user alone. The same person can therefore have different limits under two accounts, which is exactly what multi-project allocation needs."
            },
            {
                q: "How does fairshare decay affect a user who ran heavily last month?",
                options: ["Their priority is permanently reduced afterwards", "Their jobs are rejected until usage is reset", "Their allocation is topped up automatically", "Their past usage matters less as its half-life passes"],
                correct: 3,
                explanation: "Usage is decayed with a half-life, so historical consumption fades and recent behaviour dominates priority. Testing it realistically needs simulated months, which is why the emulator can travel through time."
            },
            {
                q: "What does a periodic limit with carryover model?",
                options: ["An allocation per period, with unused amounts rolling forward", "A hard cap that resets to zero at each period boundary", "A limit that only applies during working hours", "A quota shared between every account on the cluster"],
                correct: 0,
                explanation: "Quarterly allocations rarely land evenly, so unused time carries into the next period rather than being lost. Enforcement combines the period's grant with what was carried over."
            },
            {
                q: "What does sacct show that squeue cannot?",
                options: ["Node health and drain reasons in real time", "The scheduler's projected start times", "Completed jobs, their resources and exit codes", "The current queue order for pending jobs"],
                correct: 2,
                explanation: "squeue reads live scheduler state; sacct reads the accounting database, so it is the source for finished jobs — the basis for both post-mortems and usage reporting."
            },
            {
                q: "Why would a site enable slurmrestd?",
                options: ["To let services query and submit over HTTP instead of CLI", "To replace the scheduler with a REST-based one", "To expose the accounting database to end users", "To allow jobs to be submitted without authentication"],
                correct: 0,
                explanation: "A REST interface lets an integration avoid shelling out to CLI tools and parsing their output — which is why the site agent has a documented REST design alongside its command-based backend."
            },
        ],
        7: [
            {
                q: "How does the backfill scheduler improve utilisation?",
                options: ["Idle nodes are powered down until demand returns", "Small jobs run early if they do not delay the top job", "Large jobs are split into smaller independent pieces", "Pending jobs are reordered by submission time"],
                correct: 1,
                explanation: "Backfill computes a reservation for the highest-priority job and slots in shorter jobs that finish before it starts — which is why an accurate, modest time limit gets a job scheduled sooner."
            },
            {
                q: "Why does an over-generous --time hurt the submitter?",
                options: ["It increases the charge rate applied per node-hour", "It causes the scheduler to reject the job outright", "It forces the job onto the smallest partition", "It makes the job a poor candidate for backfill"],
                correct: 3,
                explanation: "The scheduler can only backfill a job that provably finishes before the reserved window. A wall time far above the real runtime keeps the job waiting for a full-size slot."
            },
            {
                q: "What distinguishes a heterogeneous job from a job array?",
                options: ["A job with dependencies, versus one submitted standalone", "One job with differing resources per component, versus many similar tasks", "One job that may run on any partition, versus one fixed partition", "A job that restarts on failure, versus one that does not"],
                correct: 1,
                explanation: "Arrays are many near-identical tasks sharing a template. A heterogeneous job is a single allocation whose components differ — a few GPU nodes plus many CPU nodes, co-scheduled."
            },
            {
                q: "How are a job's resource limits enforced on the compute node?",
                options: ["By the shell profile that the job script sources", "By the filesystem quota applied to the user", "Through cgroups constraining CPU, memory and devices", "By the scheduler polling and killing over-users"],
                correct: 2,
                explanation: "The cgroup plugin confines the job step, so a process cannot use memory or GPUs it was not allocated. Without it, requested resources are advisory and neighbours suffer."
            },
            {
                q: "What does GRES binding affect for a GPU job?",
                options: ["Which devices the job sees and how tasks bind to them", "How many GPUs exist in the cluster overall", "Whether the job may use the network interconnect", "The order in which GPU jobs are billed"],
                correct: 0,
                explanation: "Generic resource scheduling allocates specific devices and can bind tasks to the GPUs nearest their CPU cores. Poor binding shows up as unexplained performance loss rather than as an error."
            },
            {
                q: "Why report usage per user and per day rather than as one total?",
                options: ["Daily records compress better than a single total", "Totals are only valid within one scheduling period", "Billing, quota enforcement and disputes all need the detail", "The accounting database cannot store aggregates"],
                correct: 2,
                explanation: "A single figure cannot be apportioned, checked or contested. Per-user daily records are what Waldur's components consume for invoicing and are also what makes an anomaly visible."
            },
        ]
    },

    's-oidc': {
        1: [
            {
                q: "What does OIDC stand for?",
                options: ["Open Internet Domain Control", "Online Identity Control", "Open ID Connection", "OpenID Connect"],
                correct: 3,
                explanation: "OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0. It allows clients to verify user identity and obtain basic profile information.",
                learnMore: { url: "https://openid.net/connect/", text: "📚 OpenID Connect" }
            },
            {
                q: "What problem does OIDC solve?",
                options: ["Secure file sharing between users", "Federated authentication across multiple apps", "Network routing between data centers", "Distributed data storage and replication"],
                correct: 1,
                explanation: "OIDC provides federated authentication: users log in once with an identity provider (Google, Microsoft, institutional IdP) and access multiple applications without separate passwords.",
                learnMore: { url: "https://openid.net/developers/how-connect-works/", text: "📚 How OIDC Works" }
            },
            {
                q: "Is OIDC related to OAuth?",
                options: ["OAuth 2.0 is built on top of OIDC", "Yes, OIDC is built on top of OAuth 2.0", "OIDC is the older protocol that OAuth replaced", "No, they are completely separate protocols"],
                correct: 1,
                explanation: "OIDC extends OAuth 2.0 with identity layer. OAuth handles authorization (what you can access), OIDC adds authentication (who you are) via ID tokens.",
                learnMore: { url: "https://oauth.net/articles/authentication/", text: "📚 OAuth vs OIDC" }
            },
        ],
        2: [
            {
                q: "What's the relationship between OIDC and OAuth 2.0?",
                options: ["They are the same protocol with different names", "They are completely separate specifications", "OIDC adds identity layer on top of OAuth 2.0", "OAuth 2.0 is replacing OIDC gradually"],
                correct: 2,
                explanation: "OIDC uses OAuth 2.0 flows for authorization but adds ID tokens for authentication. OAuth alone doesn't verify identity; OIDC does.",
                learnMore: { url: "https://auth0.com/docs/authenticate/protocols/openid-connect-protocol", text: "📚 OIDC Protocol" }
            },
            {
                q: "What is an ID token?",
                options: ["API key for service authentication", "JWT containing user identity claims", "Encrypted session cookie for browsers", "Hashed password stored in database"],
                correct: 1,
                explanation: "ID token is a JWT (JSON Web Token) containing claims about the user: subject (sub), name, email, issuer (iss), audience (aud), expiration (exp).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#IDToken", text: "📚 ID Token Spec" }
            },
            {
                q: "What's an access token used for?",
                options: ["Reset forgotten user passwords", "Authorize requests to protected APIs", "Identify user in client application", "Manage active user sessions"],
                correct: 1,
                explanation: "Access tokens authorize API requests. They're sent in Authorization header (Bearer token) to access protected resources. Unlike ID tokens, they're not for user identity.",
                learnMore: { url: "https://auth0.com/docs/secure/tokens/access-tokens", text: "📚 Access Tokens" }
            },
        ],
        3: [
            {
                q: "What's the authorization code flow?",
                options: ["Device polls server for authorization", "User sends password directly to the app", "Tokens are issued directly to the browser", "Server exchanges authorization code for tokens"],
                correct: 3,
                explanation: "Authorization code flow: redirect to IdP → user authenticates → redirect back with code → backend exchanges code for tokens. Secure for server-side apps.",
                learnMore: { url: "https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow", text: "📚 Auth Code Flow" }
            },
            {
                q: "What is PKCE used for?",
                options: ["Hash passwords before transmission", "Manage distributed user sessions", "Protect auth code flow for public clients", "Encrypt tokens stored in the browser"],
                correct: 2,
                explanation: "PKCE (Proof Key for Code Exchange) protects auth code flow for public clients (mobile, SPA). Uses code_verifier and code_challenge to prevent code interception attacks.",
                learnMore: { url: "https://oauth.net/2/pkce/", text: "📚 PKCE" }
            },
            {
                q: "What's the difference between ID token and access token?",
                options: ["ID token calls APIs, access token identifies", "ID token identifies user, access token calls APIs", "They are the same thing with different names", "Access token identifies, ID token authorizes"],
                correct: 1,
                explanation: "ID token: proves user identity (for your app). Access token: authorizes API access (for resource servers). Don't use ID tokens to call APIs.",
                learnMore: { url: "https://auth0.com/blog/id-token-access-token-what-is-the-difference/", text: "📚 ID vs Access Token" }
            },
            {
                q: "What's a refresh token?",
                options: ["Refreshes the browser session cookie", "Gets new access tokens without re-login", "Resets user password on expiration", "Clears the application token cache"],
                correct: 1,
                explanation: "Refresh tokens get new access tokens when they expire, without re-prompting user login. They're long-lived and must be stored securely.",
                learnMore: { url: "https://auth0.com/docs/secure/tokens/refresh-tokens", text: "📚 Refresh Tokens" }
            },
        ],
        4: [
            {
                q: "What are OIDC scopes?",
                options: ["Define API rate limits per client", "Define what user information is accessible", "Define security boundaries between services", "Define network segments for isolation"],
                correct: 1,
                explanation: "Scopes define what claims (user info) are accessible: openid (required), profile (name), email, address, phone. Users consent to requested scopes.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims", text: "📚 OIDC Scopes" }
            },
            {
                q: "What's the 'openid' scope required for?",
                options: ["Provides administrator access to the IdP", "Grants full API access to the application", "Indicates OIDC request and returns ID token", "It's optional and can be omitted safely"],
                correct: 2,
                explanation: "The 'openid' scope is required for OIDC requests. It tells the authorization server to return an ID token (not just access token like plain OAuth).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest", text: "📚 Auth Request" }
            },
            {
                q: "What claims are in the 'profile' scope?",
                options: ["Only the user's phone number is included", "name, family_name, given_name, picture, etc.", "Only the user's email address is included", "Only the user's street address is included"],
                correct: 1,
                explanation: "Profile scope includes: name, family_name, given_name, middle_name, nickname, picture, website, gender, birthdate, zoneinfo, locale, updated_at.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims", text: "📚 Profile Claims" }
            },
            {
                q: "What's the userinfo endpoint?",
                options: ["Handles user login and authentication", "Returns claims about the authenticated user", "Exchanges authorization code for tokens", "Handles user logout and session end"],
                correct: 1,
                explanation: "The userinfo endpoint returns claims about the authenticated user when called with a valid access token. Alternative to getting all claims from ID token.",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#UserInfo", text: "📚 UserInfo Endpoint" }
            },
        ],
        5: [
            {
                q: "How do you validate an ID token?",
                options: ["Verify signature, issuer, audience, expiration", "Always trust tokens without verification", "Query the database for token existence", "Compare hash values in local storage"],
                correct: 0,
                explanation: "Validate ID token: verify JWT signature (using provider's keys), check iss (issuer), aud (audience = your client_id), exp (not expired), iat (issued time).",
                learnMore: { url: "https://openid.net/specs/openid-connect-core-1_0.html#IDTokenValidation", text: "📚 Token Validation" }
            },
            {
                q: "What's the discovery document (.well-known/openid-configuration)?",
                options: ["Server access log file in JSON format", "Application-specific configuration settings", "Metadata about provider endpoints and capabilities", "Directory listing of all registered users"],
                correct: 2,
                explanation: "Discovery document provides provider metadata: authorization/token/userinfo endpoints, supported scopes, signing algorithms, JWKS URI for token verification.",
                learnMore: { url: "https://openid.net/specs/openid-connect-discovery-1_0.html", text: "📚 OIDC Discovery" }
            },
            {
                q: "How does Waldur use OIDC?",
                options: ["Only for service-to-service API authentication", "For internal password authentication only", "To authenticate users via external providers", "Waldur does not support the OIDC protocol"],
                correct: 2,
                explanation: "Waldur supports OIDC for SSO: users authenticate via institutional IdP (eduGAIN, GÉANT, Google). Waldur creates/updates users based on ID token claims.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/identities/summary/", text: "📚 Waldur Authentication" }
            },
            {
                q: "What's token introspection?",
                options: ["Request a new token using refresh token", "Validate token via authorization server query", "Invalidate and revoke an active token", "Decode and view the token's raw contents"],
                correct: 1,
                explanation: "Token introspection queries the authorization server to validate a token and get its metadata (active, scope, expiration). Used by resource servers.",
                learnMore: { url: "https://oauth.net/2/token-introspection/", text: "📚 Token Introspection" }
            },
            {
                q: "What's the implicit flow and why is it discouraged?",
                options: ["It's a server-side flow for backends", "It's actually the most secure flow available", "It's the recommended flow for all apps", "Tokens in URL fragment expose security risks"],
                correct: 3,
                explanation: "Implicit flow returns tokens directly in URL fragment (no code exchange). Discouraged: tokens exposed in browser history, logs. Use auth code + PKCE instead.",
                learnMore: { url: "https://oauth.net/2/grant-types/implicit/", text: "📚 Implicit Flow" }
            },
        ],
        6: [
            {
                q: "What does PKCE protect the authorization code flow from?",
                options: ["An identity provider issuing tokens for the wrong user", "A client secret leaking from a server deployment", "An intercepted code being redeemed by an attacker", "A stolen access token being replayed later"],
                correct: 2,
                explanation: "The client sends a hash of a per-request verifier and must present the verifier at token exchange. A code captured in transit or by another app on the device is therefore useless on its own.",
                learnMore: { url: "https://oauth.net/2/pkce/", text: "📚 PKCE" }
            },
            {
                q: "Why validate the aud claim on an access token?",
                options: ["The claim identifies which user the token belongs to", "Audience determines how long the token remains valid", "Without it the signature cannot be verified at all", "A token minted for another service must not be accepted"],
                correct: 3,
                explanation: "A valid signature only proves the issuer minted it. Skipping the audience check lets a token issued for a different relying party be replayed against yours — a confused deputy waiting to happen."
            },
            {
                q: "How does a JWKS endpoint support key rotation?",
                options: ["Rotation requires clients to redeploy with new keys", "Clients fetch current public keys and select by kid", "The provider signs tokens with every key at once", "Clients are notified by webhook when keys change"],
                correct: 1,
                explanation: "Tokens carry a key id and the relying party resolves it from the published key set, caching with sensible bounds. Rotation then needs no coordinated redeployment — only a cache that expires."
            },
            {
                q: "What is the point of refresh token rotation?",
                options: ["It lengthens how long a session can last", "It removes the need to expire access tokens", "It lets several devices share one session", "A reused old refresh token reveals a theft"],
                correct: 3,
                explanation: "Each refresh returns a new token and invalidates the old one, so replay of a stolen token collides with the legitimate client and the family can be revoked. Without rotation, theft is silent."
            },
            {
                q: "When is token introspection preferable to local JWT validation?",
                options: ["When immediate revocation matters more than latency", "When the token is too large to parse efficiently", "When the client cannot reach the identity provider", "When tokens are issued without any signature"],
                correct: 0,
                explanation: "A self-contained JWT stays valid until it expires, however loudly you revoke it. Introspection asks the issuer per request, trading a round trip for the ability to cut access immediately."
            },
            {
                q: "What does back-channel logout solve?",
                options: ["Users being logged out after a period of inactivity", "Refresh tokens expiring at the same time as access", "Sessions ending at every relying party, not just the browser", "Tokens being revoked before they are ever issued"],
                correct: 2,
                explanation: "Front-channel logout depends on browser redirects that may never run. A server-to-server logout token lets the provider tell each relying party directly that the session is over."
            },
        ],
        7: [
            {
                q: "What does a sender-constrained token add over a bearer token?",
                options: ["Proof the presenter holds the matching key", "A longer lifetime with the same security", "Encryption of the token's claims in transit", "Automatic renewal without user interaction"],
                correct: 0,
                explanation: "Bearer tokens work for anyone holding them. Binding a token to a client key — mTLS or DPoP — means a stolen token cannot be used without the key, which is what makes theft survivable."
            },
            {
                q: "What is token exchange used for between services?",
                options: ["Swapping tokens between two identity providers", "Trading one token for a narrower one downstream", "Converting a SAML assertion into a session cookie", "Refreshing an expired token without the user"],
                correct: 1,
                explanation: "RFC 8693 lets a service exchange the caller's token for one scoped to the next hop, so a downstream service receives only the authority it needs rather than the caller's full token."
            },
            {
                q: "Why check the nonce in an ID token?",
                options: ["It proves the user typed their password recently", "It identifies which client requested the token", "It carries the session's expiry timestamp", "It binds the token to this authentication request"],
                correct: 3,
                explanation: "The nonce ties the response back to the request the client initiated, so a token replayed from a different session is rejected. It is the ID token counterpart to the state parameter's CSRF protection."
            },
            {
                q: "How are research-federation entitlements typically carried?",
                options: ["As metadata registered per client application", "As structured group or entitlement claims in the token", "As a separate LDAP lookup after authentication", "As a signed attachment to the refresh token"],
                correct: 1,
                explanation: "AARC-style entitlement claims express group membership and role in a structured, namespaced form, so a relying party can map federated group membership to local authorization without a second directory query."
            },
            {
                q: "A user's role changes at the provider. When does the service notice?",
                options: ["Only after the user logs out and back in again", "Never — role changes require a new account", "Not until the token is refreshed or re-introspected", "Immediately, since claims are re-read per request"],
                correct: 2,
                explanation: "Claims are a snapshot at issue time. Short access token lifetimes, introspection or a change event are what close the window — one reason Waldur re-authorizes against live roles rather than trusting a token's claims alone."
            },
            {
                q: "Why does Waldur re-check permissions rather than trust the token's claims?",
                options: ["Authorization state changes independently of the token", "Tokens from external providers are never signed", "Claims cannot express project-level permissions", "The token is validated only once per session"],
                correct: 0,
                explanation: "Roles are granted and revoked inside Waldur, so authorization is resolved per request against current state. The token establishes who you are; it is not the record of what you may do."
            },
        ]
    },

    's-ansible': {
        1: [
            {
                q: "What is Ansible used for?",
                options: ["Relational database management system", "Container runtime execution environment", "IT automation and configuration management", "General purpose programming language"],
                correct: 2,
                explanation: "Ansible automates IT tasks: configuration management, application deployment, cloud provisioning, and orchestration. It uses simple YAML playbooks.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/index.html", text: "📚 Ansible Documentation" }
            },
            {
                q: "Is Ansible agentless?",
                options: ["Depends on the target OS", "Yes, uses SSH for communication", "No, requires agent on targets", "Only sometimes agentless"],
                correct: 1,
                explanation: "Ansible is agentless: it connects to managed hosts via SSH (or WinRM for Windows). No agent software needs to be installed on target machines.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/getting_started/index.html", text: "📚 Getting Started" }
            },
            {
                q: "What language are Ansible playbooks written in?",
                options: ["YAML data serialization format", "JSON structured data notation", "XML document markup language", "Python scripting language format"],
                correct: 0,
                explanation: "Ansible playbooks are written in YAML (YAML Ain't Markup Language). YAML is human-readable and defines tasks, variables, and conditions declaratively.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html", text: "📚 Playbook Intro" }
            },
        ],
        2: [
            {
                q: "What does a handler do in Ansible?",
                options: ["It runs at the end of a play, only if notified", "It handles the errors raised by a failing task", "It runs before every task in the play begins", "It manages the SSH connection to each host"],
                correct: 0,
                explanation: "A task notifies a handler when it actually changes something, and handlers run once at the end of the play. Restarting a service only when its configuration changed is the classic use."
            },
            {
                q: "What's an Ansible inventory?",
                options: ["Queue for pending tasks", "Collection of reusable roles", "Storage of playbook variables", "List of managed hosts and groups"],
                correct: 3,
                explanation: "Inventory defines managed hosts and groups. Can be static (INI/YAML file) or dynamic (script querying cloud provider). Hosts can have group_vars and host_vars.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html", text: "📚 Inventory" }
            },
            {
                q: "What's an Ansible task?",
                options: ["Collection of multiple playbooks", "Entry in the inventory file", "Single action to execute (module call)", "Variable defined in playbook"],
                correct: 2,
                explanation: "A task is a single action calling an Ansible module (apt, copy, service, template, etc.). Tasks have names, module arguments, and optional conditions.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html#tasks-list", text: "📚 Tasks" }
            },
        ],
        3: [
            {
                q: "What's the difference between a role and a playbook?",
                options: ["Playbook is the reusable unit that roles reference", "They are interchangeable terms for the same concept", "Role is a reusable component, playbook orchestrates tasks", "Role is a larger collection that contains many playbooks"],
                correct: 2,
                explanation: "Roles are reusable units with structured directories (tasks, handlers, vars, templates). Playbooks orchestrate roles and standalone tasks for specific scenarios.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html", text: "📚 Roles" }
            },
            {
                q: "What does 'ansible-playbook -i inventory playbook.yml' do?",
                options: ["Validates the playbook's syntax and stops", "Runs the playbook against inventory hosts", "Creates a new inventory file from the hosts", "Generates documentation for the playbook"],
                correct: 1,
                explanation: "This command runs playbook.yml against hosts defined in the inventory file. -i specifies inventory; playbook defines what tasks to execute.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/cli/ansible-playbook.html", text: "📚 ansible-playbook CLI" }
            },
            {
                q: "What's an Ansible module?",
                options: ["Template file used for rendering variables", "Configuration file that stores settings values", "Unit of code that performs a specific action", "Log file that records task execution output"],
                correct: 2,
                explanation: "Modules are units of code Ansible runs on managed nodes. Examples: apt (packages), copy (files), service (daemons), template (Jinja2), command (shell).",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/module_plugin_guide/modules_intro.html", text: "📚 Modules" }
            },
            {
                q: "What's a handler in Ansible?",
                options: ["Background daemon responding to system events", "Watcher that reacts to file system changes", "Error handler that catches and logs task failures", "Task triggered by notification from other tasks"],
                correct: 3,
                explanation: "Handlers are tasks triggered by 'notify' from other tasks. Common use: restart service after config change. Handlers run once at end of play, even if notified multiple times.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_handlers.html", text: "📚 Handlers" }
            },
        ],
        4: [
            {
                q: "What is Ansible AWX/Tower?",
                options: ["Database for storing playbooks", "Web UI and API for Ansible automation", "Monitoring tool for Ansible", "Cloud provider for hosting Ansible"],
                correct: 1,
                explanation: "AWX (open source) / Tower (enterprise) provides web UI, REST API, RBAC, job scheduling, and credentials management for Ansible. Enables team collaboration.",
                learnMore: { url: "https://github.com/ansible/awx", text: "📚 AWX Project" }
            },
            {
                q: "What's Ansible Galaxy?",
                options: ["Cloud service for running Ansible remotely", "Repository for sharing roles and collections", "Integrated development environment for playbooks", "Testing framework for validating playbook logic"],
                correct: 1,
                explanation: "Ansible Galaxy is a hub for sharing roles and collections. Use 'ansible-galaxy install' to download community roles. Organizations can host private Galaxy servers.",
                learnMore: { url: "https://galaxy.ansible.com/", text: "📚 Ansible Galaxy" }
            },
            {
                q: "What are Ansible facts?",
                options: ["Storage capacity data from monitoring agents", "User-defined custom variables in playbooks", "Network topology data from scanning tools", "System info gathered from managed hosts automatically"],
                correct: 3,
                explanation: "Facts are variables automatically discovered from hosts: OS, IP, CPU, memory, mounts, etc. Access via ansible_facts or gather_facts module. Use in conditionals and templates.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_vars_facts.html", text: "📚 Facts" }
            },
            {
                q: "What's idempotency in Ansible context?",
                options: ["There is no guarantee of a consistent outcome", "The playbook is designed to only run one time", "Running a playbook multiple times gives same result", "Tasks execute in randomized order each run"],
                correct: 2,
                explanation: "Idempotent tasks check current state before acting. Running playbook repeatedly yields same result: package already installed → no action. Design tasks to be idempotent.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/reference_appendices/glossary.html#term-Idempotency", text: "📚 Idempotency" }
            },
        ],
        5: [
            {
                q: "How do you handle secrets in Ansible?",
                options: ["Use environment variables only", "Ansible cannot handle secrets", "Ansible Vault for encrypted variables", "Store secrets in plain text files"],
                correct: 2,
                explanation: "Ansible Vault encrypts sensitive data (passwords, keys) in files. Use 'ansible-vault create/edit/encrypt/decrypt'. Pass --ask-vault-pass or vault password file at runtime.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/vault_guide/index.html", text: "📚 Ansible Vault" }
            },
            {
                q: "What's an Ansible collection?",
                options: ["Collection of past execution logs from playbooks", "Collection of configuration files stored on disk", "Collection of user accounts for access control", "Distribution format for roles, modules, and plugins"],
                correct: 3,
                explanation: "Collections bundle roles, modules, plugins, and playbooks in a standard format. Namespace.collection format (e.g., community.general). Install from Galaxy or Automation Hub.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/collections_guide/index.html", text: "📚 Collections" }
            },
            {
                q: "How do you test Ansible playbooks?",
                options: ["External tools only, not Ansible", "Manual testing only is supported", "No testing is possible", "Molecule for testing, --check for dry run"],
                correct: 3,
                explanation: "Molecule tests roles in containers/VMs (create, converge, verify, destroy). --check does dry run. --diff shows changes. ansible-lint checks best practices.",
                learnMore: { url: "https://ansible.readthedocs.io/projects/molecule/", text: "📚 Molecule" }
            },
            {
                q: "What's Ansible callback plugins?",
                options: ["Callbacks for user interactions", "Callbacks for network operations", "Customize output and behavior of runs", "Callbacks for storage events"],
                correct: 2,
                explanation: "Callback plugins customize output format and behavior: JSON output, profiling, notifications to Slack/Teams. Configure in ansible.cfg or ANSIBLE_CALLBACKS_ENABLED.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/plugins/callback.html", text: "📚 Callback Plugins" }
            },
            {
                q: "How does Ansible handle failed tasks?",
                options: ["Stops by default, with ignore_errors or block/rescue", "Automatically retries every failed task three times", "Continues running all tasks regardless of failures", "Ansible cannot handle task failures at all"],
                correct: 0,
                explanation: "Ansible stops on failure by default. Use ignore_errors: yes to continue. block/rescue/always provides try/catch semantics. failed_when customizes failure conditions.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_error_handling.html", text: "📚 Error Handling" }
            },
        ],
        6: [
            {
                q: "What does a fully qualified collection name buy you?",
                options: ["The module becomes available to every playbook", "The module resolves unambiguously to one collection", "The module runs faster because lookup is skipped", "The module can be used without installing anything"],
                correct: 1,
                explanation: "Short names depend on search order, so two collections offering the same name is a silent trap. An FQCN names the exact module — which matters once a deployment installs several collections.",
                learnMore: { url: "https://docs.ansible.com/ansible/latest/collections_guide/index.html", text: "📚 Collections" }
            },
            {
                q: "What does the free strategy change about play execution?",
                options: ["Tasks run in parallel on the same host", "Failed hosts are retried automatically", "Facts are gathered only for the first host", "Hosts run ahead without waiting at each task"],
                correct: 3,
                explanation: "The default linear strategy synchronises every host at each task. The free strategy lets fast hosts finish early, which helps on uneven fleets but makes the output far harder to follow."
            },
            {
                q: "When does a task need delegate_to?",
                options: ["When the module requires elevated privileges", "When it must run somewhere other than the target host", "When the target host is temporarily unreachable", "When the task should run only once per play"],
                correct: 1,
                explanation: "Delegation runs the task elsewhere while keeping the current host's variables in scope — adding a host to a load balancer, or issuing an API call from the controller."
            },
            {
                q: "What is Molecule used for?",
                options: ["Encrypting variables shared between roles", "Generating documentation from role metadata", "Testing a role against real target environments", "Linting playbook YAML against a schema"],
                correct: 2,
                explanation: "Molecule provisions a scenario, converges the role, then verifies — including a second converge that must report no changes, which is how idempotency stops being an assumption."
            },
            {
                q: "How should a long-running command avoid a connection timeout?",
                options: ["Run it asynchronously and poll for completion", "Increase the SSH timeout for the whole play", "Run it in a shell task backgrounded with an ampersand", "Split it into several smaller shell commands"],
                correct: 0,
                explanation: "async with poll lets Ansible start the job and check on it, so the connection is not held open for the duration. Backgrounding by hand loses the exit status and any error output."
            },
            {
                q: "Why does a shell task usually report changed every run?",
                options: ["The module caches its result from the first run", "Changed status is random for command modules", "Ansible cannot know what the command did", "Shell tasks always fail check mode by design"],
                correct: 2,
                explanation: "A raw command has no notion of desired state, so Ansible reports a change unless creates, removes or changed_when tells it otherwise. This is why a purpose-built module is preferable when one exists."
            },
        ],
        7: [
            {
                q: "What must a custom module do to support check mode?",
                options: ["Refuse to run whenever check mode is requested", "Log its intended actions to a file instead", "Run normally and roll back afterwards", "Declare support and return without making changes"],
                correct: 3,
                explanation: "The module declares supports_check_mode and, when check_mode is set, reports what would change without doing it. A module that ignores the flag makes a whole dry run untrustworthy."
            },
            {
                q: "What does a dynamic inventory plugin provide over a static file?",
                options: ["Automatic retries for unreachable hosts", "Hosts and groups discovered from a live source", "Faster parsing of a very large host list", "Encrypted storage of the inventory contents"],
                correct: 1,
                explanation: "The inventory is generated from a cloud or CMDB at run time, with groups derived from tags or attributes — so an autoscaled fleet does not require a file to be edited on every change."
            },
            {
                q: "How does fact caching change a large run?",
                options: ["Facts are shared between unrelated playbooks always", "Facts become available before hosts are reachable", "Facts are recomputed in parallel across hosts", "Gathering can be skipped when facts are still fresh"],
                correct: 3,
                explanation: "Fact gathering is often the most expensive phase. Caching lets subsequent plays reuse it, at the cost of acting on a stale picture if the cache lifetime is set carelessly."
            },
            {
                q: "What does SSH pipelining reduce?",
                options: ["The number of round trips per executed task", "The size of the module code transferred", "The number of hosts contacted concurrently", "The privilege escalation prompts required"],
                correct: 0,
                explanation: "Pipelining avoids writing the module to a temporary file on the target, cutting SSH operations per task. It requires requiretty to be disabled in sudoers, which is why it is not on by default."
            },
            {
                q: "Where should a role's tunable defaults live?",
                options: ["In the tasks file, close to their usage", "In the inventory, one copy per host", "In defaults, which have the lowest precedence", "In vars, so they cannot be overridden"],
                correct: 2,
                explanation: "defaults are meant to be overridden by inventory or play variables; vars sit high in precedence and are for values the role depends on. Putting a knob in vars makes it effectively unchangeable."
            },
            {
                q: "How does the Waldur Ansible collection stay in step with the API?",
                options: ["It is generated from the OpenAPI schema by a generator", "It is written by hand and reviewed after each release", "It calls the Python SDK directly at run time", "It is exported from the frontend's API client"],
                correct: 0,
                explanation: "ansible-waldur-generator turns the Mastermind OpenAPI schema plus YAML configuration into the collection, and the E2E suite runs a real playbook against the API to check the result behaves."
            },
        ]
    },

    's-monitoring': {
        1: [
            {
                q: "What is Prometheus?",
                options: ["Time-series monitoring system", "Log aggregation platform", "Distributed tracing system", "Application performance tool"],
                correct: 0,
                explanation: "Prometheus is an open-source time-series monitoring system. It collects metrics via HTTP pull, stores them locally, and supports powerful queries and alerting.",
                learnMore: { url: "https://prometheus.io/docs/introduction/overview/", text: "📚 Prometheus Overview" }
            },
            {
                q: "What's the pull vs push model in monitoring?",
                options: ["Push: the monitor scrapes; pull: targets send", "Both models were replaced by streaming APIs", "Pull: the monitor scrapes; push: targets send", "They describe the same mechanism differently"],
                correct: 2,
                explanation: "Pull: monitoring system fetches metrics from targets (Prometheus style). Push: targets send metrics to collector (Graphite, InfluxDB style). Each has trade-offs.",
                learnMore: { url: "https://prometheus.io/docs/introduction/faq/#why-do-you-pull-rather-than-push", text: "📚 Pull vs Push" }
            },
            {
                q: "What type of data does Prometheus store?",
                options: ["Distributed trace spans", "Time-series numeric metrics", "System event records", "Application log entries"],
                correct: 1,
                explanation: "Prometheus stores time-series data: numeric values with timestamps and labels. It's not for logs (use Loki) or traces (use Jaeger/Tempo).",
                learnMore: { url: "https://prometheus.io/docs/concepts/data_model/", text: "📚 Data Model" }
            },
        ],
        2: [
            {
                q: "What is Grafana used for?",
                options: ["Collecting metrics from targets", "Visualization and dashboards", "Alerting functionality only", "Long-term log storage"],
                correct: 1,
                explanation: "Grafana is a visualization platform for creating dashboards. It queries data from Prometheus, InfluxDB, Elasticsearch, and many other sources.",
                learnMore: { url: "https://grafana.com/docs/grafana/latest/", text: "📚 Grafana Docs" }
            },
            {
                q: "What's a Prometheus metric type 'counter'?",
                options: ["Statistical distribution bucket", "Cumulative value that only increases", "Boolean true/false value", "Current instantaneous value"],
                correct: 1,
                explanation: "Counter is cumulative: only increases (or resets to zero). Use for requests_total, errors_total. Query with rate() to get per-second increase.",
                learnMore: { url: "https://prometheus.io/docs/concepts/metric_types/#counter", text: "📚 Counter Metrics" }
            },
            {
                q: "What's a Prometheus metric type 'gauge'?",
                options: ["Value that can go up and down", "Summary with quantiles", "Value that only increases", "Histogram with buckets"],
                correct: 0,
                explanation: "Gauge represents a value that can increase or decrease: temperature, memory usage, queue size. Snapshot of current state.",
                learnMore: { url: "https://prometheus.io/docs/concepts/metric_types/#gauge", text: "📚 Gauge Metrics" }
            },
        ],
        3: [
            {
                q: "What is PromQL?",
                options: ["PostgreSQL extension module", "Python monitoring library", "Queue management system", "Prometheus Query Language"],
                correct: 3,
                explanation: "PromQL (Prometheus Query Language) queries time-series data. Supports filtering, aggregation, functions (rate, sum, avg), and time ranges.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/querying/basics/", text: "📚 PromQL Basics" }
            },
            {
                q: "What's the ELK stack?",
                options: ["Error Logging Kit framework", "Event Log Keeper system", "Elasticsearch, Logstash, Kibana", "Elastic Load Keeper service"],
                correct: 2,
                explanation: "ELK: Elasticsearch (search/storage), Logstash (log processing/ingestion), Kibana (visualization). Popular for centralized logging. Now often includes Beats.",
                learnMore: { url: "https://www.elastic.co/elastic-stack", text: "📚 Elastic Stack" }
            },
            {
                q: "What's an exporter in Prometheus?",
                options: ["A tool that exports stored samples to files", "A shipper that forwards logs to another system", "A service exposing metrics in Prometheus format", "A generator producing reports from dashboards"],
                correct: 2,
                explanation: "Exporters expose metrics in Prometheus format. Examples: node_exporter (system metrics), mysqld_exporter (MySQL), blackbox_exporter (probing endpoints).",
                learnMore: { url: "https://prometheus.io/docs/instrumenting/exporters/", text: "📚 Exporters" }
            },
            {
                q: "What's a service discovery in Prometheus?",
                options: ["DNS service resolution system", "Network device discovery tool", "Automatically find targets to monitor", "User account discovery scan"],
                correct: 2,
                explanation: "Service discovery automatically finds scrape targets: Kubernetes pods, EC2 instances, Consul services. Eliminates manual target configuration.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config", text: "📚 Service Discovery" }
            },
        ],
        4: [
            {
                q: "What's the difference between metrics and logs?",
                options: ["Logs capture numeric measurement data points", "Metrics capture detailed textual event records", "Both serve the exact same observability purpose", "Metrics are numeric values, logs are event records"],
                correct: 3,
                explanation: "Metrics: numeric measurements over time (request rate, error percentage). Logs: textual event records with details. Metrics for alerting/trends, logs for debugging.",
                learnMore: { url: "https://grafana.com/blog/2016/01/05/logs-and-metrics-and-graphs-oh-my/", text: "📚 Logs vs Metrics" }
            },
            {
                q: "What does the 'for' clause on an alerting rule do?",
                options: ["Holds the alert pending until it is sustained", "Sets how often the rule itself is evaluated", "Caps how long the alert is allowed to fire", "Delays the notification sent after resolution"],
                correct: 0,
                explanation: "An alert whose expression turns true enters pending, and only fires once it has stayed true for the whole 'for' duration — which is what stops one bad scrape from paging somebody at night.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/", text: "📚 Alerting rules" }
            },
            {
                q: "What's Alertmanager in Prometheus ecosystem?",
                options: ["Stores alert history long-term", "Handles alerts and routes notifications", "Views alerts in dashboards", "Generates alerts from metrics"],
                correct: 1,
                explanation: "Alertmanager receives alerts from Prometheus, deduplicates, groups, and routes them to receivers (email, Slack, PagerDuty). Handles silencing and inhibition.",
                learnMore: { url: "https://prometheus.io/docs/alerting/latest/alertmanager/", text: "📚 Alertmanager" }
            },
            {
                q: "What are labels in Prometheus?",
                options: ["Categories used to group dashboards together", "Key-value pairs identifying a single time series", "Permissions attached to a monitoring user account", "Display names shown on a dashboard panel"],
                correct: 1,
                explanation: "Labels are key-value pairs that identify metric dimensions: instance, job, method, status_code. Enable filtering and aggregation in PromQL queries.",
                learnMore: { url: "https://prometheus.io/docs/practices/naming/#labels", text: "📚 Labels" }
            },
        ],
        5: [
            {
                q: "How do you implement effective alerting?",
                options: ["Use email notifications only", "Alert on every possible metric", "Alert on symptoms, avoid alert fatigue", "Disable all alerting entirely"],
                correct: 2,
                explanation: "Effective alerting: alert on user-impacting symptoms (not causes), use severity levels, have clear runbooks, avoid alert fatigue by eliminating noisy alerts.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/", text: "📚 SRE Monitoring" }
            },
            {
                q: "What's cardinality in monitoring context?",
                options: ["The storage format used for the samples", "The number of unique label combinations", "The total size of the stored sample data", "The speed at which a query is executed"],
                correct: 1,
                explanation: "Cardinality is the number of unique time series (label combinations). High cardinality (user_id as label) causes memory/storage issues. Keep cardinality bounded.",
                learnMore: { url: "https://prometheus.io/docs/practices/naming/#labels", text: "📚 Cardinality" }
            },
            {
                q: "What's the difference between blackbox and whitebox monitoring?",
                options: ["Whitebox observes from outside; blackbox from within", "Blackbox is for metrics; whitebox is for logs only", "Blackbox observes from outside; whitebox from within", "They describe the same practice using two names"],
                correct: 2,
                explanation: "Blackbox: probe from outside (HTTP checks, ping) - what users see. Whitebox: internal metrics from inside the system - why problems occur. Use both.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_black-box-monitoring", text: "📚 Monitoring Types" }
            },
            {
                q: "What are the four golden signals of monitoring?",
                options: ["Users, sessions, pages, clicks", "CPU, memory, disk, network only", "Latency, traffic, errors, saturation", "Requests, responses, errors, time"],
                correct: 2,
                explanation: "Four Golden Signals (Google SRE): Latency (response time), Traffic (demand), Errors (failure rate), Saturation (how full/overloaded). Focus monitoring on these.",
                learnMore: { url: "https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals", text: "📚 Golden Signals" }
            },
            {
                q: "How do you handle high-cardinality metrics?",
                options: ["Store every combination and scale the backend", "Limit labels, aggregate, add recording rules", "Cardinality is inherent and cannot be managed", "Ignore it, since modern backends are unaffected"],
                correct: 1,
                explanation: "Handle high cardinality: avoid unbounded labels (user IDs), pre-aggregate with recording rules, use exemplars for sampling, consider specialized systems for high-cardinality.",
                learnMore: { url: "https://prometheus.io/docs/practices/instrumentation/#do-not-overuse-labels", text: "📚 Label Best Practices" }
            },
        ],
        6: [
            {
                q: "What is a recording rule for?",
                options: ["Precomputing an expensive expression on a schedule", "Recording alerts that have already fired", "Storing raw samples for longer retention", "Replaying historical data into the database"],
                correct: 0,
                explanation: "A dashboard that recomputes a heavy aggregation on every refresh punishes the server. Evaluating it once into a new series makes both dashboards and alerts cheap and consistent.",
                learnMore: { url: "https://prometheus.io/docs/prometheus/latest/configuring/recording_rules/", text: "📚 Recording rules" }
            },
            {
                q: "What does alert inhibition prevent?",
                options: ["Alerts being sent to more than one receiver", "Downstream alerts firing when the cause already has", "The same alert firing twice within an interval", "Alerts firing outside configured working hours"],
                correct: 1,
                explanation: "When a cluster is down, every service on it will alert. Inhibition suppresses the consequences while the cause is active, so the page carries one signal instead of forty."
            },
            {
                q: "What does relabeling during service discovery decide?",
                options: ["How samples are compressed before being stored", "Which targets are scraped and the labels they get", "Which alerts are routed to which receiver first", "How long each metric is kept on the local disk"],
                correct: 1,
                explanation: "Discovery returns raw metadata; relabel rules filter targets and rewrite them into meaningful labels. Getting it wrong either scrapes nothing or produces labels no query can use."
            },
            {
                q: "Why is a quantile from a histogram an approximation?",
                options: ["It rounds to the nearest whole millisecond", "It is interpolated from the configured buckets", "It samples only a fraction of the requests", "It is computed from the last scrape only"],
                correct: 1,
                explanation: "histogram_quantile interpolates within a bucket, so accuracy depends entirely on bucket boundaries. A p99 that lands in a bucket spanning one to ten seconds tells you almost nothing."
            },
            {
                q: "What does remote write add to a Prometheus deployment?",
                options: ["The ability to write metrics from applications directly", "Replication of the alerting rules across servers", "Samples forwarded to long-term or central storage", "A second scrape path for unreachable targets"],
                correct: 2,
                explanation: "Local storage is sized for recent data. Remote write streams samples to a long-term backend for retention and global querying, without making the local server the system of record."
            },
            {
                q: "When is a pushgateway the right answer?",
                options: ["For short-lived batch jobs that end before a scrape", "For any service behind a firewall that blocks scraping", "For metrics that change more often than the interval", "For reducing the load on the Prometheus server"],
                correct: 0,
                explanation: "It exists for jobs that finish between scrapes. Using it as a general push path breaks target health semantics and leaves stale series behind after a job disappears."
            },
        ],
        7: [
            {
                q: "Why does a high-cardinality label break a metrics backend?",
                options: ["Labels are stored uncompressed, unlike samples", "The scraper rejects targets with too many labels", "Each label combination creates a separate time series", "Long label values exceed the maximum sample size"],
                correct: 2,
                explanation: "A user id or a request id multiplies series without bound, and memory and index size follow. High-cardinality identifiers belong in logs or traces, not in metric labels."
            },
            {
                q: "What does a burn-rate alert on an error budget give you?",
                options: ["An alert raised whenever a single request fails", "A weekly summary of the availability figures", "Paging that scales with how fast budget is spent", "A guarantee that the objective will be met"],
                correct: 2,
                explanation: "Alerting on a static threshold either pages on noise or misses a slow bleed. Multi-window burn rates page fast for a sharp outage and slowly for gradual degradation."
            },
            {
                q: "Why is rate() over a short window misleading for a rare event?",
                options: ["It always returns the maximum observed value", "Too few samples fall in the window to be meaningful", "rate() is only defined for gauges, not counters", "It resets whenever the target restarts"],
                correct: 1,
                explanation: "rate needs several samples in the window to extrapolate sensibly. For infrequent events a longer window — or counting rather than rating — reflects reality far better."
            },
            {
                q: "What links a log line to the request that produced it?",
                options: ["The timestamp, matched within a tolerance", "The hostname the process is running on", "The severity level assigned to the entry", "A trace or correlation id carried through both"],
                correct: 3,
                explanation: "Structured logging with a propagated trace id is what turns three separate systems into one story. Waldur's agents log through structlog for exactly this reason, alongside APM instrumentation."
            },
            {
                q: "What does an APM agent add beyond metrics and logs?",
                options: ["Spans showing where time went inside a request", "A faster transport for existing log data", "Automatic remediation of detected errors", "A replacement for the metrics scrape endpoint"],
                correct: 0,
                explanation: "Metrics say a request was slow; traces say which query or upstream call consumed the time. The site agent's Elastic APM support exists to answer that second question in production."
            },
            {
                q: "A metric stops being reported. What should the alert do?",
                options: ["Keep using the last known value indefinitely", "Treat the absence itself as a signal to alert on", "Assume the service is healthy until told otherwise", "Stay suppressed until the data starts flowing again"],
                correct: 1,
                explanation: "A vanished exporter silently ends the series, so a threshold alert simply stops evaluating. Alerting on absence is what distinguishes a healthy system from one nobody is watching."
            },
        ]
    },

    's-azure': {
        1: [
            {
                q: "What is Microsoft Azure?",
                options: ["Cloud computing platform from Microsoft", "Desktop application suite for Windows", "Graphic design color palette software", "Relational database management system"],
                correct: 0,
                explanation: "Azure is Microsoft's cloud platform offering IaaS, PaaS, SaaS. Provides VMs, storage, databases, AI services, and more."
            },
            {
                q: "What's an Azure subscription?",
                options: ["Software update schedule", "Billing and access boundary for resources", "Magazine subscription from Microsoft", "Email newsletter service"],
                correct: 1,
                explanation: "Azure subscription is container for billing and access management. Resources created within subscriptions. Can have multiple per organization."
            },
            {
                q: "What's a Resource Group in Azure?",
                options: ["Group of Azure platform administrators", "Team collaboration and sharing tool", "Resource usage and billing report", "Logical container for related resources"],
                correct: 3,
                explanation: "Resource Group is logical container holding related Azure resources. Enables management, access control, and billing at group level."
            },
        ],
        2: [
            {
                q: "What's Azure Virtual Machine?",
                options: ["Container service", "Desktop virtualization only", "Virtual reality from Microsoft", "IaaS compute service for VMs"],
                correct: 3,
                explanation: "Azure VMs provide IaaS compute: choose OS, size, storage. Full control over OS. Scale sets for auto-scaling."
            },
            {
                q: "What's Microsoft Entra ID (formerly Azure AD)?",
                options: ["Active user tracking and analytics", "File directory service in the cloud", "Identity and access management service", "Directory listing of Azure services"],
                correct: 2,
                explanation: "Microsoft Entra ID (renamed from Azure AD in 2023) provides identity management: authentication, SSO, MFA, conditional access. Integrates with Microsoft 365, Azure resources."
            },
            {
                q: "What's Azure Storage?",
                options: ["Database storage backend", "Local disk storage only", "File sharing application", "Scalable cloud storage service"],
                correct: 3,
                explanation: "Azure Storage provides: blob storage (objects), file shares, queues, tables. Highly durable and available. Multiple redundancy options."
            },
        ],
        3: [
            {
                q: "What's an ARM template?",
                options: ["ARM architecture reference documentation", "Template for ARM processor workloads", "Azure Resource Manager mobile app", "JSON template for deploying Azure resources"],
                correct: 3,
                explanation: "ARM (Azure Resource Manager) templates are JSON files defining Azure infrastructure. Enables Infrastructure as Code, repeatable deployments. Note: Bicep is now the recommended DSL for Azure IaC, compiling to ARM templates."
            },
            {
                q: "What's Azure CLI?",
                options: ["Container-based Linux image service", "Command-line interface for Azure management", "Client library installation manager", "Continuous integration build service"],
                correct: 1,
                explanation: "Azure CLI is cross-platform command-line tool for managing Azure resources. az commands for creating, configuring, managing services."
            },
            {
                q: "What's Azure RBAC?",
                options: ["Regional bandwidth allocation", "Routing and bridging control", "Role-Based Access Control for Azure", "Resource backup and copy tool"],
                correct: 2,
                explanation: "Azure RBAC controls who can do what with Azure resources. Assign roles (Owner, Contributor, Reader, custom) at various scopes."
            },
            {
                q: "How does Waldur integrate with Azure?",
                options: ["Manual Azure resource management only", "Azure plugin provisions VMs via Azure APIs", "Azure directly manages Waldur deployments", "Azure integration is not yet available"],
                correct: 1,
                explanation: "Waldur Azure plugin creates VMs, manages storage using Azure APIs. Service settings store Azure credentials. Users order Azure resources through marketplace."
            },
        ],
        4: [
            {
                q: "What's Azure Service Principal?",
                options: ["The principal support contact for Azure", "An identity applications use for automation", "A pricing principal for Azure services", "The primary instance of an Azure service"],
                correct: 1,
                explanation: "Service Principal is identity for applications/services to access Azure resources. Used for automation, CI/CD, Waldur integration. Has credentials and permissions."
            },
            {
                q: "What's Azure Virtual Network?",
                options: ["A simulator for virtual network testing", "A monitoring service for network traffic", "An isolated network for Azure resources", "A VPN link into an Azure datacentre region"],
                correct: 2,
                explanation: "VNet provides isolated network for Azure resources. Define IP ranges, subnets, security rules. Connect to on-premises via VPN/ExpressRoute."
            },
            {
                q: "How do you manage Azure costs?",
                options: ["Azure services are free for all usage", "Cost Management, budgets, reserved instances", "Azure costs cannot be controlled by users", "Only Microsoft can manage Azure costs"],
                correct: 1,
                explanation: "Azure Cost Management: track spending, set budgets, get alerts. Reserved Instances for discounts. Right-size resources. Spot VMs for savings."
            },
            {
                q: "What's Azure Monitor?",
                options: ["Network-only monitoring and alerting tool", "Full monitoring service for Azure resources", "Dashboard display service for Azure portals", "User activity monitoring and logging tool"],
                correct: 1,
                explanation: "Azure Monitor collects metrics and logs from Azure resources. Alerts, dashboards, Log Analytics for querying. Integrates with Grafana."
            },
        ],
        5: [
            {
                q: "What's Azure Managed Identity?",
                options: ["Manual identity creation and rotation", "Identity provider only for human users", "User profile and identity management", "Azure-managed credentials for services"],
                correct: 3,
                explanation: "Managed Identity provides automatic credentials for Azure resources. No secret management needed. System-assigned or user-assigned."
            },
            {
                q: "How do you implement Azure governance?",
                options: ["Governance not available in Azure", "Manual compliance checking only", "Policies, blueprints, management groups", "Governance is automatic"],
                correct: 2,
                explanation: "Azure governance: Policies enforce rules, Blueprints template environments, Management Groups organize subscriptions. Azure Policy for compliance."
            },
            {
                q: "What's Azure Bicep?",
                options: ["Domain-specific language for ARM templates", "Azure fitness and performance benchmark", "Backup and incremental copy utility", "Binary compression format for storage"],
                correct: 0,
                explanation: "Bicep is declarative DSL that compiles to ARM templates. Cleaner syntax than JSON. Microsoft-supported IaC for Azure."
            },
            {
                q: "How do you handle Azure multi-region deployments?",
                options: ["Multi-region deployments are not supported", "Traffic Manager, geo-redundancy, paired regions", "Azure handles region placement automatically", "Deploy to only one region at a time"],
                correct: 1,
                explanation: "Multi-region: Traffic Manager for routing, geo-redundant storage, deploy to paired regions for disaster recovery. Consider latency and compliance."
            },
            {
                q: "What's Azure DevOps integration?",
                options: ["Azure completely replaces DevOps tools", "Development operations monitoring only", "Separate tool with no Azure integration", "CI/CD pipelines for Azure deployments"],
                correct: 3,
                explanation: "Azure DevOps provides: repos, pipelines, boards, artifacts. CI/CD for Azure deployments. Integrate with ARM templates, Terraform, Bicep."
            },
        ],
        6: [
            {
                q: "What does a managed identity remove from an application?",
                options: ["The need to assign any role to the application", "The need to authenticate users of the application", "The need to place the app inside a virtual network", "The need to store any credential for Azure services"],
                correct: 3,
                explanation: "The platform issues and rotates the identity, and the app requests tokens from a local endpoint. Role assignments are still required — the identity says who it is, not what it may do.",
                learnMore: { url: "https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview", text: "📚 Managed identities" }
            },
            {
                q: "At which scopes can an Azure RBAC assignment be made?",
                options: ["Tenant level only, applied to every subscription", "Management group, subscription, resource group or resource", "Only at subscription level, then inherited downward", "Only on individual resources, never on containers"],
                correct: 1,
                explanation: "Assignments are made at any of the four levels and inherit downward, which is why an over-broad assignment at management group level is far harder to spot than one on a single resource."
            },
            {
                q: "What does a private endpoint change about reaching a PaaS service?",
                options: ["It removes the requirement to authenticate to it", "It replicates the service into your subscription", "It encrypts traffic that was otherwise in the clear", "It is reached over a private IP inside your network"],
                correct: 3,
                explanation: "The service gets an interface in your subnet, so traffic stays on the private network rather than traversing public endpoints — the data path changes, the authorization model does not."
            },
            {
                q: "How do availability zones differ from availability sets?",
                options: ["Zones are separate datacentres; sets are racks in one", "Zones apply to storage, sets apply to compute", "Sets provide stronger isolation than zones do", "They are two names for the same mechanism"],
                correct: 0,
                explanation: "A set spreads instances across fault and update domains within one datacentre. Zones are physically separate facilities in a region, so only zones survive the loss of a whole datacentre."
            },
            {
                q: "What does Bicep offer over hand-written ARM JSON?",
                options: ["Imperative scripting instead of declarative templates", "Automatic cost estimation before deployment", "A concise language that compiles to the same templates", "A different deployment engine with new capabilities"],
                correct: 2,
                explanation: "Bicep transpiles to ARM JSON, so the engine and capabilities are unchanged. What improves is authoring: modules, type checking and far less syntactic noise."
            },
            {
                q: "Why reference a secret in Key Vault rather than a template parameter?",
                options: ["The value is resolved at deployment without being stored", "Parameters cannot hold strings longer than a limit", "Key Vault values deploy faster than parameters do", "Parameters are unavailable in production subscriptions"],
                correct: 0,
                explanation: "A parameter value ends up in deployment history and often in source control. A Key Vault reference keeps the secret in the vault, with access governed by its own policy and audited separately."
            },
        ],
        7: [
            {
                q: "What does an ARM deployment in Complete mode do?",
                options: ["Deploys to every resource group in the subscription", "Deletes resources in the group that are not in the template", "Redeploys every resource whether changed or not", "Blocks the deployment if any resource would change"],
                correct: 1,
                explanation: "Complete mode makes the template authoritative for the whole resource group — powerful for preventing drift and dangerous when something was created outside the template. Incremental mode leaves extras alone."
            },
            {
                q: "What is Azure Policy for, as distinct from RBAC?",
                options: ["Assigning permissions to groups instead of individuals", "Auditing sign-ins across the tenant", "Limiting how much a subscription may spend", "Constraining what resources may look like, not who may act"],
                correct: 3,
                explanation: "RBAC answers who can do something; Policy answers what is allowed to exist — required tags, permitted regions, forbidden SKUs — with audit or deny effects at deployment time."
            },
            {
                q: "What does a CanNotDelete resource lock still permit?",
                options: ["Reading, but not listing, the resource", "Modifying the resource's properties", "Nothing until the lock is removed", "Deleting child resources only"],
                correct: 1,
                explanation: "CanNotDelete blocks deletion while allowing updates; ReadOnly blocks both. Locks are inherited by child resources, which is a common source of confusing failures in unrelated operations."
            },
            {
                q: "A deployment fails on quota. What is the actual constraint?",
                options: ["A billing cap configured on the payment method", "A limit on concurrent deployment operations", "A per-region, per-family vCPU limit on the subscription", "A global limit on resources per tenant"],
                correct: 2,
                explanation: "Compute quota is granular: region plus VM family. Capacity in one region or family says nothing about another, which is why quota failures often look arbitrary until the dimensions are understood."
            },
            {
                q: "Why does Waldur model Azure as a marketplace offering rather than a portal link?",
                options: ["So orders, quotas and billing work as for any other backend", "Because the Azure portal cannot be linked to directly", "Because Azure requires a broker for all provisioning", "So credentials can be shared between all users"],
                correct: 0,
                explanation: "Uniformity is the point: the same approval, quota, usage and invoicing machinery applies whether the resource is an OpenStack VM, a SLURM allocation or an Azure service."
            },
            {
                q: "What makes cost attribution hard in a shared subscription?",
                options: ["Azure does not expose per-resource cost data", "Cost data is delayed by a full billing cycle", "Untagged resources cannot be assigned to a project", "Costs are only reported at the tenant level"],
                correct: 2,
                explanation: "Cost analysis groups by tag, so anything created without the agreed tags lands in an unattributable bucket. Enforcing required tags with policy is what makes chargeback possible at all."
            },
        ]
    },

    's-gitlab-cicd': {
        1: [
            {
                q: "What is GitLab CI/CD?",
                options: ["Code review feature only", "External CI tool for GitLab", "Git branch naming convention", "Built-in CI/CD platform in GitLab"],
                correct: 3,
                explanation: "GitLab CI/CD is integrated automation platform. Define pipelines in .gitlab-ci.yml. Build, test, deploy automatically on code changes."
            },
            {
                q: "What's a GitLab pipeline?",
                options: ["The process of merging a merge request", "An automated workflow triggered by events", "A manual procedure for deploying releases", "A connection path between git branches"],
                correct: 1,
                explanation: "Pipeline is automated workflow: series of stages and jobs. Triggered by push, merge request, schedule. Visualized in GitLab UI."
            },
            {
                q: "What's .gitlab-ci.yml?",
                options: ["Configuration file defining the pipeline", "GitLab server-side settings file", "Git ignore patterns file for CI runs", "Log output file from CI job runs"],
                correct: 0,
                explanation: ".gitlab-ci.yml defines pipeline: stages, jobs, scripts, conditions. YAML format in repo root. GitLab reads on events to run pipeline."
            },
        ],
        2: [
            {
                q: "What's a GitLab Runner?",
                options: ["Git branch runner tool", "Fast code execution mode", "Person running GitLab server", "Agent that executes CI jobs"],
                correct: 3,
                explanation: "Runner is agent executing CI jobs. Can be shared (GitLab-provided) or self-hosted. Supports Docker, Kubernetes, shell executors."
            },
            {
                q: "What are pipeline stages?",
                options: ["Development stages of code", "Git branch stages", "Deployment environments only", "Groups of jobs running sequentially"],
                correct: 3,
                explanation: "Stages group jobs that run in parallel within stage. Stages run sequentially. Common: build, test, deploy. Defined in stages: key."
            },
            {
                q: "What's a CI/CD job?",
                options: ["Individual task in a pipeline", "CI configuration job file", "Employment at GitLab company", "Database job queue"],
                correct: 0,
                explanation: "Job is individual task: has script, runs in stage, produces artifacts. Jobs in same stage run in parallel. Defined with name and script."
            },
        ],
        3: [
            {
                q: "What are pipeline artifacts?",
                options: ["Files passed between jobs or downloaded", "Historical pipeline records", "Artifact repository integration", "Pipeline metadata files"],
                correct: 0,
                explanation: "Artifacts are files from job: build outputs, test results, reports. Passed to later jobs or downloaded. Defined with artifacts: key."
            },
            {
                q: "What's GitLab's environment feature?",
                options: ["Git branch naming convention feature", "Server provisioning and setup tooling", "Track deployments to specific environments", "Environment variables management only"],
                correct: 2,
                explanation: "Environments track deployments: staging, production. Shows deployment history, enables rollback, links to deployed URLs. Defined in job."
            },
            {
                q: "What are CI/CD variables?",
                options: ["Database connection variables and settings", "Variables defined in application source code", "Variable job scheduling and execution times", "Configuration values available in pipeline jobs"],
                correct: 3,
                explanation: "Variables provide configuration: secrets, settings. Defined in UI (protected, masked) or .gitlab-ci.yml. Available as environment variables."
            },
            {
                q: "What's the legacy only/except syntax?",
                options: ["Deprecated way to control when jobs run", "Exception handling mechanism within CI jobs", "Directive to run a specific job only once", "Exclusive job execution on protected branches"],
                correct: 0,
                explanation: "only/except is deprecated in favor of rules: syntax. It controlled job execution based on branch/tag conditions. New pipelines should use rules: for flexibility."
            },
        ],
        4: [
            {
                q: "What's GitLab's rules: syntax?",
                options: ["Flexible job conditions replacing only/except", "Repository access and permission rules", "Rules governing the code review process", "Merge request approval policy settings"],
                correct: 0,
                explanation: "rules: is flexible condition syntax: if, when, changes. More powerful than only/except. Can set variables, allow failure conditionally."
            },
            {
                q: "What's a parent-child pipeline?",
                options: ["Parent repository pipeline", "Child branch automation", "Pipeline triggering sub-pipelines", "Pipeline inheritance pattern"],
                correct: 2,
                explanation: "Parent-child: main pipeline triggers child pipelines. Good for complex repos, monorepos. Children can have own .gitlab-ci.yml."
            },
            {
                q: "What's GitLab's Docker integration?",
                options: ["Only supports pushing to Docker Hub", "Desktop Docker application integration", "Docker containers are not supported", "Build and push images, use Docker executor"],
                correct: 3,
                explanation: "GitLab CI integrates Docker: build images in jobs, push to GitLab registry, use Docker executor for jobs. docker-in-docker or kaniko."
            },
            {
                q: "What are protected branches in CI/CD context?",
                options: ["Branches with special CI rules and permissions", "Automatic backup and branch protection", "Branches protected from all code changes", "Branches that cannot be merged at all"],
                correct: 0,
                explanation: "Protected branches: restricted who can push/merge. Protected CI variables only available on protected branches. Prevents secrets in feature branches."
            },
        ],
        5: [
            {
                q: "What's GitLab's Auto DevOps?",
                options: ["Automatic source code generation tool", "Auto-scaling of GitLab runner agents", "Automation tooling for DevOps teams", "Automatic CI/CD without configuration"],
                correct: 3,
                explanation: "Auto DevOps provides automatic CI/CD: detects language, builds, tests, deploys. Works out of box. Customizable. Good starting point."
            },
            {
                q: "How do you implement GitLab releases?",
                options: ["Release feature with artifacts and notes", "Requires external release tooling only", "Release management is not supported", "Git tags are the only release option"],
                correct: 0,
                explanation: "GitLab Releases: create from tags, attach artifacts, release notes. API for automation. Integrates with CI/CD for automatic releases."
            },
            {
                q: "What's GitLab's SAST/DAST?",
                options: ["Source and destination testing", "Secret management tools", "Security scanning in CI pipeline", "Static and dynamic typing"],
                correct: 2,
                explanation: "SAST (Static Application Security Testing) and DAST (Dynamic) scan for vulnerabilities. Integrated in CI pipeline. Results in merge request."
            },
            {
                q: "How do you scale GitLab CI/CD?",
                options: ["Multiple runners, autoscaling, caching", "Scaling not needed", "GitLab handles scaling automatically", "Only vertical scaling possible"],
                correct: 0,
                explanation: "Scale CI: multiple runners (different sizes), autoscaling runners on cloud, shared cache for dependencies, parallel jobs."
            },
            {
                q: "What's GitLab's component catalog?",
                options: ["Reusable CI/CD components across projects", "Third-party software component library", "Component usage documentation pages", "Catalog of all GitLab feature flags"],
                correct: 0,
                explanation: "CI/CD Catalog: share reusable pipeline components. Include templates, jobs. Publish to catalog for organization use. DRY principle for CI/CD."
            },
        ],
        6: [
            {
                q: "A push to a branch with an open MR runs two pipelines. What fixes it?",
                options: ["workflow:rules choosing branch or merge request pipelines", "Setting interruptible on every job in the pipeline", "Removing the merge request event from the triggers", "Increasing the concurrency limit for the project"],
                correct: 0,
                explanation: "Without a workflow rule, both a branch pipeline and a merge request pipeline are created for the same commit. The canonical rule keeps the MR pipeline and drops the duplicate branch one.",
                learnMore: { url: "https://docs.gitlab.com/ci/yaml/workflow/", text: "📚 workflow:rules" }
            },
            {
                q: "What does needs: let a job do that stages alone cannot?",
                options: ["Retry automatically when a dependency fails", "Consume artifacts from a different pipeline", "Start as soon as its own dependencies finish", "Run without any dependency on other jobs"],
                correct: 2,
                explanation: "Stages are barriers: everything waits for the slowest job. needs builds a DAG so a fast path proceeds while an unrelated slow job is still running."
            },
            {
                q: "What does trigger:strategy:depend change for a child pipeline?",
                options: ["The parent waits and adopts the child's status", "The child inherits the parent's variables", "The child runs on the parent's runner", "The parent cancels the child on failure"],
                correct: 0,
                explanation: "By default the trigger job succeeds as soon as the child starts. With strategy: depend the parent blocks on the child's result, which is what makes a fan-out test stage meaningful."
            },
            {
                q: "What is resource_group used for?",
                options: ["Sharing a cache between related jobs", "Serialising jobs that must not run concurrently", "Grouping jobs for display in the pipeline graph", "Assigning jobs to a specific set of runners"],
                correct: 1,
                explanation: "Two deploy jobs racing to the same environment produce an unpredictable end state. A resource group makes them queue instead — the CI equivalent of a mutex."
            },
            {
                q: "How does one job pass a computed value to a later job?",
                options: ["Writing it into the job log for parsing", "A cache entry keyed by the job name", "Committing it back to the repository", "A dotenv report artifact exposing variables"],
                correct: 3,
                explanation: "artifacts:reports:dotenv turns a file of key=value pairs into environment variables for downstream jobs — the supported channel for a version string or an image digest."
            },
            {
                q: "What does rules:changes evaluate against?",
                options: ["The files changed since the last successful run", "The files modified in the pipeline's commit range", "The files present in the repository overall", "The files listed in the job's artifacts"],
                correct: 1,
                explanation: "It compares the changed paths for the current pipeline, which is why the ref matters: on a branch pipeline the comparison base differs from a merge request pipeline, and rules can behave differently between them."
            },
        ],
        7: [
            {
                q: "What does declaring an environment in a job enable?",
                options: ["A separate runner pool for deployment jobs", "Rollback of the application on job failure", "Deployment tracking, plus scoped variables and approvals", "Automatic provisioning of the target infrastructure"],
                correct: 2,
                explanation: "The environment records what is deployed where, and it is the object protection attaches to — restricting who may deploy and which variables the job can read."
            },
            {
                q: "What is a review app?",
                options: ["A per-branch deployment, removed on close", "A static preview of the documentation site", "A reviewer's local copy of the merge request", "A tool commenting on the diff automatically"],
                correct: 0,
                explanation: "A dynamic environment deployed per merge request lets reviewers exercise the change rather than read it, with an on_stop job removing it when the branch merges or closes."
            },
            {
                q: "Why mark most jobs interruptible?",
                options: ["Failing jobs stop the rest of the stage immediately", "Runners can preempt jobs when capacity is short", "A superseded pipeline is cancelled when a new push lands", "Jobs can be paused and resumed by an operator"],
                correct: 2,
                explanation: "Without it, pipelines for outdated commits keep consuming runners. Deployment jobs are the exception — cancelling one mid-flight can leave a half-applied change."
            },
            {
                q: "What does artifacts:reports:junit add to a merge request?",
                options: ["A downloadable archive of the test logs", "A coverage percentage shown on the badge", "A retry button for individual failed tests", "Failed tests summarised directly in the MR widget"],
                correct: 3,
                explanation: "Parsing the report surfaces which tests failed and which are newly failing in the MR itself, so reviewers do not have to open a job log to find out what broke."
            },
            {
                q: "How do runner tags affect where a job executes?",
                options: ["Tags determine the job's timeout value", "A job only runs on a runner carrying all its tags", "Tags order the queue of pending jobs", "Tags select which container image is used"],
                correct: 1,
                explanation: "Tags match jobs to capable runners — a specific architecture, a privileged executor, a network location. A typo means the job waits forever with no runner claiming it."
            },
            {
                q: "Why pin a version when including a CI/CD component?",
                options: ["Pinning is required before a component can be included", "Unpinned components are downloaded on every job", "Pinned versions run on dedicated shared runners", "An unpinned reference changes the pipeline unannounced"],
                correct: 3,
                explanation: "Including a component by a moving ref means someone else's release changes your pipeline behaviour without a commit on your side. A version reference makes the upgrade an explicit, reviewable change."
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
                options: ["Single Page Application", "Static Page Assembly", "Synchronized Page Access", "Server Page Architecture"],
                correct: 0,
                explanation: "SPA (Single Page Application) loads once and dynamically updates content without full page reloads, providing a smoother user experience."
            },
            {
                q: "What is an API in web development?",
                options: ["A database system for storing user sessions", "A contract defining how components communicate", "A framework for automated browser testing", "A protocol for encrypting web traffic data"],
                correct: 1,
                explanation: "An API defines how software components communicate. Web APIs typically use HTTP to exchange data between frontend and backend."
            },
            {
                q: "Which browser feature helps developers debug JavaScript code?",
                options: ["Browser extension marketplace", "Developer Tools with Console panel", "Password manager settings", "Reading mode for articles"],
                correct: 1,
                explanation: "Browser Developer Tools (F12) include a Console for JavaScript debugging, Network tab for requests, and Elements for DOM inspection."
            },
        ],
        2: [
            {
                q: "What does JSON stand for?",
                options: ["Java Standard Output Notation", "Java Serialized Object Network", "JavaScript Oriented Name-value", "JavaScript Object Notation"],
                correct: 3,
                explanation: "JSON is a lightweight data format that's easy for humans to read and machines to parse. It's the standard for web API data exchange."
            },
            {
                q: "Where does the data in a POST request travel?",
                options: ["In the request body, rather than the URL", "In the query string appended to the URL", "In a cookie set before the request is sent", "In the response headers that come back"],
                correct: 0,
                explanation: "A POST carries its payload in the body, so it is not bounded by URL length and does not end up in browser history or server access logs the way query parameters do."
            },
            {
                q: "What information does the Network tab in DevTools display?",
                options: ["HTML element hierarchy and attributes", "HTTP requests, responses, and timing data", "JavaScript syntax errors and warnings", "Applied CSS styles and computed values"],
                correct: 1,
                explanation: "The Network tab shows all HTTP requests, their timing, headers, payloads, and responses - essential for debugging API calls."
            },
        ],
        3: [
            {
                q: "What is CORS in web development?",
                options: ["A caching system for static site resources", "A policy controlling cross-origin requests", "A protocol used for real-time communication", "A standard for compressing web page assets"],
                correct: 1,
                explanation: "CORS is a security mechanism that controls which domains can access resources from another domain, preventing unauthorized cross-site requests."
            },
            {
                q: "What's the difference between localStorage and sessionStorage?",
                options: ["localStorage is synchronous, sessionStorage is asynchronous", "localStorage is domain-specific, sessionStorage is global", "localStorage has 5MB limit, sessionStorage has unlimited storage", "localStorage persists until cleared, sessionStorage clears on tab close"],
                correct: 3,
                explanation: "localStorage persists until explicitly cleared. sessionStorage is cleared when the browser tab closes. Both store key-value pairs."
            },
            {
                q: "What is the DOM in web browsers?",
                options: ["A memory allocation system for browser tabs", "A database for storing offline application data", "A tree of the page that JavaScript can modify", "A protocol used to download web page resources"],
                correct: 2,
                explanation: "The DOM is a tree representation of HTML that JavaScript can manipulate to dynamically change page content and structure."
            },
            {
                q: "What does a 404 HTTP status code indicate?",
                options: ["The request was successful and complete", "The server encountered an internal error", "The requested resource was not found on server", "The request requires user authentication"],
                correct: 2,
                explanation: "404 means the requested resource doesn't exist. 200 is success, 401/403 are auth errors, 500 is server error."
            },
        ],
        4: [
            {
                q: "Why does the browser send an OPTIONS request before a POST?",
                options: ["It is a CORS preflight asking what is allowed", "To fetch the API schema before posting data", "To check whether the user is still logged in", "To warm up the connection to the server"],
                correct: 0,
                explanation: "For cross-origin requests that are not simple, the browser preflights with OPTIONS. The server answers with Access-Control-Allow-* headers, and only then is the real request sent."
            },
            {
                q: "Why mark a session cookie HttpOnly?",
                options: ["It is hidden from the browser's developer tools", "It is sent only to the origin that first set it", "JavaScript on the page cannot read its value", "It expires as soon as the browser tab closes"],
                correct: 2,
                explanation: "HttpOnly keeps the cookie out of document.cookie, so an injected script cannot exfiltrate the session. Secure restricts it to HTTPS and SameSite limits when it is sent cross-site — three separate flags, three separate protections."
            },
            {
                q: "A page feels slow. What does the Network waterfall tell you?",
                options: ["How much memory each JavaScript object holds", "Which CSS rules were applied to which element", "How many times each function has been called", "Which requests block, and how long each one waits"],
                correct: 3,
                explanation: "The waterfall shows queueing, connection, waiting for the first byte and download time per request — enough to tell a slow server apart from a request that started too late."
            },
            {
                q: "What does a request with status 0 and no response usually mean?",
                options: ["The server returned an empty response body", "The request was blocked, aborted or failed CORS", "The endpoint responded faster than the timer", "The browser served the response from its cache"],
                correct: 1,
                explanation: "Status 0 is the browser's way of saying the response never became readable: a CORS rejection, a blocked mixed-content request, a network failure or a cancelled fetch."
            },
        ],
        5: [
            {
                q: "What does an ETag header let a client do?",
                options: ["Revalidate a cached copy without downloading it", "Encrypt the response body before transmission", "Tag a request so the server can group its logs", "Declare which content types the client accepts"],
                correct: 0,
                explanation: "The client sends the stored ETag back in If-None-Match. If the resource is unchanged the server answers 304 Not Modified with no body, so the cached copy is reused."
            },
            {
                q: "How does the same-origin policy relate to CORS?",
                options: ["They are unrelated: one is for cookies only", "CORS applies to servers, same-origin to browsers", "CORS replaced the same-origin policy entirely", "CORS is the way a server relaxes that default"],
                correct: 3,
                explanation: "Same-origin is the browser's default: scripts cannot read responses from another origin. CORS is the opt-in by which a server declares which origins may read its responses."
            },
            {
                q: "When is a WebSocket a better fit than repeated polling?",
                options: ["When updates are frequent and must arrive promptly", "When the payloads are large but change rarely", "When the client is behind a restrictive proxy", "When the server has no persistent state at all"],
                correct: 0,
                explanation: "Polling costs a round trip per check and adds latency up to the interval. A persistent connection pays the handshake once and pushes updates as they happen — which is why Waldur streams events over STOMP on a WebSocket."
            },
            {
                q: "What does a Content-Security-Policy header do?",
                options: ["Signs the response so the client can verify it", "Lists the cookies the page is allowed to write", "Restricts where scripts and other assets may load from", "Encrypts the page's contents while in transit"],
                correct: 2,
                explanation: "CSP declares allowed sources for scripts, styles, images and connections, so an injected inline script has no permitted origin to run from. It limits the blast radius of an XSS bug rather than preventing the injection."
            },
            {
                q: "Production code is minified. How do you debug it?",
                options: ["Load the source maps the build emitted", "Read the minified bundle line by line", "Rebuild locally and hope it reproduces", "Add alert calls until the flow is clear"],
                correct: 0,
                explanation: "Source maps let DevTools display the original source and set breakpoints in it while the minified bundle actually runs. Without them, stack traces point at meaningless one-letter names."
            },
        ]
    },

    'l-iac-concepts': {
        1: [
            {
                q: "What does IaC stand for?",
                options: ["Integrated Application Control - app management", "Internal Access Configuration - security settings", "Internet and Computing - network protocols", "Infrastructure as Code - managing infra via code files"],
                correct: 3,
                explanation: "Infrastructure as Code manages infrastructure through code files rather than manual processes, enabling version control and automation."
            },
            {
                q: "What is Ansible primarily used for?",
                options: ["Building container images from scratch", "Storing application data in databases", "Automating server configuration and deployment", "Monitoring application performance metrics"],
                correct: 2,
                explanation: "Ansible automates software provisioning, configuration management, and deployment using simple YAML playbooks."
            },
            {
                q: "What is Terraform primarily used for?",
                options: ["Orchestrating container deployments", "Running continuous integration pipelines", "Provisioning cloud infrastructure resources", "Monitoring server health and metrics"],
                correct: 2,
                explanation: "Terraform provisions and manages infrastructure across multiple cloud providers using declarative configuration files."
            },
        ],
        2: [
            {
                q: "What is declarative configuration?",
                options: ["Configuring systems manually via UI", "Describing desired end state, tool determines steps", "Generating configs at application runtime", "Writing step-by-step procedural instructions"],
                correct: 1,
                explanation: "Declarative: you describe WHAT you want (desired state). The tool figures out HOW to achieve it. Imperative: you describe exact steps."
            },
            {
                q: "What does idempotency mean in IaC?",
                options: ["Changes are automatically rolled back", "Running config repeatedly produces same result", "Each run produces different outcomes", "Configuration can only be applied once"],
                correct: 1,
                explanation: "Idempotent operations can run repeatedly without changing the result beyond the initial run. Essential for reliable automation."
            },
            {
                q: "What is a playbook in Ansible?",
                options: ["YAML file defining automation tasks to execute", "Log file recording execution history", "Python script for data processing", "Database storing server configurations"],
                correct: 0,
                explanation: "Playbooks are Ansible's configuration files written in YAML, defining tasks to execute on managed hosts."
            },
        ],
        3: [
            {
                q: "What is Terraform state used for?",
                options: ["Recording network traffic between services", "Storing application debug logs", "Tracking which real resources match your config", "Monitoring current CPU and memory usage"],
                correct: 2,
                explanation: "Terraform state tracks which real resources correspond to your configuration, enabling updates and deletions."
            },
            {
                q: "What is the main difference between Ansible and Terraform?",
                options: ["Ansible configures servers, Terraform provisions infra", "Ansible only integrates with major cloud providers", "Terraform only functions on Linux-based systems", "They are fully interchangeable tools for same tasks"],
                correct: 0,
                explanation: "Terraform excels at provisioning infrastructure (VMs, networks). Ansible excels at configuring software on existing servers. Often used together."
            },
            {
                q: "Why store IaC files in version control?",
                options: ["IaC tools technically require a repository", "Configurations apply faster from a repository", "Change history, review, audit and rollback", "Files stored in git are compressed smaller"],
                correct: 2,
                explanation: "Version control provides change history, enables code review, supports rollback, and documents infrastructure evolution."
            },
            {
                q: "What is configuration drift?",
                options: ["Manual changes causing systems to differ from code", "Network latency between data centers", "Memory leaks in running applications", "Scheduled automatic updates to infrastructure"],
                correct: 0,
                explanation: "Drift occurs when manual changes cause actual infrastructure to differ from IaC definitions. IaC tools can detect and correct drift."
            },
        ],
        4: [
            {
                q: "What does terraform plan give you that apply does not?",
                options: ["A faster path that skips provider downloads", "A backup copy of the current state file", "A validation of syntax without reading state", "A preview of the changes before they happen"],
                correct: 3,
                explanation: "plan compares configuration against state and shows what would be created, changed or destroyed. Reading a plan before applying is how you catch a rename that would actually delete and recreate a resource."
            },
            {
                q: "Where do secrets belong in an IaC repository?",
                options: ["Outside it: a vault or injected at run time", "In a file that is committed but base64 encoded", "In the state file, which tools keep encrypted", "In the playbook, since the repo is private"],
                correct: 0,
                explanation: "Committed secrets live forever in history and travel with every clone. Reference them instead — Ansible Vault, a secret manager, or CI variables injected at run time."
            },
            {
                q: "What is an Ansible inventory?",
                options: ["The list of hosts and groups to act upon", "A record of every task that has been run", "The set of modules available to a playbook", "A cache of facts gathered from managed hosts"],
                correct: 0,
                explanation: "The inventory defines managed hosts and groups them, so a play can target webservers or a single host. It can be a static file or generated dynamically from a cloud API."
            },
            {
                q: "Why factor automation into roles or modules?",
                options: ["To make each run measurably faster to execute", "Because variables cannot be shared without them", "To reuse and test a unit instead of copying it", "Because the tools refuse files above a size limit"],
                correct: 2,
                explanation: "A role or module packages tasks, variables and defaults behind an interface. The same unit is reused across environments, and a change is made once rather than in every copy."
            },
        ],
        5: [
            {
                q: "Why does Terraform state need locking?",
                options: ["To keep the file from growing without bound", "To prevent reads while a plan is running", "To encrypt credentials that end up inside it", "To stop two applies corrupting it at once"],
                correct: 3,
                explanation: "State is the source of truth for what exists. A remote backend with locking stops two people applying simultaneously and interleaving their writes into an inconsistent picture."
            },
            {
                q: "What does Ansible's check mode do?",
                options: ["Compares two playbooks for conflicting tasks", "Reports what would change without changing it", "Verifies playbook syntax without touching hosts", "Checks that every host is reachable over SSH"],
                correct: 1,
                explanation: "Check mode is Ansible's dry run: modules report whether they would change something. It relies on modules implementing it properly, so a shell command that ignores check mode is a common blind spot."
            },
            {
                q: "How does immutable infrastructure differ from config management?",
                options: ["Servers are configured once and never audited", "Configuration lives in the image, not in the repo", "Only containers can be treated as immutable", "Servers are replaced rather than modified in place"],
                correct: 3,
                explanation: "Immutable means building a new image or instance and swapping it in, so drift cannot accumulate. Config management converges an existing machine toward a desired state instead."
            },
            {
                q: "You find drift on a production host. What is the safe response?",
                options: ["Update the code to match, or re-apply deliberately", "Immediately re-apply and move on without review", "Delete the host so it is recreated from scratch", "Disable drift detection until the release ships"],
                correct: 0,
                explanation: "Drift is information: either the manual change was needed — so it belongs in code — or it was not, and re-applying is correct. Blindly re-applying can undo an emergency fix nobody wrote down."
            },
            {
                q: "In what sense is a Helm chart infrastructure as code?",
                options: ["It only packages container images for distribution", "It replaces the need for a Kubernetes API server", "It declares desired Kubernetes state in version control", "It imperatively runs kubectl commands in sequence"],
                correct: 2,
                explanation: "A chart is a versioned, parameterised declaration of the desired cluster state. Waldur ships one, which is why upgrading a deployment is a values change and a release rather than a sequence of manual edits."
            },
        ]
    },

    'l-waldur-local': {
        1: [
            {
                q: "What tool is used to run Waldur locally for development?",
                options: ["docker compose for orchestrating multiple services", "npm start for the JavaScript frontend only", "kubectl apply for Kubernetes deployment", "python manage.py runserver for Django"],
                correct: 0,
                explanation: "Waldur uses Docker Compose to orchestrate its services (API, UI, database, etc.) for local development."
            },
            {
                q: "What is Docker Compose used for?",
                options: ["Defining and running multi-container applications", "Running a single container in isolation", "Building container images from Dockerfiles", "Monitoring container network traffic"],
                correct: 0,
                explanation: "Docker Compose uses compose.yaml files to define and run multi-container applications, managing their lifecycle together."
            },
            {
                q: "Which file defines Waldur's local development setup?",
                options: ["compose.yaml defines all services", "settings.py configures Django application", "package.json lists JavaScript dependencies", "Dockerfile builds a single container"],
                correct: 0,
                explanation: "compose.yaml defines services, networks, and volumes. Waldur's compose file sets up all required components."
            },
        ],
        2: [
            {
                q: "What command starts all Waldur services locally?",
                options: ["waldur run is not a valid command", "npm start only runs the frontend", "docker compose up starts all defined services", "docker start waldur starts one container"],
                correct: 2,
                explanation: "'docker compose up' starts all services. Add '-d' for detached mode, '--build' to rebuild images."
            },
            {
                q: "How do you view logs from the Waldur API container?",
                options: ["kubectl logs api requires Kubernetes", "docker compose logs api shows service output", "cat /var/log/api reads host file system", "waldur logs is not a valid command"],
                correct: 1,
                explanation: "'docker compose logs <service>' shows logs. Add '-f' to follow in real-time. Service names are defined in compose file."
            },
            {
                q: "What database system does Waldur use for data storage?",
                options: ["SQLite embedded database", "MongoDB document database", "MySQL relational database", "PostgreSQL relational database"],
                correct: 3,
                explanation: "Waldur uses PostgreSQL for data persistence. The compose setup includes a postgres service container."
            },
        ],
        3: [
            {
                q: "How do you rebuild Waldur containers after code changes?",
                options: ["docker compose up --build rebuilds images", "docker restart only restarts existing", "docker refresh is not a valid command", "docker compose reload is not supported"],
                correct: 0,
                explanation: "'--build' forces image rebuild before starting. Essential when Dockerfile or dependencies change."
            },
            {
                q: "What is the default URL for Waldur API locally?",
                options: ["http://admin.waldur/ is not configured", "http://waldur.local/ requires DNS setup", "http://localhost/api/ with standard port", "http://0.0.0.0:8000/ is Django default"],
                correct: 2,
                explanation: "Waldur API is typically available at localhost with /api/ prefix. Check compose file for exact port mappings."
            },
            {
                q: "How do you access the Waldur PostgreSQL database directly?",
                options: ["mysql -u root is for MySQL databases", "docker compose exec db psql for Postgres shell", "sqlite3 waldur.db is for SQLite only", "docker compose logs db shows logs not shell"],
                correct: 1,
                explanation: "'docker compose exec db psql' opens PostgreSQL shell. Use -U flag for username, database name as argument."
            },
            {
                q: "What does 'docker compose down' do?",
                options: ["Shows current container status and health", "Restarts all containers with new config", "Pauses containers but keeps them running", "Stops and removes containers and networks"],
                correct: 3,
                explanation: "'down' stops containers and removes them plus networks. Add '-v' to also remove volumes (warning: deletes data)."
            },
        ],
        4: [
            {
                q: "Besides the API, what else runs in the Waldur stack?",
                options: ["Nothing — the API container is self-contained", "Only a database; everything else is in the API", "A worker, a beat scheduler, a queue and a router", "A second API replica for load balancing only"],
                correct: 2,
                explanation: "The compose stack runs the Mastermind API, a Celery worker, the beat scheduler, PostgreSQL, RabbitMQ, Homeport and a Caddy router in front — plus optional add-ons such as Keycloak and the Matrix chat services."
            },
            {
                q: "You changed a Django model. What must happen before the API works?",
                options: ["The database volume is deleted and recreated", "Nothing: Django alters tables at request time", "Migrations are generated and applied to the database", "The container is rebuilt, which syncs the schema"],
                correct: 2,
                explanation: "Django never changes the schema implicitly. Generate the migration, then apply it — the compose stack has a dedicated migration step for exactly this."
            },
            {
                q: "How do you override configuration for a local stack?",
                options: ["Environment variables and mounted config files", "Change the values in the running container", "Configuration cannot be changed after startup", "Edit the image and rebuild it every time"],
                correct: 0,
                explanation: "Compose passes environment variables and mounts configuration into the containers, so local overrides never require touching the published image."
            },
            {
                q: "'docker compose up' fails with a port already allocated.",
                options: ["The image was built for the wrong architecture", "The database volume is corrupted and must be reset", "Docker ran out of disk space for new layers", "Another process holds that port on the host"],
                correct: 3,
                explanation: "A published port is exclusive on the host. Either stop whatever holds it, or shift the mapping — which is exactly why parallel workspaces offset every port instead of sharing one set."
            },
        ],
        5: [
            {
                q: "What is the waldur-docker-compose repository actually for?",
                options: ["Local development, demos and single-server deployments", "Building the container images published to the registry", "Running the production Kubernetes deployment", "Generating the documentation site from source"],
                correct: 0,
                explanation: "It packages the whole platform as a Compose stack: fast to start for development and demos, and viable for a single-VM deployment. Kubernetes deployments use the Helm chart instead."
            },
            {
                q: "What does the Celery beat container do that the worker does not?",
                options: ["Serves the API when the main process is busy", "Stores task results for later inspection", "Schedules periodic tasks onto the queue", "Executes the long-running tasks the worker rejects"],
                correct: 2,
                explanation: "Beat is the scheduler: it enqueues periodic jobs at their due time. Workers execute whatever is on the queue. Running two beats duplicates every scheduled task."
            },
            {
                q: "You want a genuinely clean database. What do you run?",
                options: ["docker compose down -v, removing the volumes", "docker compose restart, recreating containers", "docker compose down, which clears the data", "docker compose up --build, rebuilding images"],
                correct: 0,
                explanation: "Data lives in named volumes that survive down and up. Only -v removes them — which is also why it is the one flag to think twice about."
            },
            {
                q: "An API request 500s. Where do you look first?",
                options: ["The router logs, which record every route", "The API container logs, for the traceback", "The browser console, for a JavaScript error", "The database logs, since data is involved"],
                correct: 1,
                explanation: "A 500 means the traceback was raised server side and logged by the API container. If the work happened in a background task, the worker's logs hold it instead."
            },
            {
                q: "Why point a local stack at emulators rather than real backends?",
                options: ["Emulators are the only backends Waldur supports locally", "Emulated backends validate business logic more strictly", "Real backends cannot be reached from a container", "Real credentials and quota are not needed to develop"],
                correct: 3,
                explanation: "The OpenStack and SLURM emulators answer the same APIs without a cloud or a cluster, so provisioning flows can be exercised locally and in CI — the same emulators the E2E suite uses."
            },
        ]
    },

    'l-workflow': {
        1: [
            {
                q: "What is a feature branch in Git?",
                options: ["A tag that marks a particular released version", "A separate branch used for one piece of work", "A branch that has already been deleted upstream", "The main production branch of the repository"],
                correct: 1,
                explanation: "Feature branches isolate development work, allowing parallel development without affecting main code until ready."
            },
            {
                q: "What is a Pull Request (PR)?",
                options: ["A request for new feature from customer", "Request to merge your changes into another branch", "A formal bug report filed in the tracker", "Request to download code from remote repo"],
                correct: 1,
                explanation: "PRs propose changes for review before merging. They enable code review, discussion, and CI checks."
            },
            {
                q: "What is Jira commonly used for in development teams?",
                options: ["Hosting git repositories and their history", "Running the automated CI and CD pipelines", "Tracking issues, tasks and project progress", "Managing the deployment of containers"],
                correct: 2,
                explanation: "Jira tracks issues, tasks, and project progress. Teams use it to manage work items and sprints."
            },
        ],
        2: [
            {
                q: "What should you do before starting work on a new feature?",
                options: ["Create a new branch from latest main branch", "Commit your changes directly to main branch", "Merge all open PRs before starting", "Delete all your old feature branches first"],
                correct: 0,
                explanation: "Start from updated main to avoid conflicts. Create a descriptive branch name like 'feature/add-login'."
            },
            {
                q: "What is code review in software development?",
                options: ["Automated testing of code functionality", "Team members examining changes before merge", "Monitoring application performance metrics", "Writing technical documentation for code"],
                correct: 1,
                explanation: "Code review catches bugs, shares knowledge, ensures standards, and improves code quality through peer feedback."
            },
            {
                q: "Why should commits reference Jira ticket numbers?",
                options: ["Commits become significantly faster to build", "Git requires a ticket number in the message", "Traceability between code and requirements", "The commit history takes up much less space"],
                correct: 2,
                explanation: "Linking provides traceability, helps track what changes address which requirements, and aids debugging."
            },
        ],
        3: [
            {
                q: "What makes a good Pull Request description?",
                options: ["Left empty since code speaks for itself", "Explains what changed, why, and how to test", "Copy of all the changed code inline", "Contains only the Jira ticket number"],
                correct: 1,
                explanation: "Good descriptions help reviewers understand context, changes made, and how to verify correctness."
            },
            {
                q: "When should you update your feature branch from main?",
                options: ["Never - keep your branch completely isolated", "Only when Git reports merge conflicts", "Only once at the very beginning", "Regularly throughout development and before merge"],
                correct: 3,
                explanation: "Regular updates reduce merge conflicts and catch integration issues early. Rebase or merge from main frequently."
            },
            {
                q: "What does CI mean in development workflow?",
                options: ["Container Image - Docker artifacts", "Code Inspection - manual review process", "Continuous Integration - automated build and test", "Customer Interface - user-facing features"],
                correct: 2,
                explanation: "CI automatically builds and tests code on every commit, catching issues early and ensuring code quality."
            },
            {
                q: "What should you do after your PR is approved?",
                options: ["Merge to main and delete the feature branch", "Keep the branch for future reference", "Create another PR with more changes", "Revert all the changes you made"],
                correct: 0,
                explanation: "After approval and CI passing, merge to main and delete the feature branch to keep the repository clean."
            },
        ],
        4: [
            {
                q: "What does a branch named fix/WAL-1234-quota-validation tell a reviewer?",
                options: ["A personal branch that will not be merged", "A bug fix, tracked by that Jira ticket", "A feature branch owned by user WAL", "A release branch cut for version 1234"],
                correct: 1,
                explanation: "The convention is fix/ or feature/ plus the ticket ID and a short description. The prefix says what kind of change it is and the ID links it back to the tracker."
            },
            {
                q: "Why open a merge request as a draft?",
                options: ["Because drafts skip the review requirement", "To stop the pipeline from running at all", "Because non-draft MRs cannot be updated", "To signal work in progress while CI already runs"],
                correct: 3,
                explanation: "A draft gets early feedback and pipeline results without inviting a final review or an accidental merge. Marking it ready is the explicit signal that it should be reviewed."
            },
            {
                q: "What belongs in a commit message beyond the description?",
                options: ["The line count added and removed in total", "The task ID, so the change traces to its ticket", "The name of every file the commit touches", "The reviewer's name and approval timestamp"],
                correct: 1,
                explanation: "The format is `Description [TASK-ID]`. The diff already lists the files; the ticket reference is the piece git cannot reconstruct on its own."
            },
            {
                q: "What must pass before pushing backend changes?",
                options: ["A manual review by two other developers", "Nothing — CI exists to catch problems later", "Linting, the relevant tests, and schema validation", "A successful production deployment to staging"],
                correct: 2,
                explanation: "Pre-push means pre-commit lint, the relevant tests, and `spectacular --validate` for the API schema — the frontend equivalent being lint plus tsc --noEmit. Pushing code that does not compile burns everyone's CI time."
            },
        ],
        5: [
            {
                q: "Rebasing versus merging main into your branch — what's the trade-off?",
                options: ["Rebase keeps history linear but rewrites commits", "Merge rewrites history while rebase preserves it", "They produce identical history in every case", "Rebase is always safe on a shared branch"],
                correct: 0,
                explanation: "Rebase replays your commits on top of main for a linear history, but changes their hashes — awkward once others have pulled the branch. A merge commit preserves what actually happened."
            },
            {
                q: "A merged change broke the default branch. What is the first move?",
                options: ["Leave it and fix it in the next sprint", "Delete the branch so it cannot be merged again", "Revert the merge, then fix forward calmly", "Force-push the branch back to its old state"],
                correct: 2,
                explanation: "Reverting restores a working default branch for everyone else without discarding history, and it leaves the original commits available to fix and re-submit properly."
            },
            {
                q: "A backend change alters the API contract. What else is in scope?",
                options: ["Only the backend, since clients adapt themselves", "Only the documentation, which describes the API", "Nothing else until a client reports a failure", "Regenerating the SDK and updating the frontend"],
                correct: 3,
                explanation: "Full-stack delivery follows the chain: backend, SDK regeneration, frontend, docs, E2E tests, and packaging when a new mandatory setting is introduced."
            },
            {
                q: "Why do some repositories trigger pipelines in other repositories?",
                options: ["Because triggered runs skip the slower test stages", "Because a change here can break a consumer there", "Because CI minutes are pooled across the group", "Because every repo shares one pipeline definition"],
                correct: 1,
                explanation: "Frontend changes trigger the integration-testing suite, and backend or frontend changes trigger the packaging stack. Breakage surfaces against the change that caused it rather than days later."
            },
            {
                q: "How should you respond to review comments you disagree with?",
                options: ["Resolve the thread silently and merge anyway", "Apply the change even when it is wrong", "Wait for the reviewer to approve regardless", "Reply with the reasoning and resolve it together"],
                correct: 3,
                explanation: "Review is a conversation. Stating the reasoning either convinces the reviewer or surfaces the context you were missing — both better outcomes than a silently resolved thread."
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
                options: ["Research institutions and government agencies", "Financial and banking industry institutions", "Early-stage startup companies and ventures", "Primarily retail and e-commerce businesses"],
                correct: 0,
                explanation: "Waldur serves research institutions, universities, government agencies, and organizations managing shared computing resources."
            },
            {
                q: "What is a common use case for Waldur?",
                options: ["Hosting email servers and mailboxes", "Scheduling social media posts and campaigns", "Streaming video content to end users", "Managing cloud resource allocation for researchers"],
                correct: 3,
                explanation: "Waldur helps organizations manage and allocate computing resources (VMs, HPC, storage) to users and projects."
            },
            {
                q: "Why do customers choose Waldur over alternatives?",
                options: ["Self-service ordering with retained admin control", "Photo and video editing built into the portal", "Gaming and entertainment features for staff", "Social networking between the platform's users"],
                correct: 0,
                explanation: "Waldur provides self-service portals where users request resources, while admins maintain control and visibility."
            },
        ],
        2: [
            {
                q: "How does Waldur help with resource allocation?",
                options: ["No automation provided for provisioning tasks", "Automated provisioning with approval workflows", "Phone-based support for all resource requests", "Manual processing through email requests only"],
                correct: 1,
                explanation: "Waldur automates resource provisioning with configurable approval workflows, quotas, and billing integration."
            },
            {
                q: "What does one portal across several providers save a customer?",
                options: ["A separate request process for each provider", "The cost of the resources they consume", "The need to write any application code", "The need for user accounts on the portal"],
                correct: 0,
                explanation: "Without a broker, every provider brings its own request path, quota model and reporting. One portal gives users a single way to ask and administrators a single place to see what was granted."
            },
            {
                q: "How does Waldur support multi-tenancy?",
                options: ["Multi-tenancy support is not available", "Isolated orgs with own users and resources", "Single shared workspace for all user accounts", "Maximum of two tenants allowed per instance"],
                correct: 1,
                explanation: "Waldur supports multiple organizations, each with isolated users, projects, and resources on shared infrastructure."
            },
        ],
        3: [
            {
                q: "What is a typical deployment scenario for research institutions?",
                options: ["Manual tracking of allocations in spreadsheets", "Federated access to HPC clusters and clouds", "A desktop application installed per researcher", "An offline system with no network access at all"],
                correct: 1,
                explanation: "Research institutions federate access across HPC clusters, OpenStack clouds, and commercial clouds through Waldur."
            },
            {
                q: "How does Waldur integrate with existing infrastructure?",
                options: ["Only as complete infrastructure replacement", "Through plugins connecting to various backends", "Integration with existing systems not possible", "Through manual data entry and sync"],
                correct: 1,
                explanation: "Waldur's plugin architecture connects to OpenStack, Kubernetes, SLURM, Azure, and other backends."
            },
            {
                q: "What compliance features does Waldur provide?",
                options: ["Third-party compliance tooling is required", "Basic activity logging and nothing beyond it", "Audit trails, approvals and access controls", "No compliance-related features are included"],
                correct: 2,
                explanation: "Waldur provides audit trails, configurable approval workflows, and fine-grained access controls for compliance."
            },
            {
                q: "How do customers typically measure Waldur ROI?",
                options: ["By counting the servers under management", "By measuring the lines of code written", "By time saved and administrative overhead cut", "By counting the total number of user accounts"],
                correct: 2,
                explanation: "ROI comes from reduced manual work, better resource utilization, faster provisioning, and improved visibility."
            },
        ],
        4: [
            {
                q: "A provider wants to offer resources through Waldur. What comes first?",
                options: ["A service provider organization, then an offering", "A project inside the customer's own organization", "A support ticket asking staff to create it", "A remote Waldur instance to import from"],
                correct: 0,
                explanation: "The organization is registered as a service provider, then publishes offerings with plans and components. Users order against those offerings, which is what makes provisioning and billing traceable."
            },
            {
                q: "A university wants per-department cost reporting. What supports that?",
                options: ["Manual reconciliation against cloud invoices", "Project-scoped usage and cost allocation reports", "A monthly export of raw provisioning logs", "Separate Waldur deployments per department"],
                correct: 1,
                explanation: "Resources belong to projects inside an organization, so usage and cost roll up per project and per organization. That is the basis for internal chargeback without splitting the deployment."
            },
            {
                q: "Resources should not be provisioned until someone signs off.",
                options: ["A read-only portal with provisioning done by hand", "Emailing the provider and waiting for a reply", "Quotas set to zero until an admin raises them", "Order approval workflows before provisioning starts"],
                correct: 3,
                explanation: "Orders can require approval from the consumer or the provider side before they execute, with auto-approval configurable per role — so self-service and oversight coexist."
            },
            {
                q: "Resources are allocated through a competitive funding process.",
                options: ["The marketplace cannot express competitive rounds", "The calls and proposals module handles that end to end", "Each award is entered manually as an order", "Allocations are tracked outside Waldur in a sheet"],
                correct: 1,
                explanation: "A call defines requested offerings, rounds set the submission window, proposals are reviewed, and an allocation decision turns an accepted proposal into a project with provisioned resources."
            },
        ],
        5: [
            {
                q: "Several centres want to share resources under one portal.",
                options: ["One deployment per centre with no connection", "Manual duplication of every offering by hand", "Remote offerings, so one Waldur imports another's", "A single database shared between all centres"],
                correct: 2,
                explanation: "A local Waldur can import an offering from a remote Waldur over its API, so users order in one place while the resource is delivered and managed by the remote deployment."
            },
            {
                q: "A funder pays up front and users draw down the balance.",
                options: ["Credits, with prepaid billing against the balance", "Monthly invoices issued after consumption", "A flat annual fee unrelated to consumption", "Billing disabled, with usage tracked separately"],
                correct: 0,
                explanation: "Credits model a prepaid balance that consumption draws down, alongside purchase orders and renewals — which is how publicly funded allocations are usually administered."
            },
            {
                q: "A centre wants to offer LLM inference to its users.",
                options: ["Manual account creation on the inference host", "It cannot be modelled in the marketplace at all", "An inference offering, provisioned like any other", "A separate product outside the Waldur platform"],
                correct: 2,
                explanation: "Inference services are marketplace offerings too — the site agent has plugins for vLLM-backed OpenNebula deployments and an Envoy AI Gateway, so access and usage are handled like any other resource."
            },
            {
                q: "Which situation is the weakest fit for Waldur?",
                options: ["A university sharing HPC across many departments", "A provider selling capacity to external customers", "A consortium allocating resources across institutions", "One team, one cloud account, no approvals or chargeback"],
                correct: 3,
                explanation: "Waldur's value is in mediating between many consumers and many providers: approvals, quotas, chargeback and audit. A single team on a single account has little of that mediation to do."
            },
            {
                q: "How is the value of a Waldur deployment usually argued?",
                options: ["The count of integrations that are switched on", "Less manual administration and faster time to resource", "The raw number of virtual machines that exist", "The volume of log data the platform produces"],
                correct: 1,
                explanation: "The measurable outcomes are administrative: requests fulfilled without ticket ping-pong, usage attributable to projects, and an audit trail that satisfies a funder or auditor."
            },
        ]
    },

    'p-deployment-options': {
        1: [
            {
                q: "Where can Waldur be deployed?",
                options: ["Cloud, on-premises, or hybrid environments", "Only in on-premises data centers", "Only in public cloud environments", "Only on desktop computers"],
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
                options: ["Software you install and manage yourself", "Desktop application you download", "Mobile app from an app store", "Software hosted and managed by the vendor"],
                correct: 3,
                explanation: "SaaS is vendor-hosted, reducing operational burden. Customers access via internet without managing infrastructure."
            },
        ],
        2: [
            {
                q: "What is an air-gapped deployment?",
                options: ["Isolated network with no internet connection", "Development and testing environment", "Mobile deployment for field workers", "Standard cloud-based deployment setup"],
                correct: 0,
                explanation: "Air-gapped systems have no external network access, used for high-security environments requiring complete isolation."
            },
            {
                q: "What deployment method does Waldur use?",
                options: ["Manual file copying to servers", "Docker containers with Kubernetes or compose", "Traditional Windows installer package", "FTP upload of application files"],
                correct: 1,
                explanation: "Waldur is containerized for consistent deployment across environments using Docker, Kubernetes, or Docker Compose."
            },
            {
                q: "Why might an organization choose on-premises deployment?",
                options: ["Data sovereignty, security, and compliance needs", "On-premises is always the cheapest option", "Docker requires on-premises deployment", "Performance is always better on-premises"],
                correct: 0,
                explanation: "On-premises gives control over data location, meets regulatory requirements, and addresses security policies."
            },
        ],
        3: [
            {
                q: "What is hybrid cloud deployment?",
                options: ["Using two different public cloud providers", "Running on both desktop and mobile", "Combination of on-premises and cloud resources", "Separate development and production systems"],
                correct: 2,
                explanation: "Hybrid combines private infrastructure with public cloud, balancing control, cost, and flexibility."
            },
            {
                q: "What are considerations for air-gapped Waldur deployment?",
                options: ["No special considerations are required at all", "Offline updates, a local registry, manual sync", "The standard internet update process applies", "Cloud backup becomes a mandatory requirement"],
                correct: 1,
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
                options: ["Windows Server with IIS web server", "Manual installation on bare metal", "Kubernetes cluster with Helm charts", "Docker Compose running on a laptop"],
                correct: 2,
                explanation: "Production deployments typically use Kubernetes for scalability, reliability, and operational features."
            },
        ],
        4: [
            {
                q: "Which method is supported for deploying onto Kubernetes?",
                options: ["A Compose file converted by a script", "Hand-written manifests kept per site", "Only managed hosting by the vendor", "The published Waldur Helm chart"],
                correct: 3,
                explanation: "Two installation methods are supported: Helm for Kubernetes clusters, and Docker Compose for a single server. The chart is published as a Helm repository, so upgrades are a values change plus a release."
            },
            {
                q: "What sits in front of the API and the frontend in the Compose stack?",
                options: ["Nothing — each service is exposed on its own port", "A Caddy router terminating and dispatching requests", "The API container, which also serves the UI files", "A CDN that must be configured before first start"],
                correct: 1,
                explanation: "A Caddy router fronts the stack and routes to the API and Homeport, so the deployment presents one origin instead of a set of ports."
            },
            {
                q: "Which optional services can the Compose stack bring up alongside Waldur?",
                options: ["A second database for reporting queries", "A Kubernetes control plane for testing", "A managed monitoring service in the cloud", "Keycloak, a Matrix homeserver and LiveKit"],
                correct: 3,
                explanation: "Beyond the core services the stack can start Keycloak for identity, a Matrix homeserver with its init jobs for chat, and LiveKit with a JWT service for calls."
            },
            {
                q: "Why does the stack run a migration step before the API?",
                options: ["The schema must match the code the API runs", "Migrations warm the database query cache", "The API refuses to start without a backup", "Migrations generate the OpenAPI schema file"],
                correct: 0,
                explanation: "A dedicated migration container applies schema changes first, so API containers never serve traffic against a database that does not match their code."
            },
        ],
        5: [
            {
                q: "How is the version of a deployment pinned?",
                options: ["The database records the version to use", "Versions are chosen at runtime per request", "Chart and Compose files set a target version", "Every container tracks the latest tag"],
                correct: 2,
                explanation: "Both packaging repositories carry an explicit target version that is bumped deliberately, including release candidates. Tracking a floating latest tag makes a restart an unplanned upgrade."
            },
            {
                q: "What does an air-gapped deployment need beyond the usual?",
                options: ["Mirrored images and no reliance on outbound calls", "A faster network link to the vendor's registry", "A separate license key issued for offline use", "Manual entry of every user account by hand"],
                correct: 0,
                explanation: "Images and dependencies must be mirrored inside the perimeter, and features that reach outward — including the update check — are turned off. Identity and mail have to resolve to internal services too."
            },
            {
                q: "Which component must not be scaled to several replicas?",
                options: ["The frontend static server", "The Celery beat scheduler", "The API server processes", "The Celery worker pool"],
                correct: 1,
                explanation: "API servers and workers scale horizontally. Two beat schedulers would enqueue every periodic task twice, so beat stays a single instance."
            },
            {
                q: "How does a GitOps deployment of Waldur work?",
                options: ["Each operator applies manifests from a laptop", "The API pushes its own configuration to the cluster", "Deployments are triggered by a manual webhook", "ArgoCD reconciles the cluster against the chart in git"],
                correct: 3,
                explanation: "An ArgoCD setup is documented alongside Helm: the desired release lives in git and the controller converges the cluster toward it, so drift is visible rather than silent."
            },
            {
                q: "What should be completed before a deployment goes to production?",
                options: ["A performance benchmark against a reference", "The go-live checklist in the admin guide", "A full penetration test by the vendor", "A migration of all users from the old system"],
                correct: 1,
                explanation: "The admin guide carries an explicit checklist for production — identity, mail, backups, TLS and configuration review — so the predictable omissions are caught before real users arrive."
            },
        ]
    },

    'p-vertical-hpc': {
        1: [
            {
                q: "What does HPC stand for?",
                options: ["Hosted Private Cloud, a hosting arrangement", "Hardware Processing Center, a datacentre type", "High Performance Computing, for large problems", "High Power Configuration, a server-level setting"],
                correct: 2,
                explanation: "HPC uses supercomputers and clusters to solve complex computational problems in science, engineering, and research."
            },
            {
                q: "What is SLURM in HPC context?",
                options: ["Job scheduler and resource manager for clusters", "Network protocol for cluster communication", "Programming language for parallel computing", "Distributed storage system for large files"],
                correct: 0,
                explanation: "SLURM (Simple Linux Utility for Resource Management) schedules and manages jobs on HPC clusters."
            },
            {
                q: "What is a compute allocation in HPC?",
                options: ["User account creation and access request", "Network bandwidth allocated to user groups", "Storage quota assigned for research data", "Computing resources granted to a project"],
                correct: 3,
                explanation: "Allocations grant projects access to compute hours, typically measured in core-hours or node-hours."
            },
        ],
        2: [
            {
                q: "How does Waldur integrate with SLURM?",
                options: ["Only through manual configuration files", "Through a SLURM plugin for allocation management", "Via email-based request processing", "Direct integration is not available"],
                correct: 1,
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
                options: ["Email request sent directly to admin", "Request, approval, provisioning, and usage tracking", "Instant access without any approval process", "No structured workflow is provided"],
                correct: 1,
                explanation: "Users request allocations, approvers review, Waldur provisions access, and tracks usage against quotas."
            },
        ],
        3: [
            {
                q: "How does Waldur report HPC usage?",
                options: ["Requires manual data entry for reports", "Reporting features are not included", "Pulls SLURM accounting data for reports", "Requires separate third-party tools"],
                correct: 2,
                explanation: "Waldur syncs with SLURM accounting database to show usage, remaining allocation, and generate reports."
            },
            {
                q: "What is a common challenge in HPC resource management?",
                options: ["Simple single-user access management", "Having too much unused compute capacity", "Not having any users for the resources", "Fair share scheduling and allocation tracking"],
                correct: 3,
                explanation: "HPC centers must fairly allocate limited resources across many projects and track usage for billing/reporting."
            },
            {
                q: "How does Waldur support AI/ML workloads?",
                options: ["GPU allocations plus notebook environments", "A separate dedicated AI system is required", "Only CPU-based workloads can be supported", "AI and ML workloads are out of scope here"],
                correct: 0,
                explanation: "Waldur manages GPU allocations and can integrate with Jupyter hubs for AI/ML researcher workflows."
            },
            {
                q: "What reporting do HPC centers typically need?",
                options: ["Usage by project, user, and resource type", "Manual spreadsheets for tracking usage", "Only total cluster usage aggregated", "No detailed reporting is required"],
                correct: 0,
                explanation: "HPC centers report usage breakdowns for billing, capacity planning, and demonstrating resource utilization."
            },
        ],
        4: [
            {
                q: "How does a Waldur user end up with an account on the cluster?",
                options: ["The user creates it themselves by SSH-ing in", "An administrator adds it manually per allocation", "The scheduler creates accounts on first job submit", "An offering user is created and exposed over LDAP"],
                correct: 3,
                explanation: "Gaining project access to an active resource creates an offering user, which the site agent renders into a GLAuth (LDAP) record with a POSIX UID/GID, home directory and login shell.",
                learnMore: { url: "https://docs.waldur.com/latest/user-guide/service-provider-organization/glauth-user-accounts/", text: "📚 GLAuth accounts" }
            },
            {
                q: "An allocation is granted per quarter and unused time carries over.",
                options: ["Periodic limits with carryover on the cluster", "A single lifetime limit that never resets", "Manual reset of the account each quarter", "No scheduler can express carryover at all"],
                correct: 0,
                explanation: "Periodic limits are a first-class concept: a quarterly allocation with carryover logic, enforced through the scheduler's accounting and validated against an emulator that can travel through time."
            },
            {
                q: "What happens when usage crosses a configured threshold?",
                options: ["Jobs already queued are silently deleted", "Nothing until the next allocation period", "QoS switches, for example to a slowdown tier", "The cluster is taken offline for that project"],
                correct: 2,
                explanation: "Threshold-based QoS switching moves an account between tiers — normal, slowdown, then blocked — so overspending degrades priority rather than stopping the centre dead."
            },
            {
                q: "How does consumed compute get back into Waldur?",
                options: ["The site agent reports usage against components", "Users self-report their consumption monthly", "Waldur queries the scheduler database directly", "Usage is estimated from allocation size"],
                correct: 0,
                explanation: "The agent collects usage from the backend and reports it per offering component, which is what invoices, quota enforcement and usage reports are all computed from."
            },
        ],
        5: [
            {
                q: "Two centres must honour one award granted by a funder.",
                options: ["The funder operates a Waldur deployment per centre", "Awards cannot span more than one institution", "OpenPortal relays award and usage across the centres", "Each centre re-enters the award in its own portal"],
                correct: 2,
                explanation: "OpenPortal carries create_award, add_user, set_limit and usage reports between portals and cluster agents, so an award crosses institutional boundaries without duplicate data entry."
            },
            {
                q: "What does a storage quota on a home directory require from the agent?",
                options: ["Nothing — storage is always unlimited on HPC", "Deleting files once the quota is exceeded", "Moving the home directory to a larger volume", "Reporting quota and consumption per volume"],
                correct: 3,
                explanation: "Home directory quota support means the agent both applies the limit and reports consumption snapshots per volume, so storage appears alongside compute in usage and billing."
            },
            {
                q: "Why does fairshare decay complicate testing allocations?",
                options: ["It is recalculated randomly on every job", "Its effect only appears after time has passed", "It depends on the number of nodes in a cluster", "It cannot be observed through scheduler commands"],
                correct: 1,
                explanation: "Decay follows a half-life measured in days, so a realistic test needs months of simulated history. The SLURM emulator's time travel and checkpoints exist precisely to make that repeatable."
            },
            {
                q: "A user loses access to a project. What should follow on the cluster?",
                options: ["Their files are deleted immediately", "Nothing until the allocation expires", "Their jobs continue to be charged as before", "Their offering user is marked for deletion"],
                correct: 3,
                explanation: "Automatic deletion of offering users on lost project access keeps the cluster's account set aligned with Waldur's authorization, rather than accumulating orphaned logins."
            },
            {
                q: "Why does an AI workload change what an HPC offering must express?",
                options: ["Nothing: GPUs bill exactly like CPU cores do", "GPU components and served inference endpoints", "Only storage, because the models are large", "Batch scheduling stops mattering entirely"],
                correct: 1,
                explanation: "GPU-hours are separate components with their own limits, and inference is served rather than queued — which is why there are vLLM-backed offerings and an AI gateway plugin alongside classic batch allocations."
            },
        ]
    },

    'p-vertical-gov': {
        1: [
            {
                q: "What is a key requirement for government IT systems?",
                options: ["Maximum throughput and fastest performance", "Integration with social media platforms", "Lowest possible procurement and hosting cost", "Compliance with regulations and audit capabilities"],
                correct: 3,
                explanation: "Government systems must meet regulatory compliance, maintain audit trails, and ensure data sovereignty."
            },
            {
                q: "What is data sovereignty?",
                options: ["Granting ownership of all data to end users", "Compressing data for efficient long-term storage", "Data being subject to laws of the country where stored", "Encrypting data at rest and in transit"],
                correct: 2,
                explanation: "Data sovereignty means data is subject to laws of its storage location, critical for government compliance."
            },
            {
                q: "Why is audit logging important for government?",
                options: ["Accountability and compliance verification for agencies", "Reducing operational infrastructure hosting costs", "Optimizing application performance under high load", "Improving everyday convenience for end users"],
                correct: 0,
                explanation: "Audit logs provide accountability, support compliance audits, and help investigate security incidents."
            },
        ],
        2: [
            {
                q: "How does Waldur support government compliance?",
                options: ["Providing no built-in compliance features at all", "Relying on fully manual processes and spreadsheets", "Delegating compliance entirely to third-party tools", "Audit trails, approval workflows, and access controls"],
                correct: 3,
                explanation: "Waldur provides comprehensive audit logging, configurable approvals, and fine-grained access controls."
            },
            {
                q: "What is an approval workflow?",
                options: ["An automatic process that instantly grants all user requests", "Multi-step process requiring authorized approvals before action", "An open pipeline where no authorization is ever required", "A simple email confirmation sent after resource provisioning"],
                correct: 1,
                explanation: "Approval workflows ensure proper authorization before provisioning resources, meeting policy requirements."
            },
            {
                q: "Why might government prefer on-premises deployment?",
                options: ["Consistently better performance benchmarks", "Data control, security policy and compliance", "Lower total cost of ownership in every case", "Faster initial setup and simpler deployment"],
                correct: 1,
                explanation: "On-premises keeps data within controlled environments, meeting security policies and regulatory requirements."
            },
        ],
        3: [
            {
                q: "What security features does Waldur provide?",
                options: ["Only basic password authentication is supported", "RBAC, MFA support, encryption, and audit logs", "No built-in security features of any kind", "Security delegated entirely to third-party tools"],
                correct: 1,
                explanation: "Waldur includes role-based access control, MFA integration, data encryption, and comprehensive audit logging."
            },
            {
                q: "How does Waldur handle sensitive data classification?",
                options: ["A single uniform security level applied to all data", "No support for classifying or categorizing data types", "Manual spreadsheet tracking without any automation", "Configurable data handling policies and access controls"],
                correct: 3,
                explanation: "Waldur's access controls and policies can enforce data classification requirements and handling rules."
            },
            {
                q: "What is change management in government context?",
                options: ["Pushing automatic updates without any review step", "Applying changes immediately as soon as they are ready", "A controlled process for reviewing and implementing changes", "An informal approach where no formal process is needed"],
                correct: 2,
                explanation: "Change management ensures changes are reviewed, tested, approved, and documented before implementation."
            },
            {
                q: "How does Waldur support disaster recovery requirements?",
                options: ["Backup support, stateless design, and documented recovery procedures", "Relying on automatic failover with no additional planning needed", "Providing no built-in disaster recovery support or tooling", "Depending entirely on manual recovery without documented steps"],
                correct: 0,
                explanation: "Waldur's containerized design and database backups support disaster recovery planning and procedures."
            },
        ],
        4: [
            {
                q: "The corporate directory owns the user lifecycle. How does Waldur follow?",
                options: ["A nightly database dump is copied across", "SCIM provisioning pushes users and groups in", "An operator retypes each joiner and leaver", "Users are created on first login and never removed"],
                correct: 1,
                explanation: "The SCIM 2.0 service provider lets Okta, Entra ID, Keycloak or JumpCloud provision and deprovision accounts through a standard protocol, so leavers actually disappear."
            },
            {
                q: "An auditor asks who granted a role six months ago.",
                options: ["The database backup from that month", "The support team's email archive", "Nothing records role changes over time", "The audit log of security and permission events"],
                correct: 3,
                explanation: "Permission changes, authentication events and impersonation are audit-logged, which is what makes after-the-fact reconstruction possible instead of guesswork."
            },
            {
                q: "One ministry needs a role the other organizations must not have.",
                options: ["Add the permission to the shared template", "Clone the role into that organization only", "Create a second Waldur deployment for it", "Grant the closest system role to everyone"],
                correct: 1,
                explanation: "Organization-scoped role clones bind availability to one customer and its projects. The paired conceal mechanism hides the superseded system role there without touching other organizations."
            },
            {
                q: "Procurement requires a purchase order before spending starts.",
                options: ["Purchase orders exist only in the invoice export", "The platform cannot represent procurement rules", "Orders can be gated on a purchase order reference", "Spending is reconciled manually at year end"],
                correct: 2,
                explanation: "Purchase orders can be attached and required before orders proceed, with renewal handling alongside them — so the commitment exists before the resource does."
            },
        ],
        5: [
            {
                q: "How is the platform's own dependency risk managed?",
                options: ["Vulnerability scanning of dependencies in the pipeline", "An annual manual review of the requirements file", "Trusting upstream maintainers to announce issues", "Pinning every dependency and never updating"],
                correct: 0,
                explanation: "Dependency vulnerability management is a documented process backed by scanning in CI, so a known-vulnerable transitive dependency surfaces as a pipeline signal rather than an audit finding."
            },
            {
                q: "Support needs to reproduce what a user sees, without their password.",
                options: ["A screen-sharing session arranged by email", "Copying the user's session cookie manually", "Impersonation, recorded in the audit trail", "A shared account both parties can log into"],
                correct: 2,
                explanation: "ImpersonationAuthentication lets authorized staff act as a user while actions remain attributable — the reason it sits first in the authentication chain and is logged."
            },
            {
                q: "Data must not leave the national perimeter. What follows?",
                options: ["A vendor-hosted deployment in a near region", "Encrypting the data before sending it out", "On-premises or air-gapped, with local identity", "Restricting the UI to a national IP range"],
                correct: 2,
                explanation: "Residency is a deployment decision: run it on infrastructure inside the perimeter, with identity, mail and object storage resolving locally. Encryption alone does not change where data sits."
            },
            {
                q: "Which order approval configuration suits a strict environment?",
                options: ["Approval by the requester's own account", "Explicit approval, with auto-approval only where justified", "Auto-approval everywhere to reduce administration", "No approvals, relying on quotas to bound spending"],
                correct: 1,
                explanation: "Approval is configurable per offering and per role, so it can be relaxed where the risk is low and required where it is not — auto-approval is a deliberate exception, not the default posture."
            },
            {
                q: "Why do PII guards matter in the AI assistant for public sector use?",
                options: ["The model refuses to answer questions with names", "Guards make the assistant respond more quickly", "Regulations forbid AI assistants altogether", "Personal data must not leak into an LLM prompt"],
                correct: 3,
                explanation: "Guards run fail-closed before any text reaches the model and again on every tool argument, so a prompt or a fetched record cannot quietly carry personal data to an external inference service."
            },
        ]
    },

    'p-vertical-fed': {
        1: [
            {
                q: "What is federation in the context of Waldur?",
                options: ["Multiple organizations sharing resources through one portal", "A protocol for federating email across different providers", "A setup where only one organization manages all resources", "A social networking feature for connecting user profiles"],
                correct: 0,
                explanation: "Federation enables multiple organizations to collaborate and share resources through a unified platform."
            },
            {
                q: "What is a consortium?",
                options: ["A type of software license governing usage rights", "A group of organizations collaborating on shared goals", "A network protocol for inter-system communication", "A single company managing its own internal resources"],
                correct: 1,
                explanation: "Consortiums are partnerships where organizations pool resources, common in research and academic contexts."
            },
            {
                q: "Why do organizations federate resources?",
                options: ["To simplify billing into a single unified payment system", "To satisfy a specific legal requirement imposed by regulators", "To share costs, increase capacity, and enable collaboration", "To reduce the total number of active users on a platform"],
                correct: 2,
                explanation: "Federation allows resource sharing, cost distribution, and collaboration while maintaining organizational boundaries."
            },
        ],
        2: [
            {
                q: "How does Waldur support multi-organization setups?",
                options: ["Not offering any multi-organization support features", "Restricting the platform to a single organization only", "Requiring separate installations for each organization", "Hierarchical organization structure with data isolation"],
                correct: 3,
                explanation: "Waldur supports organization hierarchies where each org has isolated users and resources within shared infrastructure."
            },
            {
                q: "What is federated identity?",
                options: ["Using only local accounts managed within each service", "An approach with no centralized identity management", "Single sign-on authentication across multiple organizations", "Requiring separate login credentials for each system"],
                correct: 2,
                explanation: "Federated identity allows users to authenticate once and access resources across member organizations."
            },
            {
                q: "How are resources shared in a federation?",
                options: ["By sending resource data as email attachments to members", "Sharing is not possible between different organizations", "By manually copying data between organization environments", "Through marketplace offerings and cross-org permissions"],
                correct: 3,
                explanation: "Waldur marketplace enables organizations to offer resources to federation members with appropriate access controls."
            },
        ],
        3: [
            {
                q: "What is a common federated research infrastructure use case?",
                options: ["A single isolated university lab managing its own servers", "Small business IT departments running internal workloads", "European research networks sharing computing resources", "Personal home computing and individual desktop setups"],
                correct: 2,
                explanation: "Research federations like EGI or GÉANT member organizations share HPC, cloud, and data resources."
            },
            {
                q: "How does billing work in federated setups?",
                options: ["Per-organization billing with aggregate reports", "Cash payments handled outside the platform", "No billing or cost tracking is available here", "One shared invoice sent to the whole federation"],
                correct: 0,
                explanation: "Waldur tracks usage per organization, enabling internal billing, chargebacks, or funding allocation reporting."
            },
            {
                q: "What governance challenges exist in federations?",
                options: ["Having a single central authority making all decisions", "Governance is unnecessary when organizations federate", "Automated conflict resolution handles every disagreement", "Coordinating policies across autonomous organizations"],
                correct: 3,
                explanation: "Federations must balance organizational autonomy with shared policies, requiring clear governance structures."
            },
            {
                q: "How does Waldur handle cross-organization projects?",
                options: ["Restricting every project to a single organization only", "Relying on manual coordination outside of the platform", "Offering no project management support for any teams", "Projects can include members from multiple organizations"],
                correct: 3,
                explanation: "Waldur projects can span organizations, enabling collaborative resource usage with appropriate permissions."
            },
        ],
        4: [
            {
                q: "How does one Waldur deployment offer another's resources?",
                options: ["It imports the offering from the remote Waldur's API", "It copies the remote deployment's database rows", "It proxies every page of the remote user interface", "It cannot: offerings are always local to a deployment"],
                correct: 0,
                explanation: "With an API URL and a token for an owner account, a service provider organization imports a remote offering. Orders placed locally are then fulfilled by the remote deployment."
            },
            {
                q: "Two federated deployments share a common identity source.",
                options: ["Identity federation is incompatible with remote offerings", "Accounts can be synchronised so remote projects map users", "Each deployment keeps entirely separate user records", "Users must register twice and link the accounts"],
                correct: 1,
                explanation: "When both sides rely on a common identity registry such as eduTEAMS, local accounts from the organization and project are pushed and mapped into the remote project when a resource is provisioned."
            },
            {
                q: "What does a consortium need beyond shared login?",
                options: ["A single shared administrator account", "Identical hardware at every participating site", "One organization owning all of the projects", "Agreed allocation, billing and membership policy"],
                correct: 3,
                explanation: "Federation is mostly governance: who allocates, who invoices whom, and who may change membership. The platform expresses those decisions, it does not remove the need to make them."
            },
            {
                q: "A project spans two organizations. Who can see its costs?",
                options: ["Costs are hidden entirely for shared projects", "Access follows roles and billing visibility settings", "Everyone in either organization sees everything", "Only Waldur staff can see cross-org costs"],
                correct: 1,
                explanation: "Visibility is a permission question: roles on the project and its customer decide access, and billing visibility can be restricted separately so members see resources without seeing prices."
            },
        ],
        5: [
            {
                q: "Which membership_control policy blocks local changes at the centre?",
                options: ["members_only, which lets existing members add others", "roles_only, which allows any role-holder to edit", "locked, so membership is controlled by the awarding portal", "open, since anyone may adjust the membership list"],
                correct: 2,
                explanation: "OpenPortal awards carry a membership_control policy of open, members_only, roles_only or locked. It decides whether membership may be changed at the centre or only by the portal that granted the award."
            },
            {
                q: "An external IdM system must react to role changes in Waldur.",
                options: ["It registers an event consumer bound to the relevant scopes", "It polls every user endpoint on a short interval", "It reads the Waldur database with a read-only account", "It waits for an operator to notify it of changes"],
                correct: 0,
                explanation: "An event consumer is generic: an IdM or IGA sync owns a queue bound to the projects or customers it cares about, and delivery is re-authorized against live roles on every event."
            },
            {
                q: "Who invoices whom in a federated setup?",
                options: ["Nobody: federated resources are always free of charge", "Each user is invoiced by their own home institution", "The provider organization invoices the consuming organization", "The platform operator invoices every end user directly"],
                correct: 2,
                explanation: "Billing follows the marketplace relationship: the service provider organization bills the customer organization whose project consumed the resource. Funding bodies sit behind that through credits and awards."
            },
            {
                q: "Why does an award carry links back to the call and funder?",
                options: ["Because the protocol requires every field to be populated", "So the cluster can display them on the login banner", "To let the centre apply for renewal on the user's behalf", "So an allocation at a centre can be traced to its funding"],
                correct: 3,
                explanation: "Provenance travels with the award: the funding call, the award record on the funder's system, the project page and the renewal link — so a centre holding an allocation can answer where it came from."
            },
            {
                q: "What is the main risk when federating autonomous organizations?",
                options: ["Storage cannot be shared between institutions", "Policy diverges while the technical link stays working", "The network latency between sites becomes limiting", "Users need one browser tab per organization"],
                correct: 1,
                explanation: "The integration is the easy half. Divergent policy — different approval rules, different eligibility, different reporting expectations — is what actually breaks a federation, which is why governance is modelled explicitly."
            },
        ]
    },

    // ============================================================================
    // CORE PLATFORM TIER — added 2026-08
    // ============================================================================

    'c-events': {
        1: [
            {
                q: "What is an event consumer in Waldur?",
                options: ["A Celery worker that runs scheduled background jobs", "A database trigger firing whenever a row is written", "A cron task that mails a daily digest of activity", "A client that drains its own queue of platform events"],
                correct: 3,
                explanation: "An EventConsumer owns exactly one RabbitMQ queue named consumer_<uuid> and drains it. Consumers are generic: a site agent, an IdM sync, the Keycloak operator or a reporting script can each own one.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/design/pubsub-architecture/", text: "📚 Event pub/sub" }
            },
            {
                q: "Why push events instead of polling the REST API?",
                options: ["Because consumers react at once without repeated sweeps", "Because the rate limiter blocks all polling clients", "Because events carry data the REST API never exposes", "Because push removes the need to authorize any reads"],
                correct: 0,
                explanation: "Polling trades latency against load: a short interval hammers the API, a long one delays reactions. Pushed events arrive as they happen and cost nothing while the system is idle."
            },
            {
                q: "What protocol do event consumers subscribe with?",
                options: ["gRPC bidirectional streams carried on HTTP/2", "Server-sent events on a long-lived HTTP request", "Raw AMQP frames spoken straight to the broker", "STOMP, over a TCP or WebSocket connection"],
                correct: 3,
                explanation: "Consumers subscribe over STOMP — site agents through stomp-py, the Homeport UI through @stomp/stompjs against RabbitMQ's web-STOMP plugin."
            },
        ],
        2: [
            {
                q: "What does an EventConsumerScope record bind?",
                options: ["A user to the broker vhost their queue is in", "A consumer to an entity, such as one offering", "A consumer to a message rate limit per hour", "An event type to the Celery queue handling it"],
                correct: 1,
                explanation: "EventConsumerScope(consumer, content_type, object_id) binds a consumer to a list of entities — an offering, several projects, a customer — through GenericForeignKeys, which keeps waldur_core free of marketplace imports."
            },
            {
                q: "A consumer registers with no scope bindings. What does it receive?",
                options: ["Every event platform-wide — staff or support only", "A validation error rejecting the registration", "Nothing until a binding is added to it later", "Only events about the registrant's own account"],
                correct: 0,
                explanation: "An empty binding set means global, which is an all-user PII firehose — so only staff and support may request it. Both registration paths write the consumer and its bindings in one transaction so a partial write cannot fail open."
            },
            {
                q: "Which binding picks up events for all of a customer's projects?",
                options: ["Binding a user covers each project they are in", "Binding each project separately is the only way", "Binding the customer — the project chain matches", "Binding an offering, which covers every project"],
                correct: 2,
                explanation: "An event's scope-keys cover the whole chain, so a consumer bound to a customer matches its projects' events. Matching is a set intersection against the indexed EventConsumerScope table."
            },
        ],
        3: [
            {
                q: "When is a consumer's right to an event checked?",
                options: ["Once at registration, then trusted for the queue's life", "At registration and again at every single delivery", "Only when the consumer first connects over STOMP", "Never — owning the queue is treated as the grant"],
                correct: 1,
                explanation: "Both times. At registration you may bind only to an entity you hold a role on, or an ancestor of it. At delivery the same rule is re-checked, so revoking somebody's role stops their delivery immediately."
            },
            {
                q: "How does delivery authorization stay cheap during a fan-out?",
                options: ["One batched role query covers the entire fan-out", "Only the first ten consumers are re-authorized", "The check runs asynchronously after messages ship", "Permissions are cached in Redis for five minutes"],
                correct: 0,
                explanation: "users_with_role_on_any_scope_key resolves the whole fan-out in a single batched query — cheaper than the per-recipient filter_for_user call it replaced."
            },
            {
                q: "What is a consumer's object_types field for?",
                options: ["The Django models the consumer may write back to", "A routing template used to name the broker queue", "A security boundary limiting readable event types", "A convenience allow-list filtering delivered types"],
                correct: 3,
                explanation: "object_types is client-side convenience filtering and an empty list means all types. It is never a security boundary — scope bindings and the delivery re-check are what enforce access."
            },
            {
                q: "How does one queue carry many kinds of event?",
                options: ["Different types are batched into a single message", "A separate subscription is opened per event type", "The consumer demultiplexes on envelope object_type", "The broker routes each type to its own vhost"],
                correct: 2,
                explanation: "Each consumer drains exactly one queue and demultiplexes on the envelope's object_type field. It is one queue per consumer, not one queue per event type."
            },
        ],
        4: [
            {
                q: "What did the unified queue replace?",
                options: ["One queue per consumer, bound to chosen entities", "One queue per offering and object_type pairing", "A shared fan-out exchange any client could bind", "Direct webhook callbacks posted to consumer URLs"],
                correct: 1,
                explanation: "The legacy EventSubscription path created a queue per (offering, object_type). The unified model gives each consumer one queue with entity bindings; the legacy path is deprecated and suppressed for users already migrated."
            },
            {
                q: "Which record links a site agent to its event queue?",
                options: ["AgentIdentity, through a nullable OneToOne field", "SiteAgentLog, which keeps the connection history", "The offering itself, through a plugin option flag", "AgentService, which also stores processor config"],
                correct: 0,
                explanation: "AgentIdentity.event_consumer is a nullable OneToOne. AgentIdentity covers site-agent registration and telemetry, while AgentService, AgentProcessor and SiteAgentLog stay in the marketplace_site_agent plugin."
            },
            {
                q: "What protects the publish path when the broker misbehaves?",
                options: ["Publishing blocks the web request until it lands", "Events are written to disk and replayed by hand", "Messages are dropped silently until it recovers", "A circuit breaker, rate limit, dedup and a DLQ"],
                correct: 3,
                explanation: "publish_messages sits behind a circuit breaker, rate limiting and deduplication, with a dead-letter queue for messages that cannot be delivered."
            },
            {
                q: "Which binding type exists only for event consumers?",
                options: ["customer — roles resolve customers a different way", "offering — PAT scopes cannot name an offering", "project — invitations use a different project type", "user — deliberately kept out of the shared TYPE_MAP"],
                correct: 3,
                explanation: "Bindings reuse the Personal Access Token vocabulary via TYPE_MAP. EVENT_CONSUMER_TYPE_MAP adds user on top, so you can subscribe to your own identity events without disturbing PAT scopes, invitation targets or role content types."
            },
        ],
        5: [
            {
                q: "What does binding another user's identity events require?",
                options: ["Membership of any project that user belongs to", "Staff or support — identity binds are not role-based", "An accepted invitation issued by that user first", "Owner role on that user's home organization"],
                correct: 1,
                explanation: "A binding to your own user is authorized by identity rather than by role. Binding somebody else's identity events is restricted to staff and support."
            },
            {
                q: "Why must a consumer and its bindings be written atomically?",
                options: ["A partial write would fail open as a global consumer", "The UUID is only stable inside a database transaction", "Celery retries would otherwise duplicate the consumer", "The broker requires the queue before any binding"],
                correct: 0,
                explanation: "An empty binding set means global, so a consumer persisted without its bindings would silently become an all-user PII firehose. Both registration paths create them in one transaction."
            },
            {
                q: "What changed for the last resource in a project being terminated?",
                options: ["Only the offering owner is told about termination", "Terminated resources are routed to a separate queue", "Termination events stopped being emitted entirely", "A project-bound consumer now receives that event"],
                correct: 3,
                explanation: "The legacy check only resolved a customer while the project still had a non-terminated resource on the offering. Scope-keys are derived straight from the order or resource, so that narrowing is gone."
            },
            {
                q: "Where does a consumer's queue live in RabbitMQ?",
                options: ["In a vhost named after the bound offering slug", "In a shared vhost partitioned by routing key", "In the owning user's vhost, named by their UUID", "In the default vhost with per-queue permissions"],
                correct: 2,
                explanation: "The vhost is user.uuid.hex and rmq_username is a random UUID hex provisioned for the consumer. The queue_created flag records whether the queue itself exists yet."
            },
            {
                q: "Why does get_scope_ancestors matter for correctness?",
                options: ["It limits how deeply a project hierarchy may be nested", "It yields what OfferingQuerySet.filter_for_user ORs over", "It caches ancestors so lookups avoid recursive queries", "It fixes the order in which events reach a consumer"],
                correct: 1,
                explanation: "get_scope_ancestors(offering) yields exactly what filter_for_user ORs over, so the binding predicate is the same rule the platform uses for offering visibility. The unified path can therefore never be narrower than the legacy one it replaces."
            },
        ]
    },

    'c-identity': {
        1: [
            {
                q: "How can you recognise a Waldur Personal Access Token?",
                options: ["It starts with wt_ and ends with a signature", "It starts with waldur- and a counter suffix", "It starts with w_ and embeds its expiry time", "It starts with pat_ and embeds the user UUID"],
                correct: 2,
                explanation: "The format is w_<unix_timestamp>_<random>. The w_ prefix separates PATs from OIDC JWTs, and the embedded timestamp lets a script check expiry without calling the API.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/personal-access-tokens/", text: "📚 Personal Access Tokens" }
            },
            {
                q: "How does Waldur store a Personal Access Token?",
                options: ["In plaintext so support staff can re-read it", "Hashed with bcrypt plus a per-token random salt", "Encrypted with a key kept in the settings file", "As a SHA-256 hash; plaintext is shown just once"],
                correct: 3,
                explanation: "Only the SHA-256 hash is stored — unique and indexed — plus the first 8 characters as token_prefix for display in the UI. The full token appears once at creation and cannot be recovered afterwards."
            },
            {
                q: "Which header carries a Personal Access Token?",
                options: ["X-Waldur-Token, a Waldur-specific header", "Authorization, using the older Token scheme", "Cookie, reusing the session cookie name", "Authorization, using the Bearer scheme"],
                correct: 3,
                explanation: "PATAuthentication reads Authorization: Bearer. The older Token model still serves UI sessions under a different scheme, which is how the two coexist without ambiguity."
            },
        ],
        2: [
            {
                q: "What does allowed_scopes on a token restrict?",
                options: ["The endpoints published in the OpenAPI schema", "The entities the token is allowed to act on", "The IP ranges the token may be presented from", "The number of requests permitted in an hour"],
                correct: 1,
                explanation: "allowed_scopes is a list of {content_type_id, object_id} entity bindings; empty means no entity restriction, though the permission allow-list in scopes still applies. Source networks are restricted separately by allowed_networks."
            },
            {
                q: "How do Okta or Microsoft Entra ID provision users into Waldur?",
                options: ["Through the OIDC userinfo endpoint polled per user", "Through a staff member creating each account by hand", "Through the SCIM 2.0 service provider at /scim/v2/", "Through a nightly CSV import run by a Celery beat"],
                correct: 2,
                explanation: "Waldur ships an optional SCIM 2.0 Service Provider (RFC 7644) so identity providers can push users and groups. It writes through the same multi-source attribute-merge policy as the Identity Bridge.",
                learnMore: { url: "https://datatracker.ietf.org/doc/html/rfc7644", text: "📚 SCIM 2.0 protocol" }
            },
            {
                q: "What does the GLAuth integration expose to a cluster?",
                options: ["An LDAP directory of offering users as accounts", "A Kerberos KDC issuing tickets for HPC logins", "A RADIUS service authenticating VPN sessions", "A SAML identity provider for external portals"],
                correct: 0,
                explanation: "Offering users provisioned by the site agent are rendered into a GLAuth (LDAP) directory with a numeric UID/GID, home directory and login shell, so clusters can authenticate them."
            },
        ],
        3: [
            {
                q: "In what order do Waldur's authentication classes run?",
                options: ["PAT first, so tokens always beat a session", "Session only; the others are enabled per view", "Impersonation, Session, PAT, then OIDC", "OIDC, then PAT, then Session, then Impersonation"],
                correct: 2,
                explanation: "DEFAULT_AUTHENTICATION_CLASSES lists ImpersonationAuthentication, SessionAuthentication, PATAuthentication and OIDCAuthentication in that order — the first class that recognises the request handles it."
            },
            {
                q: "Why is the expiry embedded in the token string?",
                options: ["So the server can skip the database lookup", "So a script can check expiry without an API call", "So a token can be revoked without any database", "So tokens sort chronologically in the log output"],
                correct: 1,
                explanation: "The timestamp is a convenience for humans and scripts. The server still validates every request against the database, so the embedded value is never trusted for enforcement."
            },
            {
                q: "What is an organization-scoped role clone?",
                options: ["A role that expires when the user's session ends", "A role synchronised in from an LDAP directory", "A system role copied for use in one organization", "A role granting access across every organization"],
                correct: 2,
                explanation: "Staff can clone a system role into an organization. The clone copies the template's permissions but is usable only within that customer and its projects, bound through a RoleAvailability record."
            },
            {
                q: "How do you stop a system role being granted in one organization?",
                options: ["Revoke it from each user with a scheduled task", "Strip the permission from the shared role template", "Delete the role, which affects every organization", "Conceal it there, using a per-organization deny-list"],
                correct: 3,
                explanation: "Concealing adds a per-organization deny-list entry, so the role can no longer be granted there — usually because an organization-specific clone supersedes it. Everywhere else the role is untouched."
            },
        ],
        4: [
            {
                q: "A PAT is presented from an address outside allowed_networks.",
                options: ["The request works and the IP lands in last_used_ip", "The token is deactivated and its owner is emailed", "The request works, but for read-only endpoints", "The request is rejected — the list is a CIDR ACL"],
                correct: 3,
                explanation: "allowed_networks holds canonical CIDR strings validated by normalize_network_acl; an empty list means no network restriction. Accepted requests bump last_used_at, last_used_ip and use_count."
            },
            {
                q: "Which onboarding path suits users who self-register at first login?",
                options: ["Email invitations sent individually by an administrator", "OIDC just-in-time provisioning on first sign-in", "SCIM push driven by the corporate identity provider", "The Identity Bridge REST API used by a trusted ISD"],
                correct: 1,
                explanation: "OIDC JIT requires no prior knowledge of the user. SCIM fits IdP-managed lifecycles, the Identity Bridge fits a trusted source directory pushing data, and invitations fit ad-hoc onboarding."
            },
            {
                q: "Waldur as a SCIM server versus Waldur as a SCIM client:",
                options: ["They are two names for the same /scim/v2/ endpoint mounting", "The client is read-only and can never create any records", "The server receives provisioning; the client pushes entitlements", "The server is hosted centrally; the client runs on login nodes"],
                correct: 2,
                explanation: "Two independent features. The Service Provider at /scim/v2/ receives provisioning from an IdP; the SCIM client pushes SSH entitlements out to an HPC login-node service. They are configured separately."
            },
            {
                q: "What decides the POSIX login name of an offering user?",
                options: ["The cluster assigns one and reports it back", "A random string generated per offering user", "It always equals the Waldur username, unchanged", "The offering's username generation policy setting"],
                correct: 3,
                explanation: "The username generation policy can derive the name from the Waldur username, a service-provider-assigned name, an anonymized prefix, or an identity claim. Turning off POSIX/LDAP management leaves the user with a username only."
            },
        ],
        5: [
            {
                q: "What is the point of ImpersonationAuthentication?",
                options: ["Letting the agent authenticate on behalf of an offering", "Letting a service account share one login for all", "Letting authorized staff act as a user, with an audit trail", "Letting a user hold two active sessions at the same time"],
                correct: 2,
                explanation: "Impersonation lets authorized staff reproduce what a user sees while the actions stay attributable. It sits first in the authentication chain so it can wrap whichever credential follows."
            },
            {
                q: "A PAT leaks. What actually contains the damage?",
                options: ["Rotating the deployment's Django SECRET_KEY", "Deleting or deactivating that token's row", "Waiting for the embedded expiry to elapse", "Changing the owning user's login password"],
                correct: 1,
                explanation: "Lookup is by token hash on a single row, so deactivating or deleting it stops the token instantly. Because permissions are re-resolved per request, revoking the owner's roles also narrows what a live token can still do."
            },
            {
                q: "Why do scopes and allowed_scopes both exist on a token?",
                options: ["One lists permissions, the other limits target entities", "One applies to reads while the other applies to writes", "One is enforced by the API, the other by the frontend", "They duplicate each other for backward compatibility"],
                correct: 0,
                explanation: "scopes is the permission allow-list — what the token may do. allowed_scopes restricts which entities it may do it to. Both are enforced, and an empty allowed_scopes means no entity restriction rather than no access."
            },
            {
                q: "Which library stack backs SAML2 logins in Waldur?",
                options: ["pysaml2 with djangosaml2 in waldur_auth_saml2", "python-jose validating assertions in the core app", "A built-in parser written specifically for Waldur", "Keycloak proxying SAML into OIDC before Waldur"],
                correct: 0,
                explanation: "waldur_auth_saml2 builds on pysaml2 and djangosaml2. OIDC providers are handled separately by waldur_auth_social, and either may sit in front of a Keycloak deployment."
            },
            {
                q: "Why are security-relevant authentication events audit-logged?",
                options: ["To feed the recommendation engine with usage data", "To let the billing engine charge for API usage", "To reconstruct who did what after an incident", "To let the frontend show a login history widget"],
                correct: 2,
                explanation: "Token creation and use, impersonation, role changes and failed logins are recorded so an incident can be reconstructed. It is also why PAT rows track last_used_at, last_used_ip and use_count."
            },
        ]
    },

    'c-ai-assistant': {
        1: [
            {
                q: "Where does the AI Assistant live in the backend?",
                options: ["In the site agent, close to the compute backend", "In the chat module, as a marketplace extension", "In a separate microservice beside Mastermind", "In the frontend only, calling the LLM directly"],
                correct: 1,
                explanation: "The assistant is src/waldur_mastermind/chat/, registered as the MarketplaceChatExtension plugin — the same extension mechanism every other Waldur module uses.",
                learnMore: { url: "https://docs.waldur.com/latest/developer-guide/guides/ai-assistant/", text: "📚 AI Assistant" }
            },
            {
                q: "Which LLM backends can the assistant be configured against?",
                options: ["Only the vendor-hosted OpenAI API is supported", "Any backend, provided it speaks the Matrix protocol", "vLLM, OpenAI or Ollama, chosen by configuration", "Only a self-hosted vLLM deployment is supported"],
                correct: 2,
                explanation: "The backend is configurable: a self-hosted vLLM server, the OpenAI API, or a local Ollama instance. That choice is an operator concern rather than something the module hardcodes."
            },
            {
                q: "How does the assistant return an answer to the browser?",
                options: ["As HTML fragments swapped into the page", "As a WebSocket frame per generated token", "As one JSON document once generation finishes", "As an NDJSON stream, one JSON object per line"],
                correct: 3,
                explanation: "POST /api/chat/stream/ responds with application/x-ndjson: one compact JSON object per line, using short keys to keep the wire small."
            },
        ],
        2: [
            {
                q: "What is the agentic tool loop?",
                options: ["A scheduler running the same prompt on a timer", "A queue of user messages processed in order", "A retry loop that repeats a failed generation", "The LLM asks for tools, they run, results feed back"],
                correct: 3,
                explanation: "The worker asks the LLM what to do, executes any tool calls it requests, feeds the results back and repeats — up to _MAX_TOOL_ROUNDS = 5 rounds before forcing a final text-only call."
            },
            {
                q: "Which tools can the model see in a conversation?",
                options: ["Every tool the module registers, without exception", "Only those the calling user is permitted to use", "Only read-only tools, since writes are forbidden", "Only the tools the user names in their message"],
                correct: 1,
                explanation: "Tools are lazy-loaded and role-gated, so the LLM can only see and call functions the caller is authorized for. The permission model is not something the prompt can talk its way around."
            },
            {
                q: "What happens when a user runs out of assistant tokens?",
                options: ["The request is refused — quotas are validated first", "The reply is truncated halfway through generation", "The request is queued until the next day begins", "Older messages are deleted to reclaim budget"],
                correct: 0,
                explanation: "_validate_quota runs before anything reaches the LLM, against per-user daily, weekly and monthly budgets. Usage is recorded atomically after each turn and a cron resets stale counters."
            },
        ],
        3: [
            {
                q: "What do the fail-closed input guards check?",
                options: ["Whether the user has an active marketplace resource", "The grammar and spelling of the submitted question", "Only the very first message of a conversation", "Prompt injection and PII, on input and tool arguments"],
                correct: 3,
                explanation: "Injection and PII detection run before any text reaches the LLM, and again on every tool argument. Fail-closed means a guard error blocks the turn rather than letting it through unchecked."
            },
            {
                q: "Why does the LLM call run on a background thread?",
                options: ["To bypass the request timeout set by the proxy", "To let several users share one upstream connection", "So a client disconnect cannot abort persistence", "Because Django forbids network calls in a view"],
                correct: 2,
                explanation: "The worker thread owns the upstream call, so a browser that goes away mid-answer cannot kill the connection or skip the persistence and usage accounting that happen in the finally block."
            },
            {
                q: "How is an edited message represented in the data model?",
                options: ["The original row is updated in place", "A new row points at the old one via replaces", "The whole thread is copied to a new thread", "Edits are not persisted, only re-streamed"],
                correct: 1,
                explanation: "Message.replaces is a self-FK: the superseded row stays in the table for audit and is filtered out of API responses by default. Nothing is destroyed by an edit or a reload."
            },
            {
                q: "What is stored in Message.blocks?",
                options: ["A JSONB list of UI blocks mirroring the wire format", "The tokenized prompt sent upstream to the model", "A pointer to a file holding the rendered answer", "The raw text of the turn as a single string"],
                correct: 0,
                explanation: "blocks is a JSONB list mirroring the NDJSON shape sent over the wire, so a reloaded thread renders exactly like the live stream did."
            },
        ],
        4: [
            {
                q: "How many SystemPrompt rows may be active at once?",
                options: ["One per user, chosen in their profile page", "Any number; they are concatenated in order", "None; the prompt is hardcoded in the module", "One — activation is atomic on the viewset"],
                correct: 3,
                explanation: "SystemPrompt holds admin-defined custom instructions and at most one row may have is_active=True. SystemPromptViewSet.activate flips it atomically."
            },
            {
                q: "What does the chat data model hang off the user?",
                options: ["A ChatSession per user, holding many threads", "One ThreadSession per user, reused every time", "A Message table with no session grouping at all", "One session per browser tab, discarded on close"],
                correct: 0,
                explanation: "User → ChatSession (OneToOne) → ThreadSession → Message, created lazily on the first stream. Deletes cascade the same way, so retention cleanup only has to delete sessions."
            },
            {
                q: "Why do the wire messages use keys like k, c, t and m?",
                options: ["To obfuscate the payload from the browser console", "To keep the streamed NDJSON small on the wire", "Because JSON forbids long keys inside a stream", "To match the column names used in the database"],
                correct: 1,
                explanation: "The stream emits one object per line for every increment, so short keys measurably reduce bytes. The parser expands them into UI blocks on the client side."
            },
            {
                q: "The tool cap is reached but the model still wants tools.",
                options: ["A final text-only call is forced to answer", "The remaining tool calls run without limits", "The conversation is archived automatically", "The stream ends with an error for the user"],
                correct: 0,
                explanation: "After _MAX_TOOL_ROUNDS rounds the loop stops requesting tools and forces one final text-only completion, so a model stuck in a tool loop still returns something useful."
            },
        ],
        5: [
            {
                q: "How would you add a new capability to the assistant?",
                options: ["Extend the system prompt with the new instructions", "Add an endpoint and describe it in the user manual", "Retrain the model on Waldur documentation", "Register a tool, gated by the permission it needs"],
                correct: 3,
                explanation: "Capabilities come from registered tools, each gated by the role that permits it. The prompt describes intent; it is the tool registry and its permission gates that decide what can actually happen."
            },
            {
                q: "Why are tool arguments guarded, not only the user message?",
                options: ["Because arguments are billed separately from text", "Because arguments may exceed the model context", "Because injected text can resurface through a tool", "Because the database rejects unvalidated arguments"],
                correct: 2,
                explanation: "Content pulled in during the loop — a description, a comment, a resource name — can carry injected instructions or PII. Re-checking every tool argument closes that second path into the model."
            },
            {
                q: "Which fields let an operator triage a flagged conversation?",
                options: ["The raw upstream request and response bodies", "A separate audit table unlinked from messages", "is_flagged, severity, injection and PII categories", "Only a boolean marking the whole thread unsafe"],
                correct: 2,
                explanation: "A Message records is_flagged, severity, injection_categories, pii_categories and action_taken, alongside feedback fields — enough to review what tripped a guard without re-running the turn."
            },
            {
                q: "What is the retention story for chat data?",
                options: ["A cron deletes sessions; the cascade does the rest", "Users must delete each message individually", "Data lives only in memory during the stream", "Threads are kept forever for audit purposes"],
                correct: 0,
                explanation: "Cascading deletes flow User → ChatSession → ThreadSession → Message, so the retention cron only deletes sessions. Archiving a thread is a soft delete via is_archived and is a separate concern."
            },
            {
                q: "Where are per-turn token counts recorded?",
                options: ["Only upstream, in the LLM provider dashboard", "Nowhere — usage is estimated from characters", "Only in the application log for later parsing", "On the message and in the user's TokenQuota"],
                correct: 3,
                explanation: "Each Message carries input_tokens and output_tokens, and record_usage decrements the user's TokenQuota atomically after the turn. Thread title generation tracks its own counts separately."
            },
        ]
    },

    'c-proposals': {
        1: [
            {
                q: "What is a call in Waldur?",
                options: ["A scheduled job that reconciles remote offerings", "A webhook fired when an order changes state", "A published invitation to apply for resources", "A support phone line for marketplace customers"],
                correct: 2,
                explanation: "A Call is the top-level entity for calls for proposals, owned by a CallManagingOrganisation and moving through draft, active and archived states.",
                learnMore: { url: "https://docs.waldur.com/latest/about/concepts/call-management/", text: "📚 Call management" }
            },
            {
                q: "What is a round inside a call?",
                options: ["A single reviewer's pass over one proposal", "A repeat of the call after it has been archived", "A billing period used to invoice allocations", "A time-bounded submission and allocation window"],
                correct: 3,
                explanation: "A Round carries scheduling only — start_time, cutoff_time, review duration and allocation date — and reports itself as scheduled, open or ended. Review policy lives on the call's workflow steps instead."
            },
            {
                q: "What does an accepted proposal turn into?",
                options: ["An offering published on the marketplace", "A Waldur project with the requested resources", "A support ticket for the operations team", "A PDF report mailed to the applicant"],
                correct: 1,
                explanation: "A Proposal links to a Project, and the resources requested in it are provisioned through the marketplace once the allocation decision is made."
            },
        ],
        2: [
            {
                q: "Which states does a proposal move through?",
                options: ["new, assigned, resolved and closed, as with tickets", "creating, ok, erred, terminating, as with resources", "pending, executing, done, following the order flow", "draft, submitted, in_review, accepted, rejected, canceled"],
                correct: 3,
                explanation: "Proposal.States covers draft, submitted, in_review, accepted, rejected and canceled — a lifecycle distinct from marketplace order and resource states."
            },
            {
                q: "Who owns the call and its configuration?",
                options: ["A CallManagingOrganisation, protected from deletion", "The applicant who submits the first proposal", "Waldur staff, since calls are platform-wide", "Whichever service provider offers the resources"],
                correct: 0,
                explanation: "Call.manager is a protected FK to CallManagingOrganisation, and permissions resolve through call__manager__customer — so the managing organization's roles decide who may configure it."
            },
            {
                q: "What does a reviewer submit for a proposal?",
                options: ["An invoice covering the review time they spent", "A new proposal replacing the one under review", "A Review with scores plus public or private comments", "A simple accept or reject flag with no commentary"],
                correct: 2,
                explanation: "Review carries a summary score, field-specific feedback and comments, and has its own states: in_review, submitted and rejected."
            },
        ],
        3: [
            {
                q: "Which workflow step is mandatory in every call?",
                options: ["Expert review, so proposals are always scored", "Allocation decision, where approval finally happens", "Award response, where the applicant confirms", "Administrative check, before anything else runs"],
                correct: 1,
                explanation: "allocation_decision is the only step flagged mandatory. Administrative check, technical assessment, expert review, panel review and award response can each be disabled for a call."
            },
            {
                q: "Which step depends on another having run first?",
                options: ["Expert review depends on the award response", "Technical assessment depends on panel review", "Administrative check depends on allocation", "Panel review depends on expert review"],
                correct: 3,
                explanation: "panel_review declares expert_review as a dependency — the panel consolidates the independent expert scores, so it cannot meaningfully run first."
            },
            {
                q: "Where is the per-call step configuration stored?",
                options: ["In a settings file, identical for every call", "On the Round, alongside its submission window", "On CallWorkflowStep: enabled, duration, checklist", "On each Proposal, so applicants can tailor it"],
                correct: 2,
                explanation: "CallWorkflowStep holds is_enabled, duration_in_days and an evaluation checklist per step. The Round only schedules; the step configuration decides what actually runs."
            },
            {
                q: "Who may act on an active workflow step?",
                options: ["Only Waldur staff, to keep decisions consistent", "Only the applicant who submitted the proposal", "Any authenticated user viewing the public call", "Anyone with a role on the parent call, per the step"],
                correct: 3,
                explanation: "Authorization resolves through the parent Call's role assignments in _user_can_act_on_active_step. Each step definition names a default responsible role: call_manager, offering_manager, reviewer, panel_member or applicant."
            },
        ],
        4: [
            {
                q: "What statuses can a workflow step instance hold?",
                options: ["draft, submitted, approved, rejected, paid", "pending, active, completed, expired, skipped", "open, closed, reopened, archived and merged", "queued, running, succeeded, failed, retried"],
                correct: 1,
                explanation: "ProposalWorkflowStepInstance tracks the per-proposal progress of each step: pending, active, completed, expired or skipped — expired being what a step duration produces when nobody acts in time."
            },
            {
                q: "What is a conflict of interest check for in a call?",
                options: ["Preventing two calls from running at the same time", "Blocking an applicant from submitting twice per round", "Detecting duplicate offerings requested in a proposal", "Stopping a reviewer scoring a proposal they are tied to"],
                correct: 3,
                explanation: "The module models ConflictOfInterest with disclosure forms, financial interests, per-call COI configuration and detection jobs, so ties between a reviewer and an applicant surface before scoring starts."
            },
            {
                q: "What is a reviewer pool used for?",
                options: ["The candidate reviewers a call may draw upon", "The budget set aside to pay reviewer invoices", "The queue of proposals awaiting any reviewer", "The archive of reviews from previous rounds"],
                correct: 0,
                explanation: "CallReviewerPool holds the reviewers available to a call, feeding reviewer suggestion, affinity scoring and proposed assignments rather than manual allocation by hand."
            },
            {
                q: "What does affinity scoring compute?",
                options: ["How much resource a project consumed last quarter", "How closely two proposals resemble one another", "How well a reviewer's expertise matches a proposal", "How likely a proposal is to be funded this round"],
                correct: 2,
                explanation: "ReviewerProposalAffinity scores reviewer-proposal fit from expertise, publications and stats — with ORCID lookups available — producing proposed assignments that a call manager can accept or override."
            },
        ],
        5: [
            {
                q: "Why does the Round deliberately hold no review policy?",
                options: ["So one call's steps apply across all its rounds", "Because reviews are configured per proposal instead", "So each round can silently override the call rules", "Because policy is fixed for the whole deployment"],
                correct: 0,
                explanation: "The split is intentional: CallWorkflowStep owns which steps run, how many reviewers, thresholds and manual versus automatic transitions, while the Round carries only scheduling. Rounds therefore stay consistent within a call."
            },
            {
                q: "What is the award response step for?",
                options: ["The funder confirming that the budget is available", "The provider confirming the resources still exist", "The reviewer confirming their score was recorded", "The applicant accepting or declining before provisioning"],
                correct: 3,
                explanation: "award_response makes acceptance explicit: the applicant confirms or declines the award before anything is provisioned, so allocations are not consumed by applicants who have moved on."
            },
            {
                q: "How do requested resources relate to the marketplace?",
                options: ["RequestedOffering and RequestedResource name real offerings", "Proposals only describe resources in free-text form", "Resources are created immediately when a draft is saved", "The marketplace is bypassed entirely for allocations"],
                correct: 0,
                explanation: "A call declares RequestedOffering entries and a proposal asks for RequestedResource rows against them, so an approved proposal turns into ordinary marketplace orders with limits attached."
            },
            {
                q: "Why does a proposal carry an OECD FOS 2007 code?",
                options: ["To select the storage backend used by the project", "To determine which currency the invoice uses", "To classify research field for reporting and matching", "To decide the VAT rate charged for the allocation"],
                correct: 2,
                explanation: "ProjectOECDFOS2007CodeMixin classifies the science domain. That classification supports funder reporting and feeds reviewer matching, which is why it lives on the proposal and propagates to the project."
            },
            {
                q: "A call disables expert review. What follows for panel review?",
                options: ["Its dependency is unmet, so the sequence must account for it", "It becomes mandatory to compensate for the gap", "The call cannot be activated under any circumstances", "It runs as normal, ignoring the missing dependency"],
                correct: 0,
                explanation: "STEP_DEPENDENCIES records that panel_review needs expert_review. Disabling a prerequisite is a configuration decision the workflow engine has to resolve — the panel has nothing to consolidate without the expert scores."
            },
        ]
    },

    // ============================================================================
    // SPECIALIZATION TIER — added 2026-08
    // ============================================================================

    's-openportal': {
        1: [
            {
                q: "What is OpenPortal?",
                options: ["A web portal skin bundled with Waldur", "An OpenStack dashboard replacement project", "A storage protocol for shared scratch volumes", "A distributed agent protocol for federated HPC"],
                correct: 3,
                explanation: "OpenPortal is an agent-based infrastructure management protocol developed by the University of Bristol's Isambard Supercomputing Centre, letting Waldur integrate with remote HPC centres.",
                learnMore: { url: "https://github.com/isambard-sc/openportal", text: "📚 OpenPortal on GitHub" }
            },
            {
                q: "Which language is OpenPortal written in?",
                options: ["Rust, with Python bindings built by maturin", "Pure Python, distributed as a wheel on PyPI", "Go, shipped as a single static binary", "Java, deployed as a servlet container app"],
                correct: 0,
                explanation: "OpenPortal is Rust with Python bindings built through maturin, which is how Waldur Mastermind can depend on it directly as a runtime requirement."
            },
            {
                q: "What sits between Waldur and a remote cluster agent?",
                options: ["An SSH tunnel opened by the operator", "A message broker hosted by the HPC centre", "The OpenPortal bridge, exposing an HTTP API", "A shared database both sides write into"],
                correct: 2,
                explanation: "The bridge is an HTTP service that queues jobs and exposes signal URLs; Waldur talks to the bridge, and the bridge relays to cluster agents at each centre."
            },
        ],
        2: [
            {
                q: "Which Waldur modules implement the integration?",
                options: ["waldur_openportal plus marketplace_openportal_remote", "Only the site agent, through a dedicated plugin", "waldur_slurm, since the backend is always SLURM", "A standalone service outside the Mastermind codebase"],
                correct: 0,
                explanation: "waldur_openportal holds the protocol integration and marketplace_openportal_remote provides the marketplace processors driving order and resource lifecycle.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/openportal-integration/", text: "📚 OpenPortal integration" }
            },
            {
                q: "Which direction does a get_usage_report instruction flow?",
                options: ["Cluster to cluster, for peer reconciliation", "Remote to Waldur — the centre reports consumption", "Waldur to remote — Waldur pushes its own figures", "Bridge to bridge, with Waldur never involved"],
                correct: 1,
                explanation: "Provisioning instructions (create_project, add_user, set_limit) flow Waldur to remote, while get_limit, get_usage_report and sync_offerings flow back from the remote centre."
            },
            {
                q: "How is a user added to a remote project?",
                options: ["By the operator creating accounts by hand", "By the cluster reading Waldur's database directly", "By emailing the HPC centre's support desk", "The add_user instruction sent through the bridge"],
                correct: 3,
                explanation: "Membership changes travel as protocol instructions — add_user and remove_user — so the remote centre's account management stays in step with Waldur's project roles."
            },
        ],
        3: [
            {
                q: "What does AwardDetails carry when a project is created?",
                options: ["The cluster's hostname and SSH configuration", "Name, dates, members, allocation and breakdown", "Only the project name and a numeric identifier", "The full text of the funding application form"],
                correct: 1,
                explanation: "Award metadata includes name and description, start and end dates, a member-to-role map, the allocation with units such as CPU-HR or GPU-HR, a component-level breakdown, and links to the award, call and renewal pages."
            },
            {
                q: "What does membership_control govern?",
                options: ["Whether members can see each other's usage", "How long a membership request stays open", "Which side may change project membership", "How many members a project may contain"],
                correct: 2,
                explanation: "membership_control is a policy on the award: open, members_only, roles_only or locked. It decides whether membership changes may originate locally at the centre or only from the awarding portal."
            },
            {
                q: "What are notes in the award metadata used for?",
                options: ["Append-only timestamped messages between portals", "Private annotations visible only to Waldur staff", "The changelog of the OpenPortal protocol itself", "Free-form text shown on the applicant's invoice"],
                correct: 0,
                explanation: "notes is an append-only, timestamped channel between the two portals, so context travels with the award instead of over email."
            },
            {
                q: "What kinds of usage can be pulled back?",
                options: ["Only storage, since compute is billed locally", "Only interactive sessions, not batch jobs", "Daily per-user compute plus storage snapshots", "Only a single aggregate figure per project"],
                correct: 2,
                explanation: "The integration pulls daily per-user CPU, GPU and node usage as well as quota and consumption snapshots per volume, with date-range filtering and component name remapping between systems."
            },
        ],
        4: [
            {
                q: "Why does component remapping exist in usage reporting?",
                options: ["Reports arrive compressed and must be expanded", "Usage must be converted between currencies", "The bridge cannot transmit long field names", "Component names differ between the two systems"],
                correct: 3,
                explanation: "A centre's component names rarely match the offering's, so reports are translated on the way in — gpu_hours, interactive_cpu_hours and project_storage line up with what the marketplace bills."
            },
            {
                q: "What does sync_offerings do?",
                options: ["Synchronises offering images to the cluster nodes", "Lets the remote centre publish offerings into Waldur", "Copies Waldur's offerings between two deployments", "Reconciles offering prices with the invoice engine"],
                correct: 1,
                explanation: "sync_offerings flows remote to Waldur, so what the centre can actually deliver is what appears in the marketplace rather than a hand-maintained duplicate."
            },
            {
                q: "How is the bridge connection configured in Helm?",
                options: ["By mounting the cluster's SSH key into the pod", "By listing every cluster hostname in the values file", "Through an environment variable on the Celery worker only", "A bridge URL and API token under waldur.openportal"],
                correct: 3,
                explanation: "The Helm values enable the module and set bridge_url and bridge_token. Cluster agents are configured at the remote centres, not in Waldur's chart."
            },
            {
                q: "Why is OpenPortal a hard dependency of Mastermind?",
                options: ["Its Python bindings are imported by the backend", "It replaces Celery for background task execution", "The frontend bundles its JavaScript client library", "It provides the database driver Mastermind uses"],
                correct: 0,
                explanation: "Mastermind pins openportal>=0.28.0 as a runtime dependency because the protocol bindings are imported directly, rather than reached over a network API from a separate service."
            },
        ],
        5: [
            {
                q: "A centre and Waldur disagree about an allocation limit.",
                options: ["Waldur overwrites the cluster without any read-back", "Limits are only ever set by hand at the centre", "set_limit pushes intent; get_limit reads back reality", "The cluster silently wins and Waldur is corrected"],
                correct: 2,
                explanation: "The instruction set is deliberately two-way: Waldur pushes intent with set_limit and set_project_quota, then reads back the effective state with get_limit. Reconciliation happens against what the centre reports."
            },
            {
                q: "Why does the award carry links to the call and renewal pages?",
                options: ["So the centre can trace an allocation to its funding", "Because the protocol requires every field to be set", "So Waldur can render them inside its own dashboard", "To let the cluster fetch the application PDF itself"],
                correct: 0,
                explanation: "Awards cross institutional boundaries, so the metadata carries provenance: which call funded it, the award record on the funding body's system, the project page, and where a renewal is requested."
            },
            {
                q: "What distinguishes OpenPortal from the site agent model?",
                options: ["It requires inbound connections into the Waldur API", "A peer-to-peer agent network versus one agent per site", "It only reports usage and cannot provision anything", "It is limited to a single HPC centre per deployment"],
                correct: 1,
                explanation: "The site agent connects one provider site to Waldur. OpenPortal is a peer-to-peer protocol linking portals and centres, with the bridge relaying instructions across institutional boundaries."
            },
            {
                q: "Which Waldur concept maps to an OpenPortal project or award?",
                options: ["An offering published in the marketplace", "A single order placed by an applicant", "An organization in the customer hierarchy", "A project with its allocation and member roles"],
                correct: 3,
                explanation: "create_project and create_award carry the members map and allocation breakdown, so a Waldur project plus its allocation is what materialises at the centre — including per-component limits."
            },
            {
                q: "Why does the bridge queue jobs rather than call the cluster inline?",
                options: ["Queued jobs are cheaper to bill than direct calls", "Remote centres are not always reachable on demand", "HTTP forbids requests that take longer than a minute", "Waldur cannot make outbound HTTP calls from a task"],
                correct: 1,
                explanation: "Institutional networks and maintenance windows mean a centre may be unavailable when an order arrives. Queuing with signal URLs lets the instruction complete when the far side is reachable again."
            },
        ]
    },

    's-e2e-testing': {
        1: [
            {
                q: "What drives Waldur's end-to-end UI tests?",
                options: ["Cypress with tests authored in TypeScript", "A hand-written script clicking through curl", "Playwright, driven from pytest in Python", "Selenium WebDriver with a Java test runner"],
                correct: 2,
                explanation: "waldur-integration-testing uses Playwright through pytest and pytest-playwright, so UI flows and API assertions live in the same Python test."
            },
            {
                q: "What does the E2E suite actually verify?",
                options: ["That UI actions propagate through the API to backends", "That every React component renders in isolation", "That the OpenAPI schema validates against itself", "That database migrations apply in the right order"],
                correct: 0,
                explanation: "The suite drives Homeport in a browser and checks the effect reaches Mastermind and the emulated backends — the layer unit tests and component tests cannot cover."
            },
            {
                q: "How is the whole stack brought up for a test run?",
                options: ["The tests run against the production deployment", "A single container holds the entire platform", "Docker Compose starts every service together", "Each developer installs the services by hand"],
                correct: 2,
                explanation: "docker-compose.e2e.yml starts Mastermind API and worker, Homeport, PostgreSQL, RabbitMQ, the OpenStack and SLURM emulators, and the Playwright runner. ./run_e2e_docker.sh is the entry point.",
                learnMore: { url: "https://docs.waldur.com/latest/admin-guide/providers/site-agent/docs/e2e-testing/", text: "📚 E2E testing" }
            },
        ],
        2: [
            {
                q: "Why emulate OpenStack instead of using a real cloud?",
                options: ["The OpenStack API is not publicly documented", "Real clouds refuse automated test traffic", "Emulators are the only way to test error paths", "A real deployment is too heavy for every CI run"],
                correct: 3,
                explanation: "The emulator answers Keystone, Nova, Cinder, Glance, Neutron, Octavia, Placement and Swift on their usual ports, so provisioning flows can be exercised in seconds without a real cloud."
            },
            {
                q: "What is a page object model in this suite?",
                options: ["A database record naming each tested page", "A class wrapping one screen's locators and actions", "A JSON fixture describing the page's DOM tree", "A screenshot compared against a stored baseline"],
                correct: 1,
                explanation: "tests/pages mirrors the UI navigation hierarchy, with reusable component wrappers (table, modal, select, calendar, toolbar) underneath. Tests read as user intent rather than as CSS selectors."
            },
            {
                q: "What do conftest fixtures like logged_in_page provide?",
                options: ["A mocked API returning canned JSON responses", "A fresh database seeded for each test module", "A recorded video of the previous test run", "A browser page already authenticated for the test"],
                correct: 3,
                explanation: "Fixtures such as homeport_url, logged_in_page and admin_page hand the test an authenticated starting point, so each test spends its lines on the behaviour it actually checks."
            },
        ],
        3: [
            {
                q: "What can the SLURM emulator do that a real cluster cannot?",
                options: ["Travel forward in time to trigger decay and limits", "Run jobs faster than the underlying hardware", "Report usage before any job has been submitted", "Guarantee that every job succeeds on first try"],
                correct: 0,
                explanation: "The emulator advances time by days, months or quarters so fairshare decay, quarterly periodic limits with carryover, and QoS threshold switching can be validated in a single test run."
            },
            {
                q: "What is the OpenStack emulator's scenarios API for?",
                options: ["Generating load against the emulated services", "Describing which services should start up", "Injecting failures to exercise error handling", "Recording API calls for later playback"],
                correct: 2,
                explanation: "A failure injection API lets a test make the emulated cloud misbehave on purpose, so Waldur's retry and erred-state handling is exercised rather than assumed."
            },
            {
                q: "Why does the suite also run a real ansible-playbook?",
                options: ["To verify the generated Ansible collection works", "To provision the test stack before tests start", "To configure the emulators between test cases", "To deploy the built images to a staging cluster"],
                correct: 0,
                explanation: "A non-UI layer marked with the ansible marker runs a real playbook against the Mastermind API, checking that the generated Waldur Ansible collection behaves — for example that facts modules follow API pagination."
            },
            {
                q: "How does documentation benefit from this suite?",
                options: ["The suite publishes the docs site after passing", "Screenshots are generated by a dedicated test run", "Docs are written automatically from test names", "Each test failure opens a documentation issue"],
                correct: 1,
                explanation: "test_docs_screenshots.py drives the real UI to capture the images used in the user guide, so screenshots track the interface instead of drifting away from it."
            },
        ],
        4: [
            {
                q: "Repeated failed logins start failing legitimately. Why?",
                options: ["Playwright throttles repeated form submissions", "The session cookie expired between the tests", "RabbitMQ dropped the authentication events", "django-axes has locked the account out"],
                correct: 3,
                explanation: "django-axes lockout is a classic E2E pitfall: a test that deliberately submits bad credentials can lock the account for the tests that follow, so lockout state has to be reset between runs."
            },
            {
                q: "Why can the stack be slow to start on Apple Silicon?",
                options: ["ARM builds recompile Python from source first", "An amd64 image runs emulated under QEMU", "Docker Desktop limits containers to one core", "The emulators are compiled at container start"],
                correct: 1,
                explanation: "Images built for amd64 run under QEMU emulation on ARM Macs, which slows startup dramatically. Knowing the cause avoids chasing a phantom timeout in the test code."
            },
            {
                q: "How do you run the suite without Docker?",
                options: ["Point the tests at a shared staging environment", "Run each service manually in separate terminals", "Init the local stack, then start it with honcho", "It is impossible; Docker is a hard requirement"],
                correct: 2,
                explanation: "dev/init_e2e.sh prepares a local stack and honcho starts it from Procfile.e2e; the tests then run against WALDUR_HOMEPORT_URL and WALDUR_API_URL. Useful for debugging with --headed and video capture."
            },
            {
                q: "A test is flaky because the table renders after assertion.",
                options: ["Wait for the expected state through the locator API", "Insert a fixed sleep long enough to be safe", "Retry the whole test until it happens to pass", "Disable the assertion and check it by hand"],
                correct: 0,
                explanation: "Playwright's locators auto-wait for the state being asserted, which is why component wrappers encapsulate them. Fixed sleeps make suites slow and still flaky on a loaded CI runner."
            },
        ],
        5: [
            {
                q: "Why do emulators beat mocking the backend clients?",
                options: ["They remove the need to write assertions at all", "They guarantee the code has no logic errors", "They exercise the real client libraries end to end", "They are faster than in-process mock objects"],
                correct: 2,
                explanation: "A mock encodes what you believe the API does. An emulator speaks the protocol, so the real client library, its serialization and its error handling are all in the path being tested."
            },
            {
                q: "What is checkpoint and restore in the SLURM emulator for?",
                options: ["Backing up production accounting data safely", "Migrating jobs between two emulator instances", "Compressing the emulator's state on disk", "Replaying a scenario from a known state repeatedly"],
                correct: 3,
                explanation: "Saving and restoring state makes a long time-travel scenario repeatable: a test can return to the same point instead of rebuilding months of usage history for every assertion."
            },
            {
                q: "Where should a reusable UI abstraction live?",
                options: ["In the Homeport repository, next to the UI", "In components, below the page object models", "Copied into each test file that needs it", "In conftest.py, as another pytest fixture"],
                correct: 1,
                explanation: "tests/components holds the lowest-level wrappers — table, modal, select, calendar, toolbar — that page objects build on. Keeping them there stops selector knowledge leaking into individual tests."
            },
            {
                q: "Homeport ships a UI change that breaks E2E tests. Whose problem?",
                options: ["The E2E repository alone, on its own schedule later", "Nobody's, because E2E failures are advisory only", "The docs team, who own the screenshots involved", "The pipeline surfaces it: homeport triggers the run"],
                correct: 3,
                explanation: "Homeport triggers the integration-testing pipeline downstream, so a UI change that breaks a flow shows up against the change that caused it rather than days later."
            },
            {
                q: "Why run the emulators' status dashboards during a run?",
                options: ["To see backend state while a test is failing", "To replace the assertions inside the tests", "To keep the emulator processes from idling out", "To collect metrics for the billing engine"],
                correct: 0,
                explanation: "Both emulators expose a web dashboard. When a provisioning test fails it is far quicker to look at what the emulated cloud or cluster actually holds than to infer it from the UI alone."
            },
        ]
    }
};

export function getQuestionKey(skillId: string, level: number, question: Question): string | null {
    const skillQuestions = questions[skillId]
    if (!skillQuestions || !skillQuestions[level]) return null
    const index = skillQuestions[level].indexOf(question)
    return `${skillId}:${level}:${index}`
}

export function getAvailableLevels(skillId: string): number[] {
    const skillQuestions = questions[skillId]
    if (!skillQuestions) return []
    return Object.keys(skillQuestions)
        .map(Number)
        .filter(level => skillQuestions[level] && skillQuestions[level].length > 0)
        .sort((a, b) => a - b)
}

export function hasQuestions(skillId: string): boolean {
    const skillQuestions = questions[skillId]
    if (!skillQuestions) return false
    return Object.values(skillQuestions).some(levelQ => levelQ && levelQ.length > 0)
}
