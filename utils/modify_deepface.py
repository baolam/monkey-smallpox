from deepface.DeepFace import functions
from deepface.DeepFace import build_model
from keras.preprocessing import image

import numpy as np
import cv2

model = build_model("VGG-Face")

def preprocess_face(img : np.ndarray, target_size=(224, 224), grayscale = False, enforce_detection = True, 
  detector_backend = 'opencv', return_region = False, align = True):
  base_img = img.copy()

  img, region = functions.detect_face(img, detector_backend, grayscale, 
    enforce_detection, align)
  
  if img.shape[0] == 0 or img.shape[1] == 0:
    if enforce_detection:
      raise ValueError("Detected face shape is ", img.shape,". Consider to set enforce_detection argument to False.")
    else:
      img = base_img.copy()

  if grayscale:
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  
  if img.shape[0] > 0 and img.shape[1] > 0:
    factor_0 = target_size[0] / img.shape[0]
    factor_1 = target_size[1] / img.shape[1]
    factor = min(factor_0, factor_1)

    dsize = (int(img.shape[1] * factor), int(img.shape[0] * factor))
    img = cv2.resize(img, dsize)

    # Then pad the other side to the target size by adding black pixels
    diff_0 = target_size[0] - img.shape[0]
    diff_1 = target_size[1] - img.shape[1]
    if grayscale == False:
      # Put the base image in the middle of the padded image
      img = np.pad(img, ((diff_0 // 2, diff_0 - diff_0 // 2), (diff_1 // 2, diff_1 - diff_1 // 2), (0, 0)), 'constant')
    else:
      img = np.pad(img, ((diff_0 // 2, diff_0 - diff_0 // 2), (diff_1 // 2, diff_1 - diff_1 // 2)), 'constant')

	#------------------------------------------

	#double check: if target image is not still the same size with target.
  if img.shape[0:2] != target_size:
    img = cv2.resize(img, target_size)

	#---------------------------------------------------

	#normalizing the image pixels

  img_pixels = image.img_to_array(img) #what this line doing? must?
  img_pixels = np.expand_dims(img_pixels, axis = 0)
  img_pixels /= 255 #normalize input in [0, 1]

	#---------------------------------------------------

  if return_region == True:
    return img_pixels, region
  else:
    return img_pixels

def detect_face(img : np.ndarray, target_size=(224, 224), grayscale = False, enforce_detection = True, 
  detector_backend = 'opencv', return_region = False, align = True):
  img = preprocess_face(img, target_size, grayscale, enforce_detection, detector_backend, return_region, align)
  return img[:, :, ::-1]

def represent(img : np.ndarray, enforce_detection = True, detector_backend = 'opencv', align = True, normalization = 'base'):
  input_shape_x, input_shape_y = functions.find_input_shape(model)

  img = preprocess_face(img
		, target_size=(input_shape_y, input_shape_x)
		, enforce_detection = enforce_detection
		, detector_backend = detector_backend
		, align = align)

  img = functions.normalize_input(img = img, normalization = normalization)  
  embedding = model.predict(img)[0].tolist()

  return embedding