# TODO: list your commands here, one per line.
mkdir client/js client/js/test
mkdir public public/css public/js
mv server/server.js index.js
rm -r server
rm client/bundle.js
rm client/multiplier.js
mv bundle.js public/js
mv client/app.js client/js
mv client/index.html public/
mv client/styles.css public/css
mv client/test_multiplier.js client/js/test/multiplier.test.js
