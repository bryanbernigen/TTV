<script setup>
const props = defineProps({
    author: {
        type: Object,
        required: true,
    },
    reviewer: {
        type: Object,
        required: true,
    },
});
console.log(props);
</script>

<template>
    <div class="checked-info">
        <a href="/campaigns/author-adelia-marista"
            ><div class="checked-info__item">
                <div class="checked-info__image">
                    <img
                        :alt="props.author.name"
                        :src="props.author.profilePictureUrl"
                        loading="lazy"
                    />
                </div>
                <div class="checked-info__details">
                    <div class="checked-info__title">Ditulis oleh</div>
                    <div class="checked-info__name">
                        {{ props.author.name }}
                    </div>
                </div>
            </div> </a
        ><a href="/campaigns/dr-ahmad-mulisin"
            ><div class="checked-info__item">
                <div class="checked-info__image">
                    <img
                        :alt="props.reviewer.name"
                        :src="props.reviewer.profilePictureUrl"
                        loading="lazy"
                    />
                </div>
                <div class="checked-info__details">
                    <div class="checked-info__title">Ditinjau oleh</div>
                    <div class="checked-info__name">{{ props.reviewer.name }}</div>
                </div>
            </div>
        </a>
    </div>
</template>
