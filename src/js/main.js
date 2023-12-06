function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('')
    console.log(textoArray)
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        console.log(i);
        setTimeout(() => elemento.innerHTML += letra,100 * i)
    });
}

const titulo = document.querySelector('.cabecalho__nome')
typeWriter(titulo)