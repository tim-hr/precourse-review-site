mkdir client/js
mv client/app.js client/js
mkdir client/js/test

mv client/test_multiplier.js client/multiplier.test.js
mv client/multiplier.test.js client/js/test

rm client/bundle.js
rm client/multiplier.js

rm server/server.js
rm server

touch index.js
mkdir public
mkdir public/css
mkdir public/js

mv client/index.html public
mv client/styles.css public/css
mv bundle.js public/js



