
var index = 1
changeImage = function (){
    var imgs = ['./assets/img/banner.png', './assets/img/banner2.png']
    document.getElementById('img').src = imgs[index]
    index ++

    if(index === imgs.length){
        index = 0
    }
}

setInterval(changeImage, 10000)