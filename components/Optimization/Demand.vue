<template>
  <div class="optimization-demand flex column py-2 px-1">
    <h3 class="px-1">Demanda (histórico de 12 meses)</h3>
    <div class="flex column pa-1">
      <label>Demanda Contratada Ponta ({{ demand.DCP | len }})</label>
      <optimization-tag
        :value="demand.DCP"
        @input="value => (demand.DCP = value)"
      ></optimization-tag>
    </div>
    <div class="flex column pa-1">
      <label>Demanda Contratada Fora Ponta ({{ demand.DCF | len }})</label>
      <optimization-tag
        :value="demand.DCF"
        @input="value => (demand.DCF = value)"
      ></optimization-tag>
    </div>
    <div class="flex column pa-1">
      <label>Demanda Medida Ponta ({{ demand.DLP | len }})</label>
      <optimization-tag
        :value="demand.DLP"
        @input="value => (demand.DLP = value)"
      ></optimization-tag>
    </div>
    <div class="flex column pa-1">
      <label>Demanda Medida Fora Ponta ({{ demand.DLF | len }})</label>
      <optimization-tag
        :value="demand.DLF"
        @input="value => (demand.DLF = value)"
      ></optimization-tag>
    </div>
    <div class="flex column pa-1">
      <label>
        Horas Ponta para o período calculado ({{ demand.Hp | len }})
      </label>
      <optimization-tag
        :value="demand.Hp"
        @input="value => (demand.Hp = value)"
      ></optimization-tag>
    </div>
  </div>
</template>

<script>
import OptimizationTag from '~/components/Optimization/Tag'

export default {
  name: 'OptimizationDemand',
  components: {
    OptimizationTag
  },
  filters: {
    len(value) {
      const len = (value || '').split(',').length
      return len > 1 ? len + ' meses' : len + ' mês'
    }
  },
  data: () => ({
    demand: {
      DCP: '1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000', // Demanda Contratada Ponta (histórico de 12 meses)
      DCF: '1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200,1200', // Demanda Contratada Fora Ponta (histórico de 12 meses)
      DLP: '1178,1057,1016,1193,1021,1142,834,825,833,1105,876,836', // Demanda Medida Ponta (histórico de 12 meses)
      DLF: '1370,1454,1397,1404,1272,1373,1167,1015,1208,1065,1283,1320', // Demanda Medida Fora Ponta (histórico de 12 meses)
      Hp: '100,100,100,100,100,100,100,100,100,100,100,100' // Horas Ponta para o período calculado
    }
  }),
  watch: {
    demand: {
      deep: true,
      handler(demand) {
        this.$emit('input', Object.assign({}, demand))
      }
    }
  },
  created() {
    return this.$emit('create', Object.assign({}, this.demand))
  }
}
</script>

<style scoped>
.optimization-demand {
  background-color: rgba(247, 165, 0, 1);
  color: #fff;
}
.optimization-demand label {
  font-size: 11px;
}
.optimization-demand input {
  padding: 5px 8px;
  border-radius: 3px;
  color: #686868;
  border: 1px solid #bebebe;
  outline: none;
}
</style>
