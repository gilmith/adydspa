import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carouselinner } from './carouselinner';

describe('Carouselinner', () => {
  let component: Carouselinner;
  let fixture: ComponentFixture<Carouselinner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carouselinner],
    }).compileComponents();

    fixture = TestBed.createComponent(Carouselinner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
