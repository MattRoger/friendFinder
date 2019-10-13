console.log("working")
var user;
let x=0;
const questions=[
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
];
const userRespsonses=[]
$("#submitName").on("click", function(){
    event.preventDefault()
    console.log("clicked");
    user=$(userName).val().trim()
    console.log(user)
    askQuestion()
    $("#enterName").empty()
})

function askQuestion(){
    $("#question").empty()
    var q =questions[x];
    $("#question").append(q)
   
}
answered()
function answered(){
    $("#answer_div").on("click","button",function(){
        const userResponse=$(this).val()
        console.log(userResponse)
        x+=1;
        if(x===10){
            end()
        }else{
            askQuestion()
        }
    })
}


function end(){
    console.log("the end")
}
