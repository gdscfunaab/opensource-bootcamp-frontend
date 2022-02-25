<template>
<div class="search-box">
    <input type="text" name="Job Title or Keyboard" placeholder="Job Title or Keyboard" id="">
    <button>Search</button>
    </div>
    
</template>
<style scoped>
    .search-box{
       font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        padding: 100px 20px ;
        margin: 0px;
        background-color: rgb(255, 255, 255);
    }
    input{
        border: 1px solid #fff;
        width: 30%;
        padding: 10px 10px 10px 10px;
        background-color: #fff;
        outline: none;
       
    }
    input::placeholder{
        padding: 2px;
    
    }
    button{
        padding: 13px 10px;
        background-color: rgba(236, 8, 149, 0.664);
        border: 0px;
        margin-left: -2px;
        color: rgba(255, 255, 255, 0.959);
    }
</style>