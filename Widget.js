define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-customwidget',
      // //this property is set by the framework when widget is loaded.
      // name: 'CustomWidget',


      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate');
      },

      startup: function() {
       // this.inherited(arguments);
       // this.mapIdNode.innerHTML = 'map id:' + this.map.id;
       console.log(this.config.configText);
       console.log(this.label);
       console.log(this.map);
      },

      onOpen: function(){
        console.log('onOpen'); //ok
        //load the point fls here?
      },

      onClose: function(){
        console.log('onClose'); //ok
      },

      // // my widget doesn't really need this... //
      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },
      // // end of my widget doesn't really need this... //

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });