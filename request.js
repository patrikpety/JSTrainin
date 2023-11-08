let request = new XMLHttpRequest()

request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')  
request.onload = () => {
    let data = JSON.parse(request.responseText)
    console.log(data[0])
}

request.send()