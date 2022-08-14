# Swagger Setup

```bash
yarn add @nestjs/swagger swagger-ui-express
```

## Bootstrap at main.ts
```javascript
const configApi = new DocumentBuilder()
    .setTitle('Demo Application')
    .setDescription('Demo API Application')
    .setVersion('v1')
    .addTag('Demo')
    .addBearerAuth()
    .build();

const document = SwaggerModule.createDocument(app, configApi);
  SwaggerModule.setup('swagger', app, document);

```

```bash
# Swagger Url:
Visit: http://localhost:3000/swagger

# For JSON Response
http://localhost:3000/swagger-json
```


### Decorators

All of the available OpenAPI decorators have an `Api` prefix to distinguish them from the core decorators. Below is a full list of the exported decorators along with a designation of the level at which the decorator may be applied.

|                           |                     |
| ------------------------- | ------------------- |
| `@ApiBasicAuth()`         | Method / Controller |
| `@ApiBearerAuth()`        | Method / Controller |
| `@ApiBody()`              | Method              |
| `@ApiConsumes()`          | Method / Controller |
| `@ApiCookieAuth()`        | Method / Controller |
| `@ApiExcludeController()` | Controller          |
| `@ApiExcludeEndpoint()`   | Method              |
| `@ApiExtension()`         | Method              |
| `@ApiExtraModels()`       | Method / Controller |
| `@ApiHeader()`            | Method / Controller |
| `@ApiHideProperty()`      | Model               |
| `@ApiOAuth2()`            | Method / Controller |
| `@ApiOperation()`         | Method              |
| `@ApiParam()`             | Method              |
| `@ApiProduces()`          | Method / Controller |
| `@ApiProperty()`          | Model               |
| `@ApiPropertyOptional()`  | Model               |
| `@ApiQuery()`             | Method              |
| `@ApiResponse()`          | Method / Controller |
| `@ApiSecurity()`          | Method / Controller |
| `@ApiTags()`              | Method / Controller |