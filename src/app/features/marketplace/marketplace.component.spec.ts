import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarketplaceComponent } from './marketplace.component';

describe('MarketplaceComponent', () => {
  let component: MarketplaceComponent;
  let fixture: ComponentFixture<MarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketplaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Marketplace.component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 8 race options', () => {
    expect(component.races.length).toBe(8);
  });

  it('should have 3 sexe options', () => {
    expect(component.sexes.length).toBe(3);
  });
});