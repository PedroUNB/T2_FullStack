<template>
  <div class="row q-mb-none">
    <q-input
      @input="$emit('update:cpf', $event)"
      label="CPF"
      class="col"
      ref="cpf"
      :value="cpf"
      :rules="[
        (val) => !!val || 'CPF is required',
        (val) =>
          isValidCPF(val.replace(/\.|-/g, '')) || 'Please enter a valid cpf.',
      ]"
      v-select-all
      outlined
      autofocus
      mask="###.###.###-##"
    >
      <template v-slot:append>
        <q-icon
          v-if="cpf"
          @click="$emit('update:cpf', '')"
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
  props: ["cpf"],
  directives: {
    selectAll,
  },
  methods: {
    isValidCPF(strCPF) {
      let Soma;
      let Resto;
      Soma = 0;
      if (strCPF === "00000000000") return false;

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
      return true;
    },
  },
};
</script>
