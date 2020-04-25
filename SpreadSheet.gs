function ssTimeStamp() {
  
  var ss = SpreadsheetApp.openByUrl([insert your SS URL in double quotes]);
  var sheet = ss.getSheetByName([Remember to add your sheet name]);
  var range = sheet.getRange(1,1);
  
  range.setValue(timeStamp());
  
}
