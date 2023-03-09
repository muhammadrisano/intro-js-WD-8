const biodata = {
    name: 'risano',
    email: 'risano@gmail.com',
    age: 18,
    isMerried: false,
    sayaHelo: function (){
        console.log('helo bro... ' + this.name)
    }
}

biodata.sayaHelo()