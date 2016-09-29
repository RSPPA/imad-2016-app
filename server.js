var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' :{
title: 'article-one | Anuj kumar',
heading: 'Article one',
date: 'sept 5, 2016',
content:`
        <p>
         this is the content of my first artical. my frineds are sandeep, akshay, harshit,debasish,sonu,utsav,cr-prem,best friend debassish(tadashi huamada).
        </p>
         <p>
         this is the content of my first artical. my frineds are sandeep,akshay, harshit,debasish,utsav,cr-prem,best friend debassish(tadashi huamada).
         </p>
         <p>
         this is the content of my first artical. my frineds are sandeep,akshay, harshit,debasish,sonu,utsav,cr-prem,best friend debassish(tadashi huamada).
         </p>`
},
     'article-two' : {
            title: 'article-one | Anuj kumar',
            heading: 'Article one',
            date: 'sept 5, 2016',
            content:` <p>
                     debasish is my best frnd in the world.he is so cute and silent.
                     he is not tell lie at any time.
                     he is so innocent that he obey all frnd and help for all frnd.
                     debasish be like that, whatever you are good.
                     my lovely frnd deba.
                     from your lazy frnd anuj
                     thank u.
                     </p>
        
                    `},
     'article-three': {
             title: 'article-one | Anuj kumar',
            heading: 'Article one',
            date: 'sept 5, 2016',
            content:`  <p>
                     Sandeep is my best frnd(brother).he is so cute and silent.
                     he is not tell lie at any time.
                     he is so innocent that he obey all frnd and help  all frnd.
                     Sandeep be like that, whatever, you are good.
                     my lovely frnd sandeep.
                     from your crazy frnd anuj
                     thank u.
                    </p> `},
     'rao-shaab':{title: 'rao-shaab',
            heading: 'Talent boy(famous boy)',
            date: 'sept 29, 2016',
            content:`  <p>
                     Sandeep is my best frnd(brother).he is so cute and silent.
                     he is not tell lie at any time.
                     he is so innocent that he obey all frnd and help  all frnd.
                     Sandeep be like that, whatever, you are good.
                     my lovely frnd sandeep.
                     from your crazy frnd anuj
                     thank u.
                    </p> `}
};

function createTemplate (data){ 
    var title = data.title;
    var heading = data.heading ;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate = `<html>
 <head>
     <title>
        ${title}
     </title> 
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
 </head>  
 
   <body>
     <div class="container">
         <div>
             <a href="/">Home</a>
         </div>
         <hr/>
         <h3>
            ${heading}
         </h3>
         <div>
            ${date}
         </div>
         <div>
            ${content}
         </div>
     </div>     
   </body>    
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res) {
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});




app.get('/rao-shaab', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'rao-shaab.html'));
});


 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/1(1).png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1(1).png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
