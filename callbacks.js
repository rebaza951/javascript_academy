const users = [
    { id: 1 , name: 'juan', job_id: 1},
    { id: 2 , name: 'marco', job_id: 2},
    { id: 3 , name: 'luis', job_id: 3},
];

const jobs = [
    { id: 1, name: 'programmer'},
    { id: 2, name: 'doctor'},
    { id: 3, name: 'lawyer'},
];

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


getUsers((err, users)=>{
    const juan_id = users[0].id;
    getUser(juan_id, (err, user)=>{
        const job_id = user.job_id;
        getProfesion(job_id, (err, profesion)=>{

        })
    })
});
