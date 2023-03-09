const nilaiUN = 30
let hasil = ''
let grade = ''

// if(nilaiUN> 60){
//     hasil = 'LULUS'
// }else{
//   hasil = 'TIDAK LULU'  
// }

hasil = nilaiUN > 60 ? 'LULUS' : 'TIDAK LULUS'

console.log(hasil)

if(nilaiUN >= 90){
    grade = 'A'
}else if(nilaiUN > 75){
    grade = 'B'
}else if(nilaiUN > 60){
    grade = 'C'
}else if(nilaiUN > 40){
    grade = 'D'
}else{
    grade = 'E'
}


// const nilaiIPA = 70
// const nilaiMTK = '70'

// if(nilaiIPA == nilaiMTK){
//     console.log('nilai IPA dan nilai MTK sama')
// }else{
//     console.log('nilai IPA dan MTK tidak sama')
// }

// if(100 != 100){
//     console.log('nilai 100 tidak sama dengan 10')
// }else{
//     console.log('nilai 100 sama dengan 10')
// }

// console.log(grade)