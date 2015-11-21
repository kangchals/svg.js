
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
var xMiddle = x/2;
var yMiddle = y/2;
var clockRadious = y/2;
var now = new Date();
var nowHours = now.getHours();
var nowMinute = now.getMinutes();

console.log('nowHors', nowHours);
console.log('nowMinute', nowMinute);

var draw = SVG('drawing').size(x, y);
var group = draw.group();
var clock = draw.circle(clockRadious);

clock.attr({fill :'grey'});

group.add(clock);
group.cx(xMiddle);
group.cy(yMiddle);
