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
}, 300000);
</script>

<template>
  <div class="container">
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/btc.svg" alt="Bitcoin">
      </div>
      <h3>Bitcoin</h3>
      <span class="price">{{ "€" + BTC }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/eth.svg" alt="Ethereum">
      </div>
      <h3>Ethereum</h3>
      <span class="price">{{ "€" + ETH }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/ada.svg" alt="Cardano">
      </div>
      <h3>Cardano</h3>
      <span class="price">{{ "€" + ADA }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/avax.svg" alt="Avalanche">
      </div>
      <h3>Avalanche</h3>
      <span class="price">{{ "€" + AVAX }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/bnb.svg" alt="BNB">
      </div>
      <h3>BNB</h3>
      <span class="price">{{ "€" + BNB }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/dai.svg" alt="DAI">
      </div>
      <h3>DAI</h3>
      <span class="price">{{ "€" + DAI }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/doge.svg" alt="Dogecoin">
      </div>
      <h3>Dogecoin</h3>
      <span class="price">{{ "€" + DOGE }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/dot.svg" alt="Polkadot">
      </div>
      <h3>Polkadot</h3>
      <span class="price">{{ "€" + DOT }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/ltc.svg" alt="Litecoin">
      </div>
      <h3>Litecoin</h3>
      <span class="price">{{ "€" + LTC }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/matic.svg" alt="Polygon">
      </div>
      <h3>Polygon</h3>
      <span class="price">{{ "€" + MATIC }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/sol.svg" alt="Solana">
      </div>
      <h3>Solana</h3>
      <span class="price">{{ "€" + SOL }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/trx.svg" alt="TRON">
      </div>
      <h3>TRON</h3>
      <span class="price">{{ "€" + TRX }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/usdt.svg" alt="Tether">
      </div>
      <h3>Tether</h3>
      <span class="price">{{ "€" + USDT }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/xlm.svg" alt="Stellar">
      </div>
      <h3>Stellar</h3>
      <span class="price">{{ "€" + XLM }}</span>
    </div>
    <div class="c-item">
      <div class="icon">
        <img width="38" height="38" src="/xrp.svg" alt="XRP">
      </div>
      <h3>XRP</h3>
      <span class="price">{{ "€" + XRP }}</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  padding: 2rem
  display: flex
  flex-direction: column
  gap: 3rem
  background-color: rgba(255, 255, 255, 0.05)
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