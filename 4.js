function fp() 
{
     var theImages = [{
        src: "https://en.as.com/en/imagenes/2019/09/24/football/1569310945_447431_noticia_normal.jpg",
        width: "240",
        height: "160"
    }, {
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Richest-People-Bill-Gates.webp",
        width: "320",
        height: "195"
    }, {
        src: "https://images.newscientist.com/wp-content/uploads/2019/06/18142824/einstein.jpg?width=1200",
        width: "500",
        height: "343"
    },{
        src: "https://i.ytimg.com/vi/cDxi6ozDwhc/maxresdefault.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Richest-People-Jeff-Bezos.webp",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Richest-People-Warren-Buffett.webp",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Richest-People-Mark-Zuckerberg.webp",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Richest-People-Larry-Page.webp",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2016/10/Richest-People-Sergey-Brin.webp",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2017/08/Richest-People-in-the-World-Mukesh-Ambani.webp",
        width: "500",
        height: "343"
    },{
        src: "https://cdn.wealthygorilla.com/wp-content/uploads/2017/08/Richest-People-in-the-World-Jack-Ma.webp",
        width: "500",
        height: "343"
    },{
        src: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/15DEE/production/_111028598_tom-cruise-getty.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2019/1/23/65101ffc35c44c83b421a2b3ad88ec56_18.jpg",
        width: "500",
        height: "343"
    },{
        src: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/D9EF/production/_108319755_d3de1a8a-652f-4de5-b958-b9d7b7d0fb6b.jpg",
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
