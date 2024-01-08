<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
    article: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="news__cart news__cart--width" data-id="8772">
        <div class="news__inner">
            <RouterLink to="/detailArtikel" class="news__image"
                ><img
                    class="ls-is-cached lazyloaded"
                    :alt= "article.title"
                    :src= "article.pictureUrl"
                    loading="lazy"
                />
            </RouterLink>
            <div class="news__description">
                <RouterLink to="/detailArtikel" class="news__big">{{
                    article.title
                }}</RouterLink>
                <p class="news__small"></p>
            </div>
            <div class="news__item">
                <RouterLink to="/detailArtikel" class="news__link"
                    >Baca Selengkapnya
                </RouterLink>
            </div>
        </div>
    </div>
</template>
