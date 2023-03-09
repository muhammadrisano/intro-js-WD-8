let storedObjects = {

}

const simpanData = (key, val)=>{
    storedObjects[key] = val
    
    // cara ke 2 spread operator ?
   
}

simpanData('email', 'risano@gmail.com')
simpanData('nama', 'risano@gmail.com')
simpanData('age', 17)


console.log(storedObjects)