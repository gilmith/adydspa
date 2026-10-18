import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  createInterceptorCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, IncludeBearerTokenCondition,
  includeBearerTokenInterceptor,
  provideKeycloak
} from 'keycloak-angular';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { provideApi } from 'adydspa-api-client';

const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:10000)(\/.*)?$/i
});

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideKeycloak({
      config: {
        url: 'http://localhost:8070',
        realm: 'adyd',
        clientId: 'adyd_web_admin'
      },
      initOptions:{
        onLoad:'login-required',
        redirectUri: 'http://localhost:4200',
        silentCheckSsoRedirectUri: window.location.origin+'/silent-check-sso.html',
        checkLoginIframe: false,
      },
      providers: [
        {
          provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
          useValue: [localhostCondition]
        }
      ]
    }),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    provideApi({
      basePath: 'http://localhost:10000/api',
    })

  ]
};
