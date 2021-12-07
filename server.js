const express = require('express');
const app = express(); 
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const server = require("http").Server(app);
const cors = require("cors");
const path = require("path");

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

dotenv.config();

const nextApp = next({ dev }); // next 모듈을 사용
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {// back 서버에서의 const nextApp = express()
  app.use(express.static(path.join(__dirname, 'public')));

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

  let apiIndex = require("./routers/index");

  app.use("/", apiIndex);

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