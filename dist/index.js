"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.Connection = exports.tokenABI = exports.registryABI = void 0;
// Importing ABIs for the registry and token contracts
const registryABI = __importStar(require("./ContextRegistry.json"));
exports.registryABI = registryABI;
const tokenABI = __importStar(require("./ContextToken.json"));
exports.tokenABI = tokenABI;
// Defining enums for Connection, Storage, and Version
var Connection;
(function (Connection) {
    Connection[Connection["LOCALHOST"] = 1] = "LOCALHOST";
    Connection[Connection["POLYGON"] = 2] = "POLYGON";
    Connection[Connection["MUMBAI"] = 3] = "MUMBAI";
})(Connection || (exports.Connection = Connection = {}));
var Version;
(function (Version) {
    Version[Version["MAJOR"] = 1] = "MAJOR";
    Version[Version["MINOR"] = 2] = "MINOR";
    Version[Version["PATCH"] = 3] = "PATCH";
})(Version || (exports.Version = Version = {}));
//# sourceMappingURL=index.js.map