import { GeoLocationComponent } from './../../components/geolocation/geolocation.component';
import { ImageUploaderComponent } from './../../components/image-upload/image-upload.component';
import { CreditCardComponent } from './../../components/creditcard-validator/creditcard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { AppMasterGuard } from '../../guards/app-master.guard';
import { LoginComponent } from '../../components/login/login.component';
import { BordereauComponent } from '../../components/import-wizard/bordereau/bordereau.component';
import { NameMatchingComponent } from '../../components/name-matching/name-matching.component';

const routes: Routes = [
	{
		path: 'bordereau',
		component: BordereauComponent,
		canActivate: [AppMasterGuard],
	},
	{ path: 'login', component: LoginComponent, canActivate: [AppMasterGuard] },
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [AppMasterGuard],
	},
	{
		path: 'name-matching',
		component: NameMatchingComponent,
		canActivate: [AppMasterGuard],
	},
	{ path: 'credit-card', component: CreditCardComponent },
	{ path: 'image-uploader', component: ImageUploaderComponent },
	{ path: 'geoloaction', component: GeoLocationComponent },
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/dashboard',
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
