# TODO: list your commands here, one per line.
mkdir public
mkdir public/css
mkdir public/js
mkdir client/js/test
mv server/server.js ../
mv server.js index.js
rm -r server
mv bundle.js public/js 
mv client/index.html public
mv client/styles.css public/css
mv client/test_multiplier.js client/multiplier.test.js
mv client/multiplier.test.js client/js/test
mv client/app.js client/js
rm bundle.js
rm multiplier.js




