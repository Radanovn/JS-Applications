const catches = (function() {
  const baseUrl = 'https://fisher-game.firebaseio.com/catches/';

  const get = data => {
    return fetch(baseUrl + '.json').then(r => r.json());
  };

  const post = data => {
    return fetch(baseUrl + '.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json());
  };

  const put = data => {};

  const del = id => {
      return fetch(baseUrl + `${id}.json`, {
          method: "DELETE"
      }).catch(console.error);
      
  };

  return {
    get,
    post,
    put,
    del
  };
})();
