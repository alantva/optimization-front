export default {
  SET_BLUE_TAX: (state, blueTax = {}) => {
    state.blueTax = blueTax
  },
  SET_GREEN_TAX: (state, greenTax = {}) => {
    state.greenTax = greenTax
  },
  SET_DEMAND: (state, demand = {}) => {
    state.demand = demand
  },
  SET_OTHER_TAXES: (state, otherTaxes = {}) => {
    state.otherTaxes = otherTaxes
  },
  SET_ACTIONS: (state, actions = {}) => {
    state.actions = actions
  },
  SET_DPI: (state, dpi = {}) => {
    state.di.dpi = dpi
  },
  SET_DPI_I: (state, dpii = {}) => {
    state.di.dpii = dpii
  },
  SET_DFI: (state, dfi = {}) => {
    state.di.dfi = dfi
  },
  SET_DFI_I: (state, dfii = {}) => {
    state.di.dfii = dfii
  }
}
