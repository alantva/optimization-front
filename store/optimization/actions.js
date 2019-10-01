export default {
  FETCH_DPI({ commit, getters }) {
    const {
      DLP: dlp,
      pPC: ppc,
      pICMS: picms,
      TDPa: tdpa,
      TDPv: tdpv
    } = getters['GET_PARAMS']
    const params = { dlp, ppc, picms, tdpa, tdpv }
    return this.$axios
      .$get('/optimization/dpi', { params })
      .then(({ data }) => {
        commit('SET_DPI', data)
        return data
      })
      .catch(() => 0)
  },
  FETCH_DPI_I({ commit, getters }) {
    const {
      DLP: dlp,
      pPC: ppc,
      pICMS: picms,
      TDPa: tdpa,
      TDPv: tdpv,
      DPIi: dpii
    } = getters['GET_PARAMS']
    const params = { dlp, ppc, picms, tdpa, tdpv }
    return this.$axios
      .$get('/optimization/dpi/' + dpii, { params })
      .then(({ data }) => {
        commit('SET_DPI_I', data)
        return data
      })
      .catch(() => 0)
  },
  FETCH_DFI({ commit, getters }) {
    const {
      DLF: dlf,
      pPC: ppc,
      pICMS: picms,
      TDFa: tdfa,
      TDFv: tdfv
    } = getters['GET_PARAMS']
    const params = { dlf, ppc, picms, tdfa, tdfv }
    return this.$axios
      .$get('/optimization/dfi', { params })
      .then(({ data }) => {
        commit('SET_DFI', data)
        return data
      })
      .catch(() => 0)
  },
  FETCH_DFI_I({ commit, getters }) {
    const {
      DLF: dlf,
      pPC: ppc,
      pICMS: picms,
      TDFa: tdfa,
      TDFv: tdfv,
      DFIi: dfii
    } = getters['GET_PARAMS']
    const params = { dlf, ppc, picms, tdfa, tdfv }
    return this.$axios
      .$get('/optimization/dfi/' + dfii, { params })
      .then(({ data }) => {
        commit('SET_DFI_I', data)
        return data
      })
      .catch(() => 0)
  },
  DATA_CHANGE({ commit }, payload) {
    if (payload.blueTax) commit('SET_BLUE_TAX', payload.blueTax)
    if (payload.greenTax) commit('SET_GREEN_TAX', payload.greenTax)
    if (payload.demand) commit('SET_DEMAND', payload.demand)
    if (payload.otherTaxes) commit('SET_OTHER_TAXES', payload.otherTaxes)
    if (payload.actions) commit('SET_ACTIONS', payload.actions)
    return Promise.resolve()
  }
}
