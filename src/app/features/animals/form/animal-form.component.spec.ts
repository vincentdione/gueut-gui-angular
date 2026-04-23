import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalFormComponent } from './animal-form.component';
import { FormsModule } from '@angular/forms';

describe('AnimalFormComponent', () => {
  let component: AnimalFormComponent;
  let fixture: ComponentFixture<AnimalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalFormComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 7 race options', () => {
    expect(component.races.length).toBe(7);
  });

  it('should have 2 sexe options', () => {
    expect(component.sexes.length).toBe(2);
  });

  it('should submit form data', () => {
    spyOn(console, 'log');
    component.onSubmit();
    expect(console.log).toHaveBeenCalled();
  });
});