from abc import ABC

class Base(ABC):
  def __init__(self, preffix : str):
    super(Base, self).__init__()
    self.preffix = preffix

  def __call__(self, suff : str):
    return '/{}/{}'.format(self.preffix, suff)

from .citizen import Citizen
from .graph import Graph