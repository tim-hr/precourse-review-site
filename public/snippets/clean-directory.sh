# TODO: list your commands here, one per line.

rm bundle.js

mkdir -p client/js/test
mv client/test_multiplier.js !$/multiplier_test.js

mv client/app.js client/js

mkdir -p public/js
mv client/bundle.js !$

mv client/index.html public

rm client/multiplier.js

mkdir public/css
mv client/styles.css !$

rm -rf server

touch index.js

