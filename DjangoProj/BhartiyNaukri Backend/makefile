appname ?= ''

runserver:
	poetry run python manage.py runserver

makemigrations:
	poetry run python manage.py makemigrations

migrate:
	poetry run python manage.py migrate

superuser:
	poetry run python manage.py createsuperuser

shell:
	poetry run python manage.py shell

createapp:
	poetry run python manage.py startapp $(appname)