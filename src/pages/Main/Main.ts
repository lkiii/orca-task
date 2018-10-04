import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import Graph from '@/components/Graph/index.vue'
import CoinAPI from '@/api/CoinAPI'
import CurrencyRates from '@/api/CurrencyRates'

@Component({
  components: {
  Graph
  }
  })
export default class MainComponent extends Vue {
  name: String = 'main-page'
  api = new CoinAPI()
  chartData: (number | Date | string)[][] = []

  private getHistory (currency: string): CurrencyRates[] {
    let rawHistory: string = localStorage.getItem(currency) || '[]'
    let history: CurrencyRates[] = JSON.parse(rawHistory)
    return history
  }

  getRates () {
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
      this.prepareChartData()
    }).catch(Error => {
      console.error(Error)
    })
  }

  clearHistory () {
    localStorage.clear()
    this.prepareChartData()
  }

  get test () {
    return 'a'
  }

  currencies = [
    { name: 'BTC', checked: true },
    { name: 'ETH', checked: true },
    { name: 'XRP', checked: true },
    { name: 'BCH', checked: true },
    { name: 'EOS', checked: true }
  ]
  @Watch('currencies', { immediate: true, deep: true })
  prepareChartData () {
    let headers = ['Time']
    let data: (number | Date)[][] = []
    let first: boolean = true
    for (let i in this.currencies) {
      if (!this.currencies[i].checked) { continue }
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
    this.chartData = [
      headers,
      ...data
    ]
  }
  created () {
    this.prepareChartData()
  }
}
