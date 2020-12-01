function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    let location;
    if(document.querySelector("#location").value == ""){
        location = "Ann Arbor";
    }
    else{
        location = document.querySelector("#location").value;
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format to fahrenheit if one isn't provided
    let format;

    if(document.querySelector("#fahrenheit").value == "" && document.querySelector("#celcius").value == ""){
        format = "imperial";
    }
    else if(document.querySelector("#fahrenheit").value == "imperial"){
        format = "imperial";
    }
    else{
        format = "metric";
    }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    var apikey = "4d46a18b9ec4624b58ea52ef7c954e79";
    // Your code here.

    if(Number.isInteger(location)){
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + location  + "&appid=" + apikey + "&units=" + format;
    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + location  + "&appid=" + apikey + "&units=" + format;
    }

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        
        loc = json["name"];
        document.querySelector("#loc").innerHTML = loc;

        temp = json["main"]["temp"];
        document.querySelector("#temp").innerHTML = temp;

        var link = "http://openweathermap.org/img/wn/" + json['weather'][0]['icon'] + ".png";
        var txt = json['weather'][0]['description'];
        var title = "Weather Image";

        document.querySelector("#tempImg").setAttribute("alt", txt);
        document.querySelector("#tempImg").setAttribute("src", link);
        document.querySelector("#tempImg").setAttribute("title", title);

    });
}
