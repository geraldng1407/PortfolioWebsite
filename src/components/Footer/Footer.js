import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__up'>
        <h2>Interested to know more?</h2>
        <p>
          If you have any opportunities, <br/> or want to know more about me, <br/> don't hesitate to contact me!
        </p>
        <button>Let's go</button>
      </div>
      <div className='footer__down'>
        <div className='footer__down__container'>
          <h1>Gerald Ng</h1>
          <h2>
            {/* He believed he could, <br /> so he did. */}
          </h2>
          <ul>
            <li>
              <a href='https://github.com/geraldng1407'>
                <span>
                  <i className='fab fa-github'></i>
                </span>
              </a>
            </li>
            {/* <li>
              <a href='#'>
                <span>
                  <i className='fab fa-gitlab'></i>
                </span>
              </a>
            </li> */}
            {/* <li>
              <a href='#'>
                <i className='fab fa-twitter '></i>
              </a>
            </li> */}
            <li>
              <a href='https://www.linkedin.com/in/nggerald/'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
            {/* <li>
              <a href='#'>
                <i className='fab fa-angellist'></i>
              </a>
            </li> */}
            <li>
              <a href='mailto:gerald.ng.2021@scis.smu.edu.sg'>
                <i className='far fa-envelope'></i>
              </a>
            </li>
          </ul>
          <p>Created with REACT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
