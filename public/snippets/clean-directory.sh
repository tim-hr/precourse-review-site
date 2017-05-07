# TODO: list your commands here, one per line.

# clean client
mkdir client/js
mkdir client/js/test

mv client/app.js client/js
mv client/test_multiplier.js client/js/test
rn client/js/test/test_multiplier.js client/js/test/test.multiplier.js

rm client/bundle.js
rm client/multiplier.js

# create index.js
mkdir public
mkdir public/css
mkdir public/js
mv server/server.js .
rm -r server
rn server.js index.js

# clean public 
mv client/index.html server
mv bundle.js public/js
mv client/styles.css public/css


