<template>
  <button
    @click="click"
    :class="{
      [buttonBlue]: buttonType === 'blue',
      [buttonTodo]: buttonType === 'todo',
      [buttonCancelEdit]: buttonType === 'cancelEdit',
      [buttonNews]: buttonType === 'news',
    }"
  >
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
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[25%]",
      buttonTodo:
        "w-full bg-blue-ocean hover:bg-slate-purple-darker text-white font-bold py-2 px-4 rounded",
      buttonCancelEdit:
        "w-full bg-slate-purple hover:bg-slate-purple-darker text-white font-bold py-2 px-4 rounded",
      buttonNews:
        "bg-blue-ocean hover:bg-slate-purple-darker text-white py-2 px-4 rounded-full w-auto",
    };
  },
};
</script>
