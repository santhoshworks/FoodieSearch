const APIKEY = 'AIzaSyCcwMHPxbtnGF5A4xRHNj-UugSoV1uCKPs';
import {Client} from "@googlemaps/google-maps-services-js";

function  handler(request, response) {

    const queryString = request.query.search;
    const client = new Client({});

    client.placeAutocomplete({
    params: {
        input: queryString,
      key: APIKEY,
      types: ['(cities)'],
      componentRestrictions: {country: "us"}
    },
    timeout: 4000, // milliseconds
  })
  .then((r) => { 
      console.log(r.data)
    response.status(200).json(r.data.predictions)
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
    response.end()
  }); 
}

export default handler;