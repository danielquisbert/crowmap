	var filesaver;
	var dlnkplace;
	const MIME_TYPE = 'text/plain';

	var dataMap, treeData,root;
	var margin = {top: 20, right: 120, bottom: 20, left: 120},
	width = 1200 - margin.right - margin.left,
	height = 500 - margin.top - margin.bottom;


	var ITEMCOUNTER = 0;

	var tree ,diagonal;
    var svg;
	 var dummy = [

       { "name" : "Map","title":"India Map", "parent":"null", "type": "Map" ,"code":0 , "properties":null}

    ];

    var data = [

       { "name" : "Map","title":"India Map", "parent":"null", "type": "Map","code":0 ,"properties":null}

    ];


    Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
   };



		$(document).ready(function() {
           $("#documents a").click(function() {
               addTab($(this));
           });
           $('.nojump').click(function (evt) {
       			 // stops from submitting the form
        		evt.preventDefault();
        		return false;
    		});



           $('body').on('click', '.tab', function(){
               // Get the tab name
               var contentname = $(this).attr("id") + "_content";

               // hide all other tabs
               $("#content p").hide();
               $("#tabs li").removeClass("current");

               // show current tab
               $("#" + contentname).show();
               $(this).parent().addClass("current");
           });
            filesaver = document.querySelector('#filesaver');
            dlnkplace = filesaver.querySelector('#dlnkplace');

           
			
			var jsonconvert= new Crowmap.Map2json();
			
			

            init();


       });
