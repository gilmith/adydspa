import {Routes} from '@angular/router';
import {getAllCampaignResolver} from './components/campaign/campaign-resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'campaign',
    pathMatch: 'full'
  },
  {
    path: 'campaign',
    loadChildren: () =>
      import('./components/campaign/campaign-router')
        .then(m => m.routes),
    resolve: {
      campaigns: getAllCampaignResolver
    }
  }
];
