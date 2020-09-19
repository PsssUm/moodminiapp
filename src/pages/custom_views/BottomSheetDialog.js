import React from 'react';
import DayPicker from 'react-day-picker';
import { ActionSheet, ActionSheetItem, CellButton, Panel, View } from '@vkontakte/vkui';
class BottomSheetDialog extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        popout: null,
      }
      this.moodPicked = this.moodPicked.bind(this);
      this.onClose = this.onClose.bind(this);
    }
  
    componentDidMount() {
      this.openBase();
    }
    onClose(){
      this.setState({ popout: null })
      this.props.onClose()
    }
    
    moodPicked(mood) {
        this.setState({ popout: null });
        this.props.filterMoodPicked(mood)
        this.props.onClose()
    }
    
    openBase () {

      this.setState({ popout:
        <ActionSheet onClose={this.onClose}>
            <ActionSheetItem onClick={() => this.moodPicked(0)} autoclose>
            Хорошее
            </ActionSheetItem>
            <ActionSheetItem style={{color : "#E64646"}} onClick={() => this.moodPicked(1)} autoclose>
            Скверное
            </ActionSheetItem>
            <ActionSheetItem style={{color : "#E64646"}} onClick={() => this.moodPicked(2)} autoclose>
            Энергичное
            </ActionSheetItem>
            <ActionSheetItem onClick={() => this.moodPicked(3)} autoclose>Умиротворенное</ActionSheetItem>

        </ActionSheet>
      });
    }
  
  
    render() {
      return (
        <View popout={this.state.popout} activePanel="panel">
            <Panel id="actionSheet">
                
            </Panel>
        </View>

      )
    }
  }
  export default BottomSheetDialog;
