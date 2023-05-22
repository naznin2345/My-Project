const express = require("express");
const app = express();
var pdf = require("html-pdf");
var options = {
    format: "A4",
    
};




app.use(express.json());
app.use(express.urlencoded());

const html = (Data) => {
const totalTable = [];
for (let i = 0; i < Math.ceil(Data.length /18); i++) {
totalTable.push(i);
}




return `
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>DemoPdf</title>
<style>
table {
    width: 99%;
    
    position: relative;
    overflow: hidden;
    display: block;
   border-width:1px;
}
body {
    Margin: 0 !important;
    padding: 10px;
    background-color: #FFF;
    font-family: Angsana New;
}
td {
    
    text-align: center;
    vertical-align: middle;
    overflow: auto;
    padding: 2px;

    font-size:8px;
}

th{
    font-size:7px;
}

table th,td{
    border-width:0.1em solid black;
   
  }
h1 {
    
    font-family: Tahoma;
}
h2 {
    font-family: Tahoma;
}
th {
    font-family: Tahoma;
}

* {
    box-sizing: border-box;
  }
  
  .column1 {
    float: left;
    width:20%;
    height:10%;
   
  }
  .column2 {
    float:left;
    width: 80%;
    height:10%;
  }
  .column3 {
    float: left;
    width:40%;
    height:15%;
   
  }
  .column4 {
    float:left;
    width: 60%;
    height:15%;
  }

  
  /* Clearfix (clear floats) */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .letter{
    display:inline-block;
    text-align:center;font-family:serif;font-size: 15px;color: black;
    letter-spacing: Normal;
  }
  .letter::first-letter{
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    font-family:serif;color: black;
    letter-spacing: 3px;
  }

  .letter2{
    display:inline-block;
    text-align:center;font-family:serif;font-size:10px;color: black;
    letter-spacing: Normal;
  }
  .letter2::first-letter{
    font-size: 1rem;
    font-weight: bold;
    color: black;
    font-family:serif;color: black;
    letter-spacing:1px;
  }



  .horizontal-line {
    display: inline-block;
    border-top: 1px solid gray;
    line-height: 0.9;
   
  }
  .hr1{
    width: 160px;line-height: 0.9;
  }
  .hr2{
    width: 170px;line-height: 0.9;
   
  }
  .hr3{
    width: 215px;line-height: 0.9;
   
  }
</style>

</head>
<body>

<div class="row">
  <div class="column1">
  <p>
  &nbsp &nbsp &nbsp &nbsp &nbsp<img src="https://upload.wikimedia.org/wikipedia/en/0/02/Leading_University_Logo.png" alt=" Logo" alt="Snow" style="width:70px;height:80px">
  
  </p>
  

    
    </div>
    
  <div class="column2">
  
  <caption>
  <p><span class="letter">LEADING </span>
  <span  class="letter">UNIVERSITY</span></p>
  <p style="text-align:left;font-weight: bold;font-size:11px;letter-spacing: 2px;">Office of the Controller of Examinations</p> 
  
  <p style="text-align:left;font-weight: bold;font-size:12px;line-height:5px;letter-spacing:normal;">Application for Makeup Examinations</p>
  </caption>
  
</div>
 </div>




 <div style="padding-top:40px;">
 <div class="row">
 <div class="column3">
 <form> 
 <div class="form-example">
    <label style="font-size:9px;padding-right:16px;">Student ID: </label><input  style="border:1px gray dotted;width:150px;">
    <label style="font-size:9px;padding-right:3px;"> Semester Year:</label><input type="text" style="border:1px gray dotted;width:150px;height:30px;font-size:7px;font-weight:bold;"value="Spring/Summar/Fall/20">
    <label style="font-size:9px;padding-right:8px;">Course Code: </label><input  style="border:1px gray dotted;width:150px;">
    <label style="font-size:9px;padding-right:5px;">Date of Examination Scheduled:</label><input  style="border:1px gray dotted;width:70px;">
    <label style="font-size:9px;padding-right:3px;">Contact No. of Student:</label><input  style="border:1px gray dotted;width:110px;">
   
    </div>

</form>
 
 </div>
 
 
 <div class="column4">
 
 <form> 
 <div class="form-example">
    <label style="font-size:9px;padding-right:4px;">Student Name: </label><input  style="border:1px gray dotted;width:260px;">
    <label style="font-size:9px;padding-right:18px;"> Department:</label><input type="text" style="border:1px gray dotted;font-size:7px;width:260px;height:30px;"value="BuA/CSE/English/Law/EEE/L.Studies/Architecture/Civil/p.Health/THM ">
    <label style="font-size:9px;padding-right:15px;">Course Title: </label><input  style="border:1px gray dotted;width:260px;">
    <label style="font-size:9px;padding-right:2px;">Course Teacher:</label><input  style="border:1px gray dotted;width:260px;">
    <p style="font-size:9px;">Examination:&nbsp<input  style="border:1px gray solid;width:8px;height:10px;">
Midterm&nbsp<input  style="border:1px gray solid;width:8px;height:10px;">&nbspSemester Final</p>

   
    </div>

</form>
 
 
 </div>
 </div>
</div>





</br>
<div>
<table align="left">
<tr>
<td style="text-align:left;"><hr class="horizontal-line hr1"></td>
<td style="text-align:right;"><hr class="horizontal-line hr2"></td>
</tr>
</table> 


<p style="font-family: Monaco;text-align:left;font-size: 6px;text-transform:capitalize;letter-spacing:1px;line-height: 0.9;">
<b>Signature of the Student with Date&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp 3.Clearence of Office of the Controller 
</b>
</p>
<p style="font-family: Monaco;text-align:left;font-size: 6px;text-transform:capitalize;letter-spacing:1px;text-align:right;line-height: 0.9;"><b>of Exams Signature with Date:&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp</p>
 </div>   
 
 </br></br>
 
 
 
 <div>
 <table align="left" >
 <tr>
 <td style="text-align:left; style:"padding:1px;""><hr class="horizontal-line hr1"></td>
 </tr>
 </table> 
 <p style="font-family: Monaco;text-align:left;font-size: 6px;text-transform:capitalize;letter-spacing:1px;line-height: 0.9;">
<b>Signature of the Student with Date &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbspDate and Time of Make-up Examination</p>
<p style="font-family: Monaco;text-align:right;font-size: 6px;text-transform:capitalize;letter-spacing:1px;line-height: 0.9;">(Course Teacher will fill This)&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp
</p>
<div style="padding-left: 400px;"><input align="left" style="border:1px gray dotted;width:180px;"></div>

 </div> 




 <div style="padding-top:40px;">
<table align="left">
<tr>
<td style="text-align:left;"><hr class="horizontal-line hr1"></td>
<td style="text-align:right;"><hr class="horizontal-line hr2"></td>
</tr>
</table> 


<p style="font-family: Monaco;text-align:left;font-size: 6px;text-transform:capitalize;letter-spacing:1px;line-height: 0.9;">
<b>&nbspSignature of head of Department&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp3.Clearence of Finance and Accounts
</b>
</p>
<p style="font-family: Monaco;text-align:left;font-size: 6px;text-transform:capitalize;letter-spacing:1px;text-align:left;line-height: 0.9;">&nbspDate:
&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp<b>Date:</p>
 </div>   

 <div style="padding-top:2px;padding-bottom:2px;">
<p style="font-family: Monaco;text-align:left;font-size: 8px;text-transform:capitalize;text-align:left;line-height: 0.9;">

Fees of Make-up Examination:  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbspN.B:Student will not allowed to sit for Mid Term and Semester Final 
</p>
<p style="font-family: Monaco;text-align:left;font-size: 8px;text-align:left;line-height: 0.9;">
i)Mid-term Exam:2000TK.ii)Final Exam:3000TK.&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp Make-up examination for the same Course.

</p>
</div>

 <hr>






 <div class="row">
  <div class="column1">
  <p>
  &nbsp &nbsp &nbsp &nbsp &nbsp<img src="https://upload.wikimedia.org/wikipedia/en/0/02/Leading_University_Logo.png" alt=" Logo" alt="Snow" style="width:30px;height:50px">
  
  </p>
 </div>
    
  <div class="column2">
  
  <caption>
  <p><span class="letter2">LEADING </span>
  <span class="letter2">UNIVERSITY</span></p>
  
  <p style="text-align:left;font-weight: bold;font-size:10px;line-height:5px;letter-spacing:normal;">Admit Card for Makeup Examinations</p>
  </caption>
  
</div>
 </div>










 <div style="padding-top:5px;">


<form>
  <div class="form-example">
    <label style="font-size:9px;">Student ID:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp</label>
    <input  style="border:1px gray dotted;"> &nbsp<label style="font-size:9px;">Date and Time of Exam:&nbsp&nbsp</label><input  style="border:1px gray dotted;width:110px;">
  </div>
  <div class="form-example">
    <label style="font-size:9px;">Student Name:&nbsp&nbsp&nbsp</label>
    <input style="border:1px gray dotted;"><label style="font-size:9px;">&nbspCourse Teacher:&nbsp<input  style="border:1px gray dotted;width:160px;">
  </div>
  <div class="forme">
    <label style="font-size:9px;">Course Code:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>
    <input  style="border:1px gray dotted;width:100px"><label style="font-size:9px;">&nbspCourse Title:&nbsp</label><input  style="border:1px gray dotted;width:287px">
  </div>
  
</form>

<p style="font-size:9px;">Semester-Year:&nbsp&nbsp&nbsp&nbsp&nbspSpring/Summar/Fall/20 &nbsp&nbsp&nbsp&nbspExamination:&nbsp<input  style="border:1px gray solid;width:8px;height:10px;">
Midterm&nbsp<input  style="border:1px gray solid;width:8px;height:10px;">&nbspSemester Final</p>

</div>


<div style="padding-top:20px;">
<table align="right">
<tr>
<td style="text-align:right;"><hr class="horizontal-line hr3"></td>
</tr>
</table> 


<p style="font-family: Monaco;text-align:right;font-size: 8px;text-transform:capitalize;letter-spacing:1px;line-height: 0.9;">
<b>&nbspSignature of Controller Of Examinations</p>
</div>
            </body>
            
            </html>
            `; 
            };

app.post("/", async (req, res) => {
pdf.create(html(req.body), options).toFile(
"./makeupExam.pdf",
(err, result) => {
if (err) {
res.status(404).json({ message: "Failed" });
} else {
res.status(200).json({ message: "Successfully created" });
}
}
);
});

app.listen(3030, () => {
console.log("Server started");
});

