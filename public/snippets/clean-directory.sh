rm bundle.js
mkdir -p client/js/test
mkdir -p public/js
mkdir public/css

mv client/test_multiplier.js client/js/test/multiplier.test.js
mv client/app.js client/js
mv client/bundle.js public/js
mv server/server.js ./index.js
rmdir server
mv client/styles.css public/css
mv client/index.html public

#I think the below was intended but doesn't match the "After"
mv client/multiplier.js client/js