<template>
    <div class="continer">
        <h3 id="book2-header">fetch data from jsonplaceholder</h3>
      <div class="table-responsive">
            <table class="table table-bordered table-hover table-striped table-dark">
                <thead class="thead-light">
                        <tr>
                            <th class="text-center">ID</th>
                            <th class="text-center">TITLE</th>
                            <th class="text-center">COMPOLETED</th>
                        </tr>
                </thead>

                <tbody>
                    <tr v-for="item in tableBook2" :key="item.id">
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
import {mapState, mapActions} from 'vuex'
    export default {
        name:'Book2Cmp',
        computed:mapState(['tableBook2']),

          methods:mapActions(['fetchDataBook2']),

        created(){
            this.fetchDataBook2();
        }
    }
</script>

<style lang="scss" scoped>
#book2-header{
    text-shadow: 5px 5px 15px red,
    5px 2px 12px blue,
    0 3px 24px orange;
}
*{direction: ltr;
text-align: left;
margin: 2px;
padding: 10px;}

</style>