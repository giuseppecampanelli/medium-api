const axios = require('axios')
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/'

function handleError(publication) {
  return {
    status: "error",
    message: `Publication '${publication}' does not exist.`
  }
}

module.exports = {
  getPublication: async function (publication) {
    if (typeof publication !== "string") throw new TypeError("publication must be of type string")
  
    return await axios.get(url + publication).then(res => {
      return res.data.feed
    }).catch(() => handleError(publication))
  },
  getRecentPosts: async function (publication) {
    if (typeof publication !== "string") throw new TypeError("publication must be of type string")
  
    return await axios.get(url + publication).then(res => {
      return res.data.items
    }).catch(() => handleError(publication))
  },
  getRecentPost: async function (publication, post) {
    if (typeof publication !== "string") throw new TypeError("publication must be of type string")
    if (!Number.isInteger(post)) throw new TypeError("post must be of type integer")
    if (post < 0 || post >= 10) throw new TypeError("post must be between 0 and 9 inclusively")
  
    return await axios.get(url + publication).then(res => {
      if (res.data.items.length > post) {
        return res.data.items[post]
      } else {
        return {
          status: "error",
          message: `Recent post ${post} does not exist, ${publication} only has ${res.data.items} posts.`
        }
      }
    }).catch(() => handleError(publication))
  }
}
