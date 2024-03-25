import React from 'react';
import { Text, View, Button, Pressable, Image } from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';





interface SignViewProps { }

const SignView: FC<SignViewProps> = () => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

        <View style={{ flex: 0.5, alignSelf: 'stretch', paddingHorizontal: 30, }}>
            <ScreenTitle textValue='Welcome'></ScreenTitle>
        </View>

        <View style={{ flex: 1.75, justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, gap: 10, }}>
            <View style={{ paddingBottom: 40 }}>
                <SectionTitle textValue='Sign In'></SectionTitle>
            </View>

            <View style={{
                justifyContent: 'center',
                alignSelf: 'stretch',
                padding: 10,
                flex: 1,
                flexDirection: 'column',
                gap: 30,
            }}>
                <InputText fieldName='EMAIL' textValue="John Smith"></InputText>
                <InputText fieldName='PASSWORD' textValue='******'></InputText>
            </View>

            <View style={{ paddingTop: 30 }}>
                <ActionButton textValue="Sign In"></ActionButton>
            </View>


            <View style={{ paddingTop: 20 }}>
                <Pressable style={({ pressed }) => [
                    {
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingVertical: 12,
                        paddingHorizontal: 32,
                        borderRadius: 4,
                        elevation: 3,
                        backgroundColor: pressed ? '#fff' : '#fff',
                    }
                ]}

                    onPress={() => { console.log('google button pressed') }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            style={{ width: 20, height: 20, alignSelf: 'center' }}
                            source={require('../../resources/googleLogo.png')}
                        />

                        <Text style={{
                            color: 'black',
                            fontSize: 20,
                            paddingHorizontal: 20,
                            justifyContent: 'flex-start',
                        }}>Continue with Google</Text>
                    </View>
                </Pressable>
            </View>
        </View>


        <View style={{
            padding: 20,
            alignSelf: 'stretch',
            justifyContent: 'center',
        }}>
            <LineBreakIcon></LineBreakIcon>
        </View>


        <View style={{
            flexGrow: 1,
            flex: 0.5,
            justifyContent: 'center',
            gap: 5,
            alignSelf: 'stretch',
            padding: 15,
            alignItems: 'center',
            flexDirection: 'row',

        }}>
            <Text style={{
                fontSize: 20,
                justifyContent: 'center',
                color: '#402b1f',
            }}>
                New here?

            </Text>
            <Text style={{
                textDecorationLine: 'underline',
                fontSize: 20,
                justifyContent: 'center',
                color: '#402b1f',
            }}>
                Create Account
            </Text>

        </View>
    </View>
);

export default SignView;
