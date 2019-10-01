<template>
  <div class="optimization-other-taxes flex column py-2 px-1">
    <h3 class="px-1">Impostos</h3>
    <div class="flex column pa-1">
      <label>Alíquota de ICMS %</label>
      <input v-model="otherTaxes.pICMS" type="text" />
    </div>
    <div class="flex column pa-1">
      <label>Histórico de PIS/COFINS ({{ otherTaxes.pPC | len }})</label>
      <optimization-tag
        :value="otherTaxes.pPC"
        @input="value => (otherTaxes.pPC = value)"
      ></optimization-tag>
    </div>
    <div class="flex row pa-1">
      <input v-model="checked" type="checkbox" />
      <label>Calcular com impostos</label>
    </div>
  </div>
</template>

<script>
import OptimizationTag from '~/components/Optimization/Tag'

export default {
  name: 'OptimizationOtherTaxes',
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
    checked: true,
    otherTaxes: {
      pICMS: '0.29', // Alíquota de ICMS %
      pPC:
        '0.0672,0.0704,0.0787,0.0412,0.0726,0.0654,0.0749,0.0718,0.0621,0.048,0.0605,0.0446' // PIS/COFINS (histórico de 12 meses)
    }
  }),
  watch: {
    checked(checked) {
      const clear = {}
      if (!checked) {
        clear.pICMS = ''
        clear.pPC = ''
      }
      console.log(clear)
      this.$emit('input', Object.assign({}, this.otherTaxes, clear))
    },
    otherTaxes: {
      deep: true,
      handler(otherTaxes) {
        const clear = {}
        if (!this.checked) {
          clear.pICMS = ''
          clear.pPC = ''
        }
        this.$emit('input', Object.assign({}, otherTaxes, clear))
      }
    }
  },
  created() {
    const clear = {}
    if (!this.checked) {
      clear.pICMS = 0
      clear.pPC = Array(12).fill(0)
    }
    return this.$emit('create', Object.assign({}, this.otherTaxes, clear))
  }
}
</script>

<style scoped>
.optimization-other-taxes {
  background-color: rgba(255, 71, 92, 1);
  color: #fff;
}
.optimization-other-taxes label {
  font-size: 11px;
}
.optimization-other-taxes input {
  padding: 5px 8px;
  border-radius: 3px;
  color: #686868;
  border: 1px solid #bebebe;
  outline: none;
}
</style>
