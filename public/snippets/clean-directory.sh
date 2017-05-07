# TODO: list your commands here, one per line.
mkdir public
mkdir public/css
mkdir public/js
rm public/server/server.js
rmdir public/server
mv bundle.js public/js
touch index.js
cd client
mkdir js
mkdir js/test
mv test_multiplier.js multiplier.test.js
mv multiplier.test.js js/test
mv app.js js
rm bundle.js
mv index.html ../public
rm multiplier.js
mv styles.css ../public/css
