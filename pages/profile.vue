<template>
  <header class="flex justify-between px-4 py-3 items-center">
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
  <main class="bg-gray-200 px-4">
    <section class="business-profile-section py-3 rounded-lg">
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
    <section class="edit-company-information-section bg-white px-2 flex flex-col gap-3 rounded-2xl">
      <h1 class="py-4 border-b border-gray-200 flex items-center gap-5">
        <button>
          <Icon
            name="ion:chevron-back"
            size="25"
          />
        </button>
        Edit Company Information
      </h1>
      <form
        action=""
        class="update-company-profile-form p-3 rounded-xl border border-gray-200"
      >
        <div class="logo-input-container">
          <CustomFileInput :file-preview="logoFilePreview">
            <template #file-input-slot>
              <FileInput
                @file-updated="captureFile($event)"
                class="self-end"
              />
            </template>
          </CustomFileInput>
        </div>
        <CustomInput
          name="company-name-input"
          label="Company name"
          type="text"
        />
        <div class="company-registraion-container flex flex-col gap-2">
          <p>Is your company registered?</p>
          <div class="flex gap-2">
            <CallToAction
              button-text="Yes"
              :is-colored="true"
              class="text-xs rounded-xl"
            />
            <CallToAction
              button-text="No"
              :is-colored="false"
              class="text-xs rounded-xl"
            />
          </div>
        </div>
        <!-- <div class="registration-proof-container">
          <CustomFileInput :file-preview="regFilePreview">
            <template #file-input-slot>
              <FileInput
                @file-updated="captureFile($event)"
                class="self-end"
              />
            </template>
          </CustomFileInput>
        </div> -->
        <CustomInput
          name="office-address-input"
          type="address"
          label="Office Address"
        />
        <CustomSelect
          :options="companySizeOptions"
          name="company-size"
          label="Company Size"
        />
        <CustomInput
          name="pension-code-input"
          type="text"
          label="Pension code"
        />
        <CustomSelect
          :options="stateOptions"
          name="PAYE-state"
          label="PAYE State"
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
        <div class="form-action-btn flex gap-2">
          <CallToAction
            button-text="Cancel"
            :is-colored="false"
          />
          <CallToAction
            button-text="Save"
            :is-colored="true"
          />
        </div>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
const logoFilePreview = ref('')
const regFilePreview = ref('')
const fileName = ref('')

const companySizeOptions = ['Less than 5', '5 to 10', "10 to 50", "100 and above"]

const stateOptions = [
  'Lagos', 'Abuja', 'Imo', 'Oyo', 'Kano', 'Kaduna', 'Ondo'
]

const captureFile = (event: Event) => {
  // @ts-ignore
  filePreview.value = event.previewBase64;
  // @ts-ignore
  fileName.value = event.name;
}
</script>

<style lang="scss" scoped>
</style>
