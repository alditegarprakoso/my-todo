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
        <img src="../assets/images/user.png" alt="user" class="w-14" />
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
        <p class="text-slate-blue font-medium">You’ve got 7 tasks to do.</p>
      </div>
      <div>
        <input
          v-model="newTask"
          type="text"
          placeholder="Search"
          class="w-60 bg-pale-white border-none rounded-full px-5 py-2 outline-none text-slate-purple urbanist-semibold"
        />
      </div>
    </div>
    <!-- Title and Search -->

    <!-- Add Todo -->
    <div class="mb-8">
      <div class="flex items-center">
        <PlusIcon class="mr-0" :active="newTodo !== '' ? true : false" />
        <input
          type="text"
          v-model="newTodo"
          placeholder="Create new Todo"
          class="w-full border-none px-5 py-2 outline-none text-slate-blue urbanist-semibold text-lg"
        />
      </div>
      <div class="flex items-center" v-if="newTodo !== ''">
        <EditIcon class="mr-0" :active="newDesc !== '' ? true : false" />
        <input
          type="text"
          v-model="newDesc"
          placeholder="Add description (optional)"
          class="w-full border-none px-5 py-2 outline-none text-slate-blue urbanist-semibold text-lg"
        />
      </div>
    </div>
    <!-- Add Todo -->

    <!-- List Todo -->
    <div>
      <div v-for="task in 5" :key="task" class="mb-5">
        <div class="flex items-center bg-pale-white px-5 py-4 rounded-xl">
          <input
            id="checkbox"
            type="checkbox"
            class="w-12 h-12 mr-5 border-slate-blue bg-transparent"
          />
          <div class="mr-3">
            <p class="text-slate-purple urbanist-semibold text-lg">
              Design sign up flow
            </p>
            <p class="text-slate-blue">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              iure ipsam eum sed nobis aliquam atque vitae nemo, enim at
              officiis quia tempore quo et veritatis adipisci ut vero voluptatum
              amet ea debitis magni molestias quam. Officiis voluptas dolores,
              quod voluptate maxime commodi nihil distinctio, repellendus
              accusamus perferendis rem cum?
            </p>
          </div>
          <div class="flex items-center">
            <button class="mr-3">
              <EditTodoIcon />
            </button>
            <button>
              <DeleteTodoIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- List Todo -->
  </div>
</template>

<script>
import LogoIcon from "@/components/icons/LogoIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import EditTodoIcon from "@/components/icons/EditTodoIcon.vue";
import DeleteTodoIcon from "@/components/icons/DeleteTodoIcon.vue";

export default {
  name: "Todo",
  components: {
    LogoIcon,
    PlusIcon,
    EditIcon,
    EditTodoIcon,
    DeleteTodoIcon,
  },
  data() {
    return {
      newTodo: "",
      newDesc: "",
      todos: [],
    };
  },
  methods: {
    setTodo() {
      // this.newTodo = this.newTodo.trim();
    },
  },
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
