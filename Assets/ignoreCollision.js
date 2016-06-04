#pragma strict
var obj : GameObject;
function Start () {

}

function Update () {
    Physics2D.IgnoreCollision(GetComponent.<Collider2D>(), obj.GetComponent.<Collider2D>());
}