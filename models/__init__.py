from keras.models import Model
from keras.layers import Dense
from keras.layers import Input
from keras.layers import Concatenate

def initalize_model(symptom_shape, face_shape):
  x1 = Input(symptom_shape, name = "symptom")
  x2 = Input(face_shape, name = "face")

  embeded_x1 = Dense(150, activation = "relu")(x1)
  x = Concatenate()([embeded_x1, x2])

  out = Dense(64, activation = "relu", name = "classify_layer1")(x)
  out = Dense(64, activation = "sigmoid", name = "classify_layer2")(out)

  model = Model(inputs=[x1, x2], outputs=[out])
  return model