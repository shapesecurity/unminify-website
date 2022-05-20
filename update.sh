set -euxo pipefail
for module in unminify; do
  echo 'window.'${module}' = require("'${module}'");' | $(npm bin)/esbuild --bundle | ./node_modules/.bin/terser --compress --mangle -o js/${module}.js
done
