

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    
    //window.addEventListener('orientationchange', doOnorientationChange);
    screen.lockOrientation('portrait');
    //screen.unlockOrientation();
   // QRtimer= setInterval(onQRscan, 1000);
    app.receivedEvent('deviceready');
},
    // Update DOM on a Received Event
receivedEvent: function(id) {
    
}
};

var QRtimer;

function onQRscan(){
    //console.log(screen.orientation);
    //console.log(Lungo.Router.history());
    if(screen.orientation == "landscape-primary" || screen.orientation == "landscape-secondary" )
    {
        screen.lockOrientation('portrait');
        clearInterval(QRtimer);
        cordova.plugins.barcodeScanner.scan(
            function(result){
                console.log(result.text);
                $("#join_connection_id_text").val(result.text);
                QRtimer= setInterval(onQRscan, 1000);
                screen.unlockOrientation();
            },
            function(error){
                screen.unlockOrientation();
            }
        );
    }
}

function doOnorientationChange()
{
    switch(window.orientation)
    {
        case -90:
        case 90:
            console.log('landscape');
            break;
        default:
            console.log('portrait');
            break;
    }
}

