const apiUrl = 'https://gpt4-backend-three.vercel.app/';

async function translate() {
    const ottomanInput = document.getElementById("ottomanInput").value;

    if (ottomanInput.length === 0) {
        alert("Please input an Ottoman Turkish sentence.");
        return;
    }

    if (ottomanInput.split(' ').length > 100) {
        alert("Please limit the input to 100 words.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/translate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ sentence: ottomanInput })
        });

        if (response.status !== 200) {
            throw new Error('Failed to get translation');
        }

        const data = await response.json();
        document.getElementById("englishOutput").value = data.translation;

    } catch (err) {
        console.error(err);
        alert("Error getting translation.");
    }
}

async function submitFeedback() {
    const feedback = document.getElementById("comments").value;
    const ottomanInput = document.getElementById("ottomanInput").value;
    const englishOutput = document.getElementById("englishOutput").value;

    if (!feedback) {
        alert("Please provide your feedback before submitting.");
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                feedback,
                ottomanInput,
                englishOutput
            })
        });

        if (response.status !== 200) {
            throw new Error('Failed to submit feedback');
        }

        alert("Thank you for your feedback!");
        document.getElementById("comments").value = "";

    } catch (err) {
        console.error(err);
        alert("Error submitting feedback.");
    }
}