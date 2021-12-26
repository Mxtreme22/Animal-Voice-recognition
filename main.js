function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/At-6lMjEs/model.json", modelReady);
   
    
}

cat = 0;
dog = 0;
wolf = 0;
bird = 0;


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;

document.getElementById("result_label").innerHTML = 'I can hear - '+
results[0].label;
document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_r+")";

cat= "cute-cat.gif";
dog = "cute-dog.png";
wolf= "Cute-Wolf.png";
bird ="download.png";

if (results[0].label == "cat") {
   document.getElementById("ear").src=cat;
  

} else if (results[0].label =="dog") {
 
    document.getElementById("ear").src=dog;
  
} else if (results[0].label =="wolf") {
    document.getElementById("ear").src=wolf;
   
    }else{
        
        document.getElementById("ear").src=bird;
    }
    }
}