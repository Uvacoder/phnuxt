<template>
  <div class="home">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-30 pb5 pb6-m pb7-l">
          <Navbar/>
          <div class="tc mt4 mt5-m mt6-l ph3 header">
            <h1
              class="f2 f1-l white-90 mb0 lh-title"
            >Let Us Help You Find Your Real Estate Solutions</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">P & H Real Estate Solutions LLC</h2>
            <div class="action-btns mt3">
              <md-button class="md-raised md-primary" @click="$router.push('/sell')">Sell Your Home</md-button>
              <md-button class="md-raised md-accent" @click="$router.push('/about')">Learn More</md-button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="everyone">
        <div class="pitch">
          <h2>Real Estate Solutions For Everyone</h2>
          <p>P&H Real Estate Solutions, LLC is the area’s leading real estate solutions company. We successfully work with homeowners, buyers, sellers, real estate agents, and real estate investors, buying and selling all types of residential real estate. We are confident that we can find the right property or solution for you, whether you have a house to sell, are looking to buy your next investment property, or are looking for your family’s “forever home.” We can share our knowledge so that you can make the best decisions for your situation and we are dedicated to make everyone's experience a smooth and successful process.</p>
        </div>

        <img src="~/assets/img/solution.jpg" alt>
      </div>

      <div class="apart">
        <div class="pitch">
          <h2>What Sets Us Apart</h2>
          <p>At P&H Real Estate Solutions, LLC we specialize in buying and selling our homes at the price, and on the timeline, that works for both of us. Our extensive knowledge of real estate investing and large network of real estate investors nationwide allows us to offer more buying choices and a wide variety of selling options for all types of home buyers and sellers, including financially distressed homeowners. Our mission is to work hand in hand with all parties and to handle every situation with the utmost of professionalism and care.</p>
        </div>

        <img src="~/assets/img/different.jpg" alt>
      </div>

      <div class="form-content">
        <div class="motto">
          <div class="logo">
            <img src="~/assets/img/ph-logo.png" alt>
          </div>
        </div>

        <form @submit.prevent="validateForm">
          <h2 class="tc">Contact Us Today</h2>

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

      <md-snackbar
        :md-position="position"
        :md-duration="isInfinity ? Infinity : duration"
        :md-active.sync="showSnackbar"
      >
        <p class="snack-p">{{ confirmMessage }}</p>
        <md-button class="md-icon-button snack-icon" @click="showSnackbar = false">
          <md-icon><i class="fas fa-times snack-icon"></i></md-icon>
        </md-button>
      </md-snackbar>
    </main>

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
  numeric,
} from "vuelidate/lib/validators";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const regex = /^\d{3}-\d{3}-\d{4}$/
const validatePhone = value => regex.test(value)

export default {
  name: "home",
  components: {
    Navbar,
    Footer
  },
  mixins: [validationMixin],
  data: () => ({
    error: true,
    showSnackbar: false,
    position: "left",
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
    sendEmail() {
      this.$axios
        .$post("/email/send", this.email)
        .then((response) => {
          console.log(response)
          typeof response === 'object' ? this.confirmMessage = response.message : this.confirmMessage = response
          this.showSnackbar = true
          this.email.name = ''
          this.email.emailAddress = ''
          this.email.phone = ''
          this.email.message = ''
        })
    },
    validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) this.sendEmail();

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
  background: url("../assets/img/home-header-4.jpg");
}

.logo {
  max-width: 500px;
  margin: 80px auto 70px auto;
}

.everyone,
.apart {
  display: flex;
  justify-content: space-around;
  align-items: center; 

  & .pitch {
    & h2 {
      color: $primary-color;
      margin-bottom: 20px;
    }

    & p {
      line-height: 1.4;
    }
  }
}

.everyone {
  margin: 100px auto;
}

.apart {
  flex-direction: row-reverse;
  background: #f1f1f1;
  padding: 100px 0px;
  margin-bottom: 70px;
}

.form-content {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

form {
  & h2 {
    font-size: 1.5rem;
    color: $accent-color;
  }

  & button {
    width: 100%;
    margin: 0 auto;
  }
}

// Media Queries
@media only screen and (min-width: 1130px) {
  .pitch {
    width: 500px;
    & h2 {
      font-size: 1.7rem;
    }

    & p {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }

  form {
    width: 500px;
  }

  .motto {
    max-width: 600px;
  }
}

@media only screen and (max-width: 1130px) {
  .pitch {
    width: 450px;
    & h2 {
      font-size: 1.5rem;
    }

    & p {
      font-size: 1.1rem;
    }

    & img {
      width: 500px;
      height: 400px;
    }
  }

  form {
    width: 400px;
  }

  .motto {
    width: 400px;
  }
}

@media only screen and (min-width: 1050px) {
  .apart, 
  .everyone {
    & img {
      width: 500px;
      height: 400px;
    }
  }
}

@media only screen and (max-width: 1050px) {
  .apart,
  .everyone {
    & img {
      width: 450px;
      height: 350px;
    }
  }


}

@media only screen and (max-width: 990px) {
  .everyone,
  .apart {
    flex-direction: column;

    & .pitch {
      text-align: center;
      padding: 20px;
      margin: auto auto 30px auto;
      width: 80%;

      & h2 {
        line-height: 1.5;
      }

      & p {
        font-size: 1.1rem;
        line-height: 2;
      }
    }

    & img {
      width: 80%;
    }
  }

  .everyone {
    margin-top: 40px;
  }

  .apart {
    padding: 30px 0px 90px 0px;
  }

  .form-content {
    flex-direction: column;
    padding: 20px;

    & .motto {
      margin: -70px auto auto auto;
      width: 80%;

      & h1 {
        line-height: 1.5;
      }
    }

    & form {
      width: 80%;
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 700px) {
  .apart,
  .everyone {

    & .pitch {
      width: 90%;
    }

    & img {
      width: 90%;
    }
  }

  .form-content {
    & .motto {
      margin: 0 auto;

      & h1 {
        line-height: 1.5;
      }
    }

    & form {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>


