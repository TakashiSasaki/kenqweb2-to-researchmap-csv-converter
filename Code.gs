function doGet() {
  var htmlTemplate = HtmlService.createTemplateFromFile("index");
  var htmlOutput = htmlTemplate.evaluate();
  htmlOutput.setTitle("kenqweb2 to researchmap CSV converter");
  return htmlOutput;
}
