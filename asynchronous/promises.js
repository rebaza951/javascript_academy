import {jobs, users} from './data';

const getUsers = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(users);
    }, 200);
});

const getUser = id => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(users.filter((user) => user.id === id)[0]);
    }, 200);
});

const getProfession = id => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(jobs.filter((job) => job.id === id)[0]);
    }, 200);
});

getUsers()
    .then(users => {
        return getUser(users[0].id) // returns a promise that's why we can chain "then" property
    })
    .then(user => getProfession(user.id))
    .then(profession => console.log("juan's profession is a", profession.name))
    .catch(err => console.log(err));

//these three ways are the same
// users => { return getUser(users[0].id)}
//  short way
// users => (getUser(users[0].id))
//  shorter way
// users => getUser(users[0].id)

