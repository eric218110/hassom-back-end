import { Env } from '../provider/env.provider';

Env.init();

export const corsMiddleware = {
  origin: process.env.MODE === 'development' ? '*' : '',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};
