# Logging setup

## Bootstrap in main.ts
```javascript
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: getLogLevels(),
  });

```

Values in the array can be any combination of `log`, `error`, `warn`, `debug`, and `verbose`.

## Usage
```javascript
private readonly logger = new Logger(this.constructor.name);
```