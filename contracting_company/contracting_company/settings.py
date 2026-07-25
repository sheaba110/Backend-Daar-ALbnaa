import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent


# =====================================================
# SECURITY
# =====================================================

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")

DEBUG = os.getenv("DEBUG", "True") == "True"

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "*",
]


# =====================================================
# APPLICATIONS
# =====================================================

INSTALLED_APPS = [
    # Django
    "django.contrib.sites",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Inertia
    "inertia",

    # Django REST Framework
    "rest_framework",
    # Local apps
    "core",

    # CORS
    "corsheaders",
]


# =====================================================
# MIDDLEWARE
# =====================================================

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",

    "django.contrib.sessions.middleware.SessionMiddleware",

    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.common.CommonMiddleware",

    "django.middleware.csrf.CsrfViewMiddleware",

    "django.contrib.auth.middleware.AuthenticationMiddleware",

    "django.contrib.messages.middleware.MessageMiddleware",

    "inertia.middleware.InertiaMiddleware",

    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


# =====================================================
# URLS
# =====================================================

ROOT_URLCONF = "contracting_company.urls"


# =====================================================
# TEMPLATES
# =====================================================

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",

        "DIRS": [
            BASE_DIR / "templates",
        ],

        "APP_DIRS": True,

        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",

                "django.contrib.auth.context_processors.auth",

                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


WSGI_APPLICATION = "contracting_company.wsgi.application"


# =====================================================
# DATABASE
# =====================================================

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


# =====================================================
# AUTHENTICATION
# =====================================================

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
]


# =====================================================
# DJANGO ALLAUTH
# =====================================================

# SITE_ID = 1


# # Login using email or username
# ACCOUNT_LOGIN_METHODS = {
#     "email",
#     "username",
# }


# # Signup fields
# ACCOUNT_SIGNUP_FIELDS = [
#     "email*",
#     "username*",
#     "password1*",
#     "password2*",
# ]


# ACCOUNT_EMAIL_VERIFICATION = "mandatory"

# ACCOUNT_CONFIRM_EMAIL_ON_GET = True

# ACCOUNT_UNIQUE_EMAIL = True


# =====================================================
# DJANGO REST AUTH
# =====================================================

# REST_AUTH = {
#     "USE_JWT": True,

#     "JWT_AUTH_COOKIE": "auth-token",

#     "JWT_AUTH_REFRESH_COOKIE": "refresh-token",

#     "REGISTER_SERIALIZER":
#         "dj_rest_auth.registration.serializers.RegisterSerializer",
# }


# =====================================================
# DJANGO REST FRAMEWORK
# =====================================================

REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": [
        "rest_framework.renderers.JSONRenderer",

        "rest_framework.renderers.BrowsableAPIRenderer",
    ],
}


# =====================================================
# INTERNATIONALIZATION
# =====================================================

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# =====================================================
# STATIC FILES
# =====================================================

STATIC_URL = "static/"

STATIC_DIRS = [
    BASE_DIR / "core/static",
]


# =====================================================
# MEDIA FILES
# =====================================================

MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"


# =====================================================
# CORS
# =====================================================

CORS_ALLOW_ALL_ORIGINS = True


# =====================================================
# DEFAULT PRIMARY KEY
# =====================================================

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


# =====================================================
# INERTIA
# =====================================================

INERTIA_LAYOUT = "base.html"
