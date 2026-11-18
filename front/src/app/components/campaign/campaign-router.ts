import {Routes} from '@angular/router';
import {CampaignGrid} from './campaign-grid/campaign-grid';
import {AdydCampaignDetail} from './adyd-campaign-detail/adyd-campaign-detail';
import {getCampaignResolver} from './campaign-resolver';

export const routes: Routes = [
  {
    path: '',
    component: CampaignGrid
  },
  {
    path: ':id',
    component: AdydCampaignDetail,
    title: 'Detalle de Campaña',
    resolve: {
      campaign: getCampaignResolver
    }
  }
];
