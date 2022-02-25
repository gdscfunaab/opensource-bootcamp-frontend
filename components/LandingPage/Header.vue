<template>
    <div class="header">
        <div class="header-logo">
            <p><nuxt-link to="/">huntr</nuxt-link></p>
        </div>
        <div class="header-links">
            <nuxt-link to="/">Get Jobs</nuxt-link>
            <nuxt-link to="/login">Post Jobs</nuxt-link>
        </div>
        <div class="header-buttons">
            <button class="login"><nuxt-link to="/login">Login</nuxt-link></button>
            <button class="signup"><nuxt-link to="/register">Sign Up</nuxt-link></button>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 4em;
    position:absolute;
    top: 0;
    animation-name: head;
    animation-duration: 1.5s;
    transform-origin: right;
    transition-timing-function: ease;

}
@keyframes head{
    from{transform: rotate(-40deg);}
    to {transform: rotateZ(0deg);}

}

    .header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
      
    }

    .header-logo a {
        font-size: 1.6rem;
        font-weight: bold;
        color: hotpink;
        text-decoration: none;
       
    }

    .header-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
       
    }
   

    .header-links a {
        font-size: 1rem;
        font-weight: bold;
        padding: 1rem;
        text-decoration: none;
        color: rgb(70, 69, 69);
        
    }

    .header-buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-right: 6rem;
        
        
    }

    .header-buttons button {
        border-radius: 5px;
        padding: 0.65rem 1rem;
        font-size: 1rem;
        max-width: 8rem;
        margin: 1.2rem;
        border: none;
    }
    .login{
        background-color: white;
        color: hotpink;
    }
    .signup{
        background-color: hotpink;
       
    }
    .signup a{
        text-decoration: none;
         color: white;   
         font-size: small;
    }
    .login a{
        text-decoration: none;
        color: hotpink;
         font-size: small;
    }


     

    @media screen and  (max-width: 768px) {
    .header {
    margin: 1em 2em;
}

    .header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
      
    }

        
    } 
</style>