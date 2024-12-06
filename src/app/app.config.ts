import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true, // Just the firstone no
        onViewTransitionCreated( transitionInfo ) {
          console.log(transitionInfo); // Info about info
        }
      })
    ),
    provideHttpClient()
  ]
};
