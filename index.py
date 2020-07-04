
from flask import Flask, render_template
from social import Socials
#================

Socials = Socials()

app = Flask(__name__)
app.debug ='true'

@app.route('/')
def home():
    return render_template("index.html")
    
@app.route('/about')
def about():
    return render_template("about.html")
    
@app.route('/contact')
def contact():
  return render_template('contact.html', socials = Socials)



if (__name__=="__main__"):

  app.run()
  
  
