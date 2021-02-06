<template>
    <div class="col-sm" v-for="item in menulink2" :key="item.id">
        <h4 @click="item.showLink=!item.showLink" class="col-sm-12 text-center btn btn-dark">{{item.header}}</h4>
            <ts-Link2>
                <div v-if="item.showLink">
                    <div v-if="item.parts">
                            <router-link
                            class="col-sm-12 text-center btn btn-light"
                            v-for="sub in item.parts" 
                            :key="sub.id" :to="{path:sub.router}"
                            >{{sub.name}}</router-link>
                  </div>
            </div>
            </ts-Link2>

        <!-- <router-link :to="{path:'/'}">course 1</router-link>
        <router-link :to="{path:'/course2'}">course 2</router-link>
        <router-link :to="{path:'/course3'}">course 2</router-link> -->
    </div>
</template>

<script>
import{mapState} from 'vuex'
import TsLink2 from '../Link2Cmp/TsLink2.vue'
    export default {
        name:'MenuLink2',
        components:{TsLink2},
        computed:mapState(['menulink2'])
    }
</script>

<style lang="scss" scoped>

</style>