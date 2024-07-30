const User = require('User');

class UserRegistry {

  static instance = null;

  #userMap = new Map();

  #TIME_15_MIN = 1000 * 60 * 15;

  constructor() {
    if (!UserRegistry.instance) {
      UserRegistry.instance = this;
    }
    return UserRegistry.instance;
  }

  getUser(userId) {
    const userMap = this.#userMap;

    if (!userMap.has(userId)) {
      userMap.set(userId, {
        instance: new User(userId),
        timeout: null
      })
    }

    this.#updateTimeout(userId);
  }

  #updateTimeout(userId) {
    const user = this.#userMap.get(userId);

    clearTimeout(user.timout);
    user.timout = setInterval(this.#clearUser.bind(this), this.#TIME_15_MIN, userId);
  }

  #clearUser(userId) {
    this.#userMap.delete(userId);
  }
}

module.exports = UserRegistry;