import React from 'react';
import avatar from '../../resources/icons/avatar.png'
import more from '../../resources/icons/more.svg'
import ic_comment_outline from '../../resources/icons/ic_comment_outline.svg'
import ic_eye from '../../resources/icons/ic_eye.svg'
import ic_like from '../../resources/icons/ic_like.svg'
import ic_reposts from '../../resources/icons/ic_reposts.svg'
import '../../resources/styles/details_style.css'

class NewsItem extends React.Component {
   
    constructor(props){
        super(props)
      
    }
    
    render() {
        return (
            <div className="news_item">
                <div className="just_content">
                    <div className="flex">
                        <img className="news_item_avatar" src={this.props.podcast.avatar}/>
                        <div>
                            <p className="news_name_title">{this.props.podcast.author}</p>
                            <p className="new_time">час назад</p>
                        </div>
                    </div>
                    <img className="news_more" src={more}/>
                </div>
                <p className="news_description_text">{this.props.podcast.description}</p>
                <div className="navbar_line_zero"/>
                {this.props.podcast.image != undefined && <img className="news_item_image" src={this.props.podcast.image}/>}
                <div className="new_item_details">
                    <div className="detail_counters">
                        <img src={ic_like} width="24" className="detail_counters_icon"/><div className="detail_counters_text">65 </div>
                        <img src={ic_comment_outline} width="24" className="detail_counters_icon"/><div className="detail_counters_text">36 </div>
                        <img src={ic_reposts} width="21" className="detail_counters_icon"/><div className="detail_counters_text">7 </div>
                        <div className="detail_counters_right">
                            <img src={ic_eye} width="14" className="detail_counters_icon"/><div className="detail_counters_text_right">7,2K</div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default NewsItem;