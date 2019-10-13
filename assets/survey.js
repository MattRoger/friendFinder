console.log("working")
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
const userResponses=[]
var user;
const name=[]
 
$("#submitName").on("click", function(){
    event.preventDefault()
    console.log("clicked");
    user=$("#userName").val().trim()
    name.push(user)
    askQuestion()
    $("#enterName").empty()
})
const UserObject={
    name:name,
    answers:userResponses
}


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
        userResponses.push(userResponse)
        x+=1;
        if(x===10){
            end()
        }else{
            askQuestion()
        }
    })
}


function end(){
    console.log(user)
    console.log("the end")
    console.log(UserObject)
    var userInfo=$("<div>")
    const yourName=$("<h1>")
    yourName.text(UserObject.name)
    const yourAnswers=$("<ol>")
    for(i=0;i<questions.length;i++){
        const q=questions[i]
       const a=UserObject.answers[i];
        const qa=$("<li>");
        qa.text(`${q}
        You Said ${a}`)
        yourAnswers.append(qa)
    }
    
    userInfo.append(yourName)
    userInfo.append(yourAnswers)

    $("#match").append(userInfo)
    
}
