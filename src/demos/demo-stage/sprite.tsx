// 精灵
export const Sprite = ({
  x,
  y,
  children,
}: {
  x: number
  y: number
  children: any
}) => {
  return (
    <g className="sprite-container" transform={`translate(${x}, ${y})`}>
      {children}
    </g>
  )
}
