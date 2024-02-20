import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import ToggleableButton from '../../../src/components/ToggleableButton/ToggleableButton';
import ToggleableButtonImage from '../../../src/components/ToggleableButtonImage/ToggleableButtonImage';
import Slider from '../../../src/components/Slider/Slider';



interface PreferencesViewProps {}

const PreferencesView: FC<PreferencesViewProps> = () => {

    return (
    <View style={{
                 flex: 1,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>

       <View style = {{flex: 0.5, alignSelf: 'stretch', }}>
               <ScreenTitle textValue = 'Preferences'></ScreenTitle>
       </View>


        <View style = {{flex: 0.25, justifyContent: 'center', alignSelf: 'stretch', }}>
            <SectionTitle textValue = 'Price'></SectionTitle>

            <View style = {{justifyContent: 'spaceBetween', flexDirection: 'row', }}>
              <ToggleableButton textValue = '$'></ToggleableButton>
              <ToggleableButton textValue = '$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$'></ToggleableButton>
              <ToggleableButton textValue = '$$$$'></ToggleableButton>
            </View>
        </View>

         <View style = {{flex: 0.5, justifyContent: 'center', alignSelf: 'stretch',}}>
                    <SectionTitle textValue = 'Maximum Distance'></SectionTitle>

                    <View style = {{justifyContent: 'center', flexDirection: 'row',}}>
                        <Slider></Slider>
                    </View>
         </View>

          <View style = {{flex: 1.25, justifyContent: 'center', alignSelf: 'stretch'}}>
                     <SectionTitle textValue = 'Cuisine'></SectionTitle>

                     <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: 10, alignItems: 'center', paddingTop: 20}}>
                        <ToggleableButtonImage textValue = 'American' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Barbecue' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Chinese' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'French' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Hamburger' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Indian' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Italian' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Japanese' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Mexican' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Pizza' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Seafood' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Steak' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Sushi' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>
                        <ToggleableButtonImage textValue = 'Thai' image = 'require(../../resources.burger.jpg)' style = {{padding: 100}}/>

                     </View>
          </View>
    </View>
    );

};

export default PreferencesView;