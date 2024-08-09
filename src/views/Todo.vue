<template>
  <div class="px-48 py-10 min-h-screen">
    <!-- Top -->
    <div class="flex justify-between items-center mb-4">
      <!-- Logo -->
      <div class="flex items-center">
        <LogoIcon class="mr-3" />
        <p class="text-slate-purple font-bold text-2xl">Todo App</p>
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
    <div class="flex justify-between items-center">
      <div>
        <p class="text-[28px] font-bold">
          <span class="text-slate-purple">Welcome,</span>
          <span class="text-blue-ocean">Username.</span>
        </p>
        <p class="text-slate-blue font-medium">You’ve got 7 tasks to do.</p>
      </div>
      <div>
        <input
          v-model="newTask"
          type="text"
          placeholder="Search"
          class="w-60 bg-pale-white border-none rounded-full px-5 py-2 outline-none"
        />
      </div>
    </div>
    <!-- Title and Search -->
  </div>
</template>

<script>
import LogoIcon from "../components/icons/LogoIcon.vue";

export default {
  name: "Todo",
  components: {
    LogoIcon,
  },
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {},
};
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>
