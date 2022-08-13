## 1.0 - Initial Setup
```bash
# Create new nest app
nest new appName
```
### Initial setup with jest
```bash
# Add config, dotenv by
yarn add @nestjs/config
```

```javascript 
// Add the following to tsconfig for @imports
 "baseUrl": "./src",
    "paths": {"@/*": ["./*"]},

// Add the following to package.json in jest config for @imports mapping
"moduleNameMapper": {
      "^@/(.+)*$": "<rootDir>/$1"
    },

//Create env file env/dev.env on root
// Create test/jest-config.ts for loading env before jest tests
import * as dotenv from 'dotenv';
dotenv.config({ path: './env/dev.env' });

// Add the following to package.json in jest config for loading specific env
 "setupFiles": [
      "../test/jest-config.ts"
    ],


```


