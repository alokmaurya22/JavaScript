const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(btn);
console.log(body);

btn.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (events) {
        console.log(events);
        console.log(events.target);
        switch (events.target.id) {
            case events.target.id:
                body.style.backgroundColor = events.target.id;
                break;
            /*
            case grey:
              body.style.backgroundColor = grey;
            break;
            case white:
              body.style.backgroundColor = white;
            break;
            case blue:
              body.style.backgroundColor = blue;
            break;
            case yellow:
              body.style.backgroundColor = yellow;
            break;
            */
        }
    });
});