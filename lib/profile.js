const axios = require('axios')
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@'

function handleError(username) {
  return {
    status: "error",
    message: `User '@${username}' does not exist.`
  }
}

module.exports = {
  getProfile: async function (username) {
    if (typeof username !== "string") throw new TypeError("username must be of type string")
    
    if (username.startsWith('@')) username = username.substr(1)
  
    return await axios.get(url + username).then(res => {
      return res.data.feed
    }).catch(() => handleError(username))
  },
  getRecentPosts: async function (username) {
    if (typeof username !== "string") throw new TypeError("username must be of type string")
    
    if (username.startsWith('@')) username = username.substr(1)
  
    return await axios.get(url + username).then(res => {
      return res.data.items
    }).catch(() => handleError(error, username))
  },
  getRecentPost: async function (username, post) {
    if (typeof username !== "string") throw new TypeError("username must be of type string")
    if (!Number.isInteger(post)) throw new TypeError("post must be of type integer")
    if (post < 0 || post >= 10) throw new TypeError("post must be between 0 and 9 inclusively")
  
    if (username.startsWith('@')) username = username.substr(1)
  
    return await axios.get(url + username).then(res => {
      if (res.data.items.length > post) {
        return res.data.items[post]
      } else {
        return {
          status: "error",
          message: `Recent post ${post} does not exist, '@${username}' only has ${res.data.items} posts.`
        }
      }
    }).catch(() => handleError(username))
  }
}
