import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {CampaignControllerService, PaginatedDto} from 'adydspa-api-client';


export const getAllCampaignResolver: ResolveFn<PaginatedDto> = () => {
  console.log('getAllCampaignResolver invoked');
  const campaignApi = inject(CampaignControllerService);
  const data = campaignApi.getAllCampaign(0, 1000);
  console.log('getAllCampaignResolver data:', data);
  return data;
};

