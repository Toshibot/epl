function data() {
   
   var self = this;

   self.ajax = function(uri, method, data) {
       var request = {
           url: uri,
           type: method,
           accepts: "application/json",
           cache: false,
           dataType: "json",
           data: JSON.stringify(data),
           headers: {"X-Auth-Token": "679038679bcd4b3b9c49b464f45cd8fc"},
           error: function (jqXHR) {
               console.log("ajax error " + jqXHR.status);
           }

       };

       return $.ajax(request);
   }

   dataLadder(self);
   dataFixture(self);
}