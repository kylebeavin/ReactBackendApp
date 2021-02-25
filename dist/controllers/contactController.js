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
exports.remove = exports.update = exports.add = exports.view = void 0;
var contactModel_1 = __importDefault(require("../models/contactModel"));
var express_validator_1 = require("express-validator");
//for queries
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allContacts, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, contactModel_1.default.find(req.body).exec()];
            case 1:
                allContacts = _a.sent();
                if (allContacts) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allContacts
                        })];
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({
                        status: "error",
                        message: err_1.stack,
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.view = view;
//For creating new contact
var add = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, contact, newContact, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty()) {
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    }
                    contact = new contactModel_1.default();
                    contact.account_id = req.body.account_id;
                    contact.email = req.body.email;
                    contact.first_name = req.body.first_name;
                    contact.is_active = req.body.is_active;
                    contact.last_name = req.body.last_name;
                    contact.method = req.body.method;
                    contact.owner_id = req.body.owner_id;
                    contact.phone = req.body.phone;
                    contact.type = req.body.type;
                    return [4 /*yield*/, contact.save()];
                case 1:
                    newContact = _a.sent();
                    if (newContact) {
                        res.status(201).json({
                            status: "success",
                            message: "New contact created!",
                        });
                    }
                    else {
                        res.json({ status: 'Failed to create contact' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    res.json({ message: err_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.add = add;
//update contact by object id
var update = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, data, updatedContact, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty()) {
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    }
                    data = __assign({}, req.body);
                    return [4 /*yield*/, contactModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false, runValidators: true })];
                case 1:
                    updatedContact = _a.sent();
                    if (updatedContact) {
                        res.status(200).json({
                            status: "success",
                            message: "Account Updated Successfully",
                            data: updatedContact
                        });
                    }
                    else {
                        res.status(400).json({ message: 'Failed to update', status: 400 });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    res.status(400).json({ message: err_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.update = update;
// Delete Account by _id
var remove = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var contact, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, contactModel_1.default.findOne({ _id: req.body._id }).exec()];
                case 1:
                    contact = _a.sent();
                    if (contact) {
                        contact.account_id = req.body.account_id;
                        contact.email = req.body.email;
                        contact.first_name = req.body.first_name;
                        contact.is_active = false;
                        contact.last_name = req.body.last_name;
                        contact.method = req.body.method;
                        contact.owner_id = req.body.owner_id;
                        contact.phone = req.body.phone;
                        contact.type = req.body.type;
                        if (contact) {
                            res.status(200).json({
                                status: "success",
                                message: "Contact deactivated Successfully",
                                data: contact
                            });
                        }
                    }
                    else {
                        res.json({ message: 'Contact not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    res.json({ message: err_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.remove = remove;
