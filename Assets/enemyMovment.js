#pragma strict
var rb: Rigidbody2D;
var speed : int = 5;

function Start () {
    rb = GetComponent.<Rigidbody2D>();
}

function Update () {

}

function FixedUpdate (){
    rb.velocity = new Vector2(speed,0);
}