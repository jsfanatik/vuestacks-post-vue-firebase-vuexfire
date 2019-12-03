<template>
  <div class="container">
    <nav class="green">
      <div class="nav-wrapper">
        <!-- <span class="brand-logo">Posts</span> -->
        <ul id="nav-mobile">
          <li><a href="/"><strong>All Posts</strong></a></li>
          <li><a href="/create"><strong>Create Post</strong></a></li>
        </ul>
      </div>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<script>
export default{
  methods: {

  }
}
</script>
