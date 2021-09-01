const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){

    const persons=[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, 
    { "Gender": "Male", "HeightCm": 161, "WeightKg":
    85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
    "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
    "HeightCm": 167, "WeightKg": 82} ];
    var allPerson=[];
    var overWeightPerson=0;
    var owPerson=[];
    
    // req_name = req.body.Gender;
  
    persons.map((person)=>{
        
    
        var result = (person.WeightKg / (person.HeightCm*person.HeightCm))*10000;
        // console.log(result,"iiiii");
        if(result<18.4)
        {
            console.log("Malnutrition risk",person.Gender);
            res.send("Gender: " + 
            person.Gender+ "Health risk:Malnutrition risk"+","+"HeightCm:"+person.HeightCm+ "WeightKg:"+person.WeightKg+"BMI Category:  under Weight"+"<br>");
    
        }
         if(result>18.5 && result<24.9)
        {
            console.log("low risk ",person.Gender);

            var  ddd= person.Gender+","+" Health risk: low risk "+"WeightKg:"+person.WeightKg +","+"HeightCm:"+person.HeightCm+"esult="+result+"BMI Category:  Normal Weight"+"<br>";
            allPerson.push(ddd)
            
    
        }
        else if(result>25 && result<29.9)
        {
            var  ddd= "Gender: "+person.Gender+","+" Health risk: Enhanced risk "+"WeightKg:"+person.WeightKg +","+"HeightCm:"+person.HeightCm+"BMI Result="+result+"BMI Category:  over Weight"+"<br>";
            allPerson.push(ddd)
    
        }
        else if(result>30 && result<34.9)
        {
    
            var  ddd= "Gender:"+person.Gender+","+" Health risk: Medium risk "+"WeightKg:"+person.WeightKg +","+"HeightCm:"+person.HeightCm+"BMI Result="+result+"BMI Category: Moderately obese"+"<br>";
            allPerson.push(ddd)
            overWeightPerson+=1;
            var ow=person.Gender+""+" overweightPerson"
            owPerson.push(ow);
            
    
        }
      
        else if(result>35 && result<39.9)
        {
        
            var  ddd= "Gender:"+person.Gender +","+" Health risk: High risk "+"WeightKg:"+person.WeightKg +","+"HeightCm:"+person.HeightCm+"BMI Result="+result+"BMI Category:Severely obese"+"<br>";
            allPerson.push(ddd)
            overWeightPerson+=1;
            owPerson.push(person);
    
    
        }
        else if(result>40)
        {
           
            var  ddd= "Gender:"+person.Gender +","+" Health risk: very risk "+"WeightKg:"+person.WeightKg +","+"HeightCm:"+person.HeightCm+"result="+result+"BMI Category:Veryseverely obese"+"<br>";
            allPerson.push(ddd)
            overWeightPerson+=1;
            owPerson.push(person);
    
        }
    
    
    }

    )

    console.log(overWeightPerson,"overWeightPerson");
    res.send(
    "<h1>EMI Calculator</h1> <br>"+allPerson+"<br> <h1>Over Weight Person </h1><br>"+owPerson+"<br>");
    console.log(owPerson,"ooo");
   
        
    
});
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});
