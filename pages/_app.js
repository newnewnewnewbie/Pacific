import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

class Root extends App {
  render () {
    const { Component, ...other } = this.props;
    return (
      <Container>
          <Head>
              <title>Static Website</title>
          </Head>
          <div>
              <header>Header</header>
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