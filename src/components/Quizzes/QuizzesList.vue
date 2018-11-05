<template>
    <div>
      <v-card-text class="kanjiText">Practice {{ title }}</v-card-text>
      <v-flex xs12 v-for="item in items" :key="item.name">
        <QuizzItem :item=item />
        <v-divider light/>
      </v-flex>
    </div>
</template>

<script>
    import QuizzItem from './QuizzItem'

    export default {
        components: {
            QuizzItem,
        },

        props: {
            title: {
                type: String,
                required: true,
            },
            items: {
                type: Array,
                required: true,
            },
        },
    }
</script>
