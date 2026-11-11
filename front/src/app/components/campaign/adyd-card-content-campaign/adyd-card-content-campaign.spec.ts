import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdydCardContentCampaign } from './adyd-card-content-campaign';

describe('AdydCardContentCampaign', () => {
  let component: AdydCardContentCampaign;
  let fixture: ComponentFixture<AdydCardContentCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdydCardContentCampaign],
    }).compileComponents();

    fixture = TestBed.createComponent(AdydCardContentCampaign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
