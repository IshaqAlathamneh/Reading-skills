var z= confirm("1- quran / 2- books / 3- magazines")

var i = prompt("What you like to read","quran")



while(!(i=="quran" || i=="books" || i=="magazines")){

i=prompt("Enter a correct value")
}
var x= prompt("how many weekly you read  " + i)

var image = " ";


//for(var j = 0; j < x; j++){
    
  //  if(i == "quran"  ){
    //    image = image + '<img src"">'
      //  console.log(image)
    //}else if(i =="books"){
      //  image = image + '<img src""> '
        //console.log(image)
    //}else if(i == "magazines"){

      //  image = image + '<img src""> '
        //console.log(image)
    //}
    
    
    for(var j = 0; j < x; j++){
       if(i =='quran'){
            image = image + '<img src="s.jfif">'
            console.log(image)
            
        }else if(i =="books"){
            image = image +'<img src="a.jfif">'
      
        }else if(i =="magazines"){
            image = image +'<img src="b.jpg">' 
    }
    
    
  }

document.write(image);