import { Routes } from '@angular/router';
import { AuthPageComponent } from './views/authPage/auth-page.component';
import { LandingPageComponent } from './views/landingPage/landing-page.component';
import { NotfoundComponent } from './views/not-found/notfound.component';
import { SigninComponent } from './views/signin/signin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landingPage',
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
  },
  {
    path: 'authPage',
    component: AuthPageComponent,
  },
  {
    path: 'signIn',
    component: SigninComponent,
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
  },
  
  {
    path:'**',
    component: NotfoundComponent,
  }
];
