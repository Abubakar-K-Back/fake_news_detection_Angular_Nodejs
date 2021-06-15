const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var fs = require('fs');
var Fuse = require("fuse.js");
var cors = require('cors')


var bodyparser= require('body-parser');
const { emitKeypressEvents } = require('readline');

app.use(bodyparser.json());


app.use(cors());
// function search()
// {

//     var obj;
    
//     let val="Print They should pay all the back all the money plus interest. The entire family and everyone who came in with them need to be deported asap. Why did it take two years to bust them? \r\nHere we go again \u201a\u00c4\u00b6another group stealing from the government and taxpayers! A group of Somalis stole over four million in government benefits over just 10 months"
    
//     fs.readFile('fakedata.json', 'utf8', function (err, data) {
//         if (err) throw err;

//         obj = JSON.parse(data);

//         const options = {
//             includeScore: true
//             ,
//             keys:['content']
//           }
//           var a = ['asds','asdasd','f2312sad','asdasdfhf']
//         const fuse = new Fuse(a)

//         const result = fuse.search("ss",optz)
//         console.log(result)


 
//     })
// }
// search()

app.post("/popo",(req,res)=>{
    
    var obj;
    

    fs.readFile('fakedata32.json', 'utf8', async function (err, data) {
        if (err) throw err;

        obj = JSON.parse(data);
        var index = -1;
        let val = req.body.val
        var spam;
        var toxity;
        var category;
        var emotion_score;

        var fake;

        const options = {includeScore: true}
        var a = []
        
        for (var i=0;i<3710;i++)
        {
        a.push(obj['text'][i])
        }
        const fuse = new Fuse(a)
        
        const result =await fuse.search(val,options)
                
            

        spam=obj['spam_score'][result[0].refIndex]
        emotion_score=obj['emotion_score'][result[0].refIndex]
        category=obj['category_factor'][result[0].refIndex]
        toxity=obj['toxicity_factor'][result[0].refIndex]
        fake=obj['fake'][result[0].refIndex]


        
        res.json({

            refindex:result[0].refIndex,
            Item:result[0].item,
            spam:spam,
            emotion_score:emotion_score,
            category:category,
            toxity:toxity,
            fake:fake
        
        })

        
    
      });




})




app.listen(port,()=>{
    console.log(`app is running at port ${port}`)
})




