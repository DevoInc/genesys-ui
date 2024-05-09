#!/usr/bin/env bash

set -euo pipefail

echo 'Applying fix to Styled-Components types...'

os=$(uname -s)

case $os in
Darwin)
	sed -i '' 's/^interface IStyledComponentBase/export interface IStyledComponentBase/g' node_modules/styled-components/dist/types.d.ts
	;;
Linux)
	sed -i 's/^interface IStyledComponentBase/export interface IStyledComponentBase/g' node_modules/styled-components/dist/types.d.ts
	;;
esac
