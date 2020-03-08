import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts = () => {
        return this.props.posts.map(post => (
            <div className="item" key={post.id}>
                <i className="large middle aligned user icon" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <h2>{post.body}</h2>
                    </div>
                </div>
            </div>
            )
        )
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => ({posts});

export default connect(mapStateToProps, {
    fetchPosts
})(PostList);
