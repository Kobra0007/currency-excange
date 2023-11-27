import { API } from '../../../utils/urls'

const makeApiCall = async (url, params) => {
  const request = new Request(url, {
    ...params,
  })

  const result = await fetch(request)
  let data
  try {
    data = await result.json()
  } catch (error) {
    // EMPTY RESPONSE BODY CAUSE ERROR IN result.json();
    data = {}
  }

  if (result && result.status >= 500) {
    const errorObj = { error: `${result.status} ${result.statusText}` }
    throw errorObj
  }

  if (
    result &&
    result.status !== 200 &&
    result.status !== 201 &&
    result.status !== 204
  ) {
    throw data
  }

  return data
}
export const getShowById = async ({ showId }) => {
  await makeApiCall(`${API.show.get(showId)}`)
}

export const getEpisodes = async ({ showId }) => {
  await makeApiCall(`${API.episode.getAll(showId)}`)
}

export const getEpisodeById = async ({ episodeId }) => {
  await makeApiCall(`${API.episode.get(episodeId)}`)
}
