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
            text-align:center;font-family:serif;font-size: 30px;color: black;
            letter-spacing: 5px;
          }
          span::first-letter{
            font-size: 3rem;
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
            padding-left: 5px;
          }
          .hr2{
            width: 300px;line-height: 0.9;
            padding-left: 35px;
          }
        </style>
    </head>
        <body>
        <table>
        <center><img src="https://upload.wikimedia.org/wikipedia/en/0/02/Leading_University_Logo.png" alt=" Logo"/></center>
        ${Data
          .map(
              (d, i) =>
                  `
        <tr>
        <td style="text-align:left;padding-left:15px;">
        <p>ID No.</p>
        <p>${d.Id}</p>
        
       
     
       
        <td style="text-align:right;padding-left:930px">
        <p>SL.NO.</p>
        <p>${d.Sl}</p>
        
        
        </td>
        
       </td>
       
       </tr>
       
       
       </table>
       <center>
       <span>LEADING </span>
       <span>UNIVERSITY</span>
        
   </center>
   </br>
          
          
          <div>
          
          <p style="font-family: fantasy;text-align:center;font-size: 12px;letter-spacing: 3px;"><b>On recommendation of the</b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 24px;letter-spacing: 3px;"><b>Faculty Of ${d.Department}</p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal">and</p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal">in recognition of the fulfillment of all requirements</p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal"><b>has conferred upon</b></p>
          <p style="font-family: fantasy;text-align:center;font-size: 24px;text-transform:capitalize;letter-spacing:normal;"><b>${d.Name} </b></p>
          <p style="font-family: fantasy;text-align:center;font-size: 14px;letter-spacing: normal"><b>the degree of </b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 24px;letter-spacing: 3px;font-style: italic;"><b>${d.Degree} in ${d.Subject}</b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal">in the ${d.Semester}</p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal">with all rights, honors and privileges pertaining there to</p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal">His/Her CGPA is <b>${d.Grade}</b> on a scale of <b>4.00</b></b></p>
          <p style="font-family: Monaco;text-align:center;font-size: 14px;letter-spacing: normal"><b>Awarded at Leading University in Sylhet Bangladesh</b></p>
          <p style="font-family: Sucks;text-align:center;font-size: 14px;letter-spacing: normal"><b>on the ${d.Date} in the year ${d.Year}</b></p>

          `
      )
      .toString()
      .split(",")
      .join("")}
        </div>
        </br></br></br></br>
        <div>
        <hr class="horizontal-line hr1"> 
        
        
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <hr class="horizontal-line hr2">
          <p style="font-family: Monaco;text-align:left;font-size: 13px;text-transform:capitalize;letter-spacing:1px"><b>&nbsp&nbsp&nbsp&nbsp  Controller of Examination &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
        
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          Vice Chancellor</b></p>
         
          </div>
        
     
        
        


            
                </html>
       `;
};

app.post("/", async (req, res) => {
    pdf.create(html(req.body), options).toFile(
        "./recommendation.pdf",
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