
export function DeleteTeam() {
  return fetch("/api/teams/delete",{
    method: 'DELETE'
  })
  .then(res => res.json()
    )
  };


export function getAll(){
    return fetch('/api/teams/index')
    .then(res => res.json());
}


async function getTeamInfo(team) {
    const promiseArray = [
      `https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`,
      "https://api-football-v1.p.rapidapi.com/v2/leagueTable/524"
    ];
    const options = {
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY
      }
    };
    async function getData(urls, options) {
      try {
        const data = await Promise.all(
          urls.map(async url => {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
          })
        ).then(result => result);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    }
    const response = await getData(promiseArray, options);
    return await response;
  }

  export default getTeamInfo;


      // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // fetch for one url
  
    // let data = await fetch(
    //   `https://api-football-v1.p.rapidapi.com/v2/teams/search/${team}`,
    //   {
    //     headers: {
    //       "X-RapidAPI-Key": "d690ddb5d3mshc99b2805d0e2c7ap171589jsn1f3bd4c4ffaf"
    //     }
    //   }
    // );
    // let jsonData = await data.json();
    // return await jsonData.api.teams[0];
  
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // fetch for multiple urls

