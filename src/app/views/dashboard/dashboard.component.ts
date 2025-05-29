import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { SidebarComponent } from "../../components/sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent],
  template: `
    <app-sidebar/>
    <div class="flex flex-col">
      <h1 class="mt-20  justify-center">Bienvenue {{currentUser()?.firstname}} sur votre Dashboard</h1>

    </div>

  `,
  styles: `
  :host{
    display:grid;
    min-height:100vh;
    grid-template-columns: 15% 75%;
  }`
})
export class DashboardComponent {
authService = inject(AuthService)
currentUser = this.authService.currentUser;
}
