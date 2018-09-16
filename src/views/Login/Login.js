import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "assets/img/logo_bankta.png";

class Login extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="leftlogo"><Link to="/dashboard"><img src={logo} alt="logo" className="img-responsive"/></Link></div>
            <div className="leftmenu">
              <ul>
                <li><Link to="/dashboard">Personal</Link></li>
                <li><Link to="/dashboard">Business</Link></li>
              </ul>
            </div>
            <div className="rightmenuwsearch">
              <ul>
                <li><Link to="/dashboard">About Us</Link></li>
                <li><Link to="/dashboard">Support</Link></li>
                <li className="current"><a href="#">Log In</a></li>
                <li id="search"><a href="javascript:void(0);"><i className="fa fa-search"/></a>
                </li>
              </ul>
              <div id="searchtoares">
                <form action="#">
                  <input name type="text" placeholder="Write to Search..." className="form-control serchbox"/>
                  <button type="submit" className="form-control btn btn-primary searchbtn"><i className="fa fa-search"/></button>
                </form>
              </div>
            </div>
          </div>
        </header>
        <div className="clearfix"/>
        <section className="baneerhomepage" style={{backgroundImage: 'url(images/q1015739-conshp-area1-ethisphere-desktop.png)'}}>
          <div className="container">
            <div className="innerbanner">
              <div className="bannertextleft">
                <div className="bantxt bannertxt1">Safety and Security of the US Dollar</div>
                <div className="bantxt bannertxt2">Flexibility and Anonymity of Cryptocurrency</div>
                <div className="bantxt bannertxt3">Ease of Paypal</div>
              </div>
              <div className="bannerformright">
                
                  <h2><span>Log In</span></h2>
                  <div className="clearfix"/>
                  <div className="whydologin">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that.
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="formfieldtxt">Account Type</label>
                      <select className="form-control formattrlg" name>
                        <option>Online Banking</option>
                        <option>Online Investing</option>
                        <option>Mortgage Account</option>
                        <option>TrustNow Essentials</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="formfieldtxt">Personal ID</label>
                      <input name type="text" className="formattrlg form-control" placeholder="eg. UK5800660"/>
                    </div>
                    <div className="col-md-12">
                      <input name type="checkbox" defaultValue className="lgcheck"/> <label className="remme">Remember my ID</label>
                    </div>
                    <div className="col-md-12">
                      <button className="lgbtnhome" type="submit"><Link to="/dashboard">Login</Link></button>
                    </div>
                    <div className="col-md-12">
                      <label className="ancorleft"><a href="#">Forgot ID?</a></label>
                      <label className="ancorright"><a href="#"> New user? Setup online access</a></label>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login