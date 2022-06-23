// Parameters or Edge cases:
// Return:
// Examples:
// Psuedo code:
//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
// No instructions but once running sample tests it told us what it expected. Template literals with an array template.

//my answer changed # to $ added space after ', ' and ! at the end of the template literal
function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

//most clever
const buildString = (...template) => `I like ${template.join(', ')}!`;