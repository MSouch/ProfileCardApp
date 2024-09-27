import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const bannerImage = require('./assets/banner.jpg'); 
const profileImage = require('./assets/profilePhoto.jpeg'); 
const icon1 = require('./assets/fb.png'); 
const icon2 = require('./assets/insta.png'); 
const icon3 = require('./assets/linkedin.png'); 
const icon4 = require('./assets/twitter.png'); 

const ProfileCard = () => {
  return (
    <View style={styles.card}>
      {/* Banner Image */}
      <ImageBackground
        source={bannerImage} 
        style={styles.banner}
        imageStyle={styles.bannerImage}
      >
        {/* Profile Photo */}
        <Image
          source={profileImage} 
          style={styles.profileImage}
        />
      </ImageBackground>

      {/* Name */}
      <Text style={styles.name}>Johnny Bravo</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Whoa, mama!</Text>

      {/* Introduction */}
      <Text style={styles.introduction}>Hey there, pretty mama! The name's Johnny Bravo!!.</Text>

      {/* Social Media Icons */}
      <View style={styles.socialMediaContainer}>
        <Image source={icon1} style={styles.icon} />
        <Image source={icon2} style={styles.icon} />
        <Image source={icon3} style={styles.icon} />
        <Image source={icon4} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 500,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 20,
    alignItems: 'center',
    paddingTop: 100,
  },
  banner: {
    width: '100%',
    height: 180,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bannerImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImage: {
    marginLeft: 90,
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 7,
    borderColor: '#fff',
    position: 'absolute',
    top: 110,
  },
  name: {
    marginTop: 150,
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Pacifico',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'Pacifico',
  },
  introduction: {
    fontSize: 22,
    fontFamily: 'sans-serif',
    fontWeight: '400',
    marginVertical: 10,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 40,
  },
  icon: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default ProfileCard;
