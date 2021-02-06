<template>
    <div class="continer">
        <h2 class="text-center">test pagination gallery 2</h2>
            <div class="row">
                <img src="../../photocars/1.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/2.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/3.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/4.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/5.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/6.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/7.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/8.jpg" class="col-sm-4 img-fluid"  alt="image ">
                <img src="../../photocars/9.jpg" class="col-sm-4 img-fluid"  alt="image ">
            </div>
    </div>
</template>

<script>
    export default {
        name:'Gallery2Cmp'
    }
</script>

<style lang="scss" scoped>
h2{
    background-color: #fffeee;
}
*{
    direction: ltr;
    text-align: left;
}
            img{
            // margin: 1px;
            padding: 5px;
            box-shadow: 0 4px 8px 0 rgba(27, 24, 224, 0.2), 0 6px 20px 0 rgba(48, 231, 11, 0.19);
            object-fit: cover;
        }
        img:hover{
            opacity: 0.5;
                box-shadow: 0 4px 8px 0 rgba(211, 247, 7, 0.2), 0 6px 20px 0 rgba(236, 142, 0, 0.19);
                border: 1px solid rgb(97, 89, 89);


        }
</style>