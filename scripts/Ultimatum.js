const electroSapBullet = extend(SapBulletType, {
update(b){
if(b.fin()<0.001){
for(var i = 0; i < this.lightning; i++){
Lightning.create(b, this.lightningColor, this.lightningDamage < 0 ? this.damage : this.lightningDamage, b.x, b.y, b.rotation() + Mathf.range(this.lightningCone) + this.lightningAngle, this.lightningLength + Mathf.random(this.lightningLengthRand));
}
}
this.super$update(b);
}
});
electroSapBullet.sapStrength = 0.48;
electroSapBullet.length = 55;
electroSapBullet.damage = 37;
electroSapBullet.shootEffect = Fx.railShoot;
electroSapBullet.hitColor = electroSapBullet.color = Color.valueOf("fbff9e");
electroSapBullet.despawnEffect = Fx.railHit;
electroSapBullet.width = 3;
electroSapBullet.lifetime = 45;
electroSapBullet.knockback = -1;
electroSapBullet.lightning = 4;//количество молний
electroSapBullet.lightningLength = 2;//длина молнии
electroSapBullet.lightningLengthRand = 10;//рандомное число от 0 до 15 будет прибавляться к длине молнии, то есть рандомизация длины
electroSapBullet.lightningDamage = 50;//урон молнии
electroSapBullet.lightningAngle = 6;//угол направления молний относительно угла пули
electroSapBullet.lightningCone = 12;//рандомизация угла направления молний 
electroSapBullet.largeHit = true;
electroSapBullet.lightColor = electroSapBullet.lightningColor = Color.valueOf("fbff9e");

