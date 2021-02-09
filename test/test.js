const expect = require('chai').expect
const mediumapi = require("..")

describe('profile.js tests', () => {
  it('fetches profile info', () => {
    return mediumapi.profile.getProfile('giuseppecampanelli').then(res => {
      expect(res).to.have.property('title')
    })
  })

  it('returns error on inexistent profile', () => {
    return mediumapi.profile.getProfile('giuseppecampanellifake').then(res => {
      expect(res).to.have.property('status')
    })
  })

  it('fetches recent post', () => {
    return mediumapi.profile.getRecentPosts('giuseppecampanelli').then(res => {
      expect(res).to.have.lengthOf(10)
    })
  })

  it('fetches most recent post', () => {
    return mediumapi.profile.getRecentPost('giuseppecampanelli', 0).then(res => {
      expect(res).to.have.property('title')
    })
  })
})

describe('publication.js tests', () => {
  it('fetches publication info', () => {
    return mediumapi.publication.getPublication('javascript-in-plain-english').then(res => {
      expect(res).to.have.property('title')
    })
  })

  it('returns error on inexistent publication', () => {
    return mediumapi.publication.getPublication('cminusminus-in-plain-english').then(res => {
      expect(res).to.have.property('status')
    })
  })

  it('fetches recent post', () => {
    return mediumapi.publication.getRecentPosts('javascript-in-plain-english').then(res => {
      expect(res).to.have.lengthOf(10)
    })
  })

  it('fetches most recent post', () => {
    return mediumapi.publication.getRecentPost('javascript-in-plain-english', 0).then(res => {
      expect(res).to.have.property('title')
    })
  })
})

describe('topic.js tests', () => {
  it('fetches topic info', () => {
    return mediumapi.topic.getTopic('javascript').then(res => {
      expect(res).to.have.property('title')
    })
  })

  it('returns error on inexistent topic', () => {
    return mediumapi.topic.getTopic('cminusminus').then(res => {
      expect(res).to.have.property('status')
    })
  })

  it('fetches recent post', () => {
    return mediumapi.topic.getRecentPosts('javascript').then(res => {
      expect(res).to.have.lengthOf(10)
    })
  })

  it('fetches most recent post', () => {
    return mediumapi.topic.getRecentPost('javascript', 0).then(res => {
      expect(res).to.have.property('title')
    })
  })
})
