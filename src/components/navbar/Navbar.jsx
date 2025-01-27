import React from 'react'
import { Link } from 'react-router-dom'
import links from './index'
import {Logo , LogoWithText} from '../../assets/images'


const styleImage = {
    width: '20%'
}

const navLinks = [
    {label: '1', path: '#', className: 'fa-solid fa-circle-question' },
    {label: '2', path: '#', className: 'fa-solid fa-user' },
    {label: '3', path: '#', className: 'fa-solid fa-cart-shopping' },
]


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

    <nav className="navbar makara navbar-expand-lg bg-success">
        <div className="container  gap-3">
            <img src={Logo} style={styleImage} />

            <form className="container">
              <div className="input-group">
                <input type="text" className="form-control"  placeholder="Find a good deal"  aria-label="Username"  aria-describedby="basic-addon1" />
              </div>
            </form>

          <div className="containter">
            <ul className="navbar-nav m-5" style={{fontSize: 20 + 'px'}}>

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

  )
}

export default Navbar