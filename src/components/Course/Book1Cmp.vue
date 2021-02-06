<template>
    <div class="continer" id="table-ctn text-center">
            <div class="table-responsive">
    <table class="table table-bordered text-center table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th class="text-center">id</th>          
          <th class="text-center">title</th>          
          <th class="text-center">id</th>          
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-for="item in tableBook1" :key="item.id">
          <td class="text-center">{{item.id}}</td>
          <td class="text-center">{{item.title}}</td>
          <td class="text-center">{{item.completed}}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Book1Cmp',
        computed:mapState(['tableBook1'])
    }
</script>

<style lang="scss" scoped>
#table-ctn{
    margin: 2px;
}
*{direction: ltr;
text-align: left;
padding: 10px;}
</style>