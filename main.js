// Selectors
const form = document.querySelector('form');
const thankYou = document.querySelector('#thank-you');
const ratings = document.querySelectorAll('.response-btns button');
const rating = document.querySelector('.rating span');


// Event Listeners

// Update the rating in the thank you card 
ratings.forEach((ratingValue)=>{
    ratingValue.addEventListener('click',(e)=>{
        e.preventDefault();
        rating.innerText = ratingValue.value;
    });
});

// Showing the thank you card when submit button is pressed
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    thankYou.classList.remove('hidden');
    thankYou.classList.add('pop');
    form.classList.add('hidden');
});

