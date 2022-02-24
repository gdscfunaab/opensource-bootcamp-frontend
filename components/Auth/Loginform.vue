<template>
    <div class="main">
        <div class="pic">
            <img src="loginpic.jpg">
        </div>
        <div class="center-right" >
            <div class="right">
            <div class="hun"><b>huntr</b></div> 
            <div class="need"><b>Need a job? Login</b> </div>
            <div class="textarea">
                <form action="#">
                    <input type="email" placeholder="Email Address" class="text"><br>
                    <input type="password" name="password" id="" placeholder="Password" class="text">
                    <br><input type="button" value="Sign In" class="button">
                </form>
            </div>
            <div>
                <span class="quest">Don't have an account?</span>  <nuxt-link to="#" class="sign"><span > Sign Up</span></nuxt-link>
            </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

body{
   margin: 0 !important;
   padding: 0 !important;
}
*{
    box-sizing: border-box;
}
.main{
    display: flex;
    flex-direction: row;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    width: 100%;
}
.pic{
    margin: 0px;
    padding: 0px;
    width: 50% ;
    /* position: relative;
    right: 20px;
    bottom: 20px; */
    height: 100vh;
}

.pic img{
    width: 100%;
}
.center-right{
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: auto;
}
.right{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    
}
.hun{
    margin: 20px;
    color: rgb(250, 76, 198);
    font-size: 27px;

}
.need{
    font-size: 18px;
    color: rgb(110, 109, 109);
}
.textarea{
    margin: 20px;
}
.textarea .text{
    margin: 10px;
    padding: 20px 20px;
    width: 29em;
    background-color: rgb(243, 239, 239,0.5);
    border-radius: 5px;
    border: 0px solid;
    font-size: 13px;
}
.button{
    margin: 10px;
    padding: 20px 15px;
    width: 29em;
    color: white;
    border-radius: 5px;
    border: 0px solid;
    background-color: rgb(15, 14, 14,0.9);
    cursor: pointer;
    animation-name: bounce;
    animation-duration: 0.3s;
    animation-iteration-count: 3;
}
@keyframes bounce{
    from{transform: translateY(10px);}
    to{transform: translateY(-10px);}
}
.quest{
    font-size: 17px;
    color: rgb(110, 109, 109);
}
.sign{
    text-decoration: none;
    font-size: 17px;
    color: rgba(15, 15, 58);
}
@media only screen and (max-width:1000px) {
    
    .pic{
        display: none;
    }
    .main{
    display: grid;
    font-family: sans-serif;
    
}
.center-right{
    place-items: center;
}
}
</style>