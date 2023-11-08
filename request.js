let request = new XMLHttpRequest()

request.open('GET', 'https://js-trainin.vercel.app/data.json')  
request.onload = () => {
    let data = JSON.parse(request.responseText)
    console.log(data[0])
}

request.send()