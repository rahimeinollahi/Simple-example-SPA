<template>
  <div class="continer">
      <div class="row">
        <div class="col-sm-4"><menu-course /></div>
        <div class="col-sm-8">
            <router-view v-slot="{Component,route}">
                <transition :name="route.meta.transition">
                     <component :is="Component" />
                </transition>
            </router-view>
        </div>
      </div>
  </div>
</template>

<script>
import MenuCourse from '../components/Course/MenuCourse.vue'
  export default {
  components: { MenuCourse },
    
  }
</script>

<style lang="scss" scoped>

//ts course
.ts-course-enter-active,
.ts-course-leave-active{
  transition: all 1s;
}
.ts-course-enter-from,
.ts-course-leave-to{
  opacity: 0;
  transform:  translateY(50px);
}
//ts books
.ts-book-enter-active,
.ts-book-leave-active{
  transition: all 1s;
}
.ts-book-enter-from,
.ts-book-leave-to{
  opacity: 0;
  transform:scale(2)
}
//ts car
.ts-car-enter-active,
.ts-car-leave-active{
  transition: all 1s;
}
.ts-car-enter-from,
.ts-car-leave-to{
  opacity: 0;
  transform:skewY(50deg);
}

*{
  direction: rtl;
  text-align: right;
}
</style>