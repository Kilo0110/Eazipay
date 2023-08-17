<template>
  <header class="px-5">
    <div class="bio-container py-5 gap-3 flex items-center">
      <img
        src="/img/wasiu.png"
        alt="Wasiu profile picture"
      >
      <h1 class="welcome-text">Hello Wasiu</h1>
      <button class="ml-auto relative">
        <Icon
          name="gg:bell"
          size="25"
        />
        <span
          class="notification-alert absolute top-0 right-0 w-3 aspect-square rounded-[50%] border border-white bg-red-600"
        ></span>
      </button>
    </div>
  </header>
  <main class="px-5 mt-5">
    <section class="wallet-section">
      <div class="wallet-card w-full flex flex-col gap-3 bg-green-950 text-white px-5 py-8  rounded-2xl">
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
    </section>
    <section class="quick-stats-section mt-5">
      <h2>QUICK STATS</h2>
      <div class="quick-stats-container text-sm flex w-full gap-2">
        <div class="quick-stats w-full bg-gray-200 p-4 rounded-xl">
          <h3>Total Payroll</h3>
          <p class="font-bold">&#8358; 2,293.044,345.05</p>
        </div>
        <div class="quick-stats w-full bg-gray-200 p-4 rounded-xl">
          <h3>Total Employee</h3>
          <p class="font-bold">10,000</p>
        </div>
      </div>
    </section>
    <section
      class="quick-actions-section w-full grid grid-cols-3 grid-rows-4 place-items-center place-content-center gap-y-5"
    >
      <h2 class="col-start-1 col-span-3 row-start-1 row-span-1 place-self-start self-center">QUICK ACTIONS</h2>
      <div class="quick-actions-grid-container"></div>
      <button class="quick-action-btn bg-[#F0F7EB] p-5 rounded-2xl col-start-1 col-span-1 row-start-2 row-span-1">
        <Icon
          size="40"
          name="la:money-bill-wave"
        />
      </button>
      <button class="quick-action-btn bg-[#FFEDEC] p-5 rounded-2xl col-start-2 col-span-1 row-start-2 row-span-1">
        <Icon
          size="40"
          name="heroicons:user-plus"
          class="text-[#EA4E4B]"
        />
      </button>
      <button class="quick-action-btn bg-[#F0EEFF] p-5 rounded-2xl col-start-3 col-span-1 row-start-2 row-span-1">
        <img
          src="~/assets/svg/envelope-open-dollar.svg"
          alt=""
          class="w-10 fill-[#5542CF]"
        >
      </button>
      <button class="quick-action-btn bg-[#FFF2DB] p-5 rounded-2xl col-start-1 col-span-1 row-start-3 row-span-1">
        <img
          src="~/assets/svg/money-check-dollar-pen-svgrepo-com.svg"
          alt=""
          class="w-10"
        >
      </button>
      <button class="quick-action-btn bg-[#E5F6FE] p-5 rounded-2xl col-start-2 col-span-1 row-start-3 row-span-1">
        <Icon
          size="40"
          name="solar:hand-money-linear"
          class="text-[#116487]"
        />
      </button>
      <button class="quick-action-btn bg-[#E7FBEF] p-5 rounded-2xl col-start-3 col-span-1 row-start-3 row-span-1">
        <Icon
          size="40"
          name="ci:paper-plane"
          class="text-[#219653]"
        />
      </button>

      <button class="quick-action-btn bg-[#32A7E21A] p-5 rounded-2xl col-start-1 col-span-1 row-start-4 row-span-1">
        <Icon
          size="40"
          name="mdi:telephone-in-talk"
          class="text-[#32A7E2]"
        />
      </button>

      <button class="quick-action-btn bg-[#B548C61A] p-5 rounded-2xl col-start-2 col-span-1 row-start-4 row-span-1">
        <Icon
          size="40"
          name="pepicons-pop:wifi"
          class="text-[#B548C6]"
        />
      </button>
      <button class="quick-action-btn bg-[#FF87001A] p-5 rounded-2xl col-start-3 col-span-1 row-start-4 row-span-1">
        <Icon
          size="40"
          name="mdi:electricity-circle"
          class="text-[#FF8700]"
        />
      </button>
    </section>
  </main>
  <footer class="fixed bottom-0 w-full">
    <nav class="main-nav flex w-full justify-around border-2 py-5 rounded-ss-3xl rounded-se-3xl">
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="teenyicons:home-solid"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="heroicons:user-plus"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="mdi:paper-text-outline"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="solar:hand-money-linear"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="icon-park-outline:more-app"
        />
      </NuxtLink>
    </nav>
  </footer>
</template>

<script setup lang="ts">
const showWallet = ref(false)
</script>

<style lang="scss" scoped>
</style>
