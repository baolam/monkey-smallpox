import imp
from flask import Flask
from . import Base

class Graph(Base):
  def __init__(self, app : Flask, preffix: str):
    super().__init__(preffix + "graph")