import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import configureStore from './store'
import { HomePageContainer } from './pages/home'
import { UploadPageContainer } from './pages/upload'
import Header from './components/header'

const { store, history } = configureStore()
const EntryPoint: FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePageContainer} />
          <Route exact path="/upload" component={UploadPageContainer} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default EntryPoint
