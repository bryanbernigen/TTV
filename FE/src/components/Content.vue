<script setup>
import Reference from "./Reference.vue";

const props = defineProps({
    contents: {
        type: Array,
        required: true,
    },
    references: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="article__content fr-view">
        <div v-for="content in contents">
            <div v-html="content"></div>
        </div>

        <Reference :references="references" />

        <div class="blog_article-disclaimer">
            <hr />
            <p></p>
            <p>
                Artikel ini hanya sebagai informasi kesehatan, bukan diagnosis
                medis. HonestDocs menyarankan Anda untuk tetap melakukan
                konsultasi langsung dengan dokter yang ahli dibidangnya.
            </p>
            <p></p>
        </div>

        <div class="article__rating-wrap">
            <p class="js-article-thanks">
                Terima kasih sudah membaca. Seberapa bermanfaat informasi ini
                bagi Anda?<br />(1 Tidak bermanfaat / 5 Sangat bermanfaat)
            </p>
            <p class="js-article-feedback" style="display: none">
                Terima kasih atas saran dan masukannya! Kami akan meningkatkan
                kualitas layanan kami agar lebih bermanfaat.
            </p>
            <div class="rating" data-score="0"></div>
        </div>
    </div>
</template>
