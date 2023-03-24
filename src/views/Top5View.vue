<script setup>
import axios from "axios"
import { ref } from "vue"

const cryptos = ref("")
const ETH = ref("")
const BTC = ref("")
const BNB = ref("")
const USDT = ref("")
const XRP = ref("")

const getCrypto = () => {
  axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,USDT,XRP&tsyms=EUR&api_key=process.env.VUE_APP_API_KEY')
    .then(response => {
      cryptos.value = response.data
      ETH.value = response.data.ETH.EUR
      BTC.value = response.data.BTC.EUR
      BNB.value = response.data.BNB.EUR
      USDT.value = response.data.USDT.EUR
      XRP.value = response.data.XRP.EUR
      console.log(response)
    })
}

getCrypto()

setInterval(() => {
  getCrypto()
}, 600000);
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
        <img width="38" height="38" src="/bnb.svg" alt="BNB">
      </div>
      <h3>BNB</h3>
      <span class="price">{{ "€" + BNB }}</span>
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