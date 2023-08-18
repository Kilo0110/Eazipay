<template>
  <div
    v-if="props.walletSize === 'mobile'"
    class="wallet-card w-full flex flex-col gap-3 bg-green-950 text-white px-5 py-8  rounded-2xl"
  >
    <h3>Wallet Balance</h3>
    <p class="wallet-balance flex justify-between w-full">
      <span class="wallet-balance-amount font-bold">
        {{showWallet ? '&#8358; 15,067,789.00' : '****'}}
      </span>
      <button @click="showWallet = !showWallet">
        <Icon
          :name="showWallet ? 'dashicons:hidden' : 'ion:eye-outline'"
          size="20"
        />
      </button>
    </p>
    <button class="py-2.5 px-16 rounded-full font-bold bg-[#D9EBCD] text-green-950">
      Fund Wallet
    </button>
  </div>
  <div
    v-if="props.walletSize === 'desktop'"
    class="
    wallet-card
    w-full
    flex
    justify-between
    gap-3
    bg-green-950
    text-white
    px-5
    py-8
    rounded-2xl"
  >
    <div class="wallet-balance-container">
      <h3>Wallet Balance</h3>
      <p class="wallet-balance flex gap-2 justify-between w-full">
        <span class="wallet-balance-amount font-bold">
          {{showWallet ? `&#8358; ${props.walletAmount}` : '****'}}
        </span>
        <button
          class=""
          @click="showWallet = !showWallet"
        >
          <Icon
            :name="showWallet ? 'dashicons:hidden' : 'ion:eye-outline'"
            size="20"
          />
        </button>
      </p>
    </div>
    <button class="py-2.5 px-16 rounded-full font-bold bg-[#D9EBCD] text-green-950 w-auto self-end text-sm">
      Fund Wallet
    </button>
  </div>
</template>

<script setup lang="ts">
const showWallet = ref(false)

const props = defineProps<{
  walletSize: 'mobile' | 'desktop',
  walletAmount: number | string,
}>()
</script>

<style lang="scss" scoped>
</style>
