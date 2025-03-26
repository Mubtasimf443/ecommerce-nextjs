git add .;
read -p "Commit Name : " message;
git commit -m "$message";
git push -u origin main;