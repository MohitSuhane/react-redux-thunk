import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as postsActions from '../../actions/posts.actions'
import { TablePagination } from 'react-pagination-table';
import './posts.css';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.postsActions.getUsers();
        this.props.postsActions.getPosts();
    }

    render() {
        const { posts } = this.props;
        const Header = ["UserId", "Id", "Title", "Body"];
        return (
            <div>
                <TablePagination
                    title="Posts"
                    headers={Header}
                    data={posts}
                    columns="userId.id.title.body"
                    perPageItemCount={10}
                    totalCount={posts.length}
                    arrayOption={ [["size", 'all', ' ']] }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.post.posts,
    users: state.post.users,
});

const mapDispatchToProps = dispatch => ({
    postsActions: bindActionCreators(postsActions, dispatch),
});

Posts.propTypes = {
    posts: PropTypes.array,
    users: PropTypes.array,
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)
