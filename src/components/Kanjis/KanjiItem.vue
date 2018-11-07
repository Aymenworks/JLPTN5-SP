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
import {Kanji} from './Kanji.js'

export default {
    props: {
        kanji: {
            type: Kanji,
            required: true
        }
    }
}
</script>

<style scoped>
.lightShadow {
  box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);
}
.kanjiText {
  color: black;
  font-weight: bold;
  font-size: 28px;
}
.kanjiTranslation {
  color: rgb(210, 210, 210);
  font-weight: regular;
  font-size: 14px;
}
</style>