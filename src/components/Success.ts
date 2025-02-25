import { ensureElement } from '../utils/utils';
import { IEvents } from './base/events';

interface ISuccess {
    total: number;
}

interface ISuccessActions {
    onClick: () => void;
}

export class Success {
    protected _close: HTMLButtonElement;
    protected _total: HTMLElement;

    constructor(
        container: HTMLElement,
        events: IEvents,
        actions: ISuccessActions
    ) {}


    set total(value: number) {}
}