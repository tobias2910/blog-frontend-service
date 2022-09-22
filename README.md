# Blog Frontend Service

[![Testing](https://github.com/tobias2910/blog-frontend-service/actions/workflows/conduct_tests.yml/badge.svg?branch=main)](https://github.com/tobias2910/blog-frontend-service/actions/workflows/conduct_tests.yml)
[![codecov](https://codecov.io/github/tobias2910/blog-frontend-service/branch/main/graph/badge.svg?token=VZ4M5MOR1Y)](https://codecov.io/github/tobias2910/blog-frontend-service)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tobias2910_blog-frontend-service&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=tobias2910_blog-frontend-service)

---

This is the frontend service for my personal blog.

## Getting Started

To start the service locally, you need to have `pnpm`as a package manage installed. For that, you need to run the collowing command:

```bash
// on POSIX systems
curl -fsSL https://get.pnpm.io/install.sh | sh -

// on Windows
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

After that you can run the following command to install all the dependencies

```bash
pnpm install
```

To start the development environment of Next.js, run the following command:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.
