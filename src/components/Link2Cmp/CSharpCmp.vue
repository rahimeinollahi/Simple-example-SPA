<template>
    <div class="continer">
        <h2>progress header</h2>
         <hr>
            <div class=" continer" v-for="item in progressItems2" :key="item.id">
      <div class="pg">
            <div class="progress " >
                 <div   :class="item.nameClass " :style="item.widthProgress">{{item.name}} + {{item.pg}}</div>
         </div><br>
    </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'CSharpCmp',
        computed:mapState(['progressItems2'])
    }
</script>

<style lang="scss" scoped>
h2{
    direction: ltr;
    text-align: left;
}
</style>