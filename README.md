Solution Summary :

What’s in the helloEko.rar?
•	File: index.html		                     // main html page (linked to public/bundle.js)
•	File: package.json	                     // npm package
•	File: webpack.config.js
•	File: babel.config
•	Folder: public
    o	bundle.js                             // “all in 1” js code with bubble
    o	styles.css                            //  “all in 1” css code 
•	Folder:  src
    o	Folder: js
      •	FirebaseWrapper.js	
      •	Index.js			                      // webpack start point
      •	IpExtractor.js		                  // class for using ip extractor api
      •	VideoCompponent.js
      •	Folder: test		                    // simple and not useful test with jest
        •	forTests.js
        •	mainTest.test.js
    o	Folder: css
      •	Style.css		
      •	Folder: fontawesome-free-5.11.2-web // folder with fonts are awesome free styles

How To Use?
In main folder open the terminal and run:
	* npm install
		* npm run build   	  // to run on local server
		* npm run build:prod 	// to build bundle.js 
		* npm run test		    // to run jest 

 
Solution also exist on GitHub  https://github.com/ulmerido/helloEko

Contact info:
Email: ulmerido.work@gmail.com
