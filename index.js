
    $('#zoek').on('click', function(){
        let locatie = $('#invoer').val();
        // De basis API
        let huidigeData = 'https://api.openweathermap.org/data/2.5/weather?q= '+ locatie + '&appid=900dd223f79e8489796101dc6ded398b';
        huidigeData += '&units=metric&lang=nl';
        iconUrl =  'https://openweathermap.org/img/wn/';// LET OP! ".png" er wel achter!! (@2x.png) <--
        $('#dataInvoer').empty() // leegt het veld bij de 'click'
        
        $.ajax({
            url:huidigeData,
          
            success: function(weerHuidig, vooruitAPI){
                console.log(weerHuidig) // alle gegevens in de console.log()
                
                let icons = weerHuidig.weather[0].icon;
                let lat = weerHuidig.coord.lat; 
                let lon = weerHuidig.coord.lon; 
                console.log(lat, lon)
                
                let pagina = '<img src=" '+ iconUrl+icons +'@2x.png" alt="icoonweer"><br>';
                pagina += '<p>' + weerHuidig.name + ' (' + weerHuidig.sys.country + ') <br>' + weerHuidig.main.temp + ' graden <br>';
                pagina += weerHuidig.weather[0].description
               
                $('#dataInvoer').append(pagina);
            
            },
            error: function(){
                let foutmelding = '<h3>OEPS! Fout 404! <br> De zoekopdracht: ' + locatie +' is niet gevonden, probeer het opnieuw.</h3>'
                $('#dataInvoer').append(foutmelding)
            }
        })

       
    });

