const express = require('express');
const app = express(); 
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const server = require("http").Server(app);
const cors = require("cors");

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

dotenv.config();

const nextApp = next({ dev }); // next 모듈을 사용
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {// back 서버에서의 const nextApp = express()

  app.get("/service-worker.js", (req, res) => {
    nextApp.serveStatic(req, res, "./.next/service-worker.js");
  });

  const serviceWorkers = [
    {
      filename: "service-worker.js",
      path: "./.next/service-worker.js",
    },
    {
      filename: "firebase-messaging-sw.js",
      path: "./public/firebase-messaging-sw.js",
    },
  ];

  serviceWorkers.forEach(({ filename, path }) => {
    app.get(`/${filename}`, (req, res) => {
      nextApp.serveStatic(req, res, path);
    });
  });

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      origin: `http://localhost:3000`,
    }),
  );

  app.get('*', (req, res) => { // 모든 get 요청 처리
    return handle(req, res); // next의 get 요청 처리기
  });

  server.listen(3000, (err) => {
    if (err) {
      throw err;
    }
    //console.log(`> Ready on http://localhost:${port}`);
  });
});