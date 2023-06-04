var express=require('express')
var ejs =require('ejs')
var mysql=require('mysql')
var app=express();
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.get('/',function(req,res){
    res.render('pages/reg');
    });
    var con=mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"timetable"
       });
      con.connect(function(err){
      if(err){
       throw err;
       }
       });
       app.post('/staffsave',function(req,res,next){
        var staffid=req.body.staffid;
        var staffname=req.body.staffname;
        var department=req.body.department;
        var emailid=req.body.emailid;
        var phnno=req.body.phnno;
        var password=req.body.password;
        var cpassword=req.body.cpassword;
        var position=req.body.position;
        var subject=req.body.subject;
        var yrofjoin=req.body.yrofjoin;
          var query="insert into fet1 values('"+req.body.staffid+"','"+req.body.staffname+"','"+req.body.department+"','"+req.body.emailid+"','"+req.body.phnno+"','"+req.body.password+"','"+req.body.cpassword+"','"+req.body.position+"','"+req.body.subject+"','"+req.body.yrofjoin+"')";
          con.query(query,function(err,result){
          if(err)
          {
          throw err;
          }
          else
          {
           console.log("Inserted Successfully");
        
          }
          });
          });

          app.get('/stfview1', function (req, res, next) {
            con.query("select * from fet1", function (err,rows) {
              if(err) 
              {
                res.render('/', { data: '' });
              } else 
              {
                res.render('pages/stfview1',{ data:rows});
              }
            });
          });


          app.get('/reg',function(req,res){
            res.render('pages/reg');
          });

          app.get('/delete1',function(req,res){
            res.render('pages/delete1');
            });

          app.get('/update1',function(req,res){
            res.render('pages/update1');
            });

            app.post('/update1',function(req,res,next){
              var staffid=req.body.staffid;
              var staffname=req.body.staffname;
              var department=req.body.department;
              var emailid=req.body.emailid;
              var phnno=req.body.phnno;
              var password=req.body.password;
              var cpassword=req.body.cpassword;
              var position=req.body.position;
              var subject=req.body.subject;
              var yrofjoin=req.body.yrofjoin;
              
              
              var query="update fet1 set staffname='"+req.body.staffname+"',department='"+req.body.department+"',emailid='"+req.body.emailid+"',phnno='"+req.body.phnno+"',password='"+req.body.password+"',cpassword='"+req.body.cpassword+"',position='"+req.body.position+"',subject='"+req.body.subject+"',yrofjoin='"+req.body.yrofjoin+"' where staffid='"+req.body.staffid+"'";
              con.query(query,function(err,result){
              if(err)
              {
                  throw err;
              }
              else
              {
                  console.log("updated Successfully");
              }
              
              res.redirect('/stfview1');
              })
              })
              app.get('/update1',function(req,res){
                res.render('pages/update1')
              })
          
   

            app.post('/delete1',function(req,res,next){
              var id=req.body.staffid;
              var query="delete from fet1 where staffid='"+req.body.staffid+"'";
              con.query(query,function(err,result){
                if(err)
                {
                  throw err;
                }
                else
                {
                  console.log("delete successfully");
                }
                res.redirect('/stfview1');
              })
            })
              app.get('/delete1',function(req,res){
              res.render('pages/delete1')
            })