<script setup>
import SingleArticle from "@/components/SingleArticle.vue";
import { ref } from "vue";
import axios from "axios";

//Fetch data from API
const articles = ref([]);

const fetchArticles = async () => {
    await axios.get("http://localhost:5000/api/article/all").then((res) => {
        if (res.status === 200) {
            console.log(res.data);
            res.data.data.forEach((element) => {
                articles.value.push({
                    id: element._id,
                    title: element.title,
                    pictureUrl: element.pictureUrl,
                });
            });
        } else {
            console.log("Error with response");
            console.log(res);
        }
    });
};
await fetchArticles();
</script>

<template>
    <Suspense>
        <div class="container__inners">
            <div class="news">
                <div class="news__ticket">
                    <SingleArticle
                        v-for="article in articles"
                        :article="article"
                    />
                </div>
            </div>
            <a
                class="main-button main-button--ajax js-load-more"
                data-page="2"
                data-total-pages="145"
                data-url="/lifestyle/kesehatan-fisik"
                href="/lifestyle/kesehatan-fisik?page=2"
            >
                Lihat Lebih
            </a>
        </div>
    </Suspense>
</template>
