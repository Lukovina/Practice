function render(obj) {
    let names = obj.repos.map(repo=>repo.name),
        forkOwners = obj.forks.map(fork => fork.map(arr=>arr.full_name)),
        tableHolder = document.querySelector(".repo-table")


        tableHolder.innerHTML = "";
    for(let key in names) {
        tableHolder.innerHTML +=
        `<li class="repos-li">
        ${names[key]} (${(forkOwners[key] && forkOwners[key].length) || 0})
            <ul class="inner-ul">

            <ul>
        </li>`

    }

    let inul = document.querySelectorAll(".inner-ul"),
        inil = document.querySelectorAll(".repos-li")

    
    inul.forEach(ul => {
      ul.style.left = ul.parentElement.offsetWidth + "px"
      ul.style.top = ul.parentElement.offsetTop + "px"
        }
    )

}


module.exports = {
    render
};