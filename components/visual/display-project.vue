<template>
    <v-col
        md="4"
        cols="12"
        data-aos="fade-right"
        data-aos-duration="1000"
    >
        <div class="portfolio-item">
            <img :src="'/img/projects/' + project.img" style="height: 280px; object-fit: cover;"/>
            <div class="overlay">
                <div class="portfolio-item-content mt-5">
                    <h3> {{ project.title }} </h3>
                    <p> {{ project.description[locale] }} </p>
                    <div v-if="project.skills" class="link-icons">
                        <v-chip label class="mr-2 mt-2 mb-2" color="green" v-for="skill in project.skills">
                            {{ skill }}
                        </v-chip>
                    </div>
                    <v-btn
                        v-if="project.link"
                        color="#669db3"
                        :text="t('seeongit')"
                        variant="text"
                        class="mt-4"
                        :href="project.link"
                        target="_blank"
                    ></v-btn>

                    <v-btn
                        v-if="project.doclink"
                        color="#669db3"
                        :text="t('seedoc')"
                        variant="text"
                        class="mt-4"
                        :href="project.doclink"
                    ></v-btn>

                    <v-btn
                        v-if="project.url"
                        color="#669db3"
                        :text="t('seeonweb')"
                        variant="text"
                        class="mt-4"
                        :href="project.url"
                    ></v-btn>
                </div>
            </div>
        </div>
    </v-col>
</template>

<script setup lang="ts">
const {t, locale} = useI18n({useScope: 'global'})

const props = defineProps({
    project: {
        type: Object as any,
        required: true,
    },
});
</script>

<style>
.portfolio-item {
    box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
}

.portfolio-item a {
    text-decoration: none;
}

.portfolio-item h3 {
    font-size: 1.2rem;
}

.portfolio-item img {
    width: 100%;
    display: block;
}

.portfolio-item .overlay {
    position: absolute;
    padding: inherit;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #222222;
    text-align: center;
}

.portfolio-item .overlay .portfolio-item-content {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    color: #f0f0f0;
    padding: 2rem;
    margin: 0 auto;
    vertical-align: middle;
    text-align: center;
}

.portfolio-item:hover .overlay {
    opacity: 0.95;
    cursor: pointer;
}
</style>