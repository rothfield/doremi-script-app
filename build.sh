#echo "running git pull"
#git pull
echo "cleaning target"
rm -rf target
echo "running boot cljs -O advanced"
boot cljs -O advanced
echo "minifying application.css and doremi.css in target/css.
#Uses npm minify command"
# "To install: sudo npm install -g  minifier"
cd ./target/css
minify application.css doremi.css
echo "combining css files into app.min.css"
cat bootstrap.min.css doremi.min.css application.min.css > app.min.css
cd ..
echo "adding async to script tag for app.js in index.html"
sed -i 's/app.js\"/app.js\" async/g' index.html 
echo "adding manifest to html tag in index.html"
echo "deleting stylesheet tags"
sed -i 's#<link rel=\"stylesheet\".*># <!-- & --> #' index.html
echo "adding stylesheet css/app.min.css"
sed -i 's#</body># </body>\n<link rel=\"stylesheet\" href=\"css/app.min.css\">#' index.html
sed  -i 's/^<html /<html manifest="manifest.appcache" /' index.html
echo "bumping version of manifest.appcache"
sed  -i "s/^#version.*$/#version `date`/" manifest.appcache
echo "to test, cd target and start http server. I use node's http-server"
cd ..
