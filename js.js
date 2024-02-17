let user_score = 0;
let comp_score = 0;
var user_choice = document.querySelector(".chose");

    user_choice.addEventListner("click",()=>{
        selected = user_choice.getAttribute(id).value;
        console.log(selected);
    });



const  gen_comp_choice = ()=>{
    console.log(Math.log()*3);
}

let comp_choice = ["rock", "paper", "scissoror"]
 comp_choice[Math.floor(math.random()*3)]


if(users_score===comp_score){
    console.log("Game was Draww. Play again");

}else if(users_score==="rock" & comp_score==="sicssor"){
    console.log("You won.");

}else if(users_score==="sicssor" & comp_score==="paper"){
    console.log("You won.");

}else if(users_score==="paper" & comp_score==="rock"){
    console.log("You won.");

}else if(users_score==="paper" & comp_score==="sicssor"){
    console.log("You loss!");

}else if(users_score==="rock" & comp_score==="paper"){
    console.log("You loss!");

}else if(users_score==="sicssor" & comp_score==="rock"){
    console.log("You loss!");
}else{
    console.log("error");
}

