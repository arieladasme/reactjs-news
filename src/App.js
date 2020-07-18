import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import NewsList from './components/NewsList'

function App() {
  // Category and news
  const [category, saveCategory] = useState('')
  const [news, saveNews] = useState([])

  useEffect(() => {
    const queryAPI = async () => {
      const apiKey = 'c1543686c454466fa5bb1899502677f4'
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${apiKey}`

      const response = await fetch(url)
      const news = await response.json()
      saveNews(news.articles)
    }
    queryAPI()
  }, [category])

  return (
    <Fragment>
      <Header title="Buscador de noticias" />
      <div className="container white">
        <Form saveCategory={saveCategory} />
        <NewsList news={news} />
      </div>
    </Fragment>
  )
}

export default App
