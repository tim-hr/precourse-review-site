mkdir client/js
mkdir client/js/test
mkdir public
mkdir public/css
mkdir public/js
rm bundle.js
mv client/app.js client/js/app.js
mv client/test_multiplier.js client/js/test/multiplier.test.js
touch index.js
mv client/styles.css public/css/styles.css
mv client/index.html public/index.html
mv client/bundle.js public/js/bundle.js
rm -r server
