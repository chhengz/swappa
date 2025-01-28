import React from 'react'
import { Link } from 'react-router-dom'
import {links, navLinks} from './index'
import { Logo, LogoWithText } from '../../assets/images'


const styleImage = {
  width: '20%'
}




const Navbar = () => {
  return (
    // <nav>

    //     <ul>

    //         {
    //             links.map((link, index) => {
    //                 return (
    //                     <li key={index}>
    //                         <Link to={link.path}>{link.label}

    //                             {/* {

    //                             (link.isDropdown) => (
    //                                 <ul>
    //                                     <li>Category 1</li>
    //                                     <li>Category 2</li>
    //                                     <li>Category 3</li>
    //                                 </ul>
    //                             )



    //                         } */}
    //                         </Link>
    //                     </li>
    //                 )
    //             })
    //         }

    //     </ul>

    // </nav>

    <>

      <nav className="navbar makara navbar-expand-lg bg-success">
        <div className="container  gap-3">
          <img src={LogoWithText} style={styleImage} />



          <form className="container">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Find a good deal" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
          </form>

          <div className="containter">
            <ul className="navbar-nav m-5" style={{ fontSize: 20 + 'px' }}>

              {
                navLinks.map((link, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <Link to={link.path} className={link.className}>{link.label}</Link>
                    </li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-danger ">
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