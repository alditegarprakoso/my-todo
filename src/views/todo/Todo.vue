<template>
  <div class="px-48 py-10 min-h-screen">
    <!-- Top -->
    <div class="flex justify-between items-center mb-4">
      <!-- Logo -->
      <div class="flex items-center">
        <LogoIcon class="mr-3" />
        <p class="text-slate-purple urbanist-bold font-bold text-2xl">
          My Todo
        </p>
      </div>
      <!-- Logo -->

      <!-- User -->
      <div class="flex items-center">
        <p class="text-slate-purple mr-3 font-bold text-2xl">Username</p>
        <img src="@/assets/images/user.png" alt="user" class="w-14" />
      </div>
      <!-- User -->
    </div>
    <!-- Top -->

    <!-- Title and Search -->
    <div class="flex justify-between items-center mb-10">
      <div>
        <p class="text-[28px] font-bold">
          <span class="text-slate-purple">Welcome, </span>
          <span class="text-blue-ocean">Username.</span>
        </p>
        <p class="text-slate-blue font-medium">
          You’ve got {{ unCompletedTasks }} tasks to do.
        </p>
      </div>
      <div v-if="!isEdit">
        <input
          v-model="search"
          @input="searchFunc"
          type="text"
          placeholder="Search"
          class="w-60 bg-pale-white border-none rounded-full px-5 py-2 outline-none text-slate-purple urbanist-semibold"
        />
      </div>
    </div>
    <!-- Title and Search -->

    <!-- Add Todo -->
    <div class="mb-8">
      <div class="flex items-center mb-5">
        <PlusIcon :active="newTodo !== '' ? true : false" />
        <input
          type="text"
          v-model="newTodo"
          placeholder="Create new Todo"
          class="w-full border-none px-5 py-2 outline-none text-slate-blue urbanist-semibold text-lg"
          autofocus
          @keyup.enter="actionTodo"
        />
      </div>
      <div
        class="flex items-center mb-8 border-t-2 border-pale-white pt-5"
        v-if="newTodo !== ''"
      >
        <EditIcon :active="newDesc !== '' ? true : false" />
        <input
          type="text"
          v-model="newDesc"
          @keyup.enter="actionTodo"
          placeholder="Add description (optional)"
          class="w-full px-5 py-2 outline-none text-slate-blue urbanist-semibold text-lg"
        />
      </div>
      <div v-if="newTodo !== ''">
        <Button
          v-if="isEdit"
          buttonType="cancelEdit"
          class="mb-4"
          :click="cancelEdit"
        >
          Cancel
        </Button>
        <Button buttonType="todo" :click="actionTodo">
          {{ isEdit ? "Update Todo" : "Add Todo" }}
        </Button>
      </div>
    </div>
    <!-- Add Todo -->

    <!-- List Todo -->
    <div v-if="masterTodos.length > 0">
      <!-- Todo Uncompleted -->
      <div>
        <p class="text-slate-purple text-lg mb-5 urbanist-bold">
          Uncompleted Todo
        </p>
        <div v-if="unCompletedTasks > 0 && filterTodos.length > 0 && !isEdit">
          <div v-for="(todo, index) in filterTodos" :key="index" class="mb-5">
            <div
              v-if="!todo.is_completed"
              class="flex items-center justify-between bg-pale-white px-5 py-4 rounded-xl mb-5"
            >
              <TodoItem
                :todo="todo"
                :index="index"
                :editTodoFunc="editTodoFunc"
                :deleteTodo="deleteTodo"
              />
            </div>
          </div>
        </div>
        <div
          v-else-if="
            (unCompletedTasks < 1 || filterTodos.length < 1) && !isEdit
          "
        >
          <EmptyTask />
        </div>
      </div>
      <!-- Todo Uncompleted -->

      <!-- Todo Completed -->
      <div>
        <p class="text-slate-purple text-lg urbanist-bold mb-5">
          Completed Todo
        </p>
        <div v-if="completedTasks > 0 && filterTodos.length > 0 && !isEdit">
          <div
            v-if="filterTodos.length && !isEdit"
            v-for="(todo, index) in filterTodos"
            :key="index"
            class="mb-5"
          >
            <div>
              <div
                v-if="todo.is_completed"
                class="flex items-center justify-between bg-pale-white px-5 py-4 rounded-xl mb-5"
              >
                <TodoItem
                  :todo="todo"
                  :index="index"
                  :editTodoFunc="editTodoFunc"
                  :deleteTodo="deleteTodo"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else-if="(completedTasks < 1 || filterTodos.length < 1) && !isEdit"
        >
          <EmptyTask />
        </div>
      </div>
      <!-- Todo Completed -->
    </div>
    <div v-else-if="!masterTodos.length">
      <EmptyTask />
    </div>
    <!-- List Todo -->
  </div>
</template>

<script>
import LogoIcon from "@/components/icons/LogoIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import Button from "@/components/buttons/Button.vue";
import TodoItem from "./components/TodoItem.vue";
import EmptyTask from "./components/EmptyTask.vue";

export default {
  name: "Todo",
  components: {
    LogoIcon,
    PlusIcon,
    EditIcon,
    Button,
    TodoItem,
    EmptyTask,
  },
  computed: {
    completedTasks() {
      return this.masterTodos.filter((todo) => todo.is_completed).length;
    },
    unCompletedTasks() {
      return this.masterTodos.filter((todo) => !todo.is_completed).length;
    },
  },
  data() {
    return {
      search: "",
      newTodo: "",
      newDesc: "",
      masterTodos: [],
      filterTodos: [],
      todoEdit: null,
      isEdit: false,
    };
  },
  methods: {
    searchFunc() {
      if (this.search !== "") {
        this.filterTodos = this.masterTodos.filter((todo) =>
          todo.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.filterTodos = this.masterTodos;
      }
    },
    actionTodo() {
      if (this.isEdit) {
        this.updateTodo();
      } else {
        this.addTodo();
      }
    },
    addTodo() {
      if (this.newTodo !== "") {
        const optionDate = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };

        this.masterTodos.push({
          name: this.newTodo,
          description: this.newDesc,
          date: new Date().toLocaleDateString("id-ID", optionDate),
          is_completed: false,
        });

        this.filterTodos = this.masterTodos;
        this.newTodo = "";
        this.newDesc = "";
        this.$swal.fire("Added!", "Your todo has been added.", "success");
      }
    },
    editTodoFunc(todo) {
      this.isEdit = true;
      this.todoEdit = todo;
      this.newTodo = todo.name;
      this.newDesc = todo.description;
    },
    updateTodo() {
      this.todoEdit.name = this.newTodo;
      this.todoEdit.description = this.newDesc;
      this.masterTodos[this.todoEdit.index] = this.todoEdit;
      this.filterTodos = this.masterTodos;

      this.isEdit = false;
      this.newTodo = "";
      this.newDesc = "";
      this.editTodo = null;
      this.$swal.fire("Updated!", "Your todo has been updated.", "success");
    },
    cancelEdit() {
      this.isEdit = false;
      this.newTodo = "";
      this.newDesc = "";
      this.editTodo = null;
    },
    deleteTodo(index) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              "Deleted!",
              "Your todo has been deleted.",
              "success"
            );

            this.masterTodos.splice(index, 1);
            this.filterTodos = this.masterTodos;
          }
        });
    }
  },
  watch: {
    newTodo(newValue) {
      if (newValue === "" && !this.isEdit) {
        this.newDesc = "";
      }
    },
  },
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
