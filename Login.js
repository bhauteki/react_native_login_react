import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { mockLogin } from './services/mockLoginServer';
import { loginAction } from './actions';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  login = async () => {
    const { email, password } = this.state;
    if (email && password) {
      await mockLogin(email, password).then(accessToken => {
        this.props.login(email, accessToken);
        this.props.navigation.push('Home');
      });
    }
  };

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          label="Email"
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label="Password"
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
        />
        <Button
          title={'Login'}
          onPress={this.login}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'gray',
    width: '50%',
    borderWidth: 1,
    padding: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapDispatchToProps = (dispatch) => ({
  login: (email, accessToken) => dispatch(loginAction(email, accessToken)),
});

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginContainer;
