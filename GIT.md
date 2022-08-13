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

# Merge a test branch to master
git checkout master
git pull origin master
git merge test
git push origin master

 ```