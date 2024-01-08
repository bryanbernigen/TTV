<script setup>
import Directories from "./Directories.vue";
import ArticleWritter from "./ArticleWritter.vue";
import Article from "./Article.vue";

const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const directories = ["Artikel Kesehatan", "Lifestyle", "Kesehatan Fisik", props.article.title];
</script>

<template>
    <div class="content__basic">
        <Directories :directories="directories" />
        <ArticleWritter :author="props.article.author" :reviewer="props.article.reviewer" />
        <Article :article="props.article" />
    </div>
</template>
