setinterval(setClock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')



function setClock(){
    const currentdate = new Date()
    const secondsratio =  currentdate.getSeconds() / 60
    const minutesratio =  (secondsratio + currentdate.getminutes()) / 60
    const hoursratio = (minutesratio + currentdate.getHours()) / 12
    
    setrotation(secondhand, secondsratio)
    setrotation(minutehand, minutesratio)
    setrotation(hourhand, hoursratio)
    
  
}

 function setrotation(element,rotationratio) {
    element.style.setproperty('--rotation', rotationratio * 360)
 }

 setClock()
