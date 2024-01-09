<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import LeftContent from "@/components/LeftContent.vue";
import MainContent from "@/components/MainContent.vue";

const article = ref({});

//Fetch data from API
const route = useRoute();
const articleId = route.params.id;
const fetchData = async () => {
    await axios
        .get("http://localhost:5000/api/article/" + articleId, {
            withCredentials: false,
        })
        .then((res) => {
            if (res.status === 200) {
                article.value = res.data.data;
                fetchAuthorAndReviewer();
            } else {
                console.log("Error with response");
                console.log(res);
            }
        });
};

const fetchAuthorAndReviewer = async () => {
    await axios
        .get("http://localhost:5000/api/user/" + article.value.authorId, {
            withCredentials: false,
        })
        .then((res) => {
            if (res.status === 200) {
                article.value.author = res.data.user;
            } else {
                console.log("Error with response");
                console.log(res);
            }
        });
    await axios
        .get("http://localhost:5000/api/user/" + article.value.reviewerId, {
            withCredentials: false,
        })
        .then((res) => {
            if (res.status === 200) {
                article.value.reviewer = res.data.user;
            } else {
                console.log("Error with response");
                console.log(res);
            }
        });
};
await fetchData();
await fetchAuthorAndReviewer();
</script>

<template>
    <section class="section">
        <div class="container container--fluid">
            <div class="container__inners">
                <div class="content content--type">
                    <LeftContent
                        :title="article.title"
                        article-type="Kesehatan Fisik"
                    ></LeftContent>
                    <MainContent :article="article"></MainContent>
                </div>
            </div>
        </div>
        <div
            aria-labelledby="myModalLabel"
            class="modal fade modal-article"
            id="article-modal"
            role="dialog"
            tabindex="-1"
        >
            <div class="modal-attachments__content">
                <div
                    class="modal-attachments__container modal-attachments__container--fact"
                >
                    <button
                        aria-label="Close"
                        class="close modal-attachments__close"
                        data-dismiss="modal"
                        type="button"
                    ></button>
                    <h2>Standar Pemeriksaan Konten HonestDocs</h2>
                    <p>
                        Konten ini ditulis atau ditinjau oleh praktisi kesehatan
                        dan didukung oleh setidaknya tiga referensi dan sumber
                        yang dapat dipercaya.
                    </p>
                    <p>
                        Tim Editorial HonestDocs berkomitmen untuk mengirimkan
                        konten yang akurat, komprehensif, mudah dipahami,
                        terbaru, dan dapat ditindaklanjuti. Anda dapat membaca
                        <span
                            ><a
                                target="_blank"
                                href="/campaigns/hd-editorial-process"
                                >proses editorial</a
                            ></span
                        >
                        lengkap di sini.
                    </p>
                    <p></p>
                    <p>
                        Jika Anda memiliki pertanyaan atau komentar tentang
                        artikel kami, Anda dapat memberi tahu kami melalui
                        WhatsApp di
                        <a href="tel:0821-2425-5233">0821-2425-5233</a> atau
                        email di<a href="mailto:support@honestdocs.id">
                            support@honestdocs.id</a
                        >
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>
