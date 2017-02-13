[{
    id: '/#454fdsfdf',
    name: 'ken',
    room: 'The Office Fans'
}]

//addUser(id,name, room)
//removeUser(id)
//fetchUser(id)
//getUserList(room)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// var me = new Person('ken', 29);
// var description = me.getUserDescription();
// console.log(description);

class Users {
    constructor() {
        this.users = [];       
    }
    addUser(id, name, room) {
        const user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id) {
      
        // const users = this.users;
        const user = this.getUser(id);
        // const index = users.indexOf(user);
        // const exitingUser = users.splice(index, 1);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUser(id) {
        const user = this.users.filter((user) => user.id === id)[0];
        return user;
    }
    getUserList(room) {
        const users = this.users.filter((user) => user.room === room);
        const namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};