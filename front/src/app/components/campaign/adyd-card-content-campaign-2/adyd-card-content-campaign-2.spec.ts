import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdydCardContentCampaign2 } from './adyd-card-content-campaign-2';

describe('AdydCardContentCampaign2', () => {
  let component: AdydCardContentCampaign2;
  let fixture: ComponentFixture<AdydCardContentCampaign2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdydCardContentCampaign2],
    }).compileComponents();

    fixture = TestBed.createComponent(AdydCardContentCampaign2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
