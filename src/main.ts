// import { NestFactory } from '@nestjs/core'
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.enableCors({
//     origin: 'http://localhost:5173', 
//     methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
//     credentials: true,
//   });

//   await app.listen(process.env.PORT ?? 3333);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ FORCE CORS HEADERS (NEW FIX)
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }

    next();
  });

  await app.listen(3333);
  console.log('✅ Manual CORS override is active at http://localhost:3333');
}
bootstrap();
