function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function updateSheet(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Budget Calculator");

  sheet.getRange("B2").setValue(data.income);
  sheet.getRange("B3").setValue(data.rent);
  sheet.getRange("B4").setValue(data.groceries);
  sheet.getRange("B5").setValue(data.utilities);

  SpreadsheetApp.flush(); // ensure formulas recalculate

  var totalExpenses = sheet.getRange("C6").getValue();
  var savings = sheet.getRange("C7").getValue();

  return {
    totalExpenses: totalExpenses,
    savings: savings
  };
}
