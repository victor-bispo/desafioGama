const form = document.getElementById('myForm')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let nome = document.getElementById('nome-form').value;
    let email = document.getElementById('email-form').value;    
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content-form');

    let carregado =  '<p>carregando..</p>'

    content.innerHTML = carregado
})