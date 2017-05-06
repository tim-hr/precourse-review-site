# TODO: list your commands here, one per line.
mkdir client/js
mkdir client/js/test
mv client/app.js client/js/app.js
mv client/multiplier.test.js client/js/test/multiplier.test.js
mkdir public
mkdir public/js
mkdir public/css
mv client/index.html public/index.html
mv client/styles.css public/css/styles.css
mv client/bundle.js public/js/bundle.js
rm server/server.js
rm bundle.js