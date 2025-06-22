import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = process.env.FRONTEND_URL.split(',');

  app.enableCors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

  await app.listen(3333);
}
bootstrap();

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