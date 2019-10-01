export default {
  GET_PARAMS: state => {
    const { blueTax, greenTax, demand, otherTaxes, actions } = state
    return {
      ...(blueTax
        ? {
            TDPa: blueTax.TDP,
            TDFa: blueTax.TDF,
            TusdPa: blueTax.TusdP,
            TusdFa: blueTax.TusdF,
            TEPa: blueTax.TEP,
            TEFa: blueTax.TEF
          }
        : null),
      ...(greenTax
        ? {
            TDPv: greenTax.TDP,
            TDFv: greenTax.TDF,
            TusdPv: greenTax.TusdP,
            TusdFv: greenTax.TusdF,
            TEPv: greenTax.TEP,
            TEFv: greenTax.TEF,
            CGPv: greenTax.CGP
          }
        : null),
      ...demand,
      ...otherTaxes,
      ...actions
    }
  },
  GET_DPI: state => {
    return state.di.dpi
  },
  GET_DPI_I: state => {
    return state.di.dpii
  },
  GET_DFI: state => {
    return state.di.dfi
  },
  GET_DFI_I: state => {
    return state.di.dfii
  }
}
