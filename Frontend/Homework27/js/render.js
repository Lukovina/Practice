function render(obj) {
    let names = obj.repos.map(repo=>repo.name),
        forkOwners = obj.forks.map(fork => fork.map(arr=>arr.full_name)),
        tableHolder = document.querySelector(".repo-table")

    for(let key in names) {
        tableHolder.innerHTML +=
        `<li class="repos-li">
        ${names[key]}
            <ul class="inner-ul">
                ${forkOwners[key].map(name=>`<li>${name}</li>`).join("")}
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

    inil.forEach(li=> li.addEventListener("mouseover", visibleOwnInner))
        
        function visibleOwnInner() {
            event.target.firstElementChild.classList.toggle("show")
        }
}


module.exports = {
    render
};