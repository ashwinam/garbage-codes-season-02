
from django.core.exceptions import ValidationError


def validate_file_size(file):
    max_size_kb = 100

    if file.size > max_size_kb * 1024: # size return in byte size
        raise ValidationError(f"File size need to be smaller than {max_size_kb}KB!")
