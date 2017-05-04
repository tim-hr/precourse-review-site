# TODO: list your commands here, one per line.
mkdir client/js
mv client/app.js client/js
mkdir client/js/test
mv client/test_multiplier.js client/multiplier.test.js
mv client/multiplier.test.js client/js/test
rm client/bundle.js
mkdir public
mv client/index.html ../before/public
mkdir public/css
mkdir public/js
mv bundle.js public/js
mv client/styles.css ../before/public/css
mv client/multiplier.js ../before
mv multiplier.js index.js