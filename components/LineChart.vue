<template>
  <div class="small">
    <line-chart :chart-data="getCollection" :options="options"></line-chart>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import lineChart from '~/components/LineChart.js'

export default {
  components: {
    lineChart
  },
  data: () => ({
    label: '',
    color: 'transparent',
    counter: 1,
    labelscollection: [],
    datacollection: [],
    options: {
      animation: false,
      title: {
        display: true,
        text: 'Linha'
      }
    }
  }),
  computed: {
    getCollection() {
      return {
        labels: this.labelscollection,
        datasets: [
          {
            label: this.label,
            backgroundColor: 'transparent',
            borderColor: this.color,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointBorderWidth: 0,
            pointHitRadius: 0,
            pointHoverBackgroundColor: 'transparent',
            pointHoverBorderColor: 'transparent',
            pointHoverBorderWidth: 0,
            pointHoverRadius: 0,
            lineTension: 0.2,
            data: this.datacollection
          }
        ]
      }
    }
  },
  created() {
    const i = parseInt(((Math.random() * 100) % 4) + 1, 10).toString()
    const colors = [
      '#f87979',
      'rgba(80, 83, 174, 1)',
      'rgba(125, 80, 174, 1)',
      'rgba(80, 174, 171, 1)'
    ]
    this.color = colors[i - 1]
    this.label = ['Rápido', 'Normal', 'Devagar', 'Quase Parando'][i - 1]
    return this.fetchMeasurements().then(response => {
      this.datacollection = response
      this.labelscollection = response.map(() => this.counter++)
      this.$ws.on('chart:' + i, data => {
        this.counter++
        const nData = this.datacollection.concat([data]).slice(-30)
        this.datacollection = nData
        this.labelscollection = this.labelscollection.slice(-29)
        this.labelscollection.push(this.counter % 30)
      })
    })
  },
  beforeDestroy() {
    const i = parseInt(((Math.random() * 100) % 4) + 1, 10).toString()
    this.$ws.off('chart:' + i)
  },
  methods: {
    ...mapActions({
      fetchMeasurements: 'measurements/FETCH_MEASUREMENTS'
    })
  }
}
</script>

<style>
.small {
  max-width: 300px;
  margin: 25px auto;
}
</style>
