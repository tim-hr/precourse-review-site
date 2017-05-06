# Assuming you're at the root of the project...

rm bundle.js client/multiplier.js
mv server/server.js index.js
rm -rf server
mkdir client/js/test public/css public/js
mv client/app.js client/js
mv client/bundle.js public/js
mv client/index.html public
mv client/styles.css public/css
mv client/test_multiplier.js client/js/test/multiplier.test.js
