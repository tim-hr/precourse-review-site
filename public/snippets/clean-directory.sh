# TODO: list your commands here, one per line.
mkdir client/js
mkdir client/js/test
mkdir public
mkdir public/css
mkdir public/js
mv client/app.js client/js
rm client/bundle.js
mv client/index.html public
rm client/multiplier.js
mv client/style.css public/css
mv client/test_multiplier.js client/js/test/multiplier.test.js
mv server/server.js .
mv server.js index.js
mv bundle.js public/js
rmdir server