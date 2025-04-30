## 🧠 Sobre el Proyecto

HiveBox es un proyecto end-to-end basado en DevOps que simula un entorno de producción real. Implementa todo el ciclo de vida del desarrollo de software (SDLC), incluyendo infraestructura como código, integración y entrega continua, contenedores, monitoreo, seguridad y más.

Este repositorio contiene **mi implementación personalizada** del proyecto, siguiendo las buenas prácticas y herramientas del ecosistema DevOps moderno.
## 🎯 Objetivos

- Simular un flujo DevOps completo, desde el desarrollo hasta producción.
- Automatizar infraestructura en AWS usando Terraform y Ansible.
- Contenerizar y desplegar servicios con Docker y Kubernetes.
- Implementar CI/CD con GitHub Actions.
- Habilitar observabilidad con Prometheus y Grafana.
- Asegurar y auditar el entorno con herramientas de seguridad.
- 
## 📁 Estructura del Repositorio

. ├── app/ # Código fuente de la app ├── docker/ # Dockerfiles, docker-compose ├── k8s/ # Manifests de Kubernetes y Helm Charts ├── terraform/ # Infraestructura como código en AWS ├── ansible/ # Roles y playbooks de Ansible ├── .github/workflows/ # Workflows CI/CD (GitHub Actions) ├── monitoring/ # Dashboards y config de Prometheus/Grafana ├── docs/ # Documentación del proyecto └── README.md

## 🚀 Cómo Ejecutar Localmente

1. Clona este repositorio:

```bash
git clone https://github.com/tuusuario/devops-hands-on-project-hivebox.git
cd devops-hands-on-project-hivebox

docker-compose up -d --build


---

### 5. 📦 **Tecnologías Usadas**
```markdown
## ⚙️ Stack Tecnológico

- Terraform + Ansible (IaC)
- AWS (EC2, S3, VPC, etc.)
- Docker + Docker Compose
- Kubernetes (local y/o EKS)
- GitHub Actions (CI/CD)
- Prometheus + Grafana (Monitoreo)
- Python/Node.js (App base)
- openSenseMap API (datos IoT)

## 🧭 Arquitectura

![Arquitectura HiveBox](./docs/arquitectura-hivebox.png)

## 📅 Estado del Proyecto

- [x] Fase 0 - Planificación
- [x] Fase 1 - Dev environment (Docker + app base)
- [ ] Fase 2 - Testing
- [ ] Fase 3 - CI/CD
- [ ] Fase 4 - Terraform infra AWS
- [ ] ...

@tbcstudio