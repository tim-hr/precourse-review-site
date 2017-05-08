
touch index.js
rm bundle.js 
rm -r server
rmdir server
mkdir public
mkdir public/js public/css client/js client/js/test
mv client/app.js client/js
mv client/test_multiplier.js client/js/test/multiplier.test.js
mv client/bundle.js public/js
mv client/index.html public/
rm client/multiplier.js
mv client/styles.css public/css

