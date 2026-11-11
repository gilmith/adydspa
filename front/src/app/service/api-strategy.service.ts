import {Observable} from 'rxjs';
import {
  ApiApplicationsEnum
} from '../../../.yalc/components/projects/components/src/lib/services/enum/enum-api-aplications';

export interface ApiStrategy {

  canConsume(apiEnum: ApiApplicationsEnum, operationId: string): boolean;

  execute(data: Record<string, unknown>, operationId: string): Observable<any>;

}
