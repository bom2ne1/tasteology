import os
import shutil
from PIL import Image

def crop_image(input_path, output_path, crop_params):
    image = Image.open(input_path)

    width, height = image.size

    left = crop_params['left']
    top = crop_params['top']
    right = width - crop_params['right']
    bottom = height - crop_params['bottom']

    cropped_image = image.crop((left, top, right, bottom))

    cropped_image.save(output_path)

def get_crop_params(filename):
    crop_params = {'left': 1, 'top': 1, 'right': 1, 'bottom': 0}
    
    if '@2x' in filename:
        crop_params = {'left': 1, 'top': 2, 'right': 0, 'bottom': 0}
    elif '@3x' in filename:
        crop_params = {'left': 2, 'top': 3, 'right': 0, 'bottom': 0}
    else:
        crop_params = {'left': 1, 'top': 1, 'right': 1, 'bottom': 0}
    
    return crop_params

def make_backup(input_path):
    backup_path = f"{input_path}.bak"
    shutil.copy2(input_path, backup_path)
    return backup_path

def batch_crop_images(input_dir):
    for filename in os.listdir(input_dir):
        if filename.startswith(("Tight")):
            crop_params = get_crop_params(filename)
            input_path = os.path.join(input_dir, filename)
            backup_path = make_backup(input_path)
            output_path = input_path
            crop_image(input_path, output_path, crop_params)

image_directory = "../src/assets/img"
batch_crop_images(image_directory)
