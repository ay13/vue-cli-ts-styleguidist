<template>
  <button :style="styles" @click="handleClick">
    <!-- @slot Use this slot to place the button content -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-button',
  props: {
    /** Sets the button font color
     * @deprecated Use color instead
     */
    color: {
      type: String,
      default: 'black',
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    styles(): any {
      return {
        color: this.color,
        background: this.background,
      };
    },
  },
  methods: {
    /** Triggered when button is clicked
     * @event click
     * @type {Event}
     */

    /** Event for Alligator's example
     * @event gator
     * @type {Event}
     */
    handleClick(e: any) {
      this.$emit('click', e);
    },
  },
});
</script>

<docs>
This button is amazing, use it responsibly.

## Examples

Orange button:

```jsx
<app-button color="red">Push Me</app-button>
```

Ugly button with pink font and blue background:

```jsx
<app-button color="pink" background="blue">
  Ugly button
</app-button>
```

Button containing custom tags:

```jsx
<app-button>
  Text with <b>bold</b>
</app-button>
```
</docs>