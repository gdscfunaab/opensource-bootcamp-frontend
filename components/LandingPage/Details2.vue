<template>
    <div class="sections">
        <div class="section-image">
            <div class="brooke">
                <img src="../../assets/images/brooke.png" alt="groups" >
            </div>
        </div>
        <div class="section-info">
            <div class="section-heading">
                <h1>We will help you get your dream job easy</h1>
            </div>
            <div class="heading-paragraph">
                <p>we connect tech talent with the right job and have helped alot of people
                    (and counting) gain access to the tech jobs across the World. We Access 
                    We help techies assess their skill-level and talent based on their ability
                    to solve problems,learning speed and strenght of character.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
}
.sections {
    display: grid;
    grid-template-columns: auto auto;
    border: none;
    background-color: white;
    width: 100%;
    height: 650px;
    margin: 0 auto;
    /* box-shadow: 1px 1.5px 2px 2px rgb(247, 244, 244); */
}
    .section-image{
        width: 30rem;
        border:none;
    }
        .brooke {
            border: 2px solid hotpink;
            width: 27rem;
            margin-top: 130px;
            margin-left: 10px;
        }
            img{
                transform: translate(10px, 12px);
                width:450px;
                height:310px;
            }
    .section-info{
        display: grid;
        grid-template-rows: auto auto;
        width:50rem;
        border: none;
    }
        .section-heading{
            border: none;
            margin-top: 150px;
            margin-left: 100px;
            height: 100px;
            margin-right: 200px;
            font-family: monospace;
            font-size: 20px;
            font-weight:bolder;
        }
        .heading-paragraph{
            border:none;
            margin-right:100px;
            margin-left: 100px;
            margin-bottom:170px;
            font-family: sans-serif;
            font-size: 18px;
            color:rgb(175, 174, 174);
            word-spacing: 2px;
            line-height: 1.5;
        }
      

</style>