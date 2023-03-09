const myhobby = ['ngoding', 'joging']
// const friendHobby = ['menulis', 'membaca']

const newMyHobby = [...myhobby]
newMyHobby[1] = 'swimming'

// console.log(newMyHobby)
// console.log(myhobby)
// myhobby[1] = 'swimming'

// console.log(myhobby)
// 
// myhobby = [
//     ...myhobby,
//     ...friendHobby
// ] 

// menggabung 2 array
// const resultHobby = [
//     ...myhobby,
//     ...friendHobby
// ]


// const biodata = {
//     name: 'risano',
//     email: 'risano@gmail.com'
// }
// biodata.name = 'akbar'
// console.log(biodata)
// const newBiodata = {...biodata}
// newBiodata.name = 'akbar'
// newBiodata.email = 'akbar@gmail.com'
// console.log(newBiodata)
// console.log(biodata)






// console.log(myhobby)c


const myBiodata = {
    name1: 'risano',
    email: 'risano@gmail.com',
    age: 17
}

let friendBiodata = {
    name2: 'tuti',
    email: 'tuti@gmail.com',
    isMerried: false
}

// friendBiodata.name2 = 'putri'
friendBiodata = {
    isMerried : true,
    ...friendBiodata,
}
// const result = {
//     ...myBiodata,
//     ...friendBiodata
// }

// const result = {
//     name1: 'risano',
//     email: 'risano@gmail.com',
//     age: 17,
//     name2: 'tuti',
//     email: 'tuti@gmail.com',
//     isMerried: false
// }

console.log(friendBiodata)