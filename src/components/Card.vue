<template>
  <section type="button"
          class="flex panel__card" :disabled="disable">
    <h2 class="text panel__card_text" :id="id"><slot></slot></h2>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: Number,
    disable: Boolean,
  },
};
</script>

<style lang="sass" scoped>
@import '@/main.sass'

.panel__card
  margin: 10px
  height: 100px
  width: $card-w
  background-color: $turquoise
  border: none
  &_text
    display: none
    color: $black
  &--show
    box-shadow: inset 0 0 20px $black-ligth, inset 0 0 9px $turquoise
  &--hide
    box-shadow: 0 0 20px $black-ligth, 0 0 9px $turquoise

</style>
