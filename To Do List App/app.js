const form = document.querySelector("form");
const main = document.querySelector("main");
let h = 160;

const addTasks = () => {
    if (document.querySelector("input").value === "")
        return;
    h += 32;
    main.style.height = `${h}px`;
    const div = document.createElement("div");
    const span = document.createElement("span");

    div.classList.add("list");
    const circle = `<i class="fa-regular fa-circle"></i>`;
    span.innerHTML = circle;

    const xmark = `<i class="fa-solid fa-xmark" id="cross"></i>`;
    const icon1 = document.createElement("i");
    icon1.innerHTML = xmark;
    span.append(document.querySelector("input").value);
    div.append(span);
    div.append(icon1);
    main.append(div);
    document.querySelector("input").value = "";

    // const icon = document.querySelector("#cross");
    // console.log(icon);
    icon1.addEventListener("click", function () {
        console.log(this);
        this.parentElement.remove();
        h -= 32;
        main.style.height = `${h}px`;

        console.log(document.querySelector("main div"));
        if (!document.querySelector("main div")) {
            h = 190;
            main.style.height = `${h}px`;
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(h);
    addTasks();
});
