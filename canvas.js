{\rtf1\fbidis\ansi\ansicpg1255\deff0\nouicompat\deflang1037{\fonttbl{\f0\fnil\fcharset177 Calibri;}{\f1\fnil\fcharset0 Calibri;}}
{\*\generator Riched20 10.0.10240}\viewkind4\uc1 
\pard\ltrpar\sa200\sl276\slmult1\f0\rtlch\fs22\par
            // \f1\ltrch\lang9 Calculate the volume of a sphere and Drawing On Canvas\f0\rtlch\lang1037\par
            \f1\ltrch\lang9 function calculate(radius)\f0\rtlch\lang1037  \{\par
                \f1\ltrch\lang9 if (radius == NaN)\f0\rtlch\lang1037\par
                \f1\ltrch\lang9 alert('ilegal number')\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 else\f0\rtlch\lang1037  \par
                \{\par
                \f1\ltrch\lang9 var radius = parseInt(document.getElementById('radius').value)\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 var volume = (4/3) * Math.PI * Math.pow(radius, 3)\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 document.getElementById('volume').innerText = volume\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 if(radius > 250)\f0\rtlch\lang1037\par
                \f1\ltrch\lang9 alert("radius valid - size restriction")\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 var c = document.getElementById("myCanvas")\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 var ctx = c.getContext("2d")\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 ctx.beginPath\f0\rtlch\lang1037 ();\par
                \f1\ltrch\lang9 ctx.arc(250,225,radius,0,2*Math.PI)\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 ctx.stroke\f0\rtlch\lang1037 ();\par
            \}\}\par
            // \f1\ltrch\lang9 clearCanvas\f0\rtlch\lang1037\par
            \f1\ltrch\lang9 function clearCanvas\f0\rtlch\lang1037 () \{\par
                \f1\ltrch\lang9 var canvas = document.getElementById("myCanvas")\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 const context = canvas.getContext('2d')\f0\rtlch\lang1037 ;\par
                \f1\ltrch\lang9 context.clearRect(0, 0, canvas.width, canvas.height)\f0\rtlch\lang1037 ;\}\par
\par
                // \f1\ltrch\lang9 function onpageload\f0\rtlch\lang1037 ()\{\par
                //     \f1\ltrch\lang9 setInterval(function\f0\rtlch\lang1037 ()\{\par
                //     \f1\ltrch\lang9 for (let radius = 1; radius < 250; radius++)\f0\rtlch\lang1037  \{\par
                //     \f1\ltrch\lang9 var c = document.getElementById("myCanvas")\f0\rtlch\lang1037 ;\par
                //     \f1\ltrch\lang9 var ctx = c.getContext("2d")\f0\rtlch\lang1037 ;\par
                //     \f1\ltrch\lang9 ctx.beginPath\f0\rtlch\lang1037 ();\par
                //     \f1\ltrch\lang9 ctx.arc(250,225,radius,0,2*Math.PI)\f0\rtlch\lang1037 ;\par
                //     \f1\ltrch\lang9 ctx.stroke\f0\rtlch\lang1037 ();\par
                //     \}\}, \f1\ltrch\lang9 1000\f0\rtlch\lang1037 );\par
                // \}\par
                // \f1\ltrch\lang9 onpageload\f0\rtlch\lang1037 ();\f1\ltrch\lang9\par
}
 