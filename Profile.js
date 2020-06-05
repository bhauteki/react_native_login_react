import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { selectAccessToken, selectEmail } from './selectors';
import { connect } from 'react-redux';

const Profile = ({ accessToken, email }) => {

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Profile info</Text>
      {accessToken ?
        <>
          <Text>{`Email: ${email}`}</Text>
          <Text>{`Access token: ${accessToken}`}</Text>
        </> :
        <Text>Not logged in.</Text>
      }
    </View>
  );

};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state, ownProps) => ({
  accessToken: selectAccessToken(state),
  email: selectEmail(state),
});

const ProfileContainer = connect(
  mapStateToProps,
  null,
)(Profile);

export default ProfileContainer;
