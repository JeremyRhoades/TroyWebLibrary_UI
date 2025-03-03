import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
//import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
