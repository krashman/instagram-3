import React from 'react';
import Nav from './../Nav/Nav';
import PhotoGrid from './../Profile/Photogrid';
import axios from 'axios';

export default class SearchView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }
    componentDidMount(){
        axios.get('/api/search/' + this.props.params.searchTerm).then(res => {
            this.setState({
                posts: res.data
            });
        })
    }
    render() {
        return (
            <div className='searchView'>
                <Nav/>
                <div className='searchTerm'>
                    {this.props.params.searchTerm}
                </div>
                <div className='profileView'>
                    <PhotoGrid posts={this.state.posts}/>
                </div>
            </div>
        )
    }
}
