<template>
  <div class="row q-mb-none">
    <q-input
      @input="$emit('update:email', $event)"
      label="E-mail"
      class="col"
      ref="email"
      :value="email"
      :rules="[
        (val) => !!val || 'Email is required',
        (val) => isValidEmailAddress(val) || 'Enter a valid email address!',
      ]"
      v-select-all
      outlined
      autofocus
    >
      <template v-slot:append>
        <q-icon
          v-if="email"
          @click="$emit('update:email', '')"
          name="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import selectAll from "src/directives/select-all.js";
export default {
  props: ["email"],
  directives: {
    selectAll,
  },
  methods: {
    isValidEmailAddress(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>
