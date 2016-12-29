import * as express from "express";
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
const passport = require("passport");
const util = require("util");

interface RequestWithUser extends express.Request {
    user: {name: string}
}

const AUTH_FAILED_URL = '/failed';
const AUTH_URL = '/login';

export class AuthenticationHandler {

    static init(app: express.Application) {
        AuthenticationHandler.initPassport();
        app.use(cookieParser());
        app.use(bodyParser());
        app.use(session({secret: 'keyboard cat'}));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(AuthenticationHandler.checkIfAuthenticated);
        app.get(AUTH_FAILED_URL, AuthenticationHandler.authenticationFailed);

        app.get('/login',
            passport.authenticate('MyStrategy', {failureRedirect: '/failed'}),
            function (req, res) {
                res.send(req.user);
            });
    }

    private static initPassport() {
        passport.use(new MyStrategy());
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }

    private static checkIfAuthenticated(req: RequestWithUser, res: express.Response, next: express.NextFunction) {
        if (req.user || req.url === AUTH_FAILED_URL || req.url === AUTH_URL) {
            next();
        } else {
            res.redirect(AUTH_FAILED_URL);
        }
    }

    private static authenticationFailed(req: express.Request, res: express.Response) {
        res.send({
            error: 'Not authorized!'
        });
    }

}

function MyStrategy() {
    this.name = 'MyStrategy';
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(MyStrategy, passport.Strategy);

MyStrategy.prototype.authenticate = function () {
    this.success({name: 'Nico', id: 1});
};