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
var groupModel_1 = __importDefault(require("../models/groupModel"));
var express_validator_1 = require("express-validator");
//for queries
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allGroups, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, groupModel_1.default.find(req.body).exec()];
            case 1:
                allGroups = _a.sent();
                if (allGroups) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allGroups
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
//For creating new group
var add = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, group, newGroup, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty()) {
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    }
                    group = new groupModel_1.default();
                    group.address_city = req.body.address_city;
                    group.address_state = req.body.address_state;
                    group.address_street = req.body.address_street;
                    group.address_zip = req.body.address_zip;
                    group.dba = req.body.dba;
                    group.ein = req.body.ein;
                    group.email = req.body.email;
                    group.is_active = req.body.is_active;
                    group.launch_date = req.body.launch_date;
                    group.legal_company = req.body.legal_company;
                    group.name = req.body.name;
                    group.phone = req.body.phone;
                    group.region = req.body.region;
                    group.signing_date = req.body.signing_date;
                    group.tax_rate = req.body.tax_rate;
                    group.territory_zips = req.body.territory_zips;
                    group.time_zone = req.body.time_zone;
                    group.webpage = req.body.webpage != null ? req.body.webpage : null;
                    return [4 /*yield*/, group.save()];
                case 1:
                    newGroup = _a.sent();
                    if (newGroup) {
                        res.status(201).json({
                            status: "success",
                            message: "New group created!",
                        });
                    }
                    else {
                        res.json({ message: 'Failed to create group ' });
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
//update group by object id
var update = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, data, updatedGroup, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    errors = express_validator_1.validationResult(req);
                    if (!errors.isEmpty()) {
                        return [2 /*return*/, res.status(400).json({ errors: errors.array() })];
                    }
                    data = __assign({}, req.body);
                    return [4 /*yield*/, groupModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false })];
                case 1:
                    updatedGroup = _a.sent();
                    if (updatedGroup) {
                        res.status(200).json({
                            status: "success",
                            message: "Group Updated Successfully",
                            data: updatedGroup
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
// Delete Group by _id
var remove = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, groupModel_1.default.findOne({ _id: req.body._id }).exec()];
                case 1:
                    group = _a.sent();
                    if (group) {
                        group.address_city = group.address_city;
                        group.address_state = group.address_state;
                        group.address_street = group.address_street;
                        group.address_zip = group.address_zip;
                        group.dba = group.dba;
                        group.ein = group.ein;
                        group.email = group.email;
                        group.is_active = false;
                        group.launch_date = group.launch_date;
                        group.legal_company = group.legal_company;
                        group.name = group.name;
                        group.phone = group.phone;
                        group.region = group.region;
                        group.signing_date = group.signing_date;
                        group.tax_rate = group.tax_rate;
                        group.territory_zips = group.territory_zips;
                        group.time_zone = group.time_zone;
                        group.webpage = group.webpage;
                        if (group) {
                            res.status(200).json({
                                status: "success",
                                message: "Group deactivated Successfully",
                                data: group
                            });
                        }
                    }
                    else {
                        res.json({ message: 'Group not found' });
                    }
                    return [2 /*return*/];
            }
        });
    });
};
exports.remove = remove;
