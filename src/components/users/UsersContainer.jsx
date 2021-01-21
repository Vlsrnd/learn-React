import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowingProgress, getRequestUsers } from '../../redux/usersReducer';
import Preloader from '../Preloader/preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount = () => {
      this.props.getRequestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getRequestUsers(pageNumber, this.props.pageSize);
  }

  render = () => {
    return <>
      { this.props.isFetching ? <Preloader /> : null }
      <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
      </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
};


export default compose(
  connect(mapStateToProps, { follow, unfollow, toggleFollowingProgress, getRequestUsers}),
)(UsersContainer)