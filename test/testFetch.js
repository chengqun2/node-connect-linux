const fetchData = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //do something
            console.log(data)
        })
        .catch(error => console.error('Error:', error));
}

fetchData('https://jsonplaceholder.typicode.com/users/1');