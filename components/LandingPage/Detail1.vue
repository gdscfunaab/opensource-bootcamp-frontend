<template>
    <div class="head">
        <div class="header">
            <h1>Job Category</h1>
        </div>
            <div class="body">
                <div class="body1">
                <h2>Design</h2>
                <p>150 Job vacancy</p>
            </div>
            <div class="body2">
                <h2>Development</h2>
                <p>200 Job vacancy</p>
            </div>
            <div class="body3">
                <h2>Project Management</h2>
                <p>120 Job vacancy</p>
            </div>
        </div>
   </div>
    
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .head{
        height:100%;
        width: 100%;
        background-color: rgba(235, 232, 226, 0.295);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 50px;
        margin-left: -5px;
        padding: 0;
    }
    .header{
        padding: 0px 0px 10px 60px;

    }
    .body{
        display: flex;
        justify-content: space-around;
        /* position: relative; */
        align-items: center;
        flex-wrap: wrap;
        padding: 20px 170px 60px 170px;
        margin: 20px;
        box-sizing: border-box;
    
    }
    .body1{
        background-color: #fff;
        padding: 90px 60px 80px 60px;
    }

    .body2{
        background-color: #fff;
        padding:  90px 60px 80px 60px;
    }
    
    .body3{
        background-color: #fff;
        padding:  90px 40px 80px 40px;
    }


    h2{
        font-weight: 800px;
        font-size: 18px;
        color: rgba(95, 91, 91, 0.952);
        padding: 5px ;
        text-align: center;
    }
    p{
        font-weight: 10px;
        color: rgb(78, 72, 72);
        text-align: center;
        padding-top: 10px;
        font-size: 17px;
    }
    @media (max-width: 600px) {
        .body{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            width: 80vw;
            gap: 30px;
            margin: 30px 10px;
            padding: 20px 15px;
            box-sizing: border-box;
        }
        .body3{
        background-color: #fff;
        padding:  90px 30px 80px 30px;
        }
        
    }
    @media (max-width: 1200px){
        .body{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            gap: 30px;
            margin: 30px 10px;
            padding: 20px 15px;
          
            box-sizing: border-box;
        
        }
    }
</style>