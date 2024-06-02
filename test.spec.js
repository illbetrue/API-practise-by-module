const axios = require("axios");

describe('API test suit', () => {

  it('GET post/1', async() => {
    const response = await axios({
      url: 'https://api.unsplash.com/',
      method: 'get'
    });
    console.log(response.data);
    console.log(response.status);
  });
});