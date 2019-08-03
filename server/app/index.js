const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const session = require('./lib/session');
// const passport = require('./lib/passport');
// const utilMiddleware = require('./middleware/util');
// const systemMiddleware = require('./middleware/system');
// const routes = require('./routes');
// const authRoutes = require('./routes/auth');
// const uiRoutes = require('./routes/ui');
const apiRoutes = require('./routes/api');
const config = require('../config');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors(config.get('cors')));
app.use(helmet()); // Provides some xss protections and hides headers from the client
// app.use(systemMiddleware.requestLogging);
app.use(bodyParser.json());
app.use(cookieParser(config.get('session.secret')));
// app.use(utilMiddleware.setContentSecurityPolicy);

app.set('trust proxy', config.get('express.trustProxy'));

// app.get('/healthcheck', systemMiddleware.healthCheck);

// app.use(session);
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(csurf());

app.use('/', express.static(path.join(config.get('env') === 'development' ? __dirname : '', config.get('static.path'))));

app.use('/api', apiRoutes);

module.exports = app;
