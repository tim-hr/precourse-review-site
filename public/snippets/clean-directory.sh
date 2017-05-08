mkdir -p public/css
mkdir public/js
mkdir -p client/js/test

mv client/index.html public/
mv client/styles.css publics/css/
mv client/bundle.js public/js/
mv server/server.js index.js
mv client/app.js client/js/
mv client/test_multiplier.js client/js/test/multiplier.test.js

rm bundle.js
rmdir server


