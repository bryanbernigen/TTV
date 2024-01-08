<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="header js-header header--top header--not-bottom">
        <div class="header__container header__container--second">
            <div class="header__new">
                <RouterLink to="/" class="header__logotip">
                    <img
                        src="https://static.honestdocs.id/assets/footer-logo-cb214c17fc4ea968b8e0564f38bbb4cb7be3ee14d57e0e823a847a26337bd280.svg"
                        loading="lazy"
                    />
                </RouterLink>
                <div class="header__link-shop">
                    <a
                        class="header__health-shop js-ga-nav-bar"
                        href="https://hdmall.id"
                        ><img
                            class="header__link-img"
                            src="https://static.honestdocs.id/assets/shop/icon-hdmall-e21ae4916c92d2e41d52be4afa2f4f9df2ae481dbfb5b8c96e704fc7c2547cda.svg"
                            loading="lazy"
                        />
                        <span class="is-regular"> Toko Kesehatan </span>
                        <span class="is-hover"> HDmall.id </span>
                    </a>
                </div>
            </div>
            <div class="header__row">
                <ul class="header__list header__list--second js-menu-links">
                    <li class="header__item">
                        <a
                            class="header__link js-ga-nav-bar header__link--second"
                            href="/penyakit"
                            >Penyakit</a
                        >
                    </li>
                    <li class="header__item">
                        <a
                            class="header__link header__link--second js-ga-nav-bar"
                            href="/obat"
                            >Obat</a
                        >
                    </li>
                    <li class="header__item">
                        <a
                            class="header__link header__link--second js-ga-nav-bar"
                            href="/rumah-sakit"
                            >Cari Rumah Sakit</a
                        >
                    </li>
                    <li class="header__item">
                        <a
                            class="header__link header__link--second js-ga-nav-bar"
                            href="/apotik"
                            >Apotik</a
                        >
                    </li>
                    <li class="header__item">
                        <a
                            class="header__link header__link--second js-ga-nav-bar"
                            href="/tanya-dokter"
                            >Tanya Dokter</a
                        >
                    </li>
                    <li class="header__item">
                        <RouterLink
                            to="/artikel"
                            class="header__link header__link--second js-ga-nav-bar"
                            >Artikel
                        </RouterLink>
                    </li>
                </ul>
                <ul class="header__account-list">
                    <li class="header__account-item">
                        <a
                            class="header__account-link header__link"
                            href="/my/users/sign_in"
                            >Masuk</a
                        >
                    </li>
                    <li class="header__account-item">
                        <a
                            class="header__account-link header__link"
                            href="/my/users/sign_up"
                            >Daftar</a
                        >
                    </li>
                </ul>
            </div>
            <div class="header__layer header__layer--other"></div>
        </div>

        <div class="progress-bar-top"></div>
    </header>
</template>