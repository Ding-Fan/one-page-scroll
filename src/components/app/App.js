import React from 'react'

import '@fortawesome/fontawesome-free/css/all.css'

import TopBar from '../top-bar/TopBar'

import Category from '~/src/components/category/Category'
import RollFilm from '~/src/components/roll-film/RollFilm'
import { useDrawer } from 'realayers'

import { Switch, Route, Link, useParams } from 'react-router-dom'

import logic from '~/src/logic/index'
import { useActions, useValues } from 'kea'

function App() {
  let { showing } = useParams()
  console.log('App here')
  const { toggleOpen, Drawer } = useDrawer()

  return (
    <Switch>
      <Route path="/">
        <div className="container">
          {/* https://github.com/reaviz/realayers#drawer */}
          {/* desktop drawer */}
          <Drawer
            showCloseButton={false}
            position={'end'}
            className="desktop-drawer"
            size={'15%'}
          >
            <div
              onClick={() => {
                toggleOpen()
              }}
              className="close-drawer"
            >
              关闭
            </div>

            <Category />
          </Drawer>
          {/* mobile drawer */}
          {/* <Drawer
            showCloseButton={false}
            className='mobile-drawer'
            size={"70%"}
          >
            <div>
              <div
                onClick={() => {
                  toggleOpen();
                }}
                className='close-drawer'
              >
                关闭
              </div>
              {getCategory()}
            </div>
          </Drawer> */}
          <TopBar openDrawer={toggleOpen} />
          <RollFilm />
        </div>
      </Route>
    </Switch>
  )
}

export default App
