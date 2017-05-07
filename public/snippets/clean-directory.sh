mkdir client/js
mv client/app.js client/js/app.js 
mkdir client/js/test
mv client/test_multiplier.js client/js/test/multiplier.test.js
mkdir public
mkdir public/css
mv client/styles.css public/css/styles.css
mv client/index.html public/index.html
mkdir public/js
mv client/bundle.js public/js/bundle.js
mv server/server.js index.js 
rm -R server
rm bundle.js
