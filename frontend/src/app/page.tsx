export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dashboard - PGR Digital Vivo</h1>
      <p>Gestão de riscos e Higiene Ocupacional em tempo real.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Métricas da Obra</h2>
        <ul>
          <li>Riscos Ativos: 0</li>
          <li>Ações Pendentes: 0</li>
        </ul>
      </div>
    </main>
  );
}