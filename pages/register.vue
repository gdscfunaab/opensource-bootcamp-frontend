<template>
<AuthRegisterForm/>
    <!-- <div class="form-image">
        <FormimageForm/>
        <div>
            <h1>Need a Job? Register</h1>
        </div>
       <div class="form"> <form>
            <input type="text" placeholder="Your name"><br>
            <input type="text" placeholder="Email address"><br>
            <input type="text" placeholder="Password">
            <br>
            <button type="submit">Register</button>
        </form></div>
        <div class="register"> 
            <h3>Have an account?</h3>
            <a href="">Log in</a>
        </div>
        <div class="image-form">
        <FormimageImage/>
        </div>
    </div> -->
</template>
<script>
export default {
     middleware: ["auth"],
}
</script>
<style scoped>
.form{position: relative;
left: 55%;
top: 100px;
}

input[type=text], select{
width: 32%;
height: 50px;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px rgb(0, 0, 0);
border-radius: 7px;
box-sizing: border-box;
background-color: rgb(248,248,248);
}
button[type=submit], select{
    width: 32%;
    height: 50px;
    background-color: black;
    border-radius: 7px;
    color: white;
}
h1{
    position: relative;
    left: 62%;
    top: 100px;
    font-size: 22px;
}
h3{
    position: relative;
    left: 62%;
    top: 120px;
    color: rgb(119, 117, 114);
}

a{
    position: relative;
    left: 74%;
    top: 80px;
    text-decoration: none;
}
</style>