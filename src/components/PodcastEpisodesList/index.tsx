import React from 'react'
import { A, LineClamp, Small } from '~/components/Typography'
import { Episode } from '~/graphql/types.generated'
import Grid from '../Grid'
import { format } from 'timeago.js'

interface Props {
  episodes: Episode[]
}

export default function PodcastEpisodesList({ episodes }: Props) {
  return (
    <Grid gap={16}>
      {episodes.map((ep) => (
        <Grid gap={4} key={ep.id}>
          <A
            target="_blank"
            rel="noopener noreferrer"
            href={`https://spec.fm/podcasts/design-details/${ep.id}`}
          >
            {ep.title}
          </A>
          <LineClamp lines={2}>{ep.description}</LineClamp>
          <Small>Released {format(ep.published_at)}</Small>
        </Grid>
      ))}
    </Grid>
  )
}
