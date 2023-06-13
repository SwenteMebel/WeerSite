 
    
    $('#zoek').on('click', function(){
        let locatie = $('#invoer').val();
        let huidigeData = 'https://api.openweathermap.org/data/2.5/weather?q= '+ locatie + '&appid=900dd223f79e8489796101dc6ded398b';
        huidigeData += '&units=metric&lang=nl';
        iconUrl =  'https://openweathermap.org/img/wn/';// LET OP! ".png" er wel achter!! (@2x.png) <--
        $('#icoon').empty() // leegt het veld bij de 'click'
        $('#plaats').empty()
        $('#graden').empty()
        $('#voeltAls').empty()
        $('#omschrijving').empty()
        $('#windsnelheid').empty()

        $.ajax({
            url:huidigeData,
          
            success: function(weerHuidig){
                console.log(weerHuidig) // alle gegevens in de console.log()
                
                let icons = weerHuidig.weather[0].icon;
               
                

                let icoontje = '<img src=" '+ iconUrl+icons +'@2x.png" alt="icoonweer"><br>';
                let plaats = '<h4>Plaats</h4>' + weerHuidig.name + ' (' + weerHuidig.sys.country + ') <br>';
                let graden = '<p>' + weerHuidig.main.temp + '<br>';
                let omschrijving = '<h4>Omschrijving</h4> ' + weerHuidig.weather[0].description;
                let windsnelheid = '<h4>Windsnelheid</h4> ' +weerHuidig.wind.speed;
                let voeltAls = '<h4>Voelt als</h4>' + weerHuidig.main.feels_like;


                $('#icoon').append(icoontje);
                $('#plaats').append(plaats);
                $('#graden').append(graden);
                $('#voeltAls').append(voeltAls);
                $('#omschrijving').append(omschrijving);
                $('#windsnelheid').append(windsnelheid);
               
            },
            error: function(){
                let foutmelding = '<h3>OEPS! Fout 404! <br> De zoekopdracht: ' + locatie +' is niet gevonden, probeer het opnieuw.</h3>'
                $('#icoon').append(foutmelding)
            }

            
        })

       
    });

