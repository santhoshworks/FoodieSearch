const APIKEY = 'AIzaSyCcwMHPxbtnGF5A4xRHNj-UugSoV1uCKPs';
import {Client} from "@googlemaps/google-maps-services-js";
import axios from 'axios'

async function  handler(request, response) {

    const queryString = request.query.search + '  ' + request.query.location ;
    const hostname = `https://maps.googleapis.com`;
    const path = `/maps/api/place/textsearch/json?`
    const query = `input=${queryString}&type=restaurant&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=${APIKEY}`;

    const client = new Client({});

    const url = hostname + path + query
    await axios.get(url)
        .then(res => {
            response.status(200).json(res.data)
        })
}

export default handler;