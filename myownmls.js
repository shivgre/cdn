$('<link>')
    .attr('type', 'text/css')
    .attr('rel', 'stylesheet')
    .attr('href', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css')
    .appendTo('head');
    
$('<link>')
    .attr('type', 'text/css')
    .attr('rel', 'stylesheet')
    .attr('href', 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/flexslider.css')
    .appendTo('head');
    
$('<script>')
    .attr('type', 'text/javascript')
    .attr('src', 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.2/jquery.flexslider.js')
    .appendTo('head');

//<!--Templating plugin for jQuery by John Resig-->
$('<script>')
    .attr('type', 'text/javascript')
    .attr('src', 'https://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.js')
    .appendTo('head');



$('<script>')
    .attr('type', 'text/x-jQuery-tmpl')
    .attr('id', 'listingTemplate')
    .text('\
        <article class="pl_listing pl_listing--narCollection ">\
            <figure class="pl_listing-image">\
                <div class="pl_add_remove_lead_favorites" style="display: none;"><a href="#" class="pl_add_favorite fa fa-star"></a></div>\
                <a href="/listing?mlsid=${mlsid}&address=${addressParam}" class="listing-image" itemprop="image" style="background-image: url(&quot;${listingImage}&quot;);"></a>\
                {{if status == "Pending"}}\
                    <div class="pl_listing-pending">Pending</div>\
                {{/if}}\
                <div class="pl_listing-details-container-wrapper">\
                    <div class="pl_listing-details-wrapper">\
                        <div class="pl_listing-detail-wrapper pl_listing-name-address pl_listing-detail--hidden">\
                            <span class="pl_listing-details-item pl_listing-address">${listingAddress},</span>\
                            <span class="pl_listing-details-item pl_listing-code">${listingStateCode}</span>\
                        </div>\
                        <div class="pl_listing-detail-wrapper pl_listing-beds-baths-footage">\
                        {{if listingType == "land"}}\
                            <span class="pl_listing-details-item pl_listing-footage">${size}</span>\
                        {{else}}\
                            <span class="pl_listing-details-item pl_listing-beds">${beds}</span>\
                            <span class="pl_listing-details-item pl_listing-baths">${baths}</span>\
                            <span class="pl_listing-details-item pl_listing-footage">${size}</span>\
                        {{/if}}\
                        ${bedsBathsSizeHtml}\
                        </div>\
                        <span class="pl_listing-details-item pl_listing-mlsId pl_listing-detail--hidden">${mlsidTxt}</span>\
                        <span class="pl_listing-details-item pl_listing-price" itemprop="price">\
                            <span class="">${price}</span>\
                        </span>\
                        <a href="/listing?mlsid=${mlsid}&address=${addressParam}" class="pl_listing-details-item pl_listing-link pl_listing-detail--hidden arrow-container">\
                            See details<span class="sliding-arrow"></span></a>\
                    </div>\
                </div>\
            </figure>\
        </article>\
    ')
    .appendTo('head');
    
$('<script>')
    .attr('type', 'text/x-jQuery-tmpl')
    .attr('id', 'schoolsTemplate')
    .text('\
        <div id="tab-${tabNumber}" class="tab-content ${currentTabClass}">\
            <table class="slipstream-nvpairs">\
                <tbody>\
                    {{if district}}\
                    <tr>\
                        <td>District:</td>\
                        <td>${district}</td>\
                    </tr>\
                    {{/if}}\
                    {{if gradeSpan}}\
                    <tr>\
                        <td>Grade Span:</td>\
                        <td>${gradeSpan}</td>\
                    </tr>\
                    {{/if}}\
                    {{if admissionType}}\
                    <tr>\
                        <td>Admission:</td>\
                        <td>${admissionType}</td>\
                    </tr>\
                    {{/if}}\
                    {{if address}}\
                    <tr>\
                        <td>Address:</td>\
                        <td><address class="slipstream-address">${address}</address></td>\
                    </tr>\
                    {{/if}}\
                    {{if phone}}\
                    <tr>\
                        <td>Phone:</td>\
                        <td>${phone}</td>\
                    </tr>\
                    {{/if}}\
                    {{if principal}}\
                    <tr>\
                        <td>Principal:</td>\
                        <td>${principal}</td>\
                    </tr>\
                    {{/if}}\
                    {{if website}}\
                    <tr>\
                        <td>Website:</td>\
                        <td><a href="${website}" target="_blank">${website}<span class="slipstream-linkref"></span></a></td>\
                    </tr>\
                    {{/if}}\
                    {{if totalTeachers}}\
                    <tr>\
                        <td>Teachers:</td>\
                        <td>${totalTeachers}&nbsp;<span class="slipstream-units">Full Time</span></td>\
                    </tr>\
                    {{/if}}\
                    {{if totalStudents}}\
                    <tr>\
                        <td>Students:</td>\
                        <td>${totalStudents}</td>\
                    </tr>\
                    {{/if}}\
                    {{if studentTeacherRatio}}\
                    <tr>\
                        <td>Ratio:</td>\
                        <td>${studentTeacherRatio}&nbsp;<span class="slipstream-units">Students / Teacher</span></td>\
                    </tr>\
                    {{/if}}\
                    {{if maleStudentsPercentage && femaleStudentsPercentage }}\
                    <tr>\
                        <td>Gender:</td>\
                        <td>${maleStudentsPercentage}%&nbsp;<span class="slipstream-units">Male</span>\
                            <br>${femaleStudentsPercentage}%&nbsp;<span class="slipstream-units">Female</span></td>\
                    </tr>\
                    {{/if}}\
                    {{if freeLunch && reducedLunch }}\
                    <tr>\
                        <td>Lunch:</td>\
                        <td>${freeLunch}%&nbsp;<span class="slipstream-units">Free</span>\
                            <br>${reducedLunch}%&nbsp;<span class="slipstream-units">Reduced</span></td>\
                    </tr>\
                    {{/if}}\
                    {{if expenditure}}\
                    <tr>\
                        <td>Expenditure:</td>\
                        <td>${expenditure}&nbsp;<span class="slipstream-units">Per Student</span></td>\
                    </tr>\
                    {{/if}}\
                    {{if titleI}}\
                    <tr>\
                        <td>Title I School:</td>\
                        <td>${titleI}</td>\
                    </tr>\
                    {{/if}}\
                    {{if Id}}\
                    <tr>\
                        <td>NCES ID:</td>\
                        <td>${Id}</td>\
                    </tr>\
                    {{/if}}\
                </tbody>\
            </table>\
        </div>\
    ')
    .appendTo('head');


var noPhotosImage = "https://static1.squarespace.com/static/5ee8fa93cb7b992c64652a00/t/5f34460edc16f914b375cb7a/1597261326826/no-photos-available-min.jpg";
var licenseSlipstream = '88A3-7041-542A-0185';

//###10 h = 36000,000 ms
var slipstreamToken = getWithExpiry('slipstream-token');
if(!slipstreamToken)
    slipstreamAuthenticate();

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}    
//var me = getUrlVars()["minPrice"];
//var name2 = getUrlVars()["name2"];

//###HIDE LISTINGS CONTAINER BY DEFAULT#################
$('#nextPageContainer, .listings-container').hide();

if(getUrlVars()["mlsid"])
{
    slipstreamGetListingsDetails();
    $('#nextPageContainer, .listings-container').show();
}

function slipstreamGetListingsDetails()
{
    console.info('listings details page MLSID: ' + getUrlVars()["mlsid"]);
    slipstreamToken = getWithExpiry('slipstream-token');
    if(!slipstreamToken)
    {
        slipstreamAuthenticate();
        slipstreamToken = getWithExpiry('slipstream-token');
        if(!slipstreamToken)
        {
            slipstreamAuthenticate();
            slipstreamToken = getWithExpiry('slipstream-token');
        }
    }
    
    var QueryString = "&id=" + getUrlVars()["mlsid"] + "&details=true&images=true&extended=true";
    
    //pageSize defaults to 25.
    var settings = {        
        "url": "https://slipstream.homejunction.com/ws/listings/search?license=" + licenseSlipstream + "&market=WALMLS" + QueryString,
        "method": "GET",
        "timeout": 0,
        "async": true,
        "headers": {
            "HJI-Slipstream-Token": slipstreamToken
        },
    };
        

    $.ajax(settings).done(function (response) {
        console.log(response);

        if(response.success)
        {
            
            console.log(response.result.listings);
            let totalSlipstreamListings = response.result.total;            
            
            if(totalSlipstreamListings)
            {
                var listingObject = response.result.listings['0'];
                
                
                var listingPrice = listingObject.listPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//add comma , after every 3 digits
                
                var listingZip = listingObject.address.zip;
                var listingCity = listingObject.address.city;
                var listingDeliveryLine = listingObject.address.deliveryLine;
                var listingState = listingObject.address.state;
                var listingStreet = listingObject.address.street;

                var listingStatus = listingObject.status;
                var mlsIdFromAPI = listingObject.id;
                let listingBaths, listingBeds;
                
                if(listingObject.baths !== undefined && listingObject.baths.total !== undefined)
                    listingBaths = listingObject.baths.total;
                
                if(listingObject.beds !==undefined)
                    listingBeds = listingObject.beds;
                
                
                
                var listingImagesArray = listingObject.images;
                
                var listingArea = listingObject.area;
                var listingLatitude= listingObject.coordinates.latitude;
                var listingLongitude = listingObject.coordinates.longitude;
                
                var listingCounty = listingObject.county;
                var listingDaysOnHJI = listingObject.daysOnHJI;

                var listingAgentName = listingObject.listingAgent.name;
                var listingAgentEmail = listingObject.listingAgent.email;
                var listingAgentPhone = listingObject.listingAgent.phone;
                var listingAgentOffice = listingObject.listingOffice.name;

                var listingPropertyType = listingObject.propertyType;
                
                var listingDescription = listingObject.description;
                
                var listingYearBuilt = listingObject.yearBuilt;                
                
                
                var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                let listingDateUnixTimestamp = listingObject.listingDate;
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var listingDate = new Date(listingDateUnixTimestamp * 1000);
                listingDate = listingDate.toLocaleDateString("en-US", dateOptions);//Convert to en-us Date only format(remove time)
                
                
                let lastUpdatedUnixTimestamp = listingObject.lastUpdated;
                // Create a new JavaScript Date object based on the timestamp
                // multiplied by 1000 so that the argument is in milliseconds, not seconds.
                var lastUpdatedDate = new Date(lastUpdatedUnixTimestamp * 1000);
                lastUpdatedDate = lastUpdatedDate.toLocaleDateString("en-US", dateOptions);//Convert to en-us Date only format(remove time)
                
                
                
                
                var listingType = listingObject.listingType;//Commercial
                if(listingObject.lotSize)
                    var listingLotSizeSqft = listingObject.lotSize.sqft;
                else
                    var listingLotSizeSqft = '';
                if(listingObject.lotSize)
                    var listingLotSizeAcres = listingObject.lotSize.acres.toString() + "&nbsp;acres";
                else
                    var listingLotSizeAcres = '';
                if(listingObject.size)
                    var listingSize = listingObject.size.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + "&nbsp;sqft";//add comma , after every 3 digits//listingObject.size + "&nbsp;sq&nbsp;ft";//${size} &nbsp;sqft
                else
                    var listingSize = '';
                
                
                
                //GENERATE FLEXSLIDER##########################STARTS#################
                if (!(Array.isArray(listingImagesArray) && listingImagesArray.length) ) {
                    listingImagesArray = [noPhotosImage];
                }
                
                var liNavHTML = '';
                $.each(listingImagesArray, function(index, listingImageSrc) {
                    liNavHTML += '<li><img src="' + listingImageSrc + '" alt="Property image ' + index + '"></li>';
                });
                $('#pl_slider_nav').find('ul').empty().append(liNavHTML);
                
                var liHTML = '';
                $.each(listingImagesArray, function(index, listingImageSrc){
                    liHTML += '<li><img src="' + listingImageSrc + '" alt="Property image ' + index + '"></li>';
                });
                $('#pl_slider').find('ul').empty().append(liHTML);
                console.log(liHTML);
                
                 $('#pl_slider_nav').flexslider({
                    animation: "slide",
                    animationLoop: false,
                    controlsContainer: "#pl_slider_nav .nav",
                    controlNav: false,
                    slideshow: false,
                    itemWidth: 150,
                    itemMargin: 10,
                    asNavFor: '#pl_slider'
                });
                $('#pl_slider').flexslider({
                    animation: "fade",
                    controlsContainer: "#pl_slider .nav",
                    controlNav: false,
                    animationLoop: false,
                    slideshow: false,
                    sync: "#pl_slider_nav"
                });
                //GENERATE FLEXSLIDER##########################ENS#####################
                
                if(listingBeds !== undefined)
                    $('.pl_property-beds').append(listingBeds);
                else                    
                    $('.pl_property-beds').hide();
                if(listingBaths !== undefined)
                    $('.pl_property-baths').append(listingBaths);
                else                    
                    $('.pl_property-baths').hide();
                
                if(listingSize)
                {   
                    $('.pl_property-size').show();
                    $('.pl_property-size').find('span').append(listingSize);
                    $('.pl_property-sqft').append(listingSize).show();
                }
                else
                    $('.pl_property-sqft, .pl_property-size').hide();
              
                if(listingType.toLowerCase() == 'land' && listingLotSizeAcres)
                {                    
                    $('.pl_property-size').show();
                    $('.pl_property-size').find('span').append(listingLotSizeAcres);
                }  
                    
                if(listingLotSizeAcres)
                    $('.pl_property-acres').append(listingLotSizeAcres).show();
                else
                    $('.pl_property-acres').hide();

                //$('.pl_property-price').find('span').append(price);
                
                if(listingPrice)
                    $('.pl_property-price').append(listingPrice); 

                if(listingStatus && listingStatus.toLowerCase() == 'active'){
                    $('.pl_property-status-active').show();
                    $('.pl_property-status-active').find('span').append(listingStatus);
                }
                else
                    $('.pl_property-status-active').hide(); 

                if(listingStatus && listingStatus.toLowerCase() == 'pending'){
                    $('.pl_property-status-pending').show();
                    $('.pl_property-status-pending').find('span').append(listingStatus);
                }
                else
                    $('.pl_property-status-pending').hide();    
                
                if(listingStreet)
                    $('#streetAddress').append(listingStreet);
                if(listingCity)
                    $('#addressLocality').append(', ' + listingCity);
                if(listingState)
                    $('#addressRegion').append(', ' + listingState);
                if(listingZip)
                    $('#postalCode').append('&nbsp;' + listingZip);
                if(listingType)
                    $('.pl_property-proptype').append(listingType);
                if(mlsIdFromAPI)
                    $('.pl_property-mlsid').append(mlsIdFromAPI);
                if(listingPropertyType)
                    $('.pl_property-sell').append(listingPropertyType);
                
                if(listingDescription)
                    $('.pl_property-description').find('p').append(listingDescription);
                
                var htmlGoogleMapImg = '<img border="0" src="https://maps.googleapis.com/maps/api/staticmap?center=' + listingLatitude + ',' + listingLongitude + '&amp;zoom=16&amp;size=2560x560&amp;maptype=roadmap&amp;markers=color:0x022E39%7C' + listingLatitude + ',' + listingLongitude + '&key=AIzaSyDunNs6xWlPbjetlEnHbt22n25z6_MnX8E&format=png&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:landscape%7Celement:geometry%7Ccolor:0xf0f0f0&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:geometry.fill%7Ccolor:0xf0f0f0&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Celement:geometry%7Ccolor:0xf0f0f0&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:water%7Celement:geometry%7Ccolor:0x3db4e9&style=feature:water%7Celement:labels%7Ccolor:0xffffff&size=480x360" \
 alt="' + listingStreet + listingCity + listingState + listingZip + '"/>';

                var htmlGoogleMapImgMobile = '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + listingLatitude + ',' + listingLongitude + '&amp;zoom=16&amp;size=1024x560&amp;maptype=roadmap&amp;markers=color:0x022E39%7C' + listingLatitude + ',' + listingLongitude + '&amp;key=AIzaSyDunNs6xWlPbjetlEnHbt22n25z6_MnX8E&amp;format=png&amp;style=element:geometry%7Ccolor:0xf5f5f5&amp;style=element:labels.icon%7Cvisibility:off&amp;style=element:labels.text.fill%7Ccolor:0x616161&amp;style=element:labels.text.stroke%7Ccolor:0xf5f5f5&amp;style=feature:landscape%7Celement:geometry%7Ccolor:0xf0f0f0&amp;style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&amp;style=feature:poi%7Celement:geometry.fill%7Ccolor:0xf0f0f0&amp;style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&amp;style=feature:road%7Celement:geometry%7Ccolor:0xffffff&amp;style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&amp;style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&amp;style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&amp;style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&amp;style=feature:transit%7Celement:geometry%7Ccolor:0xf0f0f0&amp;style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&amp;style=feature:water%7Celement:geometry%7Ccolor:0x3db4e9&amp;style=feature:water%7Celement:labels%7Ccolor:0xffffff&amp;size=480x360" border="0" \
 alt="' + listingStreet + listingCity + listingState + listingZip + '"/>';
                
                $('.responsive-map').append(htmlGoogleMapImg);
                $('.responsive-map.mobile').empty().append(htmlGoogleMapImgMobile);
                

            //###PROPERTRY FEATURES SECTION####
  
                if(listingStatus)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Status:</span> ' + listingStatus + '</p></li>'); 
                }

                let listingBathroomsfull = listingObject.xf_bathroomsfull; 
                let listingBathroomshalf = listingObject.xf_bathroomshalf; 
                let listingBathroomstotalinteger = listingObject.xf_bathroomstotalinteger; 
                if(listingBathroomstotalinteger && listingBathroomsfull && listingBathroomshalf)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Bathrooms:</span> ' + listingBathroomsfull + ' full, ' + listingBathroomshalf + ' half, ' + listingBathroomstotalinteger + ' total' + '</p></li>'); 
                }
                else if(listingBathroomsfull)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Bathrooms:</span> ' + listingBathroomsfull + ' full </p></li>'); 
                }
                else if(listingBathroomshalf)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Bathrooms:</span> ' + listingBathroomshalf + ' half </p></li>'); 
                }
                else if(listingBathroomstotalinteger)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Bathrooms:</span> ' +listingBathroomstotalinteger + ' total </p></li>'); 
                }
                
                if(listingBeds)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Bedrooms:</span> ' + listingBeds + '</p></li>'); 
                }

                let listingRoomstotal = listingObject.xf_roomstotal; 
                if(listingRoomstotal)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Rooms Total:</span> ' + listingRoomstotal + '</p></li>'); 
                }

            //Heating & Cooling

                let listingHeating = listingObject.xf_heating; 
                if(listingHeating)
                {
                    let liHtml = '';
                    $.each(listingHeating, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Heating:</span> ' + liHtml + '</p></li>'); 
                } 

                let listingCooling = listingObject.xf_cooling; 
                if(listingCooling)
                {
                    let liHtml = '';
                    $.each(listingCooling, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Cooling:</span> ' + liHtml + '</p></li>'); 
                }

            //Exterior Features

            //Interior Features

                let listingAppliances = listingObject.xf_appliances; 
                if(listingAppliances)
                {
                    let liAppliancesHtml = '';
                    $.each(listingAppliances, function(index, appliance){
                        liAppliancesHtml += appliance + ', ';
                    });
                    liAppliancesHtml = liAppliancesHtml.substring(0, liAppliancesHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Appliances:</span> ' + liAppliancesHtml + '</p></li>'); 
                }

                let listingLaundryfeatures = listingObject.xf_laundryfeatures; 
                if(listingLaundryfeatures)
                {
                    let liHtml = '';
                    $.each(listingLaundryfeatures, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Laundry Features:</span> ' + liHtml + '</p></li>'); 
                }

                let listingFireplacefeatures = listingObject.xf_fireplacefeatures; 
                if(listingFireplacefeatures)
                {
                    let liHtml = '';
                    $.each(listingFireplacefeatures, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Fireplace Features:</span> ' + liHtml + '</p></li>'); 
                }

                let listingInteriorfeatures = listingObject.xf_interiorfeatures; 
                if(listingInteriorfeatures)
                {
                    let liHtml = '';
                    $.each(listingInteriorfeatures, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Interior Features:</span> ' + liHtml + '</p></li>'); 
                }

            //Garage & Driveway

                let listingRoadSurfaceType = listingObject.xf_roadsurfacetype;  
                if(listingRoadSurfaceType)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Property Access:</span> ' + listingRoadSurfaceType + '</p></li>'); 
                }

            //Building & Construction

                //let listingYearBuilt = listingObject.yearBuilt;  
                if(listingYearBuilt)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Year Built:</span> ' + listingYearBuilt + '</p></li>'); 
                }

                let listingLevels = listingObject.xf_levels; 
                if(listingLevels)
                {
                    let liHtml = '';
                    $.each(listingLevels, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Levels:</span> ' + liHtml + '</p></li>'); 
                }

                let listingConstructionmaterials = listingObject.xf_constructionmaterials; 
                if(listingConstructionmaterials)
                {
                    let liHtml = '';
                    $.each(listingConstructionmaterials, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Construction Materials:</span> ' + liHtml + '</p></li>'); 
                }

                let listingRoof = listingObject.xf_roof; 
                if(listingRoof)
                {
                    let liHtml = '';
                    $.each(listingRoof, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Roof:</span> ' + liHtml + '</p></li>'); 
                }
                
                let listingUtilities = listingObject.xf_utilities; 
                if(listingUtilities)
                {
                    let liHtml = '';
                    $.each(listingUtilities, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Utilities:</span> ' + liHtml + '</p></li>'); 
                }

                let listingSewer = listingObject.xf_sewer; 
                if(listingSewer)
                {
                    let liHtml = '';
                    $.each(listingSewer, function(index, data){
                        liHtml += data + ', ';
                    });
                    liHtml = liHtml.substring(0, liHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Sewer:</span> ' + liHtml + '</p></li>'); 
                }

            //Tax

                let listingTaxannualamount = listingObject.xf_taxannualamount; 
                if(listingTaxannualamount)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Tax Amount (Annual):</span> $' + listingTaxannualamount + '</p></li>'); 
                }

            //Association
                
                let listingAssociationamenities = listingObject.xf_associationamenities; 
                if(listingAssociationamenities)
                {
                    let liAssociationamenitiesHtml = '';
                    $.each(listingAssociationamenities, function(index, listingAssociationamenity){
                        liAssociationamenitiesHtml += listingAssociationamenity + ', ';
                    });
                    liAssociationamenitiesHtml = liAssociationamenitiesHtml.substring(0, liAssociationamenitiesHtml.length - 2);//remove trailing comma if any
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Association Amenities:</span> ' + liAssociationamenitiesHtml + '</p></li>'); 
                }

                let listingAssociationfee = listingObject.xf_associationfee; 
                let listingAssociationfeefrequency = listingObject.xf_associationfeefrequency; 
                if(listingAssociationfee && listingAssociationfeefrequency)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Association Fee:</span> $' +listingAssociationfee + ' ' + listingAssociationfeefrequency + '</p></li>'); 
                }
                else if(listingAssociationfee)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Association Fee:</span> $' + listingAssociationfee + '</p></li>'); 
                }

            //Area

                let listingSubdivision = listingObject.subdivision;  
                if(listingSubdivision)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Neighborhood:</span> ' + listingSubdivision + '</p></li>'); 
                }

            //History

                let listingDaysonmarket = listingObject.xf_daysonmarket; 
                if(listingDaysonmarket)
                {
                    $('.pl_property-features').find('ul').first().append('<li><p><span>Days on Market:</span> ' + listingDaysonmarket + '</p></li>'); 
                }
                $('.pl_property-features').find('ul').first().append('<li><p><span>Listing Date:</span> ' + listingDate + '</p></li>');
                $('.pl_property-features').find('ul').first().append('<li><p><span>Last Updated:</span> ' + lastUpdatedDate + '</p></li>');



                
            //###SCHOOLS DATA UNDER "PROPERTRY FEATURES" SECTION####
                var listingSchools = listingObject.schools; 
                
                let listingSchoolNamesParam = '';
                $.each(listingSchools, function(index, schoolName){
                    index = index.charAt(0).toUpperCase() + index.slice(1);
                    listingSchoolNamesParam += schoolName + ' ' + index + ',';
                });
                if (!(Array.isArray(listingSchools) && listingSchools.length ) )
                {
                    //###$('.pl_property-schools').find('ul').first().append(liSchoolHtml);
                    
                  
                    let settings = {        
                        "url": "https://slipstream.homejunction.com/ws/schools/search?license=" + licenseSlipstream + "&sortField=level&sortOrder=desc&market=WALMLS&details=true&name=" + listingSchoolNamesParam + '&county=' + listingCounty + '&state=' + listingState,
                        "method": "GET",
                        "timeout": 0,
                        "async": true,
                        "headers": {
                            "HJI-Slipstream-Token": slipstreamToken
                        },
                    };


                    $.ajax(settings).done(function (response) {
                        console.log(response);

                        if(response.success)
                        {

                            console.log(response.result.schools);
                            let totalSlipstreamListings = response.result.total;        
                            let schoolsArray = response.result.schools;

                            if(totalSlipstreamListings)
                            {
                                
                                //Clears the data for each page to only show new page data and not append it
                                let schoolsArrayObjectForTemplate = [];

                                $.each(schoolsArray, function( index, schoolsObject ) {
                                        console.log(schoolsObject);
                                        
                                        
                                        let tabNumber = index;
                                        let currentTabClass = (tabNumber == 0) ? 'current' : '';
                                        
                                        
                                        $('.pl_property-schools .tabs').append('<li class="tab-link ' + currentTabClass + '" data-tab="tab-' + tabNumber + '" >' + schoolsObject.name + '</li>');

                                        let district = schoolsObject.district.name;
                                        let gradeSpan = schoolsObject.gradeLow + ' - ' + schoolsObject.gradeHigh;

                                        let admissionType = schoolsObject.admission;
                                        let address = (schoolsObject.address.street + " " + schoolsObject.address.state + " " + schoolsObject.address.zip);

                                        let phone = schoolsObject.phone;
                                        let website = schoolsObject.url;

                                        let totalTeachers = schoolsObject.totalTeachers;
                                        let totalStudents = parseInt(schoolsObject.totalStudents);
                                        let studentTeacherRatio = schoolsObject.studentTeacherRatio;

                                        //let maleStudents = parseInt(schoolsObject.demographics.male);
                                        //let femaleStudents = parseInt(schoolsObject.demographics.female);
                                        //let maleStudentsPercentage = ( (maleStudents/totalStudents) * 100 ).toFixed(0);
                                        //let femaleStudentsPercentage = ( (femaleStudents/totalStudents) * 100 ).toFixed(0);

                                        let freeLunch = schoolsObject.demographics.freeLunch;
                                        let reducedLunch = schoolsObject.demographics.reducedLunch;

                                        let expenditure = '$' + schoolsObject.expenditure.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//add comma , after every 3 digits
                                        let titleI = (schoolsObject.titleI === true) ? 'Yes' : 'No';

                                        let Id = schoolsObject.id;
                                        
                                        let principal = schoolsObject.principal;


                                        schoolsArrayObjectForTemplate.push({                                                
                                                tabNumber: tabNumber, currentTabClass: currentTabClass, district: district, gradeSpan: gradeSpan, admissionType: admissionType, address: address,
                                                phone: phone, website: website, totalTeachers: totalTeachers, totalStudents: totalStudents, studentTeacherRatio: studentTeacherRatio, 
                                                maleStudentsPercentage: schoolsObject.demographics.male, femaleStudentsPercentage: schoolsObject.demographics.female, 
                                                freeLunch: freeLunch, reducedLunch: reducedLunch, expenditure: expenditure, titleI: titleI, Id: Id,
                                                principal: principal,
                                        });
                                });

                                // Render the books using the template
                                $("#schoolsTemplate").tmpl(schoolsArrayObjectForTemplate).appendTo(".pl_property-schools #tabs-data-container");

                                if (!(Array.isArray(schoolsArray) && schoolsArray.length) ) {
                                        $(".pl_property-schools #tabs-data-container").append('<p class="no-listings">No schools available.</p>');
                                        //$('.listings-container').show();
                                }
                                //else
                                //  $('#nextPageContainer, .listings-container').show();                                                               
                                
                                
                            }
                        }
                    });

                }


            //Brokerage Name
                if(listingAgentOffice)
                    $('.pl_property-listing-agent-office').append(listingAgentOffice);
                else                    
                    $('.pl_property-listing-agent-office').append('Brokerage Unavailable');

            //Agent Name
                if(listingAgentName)
                    $('.pl_property-listing-agent-name').append(listingAgentName);
                else                    
                    $('.pl_property-listing-agent-name').append('Agent Name Unavailable');
                
//“xf_appliances”:[“Dishwasher”,“Electric Oven”,“Electric Range”,“Microwave”],
//“xf_associationamenities”:[“Clubhouse”,“Fitness Center”,“Pool”],
//“xf_associationfee”:214,
//“xf_associationfeefrequency”:“Monthly”,
//“xf_bathroomsfull”:1,
//“xf_bathroomshalf”:0,
//“xf_bathroomstotalinteger”:1,
//“xf_bedroomstotal”:1,
//“xf_constructionmaterials”:[“Brick Veneer”,“Other”,“Vinyl Siding”],
//“xf_cooling”:[“Electric”],
//“xf_daysonmarket”:1
//“xf_fireplacefeatures”:[“None”],
//“xf_heating”:[“Electric”]
//“xf_interiorfeatures”:[“Ceiling Fan(s)“,”Granite Counters”,“Solid Surface Counters”],
//“xf_laundryfeatures”:[“Laundry Closet”]
//“xf_levels”:[“One”]
//“xf_roof”:[“Composition”,“Shingle”],
//“xf_roomstotal”:4,
//“xf_sewer”:[“Connected”]
//“xf_taxannualamount”:958
//“xf_utilities”:[“Cable Available”,“Sewer Connected”]
               
            }
            
            //var price = '$' + '' + listingObject.listPrice + ''.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//add comma , after every 3 digits
            //$("#listingTemplate").appendTo(".pl_listing-search");
        }

    });
}

var searchCriteriaPagination = {};

function slipstreamGetListings(searchQueryString)
{
    var pageNumber = searchQueryString.pageNumber;
    var minBeds = searchQueryString.minBeds;
    var minBaths = searchQueryString.minBaths;
    var minPrice = searchQueryString.minPrice;
    var maxPrice = searchQueryString.maxPrice;

    // modify pageNumber if in query string
    var queryPageNumberExists = false;
    var url = new URL(window.location.href);
    var search_params = url.searchParams;
    var queryPageNumber = search_params.get('pageNumber');

    if( queryPageNumber != null && pageNumber < queryPageNumber ) {
        pageNumber = queryPageNumber;
        queryPageNumberExists = true;
    }
    var pagination_params = "&pageSize=12&pageNumber=" + pageNumber;

    if( $('#pl_listings .pl_listing').length == 0 ) {
        var intial_count = 12 * pageNumber;
        pagination_params = "&pageSize=" + intial_count + "&pageNumber=1";
    }

    let QueryString = "&sortField=id&sortOrder=desc" + pagination_params;//"&listprice=" + minPrice + ':' + maxPrice + "&beds=>=" + minBeds + "&baths=>=" + minBaths + 
    //#&listingType=residential,land
//    if(purchaseType == 'pending')
//        QueryString = "&status=" + purchaseType + QueryString;
//    else 
    if(searchQueryString.listingType)
    {
        QueryString = "&listingType=" + searchQueryString.listingType + QueryString;
        searchCriteriaPagination['listingType'] = searchQueryString.listingType;
    }
    else
    {
        QueryString = "&listingType=residential,land" + QueryString;
    }
        
    
    if(minPrice && maxPrice)
    {
        QueryString = "&listprice=" + minPrice + ':' + maxPrice + QueryString;
        searchCriteriaPagination['minPrice'] = minPrice;
        searchCriteriaPagination['maxPrice'] = maxPrice;
    }
    else if(minPrice)
    {
        QueryString = "&listprice=>=" + minPrice + QueryString;
        searchCriteriaPagination['minPrice'] = minPrice;
    }
    else if(maxPrice)
    {
        QueryString = "&listprice=<=" + maxPrice + QueryString;
        searchCriteriaPagination['maxPrice'] = maxPrice;
    }
    if(minBeds)
    {
        QueryString = "&beds=>=" + minBeds + QueryString;
        searchCriteriaPagination['minBeds'] = minBeds;
    }
    if(minBaths)
    {
        QueryString = "&baths=>=" + minBaths + QueryString;
        searchCriteriaPagination['minBaths'] = minBaths;
    }
    //USED FOR PENDING-LISTING PAGE
    if(searchQueryString.listingStatus) 
    {
        QueryString = "&status=" + searchQueryString.listingStatus + QueryString;    
        searchCriteriaPagination['listingStatus'] = searchQueryString.listingStatus;
    }
    
    
    //###HOME PAGE LATEST LISTING SECTION##############
    if(searchQueryString.searchType == 'homepageDefaultSearch')
    {
        QueryString = "&listprice=>=5000&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['searchType'] = 'homepageDefaultSearch';
    }

    if(searchQueryString.xf_mlsareamajor)
    {
        QueryString = '';
        QueryString = "&xf_mlsareamajor=" + searchQueryString.xf_mlsareamajor + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['xf_mlsareamajor'] = searchQueryString.xf_mlsareamajor;
        if(searchQueryString.minPrice )
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }
    if(searchQueryString.zip)
    {
        QueryString = '';
        QueryString = "&address.zip=" + searchQueryString.zip + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['zip'] = searchQueryString.zip;
        if(searchQueryString.minPrice )
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }
    if(searchQueryString.xf_waterbodyname)
    {
        QueryString = '';
        QueryString = "&xf_waterbodyname=" + searchQueryString.xf_waterbodyname + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['xf_waterbodyname'] = searchQueryString.xf_waterbodyname;
        if(searchQueryString.minPrice )
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }
    if(searchQueryString.xf_waterfrontyn)
    {
        QueryString = '';
        QueryString = "&xf_waterfrontyn=" + searchQueryString.xf_waterfrontyn + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['xf_waterfrontyn'] = searchQueryString.xf_waterfrontyn;
        if(searchQueryString.minPrice )
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }        
    if(searchQueryString.propertyType)
    {
        QueryString = '';
        QueryString = "&propertyType=" + searchQueryString.propertyType + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params; 
        searchCriteriaPagination['propertyType'] = searchQueryString.propertyType;
        if(searchQueryString.minPrice )//searchQueryString.propertyType == 'Condominium' && 
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }
    if(searchQueryString.city)
    {
        QueryString = '';
        QueryString = "&city=" + searchQueryString.city + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['city'] = searchQueryString.city;
        if(searchQueryString.minPrice )
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }
    if(searchQueryString.subdivision)
    {
        QueryString = '';
        QueryString = "&subdivision=" + searchQueryString.subdivision + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
        searchCriteriaPagination['subdivision'] = searchQueryString.subdivision;
        if(searchQueryString.minPrice )
        {
            QueryString = "&listprice=>=" + minPrice + QueryString;
            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
        }
    }
//    if(searchQueryString.listingStatus)
//    {
//        QueryString = '';
//        QueryString = "&status=" + searchQueryString.listingStatus + "&listingType=residential,land&sortField=id&sortOrder=desc" + pagination_params;
//        searchCriteriaPagination['listingStatus'] = searchQueryString.listingStatus;
//        if(searchQueryString.minPrice )
//        {
//            QueryString = "&listprice=>=" + minPrice + QueryString;
//            searchCriteriaPagination['minPrice'] = searchQueryString.minPrice;
//        }
//    }

        

    slipstreamToken = getWithExpiry('slipstream-token');
    if(!slipstreamToken)
    {
        slipstreamAuthenticate();
        slipstreamToken = getWithExpiry('slipstream-token');
        if(!slipstreamToken)
        {
            slipstreamAuthenticate();
            slipstreamToken = getWithExpiry('slipstream-token');
        }
    }
    //pageSize defaults to 25.
    var settings = {
        //"url": "https://slipstream.homejunction.com/ws/listings/search?license=" + licenseSlipstream + "&market=LEX&listprice=>800000&beds=<=4&baths=<=4" + "&pageSize=12&pageNumber=1",
        "url": "https://slipstream.homejunction.com/ws/listings/search?license=" + licenseSlipstream + "&market=WALMLS" + QueryString,
        "method": "GET",
        "timeout": 0,
        "async": true,
        "headers": {
            "HJI-Slipstream-Token": slipstreamToken
        },
    };  

    $.ajax(settings).done(function (response) {

        if(response.success)
        {
            
            let totalSlipstreamListings = response.result.total;
            let pageNumberSlipstreamListings = response.result.paging.number;
            let totalSlipstreamPages = response.result.paging.count;
            console.info('totalSlipstreamPages: ' + totalSlipstreamPages + ' ::::pageNumberSlipstreamListings: ' + pageNumberSlipstreamListings);
            
            
            generatePagination(totalSlipstreamPages, pageNumber);
            
            loadListingsData(response.result.listings);

            //INCREMENT PAGE NUMBER FOR "LOAD MORE LISTINGS" BUTTON
            var buttonPageNumber = pageNumber;
            buttonPageNumber++;
            $('#nextPage').attr('data-page', buttonPageNumber);
/*
            var pageNumberLoadMoreBtn = $('#nextPage').data('page');
            pageNumberLoadMoreBtn = pageNumberLoadMoreBtn+ 1;
            $('#nextPage').data('page', pageNumberLoadMoreBtn);
*/          
            $('#nextPage').data('totalSlipstreamPages', totalSlipstreamPages);

            // modify browser URL to include page number
            if( pageNumber > 1 ) {
                var url = new URL(window.location.href);
                var search_params = url.searchParams;
                search_params.set('pageNumber', pageNumber);
                url.search = search_params.toString();
                var new_url = url.toString();
                window.history.pushState("pageNumber", "", new_url);
            }
            
        }

    });
}

var listingArrayObjectForTemplate = [];
function loadListingsData(listingsArray){
    
    //Clears the data for each page to only show new page data and not append it
    var listingArrayObjectForTemplate = [];
    
    $.each(listingsArray, function( index, listingObject ) {
        console.log(listingObject);
        //'$' + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
                
        var price = '$' + listingObject.listPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");//add comma , after every 3 digits
        
        var addressParam = (listingObject.address.street + " " + listingObject.address.city + " " + listingObject.address.state + " " + listingObject.address.zip).replace(/ /g,"_");
        
        if(!listingObject.images)
        {        
            listingObject['images'] = {};
            listingObject['images']['0'] = noPhotosImage;
        }

        var status = listingObject.status;
        
        let baths = 0;
        if(listingObject.baths && listingObject.baths.total)
            baths = listingObject.baths.total;
        
        let beds = 0;
        if(listingObject.beds)
            beds = listingObject.beds;
        
        let size = '';
        let bedsBathsSizeHtml = '';
        let listingType = listingObject.listingType.toLowerCase();
        if(listingType == 'land')
        {
            if(listingObject.lotSize)
                size = listingObject.lotSize.acres + '&nbsp;acres';            
            
        }
        else            
        {
            if(listingObject.size)
                size = listingObject.size + '&nbsp;sqft';
            else
                size = '';
        }
                
        listingArrayObjectForTemplate.push({
            listingAddress: listingObject.address.street + " " + listingObject.address.city, listingStateCode: listingObject.address.state + " " + listingObject.address.zip,
            beds: beds + " beds", baths: baths + " baths", mlsidTxt: "MLS# " + listingObject.id, status: status,
            price: price, mlsid: listingObject.id, listingImage: listingObject.images['0'],
            size: size, addressParam: addressParam, listingType: listingType
        });
    });
    
    // Render the books using the template
    $("#listingTemplate").tmpl(listingArrayObjectForTemplate).appendTo(".pl_listing-search");
    
    if (!(Array.isArray(listingsArray) && listingsArray.length) ) {
        $(".pl_listing-search").append('<p class="no-listings">No listings available.</p>');
        $('.listings-container').show();
    }
    else
        $('#nextPageContainer, .listings-container').show();
}


function slipstreamAuthenticate()
{
    //console.log("authentication invoked");
    var settings = {
        "url": "https://slipstream.homejunction.com/ws/api/authenticate?license=" + licenseSlipstream,
        "method": "GET",
        "async": false,
        "timeout": 0,
    //    "headers": {
    //        "HJI-Slipstream-Token": "HJI-F7439D1A-322C-4C80-94BC-A3AACA7D24A3"
    //    },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);

        if(response.success)
        {
            //#TIME SET FOR 10 HOURS TO AVOID TOKEN EXPIRY EVEN THOUGH IT SHOULDN"T
            const ttl = 36000000;//TIME in milliseconds i.e. 1s = 1000ms
            const now = new Date();
            const item = {
                value: response.result.token,
                expiry: now.getTime() + ttl,
                expires: response.result.expires
            };

            localStorage.setItem('slipstream-token', JSON.stringify(item));
        }

        //setWithExpiry();

    });
}


//ttl in miliseconds 1000 ms = 1s
function setWithExpiry(key, value, ttl) {
    const now = new Date();

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    // if the item doesn't exist, return null
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) { console.warn('expired token');
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}






jQuery(document).ready(function(){

    $(document).on('click', '.pl_property-schools ul.tabs li', function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

});


$(document).ready(function(){
    $(document).on('click', '#nextPage', function(event){
        
        event.preventDefault();
        
        var pageNumber = $('#nextPage').attr('data-page');
        console.log("page number inside click nextpage: " + pageNumber);
        var minPrice = $('#minPrice').val();
        var maxPrice = $('#maxPrice').val();
        var minBeds = $('#minBed').val();
        var minBaths = $('#minBath').val();
        var searchQueryString = {pageNumber: pageNumber, minBeds: minBeds, minBaths: minBaths, minPrice: minPrice, maxPrice: maxPrice };
        
        if(searchCriteriaPagination)
        {            
            $.each(searchCriteriaPagination, function(key, searchCriteria){
                console.log( key + ": " + searchCriteria );
                searchQueryString[key] = searchCriteria;
            });
        }
        slipstreamGetListings(searchQueryString);

    });
});

function generatePagination(totalSlipstreamPages, activePageNumber){

    $('#nextPage').show();

    console.log("generating pagination!" + "::ActivePagenumber: " + activePageNumber);
    console.info("totalSlipstreamPages: "+ totalSlipstreamPages);


    if(activePageNumber >= totalSlipstreamPages)
    {
        console.log("last page reached");
        $('#nextPage').hide();
        return false;
    }

}

    
$(document).ready(function(){    
    
    //ADD THE purchase-type GET var to THE FORM AS HIDDEN FIELD
    $( "#searchListingForm" ).append('<input type="text" style="display: none;" name="purchaseType" id="purchaseType" value="" />');
    
    $('#minPrice').val( window.getUrlVars()["min-price"] );
    $('#maxPrice').val( window.getUrlVars()["max-price"] );
    $('#minBed').val( window.getUrlVars()["min-beds"] );
    $('#minBath').val( window.getUrlVars()["min-baths"] );   
    $('#purchaseType').val( window.getUrlVars()["purchase-type"] );   
     
    let purchaseTypeUrlValClass = window.getUrlVars()["purchase-type"];
    
    //ADD ACTIVE CLASS TO TOP PURCHASE TYPE IN SEARCH FORM
    if(purchaseTypeUrlValClass)
        $('.purchaseType.' + purchaseTypeUrlValClass ).addClass('active');//HIDE PENDING OPTION FROM TOP PURCHASE TYPE FILTER IN SEARCH FORM
  
    var minPrice = $('#minPrice').val();
    var maxPrice = $('#maxPrice').val();
    var minBeds = $('#minBed').val();
    var minBaths = $('#minBath').val();
    var purchaseType = $('#purchaseType').val();
    
    console.log(window.getUrlVars()["purchase-type"] );   
    console.log('purchaseType: ' + purchaseType);
    
    
    function purchaseTypeSet(purchaseType)
    {
        let searchQueryString = {};
        
        if(purchaseType == 'residential')
            searchQueryString['listingType'] = 'residential';
        else if(purchaseType == 'land')
            searchQueryString['listingType'] = 'land';
        else if(purchaseType == 'pending')
            searchQueryString['listingStatus'] = 'pending';
        
        return searchQueryString;
    }
     
        
    if(window.location.pathname.indexOf('/for-sale') !== -1 && (minPrice || maxPrice || minBeds || minBaths) )
    {
        //##SELECT THE FORM FIELD WITH QUERY STRING DATA##
                
        let searchQueryString = {pageNumber: "1", 'purchaseType': ''}; //pageNumber: "1", minBeds: minBeds, minBaths: minBaths, minPrice: minPrice, maxPrice: maxPrice
        
        let searchType = purchaseTypeSet(purchaseType);
        if(searchType.listingType)
            searchQueryString['listingType'] = searchType.listingType;
        else if(searchType.listingStatus)
            searchQueryString['listingStatus'] = searchType.listingStatus;
                
        if(minPrice)
        {
            let minPriceSearchForm = '$' + minPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            searchQueryString['minPrice'] = minPrice;
            $('#minPrice').siblings().find(".custom-select-trigger").text(minPriceSearchForm);
        }
        if(maxPrice)
        {
            let maxPriceSearchForm = '$' + maxPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            searchQueryString['maxPrice'] = maxPrice;
            $('#maxPrice').siblings().find(".custom-select-trigger").text(maxPriceSearchForm);

            if(!minPrice)
            {                
                //####set default minPrice for only maxPrice parameter use###
                searchQueryString['minPrice'] = 5000;
                let minPriceSearchForm = '$' + searchQueryString.minPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                $('#minPrice').siblings().find(".custom-select-trigger").text(minPriceSearchForm);
            }

        }
        if(minBaths)
        {
            searchQueryString['minBaths'] = minBaths;
            minBaths = minBaths + '+';
            $('#minBath').siblings().find(".custom-select-trigger").text(minBaths);
        }
        if(minBeds)
        {
            searchQueryString['minBeds'] = minBeds;
            minBeds = minBeds + '+';
            $('#minBed').siblings().find(".custom-select-trigger").text(minBeds);
        }
        
            
        console.log("URL BASED SEARCH STARTED for sale page with atlast one parameter");
        console.log(searchQueryString);

        slipstreamGetListings(searchQueryString);

        
    }  
    else if(window.location.pathname.indexOf('/for-sale') !== -1) //window.location.pathname == '/for-sale'
    {
        console.log('/for-sale page default listing search')
        //###Default listings page search
        var minPrice = 5000;
        var maxPrice = 50000000;
      
        //Set search for values since search form feilds are used for pagination
        //$('#minPrice').val(minPrice);
        //$('#maxPrice').val(maxPrice);
        //$('#minBed').val(minBeds);
        //$('#minBath').val(minBaths);    
        
        let searchQueryString = {pageNumber: "1", minPrice: minPrice, maxPrice: maxPrice };
            
        let searchType = purchaseTypeSet(purchaseType);
        if(searchType.listingType)
            searchQueryString['listingType'] = searchType.listingType;
        else if(searchType.listingStatus)
            searchQueryString['listingStatus'] = searchType.listingStatus;
            
        console.log("URL BASED SEARCH STARTED");
        console.log(searchQueryString);

        slipstreamGetListings(searchQueryString);
    }  
    
//    if(window.location.pathname == '/pending-listings' || window.location.pathname == '/squarespacerealbama-local/pending-listings/slipstream-listing.php')
//    {
//        console.log("inside /pending-listings");
//        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', listingStatus: 'Pending', minPrice: 5000 };
//        slipstreamGetListings(searchQueryString);
//    }
    
    if(window.location.pathname.indexOf('/pending-listings') !== -1 && (minPrice || maxPrice || minBeds || minBaths) )
    {
        //##SELECT THE FORM FIELD WITH QUERY STRING DATA##
        
        let searchQueryString = {pageNumber: "1"}; //pageNumber: "1", minBeds: minBeds, minBaths: minBaths, minPrice: minPrice, maxPrice: maxPrice
        
//        if(purchaseType == 'residential')
//            searchQueryString['listingType'] = 'residential';
//        else if(purchaseType == 'land')
//            searchQueryString['listingType'] = 'land';
//        else if(purchaseType == 'pending')
//            searchQueryString['status'] = 'pending';
        
        let searchType = purchaseTypeSet(purchaseType);
        
        console.log('search type/purchase type');
        console.log(searchType);
        
        if(searchType.listingType)
            searchQueryString['listingType'] = searchType.listingType;
        else if(searchType.listingStatus)
            searchQueryString['listingStatus'] = searchType.listingStatus;
                
        searchQueryString['listingStatus'] = 'Pending';//FIX FOR PENDING-LISTING PAGE ONLY
        
        $('.purchaseType.pending').hide();//HIDE PENDING OPTION FROM TOP PURCHASE TYPE FILTER IN SEARCH FORM
            
        
        
        searchQueryString['minPrice'] = 5000;
        
        if(minPrice)
        {
            let minPriceSearchForm = '$' + minPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            searchQueryString['minPrice'] = minPrice;
            $('#minPrice').siblings().find(".custom-select-trigger").text(minPriceSearchForm);
        }
        if(maxPrice)
        {
            let maxPriceSearchForm = '$' + maxPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            searchQueryString['maxPrice'] = maxPrice;
            $('#maxPrice').siblings().find(".custom-select-trigger").text(maxPriceSearchForm);

            if(!minPrice)
            {                
                //####set default minPrice for only maxPrice parameter use###
                searchQueryString['minPrice'] = 5000;
                let minPriceSearchForm = '$' + searchQueryString.minPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                $('#minPrice').siblings().find(".custom-select-trigger").text(minPriceSearchForm);
            }

        }
        if(minBaths)
        {
            searchQueryString['minBaths'] = minBaths;
            minBaths = minBaths + '+';
            $('#minBath').siblings().find(".custom-select-trigger").text(minBaths);
        }
        if(minBeds)
        {
            searchQueryString['minBeds'] = minBeds;
            minBeds = minBeds + '+';
            $('#minBed').siblings().find(".custom-select-trigger").text(minBeds);
        }
            
        console.log("URL BASED SEARCH STARTED for pending-listings page with atlast one parameter");
        console.log(searchQueryString);

        slipstreamGetListings(searchQueryString);

        
    }  
    else if(window.location.pathname.indexOf('/pending-listings') !== -1) //window.location.pathname == '/for-sale'
    {
        console.log('/pending-listings page default listing search')
        //###Default listings page search
        var minPrice = 5000;
        var maxPrice = 50000000;
      
        //Set search for values since search form feilds are used for pagination
        //$('#minPrice').val(minPrice);
        //$('#maxPrice').val(maxPrice);
        //$('#minBed').val(minBeds);
        //$('#minBath').val(minBaths);    
        
        let searchQueryString = {pageNumber: "1", minPrice: minPrice, maxPrice: maxPrice };
            
        let searchType = purchaseTypeSet(purchaseType);
        if(searchType.listingType)
            searchQueryString['listingType'] = searchType.listingType;
        else if(searchType.listingStatus)
            searchQueryString['listingStatus'] = searchType.listingStatus;
                
        searchQueryString['listingStatus'] = 'Pending';//FIX FOR PENDING-LISTING PAGE ONLY
                 
        $('.purchaseType.pending').hide();//HIDE PENDING OPTION FROM TOP PURCHASE TYPE FILTER IN SEARCH FORM
            
        console.log("URL BASED SEARCH STARTED");
        console.log(searchQueryString);

        slipstreamGetListings(searchQueryString);
    } 
    
    
    
    //#########HOME PAGE LATEST LISTING SECTION####
    if(window.location.pathname == '/')
    {
        console.log("inside /home page");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', searchType: 'homepageDefaultSearch' };

        let searchType = purchaseTypeSet(purchaseType);
        if(searchType.listingType)
            searchQueryString['listingType'] = searchType.listingType;
        else if(searchType.listingStatus)
            searchQueryString['listingStatus'] = searchType.listingStatus;
        
        slipstreamGetListings(searchQueryString);
    }
    
    
    if(window.location.pathname == '/u-of-a-campus')
    {
        console.log("inside /u-of-a-campus");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', xf_mlsareamajor: '(02) Central Tuscaloosa City', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    if(window.location.pathname == '/northport')
    {
        console.log("inside /northport");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', city: 'northport', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/homes-in-35406')
    {
        console.log("inside homes-in-35406");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', zip: '35406', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/lake-tuscaloosa-homes')
    {
        console.log("inside /lake-tuscaloosa-homes");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', xf_waterbodyname: 'Lake Tuscaloosa', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/waterfront')
    {
        console.log("inside /waterfront");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', xf_waterfrontyn: 'true', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/condos')
    {
        console.log("inside /condos");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', propertyType: 'Condominium', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/cherokee-bend')
    {
        console.log("inside /cherokee-bend");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Cherokee Bend', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/highland-park')
    {
        console.log("inside /highland-park");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Highland Park', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/huntington-place')
    {
        console.log("inside /huntington-place");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Huntington Place', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/laurel-wood')
    {
        console.log("inside /laurel-wood");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Laurel Wood', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/murphy-place')
    {
        console.log("inside /murphy-place");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Murphy Place', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/northwood-lake')
    {
        console.log("inside /northwood-lake");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Northwood Lake', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/reston-place')
    {
        console.log("inside /reston-place");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Reston Place', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/rosewood')
    {
        console.log("inside /rosewood");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Rosewood', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/vestavia-hills')
    {
        console.log("inside /vestavia-hills");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Vestavia Hills', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }
    
    if(window.location.pathname == '/woodland-hills')
    {
        console.log("inside /woodland-hills");
        let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', subdivision: 'Woodland Hills', minPrice: 5000 };
        slipstreamGetListings(searchQueryString);
    }   
    
    if(window.location.pathname == '/' || window.location.pathname.indexOf('/embed-listings') !== -1)
    {
        console.log("inside / or /embed-listings");
        
        var minPrice = 5000;
        var maxPrice = 50000000;
      
        //Set search for values since search form feilds are used for pagination
        //$('#minPrice').val(minPrice);
        //$('#maxPrice').val(maxPrice);
        //$('#minBed').val(minBeds);
        //$('#minBath').val(minBaths);    
        
        let searchQueryString = {pageNumber: "1", minPrice: minPrice, maxPrice: maxPrice };
            
        let searchType = purchaseTypeSet(purchaseType);
        if(searchType.listingType)
            searchQueryString['listingType'] = searchType.listingType;
        else if(searchType.listingStatus)
            searchQueryString['listingStatus'] = searchType.listingStatus;
            
        console.log("URL BASED SEARCH STARTED for /embed-listings");
        console.log(searchQueryString);

        
        slipstreamGetListings(searchQueryString);
    }
    
    
});
    
jQuery(document).ready(function($){    

    //$('#nextPageContainer, .listings-container').hide();
  
    var $siteUrl = 'http://localhost/squarespacerealbama-local';
    //Live 
    //var $siteUrl = window.location.origin;
  
    $( "#searchListingForm" ).submit(function( event ) {
        console.log( "Handler for .submit() called." );
        event.preventDefault();
        
        //##CLEAR PREVIOUS LISTING RESULTS
        $('.pl_listing-search').empty();
        
        console.log($('#minPrice').val() );
        var minPrice = $('#minPrice').val();
        var maxPrice = $('#maxPrice').val();
        var minBeds = $('#minBed').val();
        var minBaths = $('#minBath').val();
        
        var purchaseType = $('#purchaseType').val();
        
        //Live 
        $siteUrl = window.location.origin;
        
        console.log(window.location.pathname);
        if(window.location.pathname.indexOf('/pending-listings') !== -1) //#local : /squarespacerealbama-local/pending-listings/slipstream-listing.php
        {
//            console.log("inside /pending-listings search");
//            let searchQueryString = {pageNumber: "1", sortField: 'id', sortOrder: 'desc', listingStatus: 'Pending', minPrice: 5000 };
//            slipstreamGetListings(searchQueryString);
            
            var url = "/pending-listings?min-price=" + encodeURIComponent(minPrice) + "&max-price=" + encodeURIComponent(maxPrice) + "&min-beds=" + encodeURIComponent(minBeds) + "&min-baths=" + encodeURIComponent(minBaths) + "&purchase-type=" + encodeURIComponent(purchaseType);
            window.location.href = $siteUrl + url;
            return;
        }
        else
        {
            var url = "/for-sale?min-price=" + encodeURIComponent(minPrice) + "&max-price=" + encodeURIComponent(maxPrice) + "&min-beds=" + encodeURIComponent(minBeds) + "&min-baths=" + encodeURIComponent(minBaths) + "&purchase-type=" + encodeURIComponent(purchaseType);
            window.location.href = $siteUrl + url;
            return;
        }        
        
    });    
       
    
    $(document).on('click', '.purchaseType', function(){
        $('.purchaseType').removeClass('active');
        
        let purchaseType = $(this).attr('class');
        purchaseType = purchaseType.replace("purchaseType ", "");
        
        $(this).addClass('active');
        
        console.log("on click purchase type set for form");
        console.log(purchaseType);        
        
        $( "#searchListingForm input[name='purchaseType']" ).val(purchaseType);
        
    });
    
});







$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});