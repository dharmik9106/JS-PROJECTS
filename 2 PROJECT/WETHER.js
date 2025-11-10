



 document.getElementById('form').addEventListener('submit', (e) => {
            e.preventDefault();  

            let temperature = document.getElementById('temperature').value;

            let message = '';
            let cloths = '';

            if (temperature === "") {
                document.getElementById("message").innerText = "Please enter valid temperature";
                document.getElementById("cloths").innerText = "";
                return;
            }

            temperature = Number(temperature);

            if (temperature <= 10) {
                message = "It's cold 🥶";
                cloths = "Wear warm clothes like jacket, sweater, scarf, gloves, and boots.";
            }
            else if (temperature <= 20) {
                message = "It's cool 🙂";
                cloths = "Wear a light jacket or sweater with jeans.";
            }
            else if (temperature <= 30) {
                message = "It's warm ☀️";
                cloths = "T-shirt and jeans or shorts.";
            }
            else if (temperature <= 40) {
                message = "It's hot 🥵";
                cloths = "Light cotton clothes.";
            }
            else {
                message = "It's too hot 🔥";
                cloths = "Very light clothes like tank tops, shorts, sandals.";
            }

            document.getElementById("message").innerText = message;
            document.getElementById("cloths").innerText = cloths;
        });