import React from 'react';
import '../../resources/styles/news.css'
import mood_happy from '../../resources/icons/mood_happy.svg'
import dropdown_blue from '../../resources/icons/dropdown_blue.svg'
import BottomSheetDialog from './BottomSheetDialog';
import { getMoodIcon, getMoodTitle } from '../../utils/Utils';
class MapFilterDropDown extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
   
    render() {
        return (
            <div onClick={() => this.props.toogleBottomSheet()} className="map_dropdown">
                <img className="map_dropdown_icon" src={getMoodIcon(this.props.filterMood)}/>
                <p className="map_dropdow_title">{getMoodTitle(this.props.filterMood)}</p>
                <img className="map_dropdown_arrow" src={dropdown_blue}/>
                
            </div>
        );
    }
}
export default MapFilterDropDown;