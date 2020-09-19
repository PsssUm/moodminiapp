import React from 'react';

import { View, Panel, Root, PanelHeader } from '@vkontakte/vkui';
import Navbar from './panels/Navbar';

import '@vkontakte/vkui/dist/vkui.css';
import './resources/styles/style.css';
import CreateNew from './pages/CreateNew';
import { getEpmtyModel, getDataModel, getNews } from './utils/Utils';
import News from './pages/News';
import Map from './pages/Map';
import NavbarBack from './panels/NavbarBack';



class Application extends React.Component {
    
    constructor(){
        super()
        this.state = {
            activeView : 'map',
            post : getEpmtyModel(),
            news : getNews(),
            pickedCategoryTitle : "",
            filteredNews : [],
            markerItemPicked : {}
  
        }
        this.changePage = this.changePage.bind(this);
        this.setPost = this.setPost.bind(this);
        this.addNews = this.addNews.bind(this);
        this.onCategoryPicked = this.onCategoryPicked.bind(this);
        this.setFilteredNews = this.setFilteredNews.bind(this);
        this.setMarkerItem = this.setMarkerItem.bind(this);

    }
    changePage(page){
        this.setState({activeView : page})
    }
    setPost(post){
        this.setState({post : post})
    }
    addNews(post){
        var news = this.state.news
        news.push(post)
        this.setState({news : news})
    }
    onCategoryPicked(title){
        this.setState({pickedCategoryTitle : title})
    }
    setFilteredNews(news){
        this.setState({filteredNews : news})
    }
    setMarkerItem(item){
        this.setState({markerItemPicked : item})
    }
    componentDidMount(){
        
    }
   

   
    render() {
        return (
            <Root activeView={this.state.activeView}>
                <View id="create" activePanel="create_panel">
                    <Panel style={{backgroundColor : "white"}} id="create_panel">
                        <CreateNew addNews={this.addNews} setPost={this.setPost} post={this.state.post} changePage={this.changePage}/>
                    </Panel>
                </View>
                <View id="news" activePanel="news_panel">
                    <Panel style={{backgroundColor : "white"}} id="news_panel">
                        <PanelHeader>
                            <NavbarBack back="create" onBack={this.changePage} title="Новости"/>
                        </PanelHeader>
                        <News news={this.state.news} addNews={this.addNews} setPost={this.setPost} post={this.state.post} changePage={this.changePage}/>
                    </Panel>
                </View>
                <View id="map" activePanel="map_panel">
                    <Panel style={{backgroundColor : "white"}} id="map_panel">
                        <Map setMarkerItem={this.setMarkerItem} onCategoryPicked={this.onCategoryPicked} setFilteredNews={this.setFilteredNews} news={this.state.news} addNews={this.addNews} setPost={this.setPost} post={this.state.post} changePage={this.changePage}/>
                    </Panel>
                </View>
                <View id="news_picked" activePanel="news_picked_panel">
                    <Panel style={{backgroundColor : "white"}} id="news_picked_panel">
                        <PanelHeader>
                            <NavbarBack back="map" onBack={this.changePage} title={this.state.pickedCategoryTitle}/>
                        </PanelHeader>
                        <News markerItemPicked={this.state.markerItemPicked} news={this.state.filteredNews} changePage={this.changePage}/>
                    </Panel>
                </View>
            </Root>
            
            
        );
    }
}
export default Application;


