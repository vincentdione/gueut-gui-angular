import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['register']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RegisterComponent, FormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error when passwords do not match', () => {
    component.password = 'password123';
    component.confirmPassword = 'different';
    component.onSubmit();
    expect(component.error).toBe('Les mots de passe ne correspondent pas');
  });

  it('should show error when password too short', () => {
    component.password = 'short';
    component.confirmPassword = 'short';
    component.onSubmit();
    expect(component.error).toBe('Le mot de passe doit contenir au moins 8 caractères');
  });

  it('should call register and navigate on success', () => {
    component.nom = 'Test User';
    component.email = 'test@test.com';
    component.password = 'password123';
    component.confirmPassword = 'password123';
    mockAuthService.register.and.returnValue(of({ id: 1, email: 'test', nom: 'Test' }));

    component.onSubmit();

    expect(mockAuthService.register).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});