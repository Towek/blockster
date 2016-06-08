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

    if(transform.position.x >= map.transform.localScale.x-1 && transform.position.y >= map.transform.localScale.y-1){
        if (Input.GetKeyDown ("left")) transform.position.x -= movePower;
        if (Input.GetKeyDown ("down")) transform.position.y -= movePower;
        //Debug.Log("Block up and right");
    }else if(transform.position.x <= 0 && transform.position.y >= map.transform.localScale.y-1){
        if (Input.GetKeyDown ("right")) transform.position.x += movePower;
        if (Input.GetKeyDown ("down")) transform.position.y -= movePower;
        //Debug.Log("Block up and left");
    }else if(transform.position.x <= 0 && transform.position.y <= 0){
        if (Input.GetKeyDown ("up")) transform.position.y += movePower;
        if (Input.GetKeyDown ("right")) transform.position.x += movePower;
        //Debug.Log("Block down and left");
    }else if(transform.position.x >= map.transform.localScale.x-1 && transform.position.y <= 0){
        if (Input.GetKeyDown ("up")) transform.position.y += movePower;
        if (Input.GetKeyDown ("left")) transform.position.x -= movePower;
        //Debug.Log("Block down and right");
    }else if( transform.position.x >= map.transform.localScale.x-1){
        if (Input.GetKeyDown ("up")) transform.position.y += movePower;
        if (Input.GetKeyDown ("down")) transform.position.y -= movePower;
        if (Input.GetKeyDown ("left")) transform.position.x -= movePower;
        //Debug.Log("Block right");
    }else if(transform.position.x == 0){
        if (Input.GetKeyDown ("up")) transform.position.y += movePower;
        if (Input.GetKeyDown ("down")) transform.position.y -= movePower;
        if (Input.GetKeyDown ("right")) transform.position.x += movePower;
        //Debug.Log("Block left");
    }else if(transform.position.y >= map.transform.localScale.y-1){
        if (Input.GetKeyDown ("down")) transform.position.y -= movePower;
        if (Input.GetKeyDown ("left")) transform.position.x -= movePower;
        if (Input.GetKeyDown ("right")) transform.position.x += movePower;
        //Debug.Log("Block up");
    }else if(transform.position.y <= 0){
        if (Input.GetKeyDown ("up")) transform.position.y += movePower;
        if (Input.GetKeyDown ("left")) transform.position.x -= movePower;
        if (Input.GetKeyDown ("right")) transform.position.x += movePower;
        //Debug.Log("Block down");
    }else{
        if (Input.GetKeyDown ("up")){  transform.position.y += movePower; anim.Play("moveY", PlayMode.StopSameLayer);}
        if (Input.GetKeyDown ("down")) transform.position.y -= movePower;
        if (Input.GetKeyDown ("left")) transform.position.x -= movePower;
        if (Input.GetKeyDown ("right")) transform.position.x += movePower;
    }
}
