
function enviar(){
    const params = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone: document.querySelector('#phone').value,
        message: document.querySelector('#message').value
        
    }
    
    console.log(params)
    let url = "http://192.168.0.119/PROJETOS/BRST/app.php";
    
    const http = new XMLHttpRequest()
    http.open('POST', url)
    http.send(params) 
    http.onload = function() {
        alert()
    
    }
}