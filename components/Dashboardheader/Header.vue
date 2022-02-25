<template>
    <div class="header">
        <div class="header-logo">
            <p><nuxt-link to="/">huntr</nuxt-link></p>
        </div>
        <div class="header-buttons">
            <button><nuxt-link to="/login">Log out</nuxt-link></button>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 1em 2em 5em 2em;
}
    .header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
      
    }

    .header-logo a {
        font-size: 27px;
        font-weight: bold;
        color:hotpink;
        font-family: sans-serif;
        
       
    }
    
    .header-buttons button {
        font-size: 14px;
        font-weight: bold;
       
        border: none;
        background-color: hotpink;
        padding: 0 10px;
        border-radius: 4px;
        position: relative;
        right: 55px;
        height: 50px;
     
    }
    a{
        text-decoration: none;
         color: #fff;
         padding: 10px;
    }

</style>