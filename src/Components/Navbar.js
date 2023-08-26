import React from 'react'
import PropTypes from 'prop-types'
/* import{Link} from 'react-router-dom' */

///Props As a property to pass the values in varibale and use the value as a props to the custom components. example agar tuc navnar nu kise hor project ch use krna hai ta osda content change krna hovega ta poora code thodi change karoge as a props ch osdi value change kar davo ge.
////apne functional component de ander kde v props nu chnage ni kroge props the value jo pass krti function de ander ohi rhegi haa text change ho skda hai.


///proptypes mnz props the type konsi hove gi agar string mentioned kiti hai ta string hi bheja ge props ch .
///propstypes the need es lai pai agar apa proptye nhi dsde ta ki wari glti nl apa to  string the jagha number pass ho jnda ta propstype error show krega ki string bhejo.
////isRequired mnx required krna jruri hai empty ni rkh skde.
const Navbar = (props) => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">{props.Abouttext}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary  " type="submit">Search</button>
        </form> */}

        <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
       <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
    </>
  )
}

 
Navbar.propTypes ={
  title:PropTypes.string.isRequired,
  Abouttext:PropTypes.string
} 

Navbar.defaultProps={
  title:'set title props',
  Abouttext:"set about heer"
}
export default Navbar

