document.getElementById('generate-btn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;
    const outputDiv = document.getElementById('output');

    if (!prompt) {
        alert('Please enter a blog topic or idea.');
        return;
    }

    // AIzaSyCFW1w84H96M9qRueCQRj1h0YWffGQT7NM
    const apiKey = 'AIzaSyCFW1w84H96M9qRueCQRj1h0YWffGQT7NM';
    const apiUrl = 'https://api.gemini.example.com/generate'; // Hypothetical endpoint

    try {
        outputDiv.textContent = 'Generating blog post...';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 200 // Adjust as needed
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        const generatedText = data.text || 'No content generated.';

        outputDiv.textContent = generatedText;
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});
