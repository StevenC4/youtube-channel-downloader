const convict = require('convict');
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const config = convict({
	appName: {
		doc: 'The application name.',
		format: String,
		default: pkg.name,
	},
	csrfTokenCookie: {
		secure: {
			doc: 'Whether the CSRF token cookie is secure',
			format: Boolean,
			default: true,
			env: 'CSRF_TOKEN_COOKIE_SECURE'
		},
		httpOnly: {
			doc: 'Whether the CSRF token cookie is http-only',
			format: Boolean,
			default: false,
			env: 'CSRF_TOKEN_COOKIE_HTTP_ONLY'
		}
	},
	env: {
		doc: 'The application environment.',
		format: ['development','test','production'],
		default: 'development',
		env: 'ENVIRONMENT'
	},
	express: {
		trustProxy: {
			doc: 'The app.set("trust proxy") value',
			format: Boolean,
			default: true,
		}
	},
	port: {
		doc: 'The port to bind the app to.',
		format: 'port',
		default: pkg.config.port,
		arg: 'port',
		env: 'PORT'
	},
	log: {
		app: {
			dir: {
				doc: 'The directory for the app log',
				format: String,
				default: 'log'
			},
			filename: {
				doc: 'The file name for the app log',
				format: String,
				default:'app.log'
			}
		},
		request: {
			dir: {
				doc: 'The directory for the request log',
				format: String,
				default: 'log'
			},
			filename: {
				doc: 'The file name for the request log',
				format: String,
				default: 'request.log'
			}
		}
	},
	contentSecurityPolicyDomains: {
		doc: 'An array of strings representing domains included in the content security policy header',
		format: Array,
		default: ''
	},
	cors: {
		origin: {
			doc: 'An array of allowed origins',
			format: Array,
			default: []
		},
		methods: {
			doc: 'An array of allowed methods',
			format: Array,
			default: ['GET']
		},
		allowedHeaders: {
			doc: 'An array of allowed headers',
			format: Array,
			default: ['Content-Type']
		},
		credentials: {
			doc: 'Configures the Access-Control-Allow_Credentials CORS header',
			format: 'Boolean',
			default: true
		}
	},
	session: {
		name: {
			doc: 'The session name',
			format: String,
			default: 'yt-channel-downloader-session'
		},
		resave: {
			doc: 'Forces the session to be saved back to the session store regardless of if it was modified',
			format: 'Boolean',
			default: false
		},
		saveUninitialized: {
			doc: 'Forces uninitialized sessions to be saved to the store',
			format: 'Boolean',
			default: true
		},
		cookie: {
			maxAge: {
				doc: 'The time remaining in milliesconds',
				format: 'int',
				default: 604800000 // 1 week
			},
			path: {
				doc: 'Specifies the value for the Path Set-Cookie attribute',
				format: String,
				default: '/',
				env: 'COOKIE_PATH'
			},
			domain: {
				doc: 'Specifies the value for the Domain Set-Cookie attribute',
				format: '*',
				default: '',
				env: 'COOKIE_DOMAIN'
			},
			secure: {
				doc: 'Specifies the boolean value for the Secure Set-Cookie attribute',
				format: 'Boolean',
				default: true
			},
			httpOnly: {
				doc: 'Specifies the boolean value for the HttpOnly Set-Cookie attribute',
				format: 'Boolean',
				default: true
			}
		},
		secret: {
			doc: 'This is the secret used to sign the session ID cookie',
			format: String,
			default: '',
			env: 'SESSION_SECRET',
			sensitive: true
		}
	},
	inMemorySessionConfig: {
		expires: {
			doc: 'The expiration time of the in-memory session',
			format: 'int',
			default: 604800 // 1 week
		}
	},
	static: {
		path: {
			doc: 'The path to the static asset files',
			format: String,
			default: '/var/www',
			env: 'STATIC_FILES_PATH'
		}
	}
});

const env = config.get('env');
const envFilePath = path.normalize(path.join(__dirname, `env/${env}.json`));
if (fs.existsSync(envFilePath)) {
	config.loadFile([envFilePath]);
}

config.validate({allowed: 'strict'});

module.exports = config;
