# Daar Al-Benaa Egypt

A professional contracting company platform built with a Django REST backend and a Next.js frontend.
This repository is organized for clear separation of responsibilities, secure local development, and scalable deployment.

## Overview

- Backend: Django 6, Django REST Framework, inertia-django, django-cors-headers.
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS.
- Purpose: service delivery, customer consultation, authenticated access, and content-driven marketing.

## Repository structure

- `contracting_company/` — Django project settings, URLs, WSGI/ASGI entrypoints.
- `core/` — backend application with business models, serializers, views, forms, and admin configuration.
- `frontend/` — Next.js application with routes, UI components, and client-side API integration.
- `requirements.txt` — Python dependencies for the backend.
- `.gitignore` — ignore rules for generated files, environment files, and frontend artifacts.

## Setup

1. Create and activate a Python virtual environment.

   ```bash
   python -m venv .venv
   .\.venv\Scripts\activate
   ```

2. Install backend dependencies.

   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file at the repository root.

   ```env
   DJANGO_SECRET_KEY=your-secret-key
   DEBUG=True
   ```

4. Run migrations.

   ```bash
   python contracting_company/manage.py migrate
   ```

5. Start the backend server.

   ```bash
   python contracting_company/manage.py runserver
   ```

6. Install frontend dependencies.

   ```bash
   cd frontend
   npm install
   ```

7. Start the frontend.

   ```bash
   npm run dev
   ```

## Local development URLs

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://127.0.0.1:3000`

## Notes

- `frontend/.next/`, `frontend/node_modules/`, and `frontend/package-lock.json` are ignored.
- Secret and environment-specific files should never be committed.
- Keep backend and frontend dependencies separated for deployment flexibility.

## Recommended workflow

- Use `.env` for local configuration.
- Commit source files only; exclude generated build artifacts.
- Run database migrations after modifying models.
- Review `contracting_company/contracting_company/settings.py` for environment-specific security settings.
