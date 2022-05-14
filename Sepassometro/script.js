function sePassando(){
    alert('Vou ter que aplicar, melhor melhorar isso ai!')
}
function naoPassando(){
    alert('Boaaa! Jé está orgulhoso, continue assim.')
}

var voltarTopo = document.getElementById("back-to-top")

voltarTopo.addEventListener("click", function() {
    window.scrollTo(0, 0)
})
