import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import PlaceResult = google.maps.places.PlaceResult;
import {
	Location,
	Appearance,
} from '@angular-material-extensions/google-maps-autocomplete';

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
	formattedAdd = '';
	constructor(private hc: HttpClient) {}
	onLocationSelected(location: Location) {
		this.latitude = location.latitude;
		this.longitude = location.longitude;
	}
	onAutocompleteSelected(result: PlaceResult) {
		this.selectedAddress = result;
		this.formattedAdd = result.formatted_address;
	}
	updateAddress() {
		this.hc
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitude},${this.longitude}&key=AIzaSyCaKbVhcX_22R_pRKDYuNA7vox-PtGaDkI`
			)
			.subscribe((data) => {
				//
			});
	}
}
