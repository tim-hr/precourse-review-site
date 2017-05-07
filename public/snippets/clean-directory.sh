# TODO: list your commands here, one per line.
mkdir public
cd public
mkdir css
mkdir js
cd ..
mv client/styles.css public/css/styles.css
mv client/index.html pubblic/index.html
mv client/bundle.js public/js/bundle.js

mkdir -p client/js/test
mv client/app.js client/js/app.js
rm client/multiplier.js
mv client/test_multiplier.js client/test/multiplier.test.js
