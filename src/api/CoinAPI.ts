import axios from 'axios'
import IGeneric from '@/api/IGeneric'
import CurrencyRates from '@/api/CurrencyRates'

import config from '@/api/config'

export default class CoinAPI implements IGeneric {
    getCurrencyRates(currency: string): Promise<CurrencyRates> {
        return new Promise((resolve, reject) => {
            axios.get(`https://rest.coinapi.io/v1/exchangerate/${currency}/USD`, { headers: { 'X-CoinAPI-Key': config.apiKey } }).then(response => {
                let rate = new CurrencyRates(currency, response.data.rate, new Date(response.data.time))
                resolve(rate)
            }).catch(Error => {
                reject(Error)
            })
        })
    }
}
