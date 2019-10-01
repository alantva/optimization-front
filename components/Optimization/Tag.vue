<template>
  <vue-tags-input
    v-model="tag"
    :tags="tags"
    placeholder=""
    :add-on-key="[13, ',']"
    :maxlength="255"
    :validation="validation"
    :avoid-adding-duplicates="false"
    :is-duplicate="() => false"
    style="max-width: 100%"
    @tags-changed="newTags => (tags = newTags)"
  />
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input'

export default {
  name: 'Tag',
  components: {
    VueTagsInput
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    tag: '',
    tags: [],
    validation: [
      {
        classes: 'no-number',
        rule: tag => isNaN(tag.text),
        disableAdd: true
      }
    ]
  }),
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.tags = value.split(',').map(v => ({
          text: v,
          classes: 'no-number'
        }))
      }
    },
    tags: {
      handler(values) {
        this.$emit('input', values.map(v => v.text).join(','))
      }
    }
  }
}
</script>
