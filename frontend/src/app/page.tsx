export default async function Home() {
  // Busca as empresas e as áreas da nossa API Python
  const resEmpresas = await fetch('http://127.0.0.1:8000/empresas', { cache: 'no-store' });
  const dataEmpresas = await resEmpresas.json();
  const empresas = dataEmpresas.empresas || [];

  const resAreas = await fetch('http://127.0.0.1:8000/areas', { cache: 'no-store' });
  const dataAreas = await resAreas.json();
  const areas = dataAreas.areas || [];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0056b3' }}>Dashboard - PGR Digital Vivo</h1>
      <p>Gestão de riscos e Higiene Ocupacional em tempo real.</p>
      
      <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h2>Frentes de Trabalho (Áreas)</h2>
        {areas.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {areas.map((area: any) => (
              <div key={area.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{area.nome}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>{area.descricao}</p>
                
                {/* Gera o QR Code dinamicamente baseado no token da área */}
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${area.qr_token}`} 
                  alt={`QR Code ${area.nome}`}
                  style={{ marginTop: '1rem', border: '5px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                />
                <br/>
                <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#0056b3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                  Fazer Check-in (Simular)
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhuma área cadastrada.</p>
        )}
      </div>
    </main>
  );
}
