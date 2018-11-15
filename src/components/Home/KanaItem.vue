<template>
    <v-card color="transparent" @mouseover="animateKana"  class="lightShadow scaleOnHover" height="130px">
        <v-card-text class="kanaText text-japanese">{{ kana.character }}</v-card-text>
        <v-divider light/>
        <v-card-text class="kanaTranslation" >{{ kana.pronunciation }}</v-card-text>
    </v-card>
</template>

<script>
import Kana from '../../models/Kana.js'

export default {
    props: {
        kana: {
            type: Kana,
            required: true
        }
    }
}
</script>

<style scoped>
.lightShadow {
  box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}
.kanaText {
font-weight: bold;
text-align: center;
  font-size: 28px;
}
.kanaTranslation {
  color: rgb(200, 200, 200);
  font-size: 18px;
  text-align: center;
}
</style>