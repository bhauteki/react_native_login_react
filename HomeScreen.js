import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { logoutAction } from './actions';
import { selectAccessToken } from './selectors';

const HomeScreen = ({ navigation, accessToken, logout }) => {

  return (
    <View style={styles.view}>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
        style={styles.profileButton}
      />
      { !accessToken ? (
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      ) : (
        <Button
          title="Logout"
          onPress={logout}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileButton: {
    marginBottom: 20,
  },
});

const mapStateToProps = (state, ownProps) => ({
  accessToken: selectAccessToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

export default HomeScreenContainer;
