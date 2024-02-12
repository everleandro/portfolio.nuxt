<template>
    <section id="home" class="home-section grey--light">
        <div class="page-content pt-6 px-3">
            <div class="info">
                <div class="info__content">
                    <span class="mb-3"> <span class="header__line mr-4"></span> Hello</span>
                    <h1>I'm <b class="primary--text">Ever</b> Santiesteban</h1>
                    <p>+10 años de experiencia. Desarrollador Web y Creador de Contenido . De Barcelona, España.
                        Especializado
                        en
                        crear aplicaciones únicas.</p>
                    <e-button color="primary" small class="mt-12" width="150">
                        DOWNLOAD CV
                    </e-button>
                </div>
                <div class="info__social-network pb-3 pr-3">
                    <e-button :icon="$icon.gitHub" x-small text color="grey" hover-color="primary" rounded />
                    <e-button :icon="$icon.linkedin" x-small text color="grey" hover-color="primary" rounded />
                    <e-button :icon="$icon.mail" x-small text color="grey" hover-color="primary" rounded />
                </div>
            </div>
            <img src="assets/profile.png" alt="">
            <span class="scroll-down">scroll down &#8594;</span>
        </div>
    </section>
    <AboutMe />
    <Experience />
    <Projects />
    <Contact />
</template>
<style lang="scss">
.header__line {
    width: 25px;
    display: block;
    height: 1px;
    background: currentColor;
}

.home-section {
    .page-content {
        display: flex;
        justify-content: center;
        height: calc(100vh - 64px);
        position: relative;


        .scroll-down {
            transform: rotate(90deg);
            white-space: nowrap;
            align-self: flex-end;
            text-transform: uppercase;
            font-size: small;
            position: absolute;
            bottom: 80px;
            right: -44px;
            font-weight: 500;
        }

        img {
            height: 100%;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            &__content {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            }

            h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
                white-space: nowrap;
            }


            span {
                font-weight: 500;
                text-transform: uppercase;
                display: flex;
                font-size: small;
                align-items: center;
            }

            p {
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
            }
        }
    }
}
</style>