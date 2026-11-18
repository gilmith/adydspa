import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdydCardContentCampaign2 } from './adyd-card-content-campaign-2';
import { CampaignGateway } from '../../../service/campaign/campaign.gateway';
import { AUTH_SERVICE } from '../../../../../.yalc/components/projects/components/src/lib/services/auth-service';

describe('AdydCardContentCampaign2', () => {
  let component: AdydCardContentCampaign2;
  let fixture: ComponentFixture<AdydCardContentCampaign2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdydCardContentCampaign2],
      providers: [
        {
          provide: AUTH_SERVICE,
          useValue: {hasPermission: () => true, logout: () => undefined, getUser: () => 'test'}
        },
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
    }).compileComponents();

    fixture = TestBed.createComponent(AdydCardContentCampaign2);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 1);
    fixture.componentRef.setInput('showButtons', false);
    fixture.componentRef.setInput('cardItemInput', {
      id: 1,
      url: '',
      title: 'Campaña',
      description: 'Descripción'
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
