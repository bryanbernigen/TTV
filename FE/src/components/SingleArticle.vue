<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});

const detailRoute = "/detailArtikel/" + props.article.id;
</script>

<template>
    <div class="news__cart news__cart--width">
        <div class="news__inner">
            <router-link :to="detailRoute" class="news__image"
                ><img
                    class="ls-is-cached lazyloaded"
                    :alt= "article.title"
                    :src= "article.pictureUrl"
                    loading="lazy"
                />
            </router-link>
            <div class="news__description">
                <router-link :to="detailRoute" class="news__big">{{
                    article.title
                }}</router-link>
                <p class="news__small"></p>
            </div>
            <div class="news__item">
                <router-link :to="detailRoute" class="news__link"
                    >Baca Selengkapnya
                </router-link>
            </div>
        </div>
    </div>
</template>
