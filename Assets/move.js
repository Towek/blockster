#pragma strict
var movePower = 1;
var anim : Animator;
var rb2D : Rigidbody2D;
function Start () {
    rb2D = GetComponent.<Rigidbody2D>();
}

function Update () {
    anim = GetComponent(Animator);
    var map : GameObject;
    map = GameObject.Find("Map");
    if(Input.GetKeyDown("space")) movePower = 2;
    else if(Input.GetKeyUp("space")) movePower = 1;

    if(transform.position.x + movePower < map.transform.localScale.x) {
        if(Input.GetKeyDown("right")) rb2D.MovePosition(new Vector2(transform.position.x+movePower, transform.position.y));
    }
    if(transform.position.x - movePower >= 0) {
        if(Input.GetKeyDown("left")) rb2D.MovePosition(new Vector2(transform.position.x-movePower, transform.position.y));
    }
    if(transform.position.y + movePower < map.transform.localScale.y) {
        if(Input.GetKeyDown("up")) rb2D.MovePosition(new Vector2(transform.position.x, transform.position.y+movePower));
    }
    if(transform.position.y - movePower >= 0) {
        if(Input.GetKeyDown("down")) rb2D.MovePosition(new Vector2(transform.position.x, transform.position.y-movePower));
    }
}
