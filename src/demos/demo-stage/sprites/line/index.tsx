// 精灵
export const LineSprite = ({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number
  y1: number
  x2: number
  y2: number
}) => {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffa245" stroke-width="3" />
  )
}
