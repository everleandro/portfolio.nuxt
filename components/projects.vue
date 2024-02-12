<template>
    <section id="projects" class="projects-section">
        <div class="page-content pt-6 px-3">
            <h1>Projects</h1>
            <e-row>
                <e-col v-for="i in 2" :key="i" cols="24" sm="12">
                    <div class="projects-card">
                        <div class="card-image">
                            <img v-if="i === 1" src="@/assets/projects/drocket.png" alt="">
                            <img v-else src="@/assets/projects/dashboard.png" alt="">
                        </div>
                        <div class="pa-4">
                            <h2 class="mb-3"> Drocket Ui Library</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita enim cum vel assumenda
                                voluptatem iste mollitia, recusandae in dolorem praesentium architecto cupiditate ipsum
                                similique non rerum nisi temporibus minima eveniet.</p>
                            <e-button text color="grey-letter" small>
                                <span class="d-flex">
                                    <span class="text-bar"></span>
                                    <span class="text-transform--capitalize">read More</span>
                                </span>
                            </e-button>
                        </div>
                    </div>
                </e-col>
            </e-row>
        </div>
    </section>
</template>
<style lang="scss">
.projects {
    &-section {
        margin-top: 100px;
        position: relative;

        .text-transform--capitalize {
            text-transform: capitalize;
        }

        .text-bar {
            width: 25px;
            display: block;
            margin-inline: 12px;
            height: 1px;
            background: currentColor;
            align-self: center;
        }

        .page-content {
            &>h1 {
                text-align: center;
                letter-spacing: 1px;
                margin-bottom: 48px;
                margin-top: 24px;
                font-size: 2.3rem;
            }
        }

    }

    &-card {
        width: 100%;
        border: 1px solid var(--grey--light);
        margin-bottom: 24px;
        color: var(--grey-letter);
        transition: all 0.3s ease-in-out;

        &:hover {
            box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
        }

        .card-image {
            height: 300px;
            overflow: hidden;
            background-color: var(--grey--light);
            width: 100%;

            &:hover {
                img {
                    opacity: 1;
                }
            }

            img {
                transition: all 0.3s ease-in-out;
                width: 100%;
                opacity: 0.7;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>