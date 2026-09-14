"use strict";

const chalk = require("chalk");

console.clear();

const logo = `KASHMIRI BAILEYS
`;
const gold  = chalk.hex('#D4AF37');
const cream = chalk.hex('#F5F5DC');
const brown = chalk.hex('#4B2E2B');

console.log(gold.bold(logo));

console.log(
  chalk.red(`
                   .....
              .d$$$$*$$$$$$bc
           .d$P"     d$$    "*$$.
          d$"       4$"$$      "$$.
         4$P        $F ^$F       "$c
        z$%        d$   3$        ^$L
       4$$$$$$$$$$$$$$$$$$$$$$$$$$$$$F
       $$$F"""""""$F""""""$F"""""C$$*$
       .$%"$$e    d$       3$   z$$"  $F
       4$    *$$.4$"        $$d$P"    $$
       4$      ^*$$.       .d$F       $$
       4$       d$"$$c   z$$"3$       $F
        $L     4$"  ^*$$$P"   $$     4$"
        3$     $F   .d$P$$e   ^$F    $P
         $$   d$  .$$"    "$$c 3$   d$
          *$.4$"z$$"        ^*$$$$ $$
           "$$$$P"             "$$$P
             *$b.             .d$P"
               "$$$ec.....ze$$$"
                   "**$$$**"
  `)
);

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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
