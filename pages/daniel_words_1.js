<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        .word-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }
        .word-button {
            padding: 10px 20px;
            font-size: 18px;
            cursor: pointer;
            border: 1px solid #000;
            background-color: #f0f0f0;
            border-radius: 5px;
        }
        .word-button:hover {
            background-color: #d0d0d0;
        }
    </style>
</head>
<body>
    <h1>Word Pronunciation Practice</h1>
    <p>Click on a word to hear its pronunciation.</p>
    <div class="word-container" id="wordContainer"></div>
    
    <script>
        const words = [
            "ask", "bottle", "build", "careful", "change", "drive", "grow", "poor", "remember", "teach", 
            "battery", "brave", "dangerous", "environment", "grass", "honey", "onion", "plant", "storm", "vegetable"
        ];
        
        const container = document.getElementById("wordContainer");
        
        words.forEach(word => {
            const button = document.createElement("button");
            button.className = "word-button";
            button.innerText = word;
            button.onclick = () => {
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.lang = "en-US";
                speechSynthesis.speak(utterance);
            };
            container.appendChild(button);
        });
    </script>
</body>
</html>
