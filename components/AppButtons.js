import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from './AppButton';



const AppButtons = () => {
    return(
    <View style={styles.appbuttons}>
        <AppButton 
        borderstyle={styles.rightborder} 
        buttonName='Change Color' 
        iconName='paint-bucket'
        onPress={() => {    alert('You tapped the Change Color button!');  }}/>
        <AppButton
        buttonName='Add/Remove image' 
        iconName='photo'
        onPress={() => {    alert('You tapped the Add/Remove image button!');  }}/>
        <AppButton 
        borderstyle={styles.rightborder} 
        buttonName='Change Image' 
        iconName='camera'
        onPress={() => {    alert('You tapped the Change Image button!');  }}/>
        <AppButton 
        buttonName='Go to warp' 
        iconName='alert'
        onPress={() => {    alert('Engage!');  }}/>
    </View>
    )    
}

const styles = StyleSheet.create({
    appbuttons:{
        backgroundColor: 'lightgray',
        width: '100%',
        height: '25%',
        flexWrap: 'wrap',
        flexDirection: 'row'
        
    },
    rightborder:{
        borderRightWidth : 1, 
        borderRightColor : '#019edf'
    }
});

export default AppButtons;