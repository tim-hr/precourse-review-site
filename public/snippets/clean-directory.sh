mkdir ./client/js
mkdir ./client/js/test
mkdir ./public
mkdir ./public/css
mkdir ./public/js
rm -rf ./server
mv ./bundle.js ./public/js
mv ./client/index.html ./public
mv ./client/styles.css ./public/css
touch ./index.js
mv ./client/test_multiplier.js ./client/js/test/multiplier.test.js
mv ./client/app.js ./client/js
rm ./client/bundle.js


