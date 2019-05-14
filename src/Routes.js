import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default routes = () => {
    return (
        <Switch>
            <Route
                component={() => <div>hello world</div>}
                path='/'/>
        </Switch>
    )
}
