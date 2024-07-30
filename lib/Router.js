class Router {

  constructor() {

  }

  route(messageObject, data) {
    let dataSplit = data.split('_');
    let controller = dataSplit[0];
    let action = dataSplit[1];


  }


}

module.exports = Router;