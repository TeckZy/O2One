import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	NgZone,
	AfterViewInit,
} from '@angular/core';
import { ApiService, Maps } from './geolocatio.service';
import PlaceResult = google.maps.places.PlaceResult;
import {
	Location,
	Appearance,
	GermanAddress,
} from '@angular-material-extensions/google-maps-autocomplete';
import { geolib } from './geolib';
// import * as geolib from 'geolib';
import * as turf from '@turf/turf';
const colors = [
	'red',
	'blue',
	'green',
	'yellow',
	'brown',
	'BurlyWood',
	'Cyan',
	'DarkGreen',
	'DarkOrchid',
	'DarkOliveGreen',
	'Fuchsia',
	'GoldenRod',
	'Indigo',
	'LightCoral',
	'MediumSlateBlue',
];
let colorIndex = 0;

const place = null as google.maps.places.PlaceResult;
type Components = typeof place.address_components;
@Component({
	selector: 'geo-location',
	templateUrl: './geolocation.component.html',
	styleUrls: ['./geolocation.component.css'],
})
export class GeoLocationComponent implements OnInit {
	ngOnInit(): void {}
	public appearance = Appearance;
	public zoom: number;
	public latitude: number;
	public longitude: number;
	public selectedAddress: PlaceResult;
	onLocationSelected(location: Location) {
		console.log('onLocationSelected: ', location);
		this.latitude = location.latitude;
		this.longitude = location.longitude;
	}
	onAutocompleteSelected(result: PlaceResult) {
		console.log('onAutocompleteSelected: ', result);
		this.selectedAddress = result;
	}

	onGermanAddressMapped($event: GermanAddress) {
		console.log('onGermanAddressMapped', $event);
	}
}
