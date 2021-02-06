<template>
    <div class="continer">
        <div class="row">
            <div class="col-sm-3"><menu-link-right /></div>
            <div class="col-sm-6">
                <router-view v-slot="{Component,route}">
                    <transition :name="route.meta.transition">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
            <div class="col-sm-3"><menu-link-left /></div>
        </div>
    </div>
</template>

<script>
import MenuLinkRight from '../../components/Link2Cmp/MenuLinkRight.vue'
import MenuLinkLeft from '../../components/Link2Cmp/MenuLinkLeft.vue'
    export default {
  components: { MenuLinkRight,MenuLinkLeft },
        name:'Link2'
    }
</script>

<style lang="scss" scoped>
//ts computer
.ts-computer-enter-active,
.ts-computer-leave-active{
  transition: all 1s;
}
.ts-computer-enter-from,
.ts-computer-leave-to{
  opacity: 0;
  transform:skewX(50deg);
}
//ts programing
.ts-program-enter-active,
.ts-program-leave-active{
  transition: all 0.5s ease-in 1s;
}
.ts-program-enter-from,
.ts-program-leave-to{
  opacity: 0;
  transform:rotate(35deg);
}
//ts graphic
.ts-graphic-enter-active,
.ts-graphic-leave-active{
  transition: all 0.5s ease-out 0.5s;
}
.ts-graphic-enter-from,
.ts-graphic-leave-to{
  opacity: 0;
  transform:translate(50px);
}

*{direction: rtl;
text-align: right;}
</style>