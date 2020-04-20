print "Importing modules..."
import os
import requests
import urllib
import urlparse
print "Creating directory..."
os.mkdir("Abstruct")
os.chdir("Abstruct")
print "Loading categories..."
a = requests.get("http://api.abstruct.co/api/packs").json()["data"]
print str(len(a)) + " categories found."
for b in a:
	print "Creating " + b["name"] + " directory..."
	os.mkdir(b["name"])
	os.chdir(b["name"])
	print "Loading amount of pages..."
	c = requests.get("http://api.abstruct.co/api/packs/" + str(b["id"]) + "/wallpapers").json()["last_page"]
	print str(c) + " pages found."
	for d in xrange(c):
		print "Loading page " + str(d + 1) + "..."
		e = requests.get("http://api.abstruct.co/api/packs/" + str(b["id"]) + "/wallpapers?page=" + str(d + 1)).json()["data"]
		print str(len(e)) + " images found."
		for f in xrange(len(e)):
			print "Downloading " + e[f]["name"] + "..."
			urllib.urlretrieve(e[f]["url_res5"] or e[f]["url_res4"] or e[f]["url_res3"] or e[f]["url_res2"] or e[f]["url_res1"], e[f]["name"] + os.path.splitext(urlparse.urlparse(e[f]["url_res5"] or e[f]["url_res4"] or e[f]["url_res3"] or e[f]["url_res2"] or e[f]["url_res1"]).path)[1])
	print "Leaving directory..."
	os.chdir("..")
print "Finished downloading."
