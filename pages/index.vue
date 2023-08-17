<template>
  <header class="fixed w-full z-50">
    <nav class="nav main-nav flex justify-center py-5 gap-5 w-full items-center">
      <NuxtLink to="/">
        <img
          src="/img/logo.png"
          alt="Eazipay logo"
        >
      </NuxtLink>
      <menu class="nav__menu flex justify-around gap-5 ">
        <NuxtLink>Individual</NuxtLink>
        <NuxtLink>Business</NuxtLink>
        <NuxtLink>Pricing</NuxtLink>
        <NuxtLink>Set your payout</NuxtLink>
      </menu>
      <div class="nav__button-container flex gap-3 items-center">
        <CallToAction
          button-text="Log in"
          :is-colored="false"
        />
        <CallToAction
          button-text="Register"
          :is-colored="true"
        />
      </div>
    </nav>
  </header>
  <section class="hero-section min-h-[100vh] flex">
    <div class="text-container basis-1/2 flex flex-col items-center justify-center pl-16 gap-3 lg:min-h-[120vh]">
      <h1 class="page-heading text-5xl flex flex-col self-start font-accent-medium">
        <span>Run your <span class="text-green-950">payroll</span></span>
        <span><span class="text-yellow-900">easily</span> in <span class="text-red-500">seconds</span></span>
      </h1>
      <p class="max-w-[40ch] self-start">We've built an all-inclusive simple solution for individual and businesses to
        manage staff,
        pay salaries, bills and relevant taxes all at once.</p>
      <CallToAction
        button-text="Start Using Free, Forever"
        :is-colored="true"
        class="self-start px-10"
      />
      <div class="download-prompt-container grid grid-cols-2 gap-x-3">
        <p class="col-start-1 col-span-2 ">Download the Eazipay App</p>
        <div class="apple-app-download-container bg-white rounded-md px-4 py-3 max-w-[270px] flex gap-3 items-center">
          <span class="flex items-center justify-center w-[40px] aspect-square rounded-[50%] bg-gray-300">
            <Icon
              name="logos:apple"
              class="w-[20px]"
            />
          </span>
          Download on the Appstore
        </div>
        <div
          class="google-playstore-download-container bg-white rounded-md px-4 py-3 max-w-[270px] flex gap-3 items-center"
        >
          <span class="flex items-center justify-center w-[40px] aspect-square rounded-[50%] bg-gray-300">
            <Icon
              name="logos:google-play-icon"
              class="w-[20px]"
            />
          </span>
          Get on Google Play
        </div>
      </div>
    </div>
    <div class="img-container basis-1/2 flex items-center">
      <img
        src="/img/hero-img.png"
        class="w-full"
        alt=""
      >
    </div>
  </section>
  <section class="individual-section py-20 min-h-[70vh]">
    <h2 class="text-green-950 text-center text-3xl font-accent-medium">For Individuals and Businesses</h2>
    <p class="text-center">Join 200+ businesses using Eazipay's easy solution</p>
    <div class="card-container grid grid-cols-4 grid-rows-1 p-10 max-w-5xl mx-auto">
      <div class="card bg-green-950 p-10 rounded-lg text-white col-start-1 col-span-2 row-start-1 row-span-1">
        <h3 class="font-bold">Tamper-proof Payment</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio libero ipsum molestiae quis consequuntur
          nemo non saepe perspiciatis, tempore itaque atque veritatis sunt similique velit.</p>
      </div>
      <div class="card bg-green-950 p-10 rounded-lg text-white col-start-2 col-span-2 row-start-1 row-span-1">
        <h3 class="font-bold">All Payroll, Anytime</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio libero ipsum molestiae quis consequuntur
          nemo non saepe perspiciatis, tempore itaque atque veritatis sunt similique velit.</p>
      </div>
      <div class="card bg-green-950 p-10 rounded-lg text-white col-start-3 col-span-2 row-start-1 row-span-1">
        <h3 class="font-bold">Payroll in Seconds</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio libero ipsum molestiae quis consequuntur
          nemo non saepe perspiciatis, tempore itaque atque veritatis sunt similique velit.</p>
      </div>
    </div>
    <p class="text-center max-w-[50ch] mx-auto">We are happy to answer your queries. Please reach us at <span
        class="text-red-600"
      >hello@myeazipay.com</span> and
      expect our response shortly after.</p>
  </section>

  <section class="onboarding-section flex flex-col py-10 min-h-[70vh]">
    <h2 class="text-green-950 text-3xl text-center font-accent-medium">How Eazipay Works</h2>
    <p class="text-center">Get started in 3 simple steps</p>
    <div class="onboardinh-section__main-content flex w-full">
      <div class="onboarding-img-container relative w-full">
        <img
          src="/img/rings.png"
          alt=""
          class="max-w-sm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
        <img
          src="/img/onboarding-screenshot.png"
          alt=""
          class="max-w-[200px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
      </div>
      <div class="onboarding-steps-container w-full flex justify-center items-center">
        <img
          src="/img/onboarding-steps.png"
          alt=""
          class="w-4/6"
        >
      </div>
    </div>
  </section>

  <section class="free-section relative flex min-h-[50vh] bg-red-100 px-32 py-20">
    <img
      src="/img/red-dots.png"
      alt=""
      class="dots absolute left-24 top-0"
    >
    <div class="text-container flex flex-col justify-center basis-1/2">
      <h2 class="text-4xl max-w-[10ch] font-accent-medium">Free forever for your <span class="text-red-600">salary
          payment</span></h2>
      <p>Subscribe to the Eazilife today</p>
    </div>
    <div class="img-container basis-1/2">
      <img
        src="/img/Frame-48096442.png"
        alt=""
        class="w-full"
      >
    </div>
  </section>

  <section class="demo-section min-h-[70vh] flex items-center justify-between gap-5 relative px-24 py-10">
    <img
      src="/img/green-dots.png"
      alt=""
      class="absolute top-8 left-0 w-36"
    >
    <div class="text-container">
      <h2 class="font-accent-medium text-5xl max-w-[10ch] text-green-950">Get an Exclusive Demo of Eazipay</h2>
      <p class="max-w-[30ch]">Our greatest priority is to put you and your business first. Let's show you how we can help.
      </p>
    </div>
    <div class="contact-form-container shadow-lg p-10 rounded-xl">
      <form class="bg-white rounded-3xl">
        <h3 class="text-green-950 font-bold text-2xl text-center">First things first</h3>
        <p class="text-center text-sm">We want to serve you better. Tell us a bit about yourself or company.</p>
        <div class="form-toggle-container flex gap-2 my-3">
          <CallToAction
            :is-colored="true"
            button-text="Individual"
            class="rounded-xl"
          />
          <CallToAction
            :is-colored="false"
            button-text="Company"
            class="rounded-xl bg-gray-200 border-none"
          />
        </div>
        <CustomInput
          label="First name"
          type="text"
          name="first-name"
        />
        <CustomInput
          label="Last name"
          type="text"
          name="last-name"
        />
        <CustomInput
          label="Email"
          type="email"
          name="email"
        />
        <CustomInput
          label="Job Title"
          type="text"
          name="job-title"
        />
        <CustomInput
          label="Company Size"
          type="number"
          name="company-size"
        />
        <CallToAction
          button-text="Request Demo"
          :is-colored="true"
          class="w-full"
        />
      </form>
    </div>
  </section>

  <footer class="footer w-full px-5 py-10 grid grid-cols-5 grid-rows-1 gap-x-3 max-w-6xl mx-auto">
    <div class="col-span-1 col-start-1 bio-column">
      <NuxtLink to="/">
        <img
          src="/img/logo.png"
          alt="Logo img"
          class="w-20"
        >
      </NuxtLink>
      <p>Copyright &copy; 2023 Eazipay. All rights reserved.</p>
    </div>
    <div class="col-span-1 col-start-2 product-column">
      <h3 class="font-bold">Product</h3>
      <ul>
        <li>Individual</li>
        <li>Businesses</li>
        <li>Request Demo</li>
        <li>Pricing</li>
      </ul>
    </div>
    <div class="col-span-1 col-start-3 legal-column">
      <h3 class="font-bold">Legal</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
    <div class="col-span-1 col-start-4 resources-column">
      <h3 class="font-bold">Resources</h3>
      <ul>
        <li>FAQs</li>
        <li>Blog</li>
        <li>Career</li>
        <li>Customer Stories</li>
      </ul>
    </div>
    <div class="col-span-1 col-start-5 contact-column">
      <h3 class="font-bold">Contact us</h3>
      <ul>
        <li>eazipay@gmail.com</li>
        <li>+234 816 876 9518</li>
        <input
          type="email"
          placeholder="Your email address"
          class="bg-gray-400 px-3 w-full"
        />
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero-section {
  background: url('/img/gradients.png') top center / cover;
}

.page-heading {
  @supports(text-wrap: balance) {
    text-wrap: balance
  }
}

.card {
  box-shadow: -5px 5px 10px 5px rgba(#000, 0.3);
}

input {
  outline: none;
}

.main-nav {
  backdrop-filter: blur(10px);
  background-color: rgba(#fff, 0.3);
}

.individual-section {
  background: url('/img/wave.png') top center / cover
}
</style>
