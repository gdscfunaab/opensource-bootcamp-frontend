<template>
    <footer class="container">
        <div class="first">
            <div class="hun">
                <b>
                     huntr
                </b>
               
            </div>
            <div class="icon">
                <img src="@/assets/icons/twitter.svg" alt="twitter" >
                <img src="@/assets/icons/medium.svg" alt="medium" >
                <img src="@/assets/icons/facebook.svg" alt="facebook" >
                <img src="@/assets/icons/instagram.svg" alt="instagram">
            </div>
        </div>
        <div class="rem">
            <ul>
                <li> Home</li>
                <li>Pricing</li> 
                <li>Features</li> 
                <li>About us</li> 
            </ul>
           
        </div>
        <div class="rem">
            <ul>
                <li> Career</li>
                <li>Community</li> 
                <li>Privacy Policy</li> 
            </ul>
        </div>
        <div class="rem">
            <ul>
                <li> Sign In</li>
                <li>Register</li> 
                <li>Know more</li>  
            </ul>  
        </div>
    </footer>
</template>
<style scoped>
.container{
    display: grid;
    grid-template-columns: auto auto auto auto ;
    grid-gap: 15px;
    margin: 20px 0px 70px 50px;
    font-family: sans-serif;

}
.first{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

}
.rem{
    display: flex;
    flex-direction: column;
}
.rem ul li{
    list-style-type: none;
    font-size: 17px;
    margin: 8px;
}
.hun{
    margin: 20px;
    color: rgb(250, 76, 198);
    font-size: 25px;
    margin-bottom: 35px;
}
.icon{
    margin-bottom: 20px;
}
.icon img{
    width:20px;
    margin: 0 3px;
}
</style>