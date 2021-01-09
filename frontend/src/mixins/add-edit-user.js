import ModalHeader from 'components/Users/Modals/Shared/ModalHeader.vue'
import ModalUserName from 'components/Users/Modals/Shared/ModalUserName.vue'
import ModalUserEmail from 'components/Users/Modals/Shared/ModalUserEmail.vue'
import ModalUserPassword from 'components/Users/Modals/Shared/ModalUserPassword.vue'
import ModalUserCPF from 'components/Users/Modals/Shared/ModalUserCPF.vue'
import ModalUserPhone from 'components/Users/Modals/Shared/ModalUserPhone.vue'
import ModalButtons from 'components/Users/Modals/Shared/ModalButtons.vue'

export default {
  data() {
    return {
      userToSubmit: {
        name: '',
        email: '',
        cpf: '',
        password: '',
        phone: '',
      }
    }
  },
  methods: {

    submitForm() {
      let name = this.$refs.modalUserName.$refs.name;
      let cpf = this.$refs.modalUserCPF.$refs.cpf;

      name.validate();
      cpf.validate()
      if (!name.hasError && !cpf.hasError) {
        this.submitUser();
      }
    }
  },

  components: {
    ModalHeader,
    ModalUserName,
    ModalUserEmail,
    ModalUserPassword,
    ModalUserCPF,
    ModalUserPhone,
    ModalButtons
  }
}
