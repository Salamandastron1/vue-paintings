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



