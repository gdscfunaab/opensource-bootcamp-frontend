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
            <button>Login</button>
            <button>Sign Up</button>
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
      
    }

    .header-logo p {
        font-size: 20px;
        font-weight: bold;
       
    }

    .header-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
       
    }

    .header-links a {
        font-size: 14px;
        font-weight: bold;
        
    }

    .header-buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }

    .header-buttons button {
        font-size: 14px;
        font-weight: bold;
        color: #000;
        border: none;
        background-color: #fff;
        padding: 0 10px;
        border-radius: 5px;
    }

    .header-logo p {
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }

    .header-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
     
    }

   
    .header-buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
       
    }

    .header-buttons button {
        font-size: 14px;
        font-weight: bold;
        color: #000;
        border: none;
        background-color: #fff;
        padding: 0 10px;
        border-radius: 5px;
    }

    @media screen and  (min-width: 768px) {
        .header {
            margin: 2em 0;
        }
        .header-buttons {
            display: flex;
            justify-content: space-around;
            align-items: center;
           
        }
        .header-buttons button {
            font-size: 14px;
            font-weight: bold;
            color: #000;
            border: none;
            background-color: #fff;
            padding: 0 10px;
            border-radius: 5px;
        }
        
    }
</style>