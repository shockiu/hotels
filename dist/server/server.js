"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var db_1 = __importDefault(require("../database/db"));
var routes_1 = __importDefault(require("../routes/routes"));
var chalk_1 = __importDefault(require("chalk"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = process.env.PORT || '8084';
        this.apiPath = {
            routes: '/api/v1'
        };
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }
    Server.prototype.middlewares = function () {
        // CORS
        this.app.use((0, cors_1.default)());
        // Parse JSON from request
        this.app.use(express_1.default.json());
        // Morgan config
        this.app.use(this.morganConfigMiddleware());
    };
    Server.prototype.morganConfigMiddleware = function () {
        return (0, morgan_1.default)(function (tokens, req, res) {
            return [
                chalk_1.default.hex('#ff4757').bold('⚡ Morgan --> '),
                chalk_1.default.hex('#34ace0').bold(tokens.method(req, res)),
                chalk_1.default.hex('#ffb142').bold(tokens.status(req, res)),
                chalk_1.default.hex('#ff5252').bold(tokens.url(req, res)),
                chalk_1.default.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
                chalk_1.default.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
                chalk_1.default.yellow(tokens['remote-addr'](req, res)),
                chalk_1.default.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
                chalk_1.default.hex('#1e90ff')(tokens['user-agent'](req, res)),
            ].join(' ');
        });
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPath.routes, routes_1.default);
    };
    Server.prototype.dbConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name_1 = db_1.default.getDatabaseName();
                        return [4 /*yield*/, db_1.default.authenticate().then(function () {
                                console.log(chalk_1.default.italic.magentaBright("DATABASE CONNECTION SUCCESSFULL \uD83D\uDCAF ".concat(name_1)));
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        console.log('No pudo contentarse a la BD');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log(chalk_1.default.blueBright('VERSION ' + '1.0.0'));
            console.log(chalk_1.default.blueBright("SERVER EXPRESS ONLINE PORT: ".concat(_this.port)));
        });
    };
    Object.defineProperty(Server.prototype, "appServer", {
        get: function () {
            return this.app;
        },
        enumerable: false,
        configurable: true
    });
    return Server;
}());
exports.Server = Server;
