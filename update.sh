set -x
for module in unminify; do
  echo 'window.'${module}' = require("'${module}'");' | ./node_modules/.bin/browserify - | ./node_modules/.bin/uglifyjs --compress --mangle -o js/${module}.js
done