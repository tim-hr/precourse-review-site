#commands
mkdir ./client/js
mkdir ./client/js/test
rm bundle.js
mv ./client/app.js ./client/js/app.js
mv ./client/test_multiplier.js ./client/js/test/multiplier.test.js
mv ./client/multiplier.js ./client/js/multiplier.js
mv ./server/server.js ./index.js
mv ./server ./public
mkdir ./public/css
mkdir ./public/js
mv ./client/styles.css ./public/css/styles.css
mv ./client/index.html ./public/index.html
mv ./client/bundle.js ./public/js/bundle.js