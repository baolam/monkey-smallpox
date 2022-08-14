from typing import Tuple
from flask import Flask
from flask import request
from flask import Response
from deepface import DeepFace
from deepface.commons import distance
from . import Base

import math
import os
import pickle
import time

class Citizen(Base):
  STORAGE = "citizens"
  TEMP = "tempoary"
  METRIC = ""
  MODEL = "VGG-Face"

  def __init__(self, app : Flask, preffix : str):
    super(Citizen).__init__(preffix + "citizen")
    
    @app.route(self.__call__("/"), methods=["GET"])
    def index():
      if request.method == "GET":
        represent = request.files["represent"]

        name = "{}/{}.pk".format(Citizen.TEMP, time.time())
        represent.save(name)
        
        with open(name, "rb") as fin:
          represent = pickle.load(fin)
        gtln, citizen = self.compare(represent)
        os.remove(name)
        
        return Response({
          "gtln" : gtln,
          "citizen" : citizen
        }, status = 200)

      return Response("Method not allowed", status = 200)
    
    @app.route(self.__call__("/add"), methods=["POST"])
    def index():
      if request.method == "POST":
        img = request.files["image"]
        citizen = request.json["citizen"]

        save = os.path.join(Citizen.STORAGE, citizen)
        if os.path.exists(save) == False:
          os.makedirs(save)
        
        name = "{}.jpg".format(time.time())
        img.save(name)

      return Response("Method not allowed", status = 200)
  
  def compare(self, represent) -> Tuple[float, str]:
    gtln = - math.inf
    _citizen = ""

    for citizen in os.listdir(Citizen.STORAGE):
      temp = os.path.join(Citizen.STORAGE, citizen)
      for file in os.listdir(temp):
        pth = os.path.join(temp, file)
        db_represent = DeepFace.represent(pth, Citizen.MODEL)

        vl = distance.findCosineDistance(db_represent, represent)
        if gtln < vl:
          gtln = vl
          _citizen = citizen
    
    return gtln, _citizen