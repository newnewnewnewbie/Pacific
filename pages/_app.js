import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

class Root extends App {
  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        <Head>
          <title>Pacific Webstie</title>
        </Head>
        <div className="headerCSS">
          <button>홈</button>
          <button>둘러보기</button>
          <button>보관함</button>
        </div>
        <div>
          <main>
            <Component {...other} />
          </main>
          <footer>Footer</footer>
        </div>
      </Container>
    );
  };
}

export default Root;