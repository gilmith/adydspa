import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CampaignService } from './campaign-service';
import { CampaignGateway } from './campaign.gateway';

describe('CampaignService', () => {
  let service: CampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CampaignGateway,
          useValue: {
            getAll: () => of({page: 0, totalPages: 0, totalElements: 0, content: []}),
            getById: () => of({id: 1, name: 'Campaña'}),
            create: () => of({id: 1, name: 'Campaña'}),
            update: () => of({id: 1, name: 'Campaña'}),
            delete: () => of(undefined)
          }
        }
      ]
    });
    service = TestBed.inject(CampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
