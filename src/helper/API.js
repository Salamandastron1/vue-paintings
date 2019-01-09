export const apiCall = async function (url, options) {
  let response;
  let data;

  try {
    if(options) {
      response = await fetch(url, options);
    } else {
      response = await fetch(url);
    }
    data = await response.json();

  } catch(error) {
      if (error.name == "SyntaxError") {
      alert( "JSON Error: " + error.message );
    } else {
      throw error;
    }
  }

  return data
};

export const centuryCleaner = function(centuryData) {
  return centuryData.records.map(century => ({ 
    id: century.id,
    temporalOrder: century.temporalOrder,
    name: century.name,
  }));
};

export const photoCleaner = async function(categories) {
  //eslint-disable-next-line
  console.log(categories)
  const response = await Promise.all(categories.contains.groups.map(async cat => {
      const url = `https://api.harvardartmuseums.org/group/${cat.groupid}?apikey=6aadb940-12c8-11e9-b96e-b96134bf93ea&sort=temporalorder&sortorder=desc`
      const groupResponse = await apiCall(url)

      return groupResponse
    })
  )

  console.log(response)
}


