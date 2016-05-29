#pragma strict
var light : GameObject;
function Start () {

}

function Update () {
    var light = GameObject.Find("2DPointLightWithGradient");
    light.transform.position = transform.position;
}