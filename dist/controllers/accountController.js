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
var accountModel_1 = __importDefault(require("../models/accountModel"));
var express_validator_1 = require("express-validator");
//for queries
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allAccounts, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, accountModel_1.default.find(req.body).sort({ account_name: 1 }).exec()];
            case 1:
                allAccounts = _a.sent();
                if (allAccounts) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allAccounts
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
//For creating new account
var add = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, group_id, account_name, owner_id, owner_name, contacts, is_active, stage, geo_location, address_street, address_city, address_state, address_zip, email, demo, conversion, hauling_contract, hauling_expiration, national, referral, referral_group_id, notes, account, newAccount, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                }
                _a = req.body, group_id = _a.group_id, account_name = _a.account_name, owner_id = _a.owner_id, owner_name = _a.owner_name, contacts = _a.contacts, is_active = _a.is_active, stage = _a.stage, geo_location = _a.geo_location, address_street = _a.address_street, address_city = _a.address_city, address_state = _a.address_state, address_zip = _a.address_zip, email = _a.email, demo = _a.demo, conversion = _a.conversion, hauling_contract = _a.hauling_contract, hauling_expiration = _a.hauling_expiration, national = _a.national, referral = _a.referral, referral_group_id = _a.referral_group_id, notes = _a.notes;
                account = new accountModel_1.default();
                account.group_id = group_id; // String, required
                account.account_name = account_name; // String, required
                account.owner_id = owner_id; // String, required
                account.owner_name = owner_name; //string required
                account.contacts = contacts != null ? contacts : null; // Array, required // Will be null upon generation
                account.is_active = is_active; // Bool, required
                account.stage = stage; // String, required
                account.address_street = address_street != null ? address_street : null; // String, required
                account.address_city = address_city != null ? address_city : null; // String, required
                account.address_state = address_state != null ? address_state : null; // String, required
                account.address_zip = address_zip != null ? address_zip : null; // String, required
                account.email = email != null ? email : null; // String, required
                account.demo = demo != null ? demo : null; // Date, required
                account.conversion = conversion != null ? conversion : null; // Date, required
                account.hauling_contract = hauling_contract; // Bool, required
                account.hauling_expiration = hauling_expiration; // Date, required
                account.notes = req.body.notes != null ? notes : null; // String, required
                account.national = national; // Bool, required
                account.referral = referral; // Bool, required
                account.referral_group_id = referral_group_id != null ? referral_group_id : null; // String, required
                account.geo_location = geo_location; // Add geo_location
                return [4 /*yield*/, account.save()];
            case 1:
                newAccount = _b.sent();
                if (newAccount) {
                    res.status(201).json({
                        status: "success",
                        message: "New Account Added!",
                    });
                }
                else {
                    res.status(304).json({ status: 'Failed to create account' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_2 = _b.sent();
                res.json({ message: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.add = add;
// Update Account by Object Id
var update = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, data, updatedAccount, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty()) {
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    }
                    data = __assign({}, req.body);
                    return [4 /*yield*/, accountModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false, runValidators: true })];
                case 1:
                    updatedAccount = _a.sent();
                    if (updatedAccount) {
                        res.status(200).json({
                            status: "success",
                            message: "Account Updated Successfully",
                            data: updatedAccount
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
// Delete Account by Object Id
var remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var account, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, accountModel_1.default.findOne({ _id: req.body._id }).exec()];
            case 1:
                account = _a.sent();
                if (account) {
                    account.account_name = account.account_name;
                    account.address_city = account.address_city;
                    account.address_state = account.address_state;
                    account.address_street = account.address_street;
                    account.address_zip = account.address_zip;
                    account.contacts = account.contacts;
                    account.conversion = account.conversion;
                    account.demo = account.demo;
                    account.email = account.email;
                    account.geo_location = account.geo_location;
                    account.group_id = account.group_id;
                    account.hauling_contract = account.hauling_contract;
                    account.hauling_expiration = account.hauling_expiration;
                    account.is_active = false;
                    account.owner_id = account.owner_id;
                    account.owner_name = account.owner_name;
                    account.national = account.national;
                    account.notes = account.notes;
                    account.referral = account.referral;
                    account.referral_group_id = account.referral_group_id;
                    account.stage = account.stage;
                    if (account) {
                        res.status(204).json({
                            status: "success",
                            message: "account deactivated Successfully",
                            data: account
                        });
                    }
                }
                else {
                    res.json({ message: 'Account not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.json({ message: err_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.remove = remove;
