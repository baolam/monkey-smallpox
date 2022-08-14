from keras.models import Model
from keras.layers import Dense
from keras.layers import Input
from keras.layers import Concatenate
from keras.callbacks import ModelCheckpoint
from sklearn.model_selection import train_test_split

def initalize_model(symptom_shape, face_shape):
  x1 = Input(symptom_shape, name = "symptom")
  x2 = Input(face_shape, name = "face")

  embeded_x1 = Dense(150, activation = "relu")(x1)
  x = Concatenate()([embeded_x1, x2])

  out = Dense(64, activation = "relu", name = "classify_layer1")(x)
  out = Dense(64, activation = "sigmoid", name = "classify_layer2")(out)

  model = Model(inputs=[x1, x2], outputs=[out])
  return model

def training(model : Model, x, y, epochs : int = 25):
  best = ModelCheckpoint("models/best.h5")

  model.compile(optimizer = "adam", loss = "binary_crossentropy", metrics=["acc"])

  # Lấy 20% dữ liệu đầu vào để kiểm chứng
  x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.2)

  res = model.fit(x_train, y_train, epochs = epochs, callbacks=[best], validation_data=(x_test, y_test))
  performance = model.evaluate(x_test, y_test)

  print ("Đánh giá mô hình, loss = {}. acc = {}".format(performance[0], performance[1]))
  return res