mkdir public
mkdir public/css
mkdir public/js
mkdir client/js
mkdir client/js/test/

rm bundle.js

mv ./client/*.* ./
rm multiplier.js
rm -rf server

mv app.js ./client/js/
mv bundle.js ./public/js/
mv index.html ./public
mv styles.css ./public/css/
mv test_multiplier.js ./client/js/test/muliplier.test.js
