<template>
    <v-card color="transparent" class="lightShadow">
        <v-responsive :aspect-ratio="1/1">
            <v-card-text class="kanjiText">{{ kanji.character }}</v-card-text>
            <v-divider light/>
            <v-card-text class="kanjiTranslation">{{ kanji.translation }}</v-card-text>
        </v-responsive>
    </v-card>
</template>

<script>
export default {
    props: {
        kanji: {
            type: Object,
            required: true
        }
    }
}
</script>
