<script setup>
import Validate from "./Validate.vue";
import Summary from "./Summary.vue";
import Content from "./Content.vue";

const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const formatDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("id-ID", { month: "long" });
    const day = dateObj.toLocaleString("id-ID", { day: "numeric" });
    const year = dateObj.toLocaleString("id-ID", { year: "numeric" });
    return `${day} ${month} ${year}`;
};

const publishDate = formatDate(props.article.publishDate);
const updateDate = formatDate(props.article.lastUpdateDate);
const reviewDate = formatDate(props.article.lastReviewDate);
</script>

<template>
    <div class="article">
        <Validate v-if="props.article.isValidated" />

        <h1 class="ask__title">
            {{ props.article.title }}
        </h1>
        <i class="article__time-update">
            Dipublish tanggal: {{ publishDate }}
            <i>Update terakhir: {{ updateDate }}</i>
            <i> Tinjau pada {{ reviewDate }} </i>
            <i>Waktu baca: {{ props.article.timeToRead }} menit</i>
        </i>

        <hr />

        <div class="article__image">
            <img
                class="ls-is-cached lazyloaded"
                :alt=props.article.title
                :src=props.article.pictureUrl
                loading="lazy"
            />
        </div>

        <Summary :summaries="props.article.summary"/>
        <Content :contents="props.article.content" :references="props.article.reference"/>
    </div>
</template>
