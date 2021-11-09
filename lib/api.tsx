var axios = require("axios").default;

async function fetchAPI(uri: string, query: Object) {
  const res = await fetch(`http://localhost:5000/api/v1/${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json;

  //   axios
  //     .post(`${process.env.REST_API}/api/v1/${uri}`, query)
  //     .then((response: any) => {
  //       console.log(response);
  //       return response;
  //     });
}

export async function createMonitaPost(data: Object) {
  const response = await fetchAPI("monitas", data);
  return response.data._id;
}

export async function getSingleMonita(groupId: string) {
  const res = await fetch(`${process.env.REST_API}/api/v1/monitas/${groupId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getLoginUserInfo(useremail: string) {
  var options = {
    method: "GET",
    url: `https://${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
    params: { q: `email:"${useremail}"`, search_engine: "v3" },
    headers: { authorization: `Bearer ${process.env.AUTH0_API_TOKEN}` },
  };

  axios
    .request(options)
    .then(function (response: { data: any }) {
      console.log(response.data);
    })
    .catch(function (error: any) {
      console.error(error);
    });
}
