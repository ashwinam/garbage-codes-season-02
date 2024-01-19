appname ?= ''

runserver:
	poetry run python manage.py runserver

makemigrations:
	poetry run python manage.py makemigrations

migrate:
	poetry run python manage.py migrate

superuser:
	poetry run python manage.py createsuperuser

createapp:
	poetry run python manage.py startapp $(appname)