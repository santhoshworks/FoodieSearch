// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import yelp from "yelp-fusion";
const APIKEY = 'wFp5nGxIPZsjo9mRD4Kw5dzAm1KrqlYD7ryVSt88pKMK0nHUvtVVu-sCEDg9sAINVSjCHZKq7PCct32_Fog89iM4CCPyz98ky8-ywCaBnv24T_0AI5xx0UQZeO5oYXYx';
const client = yelp.client(APIKEY);


async function  handler(request, res) {

    const searchRequest = {
        term:'Pork Cassoulet',
        location: '27560'
    };
    await   client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses;
        const prettyJson = JSON.stringify(firstResult, null, 4);
        console.log(prettyJson);
        res.status(200).json(prettyJson)
      }).catch(e => {
        console.log(e);
      });
}

export default handler;