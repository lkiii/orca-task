import CurrencyRates from '@/api/CurrencyRates'

export default interface IGeneric {
    getCurrencyRates(currency: String): Promise<CurrencyRates>
}
