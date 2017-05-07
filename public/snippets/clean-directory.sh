
mkdir client/js
mkdir client/js/test
touch index.js
rm bundle.js
mv server public
mkdir public/css
mkdir public/js
mv client/app.js client/js
mv client/bundle.js public/js
mv client/index.html public
rm client/multiplier.js
mv client/styles.css public/css
mv client/test_multiplier.js client/js/test/multiplier.test.js
