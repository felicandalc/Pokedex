import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../imgs/spinner.gif'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [imageUrl, setImageUrl]   = useState(null)
  const [name, setName]           = useState(null)
  const [index, setIndex]         = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setImageUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`)
    setIndex(props.index)
    setName(props.name)
  }, [])

  return (
    <div className="col-6 col-sm-3 pb-4">
      <Link to={`/pokemon/${index}`} >

        <div className="Pokemon">
          { isLoading ?
            <img className="Pokemon__img" src={Spinner} alt="Spinner" width="100%"></img> :
            null
          }
          <img className="Pokemon__img" 
               src={imageUrl} 
               alt="Pokemon" 
               onLoad={ () => setIsLoading(false)}
               style={ isLoading ? { display: 'none' } : { display: 'inline-block' } } />
          <div className="Pokemon__text">
              <p className="Pokemon__text__name"> {name} </p>
              <p className="Pokemon__text__index"> {`#${index}`} </p>
          </div>
        </div>

      </Link>
    </div>
  )
}