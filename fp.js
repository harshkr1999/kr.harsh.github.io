<script>
function shuffle()
{
  var images_array=new Array("movies/1.jpg","movies/2.jpg","movies/3.jpg","movies/4.jpg","movies/5.jpg","movies/6.jpg","movies/7.jpg","movies/8.jpg","movies/9.jpg");
  var ctr=images_array.length,counter,index,i,j;
  var temp=new Array(ctr);
  for(i=0;i<ctr;i++)
  {
  	index=Math.floor(Math.random()*ctr);
  	counter=0;
    for(j=0;j<i;j++)
    {
      if(temp[j]==index)
      {
        counter++;
      }
    }
    if(counter>0)
    {
      i--;
    }
    else
    {
      temp[i]=index;
      console.log(temp[i]);
    }
    for(i=0;i<ctr;i++)
    {
  	 document.getElementById("f"+(i+1)).src=images_array[temp[i]];
  	}
  }
}

</script>