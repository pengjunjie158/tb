var gulp = require('gulp');
var server = require('gulp-webserver');

var urlTool = require('url');
var qs = require('qs');

var json=[
                {
                    src:"images/img1.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                },
                {
                    src:"images/img2.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                },
                {
                    src:"images/img3.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                }
                ,
                {
                    src:"images/img4.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                }
                ,
                {
                    src:"images/img1.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                },
                {
                    src:"images/img3.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                }
                ,
                {
                    src:"images/img4.jpg",
                    p1:"一说 智能机器人 S1 儿童陪伴机器人 早教故事机",
                    sp1:"￥898",
                    sp2:"￥1280"
                }
        ]



gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:8099,
            middleware:function(req,res){
                res.setHeader('Access-Control-Allow-Origin','*')

                var urlObj =  urlTool.parse(req.url);

                var method = req.method;

                var pathname = urlObj.pathname;


                if(method==="POST"){
                    var postData = '';
                    req.on('data',function(chunk){
                        postData +=chunk;
                    })
                    req.on('end',function(){
                        var postParmas = qs.parse(postData)
                        console.log(pathname)
                        switch (pathname) {
                            case "/shopping":
                                    // if(postParmas.name=="as" && postParmas.pwd=="123"){
                                        res.setHeader('content-type','application/json;charset=utf-8')
                                        res.write(JSON.stringify(json))
                                        res.end()
                                   // }
                                break;
                        
                            
                        }

                    })
                }
               
            }



        }))
})


gulp.task('default',['mockServer'])