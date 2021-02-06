<template>
    <div class=" continer" v-for="item in progressItems1" :key="item.id">
        <h3>test progress header...</h3>
      <div class="pg">
            <div class="progress " >
                 <div   :class="item.nameClass " :style="item.widthProgress">{{item.name}} + {{item.pg}}</div>
         </div><br>
    </div>
      </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'CPlusCmp',
        computed:mapState(['progressItems1'])
    }
</script>

<style lang="scss" scoped>
*{
    direction: ltr;
    text-align: left;
    // font-size: 20px;
}
.pg{
padding: 8px;
    // padding: 5px
    margin-top:25px ;
}
h3{
    text-shadow: 2px 5px 15px red,
    5px 7px 25px blue;
}
</style>