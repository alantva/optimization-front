<template>
  <div
    class="flex column justify-center align-center text--white small"
    :style="{
      backgroundColor: color,
      borderRadius: '10px'
    }"
  >
    <span class="caption">{{ labelcollection }}</span>
    <span class="title">
      {{ measurecollection }} {{ datacollection | toBRL }}
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  filters: {
    toBRL(number) {
      const regex3nDot = /(?!\b)(\d{3}(?=(\d{3})*\b))/g
      const fNumber = parseFloat(number)
      let fRes
      if (!isNaN(fNumber)) {
        fRes = fNumber.toFixed(2)
        const tmp = fRes.split('.')
        fRes = tmp[0].replace(regex3nDot, '.$1')
        if (tmp[1] && Number(tmp[1]) > 0) {
          fRes = `${fRes},${tmp[1]}`
        }
      }
      return fRes
    }
  },
  data: () => ({
    color: 'transparent',
    labelcollection: '',
    measurecollection: '',
    datacollection: 0
  }),
  created() {
    const i = parseInt(((Math.random() * 100) % 4) + 1, 10).toString()
    const colors = [
      '#f87979',
      'rgba(80, 83, 174, 1)',
      'rgba(125, 80, 174, 1)',
      'rgba(80, 174, 171, 1)'
    ]
    this.color = colors[i - 1]
    const labels = ['Rápido', 'Normal', 'Devagar', 'Quase Parando']
    const measures = ['R$', 'kW', 'MWh', 'kWh']
    this.labelcollection = labels[i - 1]
    this.measurecollection = measures[i - 1]
    return this.fetchMeasurement().then(response => {
      this.datacollection = response.data
      this.$ws.on('panel:' + i, data => {
        this.datacollection = data
      })
    })
  },
  beforeDestroy() {
    const i = parseInt(((Math.random() * 100) % 4) + 1, 10).toString()
    this.$ws.off('panel:' + i)
  },
  methods: {
    ...mapActions({
      fetchMeasurement: 'measurements/FETCH_MEASUREMENT'
    })
  }
}
</script>

<style>
.small {
  width: 300px;
  margin: 15px auto;
}
</style>
