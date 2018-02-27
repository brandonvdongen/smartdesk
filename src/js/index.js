function set_monitor_rotation(monitor, rotation) {
    if (rotation === "landscape") {
        monitor.style.transform = "rotate(0deg)";
    } else if (rotation === "portrait") {
        monitor.style.transform = "rotate(90deg)";
    }
}

document.addEventListener("DOMContentLoaded", (ev) => {

    let active_monitor = 0;
    const preview = document.querySelector(".preview");
    const monitor_control = document.querySelector(".monitor_control");
    const height_control = document.querySelector(".height_control");
    const rotation_control = document.querySelector(".rotation_control");

    const desk = {
        base: preview.querySelector(".desk"),
        monitors: preview.querySelectorAll(".desk .mon")
    };
    const monitor_buttons = monitor_control.querySelectorAll(".monitor_button");
    const rotation = {
        landscape: rotation_control.querySelector(".landscape"),
        portrait: rotation_control.querySelector(".portrait")
    };

    console.log(rotation);
    console.log(desk);

    for (let value in rotation) {
        if (rotation.hasOwnProperty(value)) {
            rotation[value].addEventListener("click", () => {
                set_monitor_rotation(desk.monitors[active_monitor], value);
            });

        }
    }

    for (let value in monitor_buttons) {
        if (monitor_buttons.hasOwnProperty(value)) {
            console.log(value);
            monitor_buttons[value].addEventListener("click", () => {
                active_monitor = value;
                console.log(active_monitor);
            });
            console.log(monitor_buttons[value]);
        }
    }

});