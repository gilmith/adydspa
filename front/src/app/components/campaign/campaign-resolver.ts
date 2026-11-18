import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {GetCampaignsInteractor} from '../../service/campaign/interactors/get-campaigns.interactor';
import {GetCampaignInteractor} from '../../service/campaign/interactors/get-campaign.interactor';
import {Campaign, CampaignPage} from '../../service/campaign/campaign.model';

export const getAllCampaignResolver: ResolveFn<CampaignPage> = () =>
  inject(GetCampaignsInteractor).execute({page: 0, size: 1000});

export const getCampaignResolver: ResolveFn<Campaign> = (route: ActivatedRouteSnapshot) => {
  const id = Number(route.paramMap.get('id'));
  return inject(GetCampaignInteractor).execute(id);
};
