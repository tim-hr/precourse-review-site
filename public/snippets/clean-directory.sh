# TODO: list your commands here, one per line.

rm bundle.js
mkdir public
cd public
mkdir css
mkdir js
cd ..
cd client
rm multiplier.js
mv styles.css ../public/css
mv bundle.js ../public/js
mv index.html ../public
mv test_multiplier.js multiplier.test.js
mkdir js
mv multiplier.test.js js
mv app.js js
cd js
mkdir test
mv multipler.test.js test
cd ../..
touch index.js
