<template>
    <div class="continer  fixed2">
        <div class="row ">        
            <router-link class="col-sm-4 btn btn-light"
             v-for="item in navHomeItems " 
             :key="item.id" :to="{path:item.router}"
             >{{item.name}}</router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'NavLink',
        computed:mapState(['navHomeItems'])
      
    }
</script>

<style lang="scss" scoped>
// .fixed2 {
//   position: fixed;
//   top: 100px;
//   right: 0;
//   width: 300px;
//   border: 3px solid #73AD21;
// }

// .fixed2 {
//     z-index: 1;
//   position: fixed;
//    position: -webkit-sticky; /* Safari */
//   position: sticky;
//     top: 0;
//   background-color: green;
//   border: 2px solid #4CAF50;}
</style>