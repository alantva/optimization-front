<template>
  <div class="flex column" :style="{ minHeight: '100vh' }">
    <div class="flex" :style="{ flex: '1 0 50%' }">
      <optimization-actions
        :style="{ flex: '1 0 650px' }"
        @create="actions => dataChange({ actions })"
        @input="handleActions"
      ></optimization-actions>
      <optimization-chart-di-green></optimization-chart-di-green>
      <optimization-chart-di-blue></optimization-chart-di-blue>
    </div>
    <div class="flex" :style="{ flex: '1 0 50%' }">
      <div class="flex nowrap">
        <optimization-tax
          color="green"
          class="grow"
          @create="greenTax => dataChange({ greenTax })"
          @input="handleGreenTax"
        ></optimization-tax>
        <optimization-tax
          class="grow"
          @create="blueTax => dataChange({ blueTax })"
          @input="handleBlueTax"
        ></optimization-tax>
      </div>
      <div class="flex nowrap">
        <div class="flex">
          <optimization-demand
            class="grow"
            @create="demand => dataChange({ demand })"
            @input="handleDemand"
          ></optimization-demand>
        </div>
        <div class="flex">
          <optimization-other-taxes
            class="grow"
            @create="otherTaxes => dataChange({ otherTaxes })"
            @input="handleOtherTaxes"
          ></optimization-other-taxes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import optimizationActions from '~/components/Optimization/Actions'
import optimizationDemand from '~/components/Optimization/Demand'
import optimizationOtherTaxes from '~/components/Optimization/OtherTaxes'
import optimizationTax from '~/components/Optimization/Tax'
import optimizationChartDiBlue from '~/components/Optimization/ChartDiBlue'
import optimizationChartDiGreen from '~/components/Optimization/ChartDiGreen'

export default {
  name: 'Otimizacao',
  components: {
    optimizationActions,
    optimizationDemand,
    optimizationOtherTaxes,
    optimizationTax,
    optimizationChartDiBlue,
    optimizationChartDiGreen
  },
  mounted() {
    return Promise.all([
      this.fetchDpi(),
      this.fetchDpiI(),
      this.fetchDfi(),
      this.fetchDfiI()
    ])
  },
  methods: {
    ...mapActions({
      fetchDpi: 'optimization/FETCH_DPI',
      fetchDpiI: 'optimization/FETCH_DPI_I',
      fetchDfi: 'optimization/FETCH_DFI',
      fetchDfiI: 'optimization/FETCH_DFI_I',
      dataChange: 'optimization/DATA_CHANGE'
    }),
    handleBlueTax(blueTax) {
      return this.dataChange({ blueTax }).then(() => this.fetchAll())
    },
    handleGreenTax(greenTax) {
      return this.dataChange({ greenTax }).then(() => this.fetchAll())
    },
    handleDemand(demand) {
      return this.dataChange({ demand }).then(() => this.fetchAll())
    },
    handleOtherTaxes(otherTaxes) {
      return this.dataChange({ otherTaxes }).then(() => this.fetchAll())
    },
    handleActions(actions) {
      return this.dataChange({ actions }).then(() => this.fetchAll())
    },
    fetchAll() {
      return Promise.all([
        this.fetchDpi(),
        this.fetchDpiI(),
        this.fetchDfi(),
        this.fetchDfiI()
      ])
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column wrap;
}

.fieldGroup {
  flex: 1 0 100px;
}

.field {
  display: flex;
  padding: 5px;
}

.field.huge > input {
  width: 800px;
}

.field.large > input {
  width: 500px;
}

.field > label {
  width: 150px;
}
</style>
