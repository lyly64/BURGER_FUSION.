const inscriptionBtn=document.getElementById('inscription')
const subEmail=document.getElementById('sub-email') 
const popUp=document.getElementById('popUp')
const section=document.querySelectorAll("#section")

let lastClikedCategorie=document.querySelector('.default')

function validEmail(email){
    let re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

inscriptionBtn.addEventListener('click',()=>{
    let email=subEmail.value
    if(email==""){
        alert('pleas enter your email')
       
    }else if(validEmail(email)){
        
        subEmail.value=""
        popUp.style.display="block"
        setTimeout(()=>{
            popUp.style.display='none'
        },1500)
    }else{
        alert('pleas enter a valid email')
    }
})

document.addEventListener('click',(e)=>{
    let cNumber=e.target.className
    let number=parseInt(cNumber)
   
    switch(number){
        case 0:
            section.forEach(element => {
                element.style.transform=`translate(${-number*100}%)`
            });
            lastClikedCategorie.id=''
            
            e.target.id="cliked"
            lastClikedCategorie=e.target
        break;
        case 1:
            section.forEach(element => {
                element.style.transform=`translate(${-number*100}%)`
            });
            lastClikedCategorie.id=''
            
            e.target.id="cliked"
            lastClikedCategorie=e.target
        break;

        case 2:
            section.forEach(element => {
                element.style.transform=`translate(${-number*100}%)`
            });
            lastClikedCategorie.id=''
            e.target.id="cliked"
            lastClikedCategorie=e.target
        break;
        case 3:
            section.forEach(element => {
                element.style.transform=`translate(${-number*100}%)`
            });
            lastClikedCategorie.id=''
            e.target.id="cliked"
            lastClikedCategorie=e.target
        break;
    }
})


console.log("hello")