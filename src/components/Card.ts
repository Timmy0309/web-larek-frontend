import { IProduct } from "../types";
import { ensureElement } from "../utils/utils";
import { Component } from "./base/Component";

export const categories = new Map([
	['софт-скил', 'soft'],
	['другое', 'other'],
	['дополнительное', 'additional'],
	['кнопка', 'button'],
	['хард-скил', 'hard']
  ]);

interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export class Card extends Component<IProduct> {
    protected _title: HTMLElement;
	protected _image?: HTMLImageElement;
	protected _price: HTMLElement;
	protected _category?: HTMLElement;
	protected _description?: HTMLElement;
	protected _button?: HTMLButtonElement;
	protected _index?: HTMLElement;

    constructor(container: HTMLElement, actions?: ICardActions){
		super(container);

		this._title = ensureElement<HTMLElement>('.card__title', container);
		this._image = container.querySelector('.card__image');
		this._price = ensureElement<HTMLElement>('.card__price', container);
		this._category = container.querySelector('.card__category');
		this._button = container.querySelector('.card__button');
		this._description = container.querySelector('.card__description');
		this._index = container.querySelector('.basket__item-index');

		if (actions?.onClick){
			if (this._button) {
				this._button.addEventListener('click', actions.onClick);
			} else {
				container.addEventListener('click', actions.onClick);
			}
		}
	}

    set id(value: string) {
		this.container.dataset.id = value;
	}

	get id(): string {
        return this.container.dataset.id || '';
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	get title(): string {
        return this._title.textContent || '';
	}

	set price(value: string) {
		if (value) {
			this.setText(this._price, `${value} синапсов`);
		} else {
			this.setText(this._price, `Бесценно`);
		}
	}

	get price(): string {
		return this._price.textContent || '';
	}

	set category(value: string) {
		this.setText(this._category, value);
		if (this._category) {
			this._category.classList.add(
				`card__category_${
					categories.get(value) ? categories.get(value) : 'other'
				}`
			);
		}
	}

	get category(): string {
		return this._category.textContent || '';
	}

	set image(src: string) {
		this.setImage(this._image, src, this.title);
	}

	set description(value: string) {
		this.setText(this._description, value);
	}

	set button(value: string) {
		if (value === 'Слишком дорого') {
			this._button.disabled = true;
			this.setText(this._button, `Слишком дорого`);
		} else {
			this.setText(this._button, value);
		}
	}

	set index(value: number) {
		this.setText(this._index, value);
	}
}