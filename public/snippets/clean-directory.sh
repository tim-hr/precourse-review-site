mkdir client/js
mkdir client/js/test
mkdir public
mkdir public/css
mkdir public/js
mv server/server.js .
rmdir server
rm client/multiplier.js
mv client/app.js client/js
mv client/test_multiplier.js client/js/test
mv client/js/test/test_multiplier.js client/js/test/multiplier.test.js
mv server.js index.js
touch public/css/styles.css
mv client/index.html public/index.html
mv client/bundle.js public/js