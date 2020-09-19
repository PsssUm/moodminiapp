import React from 'react';
import back from '../resources/icons/back.svg'

class NavbarBack extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
      
    }
   
    render() {
        return (
            <div className="navbar">
                <p id="navbarTitle" className="navbar_title">{this.props.title}</p>
                {this.props.back != undefined && <img onClick={() => {this.props.onBack(this.props.back)}} className="back_icon" src={back}/>}
            </div>
        );
    }
}
export default NavbarBack;