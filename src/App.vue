<template>
  <div id="app">
    <div class="flex px-2 border-b bg-white">
      <router-link to="/" class="block py-4 px-2 border-b-2 border-transparent focus:bg-gray-400 hover:bg-gray-400" exact-active-class="border-purple-400">Home</router-link>
      <router-link to="/data-table" class="block py-4 px-2 border-b-2 border-transparent focus:bg-gray-400 hover:bg-gray-400" exact-active-class="border-purple-400">DataTable</router-link>
      <router-link to="/base-icon" class="block py-4 px-2 border-b-2 border-transparent focus:bg-gray-400 hover:bg-gray-400" exact-active-class="border-purple-400">BaseIcon</router-link>
      <router-link to="/base-input" class="block py-4 px-2 border-b-2 border-transparent focus:bg-gray-400 hover:bg-gray-400" exact-active-class="border-purple-400">BaseInput</router-link>
      <router-link to="/horizontal-scroll" class="block py-4 px-2 border-b-2 border-transparent focus:bg-gray-400 hover:bg-gray-400" exact-active-class="border-purple-400">HorizontalScroll</router-link>
    </div>
    <div class="p-4">
      <router-view/>
    </div>
  </div>
</template>
