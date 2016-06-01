#pragma strict
public static var score : int = 0;
var map : GameObject;
var lvl_difficultyX = 0;
var enemySpawner: enemySpawner;
function Start () {
    map = GameObject.Find("Map");
    Debug.Log("Current lvl: "+lvl_difficultyX);
    generateRandomPosition(transform.position.x, transform.position.y);
}

function Update () {
    //Debug.Log();
    var playerBlock : GameObject;
    playerBlock = GameObject.Find("playerBlock");
    var playerPos_x = playerBlock.transform.position.x;
    var playerPos_y = playerBlock.transform.position.y;
    if(playerPos_x == transform.position.x && playerPos_y == transform.position.y){
        score++;
        Debug.Log("Score: "+score);
        generateRandomPosition(transform.position.y, transform.position.y);
        if(score/2 == lvl_difficultyX){
            Camera.main.transform.position.x -= 0.5;
            Camera.main.transform.position.y -= 0.5;
            Camera.main.orthographicSize -= 0.5;
            map.transform.position.x -= 0.5;
            map.transform.position.y -= 0.5;
            map.transform.localScale.x--;
            map.transform.localScale.y--;
            lvl_difficultyX++;
            Debug.Log("Current lvl: "+lvl_difficultyX);
            Debug.Log(MaxValue(enemySpawner.spawnPlace));
            }
        }
}


function generateRandomPosition(current_x, current_y){
    var map_x = map.transform.localScale.x;
    var map_y = map.transform.localScale.y;
    var rand_x = Mathf.Round(Random.Range(1, map_x-2));
    var rand_y = Mathf.Round(Random.Range(1, map_y-2));
    if (rand_x != current_x || rand_y != current_y){
        transform.position.y = rand_y;
        transform.position.x = rand_x;
        Debug.Log("New point pos x:"+ rand_x + "y: " + rand_y);
    }else{
        transform.position.x = Random.Range(1, map_x-2);
        transform.position.y = Random.Range(1, map_y-2);
    }
}

function MaxValue (intArray : int[]){
    var max = intArray[0];
    var location = 0;
    for (var i = 1; i < intArray.Length; i++) {
        if (intArray[i] > max) {
            max = intArray[i];
            location = i;
        }
    }
    return max;
}