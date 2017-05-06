# TODO: list your commands here, one per line.
mkdir -p public/css
mkdir public/js
mv bundle.js public/js
mv client/index.html public
mv client/styles.css public/css
mkdir client/js
mkdir client/js/test
mv client/app.js client/js
mv client/test_multiplier.js client/js/test/multiplier.test.js
touch index.js
rm client/multipler.js
rm client/bundle.js
rm -r server
