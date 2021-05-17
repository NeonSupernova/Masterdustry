const purpleLaserCharge = new Effect(80, 100, e => {
    Draw.color(purple);
    Lines.stroke(e.fin() * 2);
    Lines.circle(e.x, e.y, 4 + e.fout() * 100);

    Fill.circle(e.x, e.y, e.fin() * 20);

    Angles.randLenVectors(e.id, 20, 40 * e.fout(), (x, y) => {
        Fill.circle(e.x + x, e.y + y, e.fin() * 5);
    });

    Fill.circle(e.x, e.y, e.fin() * 10);
});

