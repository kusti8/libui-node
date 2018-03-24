var libui = require("../index.js");

var win = new libui.UiWindow("Test window", 800, 600, false);
win.margined = 1;
win.onClosing(function () {
	libui.stopLoop();
});

var fixed = new libui.UiFixed()

var button = new libui.UiButton("Button")

fixed.append(button, 300, 500)

libui.Ui.setSize(button, 100, 100)

win.setChild(fixed)

win.show();

console.log(libui.Ui.size(fixed))

libui.startLoop();
