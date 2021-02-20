"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
exports.update = exports.logout = exports.login = exports.auth = exports.add = exports.view = void 0;
//userController.js
//Import User Model
var userModel_1 = __importDefault(require("../models/userModel"));
// import bcrypt
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = process.env.ACCESS_TOKEN_SECRET;
// For queries - Sorts by first name
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1.default.find(req.body).sort({ first_name: 1 }).exec()];
            case 1:
                allUsers = _a.sent();
                if (allUsers) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allUsers
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        status: 'error',
                        message: err_1.stack
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.view = view;
//for  creating a new user
var add = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, hashedPassword, displayName, newUser, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user = new userModel_1.default();
                    hashedPassword = bcrypt.hashSync(req.body.password, 8);
                    displayName = req.body.first_name + ' ' + req.body.last_name;
                    user.email = req.body.email; // String Required
                    user.display_name = displayName; // String Required - input from displayName
                    user.first_name = req.body.first_name; // String Required
                    user.group_id = req.body.group_id; // String Group Document ID
                    user.image = req.body.image != null ? req.body.image : null; // Assigned Null
                    user.last_name = req.body.last_name; // String required
                    user.password = hashedPassword; // String Required - input from hashedPassword
                    user.role = req.body.role; // String Required
                    user.token = req.body.token !== null ? req.body.token : null; // Assigned Null
                    return [4 /*yield*/, user.save()];
                case 1:
                    newUser = _a.sent();
                    if (newUser) {
                        res.status(201).json({
                            status: "success",
                            message: "New user created!",
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    res.json({ message: err_2 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.add = add;
//for authenticatin user by token
var auth = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundUser;
    return __generator(this, function (_a) {
        try {
            foundUser = userModel_1.default.findOne({ token: req.body.token }).exec();
            if (foundUser) {
                return [2 /*return*/, res.status(200).json({ message: 'Token Valid', auth: true })];
            }
        }
        catch (err) {
            res.json({ message: err.message });
        }
        return [2 /*return*/];
    });
}); };
exports.auth = auth;
//for logging in
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var filter, foundUser, passwordIsValid, userToken, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                filter = { email: req.body.email };
                return [4 /*yield*/, userModel_1.default.findOne({ email: req.body.email }).exec()];
            case 1:
                foundUser = _a.sent();
                console.log(foundUser);
                if (!foundUser) return [3 /*break*/, 4];
                passwordIsValid = bcrypt.compareSync(req.body.password, foundUser.password);
                if (!passwordIsValid) {
                    return [2 /*return*/, res.status(400).json({ auth: false, token: null })];
                }
                userToken = jwt.sign({ id: foundUser._id }, secret, {
                    expiresIn: 50400 // expires in 14 hour(s)
                });
                return [4 /*yield*/, userModel_1.default.updateOne(filter, { token: userToken })];
            case 2:
                _a.sent();
                return [4 /*yield*/, foundUser.save()];
            case 3:
                _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: 'User logged in successfully',
                        data: foundUser,
                        auth: true,
                        token: userToken
                    })];
            case 4:
                res.status(400).json({ message: 'user not found' });
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                err_3 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        error: err_3.stack
                    })];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
//for logging out 
var logout = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userModel_1.default.findOne({ token: req.body.token }).exec()];
            case 1:
                user = _a.sent();
                if (user) {
                    user._id = user._id;
                    user.display_name = user.display_name;
                    user.email = user.email;
                    user.first_name = user.first_name;
                    user.group_id = user.group_id;
                    user.image = user.image;
                    user.is_active = user.is_active;
                    user.last_name = user.last_name;
                    user.password = user.password;
                    user.role = user.role;
                    user.token = null;
                    if (user) {
                        res.status(204).json({
                            status: "success",
                            message: "User logged out Successfully",
                            data: user
                        });
                    }
                    else {
                        res.json({ message: 'Failed to logout', status: 400 });
                    }
                }
                else {
                    res.json({ message: 'User not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.json({ message: err_4 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.logout = logout;
//update the user
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, updatedUser, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = __assign({}, req.body);
                console.log(data);
                return [4 /*yield*/, userModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false })];
            case 1:
                updatedUser = _a.sent();
                console.log(updatedUser);
                if (updatedUser) {
                    return [2 /*return*/, res.status(200).json({
                            status: 'success',
                            message: "User updated successfully",
                            data: updatedUser
                        })];
                }
                else {
                    return [2 /*return*/, res.status(400).json({
                            message: 'user not found'
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                return [2 /*return*/, res.status(400).json({ message: err_5.message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.update = update;
//delete the user
