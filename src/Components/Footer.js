import React   from 'react'

export default function Footer() {
  return (
    <div className="container d-flex justify-content-center Footer">
        <p className="Footer__text">
            Desarrollado por Felipe Candal Campos 
            <span className="Footer__text--del"> con <i className="far fa-heart"></i></span>
            <span className="Footer__text--accent"> usando un <i className="far fa-keyboard"></i></span>
        </p>
    </div>
  )
}