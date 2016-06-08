#pragma strict
var movePower = 1;
var anim : Animator;
function Start () {

}

function Update () {
    anim = GetComponent(Animator);
    var map : GameObject;
    map = GameObject.Find("Map");
    if(Input.GetKeyDown("space")) movePower = 2;
    else if(Input.GetKeyUp("space")) movePower = 1;

    if(transform.position.x + movePower < map.transform.localScale.x) {
        if(Input.GetKeyDown("right")) transform.position.x += movePower;
    }
    if(transform.position.x - movePower >= 0) {
        if(Input.GetKeyDown("left")) transform.position.x -= movePower;
    }
    if(transform.position.y + movePower < map.transform.localScale.y) {
        if(Input.GetKeyDown("up")) transform.position.y += movePower;
    }
    if(transform.position.y - movePower >= 0) {
        if(Input.GetKeyDown("down")) transform.position.y -= movePower;
    }
}
