#pragma strict
var clone : GameObject;
function Start () {
    
}

function Update () {
    var removeLaser = Camera.main.orthographicSize*2+Camera.main.transform.position.x/2;
    
    if(GameObject.Find("enemyClone") != -1){
        clone = GameObject.Find("enemyClone");
        if(clone.transform.position.x > removeLaser){
            Destroy(clone);
        }
    }

}