const express = require("express");
const app = express();
var pdf = require("html-pdf");
var options = {
    format: "A4",
    orientation: "landscape",
    margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
    },
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
p{text-align:left;font-weight: bold;font-size:8px;
line-height:1px;
}
* {
    box-sizing: border-box;
  }
  
  .column1 {
    float: left;
    width:50%;
    height:10%;
   
  }
  .column2 {
    float:left;
    width: 20%;
    height:10%;
  }
  .column3 {
    float: left;
    width: 30%;

  
  /* Clearfix (clear floats) */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }





</style>

</head>
<body>

<div class="row">
  <div class="column1"></br>
  <caption>
  <h4 style="text-align:left;font-size:13px;font-weight: bold;">Leading University,Sylhet</h4>
  <p>Department Of Cse</p> 
  <p>Semester Final result</p>
  <p>Semester:Spring 2023</p>
  <p>Course Code:CSE-2118</p>
  <p>Course Title: Computer Algorithms & Complexity:Sessional</p>
  <p>Credit:1;</p>
  <p>Course Teacher:Prof.Dr.As.Sikder</p>
  <p>Contact:01757584584</p>
  </caption>

    
    </div>
    
  <div class="column2"></br>
  <p>
  &nbsp &nbsp &nbsp &nbsp &nbsp<img src="https://upload.wikimedia.org/wikipedia/en/0/02/Leading_University_Logo.png" alt=" Logo" alt="Snow" style="width:70px;height:80px">
  
  </p>
  <div style="width: 150px;padding: 2px;border: 1px solid gray;margin: 0;">&nbsp &nbspResult Sheet</div>
 
  
</div>
 
   
  <div class="column3">
  <img src="https://www150.statcan.gc.ca/edu/power-pouvoir/c-g/c-g05-2-2-eng.png" alt=" Logo" alt="Snow" style="width:250px;height:150px">
  
  
  </div>
  
</div>

</br></br></br></br></br></br></br></br>

${totalTable
    .map(
        (value, index) =>
                 `<center>
<div style="page-break-after:auto;page-break-inside:avoid;padding-top:20px;"> 
<table border="1" cellspacing="0">
        <col>
         <col>
         <col>
         <colgroup span="4"></colgroup>
         <col>
<thead>
        
<tr>
<th rowspan="2" style="vertical-align : middle;text-align:center;width:130px;">Student Id</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;width:180px;">Student Name</th>
<th colspan="3" style="vertical-align : middle;text-align:center; width: 200px;">Class Performance</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Class Perf Total(30)</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Project Work(30)</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Lab Final(40)</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Total(100)</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Round-up</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Letter Grade</th>
<th rowspan="2" style="vertical-align : middle;text-align:center;">Grade Point</th>
</tr>

<tr>
            <th scope="col">Atten.(10)</th>
            <th scope="col">Lab Tasks(10)</th>
            <th scope="col">Project Report(10)</th>
         </tr>
</thead>
</tr>   
<tbody>
                ${Data.splice(0, 18)
                    .map(
                        (d, i) =>
                            `
                        <tr>
                        <th>${d.id}</th>
                        <td>${d.name}</td>
                        <td>${d.attendence}</td>
                        <td>${d.labtask}</td>
                        <td>${d.projectreport}</td>
                        <td>${d.ClassPerf}</td>
                        <td>${d.ProjectWork}</td>
                        <td>${d.LabFinal}</td>
                        <td>${d.Total}</td>
                        <td>${d.RoundUp}</td>
                        <td>${d.LetterGrade}</td>
                        <td>${d.GradePoint}</td>
                        </tr>
                        `
                    )
                    .toString()
                    .split(",")
                    .join("")}
                    
            </tbody>
            <div>
            <table>
            
            
            
            </table>
            
            </table>
            
            </div></center>
            `
            ).toString()
            .split(",")
            .join("")
            }
            </div>
            
            </body>
            
            </html>
            `; 
            };

app.post("/", async (req, res) => {
pdf.create(html(req.body), options).toFile(
"./ResultSheet.pdf",
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

