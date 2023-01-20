

function openWin() {
   const windowStatus = document.getElementById("windowBox").classList.remove("invisible")
}

document.addEventListener("keydown", function(e){

   if(e.key === "Escape"){
      const windowStatus = document.getElementById("windowBox").classList.add("invisible")
   }

});