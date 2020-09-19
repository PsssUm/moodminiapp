import React from 'react';
import dropdown_blue from '../../resources/icons/dropdown_blue.svg'
import error from '../../resources/icons/error.svg'
class GrayBtnMood extends React.Component {
   
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
                    <p style={this.props.leftIcon ? {} : {marginLeft : '10px'}} className={this.props.pickedMood != -1 ? "blue_item_text" : "gray_item_text"}>{(this.props.pickedMood == -1 ? "Настроение" : this.props.pickedMood == 0 ? "Хорошее" : this.props.pickedMood == 1 ? "Скверное" : this.props.pickedMood == 2 ? "Энергичное" : "Умиротворённое")}</p>
                   <img className="arrow_gray_item" src={(this.props.pickedMood == -1 || this.props.pickedMood == undefined)? this.props.rightIcon : dropdown_blue}/>
                </div>
            </div>
        );
    }
}
export default GrayBtnMood;