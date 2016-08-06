import csrf from 'csurf'

import clubMethoding from './api/clubMethods'
import bodyParser from 'body-parser'

export const parsedUrlEncoded = bodyParser.urlencoded({ extended: true });
export const app = express();
export const clubMethods = new clubMethoding(app)
export const csrfProtection = csrf({ cookie: true })
