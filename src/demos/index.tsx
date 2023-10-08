import { StageDemo } from './demo-stage/index'

export default () => {
  return (
    <div style={{ width: 800, height: 600, margin: '0 auto' }}>
      <h1>Stage</h1>
      <StageDemo height={500} width={800} />
    </div>
  )
}
