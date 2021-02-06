<template>
  <div>
        <nav-link />
        <hr id="hr-main">
  </div>
        <router-view v-slot="{Component,route}">
            <transition :name="route.meta.transition">
                <component :is="Component" />
            </transition>
        </router-view>
</template>

<script>
import NavLink from './components/NavLink.vue'
export default {
  components:{
    NavLink
  }
}
</script>

<style lang="scss">
*{box-sizing: border-box;}
#hr-main{
  background-color: red;
  margin: 5px 25px;
}
  @font-face {
    font-family: 'page-font';
    src: url('./assets/fonts/AlexandriaFLF.ttf');
  }
  *{font-family: 'page-font';}

//ts link1
.ts-course-enter-active,
.ts-course-leave-active{
  transition: all 0.3s ease-out 0.5;
}
.ts-course-enter-from,
.ts-course-leave-to{
  opacity: 0;
  transform:scale(2)
}
//ts link2
.ts-computer-enter-active,
.ts-computer-leave-active{
  transition: all 0.4s ease-in 0.3;
}
.ts-computer-enter-from,
.ts-computer-leave-to{
  opacity: 0;
  // transform:scale(2);
}
//ts gallery
.ts-gallery-home-enter-active,
.ts-gallery-home-leave-active{
  transition: all 0.4s ease-in-out 0.4s;
}
.ts-gallery-home-enter-from,
.ts-gallery-home-leave-to{
  opacity: 0;
  // transform:sc
}
*{direction: rtl;
text-align: right;}
</style>

    
    