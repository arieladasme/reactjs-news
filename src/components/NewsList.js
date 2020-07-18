import React from 'react'
import News from './News'

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map(news => (
        <News key={news.url} news={news} />
      ))}
    </div>
  )
}

export default NewsList
