# Staging Setup 

## Multiple environment staging setup  

`/env` folder contains the staging files for different environment.  
`.env` the default environment file is located at the root

## Setup in app.module.ts
```javascript
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      envFilePath: getEnvFile(),
      isGlobal: true,
      load: [config],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
## Config in src/config/index.ts
```javascript
export const config = () => ({
  NODE_ENV: process.env.NODE_ENV,
  ENV_NAME: process.env.NAME,
  port: parseInt(process.env.PORT, 10) || 3000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
```