import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../actions";
import Nav from "./Nav"
import Card from "./Card";
import Loading from './img/loading.gif'
import s from './Home.module.css';

export default function Home(){
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities);
    const lastActivities = activities.slice(0,4);
    
    useEffect(() =>{
        dispatch(getActivities())
    },[dispatch])
    //console.log("estoy en el home",activities)
    return(
        lastActivities.length?<div className={s.container}>
            <Nav />
            {
                lastActivities.map(a => {return <Card name={a.name} date={a.start_date_local} distance={a.distance} time={a.elapsed_time} elevation={a.total_elevation_gain} key={a.upload_id}/>})
            }
        </div>:
        <div className={s.container}>
            <Nav />
            <img src={Loading} width="500px" className={s.loading}/>
        </div>
    )
}