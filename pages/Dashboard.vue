<template>
  <div class="dashboard-body grid">
    <aside class="aside max-w-[280px] shadow-xl min-h-screen col-start-1 col-span-1 row-start-1 row-span-2">
      <img
        src="/img/dashboard-logo-frame.png"
        alt=""
        class="aside__logo w-full"
      >
      <menu class="menu flex flex-col gap-5 border-b border-gray-200 py-5 px-3">
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="icon-park-outline:more-app"
              size="25"
            />
            Dashboard
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="ion:wallet-outline"
              size="25"
            />
            Wallet
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="heroicons:user-plus"
              size="25"
            />
            Employee Management
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="mdi:paper-text-outline"
              size="25"
            />
            Payroll
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="el:check"
              size="25"
            />
            Compliance
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="solar:hand-money-linear"
              size="25"
            />
            Quick Loan
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="uil:book-open"
              size="25"
            />
            Book Keeping
          </button>
        </li>
      </menu>
      <menu class="aside__user-care-container flex flex-col gap-5 py-5 px-3 pt-7">
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="bi:telephone"
              size="25"
            />
            Support
          </button>
        </li>
        <li>
          <button class="menu-btn flex gap-2">
            <Icon
              name="material-symbols:settings-outline"
              size="25"
            />
            Settings
          </button>
        </li>
      </menu>
    </aside>
    <header class="header w-full col-start-2 col-span-1 row-start-1 row-span-1">
      <nav class="main-nav flex items-center justify-end">
        <img
          src="/img/dashboard-logo"
          alt=""
        >
        <NotificationBell />
        <div class="user-bio grid grid-cols-2">
          <img
            src="/img/amabiamasi.png"
            alt="Amabiamasi picture"
            class="col-start-1 col-span-1"
          >
          <span class="font-bold col-start-2 col-span-1">Kalu Amabiamasi</span>
        </div>
      </nav>
    </header>
    <main class="main px-20 col-start-2 col-span-1 row-start-2 row-span-1 bg-gray-200">
      <section class="hero-section">
        <h1>Welcome Abasiama</h1>
        <p>Pay and manage your employee in minutes</p>
        <div class="dashboard-quick-action-container grid grid-cols-5 grid-rows-2 gap-10">
          <div
            class="wallet-container col-start-1 col-span-4 row-start-1 row-span-1 bg-green-950 text-white px-6 py-8 rounded-3xl"
          >
            <span class="text-sm">Wallet Balance</span>
            <p class="text-lg font-bold py-2">N12,560,078.00</p>
          </div>
          <div
            class="next-payroll-card col-start-5 col-span-1 row-start-1 row-span-2 border-2 rounded-3xl overflow-hidden"
          >

          </div>
          <button
            class="quick-actions-card flex gap-3 text-sm bg-white shadow-xl flex-col justify-center items-center rounded-xl quick-actions-card--employee"
          >
            <div class="quick-action-btn bg-[#FFEDEC] p-5 rounded-2xl col-start-2 col-span-1 row-start-2 row-span-1">
              <Icon
                size="20"
                name="heroicons:user-plus"
                class="text-[#EA4E4B]"
              />
            </div>
            Add employees
          </button>
          <button
            class="quick-actions-card flex gap-3 text-sm bg-white shadow-xl flex-col justify-center items-center rounded-xl quick-actions-card--salaries"
          >
            <div class="quick-action-btn bg-[#F0F7EB] p-5 rounded-2xl col-start-1 col-span-1 row-start-2 row-span-1">
              <Icon
                size="20"
                name="la:money-bill-wave"
              />
            </div>
            Pay Salaries
          </button>
          <button
            class="quick-actions-card flex gap-3 text-sm bg-white shadow-xl flex-col justify-center items-center rounded-xl quick-actions-card--compliances"
          >
            <div class="quick-action-btn bg-[#E7FBEF] p-5 rounded-2xl col-start-3 col-span-1 row-start-3 row-span-1">
              <Icon
                size="20"
                name="ci:paper-plane"
                class="text-[#219653]"
              />
            </div>
            Pay Compliances
          </button>
          <button
            class="quick-actions-card flex gap-3 text-sm bg-white shadow-xl flex-col justify-center items-center rounded-xl quick-actions-card--loan"
          >
            <div class="quick-action-btn bg-[#E5F6FE] p-5 rounded-2xl col-start-2 col-span-1 row-start-3 row-span-1">
              <Icon
                size="20"
                name="solar:hand-money-linear"
                class="text-[#116487]"
              />
            </div>
            Quick Loan
          </button>
        </div>
      </section>
      <section class="inflow-outflow-section"></section>
      <section class="recent-activities-section">
        <h2>Recent Activities</h2>
        <div class="recent-input-search-container flex">
          <CustomInput
            name="recent-activities-search"
            type="search"
            label="Search"
            class="w-full"
          />
          <button class="search-btn">
            <Icon
              name="tabler:search"
              size="25"
            />
          </button>
        </div>
        <div class="daily-activites-container bg-gray-200 px-5 rounded-2xl">
          <div class="daily-actvities flex flex-col gap-3">
            <h3>Wednesday, November 09, 2022</h3>
            <DailyActivity
              v-for="activity in wednesdayActivities"
              :activity="activity"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Actvity from '~/types/ActivityType';

const wednesdayActivities: Actvity[] = [
  {
    name: 'Badmus Kernis',
    activity: 'Paid November 2022 salary',
    cellOne: 'Payroll',
    cellThree: 'Employee',
    cellThreeData: '82',
    time: '16.15'
  },
  {
    name: 'Kalu Abasiama',
    activity: 'Added new employee',
    cellOne: 'Employee management',
    cellThree: 'Employee',
    cellThreeData: '84'
  }
]
</script>

<style lang="scss" scoped>
.dashboard-body {
  grid-template-columns: 280px 1fr;
  grid-template-rows: 15vh 1fr;
}
</style>
