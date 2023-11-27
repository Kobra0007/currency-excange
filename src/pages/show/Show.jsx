import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { NAV } from '../../utils/urls'

import { showFetchById } from '../../redux/actions/show'
import { getLoading, getShow } from '../../redux/selectors/show'

import { episodesFetch } from '../../redux/actions/episode'
import {
  getLoading as getEpisodesLoading,
  getEpisodeList,
} from '../../redux/selectors/episode'

import './show.scss'

export default function Show(props) {
  const {
    match: {
      params: { showId },
    },
  } = props

  const isLoading = useSelector(getLoading)
  const show = useSelector(getShow)

  const episodes = useSelector(getEpisodeList)
  const isLoadingEpisodes = useSelector(getEpisodesLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showFetchById({ showId }))
    dispatch(episodesFetch({ showId }))
  }, [dispatch, showId])

  return (
    <div className="l-container">
      {!isLoading ? (
        <>
          <header className="l-container__header">
            <h1>{show.name}</h1>
          </header>
          <main className="l-container__main">
            <section className="c-info">
              <figure className="c-image">
                <img src={show.image?.medium} alt={show.name} />
              </figure>
              <div
                className="c-summary"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: show.summary }}
              />
            </section>
            <section className="c-table">
              <div className="c-table__row header">
                <div className="c-table__cell">Episode </div>
                <div className="c-table__cell">Name</div>
                <div className="c-table__cell">Airdate</div>
              </div>
              {!isLoadingEpisodes ? (
                <>
                  {episodes
                    ?.sort(
                      (a, b) => new Date(b.airstamp) - new Date(a.airstamp),
                    )
                    .map((item, index) => (
                      <div
                        className="c-table__row"
                        key={`c-table-row-${index}`}
                      >
                        <div className="c-table__cell">
                          {item.season}x{item.number}
                        </div>
                        <div className="c-table__cell">
                          <Link to={NAV.episode(showId, item.id)}>
                            {item.name}
                          </Link>
                        </div>
                        <div className="c-table__cell">{item.airdate}</div>
                      </div>
                    ))}
                </>
              ) : (
                <p>Loading...</p>
              )}
            </section>
          </main>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

Show.defaultProps = {
  match: {},
}

Show.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
}
