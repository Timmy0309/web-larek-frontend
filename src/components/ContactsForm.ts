import { Form } from './Form';
import { TContactsForm } from '../types';
import { IEvents } from './base/events';
import { ensureElement } from '../utils/utils';

export class ContactsForm extends Form<TContactsForm> {

    protected _email: HTMLInputElement;
	protected _phone: HTMLInputElement;

	constructor(container: HTMLFormElement, events: IEvents){
        super(container, events);
    }

    set email(value: string){
        this._email.value = value;
    }

    set phone(value: string){
        this._phone.value = value;

    }
}