//1. View element attribute
document.querySelector("a");
// <- '<a href = "https://www.google.com">Google</a>;

//2. Viewing ALL element values
document.querySelector("a").attributes;
// <- '>NamedNodeMap {0: href, href: href, length: 1};

//3. Get value of a attribute
// !-NOTE: Single parameter
document.querySelector("a").getAttribute("href");
// <- "https://www.google.com";

//4. Change the value of an attribute
// !-NOTE: Two parameters
document.querySelector("a").setAttribute("href", "https://www.bing.com");
// <- Undefined
// When user clicks on attribute "a"(Google), goes to 'bing.com'