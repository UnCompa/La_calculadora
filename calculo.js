const pantalla = document.querySelector("#pantalla")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent
        //Borrar
        if(boton.id === "borrarTodo"){
            pantalla.textContent = 0
            return
        }
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){ 
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return
        }
        //Potenciacion
        if(boton.id === "potenciar"){
            pantalla.textContent = Math.pow(2,pantalla.textContent)
            return
        }
        //Raiz
        if(boton.id === "raiz"){
            pantalla.textContent = Math.sqrt(pantalla.textContent,pantalla.textContent)
            return
        }
        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Error"
            }
            return
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado
        } else {
            pantalla.textContent += botonApretado
        }
    })
})