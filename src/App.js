import React from 'react'
import CurrencyList from './containers/CurrencyList'
import Button from './containers/Button'
import ArticleList from './containers/ArticleList'

const App = () => (
  <div className="container">
    <CurrencyList />
    <Button />
    <ArticleList />
  </div>
)

export default App;
