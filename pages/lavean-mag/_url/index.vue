<template>
    <div class="main-container mt-15 pt-15">
        <div class="mt-15">
            <Title />
            <Description />
            <TagSection />
        </div>
    </div>
</template>

<script>
import Title from '~/components/Mag/Title.vue'
import Description from '~/components/Mag/Description.vue'
import TagSection from '~/components/Mag/TagSection.vue'
export default {
    layout: 'headerBlack',
    components: {
        Title,
        Description,
        TagSection
    }
}
</script>