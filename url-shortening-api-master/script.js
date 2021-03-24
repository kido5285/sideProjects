
function requestData(destination) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', apikey: '3e282b994d6d41e98ac60fd0f15e4aa4'},
        body: JSON.stringify({destination})
      };
      
      fetch('https://api.rebrandly.com/v1/links', options)
        .then(response => response.json())
        .then(data => console.log(data.shortUrl))
        .catch(err => console.error(err));
}