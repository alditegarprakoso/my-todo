<template>
  <div className="flex flex-col items-center justify-center p-3 h-[97vh]">
    <!-- Illustration -->
    <img src="../assets/images/illustration.jpg" alt="illustration" class="w-5/6" />
    <!-- Illustration -->

    <!-- Kickstart -->
    <div className="text-center mb-10">
      <p className="text-2xl font-bold mb-7">
        Keep On Track <br />
        With MyTodo
      </p>
      <p className="text-sm text-gray-400 italic">
        Make Your Life Easier and Organized
      </p>
    </div>
    <!-- Kickstart -->

    <!-- Button Next -->
    <Button buttonType="blue">
        Let's Go !
    </Button>
    <!-- Button Next -->
  </div>
</template>

<script>
import Button from "../components/buttons/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>
