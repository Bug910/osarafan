<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <i>({{ message.id }})</i>
            {{ message.text }}
        </v-card-text>
      <media v-if="message.link" :message="message"></media>
    <v-card-actions>
        <v-btn value="Edit" @click="edit" text small>Edit</v-btn>
        <v-btn @click="del" text small>X</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {mapActions} from 'vuex'
    import Media from "../media/Media.vue";

    export default {
      components: { Media },
      props: ['message','editMessage'],
      methods: {
            ...mapActions(['removeMessageAction']),
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.removeMessageAction(this.message)
            }
        }
    }

</script>

<style>

</style>