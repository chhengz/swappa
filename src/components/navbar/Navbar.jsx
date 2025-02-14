import React from 'react'
import { Link } from 'react-router-dom'
import { CircleHelp, CircleUserRound, ShoppingCart } from 'lucide-react'
import { links } from './index'
import { Logo, LogoWithText } from '../../assets/images'

const navLinks = [
  { label: <CircleHelp />,        path: '/help', },
  { label: <CircleUserRound />,   path: '/login', },
  { label: <ShoppingCart />,      path: '/shop', },
]



const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success" style={{ width: 100 + `%`, height: 80 + `px`, position: `fixed`, top: 0+`px`, zIndex: 1000 }}>
        <div className="container  gap-3">

          <Link to="/" style={{ width: 25 + `%` }} >
            <img src={LogoWithText} style={{ width: 100 + `%` }} />
          </Link>
          <form className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Find a good deal" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </form>
          <div className="containter">
            <ul className="navbar-nav m-5" style={{ fontSize: 20 + 'px' }}>
              {
                navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <Link to={link.path} className="nav-link position-relative text-light">{link.label}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-danger " style={{marginTop: 80 + `px`}}>
        <div className="container">
          {
            links.map((link, index) => {
              return (
                <div key={index} className="dropdown">
                  <button className="btn text-light btn-default dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {link.label}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {
                      link.dropdownLists.map((list, index) => {
                        return (
                          <li key={index}><Link to={list.path} className="dropdown-item">{list.label}</Link></li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </nav>
    </>
  )
}

export default Navbar