var myName = "Richard Odetunde";
console.log(myName);
   

function changeDay(){
    const dateElement = document.getElementById('dateText');
    const textContent = dateElement.innerHTML = 'Today is Wednesday'; 
    dateElement.style.fontSize = "20px";  
    dateElement.style.color = "gold";
    dateElement.style.backgroundColor = "blue";
}

function signUp(){
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    
    console.log(firstName)
    console.log(lastName)
}

