var libui = require('../index.js');

libui.Ui.init();

function draw(area, p) {
	var brush = new libui.DrawBrush();
	var path = new libui.UiDrawPath(0);

	brush.setColor(new libui.Color(128, 0, 0, 1));
	path.addRectangle(50, 50, 540, 380);
	path.end();
	p.getContext().fill(path, brush);
	path.freePath();
}

var noop = function () {};
var win = new libui.UiWindow('minimal Canvas rectangle', 640, 480, true);
var canvas = new libui.UiArea(draw, noop, noop, noop, noop, 300, 150);
var cntr = new libui.UiVerticalBox();
cntr.append(canvas, true);

win.setChild(cntr);

win.onClosing(function () {
	win.close();
	libui.stopLoop();
});

win.show();

libui.startLoop();
