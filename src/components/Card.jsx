
import s from './Card.module.css'
export default function Card({name, date, distance, time, elevation}){

    return(
        <div className={s.total}>
            
            <div className={s.container}>
                <div className={s.name}>{name}</div>
                <div className={s.containerData}>
                    <div className={s.containerSingle}><div>Fecha</div><div>{date.slice(0,10)}</div></div>
                    <div className={s.containerSingle}><div>Hora</div><div>{date.slice(11,16)}hr</div></div>
                    <div className={s.containerSingle}><div>Distancia Total</div><div>{(distance / 1000).toFixed(2)}km</div></div>
                    <div className={s.containerSingle}><div>Tiempo Total</div><div>{(time / 60).toFixed(2)} minutos</div></div>
                    <div className={s.containerSingle}><div>Elevación</div><div>{elevation} metros</div></div>
                </div>
            </div>
        </div>
    )

}