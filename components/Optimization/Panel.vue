<template>
  <div
    class="flex column grow justify-center align-center text--white"
    :style="{
      borderRadius: '10px',
      width: '300px',
      margin: '15px auto'
    }"
  >
    <span class="caption">{{ label }}</span>
    <span class="title">R$ {{ cost | toBRL }}</span>
    <span v-if="value" class="caption">Demanda</span>
    <span v-if="value" class="title">{{ value }}</span>
  </div>
</template>

<script>
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
  props: {
    label: {
      type: String,
      required: true
    },
    cost: {
      type: [String, Number],
      default: 0
    },
    value: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>

<style>
.small {
  width: 300px;
  margin: 15px auto;
}
</style>
