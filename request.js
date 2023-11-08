let jsonTraining = document.querySelector('#jsonTraining')
let dataButton = jsonTraining.querySelectorAll('button')
let = jsonTraining.querySelectorAll('info')


let request = new XMLHttpRequest()

request.open('GET', 'https://js-trainin.vercel.app/data.json')  
request.onload = () => {
    let data = JSON.parse(request.responseText)
    console.log(data[0])
    showData(data)
}

request.send()

const showData = (data) => {
    dataButton.forEach((button) => {
        button.addEventListener('click', () => {
           console.log('clicked')
        })
    })
}