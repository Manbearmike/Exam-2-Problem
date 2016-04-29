function CategoryInfo() //getAllCustomers Called by Button
{   var objRequest = new XMLHttpRequest();
    //Create AJAX request object
    //Create URL and Query string
    var Categoryurl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
{         if (objRequest.readyState == 4 && objRequest.status == 200)
{         var Customeroutput = JSON.parse(objRequest.responseText);
        GenerateCustomers(Customeroutput);
}
}   //Initiate the server request
    objRequest.open("GET", Categoryurl, true);
    objRequest.send(); }
        
function GenerateCustomers(results)
{  var count = 0;
   var displaytext = "<table><tr><th>Category ID</th><th>Category Name</th><th>Description</th></tr>";
   //Loop to extract data from the response object
   for (count = 0; count < results.GetAllCategoriesResult.length; count++)
   {  displaytext += "<tr><td>" + results.GetAllCategoriesResult[count].CID + "</td><td>" + results.GetAllCategoriesResult[count].CName + "</td><td>"
   + results.GetAllCategoriesResult[count].CDescription + "</td></tr>";}
   displaytext += "</table>"; 
   document.getElementById("AllCategoriesdisplay").innerHTML = displaytext;}        
    
/////////////////////////////END FIRST SECTION///////////////////////////////////////
function CreateCategory()
{     var objRequest = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory"; //Collect Customer data from web page
        var categoryname = document.getElementById("categoryname").value;//Create name variable
        var categorydescription = document.getElementById("categorydescription").value;//create city variable
        var newcategory = '{"CName":"' + categoryname + '","CDescription":"' + categorydescription + '"}';
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {         if (objRequest.readyState == 4 && objRequest.status == 200)
        {             var result = JSON.parse(objRequest.responseText);
                        OperationResult(result);         }
}          //Start AJAX request
                        objRequest.open("POST", url, true);
                        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        objRequest.send(newcategory);   }
function OperationResult(output)
{
if (output.WasSuccessful == 1)
    { document.getElementById("result").innerHTML = "The operation was successful!" }
    else
    { document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;}}
///////////////////////////////END SECOND SECTION/////////////////////////////////////
function UpdateCategory()
{     var objRequest = new XMLHttpRequest();
        var IDurl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription"; //Collect Customer data from web page
        var IDdescription = document.getElementById("IDdescriptionchange").value;
        var CatID = document.getElementById("CategoryID").value;
        var newdescription = '{"CID":"' + CatID + '","CDescription":"' + IDdescription + '"}';
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {         if (objRequest.readyState == 4 && objRequest.status == 200)
        {             var result = JSON.parse(objRequest.responseText);
                        DescriptionResult(result);         }
}          //Start AJAX request
                        objRequest.open("POST", IDurl, true);
                        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        objRequest.send(newdescription);   }
function DescriptionResult(output)
{
if (output == 1)
    { document.getElementById("Descriptionresult").innerHTML = "The operation was successful!" }
    else  
    { document.getElementById("Descriptionresult").innerHTML = "The operation was not successful!" + "<br>" + output;}}
    
////////////////////////////////////////////////////////////////////////////////
function DeleteCustomers() //getOrdersForCustomer Called by Button
{   var objRequest = new XMLHttpRequest();
    //Create AJAX request object
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory";
    url += document.getElementById("customerDeletion").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
{         if (objRequest.readyState == 4 && objRequest.status == 200)
{         var Deletionoutput = JSON.parse(objRequest.responseText);
         deleteCustomerInfo(Deletionoutput);
}
}   //Initiate the server request
    objRequest.open("GET", url, true);
    objRequest.send(); }
    
    function deleteCustomerInfo(Deletionoutput)
{
if (Deletionoutput.WasSuccessful == 1)
    { document.getElementById("deleteCustomerStatus").innerHTML = "The operation was successful!" }
    else
    { document.getElementById("deleteCustomerStatus").innerHTML = "The operation was not successful!" + "<br>" + Deletionoutput;}}
    
//////////////////////////////////////////////////END SECTION CUSTOMER HISTORY///////////////////////////////////////////   


    
///////////////////////SECTION VISIBILITY//////////////////////////////    
function MenuChoice()
{     if (document.getElementById("SectionMenu").value == "Display The First Section")
{           document.getElementById("FirstSection").style.visibility = "visible";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "hidden";
            document.getElementById("FourthSection").style.visibility = "hidden";
            document.getElementById("FifthSection").style.visibility = "hidden";
}
    else if (document.getElementById("SectionMenu").value == "Display The Second Section")
{           document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "visible";
            document.getElementById("ThirdSection").style.visibility = "hidden";
            document.getElementById("FourthSection").style.visibility = "hidden";
            document.getElementById("FifthSection").style.visibility = "hidden";
            }
    else if (document.getElementById("SectionMenu").value == "Display The Third Section")
{           document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "visible";
            document.getElementById("FourthSection").style.visibility = "hidden";
            document.getElementById("FifthSection").style.visibility = "hidden";
            }
    else if (document.getElementById("SectionMenu").value == "Display The Fourth Section")
{           document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "hidden";
            document.getElementById("FourthSection").style.visibility = "visible";
            document.getElementById("FifthSection").style.visibility = "hidden";
            }
    else if (document.getElementById("SectionMenu").value == "Display The Fifth Section")
{           document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "hidden";
            document.getElementById("FourthSection").style.visibility = "hidden";
            document.getElementById("FifthSection").style.visibility = "visible";
            }
            else
            { document.getElementById("FirstSection").style.visibility = "hidden";
              document.getElementById("SecondSection").style.visibility = "hidden";
              document.getElementById("ThirdSection").style.visibility = "hidden";
              document.getElementById("FourthSection").style.visibility = "hidden";
              document.getElementById("FifthSection").style.visibility = "hidden";
            } }    

