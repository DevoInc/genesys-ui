PACKAGE=`echo $1 | rev | cut -d/ -f1 | rev`
npx depcruise --no-config -T json -f depcruise.json -S 3 -x "node_modules\/(?!@devo)" src/index.ts
npx depcruise-fmt -T dot depcruise.json | node ../../dot.mjs > ../../.storybook/assets/images/depcruise-simple-$PACKAGE.svg
rm depcruise.json
npx depcruise --no-config -T json -f depcruise.json -S "node_modules\/@devo[^/]*\/[^\/]+\/" -x "node_modules\/(?!@devo)" src/index.ts
npx depcruise-fmt -T dot depcruise.json | node ../../dot.mjs > ../../.storybook/assets/images/depcruise-extended-$PACKAGE.svg
rm depcruise.json
