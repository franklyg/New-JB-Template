JUMBLEBERRY TEMPLATE STANDARD
-----------------------------

###JB UI Library:

####Include and initialize library

- the JB UI library is located in /assets/jblib/
- this folder includes css styles, javascript functions, and commmon UI image elements

- Include the required files at the top of each page:
 
```html
    <link href="assets/jblib/styles.css" rel="stylesheet" type="text/css">
    <script src="assets/jblib/ui.js"></script>
```
- We use an error message pop-up called Toastr. You can include it by adding the following:

```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">
```


####Features
 
   ```
       Coming soon.
   ```
    
#### HTML, CSS, and JS STANDARDS

#### HTML
    General
      - update all footer and head naming
    index.html
      - leave form, and class="cta" templating
      - sections templating will need updating depending on design
      - fill in any alt tags with instances of [PRODUCT NAME] or [COUNTRY]
    checkout.html
      - fill in any alt tags with instances of [PRODUCT NAME] or [COUNTRY]
      - product naming can be update in main.js(explained in JS)
      - do not change template structure
