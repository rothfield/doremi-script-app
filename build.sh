echo "NEEDS WORK"
exit
# TODO: use node minify to minify in resources/css
echo "running boot cljs -O advanced"
cd resources/css
minify application.css doremi.css
cd -
boot cljs -O advanced
echo "combining css files into target/app.css"
cat ./resources/css/bootstrap.min.css ./resources/css/doremi.min.css ./resources/css/application.min.css > target/app.css
echo "adding async to index.html"
sed  -- 's/app.js\"/app.js\" async/g' ./resources/index.html > target/index.html
echo "adding manifest"
sed  -i 's/^<html /<html manifest="manifest.appcache" /' ./target/index.html
# manifest="manifest.appcache"
echo "bumping version of manifest"
sed  -- "s/^#version.*$/#version `date`/" ./resources/manifest.appcache > target/manifest.appcache

