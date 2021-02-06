<template>
    <div class="continer">
            <h1><span>fetch data from JsonPleceholder</span></h1>
        <div class="table-responsive-sm">          
                <table class="table table-hover table-striped table-success">
                    <thead class="thead-dark">
                    <tr>
                        <th class="text-center">ID </th>
                        <th class="text-center">TITLE</th>
                        <th class="text-center">BODY</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="" v-for="item in tableBook3" :key="item.id">
                        <td class="text-center">{{item.id}}</td>
                        <td class="text-center">{{item.title}}</td>
                        <td class="text-center">{{item.body}}</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
    export default {
        name:'Book3Cmp',
        computed:mapState(['tableBook3']),
        methods:mapActions(['fetchDataBook3']),
        created(){
            this.fetchDataBook3();
        }
    }
</script>

<style lang="scss" scoped>
span{
    background-color: #fffeee;
    color: red;
    text-shadow: 5px 8px 20px red,
    5px 10px 25px orange;
}
*{direction: ltr;
text-align: left;
padding: 8px;
margin: 2px;}
</style>