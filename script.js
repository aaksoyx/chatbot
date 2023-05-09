// Get HTML elements
const userInput = document.querySelector("#user-input");
const sendBtn = document.querySelector("#send-btn");
const chatbotOutput = document.querySelector("#chatbot-output");

// Event listener for send button
sendBtn.addEventListener("click", () => {
  // Get user input
  const inputText = userInput.value;
  
  // Add user message to chatbot output
  chatbotOutput.innerHTML += `<p><strong>You:</strong> ${inputText}</p>`;
  
  // Clear user input
  userInput.value = "";
  
  // Generate chatbot response
  const chatbotResponse = generateChatbotResponse(inputText);
  
  // Add chatbot response to chatbot output
  chatbotOutput.innerHTML += `<p><strong>Chatbot:</strong> ${chatbotResponse}</p>`;
});

// Function to generate chatbot response
function generateChatbotResponse(inputText) {
  // Code to generate chatbot response goes here
  return "Hello, how can I help you?";
}
function generateChatbotResponse(inputText) {
  if (inputText.toLowerCase().includes("html") || inputText.toLowerCase().includes("etiket")) {
    return "HTML sayfasında <html>, <head>, <body> etiketleri kullanılır.";
  } else if (inputText.toLowerCase().includes("değişken") || inputText.toLowerCase().includes("variable")) {
    return "JavaScript'de bir değişken tanımlamak için 'var', 'let' veya 'const' anahtar kelimelerinden birini kullanabilirsiniz.";
  } else if (inputText.toLowerCase().includes("margin") || inputText.toLowerCase().includes("padding")) {
    return "CSS'te 'margin' ve 'padding' birbirinden farklıdır. 'Margin' bir elemanın çevresindeki boşlukken, 'padding' elemanın içerisindeki boşluktur.";
  } else {
    return "Sorry, I didn't understand your question.";
  }
}
function generateChatbotResponse(inputText) {
  if (inputText.toLowerCase().includes("html") || inputText.toLowerCase().includes("etiket")) {
    return "HTML sayfasında <html>, <head>, <body> etiketleri kullanılır.";
  } else if (inputText.toLowerCase().includes("karim") || inputText.toLowerCase().includes("variable")) {
    return "tugce.";
  } else if (inputText.toLowerCase().includes("kocam") || inputText.toLowerCase().includes("padding")) {
    return "ayberk.";
  } else {
    return "Sorry, I didn't understand your question.";
  }
}
