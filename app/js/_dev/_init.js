// ==========================================================================
// Initialisation
// ==========================================================================

var httpRequestObserver =
{
  observe: function(subject, topic, data) 
  {
    if (topic == "http-on-modify-request") {
      var httpChannel = subject.QueryInterface(Ci.nsIHttpChannel);
      httpChannel.setRequestHeader("X-Auth-Token", "679038679bcd4b3b9c49b464f45cd8fc", false);
    }
  }
};

// Core Functions 
dataLadder();
dataFixture();