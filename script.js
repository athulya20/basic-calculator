<script type="text/javascript">

function button(){
document.getElementById("button1").style.backgroundColor("blue")
}

function numberdisplayer(num){

document.getElementsByClassName("box3")[0].innerHTML+=num


}

function clearbox(){
    document.getElementsByClassName("box3")[0].innerHTML=""

}

function calculation(){
    document.getElementsByClassName("box3")[0].innerHTML=eval(document.getElementsByClassName("box3")[0].innerHTML)

}


</script>