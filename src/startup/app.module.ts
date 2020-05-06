import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../modules/app-routing/app-routing.module';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { HeaderComponent } from '../components/header/header.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CreditCardComponent } from '../components/creditcard-validator/creditcard.component';
import { FormsModule } from '@angular/forms';
import { GeoLocationComponent } from '../components/geolocation/geolocation.component';
import { ImageUploaderComponent } from '../components/image-upload/image-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { CardModule } from 'ngx-card/ngx-card';
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ToolbarComponent,
		CreditCardComponent,
		GeoLocationComponent,
		ImageUploaderComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		AppMaterialModule,
		CardModule,
		ImageCropperModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCaKbVhcX_22R_pRKDYuNA7vox-PtGaDkI',
			libraries: ['places'],
		}),
		MatGoogleMapsAutocompleteModule,
	],
	providers: [HttpClientModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
