// arrow function
const panggilHelo =  (nama, email, age)=>{
    // const nama = "risano akbar"
    // const email = 'risano@gmail.com'

    const result = `nama saya ${nama} dan email saya ${email} dan umur saya ${age}`
    console.log(result)
}

// panggilHelo('risano', 'risano@gmail.com', 19)
panggilHelo('budi', 'budi@gamil.com', 25)

// declaration
function penjumlahan(value1, value2){
    
    const result = value1 + value2
    return result
}

// expression
const perkalian = function(value1, value2){
    const result = value1 * value2
    return result
}
// penjumlahan(30, 20)
// perkalian(6,7)

const MTK = 80
const BIndonesia = 90
const IPA = 70

const resultPenjumlahn = penjumlahan(MTK, BIndonesia)
const resultPerkalian = perkalian(resultPenjumlahn, IPA)
console.log(resultPerkalian)