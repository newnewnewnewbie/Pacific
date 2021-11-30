import App, { Container } from 'next/app';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import img1 from "./img/whale.png"

class Root extends App {
  render () {
    const { Component, ...other } = this.props;
    return (
      <Container>
          <Head>
              <title>Pacific Webstie</title>
          </Head>
          <div className="headerCSS">
            <Image src={img1}></Image>
            <button>홈</button>
            <button>둘러보기</button>
            <button>보관함</button>
            </div>
          <div>
              <main>
                {/* <BrowserRouter>
                  <Route path="/home" component = {homeTest} />
                  <Route path="/course" component = {fullCourseTest} />
                </BrowserRouter> */}
                  <Component {...other} />
              </main>
              <footer>Footer</footer>
          </div>
      </Container>
    );
  };
}

export default Root;