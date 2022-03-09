import axios from "axios";

const link = 'https://www.strava.com/oauth/token?client_id=79182&client_secret=425762e622388e8ad1328b8d8015b1a044d334ed&refresh_token=3a84ff5b4e3f035b20fbf97a85bc12b4daef43fe&grant_type=refresh_token';


export  function getActivities(){
    return async function(dispatch){
        let accessToken = await authorizer();
        var json = await axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${accessToken}`);
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: json.data
        })

    }
}
export function getActivitiesMonth(mes){
    return function(dispatch){
        return dispatch({
            type: 'GET_ACTIVITIES_MONTH',
            payload: mes
        })
    }
}
async function  authorizer(){
    const auth = await axios.post(link)
    const accessToken = auth.data;
    
    return accessToken.access_token;

}