mkdir client/js/test   
mkdir public/css
mkdir public/js
mv bundle.js public/js/bundle.js  
mv client/app.js client/js/app.js
rm client/bundle.js
mv client/index.html public
rm client/multiplier.js
mv client/styles.css public/css
mv client/test_multiplier.js client/test/multiplier.test.js
mv server/server.js index.js
rm server