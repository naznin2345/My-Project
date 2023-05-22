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
    width: 50%;
    height:10%;
  }
  .column3 {
    float: left;
    width:30%;
    height:15%;
   
  }
  .column4 {
    float:left;
    width: 15%;
    height:12%;
  }
  .column5 {
    float:left;
    width: 30%;
    height:12%;
  }
  .column6{
    float:left;
    width: 10%;
    height:12%;
  }
  .column7{
    float:left;
    width: 45%;
    height:12%;
  }
  .column8 {
    float: left;
    width:230px;
    height:38px;
   
  }
  .column9 {
    float: left;
    width:230px;
    height:38px;
   
  }

  .column10 {
    float: left;
    width:100px;
    height:42px;
   
  }




  .column11 {
    float: left;
    width:230px;
    height:38px;
  }
  .column12 {
    float: left;
    width:155px;
    height:38px;
   
  }

  .column13 {
    float: left;
    width:155px;
    height:38px;
  }
  
  .column14 {
    float: left;
    width:50%;
    height:5%;
  }
  .column15 {
    float: left;
    width:50%;
    height:5%;
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
    width: 240px;line-height: 0.9;
   
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
  <center><p><span class="letter">LEADING </span>
  <span  class="letter">UNIVERSITY</span></p>
  <p style="text-align:center;font-weight: bold;font-size:11px;letter-spacing: 2px;">Ragibnagar,Sylhet</p> </center>
  
  
  </caption>
  
</div>


<div class="column3">
</br><center><div style="width: 130px;height: 130px;border: 1px solid gray;padding-top:30px;"><p style="font-size:10px;font-weight:bold;">Enclose a Passport Size Photo</p></div></center>


</div>

 </div>

 <div>

 <p style="text-align:left;font-weight: bold;font-size:8px;letter-spacing:normal;">
 To
 
 </p>
 <p style="text-align:left;font-weight: bold;font-size:8px;letter-spacing:normal;">
 The Controller Of Examinations
 
 </p>
 <p style="text-align:left;font-weight: bold;font-size:8px;letter-spacing:normal;">
 Leading University Ragibnagar Sylhet
 
 </p>
 <p style="text-align:left;font-weight: bold;font-size:10px;letter-spacing:normal;">
 Subject:Prayer for issuing Original Certificate.
 
 </p>
 <p style="text-align:left;font-weight: bold;font-size:10px;letter-spacing:normal;">
 Sir,
 
 </p>
 <p style="text-align:left;font-weight: bold;font-size:9px;letter-spacing:normal;font-family:Serif;word-spacing: 1px;line-height:1.5">
 With due respect I the undersigned student of Leading University,beg to state that,Ihave completed required credit hours for my Degree and want to 
 receive my Original Certicate from the University .The following particulars are furnished for your perusal and consideration.
 
 </p>
</div>



<div>
<form> 
 <div class="form-example">
    <label style="font-size:9px;padding-right:6px;font-weight:bold;">Student Name: </label><input  style="border:1px gray solid;width:480px;">
    <label style="font-size:9px;padding-right:12px;font-weight:bold;">Fathers Name:</label><input  style="border:1px gray solid;width:480px;">
    <label style="font-size:9px;padding-right:6px;font-weight:bold;">Mothers Name: </label><input  style="border:1px gray solid;width:480px;">
    
    
    </div>

</form>
</div>

<div style="padding-top:5px;">
<div class="row" >
 
  <div class="column4">
  <div><p style="font-size:9px;font-weight:bold;">Student ID:</p></div>
  <div style="padding-top:5px;"><p style="font-size:9px;font-weight:bold;">Department: </p></div>
 
  </div>
 
 
  <div class="column5">
  <div style="border:1px gray solid;width:150px;height:20px;"></div>
  <div style="padding-top:10px;"><div style="border:1px gray solid;text-align:center;width:250px;height:70px;width:150px;font-size:9px;font-color:black;font-weight:bold;"><p>Bua/cse/English/Law/EEE/</p><p>L.studies/Architectures/</p><p>civil/P.Health/THM</p></div></div>
  </div>
 
  <div class="column6">
  <div><p style="font-size:9px;font-weight:bold;">Program:</p></div>
  </div>
 
  <div class="column7">
 <div style="border:1px gray solid;width:250px;height:100px;width:250px;font-size:9px;font-color:black;font-weight:bold;text-align:center;"><p>BBA/B.A in Eng/B.Sc. in CSE/B.Sc. in EEE/</p><p>B.Sc. in CE/BA in Arch/LLB/BA in I Studies/</p><p>BTHM/MBA(R)/MBA(EX)/MPH/LLM/MA in Eng/MA in I</p></div>
  </div>
 
 </div>    
  </div>



 <div style="padding-top:5px;">
 <label style="font-size:9px;padding-right:6px;font-weight:bold;">Cr.Completed:</label>
 <input  style="border:1px gray solid;width:250px;height:25px;font-size:10px;font-weight:bold;"value="123/124/126/132/152/157/164/198/51/60/63">&nbsp&nbsp<label style="font-size:9px;font-weight:bold;">8.Semester of Completion:Spring.../SU../Fall</label>
</div>
<div style="padding-top:5px"> 
<label style="font-size:9px;padding-right:40px;font-weight:bold;">Major in:</label><input  style="border:1px gray solid;height:25px;width:250px;font-size:9px;font-weight:bold;">
<label style="font-size:9px;padding-right:40px;font-weight:bold;">10.CGPA:&nbsp&nbsp<input  style="border:1px gray solid;height:25px;width:180px;font-size:9px;font-weight:bold;">

</div>



<div class="row" style="padding-top:30px;">
<div class="column14">
<div><hr class="horizontal-line hr3"></div>
<div style="padding-top:1px;font-size:9px;font-weight:bold;line-height:0.2;">Signature of the Student(Full Name) with Date</div>


</div>


<div class="column15">
<label style="font-size:9px;padding-right:40px;font-weight:bold;">
Contact No of Student:&nbsp&nbsp<input style="border:1px gray solid;height:25px;width:150px;font-size:9px;font-weight:bold;">

</div>

</div>






<div class="row" style="padding-top:5px;">

<div class="column8">
<div style="border:1px gray solid;text-align:center;width:227px;height:92px;font-size:7px;font-color:black;font-weight:bold;"><p> 1.certified that the above mentioned information from 01 to 06 are true and is not under any obligationwith Admission office</p></br></br><hr><p>Signature of Deputy Registrar(Admission)with Seal & Date:</p></div>


</div>


<div class="column9">
<div style="border:1px gray solid;text-align:center;width:227px;height:92px;font-size:7px;font-color:black;font-weight:bold;"><p>2.certified that the information given above about CGPA,Number of Credit completed,Semester and Year of course completion are true</p></br></br><hr><p>Signature of Asst.Controller/Section Officer with Seal and Date:</p></div>


</div>


<div class="column10">
<div style="border:1px gray solid;text-align:center;width:115px;height:92px;font-size:7px;height:75px;font-color:black;font-weight:bold;"><p>Issued Original Certificate No.</p></br><p>......................</p><p style="line-height:0.2;">Prepared By:</div>

</div>


</div>



<div class="row" style="padding-top:55px;">

<div class="column11">
<div style="border:1px gray solid;text-align:center;width:225px;height:85px;font-size:7px;font-color:black;font-weight:bold;"><p>3.Certified that the concerned student has no outstanding dues with the university</p></br></br><hr><p>Signature of Director(F&A) with Seal & Date:</p></div>


</div>


<div class="column12">
<div style="border:1px gray solid;text-align:center;width:150px;height:85px;font-size:7px;font-color:black;font-weight:bold;"><p> 4.</p><br></br></br><hr><p>Controller Of Examinations</p></div>


</div>


<div class="column13">
<div style="border:1px gray solid;text-align:center;width:180px;height:85px;font-size:7px;height:75px;font-color:black;font-weight:bold;"><p>5.I Have received Original Certificate without any sign of alteration,temper or eraser.</br></br><hr></p>Signature of Student with Date:</p></div>

</div>


</div>




  </body>
            
            </html>
            `; 
            };

app.post("/", async (req, res) => {
pdf.create(html(req.body), options).toFile(
"./CertificateApplication.pdf",
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

