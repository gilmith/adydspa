import {inject, Injectable, Service} from '@angular/core';
import {
  ApiApplicationsEnum
} from '../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';
import {ApiStrategy} from './api-strategy.service';
import {CampaignService} from './campaign/campaign-service';
import {Observable, throwError} from 'rxjs';

@Service()
export class ApiApplicationsServiceImpl {

  private strategies: ApiStrategy[];

  constructor() {
    const campaignService = inject(CampaignService);
    this.strategies = [campaignService];
  }

  executeService(api: ApiApplicationsEnum, data: Record<string, unknown>, operationId: string): Observable<any> {
    console.log('executeService called with:', api, data);
    const strategy = this.strategies.find(s => s.canConsume(api, operationId));
    if (strategy) {
      return strategy.execute(data, operationId);
    }
    console.warn('No strategy found for api:', api);
    return throwError(() => new Error(`No strategy found for api: ${api}, operationId: ${operationId}`));
  }
}
