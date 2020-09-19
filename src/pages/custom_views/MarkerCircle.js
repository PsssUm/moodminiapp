import React from 'react';
import dropdown_blue from '../../resources/icons/dropdown_blue.svg'
import { getRandomInt } from '../../utils/Utils';
class MarkerCircle extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
    }
 
    render() {
        return (
            <div onClick={() => this.props.onMarkerClicked(this.props.post)} style={{width : (this.props.post.width + 'px'), height : (this.props.post.width + 'px')}} className="marker_bg">
                <div className="center_marker_cont">
                    <img className="marker_icon" src={this.props.post.category.markerIcon}/>
                    {this.props.post.width > 100 && <p className="marker_title">{this.props.post.category.title}</p>}
                </div>
            </div>
        );
    }
    
}
export default MarkerCircle;