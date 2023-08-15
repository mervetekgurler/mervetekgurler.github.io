async function translateText() {
    const inputText = document.getElementById("inputText").value;
    const response = await fetch("YOUR_SERVERLESS_FUNCTION_URL_HERE", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: inputText
        })
    });
    
    const data = await response.json();
    document.getElementById("outputText").value = data.translation;
}
