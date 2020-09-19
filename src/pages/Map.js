import React from 'react';
import '../resources/styles/map.css'
import { PanelHeader, HorizontalScroll } from '@vkontakte/vkui';
import NavbarBack from '../panels/NavbarBack';
import GoogleMapReact from 'google-map-react';
import Supercluster from 'supercluster';
import MarkerCircle from './custom_views/MarkerCircle';
import close_dark_24 from '../resources/icons/close_dark_24.svg'
import empty from '../resources/icons/empty.svg'
import search from '../resources/icons/search.svg'
import MapFilterDropDown from './custom_views/MapFilterDropdown';
import BottomSheetDialog from './custom_views/BottomSheetDialog';
import CategoryItem from './custom_views/CategoryItem';
import { getCategories } from '../utils/Utils';
class Map extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 12
      };
    constructor(props){
        super(props)
        this.state = {
            isShowToolbar : true,
            isShowBottomSheet : false,
            filterMood : 0,
            categories : getCategories(),
            filteredCategories : getCategories(),
            filteredNews : this.props.news,
            searchText : "",
            filterCategory : undefined
        }
        this.closeMap = this.closeMap.bind(this);
        this.toogleBottomSheet = this.toogleBottomSheet.bind(this);
        this.filterMoodPicked = this.filterMoodPicked.bind(this);
        this.onSearchChanged = this.onSearchChanged.bind(this);
        this.filter = this.filter.bind(this);
        this.filterCategoryPicked = this.filterCategoryPicked.bind(this);
        this.onMarkerClicked = this.onMarkerClicked.bind(this);
    }
    componentDidMount(){
        setTimeout(this.disableToolbar, 1000)
        this.setState({isShowToolbar : false})
        this.filter(this.state.searchText, this.state.filterMood, this.state.filterCategory)
        this.props.setMarkerItem({})
    }
    disableToolbar = () => {
        if (window.document.getElementsByClassName("PanelHeader")[0] != undefined){
            window.document.getElementsByClassName("PanelHeader")[0].style.display = 'none'
        }   
    }
    filterMoodPicked(mood){
        this.setState({filterMood : mood})
        this.filter(this.state.searchText, mood, this.state.filterCategory)
    }
    filterCategoryPicked(category){
        this.setState({filterCategory : category})
        this.filter(this.state.searchText, this.state.filterMood, category)
    }
    toogleBottomSheet(){
        this.setState({isShowBottomSheet : true})
    }
    closeBottomSheet = () =>{
        this.setState({isShowBottomSheet : false})
    }
    closeMap(){
        this.setState({isShowToolbar : true})
        this.props.changePage("news")
    }
    onMarkerClicked(post){
        const result = this.props.news.filter(item => {
            return (post.category.title == item.category.title)
        });
        this.props.setFilteredNews(result)
        this.props.onCategoryPicked(post.category.title)
        this.props.setMarkerItem(post)
        this.props.changePage("news_picked")
    }

    onSearchChanged(event){
        if (event){
            var value = event.target.value
            this.setState({searchText : value})
            //this.filter(value, this.state.filterMood, this.state.filterCategory)
            this.filterCategories(value)
        }
        
    }
    filter(text, filterMood, filterCategory){
        const result = this.props.news.filter(post => {
            const isMood = post.category.mood == filterMood
            const isCategory = (filterCategory == undefined ? true : post.category.title.toLowerCase() == filterCategory.title.toLowerCase())
            return isMood && isCategory
        });
        this.setState({filteredNews : result})
    }
    filterCategories(text){
        const result = this.state.categories.filter(category => {
            return (category.title.toLowerCase().includes(text.toLowerCase()))
        });
        this.setState({filteredCategories : result})
    }
    render() {

        return (
            <div className="news_content">
                {this.state.isShowToolbar && <PanelHeader>
                    <NavbarBack back="news" onBack={this.changePage} title="Новости"/>
                </PanelHeader>}
                <div style={{ height: '100vh', width: '100%' }} className="map_container">
                    <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyDJrwFDlj0KxrgP6W91C08IhDNJ1Zr8ANA" }} defaultCenter={this.props.center}
                           defaultZoom={this.props.zoom}>
                               {this.state.filteredNews.length > 0 && this.state.filteredNews.map((item, index) => (
                                    <MarkerCircle onMarkerClicked={this.onMarkerClicked} lng={item.lon} lat={item.lat} index={index} post={item} key={index}/>
                                ))}
                           

                    </GoogleMapReact>
                
                </div>
                <MapFilterDropDown filterMood={this.state.filterMood} toogleBottomSheet={this.toogleBottomSheet}/>
                {this.state.isShowBottomSheet && <BottomSheetDialog filterMoodPicked={this.filterMoodPicked} onClose={this.closeBottomSheet}/>}
                <div onClick={this.closeMap} className="close_map_container">
                    <img className="close_map_icon" src={close_dark_24}/>
                </div>
                <div className="map_search_bottom_container">
                    <div className="search_music_container">
                        <img className="search_icon_input" src={search}/>
                        <input className="search_input" placeholder="Поиск" onChange={this.onSearchChanged} value={this.state.searchText} />
                    </div>
                    {this.state.filteredCategories.length > 0 ? <HorizontalScroll>
                        <div style={{ display: 'flex', marginLeft : '4px'}}>
                            {this.state.filteredCategories.length > 0 && this.state.filteredCategories.map((item, index) => (
                                <CategoryItem filterCategory={this.state.filterCategory} filterCategoryPicked={this.filterCategoryPicked} index={index} category={item} key={index}/>
                            ))}
                        </div>
                    </HorizontalScroll> :
                    <p className="nothing_found_cat">Ничего не найдено</p>}
                </div> 
                {this.state.filteredNews.length == 0 && <div className="empty_filters">
                    <div className="center_empty_container">
                        <img className="horizontal-center relative" src={empty}/>
                        <p className="empty_title">Нет записей с таким<br/>настроением</p>
                        <p className="empty_title font_16">Выберите другое</p>
                    </div>
                </div>}
            </div>
        );
    }
}
export default Map;