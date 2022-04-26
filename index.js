
const container = document.querySelector('.container');


function infinitescrolls(){
for(let i = 1; i < 1000; i++){
    //console.log(`Student Code fw14_${i}`);
    let p = document.createElement('p');
    p = `Masai Student Code fw14_${i}` + '\n';      
    container.append(p);
   
}

    }

infinitescrolls();
window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY) 
    console.log(window.innerHeight) 
    if(window.scrollY + window.innerHeight === document.documentElement.scrollHeight){
        infinitescrolls();
    }
})