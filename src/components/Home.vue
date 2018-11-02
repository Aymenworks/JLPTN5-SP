<template>
  <div>
      <v-container grid-list-lg>
        <v-layout align-space-between justify-start row wrap>
          <v-flex v-for="i in 82" xs4>
             <v-card color="transparent">
               <v-responsive :aspect-ratio="1/1">
                 <v-card-text>月</v-card-text>
                 <v-divider light/>
                 <v-card-text>Moon</v-card-text>
               </v-responsive>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
