 ```bash
# get status
git status

# Add all files to staging
git add .

 # Add one or more files to staging area
 git commit -m "Message"

 # Creates a new branch and switch to that branch
 git checkout -b initial-setup

 # Push a branch
 git push -u origin initial-setup

# This command discards the most recent stashed changeset.
 git stash drop 

# Merge a test branch to main
# Suppose you are working in test branch and want to commit it to main branch, follow these steps
git add .
git commit -m "Final commit to test"
git push 

git checkout main
git pull origin main
git merge test
git push origin main

# Pull main branch to test
git checkout test    # move on your branch (make sure it exists)
git fetch origin          # fetch all changes
git pull origin main    # pull changes from the origin remote, master branch and merge them into my_branch
git push origin test # push my_branch

 ```