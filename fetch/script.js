function getdata() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
        .then((json) => console.log(json))
    .catch((err) => console.log(err));

}

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'mega',
            body: 'wicky',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((err) => console.log(err));
    
}