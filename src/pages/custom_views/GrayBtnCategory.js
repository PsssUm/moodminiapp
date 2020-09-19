import React from 'react';
import dropdown_blue from '../../resources/icons/dropdown_blue.svg'
import error from '../../resources/icons/error.svg'
class GrayBtnCategory extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
      
    }
    onClick = () => {
        if (this.props.toogleMoodPicker){
            this.props.toogleMoodPicker()
        }
        
    }
    
    render() {
        return (
            <div  onClick={this.onClick} style={this.props.title == "Сейчас" ? {paddingRight : '12px'} : {}} className="gray_item_cont hover">
                <div style={(this.props.pickedMood == -1 || this.props.pickedMood == undefined) ? {} : {border: "1px solid #4986CC"}} className="gray_item">
                    {this.props.leftIcon && <img className="gray_item_icon" src={this.props.leftIcon}/>}
                    <p style={this.props.leftIcon ? {} : {marginLeft : '10px'}} className={this.props.pickedMood != undefined ? "blue_item_text" : "gray_item_text"}>{this.props.pickedMood == undefined ? "Тематика" : this.props.pickedMood.title}</p>
                   <img className="arrow_gray_item" src={(this.props.pickedMood == -1 || this.props.pickedMood == undefined)? this.props.rightIcon : dropdown_blue}/>
                </div>
            </div>
        );
    }
}
export default GrayBtnCategory;