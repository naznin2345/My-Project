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


    return `
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>DemoPdf</title>
        <style>
       
       
          table {

            font-family: arial, sans-serif;
            font-size:10px;
            border-collapse: collapse;
          
            width: 100%;
          
          }
          body{
            padding:10px;
          }
          
          td, th {
          
            border: 1px solid #dddddd;
          
            text-align: center;
          
            padding: 5px;
          
          }
          
         
          
            body:before{
              content: 'LEADING UNIVERSITY'; content: 'LEADING UNIVERSITY';
              position: fixed;
              top: 475px;
              bottom: 100px;
              left: 30px;
              right: 30px;
              z-index: -1;
          
              color: #0d745e;
              font-size: 40px;
              font-weight: 50px;
              display: grid;
              justify-content: center;
              align-content: center;
              opacity: 0.2;
              transform: rotate(-60deg);
            
          }
          span{
            display:inline-block;
            text-align:center;
          }
          span::first-letter{
            font-size: 2rem;
            font-weight: bold;
            color: black;
            
        }


      
        
        </style>
    </head>
        <body>
        
        
        <div style="font-family:serif;text-align:center;font-size: 18px;color: black;">
        <span >LEADING </span>
        <span>UNIVERSITY</span>
        
        </div>
        
        <div>
        <p style="font-family: serif;text-align:Right;font-size: 12px;text-transform:capitalize;"> <b>ADMIT CARD</b></p>
        <p style="font-family: serif;text-align:Right;font-size: 10px;"><b> Semester Final Examination[Spring,2023]</p>
        <p style="font-family: serif;text-align:Right;font-size: 10px;"><b>Department:Bussiness Administration</p>
       
       <p style="font-family: serif;text-align: Left;font-size: 10px;"><b>Student Id:2017000000146</p>
     
        <p style="text-align: Left;font-family: serif;font-size: 10px;"><b>Student Name:Naznin Sultana Poli</p>
       
            </div>
           
            <h2 style="font-family:Serif;font-size:25px;text-align:center;">   
                    <table  border="1" align="center" cellspacing="0">
            <thead>
        
                <tr>
                    <th>Course Code</td>
                    <th>Course Title</th>
                    <th>Date</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                ${Data
                    .map(
                        (d, i) =>
                            `
                        <tr>
                            <td>${d.CourseCode}</td>
                            <td>${d.CourseTitle}</td>
                            <td>${d.date}</td>
                            <td>${d.Credit}</td>
                           
                        </tr>
                        `
                    )
                    .toString()
                    .split(",")
                    .join("")}
            </tbody>
            
        </table>
        </br></br></br>
            <h6 style="text-align: Left">Signature Of Authorized Officer   
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            
            signature Of Controller of Examination</h6></br>
            <p style="text-align:center;font-size: 10px;"><i><b>N.B.Students are advised to preserve the Admit Card for future use.</i></b></p>
            <hr>


           
         
                    </html>
       `;
};

app.post("/", async (req, res) => {
    pdf.create(html(req.body), options).toFile(
        "./AdmitCard.pdf",
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