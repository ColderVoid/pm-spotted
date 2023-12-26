#
#This file installs required dependencies for the main app.
#All required modules should be added to 'required' array.
#

import os
required = ["django", "djangorestframework", "django-resized"]

if (os.name == "NT"): #Windows, not tested yet
    for package in required:
        os.system(f"pip install {package}")
else: #Linux
    for package in required:
        os.system(f"python3 -m pip install {package} --break-system-packages")