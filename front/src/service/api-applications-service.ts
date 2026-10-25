import { Injectable } from '@angular/core';
import { ApiApplications } from '../../.yalc/components/projects/components/src/lib/services/api-applications';
import { ApiApplicationsEnum } from '../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';

@Injectable()
export class ApiApplicationsServiceImpl implements ApiApplications {
  executeService(api: ApiApplicationsEnum, data: Record<string, unknown>): any {
    console.warn('[Dummy API] executeService called with api:', api, 'data:', data);
    return {};
  }
}
