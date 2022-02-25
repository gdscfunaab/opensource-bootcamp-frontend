<template>
    <div class="over">
        <div class="job">
            <h1>Latest Job</h1>
        </div>
        <div class="details-comp">
            <div class="first-grid">
                <div class="descrip">
                    <h2>Front End Developer (Vue.js & Nuxt.js) - Remote (Europe)</h2>
                </div>
                <div class="descrip-remote">
                    <p>Remote</p>
                </div>
                <div class="time">
                    <p>2 hours ago</p>
                </div>
                <div class="logo">
                    <img src="../../assets/icons/Group 25.png" alt="company">
                </div>
                <div class="company_name">
                    <p>Armada Media Ltd.</p>
                </div>
                <div class="descrip-apply">
                    <button type="submit">Apply Now</button>
                </div>
            </div>
            <div class="second-grid">
                <div class="dev">
                    <h2>Front-End Web Developer / Software Engineer 2</h2>
                </div>
                <div class="location">
                    <p>Eugene, OR, USA, Remote Allowed</p>
                </div>
                <div class="time-posted">
                    <p>22 hours ago</p>
                </div>
                <div class="logo2">
                    <img src="../../assets/icons/Group 23.png" alt="company2">
                </div>
                <div class="company_name1">
                    <p>Influents Innovations</p>
                </div>
                <div class="descrip-apply1">
                    <button type="submit">Apply Now</button>
                </div>
            </div>
            <div class="third-grid">
                <div class="descrip2">
                    <h2>Front End Engineer (Vue, TypeScript)</h2>
                </div>
                <div class="descrip-remote2">
                    <p>London, UK, Remote</p>
                </div>
                <div class="time2">
                    <p>1 day ago</p>
                </div>
                <div class="logo3">
                    <img src="../../assets/icons/Group 24.png" alt="company">
                </div>
                <div class="company_name2">
                    <p>Titanbay</p>
                </div>
                <div class="descrip-apply2">
                    <button type="submit">Apply Now</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.over{
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto auto;
    border: none;
    height:500px;
    width:100;
    }
    h1{
        font-family:monospace;
        font-size: 30px;
        padding: 30px 50px;
      }
    .job{
        border: none;
        width: 200px;
        height: 70px;
        font-family: monospace;
        font-size: 15px;
        margin: 0 0 20px 0;
        padding: 0;
   
    }
    .details-comp{
        display: grid;
        grid-template-columns:auto auto auto;
        border: none;
        height: 400px;
        width: 72rem;
        margin-top: 100px;
    }
    .first-grid{
    display: grid;
    grid-template-rows: auto auto auto auto auto auto;
    border:none;
    width:300px;
    height: 370px;
    padding: 10px;
    box-shadow: 1px 1.5px 2px 2px rgb(226, 225, 235) ;
    }
    .second-grid{
    display: grid;
    grid-template-rows: auto auto auto auto auto auto;
    border:none;
    width:300px;
    height: 370px;
    padding: 10px;
    box-shadow: 1px 3px 6px 2px rgb(226, 225, 235) ;

    }
    .third-grid{
    display: grid;
    grid-template-rows: auto auto auto auto auto auto;
    border:none;
    width:300px;
    height: 370px;
    padding: 10px;
    box-shadow: 1px 1.5px 2px 2px rgb(226, 225, 235) ;
    }
    .descrip,.dev,.descrip2{
    font-family: monospace;
    }
    .descrip-remote,.location,.descrip-remote2{
    font-family: monospace;
    font-size: 20px;
    color: rgb(194, 192, 192);
    height: 18px;
    }
    .location{
    height: 40px;
    }
    .time,.time-posted,.time2{
    font-family: monospace;
    color: hotpink;
    font-weight: bold;
    font-size: 20px;
    word-spacing: -8px;
    }
    .logo,.logo2,.logo3{
    height: 5px;
    margin-top: 18px;
    }
    .company_name,.company_name1,.company_name2{
    font-family: monospace;
    font-size:20px;
    word-spacing: -4px;
    }
    button{
    width: 300px;
    height:45px;
    font-family: monospace;
    font-size: 15px;
    color:white;
    background-color: rgb(13, 187, 7);
    border: none;
    box-shadow: 1px 1.5px 2px 2px rgb(247, 244, 244) ;
    }
   </style>