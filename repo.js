const Repo = require('ipfs-repo')
const repo = new Repo('repo')

repo.init({ cool: 'config' }, (err) => {
  if (err) {
    throw err
  }

  repo.open((err) => {
    if (err) {
      throw err
    }
    console.log('repo is ready')
  })
})