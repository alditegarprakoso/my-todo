<template>
  <button :class="{ [buttonBlue]: buttonType === 'blue' }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    click: {
      type: Function,
    },
    buttonType: {
      type: String,
    },
  },
  data() {
    return {
      buttonBlue:
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-5/6",
    };
  },
};
</script>
