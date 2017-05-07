$ mv server/server.js ./index.js
$ mkdir -p public/js
$ mkdir public/css
$ mv bundle.js public/js
$ rmdir server
$ cd client
$ mkdir -p js/test
$ mv app.js js
$ mv test_multiplier.js js/test/multiplier.test.js
$ mv styles.css ../public/css
$ mv index.html ../public
$ rm bundle.js
$ rm multiplier.js 

*note: not sure if multiplier.js was intended to be removed or merged