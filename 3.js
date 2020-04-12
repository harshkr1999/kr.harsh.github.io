function movies() 
{
     var theImages = [{
        src: "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
        width: "240",
        height: "160"
    }, {
        src: "https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg",
        width: "320",
        height: "195"
    }, {
        src: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=inside|900:auto&output-quality=90",
        width: "500",
        height: "343"
    },{
        src: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://www.reeldeals.com/Images/HomeImages/26565.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://www.joblo.com/assets/images/joblo/posters/2019/08/joker-poster-main3.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://www.midlandpaper.com/wp-content/uploads/2017/08/star-wars-poster-682x1024.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}
