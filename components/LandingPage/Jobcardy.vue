<template>
    <div class="over">
        <div class="job">
            <h1>Latest Job</h1>
        </div>
        <div class="armanda">
            <h2>Front End Developer (Vue.js & Nuxt.js) - Remote (Europe)</h2>
            <p class="first">Remote</p>
            <div class="time">
                <p class="sec">2 hours ago</p>
            </div>
            <div class="logo">
                <img src="../../assets/icons/Group 25.png" alt="company">
            </div>
            <div class="company_name">
                <p class="arm">Armada Media Ltd.</p>
            </div>
            <button type="submit">Apply Now</button>
        </div>
    </div>
    
</template>
<style scoped>
.over{
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto auto;
}
    h1{
        font-family:monospace;
        font-size: 30px;
        padding: 30px 50px;
    }
    .armanda{
    width: 300px;
    height:400px;
    padding: 19px;
    margin: 0 auto;
    background-color: white;
    color: black;
    box-shadow: 1px 1.5px 2px 2px rgb(247, 244, 244) ;
    }
h2 {
font-family: monospace;
font-size: 18px;
line-height: 1.5;
}
.first {
    position: relative;
    top:50px;
    font-family: monospace;
    font-size: 18px;
    color: rgb(194, 192, 192);
    line-height: 4;
}
.sec {
    position: relative;
    top:5px;
    font-family: monospace;
    color: hotpink;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1px;
    word-spacing: -8px;
}
.arm {
    font-family: monospace;
    word-spacing: -4px;
    font-size:18px;
    position: relative;
    top: 10px;
}
button {
    display: flex;
    justify-content: center;
    background-color: rgb(5, 139, 1);
    padding: 15px;
    width: 295px;
    font-family: monospace;
    font-size: 15px;
    color:white;
    border: none;
}
</style>