from flask import Flask
import socketio
import threading

srv = socketio.AsyncServer()
app = Flask(__name__)

srv.attach(app)

# Thuật toán phát triển dựa trên nền socket.io
@srv.event(namespace = "/app")
def form(my_form):
  pass