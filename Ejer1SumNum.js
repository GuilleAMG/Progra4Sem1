let Nums = [1,2,3,4]
let NumsResult = []

NumsResult[0] = Nums[0];
for(let cont = 1; cont < Nums.length; cont++){
    console.log("Cont Position" + cont + ":" + Nums[cont])
    let SumValue = NumsResult[cont - 1]
    NumsResult[cont] = SumValue + Nums[cont];
}
// console.log(Nums, NumsResult)

console.log("Input:" + Nums)

console.log('Output:' + ${NumsResult}) 