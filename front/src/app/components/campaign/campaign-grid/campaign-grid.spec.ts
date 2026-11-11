import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignGrid } from './campaign-grid';

describe('CampaignGrid', () => {
  let component: CampaignGrid;
  let fixture: ComponentFixture<CampaignGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(CampaignGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
