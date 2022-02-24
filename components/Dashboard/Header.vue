<template>
       <div class="header">
        <div class="header-logo">
            <p>huntr</p>
        </div>
        <div class="header-buttons">
            <button>Log out</button>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 1em 2em;
}
    .header-logo {
        display: flex;
        justify-content: center;
        align-items: center;
      
    }

    .header-logo p {
        font-size: 36px;
        font-weight: bold;
        color:rgb(242,97,180);
        font-family: sans-serif;
       
    }
    
    .header-buttons button {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        border: none;
        background-color: rgb(242,97,180);
        padding: 0 10px;
        border-radius: 4px;
        position: relative;
        right: 55px;
        height: 50px;
        top: 40px;
    }

</style>