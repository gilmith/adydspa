import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdydCampaignSummary } from './adyd-campaign-summary';

describe('AdydCampaignSummary', () => {
  let component: AdydCampaignSummary;
  let fixture: ComponentFixture<AdydCampaignSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdydCampaignSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(AdydCampaignSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
