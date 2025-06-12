build:
	docker build -t disaster-response .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
