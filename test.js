const mediumapi = require(".")

mediumapi.getRecentPosts('giuseppecampanellii').then(res => {
  console.log(res)
})