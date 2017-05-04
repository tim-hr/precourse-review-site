mkdir -p client/js/test
mv client/app.js client/js
mv client/test_multiplier.js client/js/test/multiplier.test.js
mv server public
mv public/server.js index.js
mkdir public/css
touch public/css/styles.css
mv client/index.html public
mkdir public/js
touch public/js/bundle.js


