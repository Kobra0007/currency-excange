import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { episodeFetchById } from '../../redux/actions/episode'
import { getLoading, getEpisode } from '../../redux/selectors/episode'

import './episode.scss'

export default function Episode(props) {
  const {
    match: {
      params: { episodeId },
    },
  } = props

  const isLoading = useSelector(getLoading)
  const episode = useSelector(getEpisode)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(episodeFetchById({ episodeId }))
  }, [dispatch, episodeId])

  return (
    <div className="l-container-episode">
      {!isLoading ? (
        <>
          <header className="l-container-episode__header">
            <h1>{episode.name}</h1>
          </header>
          <main className="l-container-episode__main">
            <section className="c-info-episode">
              <figure className="c-image-episode">
                <img src={episode.image?.medium} alt={episode.name} />
              </figure>
              <div
                className="c-summary-episode"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: episode.summary }}
              />
            </section>
          </main>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

Episode.defaultProps = {
  match: {},
}

Episode.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      episodeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
}
