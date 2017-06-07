# TODO: list your commands here, one per line.
rm -rf server
mkdir public
mkdir public/css
mkdir public/js
mv client/index.html public
mv client/styles.css public/css
mv bundle.js public/js
cd client
mkdir js
mv app.js js
mkdir js/test
mv test_multiplier.js js/test/multiplier.test.js
rm bundle.js
rm multiplier.js

