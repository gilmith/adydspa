import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdydCampaignDetail } from './adyd-campaign-detail';

describe('AdydCampaignDetail', () => {
  let component: AdydCampaignDetail;
  let fixture: ComponentFixture<AdydCampaignDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdydCampaignDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AdydCampaignDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
