import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {provideFormlyCore} from '@ngx-formly/core';
import {withFormlyBootstrap} from '@ngx-formly/bootstrap';
import {routes} from './app-routing';
import {
  createInterceptorCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  IncludeBearerTokenCondition,
  includeBearerTokenInterceptor,
  provideKeycloak
} from 'keycloak-angular';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideApi} from 'adydspa-api-client';
import {AUTH_SERVICE} from '../../.yalc/components/projects/components/src/lib/services/auth-service';
import {API_APPLICATIONS} from '../../.yalc/components/projects/components/src/lib/services/api-applications';
import {AuthServiceImpl} from './service/auth-service';
import {CampaignGateway} from './service/campaign/campaign.gateway';
import {CampaignApiGateway} from './service/campaign/campaign-api.gateway';
import {CampaignFormAdapter} from './service/campaign/campaign-form.adapter';


const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:10000)(\/.*)?$/i
});

export const appConfig: ApplicationConfig = {

  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideFormlyCore(withFormlyBootstrap()),
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
      basePath: 'http://localhost:10000',
    }),
    {provide: AUTH_SERVICE, useClass: AuthServiceImpl},
    {provide: API_APPLICATIONS, useClass: CampaignFormAdapter},
    {provide: CampaignGateway, useClass: CampaignApiGateway},
  ]
};
