function profitFromPurchase(cost,sale){
 if(!Number.isFinite(cost)||cost<=0||!Number.isFinite(sale)||sale<0)throw new RangeError('Importes inválidos');
 const amount=sale-cost;
 return {amount,percent:amount/cost*100};
}
if(typeof module!=='undefined')module.exports={profitFromPurchase};
function chooseRetailReference(offers){
 const eligible=offers.filter(o=>o.stock==='in_stock'&&Number.isFinite(o.price)&&o.price>0);
 return eligible.reduce((best,o)=>!best||o.price>best.price?o:best,null);
}
if(typeof module!=='undefined')module.exports.chooseRetailReference=chooseRetailReference;
