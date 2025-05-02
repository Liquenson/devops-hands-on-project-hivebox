# 🐝 HiveBox - Proyecto DevOps End-to-End

HiveBox es un proyecto de simulación DevOps end-to-end que emula un entorno de producción moderno. Implementa todo el ciclo de vida del desarrollo de software (SDLC), desde la creación de infraestructura hasta el monitoreo y la seguridad, utilizando herramientas y buenas prácticas actuales.

Este repositorio contiene **mi implementación personalizada**, optimizada para AWS y alineada con los estándares del ecosistema DevOps moderno.

---

## 📚 Tabla de Contenidos

- [🐝 HiveBox - Proyecto DevOps End-to-End](#-hivebox---proyecto-devops-end-to-end)
  - [📚 Tabla de Contenidos](#-tabla-de-contenidos)
  - [🎯 Objetivos](#-objetivos)
  - [⚙️ Stack Tecnológico](#️-stack-tecnológico)
  - [🧭 Arquitectura](#-arquitectura)
  - [📁 Estructura del Repositorio](#-estructura-del-repositorio)
  - [🚀 Cómo Ejecutar Localmente](#-cómo-ejecutar-localmente)
    - [✅ Prerrequisitos](#-prerrequisitos)
    - [🔧 Pasos](#-pasos)
- [Clona el repositorio](#clona-el-repositorio)
- [(Opcional) Crea y configura un archivo .env si se requiere](#opcional-crea-y-configura-un-archivo-env-si-se-requiere)
- [Construye y levanta los contenedores](#construye-y-levanta-los-contenedores)
- [Verifica que los servicios estén activos](#verifica-que-los-servicios-estén-activos)

---

## 🎯 Objetivos

- Simular un flujo DevOps completo, desde desarrollo hasta producción.
- Automatizar infraestructura en AWS con Terraform y Ansible.
- Contenerizar servicios con Docker y desplegarlos en Kubernetes.
- Implementar pipelines CI/CD utilizando GitHub Actions.
- Aplicar monitoreo y observabilidad con Prometheus y Grafana.
- Integrar prácticas de seguridad y auditoría en el entorno DevOps.

---

## ⚙️ Stack Tecnológico

- **Infraestructura como Código:** Terraform + Ansible  
- **Cloud Provider:** AWS (EC2, S3, VPC, IAM, etc.)  
- **Contenedores:** Docker + Docker Compose  
- **Orquestación:** Kubernetes (local y/o EKS)  
- **CI/CD:** GitHub Actions  
- **Monitoreo:** Prometheus + Grafana  
- **Lenguajes base:** Python / Node.js  
- **API de datos:** openSenseMap (IoT)  

---

## 🧭 Arquitectura

![Arquitectura HiveBox](./docs/arquitectura-hivebox.png)

---

## 📁 Estructura del Repositorio

.
├── app/ # Código fuente de la aplicación base (Node.js o Python)
├── docker/ # Dockerfiles y configuración Docker Compose
├── k8s/ # Manifests de Kubernetes y Helm Charts
├── terraform/ # Definición de infraestructura en AWS
├── ansible/ # Playbooks y roles de Ansible
├── .github/workflows/ # Workflows de CI/CD con GitHub Actions
├── monitoring/ # Dashboards y configuración Prometheus/Grafana
├── docs/ # Documentación técnica y visual
└── README.md # Este archivo


---

## 🚀 Cómo Ejecutar Localmente

### ✅ Prerrequisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

### 🔧 Pasos

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/devops-hands-on-project-hivebox.git
cd devops-hands-on-project-hivebox

# (Opcional) Crea y configura un archivo .env si se requiere
cp .env.example .env

# Construye y levanta los contenedores
docker-compose up -d --build

# Verifica que los servicios estén activos
docker ps

Accede a la aplicación en: http://localhost:3000
(El puerto puede variar según la app base)

| Fase                           | Estado        |
| ------------------------------ | ------------- |
| Fase 0 - Planificación         | ✅ Completado  |
| Fase 1 - Entorno Dev           | ✅ Completado  |
| Fase 2 - Testing               | ⏳ En progreso |
| Fase 3 - CI/CD                 | ⏳ Pendiente   |
| Fase 4 - Terraform (AWS)       | ⏳ Pendiente   |
| Fase 5 - Kubernetes (EKS)      | ⏳ Pendiente   |
| Fase 6 - Monitoreo             | ⏳ Pendiente   |
| Fase 7 - Seguridad & Auditoría | ⏳ Pendiente   |

🛠️ Contribuciones
¡Contribuciones son bienvenidas! Para colaborar:

Haz un fork del repositorio

Crea una nueva rama:

git checkout -b feature/nueva-funcionalidad

git commit -m "Agrega nueva funcionalidad"

git push origin feature/nueva-funcionalidad

Abre un Pull Request

📄 Licencia
Este proyecto está licenciado bajo la MIT License. Consulta el archivo LICENSE para más detalles.

📬 Contacto
Desarrollado por: Ruben Alexis
📧 rubenalexisdevops@gmail.com

