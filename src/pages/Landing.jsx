import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
      <img src={logo} alt= 'jobidy' className = 'logo'></img>
      </nav>
      <div className='container page'>
        <div className="info">
          <h1>job<span> tracking </span>app</h1>
          <p>
          I'm baby bicycle rights direct trade chartreuse 90's tacos venmo. Taiyaki kombucha PBR&B woke bruh distillery. Occupy enamel pin chambray irony kitsch typewriter yuccie pok pok aesthetic palo santo tote bag live-edge tousled. Sriracha vegan heirloom, activated charcoal salvia post-ironic leggings green juice kitsch organic hoodie tofu pork belly shabby chic succulents.
          </p>
          <Link to= "/register" className='btn register-link'>Register</Link>
          <Link to= "/login" className='btn'>Login/ Demo User</Link>
        </div>
        <img src={main} alt= "job hunt" className ='img main-img'></img>
      </div>

    </Wrapper>
  )
}

export default Landing