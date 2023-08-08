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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurant = exports.getRestaurant = void 0;
const restaurant_model_1 = require("src/models/restaurant.model");
const getRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield restaurant_model_1.productModel.find({});
        res.json(restaurants);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.getRestaurant = getRestaurant;
const createRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield restaurant_model_1.productModel.find({});
        res.json(restaurants);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.createRestaurant = createRestaurant;
