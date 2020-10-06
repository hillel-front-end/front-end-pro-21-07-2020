# GIT

1. Что такое git и для чего был придуман?

2. Как работать с GIT?
 * GUI (Graphic User Interface)
    - Специализированные программы
    - IDE
  * CLI (Command Line Interface)
    - Консоль (Bash, .etc)

3. Основы
  * Remote repository
    - GitHub
    - GitLab
    - BitBucket
  * Working directory
    - states of working directory
  * Commit. Commit Hash

4. States of working directory
  * No changes
  * Any file added (not indexed yet)
  * Change are indexed (git knows about it)
  * Do commit (prepare code to push)
    - commit is saved locally
  * Push

5. Working with Console
  * git clone
  * Create new file
  * git status
    - file is not tracked
  * git add <NEW FILE>
  * git status
    - file is already tracked
  * git commit (git commit -m "Message")
  * git status
  * git push
  * .gitignore
  * create changes on GitHub
  * git pull
  * resolve conflict

6. How to reset files
  * Create <NEW FILE>
  * Create <NEW FILE2>
  * Change old file
  * git add <NEW FILE>
  * git add <NEW FILE2>
  * git status
    - new files are tracked
    - old file is modified
  * git reset
    - all reset all new files
    - git reset HEAD <FILENAME>
      will reset only this file


7. Workflows
  * Push to master branch
  * Branches
  * Forks


8. How to work with branches
  * You are on master now
  * git checkout -b <feature-name>
  * Do you changes here
  * Commit 
  * git push origin <feature-name>
  * Create pull request 
    - GitLub, Gitlab
  * When PR is approved and no conflicts
    - git checkout master
    - git merge <feature-name>
  

9. How to work with forks
  * What fork is?
  * Create fork
  * Clone fork locally (make working directory)
    - you are on master branch
  * git remote -v
    - only origin is here
  * git remote add upstream <url>
    - origin and upstream are here
  * git pull upstream master

10. How to work in your fork
  * Create branch
  * Work hard
  * Commit and push to the current branch (we are still on the fork)
  * Make Pull Request to original repository 

11. Tags
  * Mark any important event
  * Tab is a label attached to some commit
  * There could be also an attached message
  For instance: 'v0.0.1'

  * git tag // show all tags
  * git tag -a 'v0.0.1' -m 'bugs were fixed'
  * git push --tags

12. Revert (откаты)
  * Before anything commited
  * After you commit
  * After you push

13. How to remove all not commited changes
  * Create <new file>
  * Change <old file>
  * git add <new file>
  * git status
    - new file is tracked
    - old file is modified
  * git checkout .

14. How to change not pushed commits
  * Do changes and commit 
  * git log
    - will see created commit
  * git reset --soft HEAD^1
    - cancel commit but saves changes
  * git log
  * Do new changes and commit
  * git reset --hard HEAD^1
    - cancel commit and remove changes

15. How to change pushed commits
  * Create commit which revert previous one
    - git revert HEAD
    - git push
  * Hard reset previous commits (be carefully)
    - git reset HEAD~2 --hard
    - Change what you need to
    - git commit
    * git push origin <branch> --force


16. Best practices
  * Commit early and often
  * Don't change published history
  * Useful commit messages
  * Branch name consists of ticked name (id)


17. In addition
  * .gitignore
  * README.md
