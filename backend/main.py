import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from dotenv import load_dotenv

# Carrega as chaves do arquivo .env
load_dotenv()

app = FastAPI(title="PGR Digital Vivo API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conecta ao Supabase
URL = os.getenv("SUPABASE_URL")
KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(URL, KEY)

@app.get("/")
def read_root():
    return {"status": "PGR Digital Vivo - API Online"}

@app.get("/empresas")
def listar_empresas():
    # Faz uma consulta real no nosso banco de dados do Supabase
    resposta = supabase.table("empresas").select("*").execute()
    return {"empresas": resposta.data}
@app.get("/areas")
def listar_areas():
    # Busca as áreas criadas no banco
    resposta = supabase.table("areas").select("*").execute()
    return {"areas": resposta.data}
