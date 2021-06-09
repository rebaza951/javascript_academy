import {jobs, users} from './data';
//the only way to return the result is throughout a callback

function getUsers(callback) {
    setTimeout(()=>{
        callback(null, users);
    }, 200);
}

function getUser(id, callback) {
    setTimeout(()=>{
        callback(null, users.filter((user)=> user.id === id)[0]);
    }, 200);
}

function getProfesion(id, callback) {
    setTimeout(()=>{
        callback(null, jobs.filter((job)=> job.id === id)[0]);
    }, 200);
}

//find juan's profession
//callback hell
getUsers((err, users)=>{
    const juan_id = users[0].id;
    getUser(juan_id, (err, user)=>{
        const job_id = user.job_id;
        getProfesion(job_id, (err, profesion)=>{
            console.log("juan is a", profesion.name);
        })
    })
});
