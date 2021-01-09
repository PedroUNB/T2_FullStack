<template>
  <q-card>
    <ModalHeader>Edit User</ModalHeader>

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
  props: ["user", "id"],
  mounted() {
    this.userToSubmit = Object.assign({}, this.user);
  },
  methods: {
    ...mapActions("users", ["updateUser"]),

    submitUser() {
      this.updateUser(this.userToSubmit);
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>
