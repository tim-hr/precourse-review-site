# TODO: list your commands here, one per line.
mkdir -p client/js/test
mv client/app.js client/js/
mv client/test_multiplier.js client/js/test/multiplier.test.js
mkdir -p public/css
mv client/styles.css public/css/
mkdir public/js
mv bundle.js public/js/
mv client/index.html public/
mv server/server.js ./index.js
rm server
