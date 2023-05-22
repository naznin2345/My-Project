const express = require("express");
const app = express();
var pdf = require("html-pdf");
var options = {
    format: "A3",
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
    

    return `
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>DemoPdf</title>
        <style>
       
       
          
         
          
          
         p {
           
            margin-bottom: 5px;
            
            padding: 2px;
            
            font-weight: bold;
            line-height: 0.5rem;
        }
          span{
            display:inline-block;
            text-align:center;font-family:serif;font-size: 40px;color: black;
            letter-spacing: 5px;
          }
          span::first-letter{
            font-size: 3.5rem;
            font-weight: bold;
            color: black;
            font-family:serif;color: black;
            letter-spacing: 5px;
            
        }

        img {
            width: 150px;
            height: 150px;
            align:center;
          }
          
          .horizontal-line {
            display: inline-block;
            border-top: 1px dotted gray;
            line-height: 0.9;

          }
          .hr1{
            width: 300px;line-height: 0.9;
          }
          .hr2{
            width: 300px;line-height: 0.9;
            mergin-left: 10px;
          }
        </style>
    </head>
        <body>
        
        
        </br></br>
        <div>
        <p style="padding-left:30px;">SL.NO.</p>
        <p style="padding-left:30px;">00010667</p>
        <center><img src="https://upload.wikimedia.org/wikipedia/en/0/02/Leading_University_Logo.png" alt=" Logo"/></center></div></br>
        
        
        <div style="line-height: 1rem;">
        <center>
        <span>LEADING </span>
        <span>UNIVERSITY</span> 
        <h4 style="font-family:sans-serif;text-align:center;font-size: 45px;text-transform:capitalize;letter-spacing: 15px;"><b>Provisional Certificate</b></h4>
          </center>
          </div>
          <div>
          ${Data
            .map(
                (d, i) =>
                    `
          <p style="font-family: fantasy;text-align:center;font-size: 12px;text-transform:capitalize;letter-spacing: 3px;"><b>This is to certify that</b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 24px;text-transform:capitalize;letter-spacing: 3px;"><b>${d.Name}</b></p>
          <p style="font-family: fantasy;text-align:center;font-size: 18px;text-transform:capitalize;letter-spacing:normal;"><b>ID NO. ${d.Id} having successfully completed</b></p>
          <p style="font-family: fantasy;text-align:center;font-size: 18px;letter-spacing: normal"><b>the prescribed curriculum,obtained the degree of </b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 20px;text-transform:capitalize;letter-spacing: 3px;font-style: italic;"><b>${d.degree} in ${d.department}</b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;text-transform:capitalize;letter-spacing: normal"><b>in the ${d.semester}.</b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 16px;text-transform:capitalize;letter-spacing: normal"><b>His/Her CGPA is ${d.grade} on a scale of 4.00.</b></p>
          </tr>
          `
      )
      .toString()
      .split(",")
      .join("")}
        </div>
        </br></br></br></br>
        <div>
        <hr class="horizontal-line hr1"> 
        
        
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp 
         
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp 
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        
        <hr class="horizontal-line hr2">
          <p style="font-family: Monaco;text-align:left;font-size: 13px;text-transform:capitalize;letter-spacing:1px"><b>&nbsp&nbsp&nbsp&nbsp  Controller of Examination &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp 
         
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp 
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          Vice Chancellor</b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 10px;">Date of issue:30<sup>th</sup>January ,2023</p>
          <p style="font-family: Monaco;text-align:center;font-size: 8px;">N.B. This Provisional Certificate must be surrendered at the time of taking delivery of the original certificate.</p>
          </div>
        
     
        
        


            
                </html>
       `;
};

app.post("/", async (req, res) => {
    pdf.create(html(req.body), options).toFile(
        "./provisional.pdf",
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