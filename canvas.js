
            // Calculate the volume of a sphere and Drawing On Canvas
            function calculate(radius) {
                if (radius == NaN)
                alert('ilegal number');
                else 
                {
                var radius = parseInt(document.getElementById('radius').value);
                var volume = (4/3) * Math.PI * Math.pow(radius, 3);
                document.getElementById('volume').innerText = volume;
                if(radius > 250)
                alert("radius valid - size restriction");
                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");
                ctx.beginPath();
                ctx.arc(250,225,radius,0,2*Math.PI);
                ctx.stroke();
            }}
            // clearCanvas
            function clearCanvas() {
                var canvas = document.getElementById("myCanvas");
                const context = canvas.getContext('2d');
                context.clearRect(0, 0, canvas.width, canvas.height);}

                // function onpageload(){
                //     setInterval(function(){
                //     for (let radius = 1; radius < 250; radius++) {
                //     var c = document.getElementById("myCanvas");
                //     var ctx = c.getContext("2d");
                //     ctx.beginPath();
                //     ctx.arc(250,225,radius,0,2*Math.PI);
                //     ctx.stroke();
                //     }}, 1000);
                // }
                // onpageload();
