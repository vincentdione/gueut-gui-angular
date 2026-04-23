import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error when fields are empty', () => {
    component.email = '';
    component.password = '';
    component.onSubmit();
    expect(component.error).toBe('Tous les champs sont requis');
  });

  it('should call login and navigate on success', () => {
    component.email = 'test@test.com';
    component.password = 'password123';
    mockAuthService.login.and.returnValue(of({ accessToken: 'token', refreshToken: 'refresh', userId: 1, email: 'test', nom: 'Test' }));

    component.onSubmit();

    expect(mockAuthService.login).toHaveBeenCalledWith({ email: 'test@test.com', password: 'password123' });
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should show error on login failure', () => {
    component.email = 'test@test.com';
    component.password = 'wrong';
    mockAuthService.login.and.returnValue(throwError(() => ({ error: { error: 'Invalid credentials' } })));

    component.onSubmit();

    expect(component.error).toBe('Invalid credentials');
    expect(component.loading).toBeFalse();
  });
});