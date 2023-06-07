
    $('#zoek').on('click', function(){
        let locatie = $('#invoer').val();
        // De basis API
        let huidigeData = 'https://api.openweathermap.org/data/2.5/weather?q= '+ locatie + '&appid=900dd223f79e8489796101dc6ded398b';
        huidigeData += '&units=metric&lang=nl'
        
        console.log(huidigeData)
        $.ajax({
            url:huidigeData,
            success: function(weerHuidig){
                console.log(weerHuidig)
                let pagina = '<h1>Opgegeven plaats</h1>'
                pagina += '<p><strong>Weer in: </strong> ' + weerHuidig.name;
                pagina += ' (' + weerHuidig.sys.country + ' )<br>';
                pagina += '<strong>De temperatuur:</strong> ' + weerHuidig.main.temp + ' graden';
                
                $('#dataInvoer').append(pagina)
            }
        })
    });

