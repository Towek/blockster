#pragma strict

function Start () {

}

function Update () {
    var playerBlock : GameObject;
    playerBlock = GameObject.Find("playerBlock");
    var playerPos_x = playerBlock.transform.position.x;
    var playerPos_y = playerBlock.transform.position.y;
    if(playerPos_x == transform.position.x && playerPos_y == transform.position.y){
        Debug.Log("Working");
        generateRandomPosition(transform.position.x, transform.position.y);
    };
}

function generateRandomPosition(current_x, current_y){
    var map : GameObject;
    map = GameObject.Find("Map");
    var map_x = map.transform.lossyScale.x;
    var map_y = map.transform.lossyScale.y;
    var rand_x = Mathf.Round(Random.Range(0, map_x-1));
    var rand_y = Mathf.Round(Random.Range(0, map_y-1));
    if (rand_x != current_x || rand_y != current_y){
        transform.position.y = rand_y;
        transform.position.x = rand_x;
        Debug.Log("New point pos x:"+ rand_x + "y: " + rand_y);
    }else{
        transform.position.x = Random.Range(0, map_x);
        transform.position.y = Random.Range(0, map_y);
    }
}