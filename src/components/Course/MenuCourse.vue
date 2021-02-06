<template >
    <div class="col-sm bg-color-menu">
        <div  v-for="item in menuItems1" :key="item.id">
        <h4 @click="item.showLink=!item.showLink" class="col-sm-12 text-center btn btn-dark dropdown-toggle">{{item.header}}</h4>
            <ts-rgiht>
                <div v-if="item.showLink">
                    <div v-if="item.parts">
                            <router-link
                            class="col-sm-12 text-center btn btn-light"
                            v-for="sub in item.parts" 
                            :key="sub.id" :to="{path:sub.router}"
                            >{{sub.name}}</router-link>
                  </div>
            </div>
            </ts-rgiht>

        <!-- <router-link :to="{path:'/'}">course 1</router-link>
        <router-link :to="{path:'/course2'}">course 2</router-link>
        <router-link :to="{path:'/course3'}">course 2</router-link> -->
    </div>
    </div>
</template>

<script>
import{mapState} from 'vuex'
import TsRgiht from '../TsRgiht.vue'
    export default {
        name:'MenuCourse',
        components:{TsRgiht},
        computed:mapState(['menuItems1'])
    }
</script>

<style lang="scss" scoped>
.bg-color-menu{
    background-color: #fffeee;
    height: 100%;
    border-left: 1px solid #ffeeee;
}
</style>