# Disaster Response Coordination Platform

Connects shelters, volunteers, supply donations, and affected individuals in real time during emergencies — matching needs to available resources, coordinating volunteer logistics, situational-awareness dashboards for responders, offline-resilient under unreliable network.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (PostGIS mock)
- **Frontend:** React 18 + Vite + Leaflet (shelter map) + Chart.js
- **15 Apps:** shelters, volunteers, supplies, affected, coordination, logistics, situational_awareness, offline, api, frontend, analytics, integrations, compliance, notifications, reports

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t disaster-response .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A disaster worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Shelters:** capacity, location, occupancy, resources `water, food, beds`
- **Matching:** needs `water for 10` → available `donation 50` → allocate
- **Logistics:** volunteer `skills: driving` + `availability` → `transport` route
- **Situational awareness:** dashboard `shelters 12, volunteers 50, needs 20, gap 5`, map, real-time
- **Offline:** queue when offline, sync when online, resilient under unreliable network

## License
Proprietary
