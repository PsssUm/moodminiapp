import React from 'react';
import { PanelHeader, ModalRoot, ModalPage, View, Panel, ModalPageHeader, Button, PanelHeaderButton, FormLayout, Radio } from '@vkontakte/vkui';
import back from '../../resources/icons/navbar_close.svg'
const MODAL_PAGE_FILTERS = 'filters';

const MODAL_CARD_MONEY_SEND = 'money-send';


class MoodPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: null,
      modalHistory: [],
      mood : "1"
    };

    this.onMoodChanged = this.onMoodChanged.bind(this);
    this.onReady = this.onReady.bind(this);
  }
  modalBack = () => {
    this.setActiveModal(null);
    this.props.toogleMoodPicker()
  };
  componentDidMount(){
    this.setActiveModal(MODAL_PAGE_FILTERS)
  }
  setActiveModal(activeModal) {
    this.setState({activeModal : activeModal})
  };
  onMoodChanged(event){
    if (event){
        var value = event.target.value
        this.setState({mood : value})
    }
  }
  onReady(){
    this.props.onMoodChanged(this.state.mood)
    this.modalBack()
    this.props.toogleMoodPicker()
  }
  render() {
    const modal = (
        <ModalRoot activeModal={this.state.activeModal} onClose={this.modalBack}>
            <ModalPage  header={
            <ModalPageHeader  left={<img onClick={this.modalBack} className="back_icon" src={back}/>}>
              Выберите настроение
            </ModalPageHeader>
          } id={MODAL_PAGE_FILTERS} onClose={this.modalBack}>
                <div className="navbar_line"/>
                <p className="moodpicker_description">Выберите настроение вашей записи, чтобы попасть на Карту настроений.</p>
                <FormLayout>
                    <div onChange={this.onMoodChanged} value={this.state.mood}>
                        <Radio name="radio" value="0" defaultChecked={this.props.pickedMood == 0 || this.props.pickedMood == -1}>Хорошее</Radio>
                        <Radio name="radio" value="1" defaultChecked={this.props.pickedMood == 1}>Скверное</Radio>
                        <Radio name="radio" value="2" defaultChecked={this.props.pickedMood == 2}>Энергичное</Radio>
                        <Radio name="radio" value="3" defaultChecked={this.props.pickedMood == 3}>Умиротворённое</Radio>
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

export default MoodPicker;