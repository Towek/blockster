#pragma strict
var clone : GameObject;
function Start () {
    
}

function Update () {
    var removeLaser = Camera.main.orthographicSize*2+Camera.main.transform.position.x/2;
    clone = GameObject.Find("enemyClone");
    if(clone.transform.position.x > removeLaser){
        //var enemysAlive = enemySpawner.enemyMaxSlots-enemySpawner.enemyFreeSlots;
        //Debug.Log("Permanently alive enemys on map from "+(enemysAlive)+" to "+(enemysAlive-1));
        Destroy(clone);
        //enemySpawner.enemyFreeSlots++;
    }
}