// Cache l'élément monBoutton //
function myFunction() {
  var x = document.getElementById("monBoutton");
  if (x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Lance la fonction myFunction au chargement de la page
window.onload=myFunction();
// Barre de recherche google personnalisée // 
(function() {
  var cx = '008517678358045702984:9tqbuacvf0m'; // Insert your own Custom Search Engine ID here
  var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
// set up le pop up après 10 secondes d'attente //
window.onload=setTimeout(function() { alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); },10000);
