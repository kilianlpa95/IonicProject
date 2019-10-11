import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'mill-register', loadChildren: './mill-register/mill-register.module#MillRegisterPageModule' },
  { path: 'mill-modifier', loadChildren: './mill-modifier/mill-modifier.module#MillModifierPageModule' },
  //{ path: 'mill-details', loadChildren: './mill-details/mill-details.module#MillDetailsPageModule' },
  { path: 'mill-details/:id', loadChildren: './mill-details/mill-details.module#MillDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
