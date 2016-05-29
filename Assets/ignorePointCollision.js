#pragma strict
var bulletPrefab : Transform;
function Start () {
    var bullet = Instantiate(bulletPrefab) as Transform;
    Physics.IgnoreCollision(bullet.GetComponent.<Collider>(), GetComponent.<Collider>());
}

function Update () {

}