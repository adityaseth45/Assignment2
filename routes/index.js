module.exports.city=function(req,res){
    var cityLabel='';
    var imageCount=4;
    var city=req.params.city;

    if(city=='banglore'){
        cityLabel='Banglore';
        imageCount=6;
    }
    else if(city=='mumbai')
    {
        cityLabel='Mumbai';
    }
    else if(city=='chennai')
    {
        cityLabel='Chennai';
    }
    else if(city=='hyderabad')
    {
        cityLabel='Hyderabad';
    }
    else if(city=='newdelhi')
    {
        cityLabel='New Delhi';
    }
res.render('city', {city: req.params.city,
                    title: "EJS Demo",
                    cityLabel:cityLabel,
                    imageCount:imageCount });
}


module.exports.home=function(req,res){
    res.render('home',{title: "EJS Demo"});
    }