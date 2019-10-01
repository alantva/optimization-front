<template>
  <div class="optimization-actions flex column py-2 px-1">
    <h3 class="px-1">Ações</h3>
    <div class="flex column pa-1">
      <label>Demanda Ponta Informada</label>
      <input v-model="actions.DPIi" type="text" />
      <div class="flex wrap">
        <panel label="Informada (Verde)" :cost="getDpiI.green.cost"></panel>
        <panel label="Informada (Azul)" :cost="getDpiI.blue.cost"></panel>
        <panel
          label="Ideal (Verde)"
          :cost="getDpi.green.cost"
          :value="getDpi.green.dlp"
        ></panel>
        <panel
          label="Ideal (Azul)"
          :cost="getDpi.blue.cost"
          :value="getDpi.blue.dlp"
        ></panel>
      </div>
    </div>
    <div class="flex column pa-1">
      <label>Demanda Fora Ponta Informada</label>
      <input v-model="actions.DFIi" type="text" />
      <div class="flex wrap">
        <panel label="Informada (Verde)" :cost="getDfiI.green.cost"></panel>
        <panel label="Informada (Azul)" :cost="getDfiI.blue.cost"></panel>
        <panel
          label="Ideal (Verde)"
          :cost="getDfi.green.cost"
          :value="getDfi.green.dlf"
        ></panel>
        <panel
          label="Ideal (Azul)"
          :cost="getDfi.blue.cost"
          :value="getDfi.blue.dlf"
        ></panel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Panel from '~/components/Optimization/Panel'

export default {
  name: 'OptimizationActions',
  components: {
    Panel
  },
  data: () => ({
    actions: {
      DPIi: 1000,
      DFIi: 1200
    }
  }),
  computed: {
    ...mapGetters({
      getDpi: 'optimization/GET_DPI',
      getDpiI: 'optimization/GET_DPI_I',
      getDfi: 'optimization/GET_DFI',
      getDfiI: 'optimization/GET_DFI_I'
    })
  },
  watch: {
    actions: {
      deep: true,
      handler(actions) {
        this.$emit('input', Object.assign({}, actions))
      }
    }
  },
  created() {
    return this.$emit('create', Object.assign({}, this.actions))
  }
}
</script>

<style scoped>
.optimization-actions {
  background-color: rgba(255, 71, 92, 1);
  color: #fff;
}
.optimization-actions label {
  font-size: 11px;
}
.optimization-actions input {
  padding: 5px 8px;
  border-radius: 3px;
  color: #686868;
  border: 1px solid #bebebe;
  outline: none;
}
h2 {
  margin-top: 0;
}
</style>
