<script setup>
import axios from "axios"
import { ref } from "vue"

const cryptos = ref("")
const ETH = ref("")
const BTC = ref("")
const ADA = ref("")
const AVAX = ref("")
const BNB = ref("")
const DAI = ref("")
const DOGE = ref("")
const DOT = ref("")
const LTC = ref("")
const MATIC = ref("")
const SOL = ref("")
const TRX = ref("")
const USDT = ref("")
const XLM = ref("")
const XRP = ref("")

const getCrypto = () => {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ADA,AVAX,BNB,DAI,DOGE,DOT,LTC,MATIC,SOL,TRX,USDT,XLM,XRP&tsyms=EUR&api_key=process.env.VUE_APP_API_KEY')
    .then(response => {
      cryptos.value = response.data
      ETH.value = response.data.ETH.EUR
      BTC.value = response.data.BTC.EUR
      ADA.value = response.data.ADA.EUR
      AVAX.value = response.data.AVAX.EUR
      BNB.value = response.data.BNB.EUR
      DAI.value = response.data.DAI.EUR
      DOGE.value = response.data.DOGE.EUR
      DOT.value = response.data.DOT.EUR
      LTC.value = response.data.LTC.EUR
      MATIC.value = response.data.MATIC.EUR
      SOL.value = response.data.SOL.EUR
      TRX.value = response.data.TRX.EUR
      USDT.value = response.data.USDT.EUR
      XLM.value = response.data.XLM.EUR
      XRP.value = response.data.XRP.EUR
      console.log(response)
    })
}

getCrypto()

setInterval(() => {
  getCrypto()
}, 3000);
</script>

<template>
  <div class="crypto-app">
    <h1>Crypto App 🚀</h1>
    <div class="container">
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/btc.svg" alt="Bitcoin">
        </div>
        <h3>Bitcoin</h3>
        <span class="price">{{ "€" + BTC }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/eth.svg" alt="Ethereum">
        </div>
        <h3>Ethereum</h3>
        <span class="price">{{ "€" + ETH }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/ada.svg" alt="Cardano">
        </div>
        <h3>Cardano</h3>
        <span class="price">{{ "€" + ADA }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/avax.svg" alt="Avalanche">
        </div>
        <h3>Avalanche</h3>
        <span class="price">{{ "€" + AVAX }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/bnb.svg" alt="BNB">
        </div>
        <h3>BNB</h3>
        <span class="price">{{ "€" + BNB }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/dai.svg" alt="DAI">
        </div>
        <h3>DAI</h3>
        <span class="price">{{ "€" + DAI }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/doge.svg" alt="Dogecoin">
        </div>
        <h3>Dogecoin</h3>
        <span class="price">{{ "€" + DOGE }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/dot.svg" alt="Polkadot">
        </div>
        <h3>Polkadot</h3>
        <span class="price">{{ "€" + DOT }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/ltc.svg" alt="Litecoin">
        </div>
        <h3>Litecoin</h3>
        <span class="price">{{ "€" + LTC }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/matic.svg" alt="Polygon">
        </div>
        <h3>Polygon</h3>
        <span class="price">{{ "€" + MATIC }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/sol.svg" alt="Solana">
        </div>
        <h3>Solana</h3>
        <span class="price">{{ "€" + SOL }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/trx.svg" alt="TRON">
        </div>
        <h3>TRON</h3>
        <span class="price">{{ "€" + TRX }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/usdt.svg" alt="Tether">
        </div>
        <h3>Tether</h3>
        <span class="price">{{ "€" + USDT }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/xlm.svg" alt="Stellar">
        </div>
        <h3>Stellar</h3>
        <span class="price">{{ "€" + XLM }}</span>
      </div>
      <div class="c-item">
        <div class="icon">
          <img width="38" height="38" src="../../public/xrp.svg" alt="XRP">
        </div>
        <h3>XRP</h3>
        <span class="price">{{ "€" + XRP }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.crypto-app
  width: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  background-color: #252525
  font-family: "Helvetica", sans-serif
  color: white

  h1
    padding: 2rem
    font-size: 2rem
    font-weight: 500

  .container
    padding: 2rem
    display: flex
    flex-direction: column
    gap: 3rem
    background-color: rgba(255, 255, 255, 0.05)
    margin: 1rem
    border-radius: 18px

    .c-item
      display: flex
      align-items: center
      gap: 1rem
      position: relative
      border-bottom: 1px solid rgba(255, 255, 255, 0.50)
      padding-bottom: 0.85rem

      .icon
        width: 38px
        height: 38px

        img
          width: 100%
          height: auto

      .price
        position: absolute
        right: 0
</style>
