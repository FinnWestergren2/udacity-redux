import React from 'react'
import { Route, Switch } from 'react-router-dom'

const routes = () => {
    return (
        <Switch>
            <Route
                component={() => <div>hello world</div>}
                path='/'/>
        </Switch>
    )
}

export default routes;
