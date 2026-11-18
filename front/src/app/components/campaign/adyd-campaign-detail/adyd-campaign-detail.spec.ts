import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AdydCampaignDetail } from './adyd-campaign-detail';
import { API_APPLICATIONS } from '../../../../../.yalc/components/projects/components/src/lib/services/api-applications';
import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyBootstrap } from '@ngx-formly/bootstrap';

describe('AdydCampaignDetail', () => {
  let component: AdydCampaignDetail;
  let fixture: ComponentFixture<AdydCampaignDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdydCampaignDetail],
      providers: [
        provideFormlyCore(withFormlyBootstrap()),
        {
          provide: API_APPLICATIONS,
          useValue: {executeService: () => of(undefined)}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdydCampaignDetail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('campaign', {
      id: 1,
      name: 'Campaña de prueba',
      description: 'Descripción'
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
