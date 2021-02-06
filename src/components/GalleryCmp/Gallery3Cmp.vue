<template>
    <div class="continer">
        <h2 class="text-center">test pagination gallery 3</h2>
            <div class="row">
                <img src="../../photocars/1.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/2.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/3.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/4.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/5.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/6.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/7.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/8.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photocars/9.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                
                <img src="../../photo-computer/1.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/2.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/3.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/4.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/5.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/6.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/7.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/8.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
                <img src="../../photo-computer/9.jpg" class="col-sm-2 rounded img-fluid"  alt="image ">
            </div>
    </div>
</template>

<script>
    export default {
        name:'Gallery3Cmp'
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
            box-shadow: 0 4px 8px 0 rgba(139, 138, 189, 0.2), 0 6px 20px 0 rgba(48, 231, 11, 0.19);
            object-fit: cover;
        }
        img:hover{
            opacity: 0.1;
                box-shadow: 0 4px 8px 0 rgba(204, 233, 42, 0.2), 0 6px 20px 0 rgba(236, 142, 0, 0.19);
                border: 1px solid rgb(97, 89, 89);


        }
</style>