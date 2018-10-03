import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class GraphComponent extends Vue {
  name: String = 'graph'
  props: String[] = [
    'chartOptions',
    'chartData'
  ]
  mounted() {
  }
}

