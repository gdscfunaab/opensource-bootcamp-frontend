<template>
    <div class="header">
        <div class="header-logo">
            <p>Huntr</p>
        </div>
        <div class="header-links">
            <nuxt-link to="/">Get Jobs</nuxt-link>
            <nuxt-link to="/">Post Jobs</nuxt-link>
        </div>
        <div class="header-buttons">
            <button class="login">Login</button>
            <button class="signup">Sign Up</button>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 2em 4em;
}

    .header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
      
    }

    .header-logo p {
        font-size: 1.4rem;
        font-weight: bold;
        color: rgb(241, 62, 173);
       
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
        color: rgb(241, 62, 173);
    }
    .signup{
        background-color: rgb(241, 62, 173);
        color: white;
    }


     

    @media screen and  (min-width: 768px) {
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