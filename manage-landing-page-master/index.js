function enviar (){
    const input = document.getElementById('input').value
    const at = input.includes('@')

    if(at != true){
        alert('Error')
    } else {
        alert('Exito')
    }
} 