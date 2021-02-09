const axios = require('axios')
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/topic/'

function handleError(topic) {
  return {
    status: "error",
    message: `Topic '${topic}' does not exist.`
  }
}

module.exports = {
  getTopic: async function (topic) {
    if (typeof topic !== "string") throw new TypeError("topic must be of type string")
  
    return await axios.get(url + topic).then(res => {
      return res.data.feed
    }).catch(() => handleError(topic))
  },
  getRecentPosts: async function (topic) {
    if (typeof topic !== "string") throw new TypeError("topic must be of type string")
  
    return await axios.get(url + topic).then(res => {
      return res.data.items
    }).catch(() => handleError(topic))
  },
  getRecentPost: async function (topic, post) {
    if (typeof topic !== "string") throw new TypeError("topic must be of type string")
    if (!Number.isInteger(post)) throw new TypeError("post must be of type integer")
    if (post < 0 || post >= 10) throw new TypeError("post must be between 0 and 9 inclusively")
  
    return await axios.get(url + topic).then(res => {
      if (res.data.items.length > post) {
        return res.data.items[post]
      } else {
        return {
          status: "error",
          message: `Recent post ${post} does not exist, ${topic} only has ${res.data.items} posts.`
        }
      }
    }).catch(() => handleError(topic))
  }
}
