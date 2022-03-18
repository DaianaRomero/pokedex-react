import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div>
        
                <p className='footer-texto'>404</p>
                <Link to="/inicio">
              <button className="btn addHero"> Ir a Inicio</button>
            </Link>

    </div>
  )
}
