<template>
  <div class="small">
    <line-chart
      :chart-data="getCollection"
      :options="options"
      :style="{ width: '100%', height: '350px' }"
    ></line-chart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineChart from '~/components/Optimization/Charts/Line.js'

export default {
  components: {
    LineChart
  },
  data: () => ({
    label: '',
    color: 'transparent',
    labelscollection: [],
    datacollection: [],
    lineOpt: {
      backgroundColor: 'transparent',
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: 'transparent',
      pointHoverBorderColor: 'transparent',
      lineTension: 0.2
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      animation: false,
      title: {
        display: true,
        text: 'Verde'
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }),
  computed: {
    ...mapGetters({
      getDpi: 'optimization/GET_DPI',
      getDpiI: 'optimization/GET_DPI_I',
      getDfi: 'optimization/GET_DFI',
      getDfiI: 'optimization/GET_DFI_I'
    }),
    getCollection() {
      return {
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        datasets: [
          {
            label: 'DPI',
            borderColor: 'lightblue',
            data: this.getDpi.green.costMonth,
            ...this.lineOpt
          },
          {
            label: 'DP Informada',
            borderColor: 'darkblue',
            data: this.getDpiI.green.costMonth,
            ...this.lineOpt
          },
          {
            label: 'DFI',
            borderColor: 'lightgreen',
            data: this.getDfi.green.costMonth,
            ...this.lineOpt
          },
          {
            label: 'DF Informada',
            borderColor: 'darkgreen',
            data: this.getDfiI.green.costMonth,
            ...this.lineOpt
          }
        ]
      }
    }
  }
}
</script>

<style>
.small {
  width: 500px;
  overflow: hidden;
  margin: 25px auto;
  padding: 25px;
}
</style>
