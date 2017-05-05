# TODO: list your commands here, one per line.
vim .gitignore
  i: bundle.js
  esc
  :wq


mkdir client/js
mv client/app.js client/js
mkdir client/js/test
mv test_multiplier.js client/js/test/multiplier.test.js

mkdir public
mkdir public/js
mkdir public/css

mv client/bundle.js public/js
mv client/index.html public
mv client/style.css public/css
touch index.js


