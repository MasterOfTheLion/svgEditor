import { IStageApis } from './type'

// 舞台
export const Stage = ({
  width,
  height,
  children,
}: {
  width: number
  height: number
  children: any
}) => {
  return (
    <svg
      className="stage-container"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      style={{
        width,
        height,
        outline: '1px solid #ddd',
      }}
    >
      {children}
    </svg>
  )
}
