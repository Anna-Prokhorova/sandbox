import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { SandboxPreloadingStrategy } from '@sandbox/util';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    SandboxPreloadingStrategy,
    provideRouter(appRoutes, withPreloading(SandboxPreloadingStrategy)),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
