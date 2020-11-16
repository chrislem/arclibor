import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { SigninComponent } from './modules/general/signin/signin.component';
import { AuthGuard } from './_helpers/auth.guard';

// const routes: Routes = [
//   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
//   { path: 'contact', component: ContactComponent ,canActivate: [AuthGuard]},
//   { path: 'about', component: AboutComponent,canActivate: [AuthGuard] },
//   { path: 'signin', component: SigninComponent,canActivate: [AuthGuard] },
//   { path: '**', component: NotFoundComponent,canActivate: [AuthGuard] }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   declarations: []
// })
// export class AppRoutingModule { }


const accountModule = () => import('./modules/account/account.module').then(x => x.AccountModule);


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
