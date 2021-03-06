import alt from './../utils/alt'
import AuthActions from '../actions/AuthActions';

class AuthStore {
  constructor() {

    // index.html
    //<script>
    //    window.profile = { user_id: <%= current_user.try(:id) || "null" %>, name: "<%= current_user.try(:name) %>" }
    //</script>

    this.profile = window.profile || { user_id: null, name: ''};
    this.ajaxSending = false;
    this.loginError = null;
    this.signUpErrors = null;
    this.bindListeners({
      handleLogin: AuthActions.LOGIN,
      handleLogout: AuthActions.LOGOUT,
      handleUpdateLoginError: AuthActions.UPDATE_LOGIN_ERROR,
      handleFetchProfile: AuthActions.FETCH_PROFILE,
      handleUpdateProfile: AuthActions.UPDATE_PROFILE,
      handleUpdateProfileError: AuthActions.UPDATE_PROFILE_ERROR,
      handleUpdateSignUpError: AuthActions.UPDATE_SIGN_UP_ERROR,
      handleSignUp: AuthActions.SIGN_UP
    });
  }

  handleShowLogin(){
      this.showLogin = true;
  }

  handleLogout(){
      const profile = {user_id: null, name: '' }
      this.profile = profile;
  }

  handleLogin(user){
      const profile = {user_id: user.id, name: user.name }
      this.profile = profile;
      this.loginError = null;
  }

  handleSignUp(user){
      const profile = {user_id: user.id, name: user.name }
      this.profile = profile;
      this.signUpErrors = null;
  }

  handleUpdateLoginError(response){
      this.loginError = response.responseJSON.error;
  }

  handleUpdateSignUpError(response){
      if( response.responseJSON.errors )
          {  this.signUpErrors = response.responseJSON.errors; }

  }

  handleFetchProfile(displaySpinner) {
    if (displaySpinner) {
      this.ajaxSending = true;
    }
  }

  handleUpdateProfile(profile) {
      this.profile = profile;
      this.ajaxSending = false;
  }

  handleUpdateProfileError() {
    this.ajaxSending = false;
  }

}

export default alt.createStore(AuthStore, 'AuthStore');
