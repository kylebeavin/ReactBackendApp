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
var pretripModel_1 = __importDefault(require("../../../models/inspectionModels/driver/pretripModel"));
//for queries
var view = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allPreTrips, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, pretripModel_1.default.find(req.body).sort({ created_at: 1 }).exec()];
            case 1:
                allPreTrips = _a.sent();
                if (allPreTrips) {
                    return [2 /*return*/, res.status(200).json({
                            status: "success",
                            message: "Working",
                            data: allPreTrips
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
//For creating new pretrip
var add = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var pretrip, newPreTrip, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    pretrip = new pretripModel_1.default();
                    pretrip.group_id = req.body.group_id;
                    pretrip.owner_id = req.body.owner_id;
                    pretrip.type = req.body.type;
                    pretrip.truck_id = req.body.truck_id;
                    pretrip.odometer_reading = req.body.odometer_reading;
                    pretrip.fuel_level = req.body.fuel_level;
                    pretrip.seat_belts = req.body.seat_belts;
                    pretrip.pto_switch = req.body.pto_switch;
                    pretrip.engine_fluids = req.body.engine_fluids;
                    pretrip.transmission = req.body.transmission;
                    pretrip.steering_mechanism = req.body.steering_mechanism;
                    pretrip.horn = req.body.horn;
                    pretrip.windshield_wipers = req.body.windshield_wipers;
                    pretrip.mirrors = req.body.mirrors;
                    pretrip.truck_lights = req.body.truck_lights;
                    pretrip.parking_brake = req.body.parking_brake;
                    pretrip.service_brake = req.body.service_brake;
                    pretrip.tires = req.body.tires;
                    pretrip.rims = req.body.rims;
                    pretrip.emergency_equipment = req.body.emergency_equipment;
                    pretrip.tools_gear = req.body.tools_gear;
                    pretrip.chocks_chains = req.body.chocks_chains;
                    pretrip.drum_cap = req.body.drum_cap;
                    pretrip.grease_distribution = req.body.grease_distribution;
                    pretrip.chain_tension = req.body.chain_tension;
                    pretrip.machine_lights = req.body.machine_lights;
                    pretrip.machine_hours = req.body.machine_hours;
                    pretrip.vehicle_condition = req.body.vehicle_condition;
                    pretrip.required_documents = req.body.required_documents;
                    pretrip.engine_warning = req.body.engine_warning;
                    pretrip.drivers_signature = req.body.drivers_signature;
                    return [4 /*yield*/, pretrip.save()];
                case 1:
                    newPreTrip = _a.sent();
                    if (newPreTrip) {
                        res.status(201).json({
                            status: "success",
                            message: "New pretrip inspection created!",
                        });
                    }
                    else {
                        res.json({ message: 'Failed to create an pretrip inspection' });
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
//update pretrip by object id
var update = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, updatedPreTrip, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = __assign({}, req.body);
                    return [4 /*yield*/, pretripModel_1.default.findByIdAndUpdate(req.body._id, data, { new: true, useFindAndModify: false })];
                case 1:
                    updatedPreTrip = _a.sent();
                    console.log(updatedPreTrip);
                    if (updatedPreTrip) {
                        return [2 /*return*/, res.status(200).json({
                                status: "success",
                                message: "Pre-Trip Inspection Updated Successfully",
                                data: updatedPreTrip
                            })];
                    }
                    else {
                        return [2 /*return*/, res.status(400).json({ message: 'Failed to update' })];
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
//delete by pretrip id
