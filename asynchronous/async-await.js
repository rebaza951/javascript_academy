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

async function main() {
    const users = await getUsers();
    const user = await getUser(users[0].id);
    const profession = await getProfession(user.id);
    console.log(`juan's profession is `, profession.name);
}

main();


