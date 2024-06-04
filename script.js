const button = document.getElementById('button');
const result = document.getElementById('result');
const url = 'https://candaan-api.vercel.app/api/text/random';

async function getJoke(data) {
    const response = await fetch(url);
    const res = await response.json();


    result.innerHTML = `${res.data}`
}

button.addEventListener('click', function(e) {
    // e.preventDefault();
    
    getJoke();
})