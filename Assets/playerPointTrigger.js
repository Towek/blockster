#pragma strict
public static var score : int = 0;
var map : GameObject;
var cloneRemover : GameObject;
var cloneRemoverRG2D: Rigidbody2D;
var text : GameObject;
var scoreText : UI.Text;
var textL : GameObject;
var liveText : UI.Text;
var lvl_difficultyX = 1;
var spawner: GameObject;
function Start () {
    map = GameObject.Find("Map");
    cloneRemover = GameObject.Find("enemyCloneRemover");
    cloneRemoverRG2D = cloneRemover.GetComponent.<Rigidbody2D>();
    text = GameObject.Find("scoreText");
    scoreText = text.GetComponent.<UI.Text>();
    textL = GameObject.Find("liveText");
    liveText = text.GetComponent.<UI.Text>();
    Debug.Log("Current lvl: "+lvl_difficultyX);
    generateRandomPosition(transform.position.x, transform.position.y);
    score = 0;
}

function Update () {
    //Debug.Log();
    var playerBlock : GameObject;
    var timeAlive : float;
    playerBlock = GameObject.Find("playerBlock");
    var playerPos_x = playerBlock.transform.position.x;
    var playerPos_y = playerBlock.transform.position.y;
    if(playerPos_x == transform.position.x && playerPos_y == transform.position.y){
        score++;
        scoreText.text = score.ToString();
        generateRandomPosition(transform.position.y, transform.position.y);
        if(score/5 == lvl_difficultyX){
            if(lvl_difficultyX <= 16){
                Camera.main.transform.position.x -= 0.5;
                Camera.main.transform.position.y -= 0.5;
                Camera.main.orthographicSize -= 0.5;
                map.transform.position.x -= 0.5;
                map.transform.position.y -= 0.5;
                map.transform.localScale.x--;
                map.transform.localScale.y--;
                lvl_difficultyX++;
                Debug.Log("Current lvl: "+lvl_difficultyX);
                //var v = new Vector2(cloneRemover.transform.position.x, map.transform.localScale.y);
                //cloneRemoverRG2D.MovePosition(v);
                cloneRemover.transform.position.y = map.transform.localScale.y;


                var enemySpawner : enemySpawner = map.GetComponent(typeof(enemySpawner));
                enemySpawner.spawnSpeed -= 0.005*(score/10);
                enemySpawner.cloneSpeed += 0.1;
                enemySpawner.spawnPlace = [];
                enemySpawner.randomPosition();
                enemySpawner.RandomizeArray(enemySpawner.spawnPlace);
            }else{
                enemySpawner.spawnSpeed -= 0.005*(score/10);
                timeAlive += Time.deltaTime;
                scoreText.text = "Alive for "+timeAlive.ToString();
            }
        }
    }
}


function generateRandomPosition(current_x, current_y){
    var rand_x;
    var rand_y;
    if(lvl_difficultyX > 16){
        rand_x = Mathf.Round(Random.Range(1, map.transform.localScale.x-1));
        rand_y = Mathf.Round(Random.Range(1, map.transform.localScale.y-1));
        if (rand_x != current_x || rand_y != current_y){
            transform.position.y = rand_y;
            transform.position.x = rand_x;
            Debug.Log("New point pos x:"+ rand_x + "y: " + rand_y);
        }else{
            transform.position.x = Mathf.Round(Random.Range(1, map.transform.localScale.x-1));
            transform.position.y = Mathf.Round(Random.Range(1, map.transform.localScale.y-1));
        }
    }else{
        rand_x = Mathf.Round(Random.Range(1, map.transform.localScale.x-2));
        rand_y = Mathf.Round(Random.Range(1, map.transform.localScale.y-2)) ;
        if (rand_x != current_x || rand_y != current_y){
            transform.position.y = rand_y;
            transform.position.x = rand_x;
            Debug.Log("New point pos x:"+ rand_x + "y: " + rand_y);
        }else{
            transform.position.x = Mathf.Round(Random.Range(1, map.transform.localScale.x-2));
            transform.position.y = Mathf.Round(Random.Range(1, map.transform.localScale.y-2));
        }
    }
}

function MaxValue (intArray : int[]) : int {
    var max = intArray[0];
    var location = 0;
    for (var i = 1; i < intArray.Length; i++) {
        if (intArray[i] > max) {
            max = intArray[i];
            location = i;
        }
    }
    return location;
}