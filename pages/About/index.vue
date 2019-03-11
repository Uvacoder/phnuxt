<template>
  <div class="about">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-40 pb5 pb6-m pb7-l">
          <Navbar/>
          <div class="tc mt4 mt5-m mt6-l ph3 header">
            <h1 class="f2 f1-l white-90 mb0 lh-title">Why P&H Real Estate Solutions, LLC?</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">Improving Our Community One Property At A Time</h2>
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
      <div class="why-2">
        <div class="team-diff">
          <div class="card">
            <div class="card-img">
              <img class="img" src="~/assets/img/teamwork.svg" alt>
            </div>
            <h2 class="tc">Our Team</h2>
            <p
              class="f4-ns"
            >With a wealth of experience under our belts, our team and network of real estate experts have handled some of the most complicated real estate transactions on the market today. Whether you are looking to sell your existing house or buy your forever home, our goal is to find a solution that works for both of us.</p>
          </div>

          <div class="card">
            <div class="card-img">
              <img class="img" src="~/assets/img/computer.svg" alt>
            </div>
            <h2 class="tc">What Makes Us Different</h2>
            <p
              class="f4-ns"
            >We embrace technology because it can streamline and automate our real estate transactions. We use a state-of-the-art business management system, keeping our business extremely organized and efficient so that we're able to spend less time shuffling paperwork and more time finding solutions that work for both of us.</p>
          </div>
        </div>

        <div class="card logo-card">
          <div class="card-img">
            <img class="img" src="~/assets/img/ph-logo.png" alt>
          </div>
          <p
            class="f4-ns"
          >We are a real estate solutions company located in Saginaw, MI. We specialize in buying and selling homes, and we’re experts at finding solutions for people who are in the market to buy or sell their own home or investment property. Our diverse team has experience with all types of buying and selling scenarios, and we understand how to make every transaction simple and stress free. We own and sell our homes, and are confident that we have something to meet the needs of every buyer. We are also well versed in most types of home sales and are certain that we can find a win-win solution for every seller, whether it be a traditional or creative selling solution.</p>
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
  name: "home",
  sending: false,
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
  background: url("../../assets/img/tech-2.jpg");
}

.why-2 {
  margin: 70px auto 70px auto;
  width: 90%;

  & .team-diff {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;

    & .card {
      width: 550px;
    }
  }

  & .logo-card {
    & .card-img {
      width: 300px !important;
    }

    & p {
      margin-top: 10px !important;
    }
  }

  & .card {
    padding: 30px 40px 40px 40px;
    background: #fff;
    border-top: 5px solid $primary-color;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }

    & .card-img {
      margin: 0 auto;
      width: 170px;
    }

    & h2 {
      color: $accent-color;
      margin: 10px auto;
      line-height: 1.5;
    }

    & p {
      line-height: 1.5;
      margin: 0 auto;
    }
  }
}

@media only screen and (min-width: 1550px) {
  .why-2 {
    width: 1256px;

    .team-diff {
      & .card {
        width: 600px;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .why-2 {
    width: 80%;

    .team-diff {
      & .card {
        width: 500px;
      }
    }
  }
}

@media only screen and (max-width: 1270px) {
  .why-2 {
    .team-diff {
      & .card {
        width: 470px;
      }
    }
  }
}

@media only screen and (max-width: 1160px) {
  .why-2 {
    width: 95%;

    .team-diff {
      & .card {
        width: 460px;
      }
    }
  }
}

@media only screen and (max-width: 970px) {
  .why-2 {
    & .team-diff {
      flex-direction: column;
      & .card {
        width: 100%;
        &:first-child {
          margin-bottom: 50px;
        }
      }
    }
  }
}

@media only screen and (max-width: 740px) {
  p {
    line-height: 2;
  }

  .why-2 {
    .logo-card {
      & p {
        line-height: 2;
        font-size: 1rem;
      }
    }

    .team-diff {
      & .card {
        & p {
          line-height: 2;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
