import * as React from 'react'
import { A } from '~/components/Typography'
import Grid from '~/components/Grid'
import Byline from '../HNPost/Byline'
import { HNPost } from '~/pages/hn'

interface Props {
  post: HNPost
}

export const PostListItem = React.memo((props: Props) => {
  const { post } = props

  const cleanUrl = post.domain
    ? `${post.url}?ref=brianlovin.com`
    : `/hn/${post.url.split('=')[1]}`

  return (
    <Grid gap={4}>
      <A href={cleanUrl} target="_blank" rel="noopener noreferrer">
        {post.title}
      </A>

      <Byline post={post} />
    </Grid>
  )
})
