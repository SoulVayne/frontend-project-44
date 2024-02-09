run:
	node bin/brain-games.js

publish:
	npm publish --dry-run

install-deps:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .