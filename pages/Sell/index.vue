<template>
  <div class="sell-home">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-40 pb5 pb6-m pb7-l">
          <Navbar/>
          <div class="tc mt4 mt5-m mt6-l ph3 header">
            <h1 class="f2 f1-l white-90 mb0 lh-title">Let Us Buy Your Home</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">Any size. Any location. Any condition.</h2>
            <div class="action-btns mt3">
              <md-button
                class="md-raised md-primary"
                @click="$router.push('/contact')"
              >Contact Us Today</md-button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="main-sell">
        <div class="fair sell">
          <div class="fair-cash sell-pitch">
            <h2>Fair Cash Offer and a Quick Close</h2>
            <p
              class
            >We are one of the area's more active homebuyers and can work around your timeline and goals for selling your house. We can make you a fair, cash offer and are willing to buy your house in its as-is condition. All you need to do is sell and walk away. We will work hard to ensure that the process of selling your home to us is straightforward, fast, and efficient. We understand the paperwork involved in real estate transactions and will work hand in hand every step of the way.</p>
          </div>

          <img src="~/assets/img/cash.svg" alt="Image of money">
        </div>

        <div class="commitions sell">
          <div class="commition-container sell-pitch">
            <h2>Are There Commissions Involved?</h2>
            <p
              class
            >There are no commissions involved because we represent ourselves as the buyer, and you represent yourself as the seller. Our goal is to find a win-win solution to make the sale of your house a smooth, easy transaction for you. Give us a call and we’ll show you how!</p>
          </div>

          <img src="~/assets/img/no.svg" alt="Image of money">
        </div>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "Sell",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #c82027;
$accent-color: #051b3b;

.bg-image {
  background: url("../../assets/img/agent.jpg");
}

.main-sell {
  margin: 70px auto;

  & .sell {
    margin-bottom: 70px;

    & .sell-pitch {
      & h2 {
        font-size: 1.5rem;
        color: $accent-color;
      }

      & p {
        line-height: 1.5;
      }
    }
  }
}

// Media Queries
@media only screen and (min-width: 1275px) {
  .main-sell {
    width: 1275px;
  }
}

@media only screen and (min-width: 1010px) {
  .sell {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:last-child {
      flex-direction: row-reverse;
    }

    & .sell-pitch {
      width: 500px;

      & p {
        font-size: 1.2rem;
      }
    }

    & img {
      width: 400px;
    }
  }
}

@media only screen and (max-width: 1010px) {
  .sell {
    margin: 0 auto;
    display: flex;
    align-items: center;

    & .sell-pitch {
      margin: 0 auto;
      width: 390px;

      & h2 {
        line-height: 1.5;
        font-size: 2rem;
      }
    }

    & img {
      width: 300px;
      margin: 0 auto;
    }
  }
}

@media only screen and (min-width: 820px) {
  .sell {
    margin: 0 auto;
    display: flex;
    align-items: center;

    &:last-child {
      flex-direction: row-reverse;
    }
  }
}

@media only screen and (max-width: 820px) {
  .sell {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .sell-pitch {
      width: 80%;

      & h2 {
        line-height: 1.5;
        text-align: center;
      }

      & p {
        text-align: center;
      }
    }
  }
}

@media only screen and (min-width: 580px) {
  .sell {
    & .sell-pitch {
      & p {
        font-size: 1.2rem;
      }
    }
  }
}

@media only screen and (max-width: 580px) {
  .sell {
    & .sell-pitch {
      & p {
        font-size: 1rem !important;
        line-height: 2 !important;
      }
    }
  }
}
</style>
