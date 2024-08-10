<template>
  <div class="mr-3 flex items-center">
    <input
      v-model="isCompleted"
      id="checkbox"
      type="checkbox"
      class="w-4 h-4 mr-5 border-slate-blue bg-transparent cursor-pointer"
    />
    <div>
      <p
        class="text-slate-purple urbanist-semibold text-lg"
        :class="{ 'line-through': todo.is_completed }"
      >
        {{ todo.name }}
      </p>
      <p
        class="text-slate-blue mb-2"
        :class="{ 'line-through': todo.is_completed }"
      >
        {{ todo.description }}
      </p>
      <p class="text-slate-blue text-xs">{{ todo.date }}</p>
    </div>
  </div>
  <div class="flex items-center">
    <button class="mr-3" @click="editTodoFunc({ ...todo, index })">
      <EditTodoIcon />
    </button>
    <button @click="deleteTodo(index)">
      <DeleteTodoIcon />
    </button>
  </div>
</template>

<script>
import EditTodoIcon from "@/components/icons/EditTodoIcon.vue";
import DeleteTodoIcon from "@/components/icons/DeleteTodoIcon.vue";

export default {
  name: "TodoItem",
  components: {
    EditTodoIcon,
    DeleteTodoIcon,
  },
  props: {
    todo: {
      type: Object,
    },
    index: {
      type: Number,
    },
    editTodoFunc: {
      type: Function,
    },
    deleteTodo: {
      type: Function,
    },
  },
  data() {
    return {
      isCompleted: this.todo.is_completed,
    };
  },
  watch: {
    isCompleted: {
      handler(newValue) {
        this.todo.is_completed = newValue;
        if (newValue) {
          this.$swal.fire(
            "Completed!",
            "Your todo has been completed.",
            "success"
          );
        }
        this.$emit("updateDataTodo", { is_completed: newValue, index: this.index });
      },
      deep: true,
    },
  },
};
</script>
