from .utils.modify_deepface import represent

import cv2
import socketio
import threading
import requests
import time
import pickle
import os

video = cv2.VideoCapture(0)
cli = socketio.Client()
NAMESPACE = ""
SERVER = ""

def initalize_socket():
  cli.connect(SERVER, namespaces=[NAMESPACE])

threading.Thread(name="initalize_socket", target=initalize_socket).start()

while True:
  __, frame = video.read()

  try:
    rsp = represent(frame)
    name = "{}.pk".format(time.time())
    
    with open(name, "wb") as fout:
      pickle.dump(rsp)
    
    with open(name, "rb") as fin:  
      rsp = requests.get(SERVER + "/api/citizen", files={
        "represent" : fin.read() 
      })

    print (rsp)
    os.remove(name)

  except Exception:
    pass