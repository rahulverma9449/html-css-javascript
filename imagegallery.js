window.addEventListener('scroll', function(){
    let scrollprogress = document.getElementById("scrolled");
    var scrollbar = document.documentElement;
    var scrollbartop = scrollbar.scrollTop || document.body.scrollTop;
    var scrollbardown = scrollbar.scrollHeight || document.body.scrollHeight;
    var scrollPercentage = scrollbartop / (scrollbardown - scrollbar.clientHeight) * 100;
    let scrollValue = Math.round(scrollPercentage);
     scrollprogress.innerText = scrollValue +  " % ";
    console.log(scrollPercentage);
})





// let scrollPercentage = () => {
//     let scrollprogress = document.getElementById("button");
//     let progressValue = document.getElementById("button")
//     let pos = document.documentElement.scrollTop;
//     let calcHeight = document.documentElement.
//     scrollHeight - document.documentElement.clientHeight;
//     let scrollValue = Math.round(pos * 100 / calcHeight);


//     scrollprogress.style.background ='conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)';

// }