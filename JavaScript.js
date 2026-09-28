count = 0;
let seconds=2;
let progress=document.querySelector(".progress");
let percentage=document.querySelector("#percentage");


let done=setInterval(function(){
    if(count<=99){
        count++;
        progress.style.width=`${count}%`;
        percentage.textContent=`${count}%`
    }
    else{
        document.querySelector("#hash").textContent="Downloaded";
        clearInterval(done);
    }
},(seconds*1000)/100);