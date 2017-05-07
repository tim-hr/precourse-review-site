mkdir public
mkdir public/css
mv client/style.css public/css
mv client index/html ../
mkdir public/js
mv bundle public/js
del server

mkdir client/js
mkdir client/js/test

mv client/multiplier.js client/js/test
mv client/app.js client/js
del bundle.js



