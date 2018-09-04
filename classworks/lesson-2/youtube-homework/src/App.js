import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';

import {VideoTitle} from './VideoList';
import {YoutubeSearch} from './youtube-search/youtube-search';
import logo from './logo.svg';
import './App.css';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  state = {
    appName: 'Title',
  };

  constructor(props) {
    super(props);
    YTSearch({key: API_KEY, term: 'matrix'}, data => {
      console.log(data);
      // videoId - https://www.youtube.com/embed/:videoId
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
    setInterval(() => {
      this.setState({
        appName: 'Hello from componentWillReceiveProps',
      });
    }, 2000);
  }

  render() {
    return (
      <main className="container">
        <VideoTitle video={[{title: 'qwe'}]}/>
        {this.state.appName}
        <div className="search-bar navbar">
          <YoutubeSearch
            title={this.state.appName}
            onBlur={term => {
              console.log(term);
              YTSearch({key: API_KEY, term}, data => {
                console.log(data);
              });
            }}
          />
        </div>

        <div className="row">
          <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9"/>

            <div className="details">
              <div>TITLE + 1</div>
              <div>DESCRIPTION + 123 + 123 _</div>
            </div>
          </div>
          <ul className="col-md-4 list-group">
            <li className="list-group-item">
              <div className="video-list media">
                <div className="video-list media">
                  <div className="media-left">
                    <img
                      className="media-object"
                      src="https://randomuser.me/api/portraits/thumb/men/7.jpg"
                    />
                  </div>
                </div>
                <div className="media-body">
                  <div className="media-heading">SOME VIDEO</div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="video-list media">
                <div className="video-list media">
                  <div className="media-left">
                    <img
                      className="media-object"
                      src="https://i.ytimg.com/vi/7GSgWzmR_-c/default.jpg"
                    />
                  </div>
                </div>
                <div className="media-body">
                  <div className="media-heading">SOME VIDEO</div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="video-list media">
                <div className="video-list media">
                  <div className="media-left">
                    <img
                      className="media-object"
                      src="https://randomuser.me/api/portraits/thumb/men/7.jpg"
                    />
                  </div>
                </div>
                <div className="media-body">
                  <div className="media-heading">SOME VIDEO</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
