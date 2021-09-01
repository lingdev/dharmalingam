var http = require('http');
const port = 4000;

http.createServer(function (req, res) {
    const persons = [{ "Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
    {
        "Gender": "Male", "HeightCm": 161, "WeightKg":
            85
    }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, {
        "Gender": "Female", "HeightCm": 166,
        "WeightKg": 62
    }, { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 }, {
        "Gender": "Female",
        "HeightCm": 167, "WeightKg": 82
    }];
    var owpcount =0 ,uwpcount=0,nwpcount=0;
    
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1  style="color:#CC74BC">Human BMI Calculator</h1>')
        res.write(`<table style="width:100%"><tr style="border:2px solid">
        <th>Gender</th>
        <th>Height</th>
        <th>Weight</th>
        <th>Result</th>
        <th>Health Risk</th>
        <th>BMI Category</th>
      </tr></table>`)
        persons.map((e) => {
            
            var result = (e.WeightKg / (e.HeightCm * e.HeightCm)) * 10000;
            if(result>25){
                owpcount+=1;
            }
            if(result<18.4){
                uwpcount+=1;
            }
            if(result > 18.5 && result < 24.9) {
                nwpcount+=1;
            }

            res.write(`<style>
            table, th, td {
              border:1px solid gray;
              width: 300px;
              height:40px;
              text-align:'center';
            }
            
            </style>`)
       
            res.write(`<table style="width:100%"><tr  style="text-align:center"><td>${e.Gender}</td>
            <td>${e.HeightCm} </td>
            <td>${e.WeightKg} </td>
            <td>${result} </td>
            <td> ${result < 18.4 ? "Malnutrition risk</td><td>Under Weight"
                    : (result > 18.5 && result < 24.9) ? "low risk</td><td>Normal Weight"
                        : (result > 25 && result < 29.9) ? "Enhanced risk</td><td style='color:red'>Over Weight"
                            : (result > 30 && result < 34.9) ? "Medium risk</td><td style='color:red'>Moderately obese"
                                : (result > 35 && result < 39.9) ?"High risk</td><td style='color:red'> severely obese "
                                    : (result > 40) ? "very risk</td><td style='color:red'>Very severely obese"
                                     : "empty"}</td></tr></table>`)

        }) ;  
        res.write('<h1  style="color:gray"> The Under weight Person Are :<span  style="color:Red"> '+uwpcount+'</span></h1>')        
        res.write('<h1  style="color:gray"> The Normal weight Person Are :<span  style="color:Red"> '+nwpcount+'</span></h1>')        
        res.write('<h1  style="color:gray"> The Over weight Person Are :<span  style="color:Red"> '+owpcount+'</span></h1>')

    }

}).listen(port);
