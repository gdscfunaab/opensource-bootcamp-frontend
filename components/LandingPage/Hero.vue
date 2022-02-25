<template>
    <div class="master">
        <div class="Hero-img">
            <img src="../../assets/images/Mask Group 3.png" />
        </div>
        <div class="details">
            <h2 class="getstarted">GET STARTED</h2>
            <h2 class="dreamjob"> Find Your Dream Job</h2>
            <p>We will boost your skills and profile,
                provide you with personalised career
                guidance  and match you with the right 
                opportunities, so that you can
                be the Best and the Brightest.
            </p>
        </div>
        
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
}
.Hero-img{
    max-width: 50vmax;
    max-height: 50%;

}
img{
    
    max-height: 500px ;
}
div.master{
display: flex;
flex-direction: row-reverse;
background-image: url('../../assets/images/Mask Group 2.png');
background-repeat: no-repeat;
}
h2.getstarted {
    color: rgb(241, 62, 173);
    margin-top: 15rem;

}
.dreamjob{
    font-size: 3rem;
}
h2 {
    font-family: sans-serif;
    font-size: 1.5rem;
    padding: 0 0 1.5rem 0;
    
}

p{
    font-size: 1.25em; 
    max-width: 70%;
    

}
div.details{
    padding: 1rem 5rem;
    max-width: 50vmax;
}
@media only screen and (max-width: 770px){
    .dreamjob{
        font-size: 2rem;
    }
    div.details{
        max-width: 100%;
        padding: 0.2rem 1rem;
        align-items: center;

    }
    p{
        font-size: 0.88em;
    }
    div.master{
    display: flex;
    flex-direction: column;
    }
    .Hero-img{
    max-width: 100%;
    padding-left: 5rem;
    }
    img{
        height: 25rem;
        margin: 0;
    }
    h2.getstarted{
        margin-top: 1.5rem;
    }
    

}
*{
    font-family: sans-serif;
}
</style>>

</style>