import { IBasket, IProduct, PaymentMethod, TOrder } from '../types';
import { IEvents } from './base/events';
import { Model } from './base/Model';


export class AppData {
	items: IProduct[] = [];
	preview: IProduct | null = null;
	basket: IBasket = {
		items: [],
		total: 0,
	};
	order: TOrder = {
		email: '',
		phone: '',
		address: '',
		payment: 'card',
	};
	loading: boolean;
	formErrors: Partial<Record<keyof TOrder, string>> = {};

	constructor(protected events: IEvents) {}

	setItems(items: IProduct[]) {
		this.items = items;
		this.events.emit('items:change', this.items);
	}

	setPreview(item: IProduct) {
		this.preview = item;
		this.events.emit('preview:change', item);
	}

	isInBasket(item: IProduct) {
		return this.basket.items.includes(item.id);
	}

	addToBasket(item: IProduct) {
		this.basket.items.push(item.id);
		this.basket.total += item.price;
		this.events.emit('basket:change', this.basket);
    }

	removeFromBasket(item: IProduct) {
		this.basket.items = this.basket.items.filter(id => {item.id !== id});
		this.basket.total -= item.price;
		this.events.emit('basket:change', this.basket);
	}

	clearBasket() {
		this.basket.items = [];
		this.basket.total = 0;
		this.events.emit('basket:change');
	}

	setPayment(method: PaymentMethod) {
		this.order.payment = method;
	}

	setOrderField(field: keyof TOrder, value: string) {
		if (field === 'payment') {
			this.setPayment(value as PaymentMethod);
		}
		else {
			this.order[field] = value;
		}
	}

	validateOrderForm() {
		const errors: typeof this.formErrors = {};
		if (!this.order.address) {
			errors.address = "Укажи свой адрес!!!";
		}
		this.formErrors = errors;
		this.events.emit('orderFormErrors:change', this.formErrors);
		return Object.keys(errors).length === 0;
	}

	validateContactsForm() {
		const errors: typeof this.formErrors = {};
		if (!this.order.email){
			errors.email = "Укажите Email пж";
		} else if (!this.order.email.includes('@')) {
			errors.email = 'Неправильно указан Email((';
		}
		if (!this.order.phone) {
			errors.phone = 'Необходимо указать телефон';
		} else if (!/^(\+7|8)[0-9]{10}$/.test(this.order.phone.replace(/[^0-9+]/g, ''))) {
			errors.phone = 'А ничё тот факт что номер должен быть из цифр?';
		}
		this.formErrors = errors;
		this.events.emit('contactsFormErrors:change', this.formErrors);
		return Object.keys(errors).length === 0;
	}

	clearOrder() {
		this.order = {
			email: '',
			phone: '',
			address: '',
			payment: 'card',
		};
	}
}