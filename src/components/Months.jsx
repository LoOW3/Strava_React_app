import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getActivitiesMonth } from "../actions";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Loading from './img/loading.gif';
import s from './Months.module.css';


function mesAnterior(a) { 
    var date = new Date();   
    date.setMonth(date.getMonth() - a);
    return date.toISOString().substring(0, 7);
  }

function mesDistance(mes){
    const initialValue = 0;
    const mesDistance = mes.map(a=>a.distance);
    const sumDistance = mesDistance.reduce((a,b) => a + b, initialValue);
    return (sumDistance / 1000).toFixed(2);
}
function mesTime(mes){
    const initialValue = 0;
    const mesTime = mes.map(a=>a.elapsed_time);
    const sumTime = mesTime.reduce((a,b) => a + b, initialValue);
    return (sumTime / 60).toFixed(2);
}
function mesElevation(mes){
    const initialValue = 0;
    const mesElev = mes.map(a=> a.total_elevation_gain);
    const sumElev = mesElev.reduce((a,b) => a + b, initialValue);
    return sumElev.toFixed(2);
}


export default function Home(){
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities);
    

    activities.forEach(element => {
        let dateObj = new Date(element.start_date_local);
        let monthNameLong = dateObj.toLocaleString("en-US", { month: "long" }); 
        element.month = monthNameLong;
        element.year = element.start_date_local.slice(0,4);
    });
    function handleSelectMonth1(){
        dispatch(getActivitiesMonth(mesAnterior1))
    }
    function handleSelectMonth2(){
        dispatch(getActivitiesMonth(mesAnterior2))
    }
    function handleSelectMonth3(){
        dispatch(getActivitiesMonth(mesAnterior3))
    }
    
    
    
    const mesAnterior1 = activities.filter(a=> a.start_date_local.includes(mesAnterior(9))); //Debería ser .includes(mesAnterior(1))
    const mesAnterior2 = activities.filter(a=> a.start_date_local.includes(mesAnterior(10))); //Debería ser .includes(mesAnterior(2))
    const mesAnterior3 = activities.filter(a=> a.start_date_local.includes(mesAnterior(11))); //Debería ser .includes(mesAnterior(3))

    useEffect(() =>{
        dispatch(getActivities())
    },[dispatch])
    return(
        activities.length?<div>
            <Nav />
            <div>
                <div className={s.total}>
                    <div className={s.container}>
                        <div className={s.month}>{mesAnterior1[0].month}</div>
                        <div className={s.containerData}>
                            <div className={s.containerButton}>
                                <Link to='/actMonth'><button onClick={handleSelectMonth1} className={s.button}>All activities</button></Link>
                            </div>
                            <div className={s.containerSingle}>
                                <div>Distancia total</div><div>{mesDistance(mesAnterior1)}km</div>
                            </div>
                            <div className={s.containerSingle}>
                                <div>Tiempo total de actividad</div> <div>{mesTime(mesAnterior1)} minutos</div>
                            </div>
                            <div className={s.containerSingle}>
                            <div>Elevación positiva total</div><div>{mesElevation(mesAnterior1)} metros</div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className={s.total}>
                        <div className={s.container}>
                            <div className={s.month}>{mesAnterior2[0].month}</div>
                            <div className={s.containerData}>
                                <div className={s.containerButton}> 
                                    <Link to='/actMonth'><button onClick={handleSelectMonth2} className={s.button}>All activities</button></Link>
                                </div>
                                <div className={s.containerSingle}>
                                    <div>Distancia total</div><div>{mesDistance(mesAnterior2)}km</div>
                                </div>
                                <div className={s.containerSingle}>
                                    <div>Tiempo total de actividad</div><div>{mesTime(mesAnterior2)} minutos</div>
                                </div>
                                <div className={s.containerSingle}>
                                    <div>Elevación positiva total</div><div>{mesElevation(mesAnterior2)} metros</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className={s.total}> 
                        <div className={s.container}>
                            <div className={s.month}>{mesAnterior3[0].month}</div>
                            <div className={s.containerData}>
                                 <div className={s.containerButton}>
                                    <Link to='/actMonth'><button onClick={handleSelectMonth3} className={s.button}s>All activities</button></Link>
                                </div>
                                <div className={s.containerSingle}>
                                    <div>Distancia total</div><div>{mesDistance(mesAnterior3)}km</div>
                                </div>
                                <div className={s.containerSingle}>
                                    <div>Tiempo total de actividad</div><div>{mesTime(mesAnterior3)} minutos</div>
                                </div>
                                <div className={s.containerSingle}>
                                    <div>Elevación positiva total</div><div> {mesElevation(mesAnterior3)} metros</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>:
        <div>
            <Nav />
            <img src={Loading} width="200px"/>
        </div>
    )

}

