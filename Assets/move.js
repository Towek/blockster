#pragma strict
var movePower = 1;
function Start () {

}

function Update () {
   
    var map : GameObject;
    map = GameObject.Find("Map");
    if(Input.GetKeyDown("space")){
        movePower = 2;
        //Debug.Log("Speed BOOST!");
    }else if(Input.GetKeyUp("space")){
        movePower = 1;
        //Debug.Log("Speed DOWN!");
    }
    if(transform.position.x >= map.transform.lossyScale.x-1 && transform.position.y >= map.transform.lossyScale.y-1){
        if (Input.GetKeyUp ("left")) transform.position.x -= movePower;
        if (Input.GetKeyUp ("down")) transform.position.y -= movePower;
        //Debug.Log("Block up and right");
    }else if(transform.position.x <= 0 && transform.position.y >= map.transform.lossyScale.y-1){
        if (Input.GetKeyUp ("right")) transform.position.x += movePower;
        if (Input.GetKeyUp ("down")) transform.position.y -= movePower;
        //Debug.Log("Block up and left");
    }else if(transform.position.x <= 0 && transform.position.y <= 0){
        if (Input.GetKeyUp ("up")) transform.position.y += movePower;
        if (Input.GetKeyUp ("right")) transform.position.x += movePower;
        //Debug.Log("Block down and left");
    }else if(transform.position.x >= map.transform.lossyScale.x-1 && transform.position.y <= 0){
        if (Input.GetKeyUp ("up")) transform.position.y += movePower;
        if (Input.GetKeyUp ("left")) transform.position.x -= movePower;
        //Debug.Log("Block down and right");
    }else if( transform.position.x >= map.transform.lossyScale.x-1){
        if (Input.GetKeyUp ("up")) transform.position.y += movePower;
        if (Input.GetKeyUp ("down")) transform.position.y -= movePower;
        if (Input.GetKeyUp ("left")) transform.position.x -= movePower;
        //Debug.Log("Block right");
    }else if(transform.position.x <= 0){
        if (Input.GetKeyUp ("up")) transform.position.y += movePower;
        if (Input.GetKeyUp ("down")) transform.position.y -= movePower;
        if (Input.GetKeyUp ("right")) transform.position.x += movePower;
        //Debug.Log("Block left");
    }else if(transform.position.y >= map.transform.lossyScale.y-1){
        if (Input.GetKeyUp ("down")) transform.position.y -= movePower;
        if (Input.GetKeyUp ("left")) transform.position.x -= movePower;
        if (Input.GetKeyUp ("right")) transform.position.x += movePower;
        //Debug.Log("Block up");
    }else if(transform.position.y <= 0){
        if (Input.GetKeyUp ("up")) transform.position.y += movePower;
        if (Input.GetKeyUp ("left")) transform.position.x -= movePower;
        if (Input.GetKeyUp ("right")) transform.position.x += movePower;
        //Debug.Log("Block down");
    }else{
        if (Input.GetKeyUp ("up")) transform.position.y += movePower;
        if (Input.GetKeyUp ("down")) transform.position.y -= movePower;
        if (Input.GetKeyUp ("left")) transform.position.x -= movePower;
        if (Input.GetKeyUp ("right")) transform.position.x += movePower;
    }
}
