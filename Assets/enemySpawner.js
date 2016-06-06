#pragma strict
var cloneSpeed : int = 5;
public var spawnSpeed : float = 0.5;
var spawnDelay : float = 1;
var obj : GameObject;
var clone : Rigidbody2D;
var enemySpawnIndex : int = 0;
var map : GameObject;
map = GameObject.Find("Map");
static var spawnPlace = new Array();
function Start () {
    randomPosition();
    RandomizeArray(spawnPlace);

    //ALWAYS ON THE END OF START!!!!!!!!
    while(true){
        yield WaitForSeconds(spawnSpeed);
        startSpawning();
    }
}

function Update () {
}
    

function startSpawning(){
    if (enemySpawnIndex < map.transform.localScale.y-1){
        //Debug.Log("Free slots: "+enemyFreeSlots);
        var randX = Mathf.Round(Random.Range(-20, -15));
        var randY =  Mathf.Round(spawnPlace[enemySpawnIndex]);
        var clones : Rigidbody2D = Instantiate(clone, new Vector2(randX, randY), Quaternion.identity);

        clones.name = "enemyClone";
        clones.velocity = Vector2(cloneSpeed, 0);
        enemySpawnIndex++;
        return;
    }else{
        Debug.Log(map.transform.localScale.y);
        RandomizeArray(spawnPlace);
        enemySpawnIndex = 0;
    }
 }

function RandomizeArray(arr : Array){
    for (var i = arr.length - 1; i > 0; i--) {
        var r = Random.Range(0,i);
        var tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
        Debug.Log("Calling enemySpawner.RandomizeArray");
    }
}
function randomPosition(){
    for(var j = 0; j <= map.transform.localScale.y-1; j++){
        spawnPlace[j] = j;
        Debug.Log("Calling enemySpaner.randomPosition");
    };
}

