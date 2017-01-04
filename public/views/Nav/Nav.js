import React from 'react';
import {Link} from 'react-router';
import loggedInUser from '../../utils/getLoggedInUser';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStyle: {
                backgroundColor: 'rgb(250,250,250)',
                textAlign: 'center'
            },
            loggedInUserName: loggedInUser.getLoggedInUser().username
        }
    }
    handleSubmit(e){
        e.preventDefault();
        window.location.href = `/#/search/${this.state.searchText}`;
        console.log(this.state.searchText);

    }
    onSearchChange(e) {
        this.setState({
            searchText: e.target.value
        });
    }
    onSearchActive() {
        this.setState({
            searchStyle: {
                backgroundColor: 'inherit',
                textAlign: 'left'
            }
        })
    }
    onSearchLeave() {
        this.setState({
            searchStyle: {
                backgroundColor: 'rgb(250,250,250)',
                textAlign: 'center'
            }
        })
    }

    render() {
        return (
            <header>
                <div className='nav'>
                    <Link to='feed'>
                        <div className='spriteLogo'></div>
                    </Link>
                    <form onSubmit={this.handleSubmit.bind(this)} className='search'>
                        <input onBlur={this.onSearchLeave.bind(this)}
                               onMouseUp={this.onSearchActive.bind(this)}
                               onChange={this.onSearchChange.bind(this)}
                               placeholder='Search'
                               className='searchField'
                               style={this.state.searchStyle}/>
                        <span className='spriteSearch'></span>
                    </form>
                    <div className='right'>
                        <Link to='upload'>
                            <img src='http://i.imgur.com/xlrhCMf.png' className='plus'>
                            </img>
                        </Link>
                        <Link to='feed'>
                            <div className='spriteDiscover'>
                            </div>
                        </Link>
                        <Link to='#'>
                            <div className='spriteNotifs'>
                            </div>
                        </Link>
                        <Link to={this.state.loggedInUserName ? `profile/${this.state.loggedInUserName}` : '#'}>
                            <div className='spriteProfile'>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}
