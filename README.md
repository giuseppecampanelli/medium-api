# Medium Node.js API

Node.js library to fetch recent Medium user posts.

## Installation

```
npm install @giuseppecampanelli/medium-api
```

## Usage

```
// require library
const medium = require('@giuseppecampanelli/medium-api')

// get most recent profile posts
medium.profile.getRecentPosts('giuseppecampanelli').then(res => {
  // handle result
})

// get most recent post from publication
medium.publication.getRecentPost('javascript-in-plain-english', 0).then(res => {
  // handle result
})
```

## Methods

### Profile

* getProfile(username)
* getRecentPosts(username)
* getRecentPost(username, post)

### Publication
* getPublication(publication)
* getRecentPosts(publication)
* getRecentPost(publication, post)

### Topic
* getTopic(topic)
* getRecentPosts(topic)
* getRecentPost(topic, post)

## License

[MIT](https://github.com/giuseppecampanelli/medium-api/blob/master/LICENSE)

