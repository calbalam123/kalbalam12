import express from "express";
import cors from "cors";
const app=express();app.use(cors());app.use(express.json());
const orders:Array<{id:number;side:string;quantity:number;price:number;createdAt:string}>=[];
app.get("/health",(_req,res)=>res.json({status:"ok",service:"pine-crypto-api",mode:"simulation"}));
app.get("/api/demo/orders",(_req,res)=>res.json({orders}));
app.post("/api/demo/orders",(req,res)=>{const {side,quantity}=req.body??{};if(!["BUY","SELL"].includes(side)||!Number.isFinite(quantity)||quantity<=0)return res.status(400).json({error:"side must be BUY or SELL and quantity must be positive"});const order={id:Date.now(),side,quantity,price:0.01,createdAt:new Date().toISOString()};orders.unshift(order);return res.status(201).json({order,simulation:true});});
const port=Number(process.env.PORT??4000);app.listen(port,"0.0.0.0",()=>console.log(`PINE API listening on ${port} (simulation only)`));
