export default class ExchangeNow{
  static getNorway(){
    return fetch(`https://v6.exchangerate-api.com/v6/8662ad1c69de4e3302afc3c1/latest/USD`)
      .then(function(response){
        if(!response.ok){
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error){
        return error;
      });

  }

  // static getRwanda(){
  //   return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
  //   .then(function(response){
  //     if(!response.ok){
  //       throw Error(response.statusText);
  //     }
  //     return response.json();
  //   })
  //   .catch(function(error){
  //     return error;
  //   });
  // }

  // more countries should go below
}