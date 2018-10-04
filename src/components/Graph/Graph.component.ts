import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GChart } from 'vue-google-charts'

@Component({
  components: {
  GChart
  }
  })
export default class GraphComponent extends Vue {
  name: String = 'graph'
  @Prop() chartData: any
  data () {
    return {
      chartOptions: {
        chart: {
          title: 'Crypto price history'
        },
        height: 500
      }
    }
  }
}
