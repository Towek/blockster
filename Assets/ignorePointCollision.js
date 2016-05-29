#pragma strict
var bulletPrefab : Transform;
function Start () {
    var bullet = Instantiate(bulletPrefab) as Transform;
    Physics2D.IgnoreCollision(bullet.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
}

function Update () {

}