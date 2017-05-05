mkdir client/js
mkdir client/js/test
mkdir public
mkdir public/css
mkdir public/js
rm bundle.js
mv client/test_multiplier.js client/js/test/multiplier.test.js
mv client/app.js client/js
mv client/bundle.js public/js
mv client/index.html public
mv client/styles.css public/css
mv server/server.js index.js
rmdir server
rm client/multiplier.js
