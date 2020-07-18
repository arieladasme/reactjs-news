import React from 'react'
import styles from './Form.module.css'
import useSelect from './../hooks/useSelect'

const Form = ({ saveCategory }) => {
  const OPTIONS = [
    { value: 'general', label: 'General' },
    /* { value: 'business', label: 'Negocios' },
    { value: 'entertaiment', label: 'Entretenimiento' }, */
    { value: 'health', label: 'Salud' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnologia' },
  ]

  // Custom hook
  const [category, NewsSelect] = useSelect('general', OPTIONS)

  // Form Submit
  const searchNews = e => {
    e.preventDefault()

    saveCategory(category)
  }

  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={searchNews}>
          <h2 className={styles.heading}>Noticias por categoria</h2>
          <NewsSelect />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles['btn-block']} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
