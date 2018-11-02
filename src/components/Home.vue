<template>
  <div>
      <v-container grid-list-lg>
        <v-layout align-space-between justify-start row wrap>
          <v-flex v-for="i in 82" xs4>
             <v-card color="transparent" class="lightShadow">
               <v-responsive :aspect-ratio="1/1">
                 <v-card-text class="kanjiText">月</v-card-text>
                 <v-divider light/>
                 <v-card-text class="kanjiTranslation">Moon</v-card-text>
               </v-responsive>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<style scoped>
.lightShadow {
  box-shadow: 1px 6px 12px 2px rgba(0, 0, 0, 0.08);
}
.kanjiText {
  color: black;
  font-weight: bold;
  font-size: 28px;
  font-family: Times,serif,"Times New Roman";
}
.kanjiTranslation {
  color: rgb(210, 210, 210);
  font-weight: regular;
  font-size: 14px;
  font-family: Times,serif,"Times New Roman";
}
</style>
