<template>
  <div class="contact">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-30 pb5 pb6-m pb7-l">
          <Navbar/>
          <div class="tc mt4 mt5-m mt6-l ph3 header">
            <h1 class="f2 f1-l white-90 mb0 lh-title">Contact Us Today</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">We Would Love To Hear From You</h2>
            <div class="action-btns mt3">
              <md-button class="md-raised md-accent" @click="$router.push('/about')">Learn More</md-button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Contact Page -->
    <main>
      <div class="contact-container">
        <div class="contact-form">
          <form @submit.prevent="validateForm">
            <h2 class>Contact</h2>

            <md-field :class="getValidationClass('name')">
              <label for="name">Name</label>
              <md-input v-model="email.name" type="text" name="name" id="name"></md-input>
              <span class="md-error" v-if="!$v.email.name.required">The name is required!</span>
            </md-field>
            <md-field :class="getValidationClass('emailAddress')">
              <label for="email">Email</label>
              <md-input v-model="email.emailAddress" name="email" id="email"></md-input>
              <span class="md-error" v-if="!$v.email.emailAddress.required">The email is required!</span>
              <span class="md-error" v-if="!$v.email.emailAddress.email">The email is invalid! Must include @example.com!</span>
            </md-field>
            <md-field :class="getValidationClass('phone')">
              <label for="phone">Phone</label>
              <md-input v-model="email.phone" type="tel" name="phone" id="phone"></md-input>
              <span class="md-error" v-if="!$v.email.phone.required">The phone number is required!</span>
              <span class="md-error" v-else-if="!$v.email.phone.validatePhone">The phone number must formated XXX-XXX-XXXX!</span>
            </md-field>
            <md-field :class="getValidationClass('message')">
              <label for="message">Message</label>
              <md-textarea
                v-model="email.message"
                type="text"
                name="message"
                id="message"
                md-autogrow
              ></md-textarea>
              <span class="md-error" v-if="!$v.email.message.required">This field is required!</span>
            </md-field>
            <md-button class="md-raised md-primary" type="submit">send</md-button>
          </form>
        </div>
        <div class="contact-info">
          <div class="info">
            <h2>Contact Info</h2>
            <h4>Address</h4>
            <p>4685 Hess Rd. Saginaw MI 48601</p>
            <h4>Phone</h4>
            <p>(989) 702-2000</p>
            <h4>Email</h4>
            <p>admin@phrealestatesolutions.com</p>
            <h4>Follow Us</h4>
            <div class="socials">
              <md-button class="md-icon-button">
                <md-icon class="icon">
                  <i class="fab fa-facebook"></i>
                </md-icon>
              </md-button>
              <md-button class="md-icon-button">
                <md-icon class="icon">
                  <i class="fab fa-linkedin"></i>
                </md-icon>
              </md-button>
            </div>
          </div>
        </div>
      </div>

      <md-snackbar
        :md-position="position"
        :md-duration="isInfinity ? Infinity : duration"
        :md-active.sync="showSnackbar"
        md-persistent
      >
        <p class="snack-p">{{ confirmMessage }}</p>
        <md-button class="md-icon-button snack-icon" @click="showSnackbar = false">
          <md-icon><i class="fas fa-times snack-icon"></i></md-icon>
        </md-button>
      </md-snackbar>
    </main>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
  alpha,
  numeric
} from "vuelidate/lib/validators";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const regex = /^\d{3}-\d{3}-\d{4}$/
const validatePhone = value => regex.test(value)

export default {
  name: "Contact",
  components: {
    Navbar,
    Footer
  },
  mixins: [validationMixin],
  data: () => ({
    error: true,
    showSnackbar: false,
    position: "left",
    duration: 4000,
    isInfinity: true,
    email: {
      name: "",
      emailAddress: "",
      phone: "",
      message: ""
    },
    confirmMessage: ""
  }),
  validations: {
    email: {
      name: {
        required
      },
      emailAddress: {
        required,
        email
      },
      phone: {
        required,
        validatePhone
      },
      message: {
        required
      }
    }
  },
  methods: {
    clearForm() {
      this.email.name = ''
      this.email.emailAddress = ''
      this.email.phone = ''
      this.email.message = ''
    },
    sendEmail() {
      this.$axios
        .$post("/email/send", this.email)
        .then((response) => {
          response.message ? this.confirmMessage = response.message : this.confirmMessage = response
          this.showSnackbar = true
        })
    },
    validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sendEmail();
        this.clearForm();
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.email[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #c82027;
$accent-color: #051b3b;

.snack-p {
  font-size: 1.2rem;
}

.snack-icon {
  color: #fff;
}

.bg-image {
  background: url("../../assets/img/contact.jpg");
}

// Main Contact Page Styles
.contact-container {
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
  & .contact-form {
    margin: 0 auto;

    & h2 {
      font-size: 2rem;
      color: $accent-color;
    }

    & button {
      margin-left: -1px;
    }
  }

  & .contact-info {
    margin: 0 auto;

    & h2 {
      font-size: 2rem;
      color: $accent-color;
      margin-bottom: 20px;
    }

    & h4 {
      color: $primary-color;
      font-size: 1.2rem;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    & .socials {
      & .icon {
        color: $accent-color;
      }
    }
  }
}

// Main Contact Page Media Queries
@media only screen and (min-width: 1275px) {
  .bg-image {
    background: url("../../assets/img/phone.jpg");
  }

  .contact-container {
    width: 1270px;
    & .contact-form {
      width: 700px;
    }
  }
}

@media only screen and (max-width: 1275px) {
  .contact-container {
    & .contact-form {
      width: 500px;
    }
  }
}

@media only screen and (max-width: 830px) {
  .contact-container {
    & .contact-form {
      width: 350px;
    }
  }
}

@media only screen and (min-width: 700px) {
  .contact-container {
    & .contact-info {
      & .socials {
        margin-left: -15px;
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .contact-container {
    flex-direction: column;
    & .contact-form {
      width: 90%;
      margin: 0 auto;

      & h2 {
        text-align: center;
      }

      & button {
        width: 100%;
        margin: 0 auto;
      }
    }

    & .contact-info {
      text-align: center;
      margin-top: 50px;
    }
  }
}
</style>


