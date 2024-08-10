<template>
  <div class="px-48 py-10 min-h-screen">
    <div class="mb-5">
      <button class="text-slate-purple hover:text-blue-ocean" @click="goToTodo">
        <p class="font-bold bg-blue-ocean text-white py-1 px-6 rounded-full">
          Back
        </p>
      </button>
    </div>

    <input
      type="text"
      v-model="search"
      @input="filterNews"
      placeholder="Search News"
      class="w-full bg-pale-white border-none rounded-full px-5 py-2 outline-none text-slate-purple mb-10"
    />

    <div class="flex flex-wrap justify-around w-full">
      <div
        class="max-w-[30%] rounded overflow-hidden shadow-lg bg-white mb-8"
        v-for="(data, index) in newsFiltered"
        :key="index"
      >
        <img class="w-full" :src="data.thumbnail" alt="Placeholder Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ data.title }}</div>
          <p class="text-gray-700 text-base">
            {{ data.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNews } from "@/services/news_services";

export default {
  name: "News",
  data() {
    return {
      search: "",
      news: [],
      newsFiltered: [],
    };
  },
  methods: {
    goToTodo() {
      this.$router.push({ path: "/todo" });
    },
    getDataNews() {
      getNews()
        .then((res) => {
          this.news = res.data.posts;
          this.newsFiltered = res.data.posts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterNews() {
      if (this.search !== "") {
        this.newsFiltered = this.news.filter((news) =>
          news.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.newsFiltered = this.news;
      }
    },
  },
  created() {
    this.getDataNews();
  },
};
</script>
