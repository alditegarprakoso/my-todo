export const getNews = async () => {
  try {
    const response = await fetch(
      "https://api-berita-indonesia.vercel.app/antara/terbaru"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error
  }
};
