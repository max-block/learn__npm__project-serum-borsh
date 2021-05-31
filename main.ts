import {i64, publicKey} from "@project-serum/borsh"
import BN from "bn.js"

let b = Buffer.alloc(64)
let res = i64().encode(new BN(777), b);
console.log(Array.from(b))

