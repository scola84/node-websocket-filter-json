'use strict';

class Filter {
  decode(message) {
    return Promise.resolve(
      message.setBody(
        JSON.parse(message.getBody())
      )
    );
  }

  encode(message) {
    return Promise.resolve(
      message.setBody(
        JSON.stringify(message.getBody())
      )
    );
  }
}

module.exports = Filter;
