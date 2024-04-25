import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import sessionStorageInstance from '../../storage/SessionStorage/SessionStorage';
import axios from 'axios';
import PickOneToggle from '../../components/PickOneToggle/PickOneToggle';
import preferencesAndRestaurantsInstance from '../../storage/SessionStorage/PreferencesAndRestaurants';


interface ProfileViewProps {
    onLogoutButtonPressed: Function,
    onActionButtonClicked: Function,
}

const ProfileScreen = (props: ProfileViewProps) => {

    let [isActive, setIsActive] = useState(false);

    async function setVegan(veganBool: boolean) {
        //call API w session storage instance
        const body = {
            email: sessionStorageInstance.getEmail(),
            vegan: veganBool,
        }
        try {
            const response = await axios.put("http://10.0.2.2:3000/api/users", body);
        }
        catch (e) {
            console.log("vegan error: " + e);
        }
        setIsActive(true);
    }

    async function setVegetarian(vegetarianBool: boolean) {
        //call API w session storage instance
        const body = {
            email: sessionStorageInstance.getEmail(),
            vegetarian: vegetarianBool,
        }
        try {
            const response = await axios.put("http://10.0.2.2:3000/api/users", body);
        }
        catch (e) {
            console.log("vegetarian error: " + e);
        }
        setIsActive(true);
    }

    async function getVegan() {
        //call API w session storage instance
        const response = await axios.get("http://10.0.2.2:3000/api/users", {
            params: {
                email: sessionStorageInstance.getEmail(),
            }
        });

        return response.data.vegan;
    }

    async function getVegetarian() {
        //call API w session storage instance
        const response = await axios.get("http://10.0.2.2:3000/api/users", {
            params: {
                email: sessionStorageInstance.getEmail(),
            }
        });

        return response.data.vegetarian;
    }

    function pressButton() {
        props.onActionButtonClicked();
        setIsActive(false);
    }

    function updateSearchType(newSearchType: string) {
        preferencesAndRestaurantsInstance.setSearchType(newSearchType);
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
            }}>


            <View style={{ alignSelf: 'stretch', paddingHorizontal: 30 }}>
                <ScreenTitle textValue='Profile'></ScreenTitle>
            </View>



            <View style={{ justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, gap: 10 }}>
                <SectionTitle textValue="Dietary Preferences"></SectionTitle>

                <View style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch',
                    padding: 15,
                    paddingBottom: 60,

                }}>
                    <ToggleableSetting initialValue={getVegetarian} onToggle={setVegetarian} textValue="Vegetarian"></ToggleableSetting>
                    <ToggleableSetting initialValue={getVegan} onToggle={setVegan} textValue="Vegan"></ToggleableSetting>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, gap: 10 }}>
                <SectionTitle textValue="Search Preferences"></SectionTitle>

                <View style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch',
                    padding: 15,
                    paddingBottom: 30,

                }}>
                    <PickOneToggle onSwitch={updateSearchType} optionOne='DISTANCE' optionTwo='POPULARITY' displayOptionOne='Distance' displayOptionTwo='Popularity' />
                </View>

                <View>
                    <ActionButton onPress={() => pressButton()} textValue='Confirm' active={isActive}></ActionButton>
                </View>

            </View>


            <View style={{
                padding: 15,
                alignSelf: 'stretch',
                justifyContent: 'center',
            }}>
                <LineBreakIcon></LineBreakIcon>
            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flex: 0, width: '90%', alignSelf: 'center', justifyContent: 'center', paddingBottom: 40 }}>
                    <ActionButton active={true} onPress={props.onLogoutButtonPressed} textValue='Logout'></ActionButton>
                </View>
            </View>

        </View>
    );
};

export default ProfileScreen;