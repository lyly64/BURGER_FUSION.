const inscriptionBtn=document.getElementById('inscription')
const subEmail=document.getElementById('sub-email') 
const popUp=document.getElementById('popUp')
const mapTitle=document.getElementById('map-title')
const messageTitle=document.getElementById('message-title')
const titleIndicator=document.getElementById('title-indicator')
const silde= document.getElementById('slide')
const map=document.getElementById('map')
const locauxIndicator=document.getElementById('locaux-indicator')
const fullNameInput=document.getElementById('full-name-input')
const emailInput=document.getElementById('email-input')
const questionInput=document.getElementById('question-input')
const subBtn=document.getElementById('sub-btn')
let tizi="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.802734822477!2d4.048339510980264!3d36.70327793300731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc80d776da223%3A0x3557a25f162ee844!2sRue%20Fr%C3%A8res%20Ouamrane%2C%20Tizi%20Ouzou!5e0!3m2!1sfr!2sdz!4v1715105363642!5m2!1sfr!2sdz"
let alger="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.369496320252!2d3.1903090746286424!3d36.71368627257354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5194748fec7d%3A0xd1d9abe8d3f0b518!2sRte%20de%20Dar%20El%20Beida%2C%20Bab%20Ezzouar!5e0!3m2!1sfr!2sdz!4v1715124464477!5m2!1sfr!2sdz"
let oran="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.45074088312!2d-0.6536793264046308!3d35.6905241688913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e891caaee433d%3A0xd6e4b7eeef6f2f0c!2sN2A%2C%20Oran!5e0!3m2!1sfr!2sdz!4v1715124780771!5m2!1sfr!2sdz" 

let lastcliked=document.querySelector('.tizi')

inscriptionBtn.addEventListener('click',()=>{
    if(subEmail.value!=""){
        subEmail.value=""
        popUp.style.display="block"
        setTimeout(()=>{
            popUp.style.display='none'
        },1500)
    }
    
})

mapTitle.addEventListener("click",()=>{
    mapTitle.style.color='rgb(29, 77, 53)'
    messageTitle.style.color="#a1a1a1"
    titleIndicator.style.left='25%'
    silde.style.transform='translate(0)'
})

messageTitle.addEventListener("click",()=>{
    messageTitle.style.color='rgb(29, 77, 53)'
    mapTitle.style.color="#a1a1a1"
    titleIndicator.style.left='75%'
    silde.style.transform='translate(-50%)'
})


document.addEventListener("click",(e)=>{
    let city=e.target.className
    console.log(city)
    switch(city){
        case "tizi":
            locauxIndicator.style.left="16.5%"
            
            lastcliked.id=""
            e.target.id='cliked'
            lastcliked=e.target
            map.src=tizi
            
        break

        case "alger":
            locauxIndicator.style.left="50%"
            console.log(lastcliked)
            lastcliked.id=""
            e.target.id='cliked'
            lastcliked=e.target
            map.src=alger
            
        break

        case "oran":
            locauxIndicator.style.left="82.5%"
            
            lastcliked.id=""
            e.target.id='cliked'
            lastcliked=e.target
            map.src=oran
            
        break
    }
})

function checkFullName(fullName){
    if(fullName=='' || fullName==NaN){
        return false
    }else{
        return true
    }

}

function checkQuestion(question){
    if(question=='' || question==NaN){
       return false
    }else{
        return true
    }
}

function checkEmail(email){
    if(email=='' || email==NaN){
       return false
    }else{
        return true
    }
}

function validEmail(email){
    let re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())

}

function handelSubmit(){
    let fullName=fullNameInput.value
    let email=emailInput.value
    let question=questionInput.value

    if(!checkFullName(fullName) & checkQuestion(question) & checkEmail(email)){
        alert('pleas enter your name ')
    }else if(checkFullName(fullName) & !checkQuestion(question) & checkEmail(email)){
        alert('pleas type a question')
    }else if(checkFullName(fullName) & checkQuestion(question) & !checkEmail(email)){
        alert('pleas enter an email')
    }

    if(!checkFullName(fullName) & !checkQuestion(question) & checkEmail(email)){
        alert('plear enter your information to submit your question')
    }else if(checkFullName(fullName) & !checkQuestion(question) & !checkEmail(email)){
        alert('plear enter your information to sybmit your question')
    }else if(!checkFullName(fullName) & checkQuestion(question) & !checkEmail(email)){
        alert('plear enter your information to sybmit your question')
    }else if(!checkFullName(fullName) & !checkQuestion(question) & !checkEmail(email)){
        alert('plear enter your information to sybmit your question')
    }

    if(checkFullName(fullName) & checkQuestion(question) & checkEmail(email)){
        if(validEmail(email)){
            alert('your question has been sent! our team will reply as soon as posible')
              
            fullNameInput.value=""
            emailInput.value=''
            questionInput.value=''
        }else{
          
            alert('pleas enter a valid email')
        }
    }
   
}

subBtn.addEventListener("click",()=>{
    handelSubmit()
})