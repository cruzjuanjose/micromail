#!/bin/bash

mkdir -p config
touch config/default.json
touch config/production.json
touch config/development.json
touch config/test.json

mkdir -p src/v1/controllers
touch src/v1/controllers/email.controller.js
touch src/v1/controllers/file.controller.js

mkdir -p src/v1/models
touch src/v1/models/email.model.js
touch src/v1/models/file.model.js

mkdir -p src/v1/routes
touch src/v1/routes/email.route.js
touch src/v1/routes/file.route.js

mkdir -p src/v1/services
touch src/v1/services/email.service.js
touch src/v1/services/file.service.js

touch src/app.js

mkdir -p tests/controllers
touch tests/controllers/email.controller.test.js
touch tests/controllers/file.controller.test.js

mkdir -p tests/models
touch tests/models/email.model.test.js
touch tests/models/file.model.test.js

mkdir -p tests/routes
touch tests/routes/email.route.test.js
touch tests/routes/file.route.test.js

mkdir -p tests/services
touch tests/services/email.service.test.js
touch tests/services/file.service.test.js

touch package.json
touch package-lock.json
touch .gitignore
touch .env