#Hi Developer...!!!!

Since my website is over HTTPS; https://react-landing-webpage.netlify.app/
and API is non-HTTPS; http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10

Chrome is showing mixed content error, Means my page dosen't make all HTTPS request.
Usually the solution is to transfer all resources to HTTPS and migrate all API's to HTTPS.

However, you can Allow insecure content by Setting > Privacy and security > Site settings > Additional content settings > Customized behaviors > Add ("https://react-landing-webpage.netlify.app/") > Allow

And after that, this card of my webpage will load on your Chrome browser only and other users visiting the site still get the same Mixed Content Error.

Regards,
Ruhul Amin
