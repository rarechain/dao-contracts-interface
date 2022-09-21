<template>
  <div>
    <v-snackbar
      v-model="show"
      top="true"
      class="mt-10 mr-5"
      color="primary"
      v-if="msgType === 'success'"
      :timeout="timeout"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar
      v-model="show"
      top="true"
      class="mt-10 mr-5"
      color="red"
      v-if="msgType === 'error'"
      :timeout="timeout"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    text: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: true,
    },
    msgType: {
      type: String,
      default: "",
    },
    timeout: {
        type: Number,
        default: 2500
    }
  },
};
</script>
