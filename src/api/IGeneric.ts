import ICurrencyRates from '@/api/ICurrencyRates';

export default interface IGeneric {
    getCurrencyRates(): ICurrencyRates
}