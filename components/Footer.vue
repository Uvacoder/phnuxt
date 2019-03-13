<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="contact-footer">
          <h2>Contact Info</h2>
          <h3>We would love to hear from you!</h3>
          <h3>Send us a message and we’ll get right back in touch.</h3>
          <div class="contact-info">
            <p>Email: admin@phrealestatesolutions.com</p>
            <p>Phone: (989) - 702 - 2000</p>
          </div>
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
            <md-button class="md-icon-button">
              <md-icon class="icon">
                <i class="fas fa-envelope"></i>
              </md-icon>
            </md-button>
          </div>
        </div>
        <div class="greeting">
          <h2>We Are A Real Estate Investing Company</h2>
          <p>Our company buys, sells, and rents homes. We will not be acting as your real estate agent or broker if we buy your house, sell you a house, or rent you a home. We are excited to potentially work with you directly OR if you are represented by an agent or broker. We are focused on improving neighborhoods and redeveloping areas that we work in. If you have additional questions on agencies please contact your local real estate commission.</p>
        </div>
      </div>
      <div class="bottom-footer">
        <p
          class="tc"
        >P & H Real Estate Solutions, LLC &copy; All Rights Reserved 2019 | Designed by Jalen Parham</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
$primary-color: #c82027;
$accent-color: #051b3b;

footer {
  color: #fff;
}

.container {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background: $accent-color;
  margin-bottom: 0px;
}

.bottom-footer {
  background: $primary-color;
  padding: 20px;

  & p {
    margin: 0px;
    font-size: 14px;
  }
}

.contact-footer {
  line-height: 1.2;

  & h2 {
    font-size: 1.7rem;
    margin-bottom: 10px;
  }

  & h3, p {
    margin-bottom: 15px;
    line-height: 1.2;
  }

  & h3 {
    line-height: 1.2;
  }

  & .socials {
    margin-left: -15px;

    & .icon {
      color: #fff;

      &:hover {
        color: $primary-color;
      }
    }
  }
}

.greeting {
  max-width: 550px;

  & h2 {
    font-size: 1.7rem;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  & p {
    font-size: 1rem;
    line-height: 1.5;
  }
}

.title {
  & h2 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 1100px) {
  .greeting {
    width: 450px;
  }
}

@media only screen and (max-width: 990px) {
  .contact-footer {
    width: 400px;
  }
}

@media only screen and (max-width: 910px) {
  .container {
    flex-direction: column;

    & .contact-footer {
      margin-bottom: 40px;
      width: 95%;
    }

    .greeting {
      width: 95%;
    }
  }
}
</style>
