<template>
  <div>
    <div class="flex justify-center">
      <span class="title">Doc88 Monitor</span>
    </div>
    <div class="flex wrap">
      <component-line-chart></component-line-chart>
      <component-bar-chart></component-bar-chart>
      <component-panel></component-panel>
      <component-line-chart></component-line-chart>
      <component-bar-chart></component-bar-chart>
      <component-panel></component-panel>
      <component-line-chart></component-line-chart>
      <component-bar-chart></component-bar-chart>
      <component-panel></component-panel>
      <component-line-chart></component-line-chart>
      <component-bar-chart></component-bar-chart>
      <component-panel></component-panel>
      <component-line-chart></component-line-chart>
      <component-bar-chart></component-bar-chart>
      <component-panel></component-panel>
      <component-line-chart></component-line-chart>
      <component-bar-chart></component-bar-chart>
      <component-panel></component-panel>
    </div>
  </div>
</template>

<script>
import componentLineChart from '~/components/LineChart.vue'
import componentBarChart from '~/components/BarChart.vue'
import componentPanel from '~/components/Panel.vue'

export default {
  name: 'Doc88Monitor',
  components: {
    componentLineChart,
    componentBarChart,
    componentPanel
  }
}
</script>
