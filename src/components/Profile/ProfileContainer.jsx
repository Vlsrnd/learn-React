import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render = () => {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  // withAuthRedirect
  )(ProfileContainer)