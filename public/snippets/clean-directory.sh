# TODO: list your commands here, one per line.

mkdir -p client/js/test
mkdir -p public/js
mkdir public/css
rm bundle.js
rm server/server.js
rmdir server
mv client/app.js client/js/
mv client/bundle.js public/js/
mv client/index.html public/
mv client/multiplier.js index.js
mv client/styles.css public/css/
mv client/test_multiplier.js client/js/test/multiplier.test.js