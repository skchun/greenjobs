/* globals _, greenjobs */

/**
 * testData is a small sample of data used to test functions
 * @type {Array}
 */
var testData = greenjobs.splice(0,10);
console.log(testData);

/**
 *  listIndustries takes on some data and returns the industries within it
 *  @param data The data to parse
 *  @returns {Array}
 */
function listIndustries(data){
  return _.uniq(_.pluck(data,"Industry"));
}

/**
 * countyGreenJobs takes on some data and returns the number of jobs by County
 * @param data The data to parse
 * @returns {*}
 */
function countyGreenJobs(data){
  return _.countBy(_.pluck(data,"County"));
}

/**
 * jobsWithKeyword takes on some data and returns the jobs with the matching keyword in "Job Title"
 * @param data The data to parse
 * @param keyword the keyword to search for within the data
 * @returns {Array}
 */
function jobsWithKeyword(data, keyword){
  return _.filter(_.pluck(data,"Job Title"), function(num){
    return num.includes(keyword);
  });
}

