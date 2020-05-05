import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl,
	ValidationErrors,
} from '@angular/forms';

@Component({
	selector: 'credit-card',
	templateUrl: './creditcard.component.html',
	styleUrls: ['./creditcard.component.css'],
})
export class CreditCardComponent implements OnInit {
	ngOnInit(): void {}
	form: FormGroup;
	savedForm: any;
	cardnumber;
	invalid: boolean = false;
	cardType = {
		error: '',
		type: undefined,
		pureVal: false,
	};

	iconMap = {
		Visa: 'vs.png',
		MasterCard: 'ma.png',
		AmericanExpress: 'am.png',
	};
	card = {
		visa: {
			name: 'Visa',
			pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
			startsWith: /^4/,
			maxlen: 16,
		},

		masterCard: {
			name: 'MasterCard',
			pattern: /^5[1-5][0-9]{14}$/,
			startsWith: /^5[1-5]/,
			maxlen: 16,
		},
		americanExpress: {
			name: 'AmericanExpress',
			pattern: /^3[47][0-9]{13}$/,
			startsWith: /^3[47]/,
			maxlen: 15,
		},
	};

	parseCC(vale) {
		this.cardType = {
			error: '',
			type: undefined,
			pureVal: false,
		};
		const value: string = this.cardnumber.toString();
		if (value.length >= 4) {
			if (value.startsWith('37')) {
				this.cardType.type = this.card.americanExpress.startsWith.test(value)
					? this.card.americanExpress.name
					: '';
				this.cardType.pureVal = this.card.americanExpress.pattern.test(value)
					? true
					: false;
				// this.invalid = false;
			} else if (value.startsWith('4')) {
				this.cardType.pureVal = this.card.visa.pattern.test(value)
					? true
					: false;
				this.cardType.type = this.card.visa.startsWith.test(value)
					? this.card.visa.name
					: '';
				// this.invalid = false;
			} else if (value.startsWith('5')) {
				this.cardType.pureVal = this.card.masterCard.pattern.test(value)
					? true
					: false;
				this.cardType.type = this.card.masterCard.startsWith.test(value)
					? this.card.masterCard.name
					: '';
				// this.invalid = false;
			} else {
				this.cardType.error = this.cardType.pureVal ? '' : 'Invalid Card';
				this.invalid = true;
			}
		}
		delete this.invalid;
		this.invalid = this.cardType.pureVal ? this.cardType.pureVal : false;
		console.log(this.cardType);
	}

	getIcon(value) {
		return (
			window.location.origin + '/assets/' + this.iconMap[this.cardType.type]
		);
	}

	getMaxLength() {
		return this.card[this.cardType.type];
	}
}
