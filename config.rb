# Require any additional compass plugins here.
# require "rgbapng"

#Folder settings
http_path = '/'
relative_assets = true      #because we're not working from the root
css_dir = "assets/css"          #where the CSS will saved
sass_dir = "assets/sass"           #where our .scss files are
images_dir = "images"    #the folder with your images
fonts_dir = "assets/fonts" 

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded # After dev :compressed
output_style = :compressed # After dev :compressed

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Obviously
preferred_syntax = :scss
sourcemap = true