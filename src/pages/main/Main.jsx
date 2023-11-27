import { Switch, Route, Redirect } from 'react-router-dom'
import { NAV } from '../../utils/urls'

import Show from '../show/Show'
import Episode from '../episode/Episode'

export default function Main() {
  return (
    <Switch>
      <Route exact path={NAV.empty()}>
        <Redirect to={NAV.show(6771)} />
      </Route>

      <Route exact path={NAV.show(':showId')} component={Show} />
      <Route
        exact
        path={NAV.episode(':showId', ':episodeId')}
        component={Episode}
      />

      <Route exact path="*">
        Not found
      </Route>
    </Switch>
  )
}
