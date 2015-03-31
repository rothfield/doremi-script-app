echo "running boot cljs -O advanced"
boot cljs -O advanced
echo "adding async to index.html"
sed  -- 's/app.js\"/app.js\" async/g' ./resources/index.html > target/index.html
echo "adding manifest"
sed  -i 's/^<html /<html manifest="manifest.appcache" /' ./target/index.html
# manifest="manifest.appcache"
echo "bumping version of manifest"
sed  -- "s/^#version.*$/#version `date`/" ./resources/manifest.appcache > target/manifest.appcache

