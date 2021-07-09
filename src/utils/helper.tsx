export const setRegions = (regions: any) => {
  var regionOptions = [];
  for (var key in regions) {
    var regionOption: any = {};
    regionOption["value"] = regions[key].ID;
    regionOption["label"] = regions[key].EnglishName;
    regionOptions.push(regionOption);
  }
  return regionOptions;
};

export const setCountries = (countries: any) => {
  var countryOptions = [];
  for (var key in countries) {
    var countryOption: any = {};
    countryOption["value"] = countries[key].ID;
    countryOption["label"] = countries[key].EnglishName;
    countryOptions.push(countryOption);
  }
  return countryOptions;
};
