import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ARRFormComponent } from './modules/arr-standalone/arr-form.component';

import { HomeComponent } from './modules/general/home/home.component';
import { LiborviewComponent } from './modules/libor-transform/liborview.component';
import { RatescompviewComponent } from './modules/rates-comp/ratescompview.component';

import { AuthGuard } from './_helpers/auth.guard';


const accountModule = () => import('./modules/account/account.module').then(x => x.AccountModule);


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'arr', component: ARRFormComponent, canActivate: [AuthGuard] },
    { path: 'libor', component: LiborviewComponent, canActivate: [AuthGuard] },
    { path: 'rates', component: RatescompviewComponent, canActivate: [AuthGuard] },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
