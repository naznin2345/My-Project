const express = require("express");
const app = express();
var pdf = require("html-pdf");
var options = {
format: "A3",
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
for (let i = 0; i < Math.ceil(Data.length /20); i++) {
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
.studentInfo {
width: 90%;
border-collapse: collapse; table-layout: fixed;
position: relative;
overflow: hidden;
display: block;
padding-top:10px;

}
.studentInfo th{
border: 1px solid black;
font-size:16px;
font-family:Monaco;


}
.studentInfo td{
    border: 1px solid black;
    font-size:14px;
    font-family:Monaco;

}

body {
Margin: 0 !important;
background-color: #FFF;
font-family: Angsana New;

}
th,td {
border-color: rgb(27, 26, 26);
border-width: 0.1em;
text-align: center;
vertical-align: middle;
overflow: auto;
padding: 3px;
}



   
</style>
</head>
<body>

</br>
<p style="font-family:serif;text-align:left;padding-left:35px;font-size:20px;font-weight: bold;">Attendence Sheet</p>
<p style="text-align:left;padding-left:35px;font-size:13px;font-family:serif;font-weight: bold;">Midterm Examination</p> 
<p style="text-align:left;padding-left:35px;font-size:13px;font-family:serif;font-weight: bold;">Course Title:Principle of finance &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTotal Student:${Data.length}</p>
<p style="text-align:left;padding-left:35px;font-size:13px;font-family:serif;font-weight: bold;">Department:Bussiness Administration&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSection:A</p>


${totalTable
    .map(
        (value, index) =>
                 `<center>
<div style="page-break-after:auto;page-break-inside:avoid; padding-top:30px;"> 
<table class="studentInfo" >
<thead>
<tr>
<th>Student ID</th>
<th>Student Name</th>
<th>Signature of the Student</th>
<th>Remarks</th>
</thead>
</tr>   
<tbody>
${Data.splice(0,20)
    .map(
        (d, i) =>
            `
<tr>
<td>${d.id}</td>
<td>${d.name}</td>
<td></td>
<td></td>

</tr>

</tbody>


`
)
.toString()
.split(",")
.join("")}
<div>
<table></br></br></br></br></br>

<tr>
<p style="text-align:right;padding-right:35px;font-weight: bold;font-family:Monaco;font-size:18px">
Invigilators Signatures</p>
</tr>

</table>

</table></br></br>

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
"./midattendence.pdf",
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

