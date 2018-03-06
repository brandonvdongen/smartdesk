document.addEventListener("DOMContentLoaded", (ev) => {


    let settings = {
        active_monitor: 0,
        monitor_rotation: [0, 0, 0],
        monitor_height: [0, 0, 0]
    };
    const preview = document.querySelector(".preview");
    const monitor_control = document.querySelector(".monitor_control");
    const height_control = document.querySelector(".height_control input");
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

    function update_screen() {
        let rotation = 0
        if (settings.monitor_rotation[settings.active_monitor] === 1) {
            height_control.min = 30;
        } else {
            height_control.min = 0;
        }
        if (settings.monitor_rotation[settings.active_monitor] === 1) {
            rotation = 90;
        } else {
            rotation = 0;
        }
        let height = settings.monitor_height[settings.active_monitor];
        desk.monitors[settings.active_monitor].style.transform = "rotate(" + rotation + "deg)";
        desk.monitors[settings.active_monitor].style.bottom = height_control.value / 5 + "px";
    }



    console.log(rotation);
    console.log(desk);

    for (let value in rotation) {
        if (rotation.hasOwnProperty(value)) {
            rotation[value].addEventListener("click", () => {
                if (value === "landscape") {
                    settings.monitor_rotation[settings.active_monitor] = 0;
                } else if (value === "portrait") {
                    settings.monitor_rotation[settings.active_monitor] = 1;

                }

                update_screen();
            });

        }
    }

    for (let value in monitor_buttons) {
        if (monitor_buttons.hasOwnProperty(value)) {
            monitor_buttons[value].addEventListener("click", () => {
                settings.active_monitor = value;
                height_control.value = settings.monitor_height[value];
                update_screen();
                console.log(settings);
            });
        }
    }

    height_control.addEventListener("input", (ev) => {
        settings.monitor_height[settings.active_monitor] = height_control.value;
        update_screen();
    });

});