
const API = `https://fakestoreapi.com/products`;
const elCards = document.querySelector(".cards");

function ShowData(data){
    data.forEach(item => {
        elCards.innerHTML += `
        <div class="card">
            <img src="${item.image}" alt="" class="card_img">
            <h1 class="card_title">${item.title}</h1>
            //  <p class="card_text">${item.description}</p>
        </div>`
    })
}

axios.get(API)
    .then(res => ShowData(res.data))
    .catch(err => console.log(err))