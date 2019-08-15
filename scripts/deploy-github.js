const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'develop',
    repo: 'https://github.com/Fennec-Creative/gatsby_portfolio.git',
    message: 'THIS DID A THING',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
