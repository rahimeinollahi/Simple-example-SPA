<template>
        <div class="continer">
            <h2>haeder car one</h2>
            <div class="row ">
                      <img src="../../photocars/1.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/2.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/3.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/4.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/5.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/6.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/7.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/8.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      <img src="../../photocars/9.jpg" class="col-sm-4 img-fluid rounded-circle" alt="Cinque Terre" width="304" height="236"> 
                      
            </div>
        </div>
</template>

<script>
    export default {
        name:'Car1',
        components:{
            
        }
    }
</script>

<style lang="scss" scoped>
h2{text-shadow: 5px 4px 15px red;}
*{box-sizing: border-box;}
img{
    // margin: 1px;
    padding: 5px;
     box-shadow: 0 4px 8px 0 rgba(211, 6, 194, 0.2), 0 6px 20px 0 rgba(231, 11, 11, 0.19);
     object-fit: cover;
}
img:hover{
    opacity: 0.5;
         box-shadow: 0 4px 8px 0 rgba(211, 247, 7, 0.2), 0 6px 20px 0 rgba(236, 142, 0, 0.19);
         border: 1px solid red;


}
*{direction: ltr;
text-align: left;
}
 .carousel-inner img {
    width: 100%;
    height: 100%;
  }
</style>