export default class CurrencyRates {
  time: Date
  currencyCode: string
  rate: number
  constructor(currencyCode: string, rate: number, time: Date) {
    this.currencyCode = currencyCode
    this.rate = rate
    this.time = time
  }
}
