import React from 'react';
import back from '../resources/icons/navbar_close.svg'
import navbar_check_disabled from '../resources/icons/navbar_check_disabled.svg'
import navbar_check_active from '../resources/icons/navbar_check_active.svg'
class Navbar extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
      
    }

   
    render() {
        return (
            <div className="navbar">
                <p id="navbarTitle" className="navbar_title">{this.props.title}</p>
                <img onClick={() => {this.props.onBack(this.props.back)}} className="back_icon" src={back}/>
                {/* <img src={this.props.isReady ? navbar_check_active : navbar_check_disabled} onClick={() => {}} className="navbar_right_icon"/> */}
            </div>
        );
    }
}
export default Navbar;