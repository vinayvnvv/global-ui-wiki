set -x
# Development Directory

#vars
Green='\033[0;32m'        # Green
NC='\e[0m' # No Color

cp ../ng2UI/css/main.css src/assets/


ng build --prod


#cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/



printf "${Green}Coping Build Directory to Deployment Folder \n ${NC}"

cp -a dist/ ~/Documents/global-ui/
# changing directory to $ngUIWikiDeploy
cd ../global-ui
printf "${Green}Deploying on Remote Server \n ${NC}"
git status
git add .
git commit -m "deploy changes"
git push heroku master

