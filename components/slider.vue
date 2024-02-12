

<template>
    <div class="app-slider">
        <div class="app-slider__text">
            <h5>UI ux Design</h5> <span>90%</span>
        </div>
        <div class="e-slider__bar">
            <span class="e-slider___progress"></span>
        </div>
    </div>
</template>
<style lang="scss">
.app-slider {
    align-items: center;
    margin-inline: 24px;

    &__text {
        display: flex;
        justify-content: space-between;
        margin-bottom: 28px;
    }

    h5 {
        font-size: 1rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    span {
        font-size: 1rem;
        font-weight: 500;
    }

    .e-slider__bar {
        width: 100%;
        height: 6px;
        background-color: var(--grey--light);
        border-radius: 4px;
        position: relative;

        .e-slider___progress {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 90%;
            background-color: var(--secondary);
            border-radius: 4px;
        }
    }
}
</style>