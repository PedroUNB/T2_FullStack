<template>
  <q-card>
    <ModalHeader>Add User</ModalHeader>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <ModalUserName :name.sync="userToSubmit.name" ref="modalUserName" />
        <ModalUserCPF :cpf.sync="userToSubmit.cpf" ref="modalUserCPF" />
        <ModalUserEmail :email.sync="userToSubmit.email" ref="modalUserEmail" />
        <ModalUserPassword
          :password.sync="userToSubmit.password"
          ref="modalUserPassword"
        />
        <ModalUserPhone :phone.sync="userToSubmit.phone" ref="modalUserPhone" />
      </q-card-section>

      <ModalButtons />
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import AddEditUserMixin from "src/mixins/add-edit-user.js";

export default {
  mixins: [AddEditUserMixin],
  data() {
    return {
      userToSubmit: {
        name: "",
        cpf: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    ...mapActions("users", ["addUser"]),

    submitUser() {
      this.addUser(this.userToSubmit);
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>
