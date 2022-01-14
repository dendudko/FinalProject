const axios = require('axios').default;
axios.all([
    axios.get('https://api.github.com/users/dendudko')
])
    .then(response => {
        document.getElementById('ax').innerText='А вот пример использования axios \nLogin: '+ response[0].data.login+'\nDate created: '+ response[0].data.created_at;
    });