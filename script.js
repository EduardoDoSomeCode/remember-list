const quoteToDisplay = [
    "Recuerda revisar dos veces antes de enviar.",
    "La paciencia es una virtud.",
    "No dejes para mañana lo que puedas hacer hoy.",
    "Haz una pausa y respira profundamente.",
    "Siempre hay algo por lo que estar agradecido.",
    "Cuida tu mente tanto como cuidas tu cuerpo.",
    "Trata a los demás como te gustaría ser tratado.",
    "El éxito no es final, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
    "Sé amable contigo mismo.",
    "La vida es un viaje, no un destino.",
    "Aprende algo nuevo cada día.",
    "No temas pedir ayuda cuando la necesites.",
    "La consistencia es la clave del progreso.",
    "La mejor manera de predecir el futuro es crearlo.",
    "Cree en ti mismo, siempre.",
    "La felicidad es una elección que haces cada día.",
    "Celebra los pequeños logros.",
    "Haz lo que amas y ama lo que haces.",
    "El cambio es inevitable, el crecimiento es opcional.",
    "No te compares con los demás; tú eres único.",
];

const showHourToday = () => {

    let htmlDisplayTag = document.getElementById('main-hour')
    const date = new Date();

    let recentData = new Intl.DateTimeFormat('es', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(date)

    htmlDisplayTag.innerHTML += recentData;


}

const displayQuoteToHTML =() =>{
    let quoteToDisplayText = document.getElementById('p-text')
    quoteToDisplayText.innerHTML +=`"${quoteToDisplay[Math.floor(Math.random() * quoteToDisplay.length)]}"`

}


const globalInitFuntion = () =>{
    showHourToday();
    displayQuoteToHTML();
}