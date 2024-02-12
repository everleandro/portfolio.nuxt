<template>
    <section id="about-me" class="mt-24">
        <div class="page-content">
            <e-row>
                <e-col cols="24" md="12" lg="10">
                    <img src="assets/about.png" />
                </e-col>
                <e-col cols="24" md="12" lg="14">
                    <h1 class="mb-8"><span class="d-flex align-center"><span class="header__line mr-4"></span>About
                            Me</span>
                    </h1>
                    <p>
                        I am a full-stack web developer with a passion for creating beautiful and functional web
                        applications. I
                        have
                        experience in developing web applications using modern tec am always looking for ways to improve my
                        skills and learn new technologies.
                    </p>
                    <p>ong understanding of web development best practices and am always looking for ways to improve my
                        skills and learn new technologies.elopme</p>
                    <div class="mb-3"> <img src="assets/sign.png" /></div>
                    <e-button color="primary" small width="150">Open to work</e-button>
                </e-col>
            </e-row>
            <div class="skills">
                <h2><span class="header__line mr-3"></span> My Skills</h2>
                <div class="pl-24">
                    <e-row>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                        <e-col cols="12" md="8">
                            <Slider />
                        </e-col>
                    </e-row>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
<style lang="scss">
#about-me {
    .e-col>img {
        width: calc(100% - 48px);
        margin: 24px;
    }

    .skills {
        position: relative;
        margin-top: 100px;

        >h2 {
            top: 100px;
            position: absolute;
            font-weight: 600;
            font-size: 1.8rem;
            left: -50px;
            display: flex;
            align-items: center;
            transform: rotate(-90deg);
        }
    }
}</style>
