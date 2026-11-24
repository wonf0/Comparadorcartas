function profitFromPurchase(cost,sale){
 // La venta puede ser negativa si el envío de reventa supera el precio: la pérdida se calcula igual.
 if(!Number.isFinite(cost)||cost<=0||!Number.isFinite(sale))throw new RangeError('Importes inválidos');
 const amount=sale-cost;
 return {amount,percent:amount/cost*100};
}
if(typeof module!=='undefined')module.exports={profitFromPurchase};
function chooseRetailReference(offers){
 const eligible=offers.filter(o=>o.stock==='in_stock'&&Number.isFinite(o.price)&&o.price>0);
 return eligible.reduce((best,o)=>!best||o.price>best.price?o:best,null);
}
if(typeof module!=='undefined')module.exports.chooseRetailReference=chooseRetailReference;
// Venta neta de reventa = precio de referencia − envío de reventa (el envío nunca puede ser negativo).
function netSale(price,shipping=0){
 if(!Number.isFinite(price)||price<0||!Number.isFinite(shipping)||shipping<0)throw new RangeError('Importes inválidos');
 return price-shipping;
}
if(typeof module!=='undefined')module.exports.netSale=netSale;
