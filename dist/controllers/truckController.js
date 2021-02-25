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
exports.update = exports.add = exports.view = void 0;
var truckModel_1 = __importDefault(require("../models/truckModel"));
//for queries
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allTrucks, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, truckModel_1.default.find(req.body).sort({ created_at: 1 }).exec()];
            case 1:
                allTrucks = _a.sent();
                if (allTrucks) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allTrucks
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
//for creating new account
var add = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var truck, newTruck, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    truck = new truckModel_1.default();
                    truck.body_subtype = req.body.body_subtype;
                    truck.body_type = req.body.body_type;
                    truck.color = req.body.color;
                    truck.documents = req.body.documents;
                    truck.group_id = req.body.group_id;
                    truck.hours = req.body.hours != null ? req.body.hours : null;
                    truck.is_active = req.body.is_active;
                    truck.license_number = req.body.license_number;
                    truck.msrp = req.body.msrp;
                    truck.name = req.body.name;
                    truck.odo = req.body.odo != null ? req.body.odo : null;
                    truck.operator = req.body.operator;
                    truck.ownership = req.body.ownership;
                    truck.pictures = req.body.pictures;
                    truck.service_history = req.body.service_history;
                    truck.service_status = req.body.service_status;
                    truck.trim = req.body.trim;
                    truck.registration = req.body.registration;
                    truck.vehicle_make = req.body.vehicle_make;
                    truck.vehicle_model = req.body.vehicle_model;
                    truck.vehicle_type = req.body.vehicle_type;
                    truck.vin = req.body.vin;
                    truck.year = req.body.year;
                    return [4 /*yield*/, truck.save()];
                case 1:
                    newTruck = _a.sent();
                    if (newTruck) {
                        res.status(201).json({
                            status: "success",
                            message: "New truck created!",
                        });
                    }
                    else {
                        res.json({ status: 'Failed to create agreement' });
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
//update Agreement by objectid
var update = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, updatedTruck, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = __assign({}, req.body);
                    return [4 /*yield*/, truckModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false })];
                case 1:
                    updatedTruck = _a.sent();
                    console.log(updatedTruck);
                    if (updatedTruck) {
                        return [2 /*return*/, res.status(200).json({
                                status: "success",
                                message: "Account Updated Successfully",
                                data: updatedTruck
                            })];
                    }
                    else {
                        return [2 /*return*/, res.status(400).json({ message: 'Failed to update', status: 400 })];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    return [2 /*return*/, res.status(400).json({ message: err_3.message })];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.update = update;
//
