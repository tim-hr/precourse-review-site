# TODO: list your commands here, one per line.

mkdir -p client/js
mv client/app.js client/js/app.js

rm client/bundle.js

mkdir public
mv client/index.html public/index.html

rm client/multiplier.js

mkdir -p public/css
mv client/styles.css public/css/styles.css

mkdir -p client/js/test
mv client/test_multiplier.js client/js/test/multiplier.test.js

mv server/server.js index.js 

mkdir -p public/js
mv bundle.js public/js/

