<template>
    <div>
      <v-card-text class="kanjiText">Practice {{ title }}</v-card-text>
      <v-flex v-for="i in 4" xs12>
        <v-btn block flat large class="text-xs-left">
          <div color="red" class="quizzSquare"/>
          Play with numbers
        </v-btn>
        <v-divider light/>
      </v-flex>
    </div>
</template>
