import React, { useState } from 'react'

const useSelect = (initialState, options) => {
  // State: custom hook
  const [state, updateState] = useState(initialState)

  const NewsSelect = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => updateState(e.target.value)}
    >
      {options.map(o => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  )

  return [state, NewsSelect]
}

export default useSelect
