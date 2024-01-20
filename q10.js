import {PersonalCareProduct } from "./q10data.js";
const product = new PersonalCareProduct(123456789,"dot & key cream", 233, "2 year" )
const totalProduct = product.totalprice(90)
console.log(totalProduct)