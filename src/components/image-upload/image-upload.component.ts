import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
	selector: 'image-uploader',
	templateUrl: './image-upload.component.html',
	styleUrls: ['./image-upload.component.css'],
})
export class ImageUploaderComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
	imageChangedEvent: any = '';
	croppedImage: any = '';

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
	}
	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
	}
}
