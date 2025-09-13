var preguntas = [
      "1. Cuando tienes un reto difícil, ¿qué haces? ",
      "2. ¿Qué tipo de proyectos te gustan más?",
      "3. Cuando ves una página web, ¿qué piensas?",
      "4. ¿Cómo prefieres expresarte?",
      "5. ¿Qué te describe mejor?",
      "6. ¿Qué te emociona más?",
      "7. Si fueras un emoji en Kitty Code, ¿cuál serías?",
      "8. ¿Qué prefieres al trabajar en un proyecto?",
      "9. ¿Cómo reaccionas si algo en tu computadora no funciona?",
      "10. ¿Qué te motiva más en un proyecto?",
      "11. ¿Qué prefieres aprender?",
      "12. ¿Qué palabra te identifica más?"
    ];

    var opciones = [
      ["Lo intento varias veces hasta resolverlo", "Me frustro un poco, pero busco otra forma", "Prefiero dejarlo y hacer otra cosa"],
      ["¡Emoción! Me encanta la idea 💖", "Curiosidad, me llama la atención 🤔", "Aburrimiento, no es lo mío 😴"],
      ["“Quiero descubrir cómo está hecha”", "“Me fijo en el diseño y los colores”", "“Entro y ya, no me interesa mucho”"],
      ["Escribiendo código o creando proyectos","Dibujando, diseñando o haciendo arte","Charlando o contando historias"],
      ["Lógica y organizada","Creativa y curiosa","Relajada y práctica"],
      ["Aprender nuevas herramientas digitales","Hacer arte con tu propio estilo","Hacer cosas diferentes sin tecnología"],
      ["👩‍💻 La programadora","🎨 La artista","🐱 La curiosa"],
      ["Organizar y planear paso a paso","Darle color y creatividad","Hacer solo lo necesario y listo"],
      ["Investigo en internet hasta solucionarlo","Pregunto a alguien que sepa","Apago todo y me olvido"],
      ["Que el código funcione perfecto","Que el diseño se vea hermoso","Que se termine rápido"],
      ["Nuevos lenguajes de programación","Nuevas técnicas de diseño o ilustración","Algo completamente distinto"],
      ["Creadora lógica","Artista digital","Exploradora"]
    ];

    var i = 0;
    var conteo = { a: 0, b: 0, c: 0 };

    function mostrarPregunta(){
      document.getElementById("pregunta").innerHTML = preguntas[i];
      document.getElementById("a").innerHTML = opciones[i][0];
      document.getElementById("b").innerHTML = opciones[i][1];
      document.getElementById("c").innerHTML = opciones[i][2];
    }

    function actualizarRespuesta(opcion) {
      if(opcion === 0){ conteo.a++; } 
      if(opcion === 1){ conteo.b++; } 
      if(opcion === 2){ conteo.c++; } 

      i++; 

      if(i < preguntas.length){
        mostrarPregunta();
      } else {
        mostrarResultados();
      }
    }

    function mostrarResultados(){
      let mensaje = "";

      if(conteo.a > conteo.b && conteo.a > conteo.c){
        mensaje = "Mayoría A → 💻 Programadora de corazón ✨<br>Te encanta resolver problemas, organizar ideas y crear con lógica. ¡Definitivamente te identificas como programadora!";
      } else if(conteo.b > conteo.a && conteo.b > conteo.c){
        mensaje = "Mayoría B → 🎨 Creativa con alma digital 💡<br>Te apasiona el arte y la creatividad, pero también tienes curiosidad por el código. ¡Eres la mezcla ideal de diseño + tecnología!";
      } else {
        mensaje = "Mayoría C → 🌈 Exploradora de otros caminos 🌍<br>Tal vez programar no sea lo tuyo, pero tienes muchas formas de expresarte y aportar. Eso también es valioso: el mundo necesita todo tipo de talentos.";
      }

      document.getElementById("pregunta").innerHTML = "🎉 Fin del Test Kitty Code";
      document.getElementById("opciones").style.display = "none";
      document.getElementById("resultado").innerHTML = mensaje;
    }

    mostrarPregunta();
