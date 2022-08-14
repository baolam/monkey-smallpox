from models import initalize_model
from keras.utils import plot_model

model = initalize_model((4, ), (2262, ))
plot_model(model, show_shapes = True, to_file = "tempoary.png")