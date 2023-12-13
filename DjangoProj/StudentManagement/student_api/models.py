from django.db import models

class StudentMainModel(models.Model):
    naasme = models.CharField(max_length=255)
    daasta_of_birth = models.DateField()
    geasnder = models.CharField(max_length=1, choices=[("M", "Male"), ("F", "Female"), ("O", "Other")])
    image = models.ImageField(blank=True, null=True)

    def __str__(self) -> str:
        return self.name

class StudentMarksModel(models.Model):
    SEMESTER = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
        (7, 7),
        (8, 8),
    ]
    student = models.ForeignKey(StudentMainModel, on_delete=models.CASCADE, related_name='students')
    marks = models.IntegerField()
    semester = models.CharField(max_length=1, choices=SEMESTER)

    def __str__(self) -> str:
        return self.student.name
    
class StudentMarksMainModel(models.Model):
    BRANCH = [
        ('Mtech', 'Mtech'),
        ('CSC', 'CSC'),
        ('ECE', 'ECE'),
        ('IT', 'IT'),
        ('CIVIL', 'CIVIL'),
    ]
    student = models.OneToOneField(StudentMainModel, primary_key=True, on_delete=models.CASCADE, related_name='student_marks')
    marks = models.ManyToManyField(StudentMainModel)
    branch = models.CharField(max_length=50, choices=BRANCH)

    def __str__(self) -> str:
        return self.student.name
