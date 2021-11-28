import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { homeTest } from 'test';
import { fullCourseTest } from 'test';

class Root extends App {
  render () {
    const { Component, ...other } = this.props;
    return (
      <Container>
          <Head>
              <title>Pacific Webstie</title>
          </Head>
          <div>
              <header>Header</header>
              <main>
                <BrowserRouter>
                  <Route path="/home" component = {homeTest} />
                  <Route path="/course" component = {fullCourseTest} />
                </BrowserRouter>
                  <Component {...other} />
              </main>
              <footer>Footer</footer>
          </div>
      </Container>
    );
  };
}

export default Root;