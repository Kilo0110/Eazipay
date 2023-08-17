<template>
  <header class="px-5 py-3">
    <h2 class="text-center">Eazipay's Team</h2>
  </header>
  <main class="px-5 w-[100vw] max-w-full overflow-hidden">
    <div class="total-employ-dash bg-green-950 px-5 py-7 text-white rounded-3xl flex flex-col justify-center gap-2">
      <h3 class="text-sm">Total Employee</h3>
      <p class="text-xl font-bold">11264</p>
    </div>
    <div class="button-toggle-container flex justify-between w-full max-w-full gap-2 my-3">
      <button class="w-full py-2.5 px-4 rounded-xl font-bold bg-green-950 text-white border-green-950 border">
        All Employee
      </button>
      <button class="w-full py-2.5 px-4 rounded-xl font-bold bg-gray-200 text-green-950">
        All Employee
      </button>
    </div>
    <div class="search-container flex gap-3 w-full">
      <form class="w-full flex search-input-container border-2 border-gray-400 px-3 py-2 rounded-2xl">
        <input
          type="search"
          name="employee-search"
          placeholder="Search"
          class="w-full"
        />
        <button>
          <Icon
            name="tabler:search"
            size="25"
          />
        </button>
      </form>
      <button class="filter-btn bg-gray-200 w-12 aspect-square rounded-lg">
        <Icon
          name="ion:filter"
          size="25"
        />
      </button>
    </div>
    <div class="switch-container py-4 flex items-center gap-4 w-full">
      <button class="px-3 py-2">
        <Icon name="uis:bars" />
      </button>
      <button class="px-3 py-2 border-r border-l">
        <Icon name="carbon:grid" />
      </button>
      <button class="px-3 py-2 border-r border-l">
        <span class="text-gray-400">Archived</span>
      </button>
      <div class="input-container ml-auto flex gap-2">
        <input
          type="checkbox"
          name="select-all-checkbox"
          id="select-all-checkbox"
        >
        <label
          for="select-all-checkbox"
          class="text-gray-400"
        >Select All</label>
      </div>
    </div>
    <div class="employee-container">
      <div class="employee-card flex py-3 border-t-2 w-full justify-between">
        <img
          src=""
          alt=""
          class="employee-img border-2 w-14 h-14 aspect-square rounded-[50%]"
        >
        <div class="employee-bio flex gap-1 flex-col">
          <h3 class="employee-name text-xl">Caleb Nwafor</h3>
          <span class="employee-position text-sm">Accountant</span>
          <span class="employee-gender text-sm">Female | Monthly</span>
        </div>
        <p class="employee-salary self-end font-bold text-green-950">&#8358;250,600.78</p>
      </div>
      <div class="employee-card flex py-3 border-t-2 w-full justify-between">
        <img
          src=""
          alt=""
          class="employee-img border-2 w-14 h-14 aspect-square rounded-[50%]"
        >
        <div class="employee-bio flex gap-1 flex-col">
          <h3 class="employee-name text-xl">Wasiu Tiamiyu</h3>
          <span class="employee-position text-sm">Product Designer</span>
          <span class="employee-gender text-sm">Male | Monthly</span>
        </div>
        <p class="employee-salary self-end font-bold text-green-950">&#8358;550,600.78</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
</style>
