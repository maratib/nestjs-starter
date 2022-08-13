# TypeORM setup

```bash
# Add dependencies
yarn add @nestjs/typeorm typeorm mysql2 bcrypt @hapi/joi helmet
```

## Adding TypeORM CLI
```javascript 
// Add to package.json scripts
"orm": "cross-env NODE_ENV=dev typeorm-ts-node-commonjs -d ./src/config/typeorm.config.ts",
"db": "npm run orm schema:sync"
```

Other commands
```bash
yarn orm -h
yarn orm -v
yarn orm migrations:run 
```