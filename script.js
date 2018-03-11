// initliaze ratings

const ratings={
    sony:4.7,
    samsung:3.4,
    visio:2.3,
    panasonic:3.6,
    philips:1.5,
}

//total stars
const starTotal=5;

var getRatings=()=>{
    for(let rating in ratings){
        //Get percentage;
        let starpercentage= (ratings[rating]/5)*100;

        // Round to nearest 10;
        let starpercentagerounded= `${Math.round(starpercentage/10) *10 }%`;

        //set width of stars innere to percentage;

        document.querySelector(`.${rating} .stars-inner`).style.width=starpercentagerounded;
        
        
        document.querySelector(`.${rating} .number-rating`).innerHTML=ratings[rating];

    }
}

document.addEventListener("DOMContentLoaded",getRatings());

// Form elements
const productSelect=document.querySelector('#product-select')

const productRating=document.querySelector('#rating-control')

// initialize products
let product;

//Product Select change
productSelect.addEventListener('change',(e)=>{
    let product=e.target.value;
    console.log(product);

    //Enable rating control

    productRating.disabled=false;

    productRating.value=ratings[product];

    //rating control change;

    productRating.addEventListener('blur',(e)=>{
        rating=e.target.value;
        //check for maximum value;
        if(rating>5){
            alert("please rate 1-5");
            return;
        }
        //change the rating;

        ratings[product]=rating;

        getRatings();

        productRating.disabled=true;
    });
})

