node ../../node_modules/dependency-cruiser/bin/dependency-cruise.js -T json -f depcruise.json -S "node_modules\/@devo[^/]*\/[^\/]+\/" -x "node_modules\/(?!@devo)" src/index.ts
node ../../node_modules/dependency-cruiser/bin/depcruise-fmt.js -T dot depcruise.json | node ../../dot.mjs > depcruise.svg
cat depcruise.svg | node ../../node_modules/dependency-cruiser/bin/wrap-stream-in-html.js > depcruise.html
