import Vue from 'vue'
import Component from 'vue-class-component'
import Graph from '@/components/Graph/index.vue'
import CoinAPI from '@/api/CoinAPI'
import CurrencyRates from '@/api/CurrencyRates';

@Component({
  components: {
    Graph
  }
})
export default class MainComponent extends Vue {
  name: String = 'main-page'
  api = new CoinAPI()

  private getHistory(currency: string): CurrencyRates[] {
    let rawHistory: string = localStorage.getItem(currency) || '[]'
    let history: CurrencyRates[] = JSON.parse(rawHistory)
    return history
  }

  getRates() {
    let promises = []
    for (let i in this.currencies) {
      promises.push(this.api.getCurrencyRates(this.currencies[i].name))
    }
    let that = this
    Promise.all(promises).then(data => {
      for (let i in data) {
        let history = this.getHistory(data[i].currencyCode)
        history.push(data[i])
        localStorage.setItem(this.currencies[i].name, JSON.stringify(history))
      }
      let a = that.chartData
    }).catch(Error => {
      console.error(Error)
    })
  }

  clearHistory() {
    localStorage.clear()
    this.$forceUpdate()
  }

  get test() {
    return 'a'
  }

  currencies = [{ name: 'BTC', checked: true }, { name: 'ETH', checked: true }]
  // Array will be automatically processed with visualization.arrayToDataTable function
  get chartData() {
    let headers = ['Time']
    let data: (number | Date)[][] = []
    let first: boolean = true
    for (let i in this.currencies) {
      if (!this.currencies[i].checked)
        continue
      headers.push(this.currencies[i].name)
      let history = this.getHistory(this.currencies[i].name)
      for (let j in history) {
        if (first) {
          data[j] = [history[j].time]
        }
        data[j].push(history[j].rate)
      }
      first = false
    }
    return [
      headers,
      ...data
    ]
  }
}
