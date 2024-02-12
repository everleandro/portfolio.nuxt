<template>
    <section id="experience" class="experience-section">
        <div class="page-content pt-6 px-3">
            <h1>Experience</h1>
            <ul>
                <li v-for="i in 4" :key="i">
                    <h2> March 2013 - Present</h2>
                    <h3> Diploma in information Technology</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolorem vero, ipsa vitae dicta, magni
                        eveniet aspernatur cumque incidunt, neque voluptates! Non aut pariatur quas laboriosam numquam
                        corporis.
                        Omnis, vero!</p>
                    <span>NorthSouth University</span>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss">
.experience-section {
    background-color: var(--grey--light);
    margin-top: 100px;
    position: relative;

    .page-content {
        &>h1 {
            text-align: center;
            letter-spacing: 1px;
            margin-bottom: 24px;
            margin-top: 24px;
            font-size: 2.3rem;
        }
    }


    li {
        padding: 24px;
        border: 2px solid var(--grey--light);
        position: relative;

        // &:before {
        //     content: '';
        //     position: absolute;
        //     bottom: -8px;
        //     left: 50%;
        //     transform: translateX(-50%);
        //     width: 50px;
        //     height: 2px;
        //     background-color: var(--grey);
        // }

        h3 {
            font-weight: 500;
            font-size: 1.5rem;
            margin-bottom: 12px;
        }

        h2 {
            font-weight: 400;
            font-size: 1rem;
            margin-bottom: 24px;
            position: relative;


        }

        transition: box-shadow .3s ease-in-out;

        &:hover {
            box-shadow: 4px 4px 8px 2px rgba(237, 241, 253, .5);
        }
    }
}
</style>