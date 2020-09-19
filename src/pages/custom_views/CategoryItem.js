import React from 'react';
import dropdown_blue from '../../resources/icons/dropdown_blue.svg'
class CategoryItem extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
          
        }
      
    }
    onClick = () => {
        if ((this.props.filterCategory != undefined && this.props.category.title == this.props.filterCategory.title)){
            this.props.filterCategoryPicked(undefined)
        } else {
            this.props.filterCategoryPicked(this.props.category)
        }
        
    }
    
    render() {
        return (
            <div onClick={this.onClick}>
                <img src={(this.props.filterCategory != undefined && this.props.category.title == this.props.filterCategory.title) ? this.props.category.iconPressed : this.props.category.icon}/>
                <p className="category_item_title">{this.props.category.title}</p>
            </div>
        );
    }
}
export default CategoryItem;