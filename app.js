var isDark = false;
document.querySelector('#checkbox').addEventListener('click', function(){
    //console.log('cliquei');
    var itemsOne = document.querySelectorAll('.item-one');
    var itemsTwo = document.querySelectorAll('.item-two');
        
    if(!isDark){
        document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        document.querySelector('.header').classList.toggle('white-theme');
        itemsOne.forEach(item =>{
            item.classList.toggle('white-card');
        })
        itemsTwo.forEach(item =>{
            item.classList.toggle('white-card');
        })
        document.getElementById('section-two-title').style.color = 'hsl(228, 12%, 44%)';
    }else{
        document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        document.querySelector('.header').classList.toggle('white-theme');
        itemsOne.forEach(item =>{
            item.classList.toggle('white-card');
        })
        itemsTwo.forEach(item =>{
            item.classList.toggle('white-card');
        })
        document.getElementById('section-two-title').style.color = 'white';
    }
    isDark = !isDark;
});