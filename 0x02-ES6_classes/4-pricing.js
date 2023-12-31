import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number' && amount !== undefined) {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
    if (currency instanceof Currency && currency !== undefined) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number' && amount !== undefined) {
      this._amount = amount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency && currency !== undefined) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
