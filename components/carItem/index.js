import React from 'react'
import { View, Text ,ImageBackground} from 'react-native'
import styles from './style'
import StyledButton from '../styledButton'
import backgroundImg from "../.././assets/images.png"
const  carItem=(props)=> {
    const {name,price,img}=props.car;
    return (
     


            <View style={styles.carContainer}>
                <ImageBackground source={img } style={styles.image} />
                <View style={styles.titles}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{price}</Text>
                </View>
         <View style={styles.buttonContainer}>
                <StyledButton type="primary" />
                <StyledButton type="secondry" />
         </View>

        </View>
    )
}
export default carItem;