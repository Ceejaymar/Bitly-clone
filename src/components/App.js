import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { bitlysdk } from '../config/config';
import Navbar from './Navbar';
import BitLink from './BitLink';
import '../css/App.css';

class App extends Component {
  state = {
    bitList : {}
  }

  componentDidMount() {
    const sessionStorageRef = sessionStorage.getItem('bitList');

    if(sessionStorageRef) {
      this.setState({ bitList: JSON.parse(sessionStorageRef) })
    }
  }
  
  componentDidUpdate() {
    sessionStorage.setItem('bitList', JSON.stringify(this.state.bitList))
  }

  onSubmit = (e) => {
    e.preventDefault();
    const link = this.linkRef.value;
    
    bitlysdk.shorten(link)
    .then(response => {
      const bitLinks = {};
      bitLinks['shorten'] = response;
      bitlysdk.info(response.url)
      .then(result => {
        bitLinks['info'] = result;
        bitlysdk.clicks(result.short_url)
        .then(newResponse => {
          bitLinks['clicks'] = newResponse;
          const bitList = { ...this.state.bitList };
          bitList[`link${Date.now()}`] = bitLinks;
          this.setState({ bitList });
        })
      })
    })
    .catch(e => {
      alert('URL is invalid!');
    })
    e.currentTarget.reset();
  }

  copied = () => {
    alert('Link has been copied!')
  }

  render() {
    const { bitList } = this.state;
    
    return (
      <section className="App">
        <Navbar />
        <div className="header">
          <h1 className="header-main">Shorten. Share. Measure.</h1>
          <h2 className="header-sub">Join Bitly, the world's leading link management platform</h2>
        </div>
        <form onSubmit={this.onSubmit}>
          <input name="name" type="text" ref={input => this.linkRef = input} placeholder="Paste a link to shorten it" />
          <button type="submit">shorten</button>
        </form>
        <div className="list-cont">
          <ul className="bit-list">
            {Object.keys(bitList).map(link => {
              return (
                <CopyToClipboard text={bitList[link].shorten.url} key={link}>
                  <div className="bit-link-cont" onClick={this.copied}>
                    <BitLink details={this.state.bitList[link]} /> 
                  </div>
                </CopyToClipboard>
              )}
            )}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
