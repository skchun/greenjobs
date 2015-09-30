# Overview

Provides 3 functions for computer analytics over the [Hawaii Open Dataset for Green Jobs](http://philipmjohnson.github.io/ics314f15/morea/underscore/inclass-greenjobs.html).

# Installation

Provide the following scripts in your html file:
```
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/underscore-min.js"></script>
<script src="//philipmjohnson.github.io/ics314f15/morea/underscore/greenjobs.js"></script>
<script src="greenjobs.js"></script>
```

# Usage

Here are example calls to the analytic functions
```
<script>
console.log(listIndustries(greenjobs));
console.log(countyGreenJobs(greenjobs));
console.log(jobsWithKeyword(greenjobs, "PV"));
</script>
```

Consult the greenjobs.js file for more details on these functions.

# Credits

Uses the [Underscore](http://underscorejs.org) library.
