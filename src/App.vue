<template>
  <div :class="[
          'special',
          `special--${$store.state.params.location}`,
       ]"
       v-observe-visibility="{
           callback: visibilityChanged,
           once: true,
       }">
    <div class="special__container">Hello, this is a special project</div>
  </div>
</template>

<script>
import * as Analytics from './lib/analytics';

export default {
  name: 'App',
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        Analytics.sendEvent('Project', 'Show');
      }
    },
  },
  components: {},
};
</script>

<style lang="stylus">
.special
  position: relative
  z-index: 99
  max-width: 100%
  font-family: 'Roboto', sans-serif
  font-size: 16px
  line-height: normal
  text-size-adjust: 100%
  background-color: transparent
  overflow: hidden

  & *
  & *:before
  & *:after
    box-sizing: border-box

  & svg
    display block
    fill currentColor
    pointer-events none

  & b
    font-weight: 700

  & button
    margin: 0
    padding: 0
    font-family: inherit
    user-select: none
    outline: none
    box-shadow: none
    appearance: none
    cursor: pointer

  &__container
    width: 640px
    max-width: 100%
    margin: 0 auto
    padding: 0 15px

    @media (min-width: 640px)
      padding: 0 20px
</style>
