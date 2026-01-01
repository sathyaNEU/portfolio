export interface ContactInfo {
  phone: string
  email: string
  linkedin: string
  github: string
}

export interface Certification {
  title: string
  issuer: string
  credentialId?: string
  verificationUrl: string
}

export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export interface Project {
  title: string
  description: string
  githubUrl: string
  imageUrl: string
  imageAlt: string
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
}

export interface PortfolioData {
  name: string
  title: string
  summary: string
  contact: ContactInfo
  certifications: Certification[]
  experience: Experience[]
  projects: Project[]
  education: Education[]
}

export const portfolioData: PortfolioData = {
  name: "Sathyavarthan Balachandar",
  title: "Data Engineer",
  summary:
    "Data Engineer with 3+ years of experience building automated data systems that help companies make better business decisions. I specialize in creating reliable data pipelines, organizing large datasets, and building dashboards that track important business metrics.",
  contact: {
    phone: "+18573796719",
    email: "pers.sathya@gmail.com",
    linkedin: "https://www.linkedin.com/in/sathy30/",
    github: "https://github.com/sathyaNEU",
  },
  certifications: [
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      credentialId: "8bc05af30e1cf6a7",
      verificationUrl:
        "https://learn.microsoft.com/api/credentials/share/en-us/SathyavarthanBalachandar-3933/9EDD2C6709AA1793?sharingId=775E0609AA608504",
    },
    {
      title: "Salesforce Certified: Agentforce Specialist",
      issuer: "Salesforce",
      verificationUrl: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=K3bZaZSOlcTD05H9OjBtoCmJ+d0z2TyCsDo9nFAZAeiq2OzOIHK9wSzZkLP66QPu",
    },
  ],
  experience: [
    {
      title: "Data Engineer",
      company: "Fidelity Investments",
      location: "Boston, MA",
      startDate: "May 2025",
      endDate: "Present",
      responsibilities: [
        "Built automated systems that process large financial datasets, making data available for business analysis faster and more reliably",
        "Created dashboards using Tableau, Power BI, and Looker that track key business metrics, helping teams make data-driven decisions 20% faster",
        "Designed organized data storage systems that make it easier to find and analyze financial information across the company",
        "Implemented quality checks that catch data errors automatically, reducing manual fixes by 30%",
      ],
    },
    {
      title: "Data Engineer Intern",
      company: "Castor Health Institute",
      location: "",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      responsibilities: [
        "Built automated workflows that move healthcare data from various sources into organized storage, reducing processing time by 55%",
        "Created real-time compliance dashboards that help healthcare teams monitor regulatory requirements and identify risks early",
        "Improved data organization systems, making queries run 60% faster for analysts tracking 20+ health metrics",
        "Implemented AI-powered tools that automatically detect data anomalies, reducing manual investigation work by 65%",
      ],
    },
    {
      title: "Data Analyst",
      company: "Capgemini",
      location: "Chennai, India",
      startDate: "Jun 2021",
      endDate: "Jul 2023",
      responsibilities: [
        "Analyzed large healthcare datasets to identify trends in patient outcomes and care efficiency, supporting AI research initiatives",
        "Built 15+ interactive Power BI dashboards that translated complex healthcare data into clear visual insights for stakeholders",
        "Processed and organized large datasets to enable scalable analytics for digital health transformation projects",
        "Created standardized business metrics that helped track healthcare performance and transformation readiness",
      ],
    },
  ],
  projects: [
    {
      title: "FRED Economic Data Pipeline",
      description:
        "Real-time financial analytics platform that processes Federal Reserve Economic Data. Features automated data processing, treasury spread analytics, and interactive dashboards for economic forecasting.",
      githubUrl: "https://github.com/sathyaNEU/fred-t102y-snowflake-incremental-elt",
      imageUrl:
        "./images/fred-20economic-20data-20pipeline-20-20comprehensive-20real-time-20financial-20analytics-20platform.png",
      imageAlt: "FRED Economic Data Pipeline Architecture",
      technologies: ["Python", "Snowflake", "AWS Lambda", "GCP Storage", "Streamlit", "Plotly"],
    },
    {
      title: "SEC Financial Data Pipeline",
      description:
        "Automated system that extracts financial data from SEC reports and transforms it into organized, queryable format. Built with modern cloud technologies including Snowflake, dbt, Apache Airflow, and AWS.",
      githubUrl: "https://github.com/bigdata-org/sec-financial-data-pipeline",
      imageUrl: "./images/sec-20financial-20data-20pipeline.png",
      imageAlt: "SEC Financial Data Pipeline Architecture",
      technologies: ["Python", "Apache Airflow", "dbt", "Snowflake", "AWS", "FastAPI", "Streamlit"],
    },
    {
      title: "NVIDIA Earnings Intelligence Platform",
      description:
        "AI-powered system that processes and analyzes NVIDIA quarterly financial reports. Uses advanced document processing and vector storage to enable intelligent search across multiple quarters of financial data.",
      githubUrl: "https://github.com/bigdata-org/nvidia-financial-multimodal-rag-pipeline",
      imageUrl: "./images/nvidia-20earning-20intelligence-20platform.jpg",
      imageAlt: "NVIDIA Earnings Intelligence Platform Architecture",
      technologies: [
        "Azure Databricks",
        "Apache Airflow",
        "Selenium",
        "Pinecone",
        "ChromaDB",
        "Redis",
        "FastAPI",
        "Docker",
      ],
    }
  ],
  education: [
    {
      degree: "Master of Science in Data Architecture & Management",
      institution: "Northeastern University",
      location: "Boston",
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Anna University",
      location: "Chennai",
    },
  ],
}
