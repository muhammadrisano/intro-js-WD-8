const print =(data)=>{
    const konten = `selamat Pagi `+ data
    console.log(konten)
}

const sayHelo = (name, callback)=>{
    const textWording = `helo ${name}, apa kabar` 
    callback(textWording)
}

sayHelo('risano', print)


// sayHelo('risano', (wording)=>{
//     console.log(`helo bro... ${wording}`)
// })