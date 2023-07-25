import { Test, TestingModule } from '@nestjs/testing';
import { FlightsController } from './flights.controller';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';


describe('FlightsController', () => {
  let controller: FlightsController;
  let app : INestApplication

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightsController],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    });

  it('should return all flights', () => {
    return request(app.getHttpServer()).
    get('/flights').expect(200);
  });
});
