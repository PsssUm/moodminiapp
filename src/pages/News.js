import React from 'react';
import NewsItem from './custom_views/NewsItem';
import '../resources/styles/news.css'
import button_planet from '../resources/icons/button_planet.svg'
class News extends React.Component {
   
    constructor(props){
        super(props)
        var news = []
        if (this.props.markerItemPicked != undefined){
            news = this.props.news.sort((a,b) => (a.description == this.props.markerItemPicked.description) ? 1 : -1);
        } else {
            news = this.props.news
        }

        this.state = {
            news : news.reverse()
        }
        this.openMap = this.openMap.bind(this);
    }
    openMap(){
        this.props.changePage("map")
    }
    render() {
        return (
            <div className="news_content main_content">
                <div className="line_bg">
                     <div className="navbar_line line_bot_0"/>
                </div>
                
                {this.state.news.length > 0 && this.state.news.map((item, index) => (
                    <NewsItem openDetails={this.props.openDetails} index={index} podcast={item} key={index}/>
                ))}
                <img onClick={this.openMap} className="btn_planet" src={button_planet}/>
            </div>
        );
    }
}
export default News;