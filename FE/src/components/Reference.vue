<script setup>
const props = defineProps({
    references: {
        type: Array,
        required: true,
    },
});
const numberOfReferences = props.references.length;
</script>

<template>
    <div class="references">
        <div class="references__container">
            <div class="references__title">
                {{ numberOfReferences }} Referensi
            </div>
            <div class="references__description">
                Tim Editorial HonestDocs berkomitmen untuk memberikan informasi
                yang akurat kepada pembaca kami. Kami bekerja dengan dokter dan
                praktisi kesehatan serta menggunakan sumber yang dapat dipercaya
                dari institusi terkait. Anda dapat mempelajari lebih lanjut
                tentang
                <span
                    ><a target="_blank" href="/campaigns/hd-editorial-process"
                        >proses editorial</a
                    ></span
                >
                kami di sini.
            </div>
            <div class="references__list">
                <div id="ShowedReferences" v-for="reference in references">
                    <div class="references__text">
                        <div class="references__item" v-html="reference"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
