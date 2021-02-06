<template>
    <div class="continer">
            <ul class="pagination pagination-md justify-content-center fixed2">
                    <li v-for="item in galleryItems" :key="item.id" class="page-item">
                        <!-- <a class="page-link" href="#">Previous</a> -->
                        <router-link class="page-link" :to="{path:item.router}">{{item.name}}</router-link>
                    </li>
            </ul>

            <div class="row">
                <router-view class="col-sm-12" v-slot="{ Component, route }">
                 <transition :name="route.meta.transition">
                    <component :is="Component" />
                </transition>
                </router-view>
            </div>
            
        
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'GalleryHome',
        computed:mapState(['galleryItems'])
    }
</script>

<style lang="scss" scoped>

.fixed2 {
    z-index: 1;
  position: fixed;
   position: -webkit-sticky; /* Safari */
  position: sticky;
    top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
//   bottom: 0;
//   right: 0;
//   width: 300px;
//   border: 3px solid #73AD21;
}
//ts galleryone
.ts-gallery-home-enter-active,
.ts-gallery-home-leave-active{
  transition: all 0.4s ease-in-out 0.4s;
}
.ts-gallery-home-enter-from,
.ts-gallery-home-leave-to{
  opacity: 0;
  // gallerytwo
}
.ts-gallerytwo-enter-active,
.ts-gallerytwo-leave-active{
  transition: all 0.4s ease-in-out 0.4s;
}
.ts-gallerytwo-enter-from,
.ts-gallerytwo-leave-to{
  opacity: 0;
  // gallerythree
}
.ts-gallerythree-enter-active,
.ts-gallerythree-leave-active{
  transition: all 0.4s ease-in-out 0.4s;
}
.ts-gallerythree-enter-from,
.ts-gallerythree-leave-to{
  opacity: 0;
  transform: scale(3);
  
}

*{
    direction: ltr;
    text-align: left;
}
</style>