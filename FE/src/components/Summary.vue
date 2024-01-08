<script setup>
const props = defineProps({
    summaries: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <details class="summary" open>
        <summary class="summary__header">
            <p class="summary__title">Ringkasan</p>
            <div>
                <p class="summary__subtitle expand">Buka</p>
                <p class="summary__subtitle close">Tutup</p>
            </div>
        </summary>
        <ul>
            <li v-for="summary in summaries">
                <div v-html="summary"></div>
            </li>
        </ul>
    </details>
</template>
