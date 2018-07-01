function render(obj) {
    let names = obj.repos.map(repo=>repo.name),
        forkOwners = obj.forks.map(fork => fork.map(arr=>arr.full_name)),
        tableHolder = document.querySelector(".repo-table")

    for(let key in names) {
        tableHolder.innerHTML +=
        `<li>
        ${names[key]}
            <ul>
                ${forkOwners[key].map(name=>`<li>${name}</li>`).join("")}
            <ul>
        </li>`

    }
   
}


module.exports = {
    render
};