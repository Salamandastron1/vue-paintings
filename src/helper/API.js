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

export const photoCleaner = async function() {
  //eslint-disable-next-line
  const page = Math.floor(Math.random() * Math.floor(40))
  const url = `https://api.harvardartmuseums.org/image/?apikey=6aadb940-12c8-11e9-b96e-b96134bf93ea&page=${page}`
  const data = await apiCall(url);

  return data.records
}


