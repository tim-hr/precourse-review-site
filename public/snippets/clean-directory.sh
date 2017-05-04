rm bundle.js
mkdir client/js
mkdir client/js/test
mkdir public
mkdir public/css
mkdir public/js
cd client
mv app.js js
mv test_multiplier.js js/test
cd ..
mv server/server.js index.js
rmdir server
mv client/styles.css public/css
mv client/index.html public
mv client/bundle.js public/js
