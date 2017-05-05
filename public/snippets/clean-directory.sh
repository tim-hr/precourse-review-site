cd client
mkdir js
mv app.js js/app.js
cd js
mkdir test
mv test_multiplier js/test/multiplier.test.js
touch index.js
mkdir public
mkdir css
mkdir js
mv bundle.js public/js/bundle.js
mv client/styles.css public/css/styles.css
rm client/multiplier.js
