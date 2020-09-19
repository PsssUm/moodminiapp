import React from 'react';
import { Textarea } from '@vkontakte/vkui';
import { PanelHeader, HorizontalScroll, Snackbar } from '@vkontakte/vkui';
import Navbar from '../panels/Navbar';
import place_16 from '../resources/icons/place_16.svg'
import cancel_20 from '../resources/icons/cancel_20.svg'
import dropdown_gray from '../resources/icons/dropdown_gray.svg'
import posting_access from '../resources/icons/posting_access.svg'
import posting_time from '../resources/icons/posting_time.svg'
import GrayBtnItem from './custom_views/GrayBtnItem';
import GrayBtnMood from './custom_views/GrayBtnMood';
import GrayBtnCategory from './custom_views/GrayBtnCategory';
import MoodPicker from './custom_views/MoodPicker';
import CategoryPicker from './custom_views/CategoryPicker';
import { getLat, getLng, getEpmtyModel } from '../utils/Utils';
class CreateNew extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            description : "",
            isShowMoodPicker : false,
            isShowCategoryPicker : false,
            pickedMood : -1,
            categoryPicked : undefined,
            isShowMoodError : false,
            isShowCategoryError : false
        }
        this.descriptionChanged = this.descriptionChanged.bind(this);
        this.onPublish = this.onPublish.bind(this);
        this.toogleMoodPicker = this.toogleMoodPicker.bind(this);
        this.onMoodChanged = this.onMoodChanged.bind(this);
        this.onCategoryPicked = this.onCategoryPicked.bind(this);
        this.toogleCategoryPicker = this.toogleCategoryPicker.bind(this);
        this.showMoodError = this.showMoodError.bind(this);
        this.disableMoodError = this.disableMoodError.bind(this);
    }
   
    descriptionChanged(event){
        if (event){
            var value = event.target.value
            this.setState({description : value})
        }
    }
    onPublish(){
        if (this.state.pickedMood != -1 && this.state.categoryPicked != undefined){
            var post = getEpmtyModel()
            post.description = this.state.description
            post.category = this.state.categoryPicked
            post.category.mood = this.state.pickedMood
            post.lat = getLat()
            post.lon = getLng()
            this.props.setPost(post)
            this.props.addNews(post)
            this.props.changePage("news")
        } else {
            this.showMoodError({isShowMoodError : true, isShowMoodError  : false})
        }
        
    }
    toogleMoodPicker(){
        this.setState({isShowMoodPicker : !this.state.isShowMoodPicker, isShowMoodError  : false})
    }
    toogleCategoryPicker(){
        this.setState({isShowCategoryPicker : !this.state.isShowCategoryPicker, isShowMoodError  : false})
    }
    onMoodChanged(mood){
        this.setState({pickedMood : mood})
    }
    onCategoryPicked(category){
        this.setState({categoryPicked : category})
    }
    showMoodError(){
        this.setState({isShowMoodError : true})
    }
    disableMoodError(){
        this.setState({isShowMoodError : false})
    }
    render() {
        return (
            <div className="main_content">
                <PanelHeader>
                    <Navbar back="map" onBack={this.props.changePage} title="Матвей"/>
                </PanelHeader>
                <div className="navbar_line"/>
                <Textarea value={this.state.description} onChange={this.descriptionChanged} style={{marginBottom : '16px'}} placeholder="Что у вас нового?" />
                <div className="navbar_line"/>
                <div className="location_container just_content">
                    <div className="flex">
                        <img className="location_icon" src={place_16}/>
                        <p className="location_text">улица Яхтенная, 37</p>
                    </div>
                    <img className="location_icon location_icon_close" src={cancel_20}/>
                </div>
                <div className="bottom_button_container">
                    {this.state.isShowMoodError && <p className="error_text">Необходимио выбрать настроение и тематику</p>}
                    <HorizontalScroll>
                        <div style={{ display: 'flex'}}>
                            <GrayBtnMood pickedMood={this.state.pickedMood} toogleMoodPicker={this.toogleMoodPicker} rightIcon={dropdown_gray} title="Настроение"/>
                            <GrayBtnCategory toogleMoodPicker={this.toogleCategoryPicker} pickedMood={this.state.categoryPicked} rightIcon={dropdown_gray} title="Тематика"/>
                            <GrayBtnItem pickedMood={-1} leftIcon={posting_access} rightIcon={dropdown_gray} title="Видно всем"/>
                            <GrayBtnItem pickedMood={-1} leftIcon={posting_time} rightIcon={dropdown_gray} title="Сейчас"/>
                            
                        </div>
                    </HorizontalScroll>
                    <div className="navbar_line top_12"/>
                    <div style={(this.state.description != "" && this.state.description != undefined) ? {} : {opacity : '0.5', pointerEvents : 'none'}} onClick={this.onPublish} className="large_vk_btn hover">Опубликовать запись</div>
                </div>

                {this.state.isShowMoodPicker && <MoodPicker pickedMood={this.state.pickedMood} onMoodChanged={this.onMoodChanged} toogleMoodPicker={this.toogleMoodPicker}/>}
                {this.state.isShowCategoryPicker && <CategoryPicker categoryPicked={this.state.categoryPicked} onCategoryPicked={this.onCategoryPicked} toogleCategoryPicker={this.toogleCategoryPicker}/>}
            </div>
        );
    }
}
export default CreateNew;