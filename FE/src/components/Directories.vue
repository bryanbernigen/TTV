<script setup>
import DirectoryDetail from "./DirectoryDetail.vue";
const props = defineProps({
    directories: {
        type: Array,
        required: true,
    },
});
const directoryWithoutLast = props.directories.slice(0, -1);
const lastDirectory = props.directories.slice(-1);
</script>

<template>
    <div class="breadcrumbs" style="padding: 20px 0px">
        <ol>
            <DirectoryDetail
                v-for="directory in directoryWithoutLast"
                :directoryName="directory"/>
            <li>{{ lastDirectory[0] }}</li>
        </ol>
    </div>
</template>

<style>
@font-face {
    font-family: "icomoon";
    src: url("https://www.honestdocs.id/assets/icomoon/icomoon-7381d864e3a6c0b475c8a0fdd71824467902a2856cfab3e91aa5fc682f7cb18a.ttf?q10tot");
    src: url("https://www.honestdocs.id/assets/icomoon/icomoon-7381d864e3a6c0b475c8a0fdd71824467902a2856cfab3e91aa5fc682f7cb18a.ttf?q10tot")
            format("embedded-opentype"),
        url("https://www.honestdocs.id/assets/icomoon/icomoon-7381d864e3a6c0b475c8a0fdd71824467902a2856cfab3e91aa5fc682f7cb18a.ttf?q10tot")
            format("woff"),
        url("https://www.honestdocs.id/assets/icomoon/icomoon-7381d864e3a6c0b475c8a0fdd71824467902a2856cfab3e91aa5fc682f7cb18a.ttf?q10tot")
            format("truetype"),
        url("https://www.honestdocs.id/assets/icomoon/icomoon-7381d864e3a6c0b475c8a0fdd71824467902a2856cfab3e91aa5fc682f7cb18a.ttf?q10tot")
            format("svg");
    font-weight: normal;
    font-style: normal;
}
</style>
