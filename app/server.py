from http.server import HTTPServer,SimpleHTTPRequestHandler
#from http.server import SimpleHTTPRequestHandler

addr = ("0.0.0.0", 8002)

serv = HTTPServer(addr, SimpleHTTPRequestHandler)

serv.serve_forever()