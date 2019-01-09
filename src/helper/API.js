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
    console.log(error.message);
  }

  return data
};

export const centuryCleaner = function(centuryData) {

  return centuryData.results.map(century => ({ 
    id: century.id,
    temporalOrder: century.temporalOrder,
    name: century.name,
  }));
}



