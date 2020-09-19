<template>
    <v-card class="my-2">
        <v-card-text primary-title>
            <i>({{ message.id }})</i>
            {{ message.text }}
        </v-card-text>
    <v-card-actions>
        <v-btn value="Edit" @click="edit" text small>Edit</v-btn>
        <v-btn @click="del" text small>X</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: ['message','editMessage','deleteMessage','messages'],
        methods: {
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.deleteMessage(this.message)
            }
        }
    }

</script>

<style>

</style>