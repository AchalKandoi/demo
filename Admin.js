function checkSecretKey(number){
    if (number == numberEntered) {
        document.querySelector('.Tab').classList.add('show');
        document.querySelector('.Tab').classList.remove('hidden');
        document.querySelector('.modal').classList.add('hidden');
        document.querySelector('.admin-image-container').classList.add('hidden');

    }
    else{
        document.querySelector('.wrong').classList.add("show")
    }
}

let numberEntered;

document.querySelector(".key").addEventListener('change', (event)=>{
    numberEntered = event.target.value;
})

document.querySelector(".login").addEventListener('click',()=>{
    checkSecretKey(12345)
});