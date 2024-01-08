<script setup>
const props = defineProps({
    articleType: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="content__sidebar">
        <div class="sidebar__item sidebar__item--first">
            <a class="sidebar__link sidebar__link--first" href="#"
                >{{ articleType }}</a
            >
        </div>
        <div class="sidebar">
            <ul class="sidebar__list">
                <li class="sidebar__item blog_order">
                    <h2 class="sidebar__link sidebar__link--black">
                        {{ title }}
                    </h2>
                </li>
            </ul>
        </div>
    </div>
</template>
