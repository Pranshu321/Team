import React from 'react'
import { Switch, Route } from "react-router-dom"
import Final from './Final'
import Form from './Form'
import Form2 from './From2'
import Matching from './Matching'
import TeamDetails from './TeamDetails'
import Team from '../data'



const App = () => {

    return (
        <>

            <Switch>
                <Route exact path="/" component={() => <Matching />} />
                <Route exact path="/Friendly" component={() => <Form />} />
                <Route exact path="/Tournament" component={() => <Form2 />} />
                <Route exact path="/TeamDetails" component={() => <TeamDetails />} />
                <Route exact path="/Final" component={() => <Final

                    TeamA={Team.TeamA}
                    TeamB={Team.TeamB}
                    type={Team.type}
                    name={Team.name}
                    start={Team.start}
                    end={Team.end}
                    location={Team.location}
                    Comments={Team.Comments}
                />} />
            </Switch>
        </>
    )
}

export default App
