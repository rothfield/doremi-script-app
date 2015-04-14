echo "running boot cljs -O advanced"
echo "minifying application.css and doremi.css in resources/css. Uses npm minify command"
echo "To install: sudo npm install -g  minifier"
cd resources/css
minify application.css doremi.css
cd -
boot cljs -O advanced
echo "combining css files into target/css/app.css"
cat ./resources/css/bootstrap.min.css ./resources/css/doremi.min.css ./resources/css/application.min.css > target/css/app.css
echo "adding async to script tag for app.js in index.html"
sed  -- 's/app.js\"/app.js\" async/g' ./resources/index.html > target/index.html
echo "adding manifest to html tag in index.html"
sed  -i 's/^<html /<html manifest="manifest.appcache" /' ./target/index.html
echo "bumping version of manifest.appcache"
sed  -- "s/^#version.*$/#version `date`/" ./resources/manifest.appcache > target/manifest.appcache
echo "to test, cd target and start http server. I use node's http-server"
