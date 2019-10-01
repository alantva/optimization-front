<template>
  <div
    class="optimization-tax flex column py-2 px-1"
    :class="{ [color]: true }"
  >
    <h3 class="px-1">Tarifas</h3>
    <div class="flex column pa-1">
      <label>Tarifa de Demanda Ponta</label>
      <input v-model="tax.TDP" type="text" />
    </div>
    <div class="flex column pa-1">
      <label>Tarifa de Demanda Fora Ponta</label>
      <input v-model="tax.TDF" type="text" />
    </div>
    <div class="flex column pa-1">
      <label>Tarifa de Uso do Sistema de Distribuição Ponta (R$/MWh)</label>
      <input v-model="tax.TusdP" type="text" />
    </div>
    <div class="flex column pa-1">
      <label>
        Tarifa de Uso do Sistema de Distribuição Fora Ponta (R$/MWh)
      </label>
      <input v-model="tax.TusdF" type="text" />
    </div>
    <div class="flex column pa-1">
      <label>Tarifa de Energia Ponta</label>
      <input v-model="tax.TEP" type="text" />
    </div>
    <div class="flex column pa-1">
      <label>Tarifa de Energia Fora Ponta</label>
      <input v-model="tax.TEF" type="text" />
    </div>
    <div v-if="color === 'green'" class="flex column pa-1">
      <label>Custo do Gerador no horário de Ponta (Em R$/kWh)</label>
      <input v-model="tax.CGP" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptimizationTax',
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },
  data: () => ({
    tax: {
      TDP: '32.44', // Tarifa de Demanda Ponta
      TDF: '14.6', // Tarifa de Demanda Fora Ponta
      TusdP: '0.07562', // Tarifa de Uso do Sistema de Distribuição Ponta (R$/MWh)
      TusdF: '0.07562', // Tarifa de Uso do Sistema de Distribuição Fora Ponta (R$/MWh)
      TEP: '0.50013', // Tarifa de Energia Ponta
      TEF: '0.2993', // Tarifa de Energia Fora Ponta
      CGP: '0' // Custo do Gerador no horário de Ponta (Em R$/kWh)
    }
  }),
  watch: {
    tax: {
      deep: true,
      handler(tax) {
        this.$emit('input', Object.assign({}, tax))
      }
    }
  },
  created() {
    return this.$emit('create', Object.assign({}, this.tax))
  }
}
</script>

<style scoped>
.optimization-tax {
  color: #fff;
}
.optimization-tax.blue {
  background: rgba(80, 83, 174, 1);
}
.optimization-tax.green {
  background: rgba(57, 163, 57, 1);
}
.optimization-tax label {
  font-size: 11px;
}
.optimization-tax input {
  padding: 5px 8px;
  border-radius: 3px;
  color: #686868;
  border: none;
  outline: none;
}
</style>
