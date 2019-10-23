Solution Summary :

**Whats in the project?**

------------


	•  index.html		                                  // main html page (linked to public/bundle.js)
	•  package.json	                          	          // npm package
	•  webpack.config.js
	•  babel.config
	o Folder: public
			• bundle.js                                // “all in 1"  js code with bubble
			• styles.css                      	   // “all in 1” css code 
	o Folder:  src
			o Folder: js
      				• FirebaseWrapper.js
      				• Index.js                         // webpack start point
      				• IpExtractor.js                   // class for using ip extractor api
       				• VideoCompponent.js
      				o Folder: test                     // simple and not useful test with jest
        					• forTests.js
        					• mainTest.test.js
			o Folder: css
      				• Style.css
     				o Folder: fontawesome-free         // folder with fonts are awesome free styles

**How To Use?**
In main folder open the terminal and run:
```
 npm install
 npm run build   	 // to run on local server
 npm run build:prod     // to build bundle.js 
 npm run test		// to run jest 
```

 
GitHub  https://github.com/ulmerido/helloEko

Contact info:
Email: ulmerido@gmail.com
