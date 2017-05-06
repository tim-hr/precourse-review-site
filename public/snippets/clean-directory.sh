# TODO: list your commands here, one per line.
mkdir client/js
mkdir client/js/test
mkdir public/css
mkdir public/js
mkdir index.js

mv client/app.js client/js
mv client/multiplier.js client/js/test
mv client/index.html public
mv client/styles.css public/css
mv client/bundle.js public/js

rm -r server
rm -r client/test_multiplier.js
rm -r bundle.js


