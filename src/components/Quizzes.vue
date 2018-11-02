<template>
  <div>
      <v-container grid-list-sm>
        <v-layout align-space-between justify-start column>
          <v-flex v-for="i in 4" xs12>
             <v-card color="red" height="50px">
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
