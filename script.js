function generateRandomString(length) {
            const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let randomString = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                randomString += charset.charAt(randomIndex);
            }
            return randomString;
        }

        const randomStringElement = document.getElementById("random-string");
        const generateButton = document.getElementById("generate-button");

        generateButton.addEventListener("click", function () {
            const randomString = generateRandomString(7);
            //randomStringElement.textContent = randomString;
            randomStringElement.textContent = "short.ly/" + randomString;
        });