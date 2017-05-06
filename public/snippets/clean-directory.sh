mv server/server.js index.js;
mv server public;
mkdir public/css;
mkdir public/js;
rm bundle.js
cd client;
mkdir js;
mkdir js/test;
mv app.js js
mv test_multiplier.js js/test/multiplier.test.js;
mv index.html ../public;
mv bundle.js ../public/js;
mv styles.css ../public/css;
rm multiplier.js;