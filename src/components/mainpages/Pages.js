import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../headers/Header'
import NewSinhalaHodiya from './Other/Aksharamalawa/NewSinhalaHodiya'


import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)


    return (
        <Switch>
            <Route path="/smart-alphabet/" exact component={NewSinhalaHodiya} />
        </Switch>
    )
}

export default Pages
