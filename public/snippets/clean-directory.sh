mkdir -p public/css

mkdir public/js

mkdir -p client/js/test

mv client/app.js client/js/app.js

rm client/bundle.js

mv bundle.js public/js/bundle.js

mv client/index.html public/index.html

rm client/multiplier.js

mv client/style.css public/css/style.css

mv client/test_multiplier.js client/js/test/multiplier.test.js

mv server/server.js index.js

rm -rf server