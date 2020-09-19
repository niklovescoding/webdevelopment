const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];

app.get("/",(req,res)=>{
    var date=new Date();
    var month=date.getMonth();
    var day=date.getDay();
    var d_ate=date.getDate();
    switch (month) {
        case 0:
            var month="Jan";
            break;
        case 1:
            var month="Feb";
            break;
        case 2:
            var month="Mar";
            break;
        case 3:
            var month="Apr";
            break;
        case 4:
            var month="May";
            break;
        case 5:
            var month="Jun";
            break;
        case 6:
            var month="Jul";
            break;
        case 7:
            var month="Aug";
            break;
        case 8:
            var month="Sep";
            break;
        case 9:
            var month="Oct";
            break;
        case 10:
            var month="Nov";
            break;
        case 11:
            var month="Dec";
            break;
    
        default:
            break;
    };
    switch (day) {
        case 0:
            var day="Sunday";
            break;
        case 1:
            var day="Monday";
            break;
        case 2:
            var day="Tuesday";
            break;
        case 3:
            var day="Wednesday";
            break;
        case 4:
            var day="Thursday";
            break;
        case 5:
            var day="Friday";
            break;
        case 6:
            var day="Saturday";
            break;
    
        default:
            break;
    }
    const data=day+", "+month+" "+d_ate;
    res.render("list",{date:data , list:items})
    

});

app.post("/",(req,res)=>{
    var item=req.body.n1;
    items.push(item);
    res.redirect("/");
});

app.get("/about",(req,res)=>{
    res.render("about")
});


PORT=process.env.PORT || 3000;
app.listen(PORT,console.log("server is up and running..."));