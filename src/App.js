import { Switch, Route } from 'react-router-dom'
import { withTheme, Global, css } from '@emotion/react'
import { Flex } from 'rebass'
import HomePage from './pages/HomePage'
import ActionPage from './pages/ActionPage'
import Adventure from './pages/AdventurePage'
import Comedy from './pages/ComedyPage'
import MoviesPage from './pages/MoviesPage'

const App = withTheme(({ theme }) => {
  return (
    <Flex sx={{ position: 'relative' }}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/accion' component={ActionPage} />
        <Route exact path='/aventura' component={Adventure} />
        <Route exact path='/comedia' component={Comedy} />
        <Route exact path='/movies' component={MoviesPage} />
      </Switch>

      <Global
        styles={
          css`
            body {
              background-color: rgba(189, 204, 212, 0.05);
            }
            
            body::-webkit-scrollbar {
              display: block;
              background: #F6F6F6;
              width: 8px
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 8px;
            }

            body::-webkit-scrollbar-thumb:hover{
              background: #aabbf2;
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          `
        }
      />
    </Flex>
  )
})

export default App
