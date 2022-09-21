<template>
  <v-container grid-list-xl fluid>
    <v-layout row>
      <Snackbar :text="message.text" :show="message.value" :msgType="message.type" />
      <v-container>
        <v-row>
          <v-col cols=12>
            <p>{{ tokenContractAddress }}</p>
          </v-col>
          <v-col cols=12 v-if="this.accounts">
            {{ this.accounts[0] }}
          </v-col>
          <v-col v-else>
            <v-btn @click="loadEthers">Connect Wallet</v-btn>
          </v-col>
          <v-col cols=12 v-if="this.accounts">
            <v-text-field label="Coin burn amount" v-model="coinBurnAmount"></v-text-field>
            <v-btn @click="burnCoins" :disabled="!coinBurnAmount">Burn</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import Snackbar from '@/components/Snackbar.vue'
import { ethers } from 'ethers'
import tokenAbi from '@/contracts/qaoAbi.json'

export default {
  components: {
    Snackbar
  },
  data() {
    return {
      tokenContractAddress: process.env.tokenContractAddress,
      tokenDecimals: process.env.tokenDecimals,
      coinBurnAmount: null,
      accounts: null,
      provider: null,
      signer: null,
      contract: null,
      message: {
        text: '',
        value: false,
        type: ''
      },
    }
  },
  watch: {},
  methods: {
    async loadEthers() {
      console.log('load wallet')
      if (typeof window.ethereum !== 'undefined') {
        this.accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(this.accounts)
        this.provider = new ethers.providers.Web3Provider(window.ethereum)
        this.signer = this.provider.getSigner();
        this.contract = new ethers.Contract(this.tokenContractAddress, tokenAbi.abi, this.signer)
      }
    },
    async burnCoins() {
      console.log(await this.contract.burn(this.coinBurnAmount))
    }
  },
  head() {
    return {
      title: 'Dashboard | ' + process.env.appName
    }
  }
}
</script>
<style>
html, body {
  overflow: hidden;
}
</style>