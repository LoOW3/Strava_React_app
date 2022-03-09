import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from './img/loading.gif';
import Nav from "./Nav";
import Card from "./Card";
import { Link } from "react-router-dom";
import s from './ActMonth.module.css'

export default function ActMonth(){
    const activities = useSelector(state => state.activitiesMonth);
    console.log('activities month',activities)
    return(
        activities.length?<div>
            <Nav />
            {
                activities.map(a => {return <Card name={a.name} date={a.start_date_local} distance={a.distance} time={a.elapsed_time} elevation={a.total_elevation_gain} key={a.upload_id}/>})
            }
            <div>
                <Link to='/months'><button className={s.button}>Volver</button></Link>
            </div>
        </div>:
        <div>
            <Nav />
            <img src={Loading} width="200px"/>
        </div>
    )
}