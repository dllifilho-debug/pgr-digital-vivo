create table empresas (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  cnpj text,
  created_at timestamptz default now()
);

create table obras (
  id uuid primary key default gen_random_uuid(),
  empresa_id uuid references empresas(id) on delete cascade,
  nome text not null,
  status text default 'ativa',
  created_at timestamptz default now()
);

create table areas (
  id uuid primary key default gen_random_uuid(),
  obra_id uuid references obras(id) on delete cascade,
  nome text not null,
  qr_token text unique not null,
  descricao text,
  created_at timestamptz default now()
);

create table riscos (
  id uuid primary key default gen_random_uuid(),
  area_id uuid references areas(id) on delete cascade,
  titulo text not null,
  categoria text not null,
  severidade int,
  probabilidade int,
  fonte text,
  status text default 'aberto',
  foto_url text,
  ia_payload jsonb,
  created_at timestamptz default now()
);

create table acoes (
  id uuid primary key default gen_random_uuid(),
  risco_id uuid references riscos(id) on delete cascade,
  titulo text not null,
  responsavel_id uuid,
  prazo date,
  status text default 'todo',
  pontos int default 0,
  created_at timestamptz default now()
);

-- Insert padrão para facilitar os testes
INSERT INTO empresas (nome) VALUES ('Seconci-GO');