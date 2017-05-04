' Off the top of my head, I do not know how to do move files. 
That being the case, I spent 5 minutes googling to find out.'

cd client
mkdir js
mv app.js js
cd js
mkdir test
cd .. 
mv "multiplier.js" "multiplier.test.js"
mv multiplier.test.js js/test
cd ..
mkdir public
mkdir public/css
mkdir public/js
mv client/styles.css public/css
mv client/bundle.js public/js
mv index.html public



