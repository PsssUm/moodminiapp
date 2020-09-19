import React from 'react';
import dropdown_blue from '../../resources/icons/dropdown_blue.svg'
import error from '../../resources/icons/error.svg'
class GrayBtnItem extends React.Component {
   
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
                    {/* {this.props.isShowMoodError && 
                    <div >
                        <div className="error_height"/>
                        <div className="error_plashka_cont">
                            <img src={error}/>
                            <p className="error_plashak_text">Это обязательная опция</p>
                        </div>
                    </div>} */}
                
                
                <div style={(this.props.pickedMood == -1 || this.props.pickedMood == undefined) ? {} : {border: "1px solid #4986CC"}} className="gray_item">
                    {this.props.leftIcon && <img className="gray_item_icon" src={this.props.leftIcon}/>}
                    <p style={this.props.leftIcon ? {} : {marginLeft : '10px'}} className="gray_item_text">{this.props.title}</p>
                   <img className="arrow_gray_item" src={(this.props.pickedMood == -1 || this.props.pickedMood == undefined)? this.props.rightIcon : dropdown_blue}/>
                </div>
            </div>
        );
    }
}
export default GrayBtnItem;