import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostListComponent } from './post-list/post-list.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'post-list', component: PostListComponent, canActivate: [AuthGuardService] },

  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
