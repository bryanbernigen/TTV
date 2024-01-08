<script setup>
const props = defineProps({
    directoryName: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <li>
        <a href="/">{{ directoryName }} </a
        ><i class="icon-caret-right"></i>
    </li>
</template>
