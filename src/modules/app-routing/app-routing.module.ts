import { GeoLocationComponent } from './../../components/geolocation/geolocation.component';
import { ImageUploaderComponent } from './../../components/image-upload/image-upload.component';
import { CreditCardComponent } from './../../components/creditcard-validator/creditcard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{ path: 'credit-card', component: CreditCardComponent },
	{ path: 'image-uploader', component: ImageUploaderComponent },
	{ path: 'geoloaction', component: GeoLocationComponent },
	{
		path: '',
		redirectTo: '/image-uploader',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/image-uploader',
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
