import React from 'react';
import { PanelHeader, ModalRoot, ModalPage, View, Panel, ModalPageHeader, Button, PanelHeaderButton, FormLayout, Radio } from '@vkontakte/vkui';
import back from '../../resources/icons/navbar_close.svg'
import { getCategories } from '../../utils/Utils';
const MODAL_PAGE_FILTERS = 'filters';

class CategoryPicker extends React.Component {
  constructor(props) {
    super(props);
    var categories = getCategories()
    this.state = {
      activeModal: null,
      modalHistory: [],
      category : categories[0],
      pickedIndex : 0,
      categories : categories
    };

    this.onCategoryChanged = this.onCategoryChanged.bind(this);
    this.onReady = this.onReady.bind(this);
  }
  modalBack = () => {
    this.setActiveModal(null);
    this.props.toogleCategoryPicker()
  };
  componentDidMount(){
    this.setActiveModal(MODAL_PAGE_FILTERS)
  }
  setActiveModal(activeModal) {
    this.setState({activeModal : activeModal})
  };
  onCategoryChanged(event){
    if (event){
        var value = event.target.value
        var cat = this.state.categories[parseInt(value)]
        this.setState({category : cat, pickedIndex : parseInt(value)})
        this.props.onCategoryPicked(cat)
        this.modalBack()
        this.props.toogleCategoryPicker()
    }
  }
  onReady(){
    this.props.onCategoryPicked(this.state.category)
    this.modalBack()
    this.props.toogleCategoryPicker()
  }
  render() {
    const modal = (
        <ModalRoot activeModal={this.state.activeModal} onClose={this.modalBack}>
            <ModalPage  header={
            <ModalPageHeader  left={<img onClick={this.modalBack} className="back_icon" src={back}/>}>
              <p style={{textAlign : 'center', width : '100%'}}>Выберите тему</p>
            </ModalPageHeader>
          } id={MODAL_PAGE_FILTERS} onClose={this.modalBack}>
                <div className="navbar_line"/>
                <p className="moodpicker_description">Выберите тему вашей записи, чтобы попасть на Карту настроений.</p>
                <FormLayout>
                    <div onChange={this.onCategoryChanged} value={this.state.pickedIndex}>
                        {this.state.categories.map((item, index) => (
                            
                            <Radio key={index} name="radio" value={index} defaultChecked={this.props.categoryPicked == undefined ? (index == 0 ? true : false) : (this.props.categoryPicked.title == item.title ? true : false)}>{item.title}</Radio>
                            // index == 0 ? <Radio key={index} name="radio" value={index} defaultChecked>{item.title}</Radio> :
                            // <Radio key={index} name="radio" value={index}>{item.title}</Radio>
                        ))}

                    </div>
                </FormLayout>
                <div onClick={this.onReady} className="large_vk_btn hover">Готово</div>
                <div className="space_btn"/>
            </ModalPage>
        </ModalRoot>
    );
    return (
        <View activePanel="modals" modal={modal}>
          <Panel id="modals">
            
          </Panel>
        </View>
      );
  }
}

export default CategoryPicker;