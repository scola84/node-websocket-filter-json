'use strict';

class Filter {
  receive(message) {
    return Promise.resolve(
      message.setBody(
        JSON.parse(message.getBody())
      )
    );
  }

  send(message) {
    return Promise.resolve(
      message.setBody(
        JSON.stringify(message.getBody())
      )
    );
  }
}

module.exports = Filter;
