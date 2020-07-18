import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h2 className={styles.heading}>Noticias por categoria</h2>
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
