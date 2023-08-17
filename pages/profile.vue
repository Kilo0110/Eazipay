<template>
  <header class="flex justify-between px-5 py-3 items-center">
    <button class="menu-button bg-gray-200 w-11 h-11 rounded-xl">
      <Icon
        name="uis:bars"
        size="25"
      />
    </button>
    <h1 class="text-base font-bold text-center">Settings</h1>
    <button class="notification-alert-btn relative">
      <Icon
        name="gg:bell"
        size="25"
      />
      <span
        class="notification-alert absolute top-0 right-0 w-3 aspect-square rounded-[50%] border border-white bg-red-600"
      ></span>
    </button>
  </header>
  <main class="bg-gray-200 px-2">
    <section class="business-profile-section p-3 rounded-lg">
      <h2 class="capitalize bg-white px-4 py-3 my-2 font-bold flex justify-between items-center rounded-2xl">Business
        profile
        <button class="close-business-profile-tab-btn">
          <Icon name="" />
        </button>
      </h2>
      <div
        class="business-profile-tab bg-gray-200 grid grid-cols-2 grid-rows-3 gap-1 text-xs rounded-2xl overflow-hidden">
        <button class="company-tab py-3 text-center text-gray-700 font-bold px-2 bg-white">Company</button>
        <button class="founder-tab py-3 text-center text-gray-700 font-bold px-2 bg-white">CEO/Founder</button>
        <button class="director-tab py-3 text-center text-gray-700 font-bold px-2 bg-white">Company Director</button>
        <button class="account-tab py-3 text-center text-gray-700 font-bold px-2 bg-white">Account Information</button>
        <button class="branch-tab py-3 text-center text-gray-700 font-bold px-2 bg-white">Branch department</button>
        <button class="kyc-tab py-3 text-center text-gray-700 font-bold px-2 bg-white">KYC information</button>
      </div>
    </section>
    <section class="edit-company-information-section bg-white py-10 px-5 flex flex-col">
      <CustomInput
        name="company-name-input"
        label="Company name"
        type="text"
      />
      <div class="company-registraion-container">
        <p>Is your company registered?</p>
        <CallToAction
          button-text="Yes"
          :is-colored="true"
        />
        <CallToAction
          button-text="No"
          :is-colored="false"
        />
      </div>
      <CustomInput
        name="office-address-input"
        type="address"
        label="Office Address"
      />
      <CustomInput
        name="pension-code-input"
        type="text"
        label="Pension code"
      />
      <CustomInput
        name="pension-ID-input"
        type="text"
        label="PAYE ID"
      />
      <CustomInput
        name="nhf-code-input"
        type="text"
        label="NHF Code"
      />
      <CustomInput
        name="website-input"
        type="url"
        label="Website"
      />
      <CustomInput
        name="indstry-input"
        type="text"
        label="Industry"
      />
      <div class="form-action-btn flex">
        <CallToAction
          button-text="Cancel"
          :is-colored="false"
        />
        <CallToAction
          button-text="Save"
          :is-colored="true"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
</style>
