///<reference path="../../../typings/index.d.ts"/>
import createFetcher from '@pnpm/git-fetcher'
import test = require('tape')
import tempy = require('tempy')

test('fetch', async t => {
  const fetch = createFetcher().git
  const fetchResult = await fetch({
    commit: 'c9b30e71d704cd30fa71f2edd1ecc7dcc4985493',
    repo: 'https://github.com/kevva/is-positive.git',
  }, tempy.directory())
  t.ok(fetchResult.tempLocation)
  t.ok(fetchResult.filesIndex['package.json'])
  t.end()
})
