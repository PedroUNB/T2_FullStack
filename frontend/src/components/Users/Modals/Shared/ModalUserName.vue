<template>
  <div class="row q-mb-none">
    <q-input
      @input="$emit('update:name', $event)"
      label="Name"
      class="col"
      ref="name"
      :value="name"
      :rules="[
        (val) => !!val || 'Name is required',
        (val) => val.length >= 2 || 'Please enter at least 2 characters.',
      ]"
      v-select-all
      outlined
      autofocus
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name', '')"
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
  props: ["name"],
  directives: {
    selectAll,
  },
};
</script>
